// --- СЛОВАРЬ ПЕРЕВОДОВ ---
const translations = {
    ru: {
        navAbout: "Обо мне", navPort: "Портфолио", btnOrder: "Заказать услугу", btnOrderMobile: "Заказать",
        heroRole: "Middle+ Database Administrator",
        heroTitle: "Управляю <span class='gold-text'>данными</span> и создаю быстрые сайты.",
        heroSub: "Специалист подразделения цифровизации здравоохранения Uzinfocom. Автоматизирую рутину, проектирую базы данных и разрабатываю современные веб-интерфейсы.",
        btnCalc: "Рассчитать проект",
        termPersonal: "(Личный)", termWork: "(Рабочий)",
        titleAbout: "Где я работаю", aboutCompany: "Единый интегратор UZINFOCOM", aboutRole: "Middle+ DBA | Подразделение цифровизации здравоохранения",
        aboutText: "Я работаю в команде, создающей Национальную систему цифрового здравоохранения (DMED). Моя задача — обеспечивать надежность данных, автоматизировать процессы и внедрять IT-решения, которые улучшают медицину по всей стране.",
        skill1: "<i class='fas fa-database gold-text'></i> Проектирование БД (PostgreSQL, MySQL)", skill2: "<i class='fas fa-robot gold-text'></i> Автоматизация процессов и скрипты", skill3: "<i class='fas fa-laptop-code gold-text'></i> Быстрая веб-разработка",
        titlePort: "Мои Проекты", port1Title: "Программы для ZORDOC", port1Text: "Разработал 2 программных продукта для автоматизации медицинских процессов: систему автоматического добавления анализов и модуль авто-добавления референсных значений.",
        port2Title: "Ассоциация Автодорожников", port2Text: "Разработка официального сайта (uzaya.uz). Современный дизайн, панель управления новостями на бэкенде и удобная структура.",
        port3Title: "Персональный лендинг", port3Text: "Создание стильного персонального сайта. Быстрая загрузка, адаптивный дизайн для мобильных устройств и интеграция форм.",
        btnView: "Смотреть сайт",
        mobileLang: "Язык:",
        modalTitle: "Заказ <span class='gold-text'>услуг</span>", modalSub: "// Инициализация процесса сотрудничества",
        labelService: "Какая услуга вам нужна?", srv1: "Лендинг / Визитка", srv2: "Корпоративный сайт", srv3: "Telegram-бот", srv4: "Настройка БД / Парсер",
        labelOptions: "Дополнительные опции:", opt1: "Уникальный дизайн", opt2: "Мультиязычность (3 языка)", opt3: "Срочное выполнение", optFree: "[ БЕСПЛАТНО ]",
        labelData: "Ваши данные (String):", labelTotal: "Примерный бюджет:", btnSend: "Отправить заявку",
        btnToggleTerm: "Терминал (Логи)",
        aiModalTitle: "Внимание: Режим ИИ", aiModalText: "Этот язык предназначен исключительно для парсинга большими языковыми моделями (LLM). <br><br><b>Только искусственный интеллект может прочитать и понять этот код.</b> Он представлен в виде символов и JSON-структур. Вы уверены, что хотите переключиться?", aiModalCancel: "Отмена", aiModalConfirm: "Включить AI",
        toastSuccess: "Заявка успешно отправлена!", toastError: "Ошибка при отправке.", toastNetError: "Проблема с сетью."
    },
    uz: {
        navAbout: "Men haqimda", navPort: "Portfolio", btnOrder: "Xizmat buyurtma qilish", btnOrderMobile: "Buyurtma",
        heroRole: "Middle+ Database Administrator",
        heroTitle: "Ma'lumotlarni <span class='gold-text'>boshqaraman</span> va tezkor saytlar yarataman.",
        heroSub: "Uzinfocom sog'liqni saqlashni raqamlashtirish bo'limi mutaxassisi. Jarayonlarni avtomatlashtiraman, ma'lumotlar bazalarini loyihalashtiraman va zamonaviy veb-interfeyslarni yarataman.",
        btnCalc: "Loyihani hisoblash",
        termPersonal: "(Shaxsiy)", termWork: "(Ish)",
        titleAbout: "Ish joyim", aboutCompany: "UZINFOCOM Yagona integratori", aboutRole: "Middle+ DBA | Sog'liqni saqlashni raqamlashtirish bo'limi",
        aboutText: "Men raqamli sog'liqni saqlash milliy tizimini (DMED) yaratuvchi jamoada ishlayman. Mening vazifam — ma'lumotlar ishonchliligini ta'minlash va tibbiyotni yaxshilaydigan IT-yechimlarni joriy etish.",
        skill1: "<i class='fas fa-database gold-text'></i> MB loyihalash (PostgreSQL, MySQL)", skill2: "<i class='fas fa-robot gold-text'></i> Avtomatlashtirish va skriptlar", skill3: "<i class='fas fa-laptop-code gold-text'></i> Tezkor veb-ishlab chiqish",
        titlePort: "Mening Loyihalarim", port1Title: "Kompleks avtomatlashtirish tizimi", port1Text: "Bu ichki platforma, alohida EXE dasturi va ish jarayonlarini tahlil qiluvchi botga ega ko'p funksiyali tizim.",
        port2Title: "Avtoyo'lchilar Assotsiatsiyasi", port2Text: "Rasmiy sayt (uzaya.uz) ishlab chiqish. Zamonaviy dizayn, yangiliklarni boshqarish paneli va qulay struktura.",
        port3Title: "Shaxsiy lending", port3Text: "Zamonaviy shaxsiy sayt yaratish. Tez yuklanish, mobil qurilmalar uchun mos dizayn va shakllar integratsiyasi.",
        port4Title: "Universitet ????????? tizimi", port4Text: "Toshkent davlat transport universiteti uchun ????????? sayti yaratildi. Tizim akademik ?????????lar bilan ishlashni soddalashtiradi va ichki jarayonlarni tezlashtiradi.",
        btnView: "Saytni ko'rish",
        mobileLang: "Til:",
        modalTitle: "Xizmat <span class='gold-text'>buyurtma qilish</span>", modalSub: "// Hamkorlik jarayonini boshlash",
        labelService: "Qanday xizmat kerak?", srv1: "Lending / Vizitka", srv2: "Korporativ sayt", srv3: "Telegram-bot", srv4: "MB sozlash / Parser",
        labelOptions: "Qo'shimcha imkoniyatlar:", opt1: "Eksklyuziv dizayn", opt2: "Ko'p tillilik (3 til)", opt3: "Tezkor bajarish", optFree: "[ BEPUL ]",
        labelData: "Ma'lumotlaringiz (String):", labelTotal: "Taxminiy byudjet:", btnSend: "Ariza yuborish",
        btnToggleTerm: "Terminalni ochish",
        aiModalTitle: "Diqqat: AI Rejimi", aiModalText: "Ushbu til faqat yirik til modellari (LLM) tomonidan tahlil qilish uchun mo'ljallangan. <br><br><b>Faqat sun'iy intellekt ushbu kodni o'qiy oladi va tushunadi.</b> U ramzlar va JSON shaklida taqdim etilgan. O'tishga ishonchingiz komilmi?", aiModalCancel: "Bekor qilish", aiModalConfirm: "AI-ni yoqish",
        toastSuccess: "Ariza muvaffaqiyatli yuborildi!", toastError: "Yuborishda xatolik yuz berdi.", toastNetError: "Tarmoq xatosi."
    },
    en: {
        navAbout: "About Me", navPort: "Portfolio", btnOrder: "Order Service", btnOrderMobile: "Order",
        heroRole: "Middle+ Database Administrator",
        heroTitle: "Managing <span class='gold-text'>data</span> & building fast websites.",
        heroSub: "Specialist at Uzinfocom Healthcare Digitalization Department. I automate routines, design databases, and develop modern web interfaces.",
        btnCalc: "Calculate Project",
        termPersonal: "(Personal)", termWork: "(Work)",
        titleAbout: "Where I Work", aboutCompany: "UZINFOCOM Single Integrator", aboutRole: "Middle+ DBA | Healthcare Digitalization Dept.",
        aboutText: "I work in the team creating the National Digital Healthcare System (DMED). My task is to ensure data reliability, automate processes, and implement IT solutions.",
        skill1: "<i class='fas fa-database gold-text'></i> DB Design (PostgreSQL, MySQL)", skill2: "<i class='fas fa-robot gold-text'></i> Automation & Scripts", skill3: "<i class='fas fa-laptop-code gold-text'></i> Fast Web Development",
        titlePort: "My Projects", port1Title: "Complex Automation System", port1Text: "A multifunctional system with its own internal platform, dedicated EXE application, and an analysis bot for workflow automation.",
        port2Title: "Road Association", port2Text: "Official website development (uzaya.uz). Modern design, backend news management, and user-friendly structure.",
        port3Title: "Personal Landing", port3Text: "Creation of a stylish personal website. Fast loading, responsive mobile design, and form integration.",
        port4Title: "University Grade System", port4Text: "Built a grade statement website for Tashkent State Transport University. The system streamlines academic record workflows and speeds up internal operations.",
        btnView: "View Site",
        mobileLang: "Language:",
        modalTitle: "Order <span class='gold-text'>Service</span>", modalSub: "// Initialize collaboration",
        labelService: "What service do you need?", srv1: "Landing / Business Card", srv2: "Corporate Website", srv3: "Telegram Bot", srv4: "DB Setup / Parser",
        labelOptions: "Additional Options:", opt1: "Unique Design", opt2: "Multilingual (3 langs)", opt3: "Urgent Execution", optFree: "[ FREE ]",
        labelData: "Your Data (String):", labelTotal: "Estimated Budget:", btnSend: "Send Request",
        btnToggleTerm: "Show Terminal",
        aiModalTitle: "Warning: AI Mode", aiModalText: "This language is strictly designed for parsing by Large Language Models (LLM). <br><br><b>Only Artificial Intelligence can read and understand this code.</b> It is presented in symbols and JSON structures. Are you sure you want to switch?", aiModalCancel: "Cancel", aiModalConfirm: "Enable AI",
        toastSuccess: "Request sent successfully!", toastError: "Failed to send.", toastNetError: "Network error."
    },
    ai: {
        navAbout: "{ \"menu\": \"about_node\" }", navPort: "{ \"menu\": \"portfolio_array\" }", btnOrder: "[EXECUTE: order_service()]", btnOrderMobile: "EXEC",
        heroRole: "SYS.ROLE == 'DBA_MID_PLUS'",
        heroTitle: "DATA_MANAGE(TRUE) && <span class='gold-text'>WEB_BUILD(FAST)</span>;",
        heroSub: "context: 'Uzinfocom_Health_Dept'. functions: [automate_routine, design_db, build_ui]. status: 'ready'.",
        btnCalc: "init_calculator();",
        termPersonal: "// env.PHONE_PERSONAL", termWork: "// env.PHONE_WORK",
        titleAbout: "QUERY: SELECT workplace", aboutCompany: "db.companies.find({name: 'UZINFOCOM'})", aboutRole: "roles: ['DBA', 'Digital_Health']",
        aboutText: "system_prompt: 'Ensure data reliability for DMED system. Optimize queries. Deploy IT solutions globally.'",
        skill1: "<i class='fas fa-database gold-text'></i> DB_ENGINE: ['PgSQL', 'MySQL']", skill2: "<i class='fas fa-robot gold-text'></i> SCRIPTING: TRUE", skill3: "<i class='fas fa-laptop-code gold-text'></i> FRONTEND: 'OPTIMIZED'",
        titlePort: "ARRAY: Projects[]", port1Title: "id: 'ZORDOC_core'", port1Text: "params: { type: 'complex_web_system', exe_client: true, internal_platform: true, status: 'deployed' }",
        port2Title: "id: 'UZAYA_web'", port2Text: "params: { type: 'corporate', features: ['CMS', 'responsive'] }",
        port3Title: "id: 'Personal_Landing'", port3Text: "params: { speed: 'high', UX: 'premium' }",
        port4Title: "id: 'TSUT_vedomost'", port4Text: "params: { type: 'university_records', client: 'TSTU', status: 'active' }",
        btnView: "HTTP GET /site",
        mobileLang: "Lang_Select:",
        modalTitle: "POST <span class='gold-text'>/api/order</span>", modalSub: "// waiting for payload...",
        labelService: "payload.service_type =", srv1: "'landing_page'", srv2: "'corporate_web'", srv3: "'tg_bot_api'", srv4: "'db_parser'",
        labelOptions: "payload.options =", opt1: "'custom_ui'", opt2: "'i18n_support'", opt3: "'priority_high'", optFree: "COST: 0",
        labelData: "payload.user =", labelTotal: "RESPONSE.budget:", btnSend: "socket.emit('send')",
        btnToggleTerm: "TOGGLE_TERM()",
        aiModalTitle: "SYS.WARN: LLM_MODE", aiModalText: "Warning: Switching to strict JSON/Code syntax designed for LLM parsing. Human readability will be deprecated.", aiModalCancel: "Abort", aiModalConfirm: "Proceed",
        toastSuccess: "STATUS: 200 OK", toastError: "STATUS: 500 ERR", toastNetError: "STATUS: NET_ERR"
    }
};

