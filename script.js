const ruTexts = {
    navAbout: 'Обо мне', navPort: 'Портфолио', btnOrder: 'Рассчитать проект', btnOrderMobile: 'Рассчитать',
    heroRole: 'Middle+ Database Administrator',
    heroTitle: "Управляю данными и создаю <span class='gold-text'>быстрые сайты</span>.",
    heroSub: 'Специалист подразделения цифровизации здравоохранения UZINFOCOM. Автоматизирую рутину, проектирую базы данных и разрабатываю современные веб-интерфейсы.',
    btnCalc: 'Рассчитать проект',
    termPersonal: '(Личный)', termWork: '(Рабочий)',
    highlight1Label: 'Текущая роль', highlight1Value: 'Специалист цифровизации',
    highlight2Label: 'Предыдущий опыт', highlight2Value: 'DBA и базы данных',
    highlight3Label: 'Образование', highlight3Value: 'ТГТрУ',
    highlight4Label: 'Фокус', highlight4Value: 'Веб- и внутренние системы',
    titleAbout: 'Где я работаю', aboutCompany: 'Единый интегратор UZINFOCOM', aboutRole: 'Middle+ DBA | Подразделение цифровизации здравоохранения',
    aboutText: 'Я работаю в команде, создающей Национальную систему цифрового здравоохранения (DMED). Моя задача — обеспечивать надежность данных, автоматизировать процессы и внедрять IT-решения, которые улучшают медицину по всей стране.',
    skill1: "<i class='fas fa-link gold-text'></i> Проектирование БД и архитектуры цифровых решений",
    skill2: "<i class='fas fa-database gold-text'></i> Опыт DBA: PostgreSQL, MySQL, структура данных и надежность",
    skill3: "<i class='fas fa-robot gold-text'></i> Автоматизация процессов, скрипты, EXE-приложения и веб-интерфейсы",
    journeyTitle: 'Карьерный путь', journeyText: 'Путь от DBA к разработке и интеграции решений: от глубокого погружения в данные до создания полноценных цифровых продуктов.',
    educationTitle: 'Образование', educationText: 'Студент Ташкентского государственного транспортного университета. Совмещаю обучение с реальной проектной практикой.',
    sectorTitle: 'Опыт', sectorText: 'Работаю в цифровизации здравоохранения, государственных проектах, веб-разработке и внутренней автоматизации.',
    titleCompetencies: 'Компетенции',
    comp1Title: 'Проектирование решений', comp1Text: 'Анализирую процессы, проектирую архитектуру, продумываю интеграции, API и структуру данных.',
    comp2Title: 'Базы данных', comp2Text: 'Как DBA выстраиваю надежные модели данных, оптимизирую запросы и контролирую качество информации.',
    comp3Title: 'Автоматизация', comp3Text: 'Автоматизирую рутину, создаю ботов, EXE-приложения и внутренние сервисы, которые ускоряют работу команды.',
    comp4Title: 'Веб и внутренние панели', comp4Text: 'Разрабатываю интерфейсы, админ-панели и рабочие веб-модули для подразделений и процессов.',
    titleResults: 'Результаты',
    result1Title: 'DMED', result1Text: 'Участвую в развитии решений для национальной медицинской системы DMED, где важны надежность данных и стабильность процессов.',
    result2Title: 'Веб-решения', result2Text: 'Создаю сайты и внутренние платформы с акцентом на скорость, удобство и понятную структуру.',
    result3Title: 'Интеграции', result3Text: 'Связываю базы данных, API, ботов, внутренние сервисы и пользовательские интерфейсы в единую систему.',
    result4Title: 'Автоматизация', result4Text: 'Снижаю объем ручной работы за счет автоматизации отчетов, обмена данными и внутренних процессов.',
    titleFormats: 'Форматы проектов',
    format1: 'Внутренние системы', format2: 'Интеграционные модули', format3: 'Telegram-боты', format4: 'EXE/Desktop решения', format5: 'Веб-платформы и панели', format6: 'Парсеры и автоматизация',
    titleProcess: 'Как я работаю',
    process1Title: 'Анализ', process1Text: 'Изучаю бизнес-процесс, цели, структуру данных и текущие ограничения.',
    process2Title: 'Проектирование', process2Text: 'Собираю архитектуру решения: сервисы, связи, API, БД, роли и рабочие сценарии.',
    process3Title: 'Реализация', process3Text: 'Разрабатываю модули, интерфейсы, ботов и внутренние инструменты в единой системе.',
    process4Title: 'Запуск и поддержка', process4Text: 'Тестирую, внедряю, улучшаю и поддерживаю стабильную работу решения.',
    titlePort: 'Мои проекты',
    port1Title: 'Система цифровизации здравоохранения', port1Text: 'Комплексная платформа для медицинских процессов с внутренними модулями, автоматизацией и рабочими инструментами для команд.',
    port2Badge: 'Веб-разработка', port2Title: 'Ассоциация дорог', port2Text: 'Официальный сайт с современным дизайном, административной логикой и удобной структурой публикации контента.',
    port3Badge: 'Личный сайт', port3Title: 'Персональный лендинг', port3Text: 'Быстрый адаптивный сайт с акцентом на подачу, читаемость и современный визуальный стиль.',
    port4Title: 'Система ведомостей для университета', port4Text: 'Веб-сервис для автоматизации академических и внутренних процессов Ташкентского государственного транспортного университета.',
    btnView: 'Открыть сайт', mobileLang: 'Язык:', footerText: 'Nusra',
    modalTitle: "Рассчитать <span class='gold-text'>проект</span>", modalSub: '// Услуги по базам данных, автоматизации и разработке',
    labelService: 'Какая услуга вам нужна?', srv1: 'Лендинг / визитка', srv2: 'Корпоративный сайт', srv3: 'Telegram-бот', srv4: 'Настройка БД / парсер', srv5: 'API / интеграция сервисов', srv6: 'Внутренняя система / CRM / ERP модуль',
    labelOptions: 'Дополнительные опции:', opt1: 'Уникальный дизайн', opt2: 'Мультиязычность (3 языка)', opt3: 'Срочное выполнение', optFree: '[ бесплатно ]',
    labelData: 'Ваши данные (String):', labelTotal: 'Примерный бюджет:', btnSend: 'Отправить заявку', btnToggleTerm: 'Терминал (логи)',
    aiModalTitle: 'Внимание: AI режим', aiModalText: 'Этот язык предназначен только для чтения и парсинга большими языковыми моделями (LLM). <br><br><b>Обычному пользователю интерфейс будет выглядеть как системный код.</b> Вы уверены, что хотите переключиться?', aiModalCancel: 'Отмена', aiModalConfirm: 'Включить AI',
    toastSuccess: 'Заявка успешно отправлена!', toastError: 'Не удалось отправить заявку.', toastNetError: 'Ошибка сети.',
    placeholderName: 'Имя / Name', placeholderComment: 'Комментарий / /* Comment */'
};

