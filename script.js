const ruTexts = {
    navAbout: '??? ???', navPort: '?????????', btnOrder: '?????????? ??????', btnOrderMobile: '??????????',
    heroRole: 'System Integrator',
    heroTitle: "???????? ??????? ? ?????? <span class='gold-text'>??????? ?????</span>.",
    heroSub: 'System Integrator ? UZINFOCOM. ?????????? ??????????, ????????????? ???????? ? ??????? ??????????? ???-?????????? ??? ???????? ?????.',
    btnCalc: '?????????? ??????',
    termPersonal: '(??????)', termWork: '(???????)',
    highlight1Label: '??????? ????', highlight1Value: 'System Integrator',
    highlight2Label: '?????????? ????', highlight2Value: 'DBA ? ???? ??????',
    highlight3Label: '???????????', highlight3Value: '?????',
    highlight4Label: '?????', highlight4Value: '??? ? ?????????? ???????',
    titleAbout: '??? ? ???????', aboutCompany: '?????? ?????????? UZINFOCOM', aboutRole: 'System Integrator | ????????????? ???????????? ???????????????',
    aboutText: '? ??????? ? ???????, ????????? ???????????? ??????? ????????? ??????????????? (DMED). ??????? ?? ??????????, ?????????? ?????? ? ????????????? ?????????, ??????? ???????? ???????? ????????????? ? ????????.',
    skill1: "<i class='fas fa-link gold-text'></i> ?????????????? ?????????? ? ???????? ???????",
    skill2: "<i class='fas fa-database gold-text'></i> ??????? ???? ? PostgreSQL, MySQL ? ??????????? ??????",
    skill3: "<i class='fas fa-robot gold-text'></i> ?????????????, ???????, EXE-??????????? ? ???-??????????",
    journeyTitle: '????', journeyText: '?? DBA ? System Integrator: ?? ?????? ? ??????? ? ?????????? ??????????? ?????? ? ????????.',
    educationTitle: '???????????', educationText: '??????? ???????????? ???????????????? ????????????? ????????????. ???????? ???????? ? ????????? ? ???????? ????????.',
    sectorTitle: '????', sectorText: '??????????????? ???????, ???????????? ???????????????, ???-?????????? ? ?????????? ?????????????.',
    titleResults: '??????????',
    result1Title: 'DMED', result1Text: '???????? ? ???????? ??????? ??? ???????????? ??????????? ???????, ??? ???????? ?????????? ?????? ? ???????????? ?????????.',
    result2Title: '???-???????', result2Text: '???????????? ????? ? ?????????? ????????? ? ???????? ?? ????????, ???????? ? ????? ?????????.',
    result3Title: '??????????', result3Text: '???????? ???? ??????, API, ?????, ?????????? ??????? ? ?????????? ? ?????? ??????? ???????.',
    result4Title: '?????????????', result4Text: '?????? ?????? ?? ???? ????????????? ???????, ?????? ??????? ? ??????? ?????????.',
    titleFormats: '??????? ????????',
    format1: '?????????? ???????', format2: '?????????????? ??????', format3: 'Telegram-????', format4: 'EXE/Desktop ???????', format5: '???-????????? ? ??????', format6: '??????? ? ?????????????',
    titleProcess: '??? ? ???????',
    process1Title: '??????', process1Text: '???????? ???????, ??????????? ? ?????? ?????????.',
    process2Title: '??????????????', process2Text: '??????? ????????? ???????: ???????, API, ?????? ? ????.',
    process3Title: '??????????', process3Text: '????? ??????????, ??????????, ????? ? ?????????? ??????.',
    process4Title: '?????? ? ?????????', process4Text: '????????, ???????? ? ?????? ??????? ?? ?????????? ??????.',
    titlePort: '???????',
    port1Title: '??????? ???????????? ???????????????', port1Text: '??????????? ????????? ??? ??????????? ????????? ? ??????????? ????????, ?????????????? ? ???????? ?????????????.',
    port2Badge: '???-??????????', port2Title: '?????????? ?????', port2Text: '??????????? ???? ? ??????????? ????????, ?????-??????? ? ???????? ?????????? ????????.',
    port3Badge: '?????? ????', port3Title: '???????????? ???????', port3Text: '??????? ?????????? ???? ? ???????? ?? ??????, ?????????? ? ??????????? ?????????? ?????.',
    port4Title: '??????? ?????????? ??? ????????????', port4Text: '???-?????? ??? ????????????? ????????????? ? ?????????? ????????? ????????????.',
    btnView: '??????? ????', mobileLang: '????:', footerText: 'Nusra',
    modalTitle: "?????????? <span class='gold-text'>??????</span>", modalSub: '// ?????? ?? ??????????, ????????????? ? ??????????',
    labelService: '????? ?????? ??????', srv1: '??????? / ???????', srv2: '????????????? ????', srv3: 'Telegram-???', srv4: '????????? ?? / ??????', srv5: 'API / ?????????? ????????', srv6: '?????????? ??????? / CRM / ERP ??????',
    labelOptions: '?????????????? ?????:', opt1: '?????????? ??????', opt2: '??????????????? (3 ?????)', opt3: '??????? ??????', optFree: '[ ????????? ]',
    labelData: '???? ??????:', labelTotal: '????????? ??????:', btnSend: '????????? ??????', btnToggleTerm: '????????',
    aiModalTitle: '????????: AI ?????', aiModalText: '???? ???? ???????????? ?????? ??? ?????? ? ???????? ???????? ????????? ???????? (LLM). <br><br><b>???????? ???????????? ????????? ????? ????????? ??? ????????? ???.</b> ?? ???????, ??? ?????? ??????????????', aiModalCancel: '??????', aiModalConfirm: '???????? AI',
    toastSuccess: '?????? ??????? ??????????!', toastError: '?? ??????? ????????? ??????.', toastNetError: '?????? ????.',
    placeholderName: '???', placeholderComment: '???????????',
    quickCallPersonal: '?????? ?????', quickCallWork: '??????? ?????', quickTelegram: '???????? ? Telegram'
};

