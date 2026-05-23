<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function one_line(string $value, int $maxLength): string
{
    $value = trim(strip_tags($value));
    $value = preg_replace('/[\r\n\t]+/u', ' ', $value) ?? '';
    return cut_text($value, $maxLength);
}

function plain_text(string $value, int $maxLength): string
{
    return cut_text(trim(strip_tags($value)), $maxLength);
}

function cut_text(string $value, int $maxLength): string
{
    return function_exists('mb_substr')
        ? mb_substr($value, 0, $maxLength)
        : substr($value, 0, $maxLength);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'method_not_allowed']);
}

$rawInput = file_get_contents('php://input');
if ($rawInput === false || strlen($rawInput) > 12000) {
    respond(400, ['ok' => false, 'error' => 'invalid_payload']);
}

$input = json_decode($rawInput, true);
if (!is_array($input)) {
    respond(400, ['ok' => false, 'error' => 'invalid_json']);
}

if (trim((string) ($input['website'] ?? '')) !== '') {
    respond(200, ['ok' => true]);
}

$name = one_line((string) ($input['name'] ?? ''), 100);
$phone = one_line((string) ($input['phone'] ?? ''), 30);
$service = one_line((string) ($input['service'] ?? ''), 120);
$budget = one_line((string) ($input['budget'] ?? ''), 40);
$comment = plain_text((string) ($input['comment'] ?? '-'), 800);
$language = one_line((string) ($input['language'] ?? 'ru'), 5);
$options = array_filter(array_map(
    static fn ($option): string => one_line((string) $option, 100),
    is_array($input['options'] ?? null) ? $input['options'] : []
));

if ($name === '' || $service === '' || !preg_match('/^\+998\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/', $phone)) {
    respond(422, ['ok' => false, 'error' => 'validation_failed']);
}

$config = [];
$configFile = __DIR__ . DIRECTORY_SEPARATOR . 'telegram-config.php';
if (is_file($configFile)) {
    $loadedConfig = require $configFile;
    if (is_array($loadedConfig)) {
        $config = $loadedConfig;
    }
}

$botToken = (string) (getenv('NUSRA_TELEGRAM_BOT_TOKEN') ?: ($config['bot_token'] ?? ''));
$chatId = (string) (getenv('NUSRA_TELEGRAM_CHAT_ID') ?: ($config['chat_id'] ?? ''));
if ($botToken === '' || $chatId === '') {
    respond(503, ['ok' => false, 'error' => 'telegram_not_configured']);
}
if (!preg_match('/^\d+:[A-Za-z0-9_-]+$/', $botToken) || !preg_match('/^-?\d+$/', $chatId)) {
    respond(503, ['ok' => false, 'error' => 'telegram_invalid_config']);
}

$message = implode("\n", [
    'New request from nusra.uz',
    '',
    'Name: ' . $name,
    'Phone: ' . $phone,
    'Language: ' . strtoupper($language),
    '',
    'Service: ' . $service,
    'Options: ' . ($options ? implode(', ', $options) : '-'),
    'Budget: ' . $budget,
    '',
    'Comment: ' . ($comment !== '' ? $comment : '-'),
]);

$url = 'https://api.telegram.org/bot' . $botToken . '/sendMessage';
$fields = http_build_query([
    'chat_id' => $chatId,
    'text' => $message,
    'disable_web_page_preview' => 'true',
]);

if (function_exists('curl_init')) {
    $curl = curl_init($url);
    curl_setopt_array($curl, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $fields,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 10,
        CURLOPT_HTTPHEADER => ['Content-Type: application/x-www-form-urlencoded'],
    ]);
    $telegramResponse = curl_exec($curl);
    $status = (int) curl_getinfo($curl, CURLINFO_HTTP_CODE);
    curl_close($curl);
} else {
    $context = stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
            'content' => $fields,
            'timeout' => 10,
            'ignore_errors' => true,
        ],
    ]);
    $telegramResponse = @file_get_contents($url, false, $context);
    $status = isset($http_response_header[0]) && preg_match('/\s(\d{3})\s/', $http_response_header[0], $match)
        ? (int) $match[1]
        : 0;
}

$telegramBody = is_string($telegramResponse) ? json_decode($telegramResponse, true) : null;
if ($status < 200 || $status >= 300 || !is_array($telegramBody) || !($telegramBody['ok'] ?? false)) {
    respond(502, ['ok' => false, 'error' => 'telegram_delivery_failed']);
}

respond(200, ['ok' => true]);