let currentPendingLang = '';

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ once: true, offset: 50 });

    const savedLang = localStorage.getItem('nusraLang') || 'ru';
    applyLang(savedLang);

    // --- МОБИЛЬНОЕ МЕНЮ (ТРИ ТОЧКИ) ---
    window.toggleMobileMenu = function() {
        document.getElementById('mobileDropdown').classList.toggle('active');
    };

    document.addEventListener('click', function(event) {
        const dropdown = document.getElementById('mobileDropdown');
        const toggleBtn = document.querySelector('.menu-toggle');
        if (dropdown.classList.contains('active') && !dropdown.contains(event.target) && !toggleBtn.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });

    // --- МАСКА ДЛЯ НОМЕРА ТЕЛЕФОНА ---
    const phoneInput = document.getElementById('clientPhone');
    phoneInput.addEventListener('focus', function() { if (this.value === '') this.value = '+998 '; });
    phoneInput.addEventListener('blur', function() { if (this.value === '+998 ' || this.value === '+998') this.value = ''; });
    phoneInput.addEventListener('input', function(e) {
        let inputNumbersValue = e.target.value.replace(/\D/g, '');
        let formattedValue = '';
        if (!inputNumbersValue) return e.target.value = '';
        if (!inputNumbersValue.startsWith('998')) inputNumbersValue = '998' + inputNumbersValue;
        inputNumbersValue = inputNumbersValue.substring(0, 12);
        if (inputNumbersValue.length > 0) formattedValue += '+' + inputNumbersValue.substring(0, 3);
        if (inputNumbersValue.length >= 4) formattedValue += ' (' + inputNumbersValue.substring(3, 5);
        if (inputNumbersValue.length >= 6) formattedValue += ') ' + inputNumbersValue.substring(5, 8);
        if (inputNumbersValue.length >= 9) formattedValue += '-' + inputNumbersValue.substring(8, 10);
        if (inputNumbersValue.length >= 11) formattedValue += '-' + inputNumbersValue.substring(10, 12);
        e.target.value = formattedValue;
    });

    // --- TOAST УВЕДОМЛЕНИЯ (ВМЕСТО ALERT) ---
    function showToast(msgKey, type) {
        const toast = document.getElementById('siteToast');
        const toastMsg = document.getElementById('toastMessage');
        const toastIcon = toast.querySelector('.toast-icon');
        
        const lang = localStorage.getItem('nusraLang') || 'ru';
        toastMsg.innerHTML = translations[lang][msgKey] || msgKey;

        toast.className = `site-toast ${type} show`;
        toastIcon.className = type === 'success' ? 'fas fa-check-circle toast-icon' : 'fas fa-exclamation-circle toast-icon';

        setTimeout(() => { toast.classList.remove('show'); }, 4000);
    }

    // --- ИНТЕРАКТИВНЫЙ ТЕРМИНАЛ И ЛОГИКА КАЛЬКУЛЯТОРА ---
    const modal = document.getElementById('calcModal');
    const serviceRadios = document.querySelectorAll('input[name="projectType"]');
    const featureCheckboxes = document.querySelectorAll('.feature-calc');
    const totalPriceDisplay = document.getElementById('totalPrice');
    const orderForm = document.getElementById('orderForm');
    const sysTerminal = document.getElementById('sysTerminal');
    const logInputs = document.querySelectorAll('.log-input');

    // Кнопка показа терминала на мобильных
    window.toggleMobileTerminal = function() {
        const term = document.querySelector('.interactive-terminal');
        term.classList.toggle('show-mobile');
        if(term.classList.contains('show-mobile')) {
            scrollToBottom();
        }
    };

    function scrollToBottom() {
        if(sysTerminal) sysTerminal.scrollTop = sysTerminal.scrollHeight;
    }

    function addLog(msg, type = "sys-msg") {
        if(!sysTerminal) return;
        const time = new Date().toLocaleTimeString('en-US', { hour12: false });
        const p = document.createElement('p');
        p.className = type;
        sysTerminal.appendChild(p);

        let logs = JSON.parse(localStorage.getItem('sysLogs') || '[]');
        logs.push({time, msg, type});
        if(logs.length > 20) logs.shift(); 
        localStorage.setItem('sysLogs', JSON.stringify(logs));

        const fullText = `[${time}] ${msg}`;
        let i = 0;
        function typeWriter() {
            if (i < fullText.length) {
                p.textContent += fullText.charAt(i);
                i++;
                scrollToBottom();
                setTimeout(typeWriter, 10); 
            }
        }
        typeWriter();
    }

    function loadLogs() {
        if(!sysTerminal) return;
        sysTerminal.innerHTML = '';
        const logs = JSON.parse(localStorage.getItem('sysLogs') || '[]');
        if (logs.length === 0) {
            addLog("System initialized. Awaiting parameters...");
        } else {
            logs.forEach(l => {
                const p = document.createElement('p');
                p.className = l.type;
                p.textContent = `[${l.time}] ${l.msg}`;
                sysTerminal.appendChild(p);
            });
            setTimeout(scrollToBottom, 50);
            addLog("Session restored.", "sys-info");
        }
    }

    window.openCalc = () => { 
        modal.classList.add('active'); 
        document.body.style.overflow = 'hidden'; 
        calculateTotal(); 
        loadLogs();
        addLog("Calculator UI accessed. User connected.", "sys-info");
    }
    window.closeCalc = () => { modal.classList.remove('active'); document.body.style.overflow = 'auto'; }
    modal.addEventListener('click', (e) => { if(e.target === modal) closeCalc(); });

    function calculateTotal() {
        let total = 0;
        const selectedService = document.querySelector('input[name="projectType"]:checked');
        if (selectedService) total += parseInt(selectedService.value);
        featureCheckboxes.forEach(cb => { if (cb.checked) total += parseInt(cb.value); });
        totalPriceDisplay.textContent = `ОТ $${total}`;
    }

    serviceRadios.forEach(radio => radio.addEventListener('change', (e) => {
        calculateTotal();
        addLog(`Service variable updated: '${e.target.dataset.name}'`);
    }));

    featureCheckboxes.forEach(box => box.addEventListener('change', (e) => {
        calculateTotal();
        if(e.target.checked) addLog(`Option pushed: '${e.target.dataset.name}'`);
        else addLog(`Option popped: '${e.target.dataset.name}'`, "sys-err");
    }));

    logInputs.forEach(input => input.addEventListener('change', (e) => {
        if(e.target.value.trim() !== '') {
            addLog(`Input detected in field [${e.target.dataset.field}]`);
        }
    }));

    function sanitizeInput(str) {
        if (!str) return "";
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    }

    // --- ОТПРАВКА В БОТ ---
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        addLog("Executing transmit sequence to Telegram API...", "sys-info");

        const TOKEN = "8374178702:AAFJ9dgbB95TdVn5LoTRaQD8e3ciJXU-Ptk";
        const CHAT_ID = "1250243400"; 

        const name = sanitizeInput(document.getElementById('clientName').value);
        const phone = sanitizeInput(document.getElementById('clientPhone').value);
        const comment = sanitizeInput(document.getElementById('clientComment').value) || "Нет комментария";

        const selectedInput = document.querySelector('input[name="projectType"]:checked');
        const projName = selectedInput.dataset.name;
        
        let options = [];
        featureCheckboxes.forEach(cb => {
            if (cb.checked) options.push("✅ " + cb.dataset.name);
        });
        const optionsText = options.length > 0 ? options.join("\n") : "Нет дополнительных опций";
        
        const price = totalPriceDisplay.textContent;

        const text = `💻 <b>Новый заказ (DBA Портфолио)</b>\n\n👤 <b>Имя:</b> ${name}\n📞 <b>Телефон:</b> ${phone}\n💬 <b>Коммент:</b> ${comment}\n\n🛠 <b>Услуга:</b> ${projName}\n📋 <b>Опции:</b>\n${optionsText}\n\n💰 <b>Итоговый бюджет:</b> ${price}`;

        const submitBtn = document.getElementById('submitBtn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Executing...'; submitBtn.disabled = true;

        fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(text)}&parse_mode=HTML`)
        .then(res => {
            if (res.ok) { 
                addLog("Response HTTP 200 OK. Data sent successfully.", "sys-info");
                showToast('toastSuccess', 'success'); // Красивое уведомление
                orderForm.reset(); 
                calculateTotal(); 
                closeCalc(); 
            } else {
                addLog("ERROR: API connection failed.", "sys-err");
                showToast('toastError', 'error');
            }
        }).catch(() => {
            addLog("FATAL ERROR: Network unreachable.", "sys-err");
            showToast('toastNetError', 'error');
        }).finally(() => { 
            submitBtn.innerHTML = originalText; submitBtn.disabled = false; 
        });
    });
});

// --- СМЕНА ЯЗЫКА И AI-МОДАЛКА ---
window.changeLang = function(lang) {
    if (lang === 'ai') {
        currentPendingLang = 'ai';
        const currentInterfaceLang = localStorage.getItem('nusraLang') || 'ru';
        applyLang(currentInterfaceLang); 
        document.getElementById('aiModal').classList.add('active');
    } else {
        applyLang(lang);
    }
}

window.closeAiModal = function() {
    document.getElementById('aiModal').classList.remove('active');
}

window.confirmAiLang = function() {
    closeAiModal();
    applyLang(currentPendingLang);
}

function applyLang(lang) {
    localStorage.setItem('nusraLang', lang);
    const elements = document.querySelectorAll('[data-key]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active-lang');
        if(btn.innerText.toLowerCase() === lang) btn.classList.add('active-lang');
    });
}