const uzTexts = {
    navAbout: 'Men haqimda', navPort: 'Portfolio', btnOrder: 'Loyihani hisoblash', btnOrderMobile: 'Hisoblash',
    heroRole: 'System Integrator',
    heroTitle: "Ma'lumotlarni boshqaraman va <span class='gold-text'>tezkor saytlar</span> yarataman.",
    heroSub: 'UZINFOCOM da System Integrator sifatida ishlayman. Integratsiyalarni loyihalayman, jarayonlarni avtomatlashtiraman va zamonaviy veb-interfeyslar yarataman.',
    btnCalc: 'Loyihani hisoblash',
    termPersonal: '(Shaxsiy)', termWork: '(Ish)',
    highlight1Label: 'Joriy rol', highlight1Value: 'System Integrator',
    highlight2Label: 'Oldingi tajriba', highlight2Value: 'DBA va ma\'lumotlar bazalari',
    highlight3Label: 'Ta\'lim', highlight3Value: 'TDTU',
    highlight4Label: 'Yo\'nalish', highlight4Value: 'Veb va ichki tizimlar',
    titleAbout: 'Qayerda ishlayman', aboutCompany: 'Yagona integrator UZINFOCOM', aboutRole: 'System Integrator | Sog\'liqni saqlashni raqamlashtirish bo\'limi',
    aboutText: 'Men Milliy sog\'liqni saqlashni raqamlashtirish tizimi (DMED) ustida ishlaydigan jamoada faoliyat yuritaman. Integratsiyalar, ma\'lumotlar ishonchliligi va avtomatlashtirish uchun javob beraman.',
    skill1: "<i class='fas fa-link gold-text'></i> Integratsiyalar va raqamli yechimlar arxitekturasi",
    skill2: "<i class='fas fa-database gold-text'></i> PostgreSQL, MySQL va ma\'lumotlar arxitekturasida kuchli tajriba",
    skill3: "<i class='fas fa-robot gold-text'></i> Avtomatlashtirish, skriptlar, EXE vositalar va veb-interfeyslar",
    journeyTitle: 'Yo\'l', journeyText: 'DBA dan System Integrator gacha: ma\'lumotlar bilan ishlashdan to to\'liq tizimlar qurishgacha.',
    educationTitle: 'Ta\'lim', educationText: 'Toshkent davlat transport universiteti talabasi. O\'qishni real loyiha amaliyoti bilan birga olib boraman.',
    sectorTitle: 'Tajriba', sectorText: 'Davlat servislar, sog\'liqni saqlashni raqamlashtirish, veb-ishlab chiqish va ichki avtomatlashtirish.',
    titleResults: 'Natijalar',
    result1Title: 'DMED', result1Text: 'Milliy tibbiy tizim uchun yechimlarda qatnashaman, bu yerda ma\'lumotlar ishonchliligi va barqarorlik muhim.',
    result2Title: 'Veb-yechimlar', result2Text: 'Tezkor va qulay saytlar hamda ichki platformalarni yarataman.',
    result3Title: 'Integratsiyalar', result3Text: 'MB, API, botlar, ichki servislar va interfeyslarni yagona tizimga birlashtiraman.',
    result4Title: 'Avtomatlashtirish', result4Text: 'Hisobotlar va jarayonlarni avtomatlashtirib, qo\'lda ish hajmini kamaytiraman.',
    titleFormats: 'Loyiha formatlari',
    format1: 'Ichki tizimlar', format2: 'Integratsion modullar', format3: 'Telegram-botlar', format4: 'EXE/Desktop yechimlar', format5: 'Veb-platformalar va panellar', format6: 'Parserlar va avtomatlashtirish',
    titleProcess: 'Qanday ishlayman',
    process1Title: 'Tahlil', process1Text: 'Jarayon, cheklov va natijani aniqlayman.',
    process2Title: 'Loyihalash', process2Text: 'Servislar, API, ma\'lumotlar va rollar tuzilmasini yig\'aman.',
    process3Title: 'Amalga oshirish', process3Text: 'Interfeyslar, integratsiyalar, botlar va ichki modullarni ishlab chiqaman.',
    process4Title: 'Ishga tushirish', process4Text: 'Sinovdan o\'tkazaman, ishga tushiraman va barqaror holatga keltiraman.',
    titlePort: 'Loyihalar',
    port1Title: 'Sog\'liqni saqlashni raqamlashtirish tizimi', port1Text: 'Tibbiy jarayonlar uchun ichki modullar, avtomatlashtirish va ishchi vositalarga ega platforma.',
    port2Badge: 'Veb-ishlab chiqish', port2Title: 'Yo\'llar assotsiatsiyasi', port2Text: 'Zamonaviy dizayn va aniq kontent tuzilmasiga ega rasmiy sayt.',
    port3Badge: 'Shaxsiy sayt', port3Title: 'Shaxsiy lending', port3Text: 'Moslashuvchan va tezkor shaxsiy sayt.',
    port4Title: 'Universitet vedomost tizimi', port4Text: 'Universitetning ichki va akademik jarayonlarini avtomatlashtirish uchun veb-servis.',
    btnView: 'Saytni ochish', mobileLang: 'Til:', footerText: 'Nusra',
    modalTitle: "<span class='gold-text'>Loyihani</span> hisoblash", modalSub: '// Integratsiya, avtomatlashtirish va ishlab chiqish xizmatlari',
    labelService: 'Qaysi xizmat kerak?', srv1: 'Lending / vizitka', srv2: 'Korporativ sayt', srv3: 'Telegram-bot', srv4: 'MB sozlash / parser', srv5: 'API / servis integratsiyasi', srv6: 'Ichki tizim / CRM / ERP modul',
    labelOptions: 'Qo\'shimcha opsiyalar:', opt1: 'Noyob dizayn', opt2: 'Ko\'p tillilik (3 til)', opt3: 'Shoshilinch ishga tushirish', optFree: '[ bepul ]',
    labelData: 'Ma\'lumotlaringiz:', labelTotal: 'Taxminiy budjet:', btnSend: 'So\'rov yuborish', btnToggleTerm: 'Terminal',
    aiModalTitle: 'Diqqat: AI rejimi', aiModalText: 'Bu til faqat katta til modellari (LLM) tomonidan o\'qish va tahlil qilish uchun mo\'ljallangan. <br><br><b>Oddiy foydalanuvchi uchun interfeys tizim kodi kabi ko\'rinadi.</b> Haqiqatan ham o\'tmoqchimisiz?', aiModalCancel: 'Bekor qilish', aiModalConfirm: 'AI ni yoqish',
    toastSuccess: 'So\'rov muvaffaqiyatli yuborildi!', toastError: 'So\'rovni yuborib bo\'lmadi.', toastNetError: 'Tarmoq xatosi.',
    placeholderName: 'Ism', placeholderComment: 'Izoh',
    quickCallPersonal: 'Shaxsiy raqam', quickCallWork: 'Ish raqami', quickTelegram: 'Telegramga yozish'
};