const uzTexts = {
    navAbout: 'Men haqimda', navPort: 'Portfolio', btnOrder: 'Loyihani hisoblash', btnOrderMobile: 'Hisoblash',
    heroRole: 'Middle+ Database Administrator',
    heroTitle: "Ma'lumotlarni boshqaraman va <span class='gold-text'>tezkor saytlar</span> yarataman.",
    heroSub: 'UZINFOCOM sog\'liqni saqlashni raqamlashtirish bo\'limi mutaxassisiman. Rutina ishlarni avtomatlashtiraman, ma\'lumotlar bazalarini loyihalayman va zamonaviy veb-interfeyslar ishlab chiqaman.',
    btnCalc: 'Loyihani hisoblash',
    termPersonal: '(Shaxsiy)', termWork: '(Ish)',
    highlight1Label: 'Joriy rol', highlight1Value: 'Raqamlashtirish mutaxassisi',
    highlight2Label: 'Oldingi tajriba', highlight2Value: 'DBA va ma\'lumotlar bazalari',
    highlight3Label: 'Ta\'lim', highlight3Value: 'TDTU',
    highlight4Label: 'Yo\'nalish', highlight4Value: 'Veb va ichki tizimlar',
    titleAbout: 'Qayerda ishlayman', aboutCompany: 'Yagona integrator UZINFOCOM', aboutRole: 'Middle+ DBA | Sog\'liqni saqlashni raqamlashtirish bo\'limi',
    aboutText: 'Men Milliy sog\'liqni saqlashni raqamlashtirish tizimi (DMED) ustida ishlaydigan jamoada faoliyat yuritaman. Vazifam ma\'lumotlar ishonchliligini ta\'minlash, jarayonlarni avtomatlashtirish va mamlakat bo\'ylab tibbiyot sifatini yaxshilaydigan IT-yechimlarni joriy etishdir.',
    skill1: "<i class='fas fa-link gold-text'></i> MB va raqamli yechimlar arxitekturasini loyihalash",
    skill2: "<i class='fas fa-database gold-text'></i> DBA tajribasi: PostgreSQL, MySQL, ma\'lumotlar tuzilmasi va ishonchlilik",
    skill3: "<i class='fas fa-robot gold-text'></i> Jarayonlarni avtomatlashtirish, skriptlar, EXE-ilovalar va veb-interfeyslar",
    journeyTitle: 'Karyera yo\'li', journeyText: 'DBA dan yechimlar ishlab chiqish va integratsiyaga: ma\'lumotlar bilan chuqur ishlashdan to to\'liq raqamli mahsulotlar yaratishgacha.',
    educationTitle: 'Ta\'lim', educationText: 'Toshkent davlat transport universiteti talabasi. O\'qishni real loyiha amaliyoti bilan birga olib boraman.',
    sectorTitle: 'Tajriba', sectorText: 'Sog\'liqni saqlashni raqamlashtirish, davlat loyihalari, veb-ishlab chiqish va ichki avtomatlashtirish yo\'nalishlarida ishlayman.',
    titleCompetencies: 'Kompetensiyalar',
    comp1Title: 'Yechimlarni loyihalash', comp1Text: 'Jarayonlarni tahlil qilaman, arxitekturani quraman, integratsiyalar, API va ma\'lumotlar tuzilmasini rejalashtiraman.',
    comp2Title: 'Ma\'lumotlar bazalari', comp2Text: 'DBA sifatida ishonchli ma\'lumotlar modellarini quraman, so\'rovlarni optimallashtiraman va ma\'lumotlar sifatini nazorat qilaman.',
    comp3Title: 'Avtomatlashtirish', comp3Text: 'Rutina ishlarni avtomatlashtiraman, botlar, EXE-ilovalar va jamoa ishini tezlashtiradigan ichki servislar yarataman.',
    comp4Title: 'Veb va ichki panellar', comp4Text: 'Bo\'limlar va jarayonlar uchun interfeyslar, admin-panellar va ishchi veb-modullar ishlab chiqaman.',
    titleResults: 'Natijalar',
    result1Title: 'DMED', result1Text: 'DMED milliy tibbiy tizimi uchun yechimlarni rivojlantirishda qatnashaman, bu yerda ma\'lumotlar ishonchliligi va jarayonlar barqarorligi muhim.',
    result2Title: 'Veb-yechimlar', result2Text: 'Tezlik, qulaylik va aniq tuzilishga urg\'u berilgan saytlar hamda ichki platformalarni yarataman.',
    result3Title: 'Integratsiyalar', result3Text: 'Ma\'lumotlar bazalari, API, botlar, ichki servislar va foydalanuvchi interfeyslarini yagona tizimga birlashtiraman.',
    result4Title: 'Avtomatlashtirish', result4Text: 'Hisobotlar, ma\'lumot almashinuvi va ichki jarayonlarni avtomatlashtirish orqali qo\'lda bajariladigan ishlarni kamaytiraman.',
    titleFormats: 'Loyiha formatlari',
    format1: 'Ichki tizimlar', format2: 'Integratsion modullar', format3: 'Telegram-botlar', format4: 'EXE/Desktop yechimlar', format5: 'Veb-platformalar va panellar', format6: 'Parserlar va avtomatlashtirish',
    titleProcess: 'Qanday ishlayman',
    process1Title: 'Tahlil', process1Text: 'Biznes jarayonini, maqsadlarni, ma\'lumotlar tuzilmasini va mavjud cheklovlarni o\'rganaman.',
    process2Title: 'Loyihalash', process2Text: 'Yechim arxitekturasini tuzaman: servislar, bog\'lanishlar, API, MB, rollar va ish ssenariylari.',
    process3Title: 'Amalga oshirish', process3Text: 'Modullar, interfeyslar, botlar va ichki vositalarni yagona tizim sifatida ishlab chiqaman.',
    process4Title: 'Ishga tushirish va qo\'llab-quvvatlash', process4Text: 'Sinovdan o\'tkazaman, joriy qilaman, takomillashtiraman va yechimning barqaror ishlashini ta\'minlayman.',
    titlePort: 'Mening loyihalarim',
    port1Title: 'Sog\'liqni saqlashni raqamlashtirish tizimi', port1Text: 'Tibbiy jarayonlar uchun ichki modullar, avtomatlashtirish va jamoalar uchun ishchi vositalarga ega kompleks platforma.',
    port2Badge: 'Veb-ishlab chiqish', port2Title: 'Yo\'llar assotsiatsiyasi', port2Text: 'Zamonaviy dizayn, administrativ mantiq va kontentni qulay joylashtirish tuzilmasiga ega rasmiy sayt.',
    port3Badge: 'Shaxsiy sayt', port3Title: 'Shaxsiy lending', port3Text: 'Taqdimot, o\'qish qulayligi va zamonaviy vizual uslubga urg\'u berilgan tezkor moslashuvchan sayt.',
    port4Title: 'Universitet vedomost tizimi', port4Text: 'Toshkent davlat transport universitetining akademik va ichki jarayonlarini avtomatlashtirish uchun veb-servis.',
    btnView: 'Saytni ochish', mobileLang: 'Til:', footerText: 'Nusra',
    modalTitle: "<span class='gold-text'>Loyihani</span> hisoblash", modalSub: '// Ma\'lumotlar bazalari, avtomatlashtirish va ishlab chiqish bo\'yicha xizmatlar',
    labelService: 'Sizga qaysi xizmat kerak?', srv1: 'Lending / vizitka', srv2: 'Korporativ sayt', srv3: 'Telegram-bot', srv4: 'MB sozlash / parser', srv5: 'API / servis integratsiyasi', srv6: 'Ichki tizim / CRM / ERP modul',
    labelOptions: 'Qo\'shimcha opsiyalar:', opt1: 'Noyob dizayn', opt2: 'Ko\'p tillilik (3 til)', opt3: 'Shoshilinch bajarish', optFree: '[ bepul ]',
    labelData: 'Ma\'lumotlaringiz (String):', labelTotal: 'Taxminiy budjet:', btnSend: 'So\'rov yuborish', btnToggleTerm: 'Terminal (loglar)',
    aiModalTitle: 'Diqqat: AI rejimi', aiModalText: 'Bu til faqat katta til modellari (LLM) tomonidan o\'qish va tahlil qilish uchun mo\'ljallangan. <br><br><b>Oddiy foydalanuvchi uchun interfeys tizim kodi kabi ko\'rinadi.</b> Haqiqatan ham o\'tmoqchimisiz?', aiModalCancel: 'Bekor qilish', aiModalConfirm: 'AI ni yoqish',
    toastSuccess: 'So\'rov muvaffaqiyatli yuborildi!', toastError: 'So\'rovni yuborib bo\'lmadi.', toastNetError: 'Tarmoq xatosi.',
    placeholderName: 'Ism / Name', placeholderComment: 'Izoh / /* Comment */'
};

