const enTexts = {
    navAbout: 'About Me', navPort: 'Portfolio', btnOrder: 'Order Service', btnOrderMobile: 'Order',
    heroRole: 'System Integrator | ex-DBA',
    heroTitle: "Nusratulloh Mirkhodjayev. <span class='gold-text'>System Integrator</span> building real working solutions from services, data and automation.",
    heroSub: 'Previously worked as a DBA. Now focused on system integration, internal platforms, API connections, bots, EXE tools and process automation. Studying at Tashkent State Transport University with hands-on experience in government projects.',
    btnCalc: 'Calculate Project',
    termPersonal: '(Personal)', termWork: '(Work)',
    highlight1Label: 'Current role', highlight1Value: 'System Integrator',
    highlight2Label: 'Previous experience', highlight2Value: 'DBA and databases',
    highlight3Label: 'Education', highlight3Value: 'TSTU',
    highlight4Label: 'Focus', highlight4Value: 'Government and internal systems',
    titleAbout: 'Professional Profile', aboutCompany: 'UZINFOCOM and public digital projects', aboutRole: 'System Integrator | ex-DBA | Digital Health',
    aboutText: 'My name is Nusratulloh Mirkhodjayev. I previously worked as a DBA and now focus on system integration: connecting services, databases, internal platforms, APIs, bots and automation into unified working solutions. I study at Tashkent State Transport University while building practical experience in real government and internal projects.',
    skill1: "<i class='fas fa-link gold-text'></i> System integration and service connection design",
    skill2: "<i class='fas fa-database gold-text'></i> DBA experience: PostgreSQL, MySQL, data structure and reliability",
    skill3: "<i class='fas fa-robot gold-text'></i> Process automation, bots, EXE tools and internal systems",
    journeyTitle: 'Career Path', journeyText: 'From DBA to system integrator: from deep data work to building complete solutions and integration logic.',
    educationTitle: 'Education', educationText: 'Student at Tashkent State Transport University. Combining study with real project delivery.',
    sectorTitle: 'Experience', sectorText: 'Working with government initiatives, internal platforms, digital services and automation.',
    titleCompetencies: 'Competencies',
    comp1Title: 'System Integration', comp1Text: 'Designing data exchange between services, internal platforms, APIs and external systems.',
    comp2Title: 'Databases', comp2Text: 'DBA experience helps build solutions with the right data model, reliability and quality control.',
    comp3Title: 'Automation', comp3Text: 'Building bots, parsers, EXE tools and internal modules that reduce manual work.',
    comp4Title: 'Web and Internal Panels', comp4Text: 'Creating interfaces, admin panels and operational web modules for teams and processes.',
    titleResults: 'Results',
    result1Title: 'DMED', result1Text: 'Built solutions for the DMED medical program, including process automation and working logic for digital healthcare.',
    result2Title: 'Government Projects', result2Text: 'Experience in public-sector projects where reliability, data structure and process stability are critical.',
    result3Title: 'Integrations', result3Text: 'Connecting databases, APIs, bots, internal platforms and user interfaces into unified systems.',
    result4Title: 'Automation', result4Text: 'Reducing manual operations through report automation, data exchange and internal workflows.',
    titleFormats: 'Project Formats',
    format1: 'Internal systems', format2: 'Integration modules', format3: 'Telegram bots', format4: 'EXE/Desktop solutions', format5: 'Web platforms and panels', format6: 'Parsers and automation',
    titleProcess: 'How I Work',
    process1Title: 'Analysis', process1Text: 'I study the business process, pain points, data structure and existing constraints.',
    process2Title: 'Design', process2Text: 'I assemble the solution architecture: services, connections, APIs, databases, roles and workflows.',
    process3Title: 'Integration', process3Text: 'I implement modules, interfaces, bots and internal tools as a single system.',
    process4Title: 'Launch and Support', process4Text: 'I test, deploy, improve and support solution stability.',
    titlePort: 'My Projects',
    port1Title: 'Complex Automation System', port1Text: 'A multifunctional system with its own internal platform, EXE application and an analysis bot for workflow automation.',
    port2Badge: 'Web Development', port2Title: 'Road Association', port2Text: 'Official website built with modern design, admin logic and a clear publishing structure.',
    port3Badge: 'Personal Site', port3Title: 'Personal Landing', port3Text: 'A clean, responsive personal website with fast loading and strong presentation.',
    port4Title: 'University Grade System', port4Text: 'Built a grade statement website for Tashkent State Transport University to simplify academic and internal processes.',
    btnView: 'View Site', mobileLang: 'Language:', footerText: 'Nusra',
    modalTitle: "Order <span class='gold-text'>Services</span>", modalSub: '// Services in system integration, automation and development',
    labelService: 'What service do you need?', srv1: 'Landing / Business Card', srv2: 'Corporate Website', srv3: 'Telegram Bot', srv4: 'DB Setup / Parser', srv5: 'API / Service Integration', srv6: 'Internal System / CRM / ERP Module',
    labelOptions: 'Additional Options:', opt1: 'Unique Design', opt2: 'Multilingual (3 languages)', opt3: 'Urgent Execution', optFree: '[ FREE ]',
    labelData: 'Your Data (String):', labelTotal: 'Estimated Budget:', btnSend: 'Send Request', btnToggleTerm: 'Terminal (Logs)',
    aiModalTitle: 'Warning: AI Mode', aiModalText: 'This language is strictly designed for parsing by Large Language Models (LLM). <br><br><b>Only Artificial Intelligence can read and understand this code.</b> It is presented in symbols and JSON structures. Are you sure you want to switch?', aiModalCancel: 'Cancel', aiModalConfirm: 'Enable AI',
    toastSuccess: 'Request sent successfully!', toastError: 'Failed to send.', toastNetError: 'Network error.'
};

const translations = { ru: enTexts, uz: enTexts, en: enTexts, ai: {
    ...enTexts,
    heroRole: "SYS.ROLE == 'SYSTEM_INTEGRATOR_EX_DBA'",
    heroTitle: "NUSRATULLOH_MIRKHODJAYEV => <span class='gold-text'>INTEGRATE()</span> && AUTOMATE();",
    heroSub: "context: ['ex_dba', 'system_integrator', 'government_projects', 'tstu_student']; stack: ['api', 'db', 'bot', 'exe', 'internal_platform']",
    btnCalc: 'init_calculator();',
    titlePort: 'Projects[]',
    btnView: 'HTTP GET /site',
    modalTitle: "POST <span class='gold-text'>/api/order</span>",
    labelService: 'payload.service_type =',
    labelOptions: 'payload.options =',
    labelData: 'payload.user =',
    labelTotal: 'RESPONSE.budget:',
    btnSend: "socket.emit('send')"
}};

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
        let inputNumbersValue = e.target.value.replace(/D/g, '');
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

    function calculateTotal() {
        let total = 0;
        const selectedService = document.querySelector('input[name="projectType"]:checked');
        if (selectedService) total += parseInt(selectedService.value, 10);
        featureCheckboxes.forEach(cb => {
            if (cb.checked) total += parseInt(cb.value, 10);
        });
        totalPriceDisplay.textContent = 'FROM $' + total;
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
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active-lang');
        if (btn.innerText.toLowerCase() === lang) btn.classList.add('active-lang');
    });
}