const enTexts = {
    navAbout: 'About Me', navPort: 'Portfolio', btnOrder: 'Calculate Project', btnOrderMobile: 'Calculate',
    heroRole: 'System Integrator',
    heroTitle: "I manage data and build <span class='gold-text'>fast websites</span>.",
    heroSub: 'System Integrator at UZINFOCOM. I design integrations, automate workflows, and build modern web interfaces for real operational tasks.',
    btnCalc: 'Calculate Project',
    termPersonal: '(Personal)', termWork: '(Work)',
    highlight1Label: 'Current role', highlight1Value: 'System Integrator',
    highlight2Label: 'Previous experience', highlight2Value: 'DBA and databases',
    highlight3Label: 'Education', highlight3Value: 'TSTU',
    highlight4Label: 'Focus', highlight4Value: 'Web and internal systems',
    titleAbout: 'Where I Work', aboutCompany: 'Unified Integrator UZINFOCOM', aboutRole: 'System Integrator | Healthcare Digitalization Division',
    aboutText: 'I work in the team building the National Digital Healthcare System (DMED). My role is focused on integrations, data reliability, and process automation that improve real user workflows.',
    skill1: "<i class='fas fa-link gold-text'></i> Integration architecture and digital solution design",
    skill2: "<i class='fas fa-database gold-text'></i> Strong background in PostgreSQL, MySQL and data architecture",
    skill3: "<i class='fas fa-robot gold-text'></i> Automation, scripts, EXE tools and web interfaces",
    journeyTitle: 'Path', journeyText: 'From DBA to System Integrator: from data operations to building complete connected systems.',
    educationTitle: 'Education', educationText: 'Student at Tashkent State Transport University, combining study with real project practice.',
    sectorTitle: 'Experience', sectorText: 'Government services, healthcare digitalization, web development and internal automation.',
    titleResults: 'Results',
    result1Title: 'DMED', result1Text: 'I contribute to national medical system solutions where data reliability and process stability are critical.',
    result2Title: 'Web Solutions', result2Text: 'I build websites and internal platforms with a focus on speed, usability and clean structure.',
    result3Title: 'Integrations', result3Text: 'I connect databases, APIs, bots, internal services and interfaces into one working system.',
    result4Title: 'Automation', result4Text: 'I reduce manual work through reporting automation, data exchange and operational flows.',
    titleFormats: 'Project Formats',
    format1: 'Internal systems', format2: 'Integration modules', format3: 'Telegram bots', format4: 'EXE/Desktop solutions', format5: 'Web platforms and panels', format6: 'Parsers and automation',
    titleProcess: 'How I Work',
    process1Title: 'Analysis', process1Text: 'I break down the process, constraints and required outcome.',
    process2Title: 'Design', process2Text: 'I define the structure of services, APIs, data and roles.',
    process3Title: 'Implementation', process3Text: 'I build interfaces, integrations, bots and internal modules.',
    process4Title: 'Launch and Support', process4Text: 'I test, launch and stabilize the final solution.',
    titlePort: 'Projects',
    port1Title: 'Healthcare Digitalization System', port1Text: 'A complex platform for medical processes with internal modules, automation and practical team tools.',
    port2Badge: 'Web Development', port2Title: 'Road Association', port2Text: 'An official site with modern design, admin logic and clean content structure.',
    port3Badge: 'Personal Site', port3Title: 'Personal Landing Page', port3Text: 'A fast responsive site focused on clarity and modern presentation.',
    port4Title: 'University Grade System', port4Text: 'A web service for automating academic and internal university processes.',
    btnView: 'Open Site', mobileLang: 'Language:', footerText: 'Nusra',
    modalTitle: "Calculate <span class='gold-text'>Project</span>", modalSub: '// Integration, automation and development services',
    labelService: 'What service do you need?', srv1: 'Landing / business card', srv2: 'Corporate website', srv3: 'Telegram bot', srv4: 'DB setup / parser', srv5: 'API / service integration', srv6: 'Internal system / CRM / ERP module',
    labelOptions: 'Additional options:', opt1: 'Unique design', opt2: 'Multilingual (3 languages)', opt3: 'Urgent launch', optFree: '[ free ]',
    labelData: 'Your details:', labelTotal: 'Estimated budget:', btnSend: 'Send Request', btnToggleTerm: 'Terminal',
    aiModalTitle: 'Warning: AI mode', aiModalText: 'This language is intended only for reading and parsing by Large Language Models (LLM). <br><br><b>For a regular user, the interface will look like system code.</b> Are you sure you want to switch?', aiModalCancel: 'Cancel', aiModalConfirm: 'Enable AI',
    toastSuccess: 'Request sent successfully!', toastError: 'Failed to send the request.', toastNetError: 'Network error.',
    placeholderName: 'Name', placeholderComment: 'Comment',
    quickCallPersonal: 'Personal phone', quickCallWork: 'Work phone', quickTelegram: 'Message on Telegram'
};