const enTexts = {
    navAbout: 'About Me', navPort: 'Portfolio', btnOrder: 'Calculate Project', btnOrderMobile: 'Calculate',
    heroRole: 'Middle+ Database Administrator',
    heroTitle: "I manage data and build <span class='gold-text'>fast websites</span>.",
    heroSub: 'I am a specialist in the healthcare digitalization division at UZINFOCOM. I automate routine work, design databases, and develop modern web interfaces.',
    btnCalc: 'Calculate Project',
    termPersonal: '(Personal)', termWork: '(Work)',
    highlight1Label: 'Current role', highlight1Value: 'Digitalization specialist',
    highlight2Label: 'Previous experience', highlight2Value: 'DBA and databases',
    highlight3Label: 'Education', highlight3Value: 'TSTU',
    highlight4Label: 'Focus', highlight4Value: 'Web and internal systems',
    titleAbout: 'Where I Work', aboutCompany: 'Unified Integrator UZINFOCOM', aboutRole: 'Middle+ DBA | Healthcare Digitalization Division',
    aboutText: 'I work in the team building the National Digital Healthcare System (DMED). My role is to ensure data reliability, automate processes, and implement IT solutions that improve healthcare across the country.',
    skill1: "<i class='fas fa-link gold-text'></i> Database design and digital solution architecture",
    skill2: "<i class='fas fa-database gold-text'></i> DBA experience: PostgreSQL, MySQL, data structure and reliability",
    skill3: "<i class='fas fa-robot gold-text'></i> Process automation, scripts, EXE applications and web interfaces",
    journeyTitle: 'Career Path', journeyText: 'From DBA to solution development and integration: from deep data work to building complete digital products.',
    educationTitle: 'Education', educationText: 'Student at Tashkent State Transport University. I combine study with real project practice.',
    sectorTitle: 'Experience', sectorText: 'I work in healthcare digitalization, government projects, web development, and internal automation.',
    titleCompetencies: 'Competencies',
    comp1Title: 'Solution Design', comp1Text: 'I analyze processes, design architecture, and plan integrations, APIs, and data structures.',
    comp2Title: 'Databases', comp2Text: 'As a DBA, I build reliable data models, optimize queries, and control data quality.',
    comp3Title: 'Automation', comp3Text: 'I automate routine work and build bots, EXE applications, and internal services that speed up the team.',
    comp4Title: 'Web and Internal Panels', comp4Text: 'I develop interfaces, admin panels, and working web modules for departments and processes.',
    titleResults: 'Results',
    result1Title: 'DMED', result1Text: 'I contribute to solutions for the national DMED medical system, where data reliability and process stability are critical.',
    result2Title: 'Web Solutions', result2Text: 'I build websites and internal platforms with a focus on speed, usability, and clear structure.',
    result3Title: 'Integrations', result3Text: 'I connect databases, APIs, bots, internal services, and user interfaces into one system.',
    result4Title: 'Automation', result4Text: 'I reduce manual work through report automation, data exchange, and internal workflows.',
    titleFormats: 'Project Formats',
    format1: 'Internal systems', format2: 'Integration modules', format3: 'Telegram bots', format4: 'EXE/Desktop solutions', format5: 'Web platforms and panels', format6: 'Parsers and automation',
    titleProcess: 'How I Work',
    process1Title: 'Analysis', process1Text: 'I study the business process, goals, data structure, and current constraints.',
    process2Title: 'Design', process2Text: 'I assemble the solution architecture: services, links, APIs, databases, roles, and workflows.',
    process3Title: 'Implementation', process3Text: 'I develop modules, interfaces, bots, and internal tools as one system.',
    process4Title: 'Launch and Support', process4Text: 'I test, deploy, improve, and support the stable operation of the solution.',
    titlePort: 'My Projects',
    port1Title: 'Healthcare Digitalization System', port1Text: 'A complex platform for medical processes with internal modules, automation, and working tools for teams.',
    port2Badge: 'Web Development', port2Title: 'Road Association', port2Text: 'An official website with modern design, administrative logic, and a convenient content publishing structure.',
    port3Badge: 'Personal Site', port3Title: 'Personal Landing Page', port3Text: 'A fast responsive website focused on presentation, readability, and a modern visual style.',
    port4Title: 'University Grade System', port4Text: 'A web service for automating academic and internal processes at Tashkent State Transport University.',
    btnView: 'Open Site', mobileLang: 'Language:', footerText: 'Nusra',
    modalTitle: "Calculate <span class='gold-text'>Project</span>", modalSub: '// Services in databases, automation and development',
    labelService: 'What service do you need?', srv1: 'Landing / business card', srv2: 'Corporate website', srv3: 'Telegram bot', srv4: 'DB setup / parser', srv5: 'API / service integration', srv6: 'Internal system / CRM / ERP module',
    labelOptions: 'Additional options:', opt1: 'Unique design', opt2: 'Multilingual (3 languages)', opt3: 'Urgent delivery', optFree: '[ free ]',
    labelData: 'Your data (String):', labelTotal: 'Estimated budget:', btnSend: 'Send Request', btnToggleTerm: 'Terminal (logs)',
    aiModalTitle: 'Warning: AI mode', aiModalText: 'This language is intended only for reading and parsing by Large Language Models (LLM). <br><br><b>For a regular user, the interface will look like system code.</b> Are you sure you want to switch?', aiModalCancel: 'Cancel', aiModalConfirm: 'Enable AI',
    toastSuccess: 'Request sent successfully!', toastError: 'Failed to send the request.', toastNetError: 'Network error.',
    placeholderName: 'Name', placeholderComment: 'Comment / /* Comment */'
};