const translations = {
    ru: ruTexts,
    uz: uzTexts,
    en: enTexts,
    ai: {
        ...enTexts,
        heroRole: "SYS.ROLE == 'SYSTEM_INTEGRATOR'",
        heroTitle: "NUSRATULLOH_MIRKHODJAYEV => <span class='gold-text'>BUILD()</span> && AUTOMATE();",
        heroSub: "context: ['integrations', 'automation', 'web_interfaces', 'operational_systems']",
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
        placeholderComment: 'user.comment',
        quickCallPersonal: 'call.personal()', quickCallWork: 'call.work()', quickTelegram: 'telegram.open()'
    }
};

let currentPendingLang = '';
let logQueue = Promise.resolve();
let logCounter = 0;

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ once: true, offset: 50 });
    const savedLang = localStorage.getItem('nusraLang') || 'ru';

    const modal = document.getElementById('calcModal');
    const serviceRadios = document.querySelectorAll('input[name="projectType"]');
    const featureCheckboxes = document.querySelectorAll('.feature-calc');
    const totalPriceDisplay = document.getElementById('totalPrice');
    const orderForm = document.getElementById('orderForm');
    const sysTerminal = document.getElementById('sysTerminal');
    const logInputs = document.querySelectorAll('.log-input');
    const phoneInput = document.getElementById('clientPhone');

    function scrollToBottom() {
        if (sysTerminal) sysTerminal.scrollTop = sysTerminal.scrollHeight;
    }

    function formatBudget(lang, total) {
        if (lang === 'ru') return '?? $' + total;
        if (lang === 'uz') return '$' + total + ' dan';
        return 'FROM $' + total;
    }

    function updateServicePriceLabels(lang) {
        document.querySelectorAll('.srv-price[data-base-price]').forEach(node => {
            const price = parseInt(node.dataset.basePrice, 10);
            node.textContent = formatBudget(lang, price);
        });
    }

    function calculateTotal() {
        let total = 0;
        const selectedService = document.querySelector('input[name="projectType"]:checked');
        if (selectedService) total += parseInt(selectedService.value, 10);
        featureCheckboxes.forEach(cb => {
            if (cb.checked) total += parseInt(cb.value, 10);
        });
        const lang = localStorage.getItem('nusraLang') || 'ru';
        if (totalPriceDisplay) totalPriceDisplay.textContent = formatBudget(lang, total);
        updateServicePriceLabels(lang);
    }

    async function typeLogLine(message, type = 'sys-msg') {
        if (!sysTerminal) return;
        const line = document.createElement('p');
        line.className = type;
        line.dataset.logId = String(++logCounter);
        const time = new Date().toLocaleTimeString('en-US', { hour12: false });
        const prefix = '[' + time + '] ';
        line.textContent = prefix;
        sysTerminal.appendChild(line);
        scrollToBottom();
        for (const char of message) {
            line.textContent += char;
            scrollToBottom();
            await wait(type === 'sys-err' ? 8 : 12);
        }
    }

    function addLog(message, type = 'sys-msg') {
        logQueue = logQueue.then(() => typeLogLine(message, type));
        return logQueue;
    }

    function loadLogs() {
        if (!sysTerminal) return;
        sysTerminal.innerHTML = '';
        logQueue = Promise.resolve();
        addLog('System initialized. Awaiting parameters...');
    }

    function sanitizeInput(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    }

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

    window.toggleMobileMenu = function() {
        document.getElementById('mobileDropdown').classList.toggle('active');
    };

    document.addEventListener('click', function(event) {
        const dropdown = document.getElementById('mobileDropdown');
        const toggleBtn = document.querySelector('.menu-toggle');
        if (dropdown && toggleBtn && dropdown.classList.contains('active') && !dropdown.contains(event.target) && !toggleBtn.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });

    if (phoneInput) {
        phoneInput.addEventListener('focus', function() {
            if (this.value === '') this.value = '+998 ';
        });
        phoneInput.addEventListener('blur', function() {
            if (this.value === '+998 ' || this.value === '+998') this.value = '';
        });
        phoneInput.addEventListener('input', function(e) {
            let inputNumbersValue = e.target.value.replace(/D/g, '');
            let formattedValue = '';
            if (!inputNumbersValue) {
                e.target.value = '';
                return;
            }
            if (!inputNumbersValue.startsWith('998')) inputNumbersValue = '998' + inputNumbersValue;
            inputNumbersValue = inputNumbersValue.substring(0, 12);
            if (inputNumbersValue.length > 0) formattedValue += '+' + inputNumbersValue.substring(0, 3);
            if (inputNumbersValue.length >= 4) formattedValue += ' (' + inputNumbersValue.substring(3, 5);
            if (inputNumbersValue.length >= 6) formattedValue += ') ' + inputNumbersValue.substring(5, 8);
            if (inputNumbersValue.length >= 9) formattedValue += '-' + inputNumbersValue.substring(8, 10);
            if (inputNumbersValue.length >= 11) formattedValue += '-' + inputNumbersValue.substring(10, 12);
            e.target.value = formattedValue;
        });
    }

    window.toggleMobileTerminal = function() {
        const term = document.querySelector('.interactive-terminal');
        if (!term) return;
        term.classList.toggle('show-mobile');
        if (term.classList.contains('show-mobile')) term.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };

    window.openCalc = () => {
        if (!modal) return;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        calculateTotal();
        loadLogs();
        addLog('Calculator UI opened. Session connected.', 'sys-info');
    };

    window.closeCalc = () => {
        if (!modal) return;
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    if (modal) {
        modal.addEventListener('click', e => {
            if (e.target === modal) closeCalc();
        });
    }

    serviceRadios.forEach(radio => radio.addEventListener('change', e => {
        calculateTotal();
        addLog('Service selected: ' + e.target.dataset.name);
    }));

    featureCheckboxes.forEach(box => box.addEventListener('change', e => {
        calculateTotal();
        addLog((e.target.checked ? 'Option added: ' : 'Option removed: ') + e.target.dataset.name, e.target.checked ? 'sys-info' : 'sys-err');
    }));

    logInputs.forEach(input => input.addEventListener('input', e => {
        if (e.target.value.trim() !== '') addLog('Input updated in [' + e.target.dataset.field + ']');
    }));

    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            addLog('Preparing payload for Telegram API...', 'sys-info');
            const TOKEN = '8374178702:AAFJ9dgbB95TdVn5LoTRaQD8e3ciJXU-Ptk';
            const CHAT_ID = '1250243400';
            const name = sanitizeInput(document.getElementById('clientName').value);
            const phone = sanitizeInput(document.getElementById('clientPhone').value);
            const comment = sanitizeInput(document.getElementById('clientComment').value) || 'No comment';
            const selectedInput = document.querySelector('input[name="projectType"]:checked');
            const projName = selectedInput ? selectedInput.dataset.name : 'Unknown';
            const options = [];
            featureCheckboxes.forEach(cb => { if (cb.checked) options.push('YES ' + cb.dataset.name); });
            const optionsText = options.length > 0 ? options.join(' | ') : 'No additional options';
            const price = totalPriceDisplay ? totalPriceDisplay.textContent : '';
            const text = 'New order (System Integrator)\n\nName: ' + name + '\nPhone: ' + phone + '\nComment: ' + comment + '\n\nService: ' + projName + '\nOptions: ' + optionsText + '\n\nBudget: ' + price;
            const submitBtn = document.getElementById('submitBtn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Executing...';
            submitBtn.disabled = true;

            fetch('https://api.telegram.org/bot' + TOKEN + '/sendMessage?chat_id=' + CHAT_ID + '&text=' + encodeURIComponent(text))
                .then(res => {
                    if (res.ok) {
                        addLog('HTTP 200 OK. Request delivered.', 'sys-info');
                        showToast('toastSuccess', 'success');
                        orderForm.reset();
                        calculateTotal();
                        closeCalc();
                    } else {
                        addLog('API returned an error response.', 'sys-err');
                        showToast('toastError', 'error');
                    }
                })
                .catch(() => {
                    addLog('Network unreachable. Transmission failed.', 'sys-err');
                    showToast('toastNetError', 'error');
                })
                .finally(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                });
        });
    }

    applyLang(savedLang);
    calculateTotal();
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

    let label = 'FROM $' + total;
    if (lang === 'ru') label = '?? $' + total;
    else if (lang === 'uz') label = '$' + total + ' dan';
    totalPriceDisplay.textContent = label;

    document.querySelectorAll('.srv-price[data-base-price]').forEach(node => {
        const price = parseInt(node.dataset.basePrice, 10);
        let priceLabel = 'FROM $' + price;
        if (lang === 'ru') priceLabel = '?? $' + price;
        else if (lang === 'uz') priceLabel = '$' + price + ' dan';
        node.textContent = priceLabel;
    });
}