const translations = {
    ru: ruTexts,
    uz: uzTexts,
    en: enTexts,
    ai: {
        ...enTexts,
        heroRole: "SYS.ROLE == 'MIDDLE_PLUS_DBA'",
        heroTitle: "NUSRATULLOH_MIRKHODJAYEV => <span class='gold-text'>BUILD()</span> && AUTOMATE();",
        heroSub: "context: ['healthcare_digitalization', 'database_design', 'web_interfaces', 'automation']",
        btnCalc: 'init_calculator();',
        titlePort: 'Projects[]',
        btnView: 'HTTP GET /site',
        modalTitle: "POST <span class='gold-text'>/api/order</span>",
        labelService: 'payload.service_type =',
        labelOptions: 'payload.options =',
        labelData: 'payload.user =',
        labelTotal: 'response.budget =',
        btnSend: "socket.emit('send')",
        placeholderName: 'user.name',
        placeholderComment: 'user.comment'
    }
};

let currentPendingLang = '';

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ once: true, offset: 50 });
    const savedLang = localStorage.getItem('nusraLang') || 'ru';
    applyLang(savedLang);

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

    function showToast(msgKey, type) {
        const toast = document.getElementById('siteToast');
        const toastMsg = document.getElementById('toastMessage');
        const toastIcon = toast.querySelector('.toast-icon');
        const lang = localStorage.getItem('nusraLang') || 'ru';
        toastMsg.innerHTML = translations[lang][msgKey] || msgKey;
        toast.className = 'site-toast ' + type + ' show';
        toastIcon.className = type === 'success' ? 'fas fa-check-circle toast-icon' : 'fas fa-exclamation-circle toast-icon';
        setTimeout(() => { toast.classList.remove('show'); }, 4000);
    }

    const modal = document.getElementById('calcModal');
    const serviceRadios = document.querySelectorAll('input[name="projectType"]');
    const featureCheckboxes = document.querySelectorAll('.feature-calc');
    const totalPriceDisplay = document.getElementById('totalPrice');
    const orderForm = document.getElementById('orderForm');
    const sysTerminal = document.getElementById('sysTerminal');
    const logInputs = document.querySelectorAll('.log-input');

    window.toggleMobileTerminal = function() {
        const term = document.querySelector('.interactive-terminal');
        term.classList.toggle('show-mobile');
        if (term.classList.contains('show-mobile')) term.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };

    function scrollToBottom() {
        if (sysTerminal) sysTerminal.scrollTop = sysTerminal.scrollHeight;
    }

    function addLog(msg, type = 'sys-msg') {
        if (!sysTerminal) return;
        const time = new Date().toLocaleTimeString('en-US', { hour12: false });
        const p = document.createElement('p');
        p.className = type;
        p.textContent = '[' + time + '] ' + msg;
        sysTerminal.appendChild(p);
        scrollToBottom();
    }

    function loadLogs() {
        if (!sysTerminal) return;
        sysTerminal.innerHTML = '';
        addLog('System initialized. Awaiting parameters...');
    }

    window.openCalc = () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        calculateTotal();
        loadLogs();
        addLog('Calculator UI accessed. User connected.', 'sys-info');
    };

    window.closeCalc = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    modal.addEventListener('click', e => {
        if (e.target === modal) closeCalc();
    });

    function formatBudget(lang, total) {
        if (lang === 'ru') return 'от $' + total;
        if (lang === 'uz') return '$' + total + ' dan';
        return 'FROM $' + total;
    }

    function calculateTotal() {
        let total = 0;
        const selectedService = document.querySelector('input[name="projectType"]:checked');
        if (selectedService) total += parseInt(selectedService.value, 10);
        featureCheckboxes.forEach(cb => {
            if (cb.checked) total += parseInt(cb.value, 10);
        });
        const lang = localStorage.getItem('nusraLang') || 'ru';
        totalPriceDisplay.textContent = formatBudget(lang, total);
    }

    serviceRadios.forEach(radio => radio.addEventListener('change', e => {
        calculateTotal();
        addLog("Service selected: '" + e.target.dataset.name + "'");
    }));

    featureCheckboxes.forEach(box => box.addEventListener('change', e => {
        calculateTotal();
        if (e.target.checked) addLog("Option added: '" + e.target.dataset.name + "'");
        else addLog("Option removed: '" + e.target.dataset.name + "'", 'sys-err');
    }));

    logInputs.forEach(input => input.addEventListener('change', e => {
        if (e.target.value.trim() !== '') addLog('Input detected in field [' + e.target.dataset.field + ']');
    }));

    function sanitizeInput(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    }

    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addLog('Executing transmit sequence to Telegram API...', 'sys-info');
        const TOKEN = '8374178702:AAFJ9dgbB95TdVn5LoTRaQD8e3ciJXU-Ptk';
        const CHAT_ID = '1250243400';
        const name = sanitizeInput(document.getElementById('clientName').value);
        const phone = sanitizeInput(document.getElementById('clientPhone').value);
        const comment = sanitizeInput(document.getElementById('clientComment').value) || 'No comment';
        const selectedInput = document.querySelector('input[name="projectType"]:checked');
        const projName = selectedInput.dataset.name;
        const options = [];
        featureCheckboxes.forEach(cb => { if (cb.checked) options.push('YES ' + cb.dataset.name); });
        const optionsText = options.length > 0 ? options.join(' | ') : 'No additional options';
        const price = totalPriceDisplay.textContent;
        const text = 'New order (System Integrator)\n\nName: ' + name + '\nPhone: ' + phone + '\nComment: ' + comment + '\n\nService: ' + projName + '\nOptions: ' + optionsText + '\n\nBudget: ' + price;
        const submitBtn = document.getElementById('submitBtn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Executing...';
        submitBtn.disabled = true;

        fetch('https://api.telegram.org/bot' + TOKEN + '/sendMessage?chat_id=' + CHAT_ID + '&text=' + encodeURIComponent(text))
            .then(res => {
                if (res.ok) {
                    addLog('Response HTTP 200 OK. Data sent successfully.', 'sys-info');
                    showToast('toastSuccess', 'success');
                    orderForm.reset();
                    calculateTotal();
                    closeCalc();
                } else {
                    addLog('ERROR: API connection failed.', 'sys-err');
                    showToast('toastError', 'error');
                }
            })
            .catch(() => {
                addLog('FATAL ERROR: Network unreachable.', 'sys-err');
                showToast('toastNetError', 'error');
            })
            .finally(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            });
    });
});

window.changeLang = function(lang) {
    if (lang === 'ai') {
        currentPendingLang = 'ai';
        const currentInterfaceLang = localStorage.getItem('nusraLang') || 'ru';
        applyLang(currentInterfaceLang);
        document.getElementById('aiModal').classList.add('active');
    } else {
        applyLang(lang);
    }
};

window.closeAiModal = function() {
    document.getElementById('aiModal').classList.remove('active');
};

window.confirmAiLang = function() {
    closeAiModal();
    applyLang(currentPendingLang);
};

function applyLang(lang) {
    localStorage.setItem('nusraLang', lang);
    const dict = translations[lang] || translations.ru;
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (dict[key]) el.innerHTML = dict[key];
    });

    const nameInput = document.getElementById('clientName');
    const commentInput = document.getElementById('clientComment');
    if (nameInput) nameInput.placeholder = dict.placeholderName || translations.ru.placeholderName;
    if (commentInput) commentInput.placeholder = dict.placeholderComment || translations.ru.placeholderComment;

    calculateFallbackBudget(lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active-lang');
        if (btn.innerText.toLowerCase() === lang) btn.classList.add('active-lang');
    });
}

function calculateFallbackBudget(lang) {
    const totalPriceDisplay = document.getElementById('totalPrice');
    const selectedService = document.querySelector('input[name="projectType"]:checked');
    if (!totalPriceDisplay || !selectedService) return;
    const featureCheckboxes = document.querySelectorAll('.feature-calc');
    let total = parseInt(selectedService.value, 10);
    featureCheckboxes.forEach(cb => {
        if (cb.checked) total += parseInt(cb.value, 10);
    });
    if (lang === 'ru') totalPriceDisplay.textContent = 'от $' + total;
    else if (lang === 'uz') totalPriceDisplay.textContent = '$' + total + ' dan';
    else totalPriceDisplay.textContent = 'FROM $' + total;
}
