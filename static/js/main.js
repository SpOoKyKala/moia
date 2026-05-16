// Inline SVG icon definitions
const ICONS = {
    'cpu': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9"/><path d="M15 2v2M9 2v2M2 15h2M2 9h2M20 15h2M20 9h2M15 20v2M9 20v2"/></svg>',
    'book-open': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
    'wrench': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    'user': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>',
    'shield': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>',
    'zap': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>',
    'thermometer': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/></svg>',
    'circuit-board': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
    'hard-drive': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" x2="2" y1="12" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" x2="6.01" y1="16" y2="16"/><line x1="10" x2="10.01" y1="16" y2="16"/></svg>',
    'activity': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
    'settings': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',
    'wifi': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13a10 10 0 0 1 14 0"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M2 8.82a15 15 0 0 1 20 0"/><line x1="12" x2="12.01" y1="20" y2="20"/></svg>',
    'printer': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>',
    'database': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>',
    'laptop': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.36 1.4a1 1 0 0 1 0 1.4H3a1 1 0 0 1-1-1.4L4 16"/></svg>',
    'monitor': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>',
    'globe': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    'compass': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
    'star': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    'award': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
    'info': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
    'memory-stick': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/><rect width="12" height="14" x="4" y="6" rx="2"/><circle cx="12" cy="15" r="2"/></svg>',
    'chevron-right': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
    'x': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    'check': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    'search': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
    'home': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    'map': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg>',
    'alert-triangle': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>',
    'arrow-right': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    'presentation': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 7h18"/><path d="M7 12h10"/><path d="M7 17h6"/></svg>'
};

function replaceIcons() {
    document.querySelectorAll('[data-lucide]').forEach(function(el) {
        const iconName = el.getAttribute('data-lucide');
        if (ICONS[iconName]) {
            const svgStr = ICONS[iconName];
            const tmp = document.createElement('div');
            tmp.innerHTML = svgStr;
            const svg = tmp.firstElementChild;
            if (svg) {
                ['class', 'style', 'width', 'height'].forEach(function(attr) {
                    if (el.hasAttribute(attr) && attr !== 'data-lucide') {
                        const val = el.getAttribute(attr);
                        if (attr === 'class') {
                            el.className.split(' ').forEach(function(c) {
                                if (c && c !== 'inline' && c !== 'mr-1' && c !== 'mx-auto') {
                                    svg.classList.add(c);
                                }
                            });
                        } else if (attr === 'style') {
                            el.style.cssText.split(';').forEach(function(s) {
                                var parts = s.split(':');
                                if (parts[0].trim()) svg.style[parts[0].trim()] = parts.slice(1).join(':').trim();
                            });
                        } else {
                            svg.setAttribute(attr, val);
                        }
                    }
                });
                while (el.firstChild) {
                    svg.appendChild(el.firstChild);
                }
                el.replaceWith(svg);
            }
        }
    });
}

// ============================================
// DATA CONSTANTS - ИЗМЕНЯЙТЕ ЗДЕСЬ
// ============================================

const ATLAS_COMPONENTS = [
    { id: 'socket_2011_3', name: 'Socket 2011-3', x: 52, y: 35, specs: 'Разъём: LGA 2011-3<br>Процессоры: Intel Core i7 5xxx, 6xxx<br>Xeon E5 v3/v4', failures: 'Не определяется CPU, ошибки POST, перегрев', diagnostics: 'Визуальный осмотр, проверка контактов, измерение Vcore (0.8-1.5V)' },
    { id: 'ddr4_slots', name: 'DDR4 DIMM', x: 41, y: 35, specs: 'Слоты: 8x DDR4 DIMM<br>Частота: до 3200MHz<br>Объём: до 128GB', failures: 'Не определяется память, синий экран, нестабильность', diagnostics: 'Проверка контактов, тест MemTest, перестановка модулей' },
    { id: 'vrm', name: 'VRM', x: 52, y: 23, specs: 'Фазы: 8+2<br>Дроссели: сплавные<br>MosFET: IR3555', failures: 'Проблемы с питанием CPU, аварийное отключение', diagnostics: 'Измерение напряжений: Vcore, VSA, VDDIO (мультиметром)' },
    { id: 'chipset_x99', name: 'Chipset X99', x: 63, y: 65, specs: 'Чипсет: Intel X99<br>TDP: 8W<br>Линии: PCIe 2.0', failures: 'Проблемы с USB/SATA, зависания', diagnostics: 'Обновление BIOS, проверка temperature чипсета' },
    { id: 'pcie_x16', name: 'PCIe x16', x: 45, y: 64, specs: 'Слоты: 4x PCIe 3.0 x16<br>Поддержка 4-Way SLI/CF', failures: 'Не определяется GPU, ошибки видеокарты', diagnostics: 'Переустановка карты, проверка питания, тест на другом слоте' },
    { id: 'usb31_headers', name: 'USB 3.1 Headers', x: 68, y: 43, specs: 'Разъёмы: 2x USB 3.1<br>Поддержка: UASP режим', failures: 'USB устройства не определяются', diagnostics: 'Проверка кабелей, драйверов USB' },
    { id: 'sata_express', name: 'SATA Express', x: 70, y: 58, specs: 'x8 SATA 6Gb/s<br>2x SATA Express', failures: 'Диски не определяются', diagnostics: 'Проверка кабелей, режима AHCI' },
    { id: 'bios_chip', name: 'BIOS Chip', x: 33, y: 76, specs: 'Чип: 64Mb SPI Flash<br>Двойной BIOS', failures: 'Ошибки POST, не загружается', diagnostics: 'Сброс CMOS, перепрошивка' },
    { id: 'lan_ports', name: 'LAN Intel I210', x: 31, y: 20, specs: '2x Intel I210-AT<br>1Gb/s каждый', failures: 'Нет сети, ошибки подключения', diagnostics: 'Проверка драйверов, LED индикаторов' }
];

const LEARNING_MODULES = [
  {
    "id": "intro",
    "title": "Введение в ремонт ПК",
    "icon": "book-open",
    "description": "Основы диагностики, обслуживания и ремонта компьютерных систем",
    "content": "\n<img src=\"/static/uploads/lessons/82d48e82ca09433d.jpeg\" class=\"w-full rounded-lg mb-4\">\n\n            <div class=\"mb-6\">\n                <imgggg src=\"\" class=\"w-full rounded-lg mb-4\">\n                <p class=\"text-xs text-slate-500\">Изображение рабочего места</p>\n            </div>\n            \n            <h3 class=\"text-xl font-bold text-slate-900 mb-4\">1. Введение в техническое обслуживание ПК</h3>\n            <p class=\"text-sm text-slate-600 mb-4\">Техническое обслуживание и ремонт компьютерных систем (ТО и РКС) - это комплекс мероприятий, направленных на поддержание работоспособности, выявление неисправностей и восстановление функциональности компьютерного оборудования. Регулярное техническое обслуживание позволяет значительно продлить срок службы компонентов и предотвратить серьёзные поломки.</p>\n            <p class=\"text-sm text-slate-600 mb-4\">В современном мире компьютер стал неотъемлемой частью нашей жизни. Мы используем его для работы, учёбы, развлечений и общения. Но как и любая техника, компьютеры требуют регулярного ухода и обслуживания. Многие пользователи забывают, что их железный друг нуждается в заботе так же, как и автомобиль.</p>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">1.1. Основные понятия</h4>\n            <p class=\"text-sm text-slate-600 mb-3\">Давайте разберём основные термины:</p>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Техническое обслуживание (ТО)</b> - профилактические мероприятия: чистка от пыли, замена термопасты, диагностика, обновление драйверов. ТО делается регулярно, раз в 6-12 месяцев.</li>\n                <li><b>Ремонт</b> - восстановление работоспособности неисправных компонентов. Может быть простым (замена конденсатора) или сложным (ремонт материнской платы).</li>\n                <li><b>Диагностика</b> - процесс определения причины неисправности. Правильная диагностика - это 80% успешного ремонта.</li>\n                <li><b>Профилактика</b> - мероприятия по предотвращению поломок: правильная эксплуатация, нормальные условия работы.</li>\n            </ul>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">1.2. Классификация неисправностей</h4>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Аппаратные (Hardware)</b> - физические повреждения: сгоревшие элементы, трещины на плате, вздутые конденсаторы. Причинами могут быть перегрев, скачки напряжения, износ.</li>\n                <li><b>Программные (Software)</b> - проблемы в работе ПО: неправильные драйвера, вирусы, ошибки ОС. Лечатся переустановкой драйверов или системы.</li>\n            </ul>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">1.3. Методы диагностики</h4>\n            <ol class=\"list-decimal pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Визуальный осмотр</b> - самый простой и эффективный. Осмотрите компоненты на предмет видимых повреждений.</li>\n                <li><b>POST-тест</b> - Power-On Self Test. BIOS издаёт звуковые сигналы (beep codes), по которым можно определить неисправность.</li>\n                <li><b>Программная диагностика</b> - HWiNFO, AIDA64, MemTest для проверки компонентов.</li>\n                <li><b>Аппаратная диагностика</b> - измерение напряжений мультиметром.</li>\n                <li><b>POST-карты</b> - показывают цифровой код прохождения POST.</li>\n            </ol>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">1.4. Необходимый инструментарий</h4>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Мультиметр</b> - обязательный инструмент для измерения напряжений.</li>\n                <li><b>Отвёртки</b> - набор с разными насадками: крестовые, плоские, Torx.</li>\n                <li><b>Антистатический браслет</b> - защита от статического электричества.</li>\n                <li><b>Термопаста</b> - для замены при обслуживании. Arctic MX-4 - оптимальный вариант.</li>\n                <li><b>Сжатый воздух</b> - для чистки от пыли.</li>\n            </ul>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">1.5. Техника безопасности</h4>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li>Всегда отключайте питание перед ремонтом!</li>\n                <li>Используйте антистатический браслет</li>\n                <li>Не прикасайтесь к компонентам без необходимости</li>\n                <li>НИКОГДА не разбирайте блок питания - опасно для жизни!</li>\n            </ul>\n            \n            <div class=\"mt-6 p-4 bg-blue-50 rounded-lg\">\n                <p class=\"text-sm text-blue-700\"><b>Видео:</b> <a href=\"https://rutube.ru/video/28122b6268b93a82399ad0975a36088a/\" class=\"underline text-red-600\" target=\"_blank\">Смотреть на Rutube</a></p>\n            </div>\n        <imgggg src=\"\" class=\"w-full rounded-lg mb-4\">",
    "quiz": [
        {
            "question": "Что включает в себя техническое обслуживание (ТО)?",
            "options": [
                "Только чистку от пыли",
                "Чистку, замену термопасты, диагностику, обновление драйверов",
                "Только замену комплектующих",
                "Только установку программ"
            ],
            "correct": 1
        },
        {
            "question": "Какой метод диагностики самый простой и эффективный?",
            "options": [
                "POST-тест",
                "Визуальный осмотр",
                "Программная диагностика",
                "Замена компонентов"
            ],
            "correct": 1
        },
        {
            "question": "Сколько звуковых сигналов издаёт POST при проблеме с видеокартой?",
            "options": [
                "Один короткий",
                "Три длинных",
                "Один длинный и два коротких",
                "Нет сигналов"
            ],
            "correct": 1
        },
        {
            "question": "Что такое POST-карта?",
            "options": [
                "Звуковая карта",
                "Плата для диагностики с цифровым кодом",
                "Видеокарта для ПК",
                "Сетевая карта"
            ],
            "correct": 1
        },
        {
            "question": "Какое напряжение должно быть на +12V линии?",
            "options": [
                "12V ±1%",
                "12V ±5%",
                "12V ±10%",
                "12V ±15%"
            ],
            "correct": 1
        }
    ]
},
  {
    "id": "power_supply",
    "title": "Ремонт БП ATX",
    "icon": "zap",
    "description": "Устройство, принцип работы, диагностика и ремонт блоков питания ATX",
    "content": "\n            <div class=\"mb-6\">\n                <img src=\"/static/uploads/lessons/4eab7c7b3b514946.jpg\" class=\"w-full rounded-lg mb-4\">\n                <p class=\"text-xs text-slate-500\">Фото блока питания в разобранном виде</p>\n            </div>\n            \n            <h3 class=\"text-xl font-bold text-slate-900 mb-4\">2. Блоки питания ATX</h3>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">2.1. Назначение и принцип работы</h4>\n            <p class=\"text-sm text-slate-600 mb-4\">Блок питания ATX преобразует переменное напряжение сети 220V в постоянные напряжения +12V, +5V, +3.3V. Принцип работы основан на импульсной модуляции.</p>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">2.2. Структурная схема БП</h4>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Входной фильтр (EMI)</b> - подавление высокочастотных помех сети.</li>\n                <li><b>Выпрямитель</b> - диодный мост, преобразующий AC в DC.</li>\n                <li><b>Корректор коэффициента мощности (PFC)</b> - улучшает коэффициент мощности.</li>\n                <li><b>Высокочастотный преобразователь (инвертор)</b> - MOSFET + ШИМ-контроллер.</li>\n                <li><b>Импульсный трансформатор</b> - понижает напряжение.</li>\n                <li><b>Выходные выпрямители и фильтры</b> - диоды Шоттки, дроссели, конденсаторы.</li>\n            </ul>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">2.3. Основные напряжения БП ATX</h4>\n            <div class=\"overflow-x-auto mb-4\">\n                <table class=\"w-full text-sm border-collapse\">\n                    <thead class=\"bg-slate-100\">\n                        <tr><th class=\"border p-2\">Напряжение</th><th class=\"border p-2\">Допуск</th><th class=\"border p-2\">Назначение</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td class=\"border p-2\">+5V SB</td><td class=\"border p-2\">±5%</td><td class=\"border p-2\">Дежурное питание (Standby)</td></tr>\n                        <tr><td class=\"border p-2\">+12V</td><td class=\"border p-2\">±5%</td><td class=\"border p-2\">CPU, GPU, вентиляторы</td></tr>\n                        <tr><td class=\"border p-2\">+5V</td><td class=\"border p-2\">±5%</td><td class=\"border p-2\">SATA, USB, платы</td></tr>\n                        <tr><td class=\"border p-2\">+3.3V</td><td class=\"border p-2\">±5%</td><td class=\"border p-2\">RAM, chipset</td></tr>\n                        <tr><td class=\"border p-2\">-12V</td><td class=\"border p-2\">±10%</td><td class=\"border p-2\">PCIe x16 (legacy)</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">2.4. Диагностика БП</h4>\n            <p class=\"text-sm text-red-600 mb-3\"><b>ВНИМАНИЕ!</b> Блок питания содержит опасные напряжения. Не разбирайте включенный БП!</p>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">2.4.1. Визуальный осмотр</h5>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li>Проверьте кабели питания на отсутствие повреждений</li>\n                <li>Осмотрите конденсаторы на вздутие</li>\n                <li>Проверьте вентилятор на легкость вращения</li>\n                <li>Осмотрите плату на следы прогара</li>\n            </ul>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">2.4.2. Проверка сигнала Power Good (PG)</h5>\n            <p class=\"text-sm text-slate-600 mb-3\">Сигнал PG (серый провод) - сообщает материнской плате, что все напряжения в норме. Должен быть 3-5V. Если 0V - БП неисправен.</p>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">2.4.3. Тестирование под нагрузкой</h5>\n            <p class=\"text-sm text-slate-600 mb-3\">Напряжения под нагрузкой (всегда в пределах):</p>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li>+12V: 11.4V - 12.6V</li>\n                <li>+5V: 4.75V - 5.25V</li>\n                <li>+3.3V: 3.14V - 3.47V</li>\n            </ul>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">2.5. Типичные неисправности</h4>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">2.5.1. Вздутые конденсаторы</h5>\n            <p class=\"text-sm text-slate-600 mb-3\">Самая частая неисправность. Крышка конденсатора вздута, электролит виден. Лечится заменой конденсаторов (LOW ESR).</p>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">2.5.2. Пробой ключевых транзисторов</h5>\n            <p class=\"text-sm text-slate-600 mb-3\">MOSFET транзисторы выходят из строя при коротком замыкании. Симптом: БП не включается, предохранитель сгорел.</p>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">2.5.3. Неисправность ШИМ-контроллера</h5>\n            <p class=\"text-sm text-slate-600 mb-3\">Микросхема, управляющая ключевыми транзисторами. При неисправности импульсов нет, БП не включается.</p>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">2.6. Профилактическое обслуживание</h4>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Чистка от пыли</b> - продуйте сжатым воздухом</li>\n                <li><b>Проверка и смазка вентилятора</b> - при шуме</li>\n                <li><b>Измерение напряжений под нагрузкой</b></li>\n            </ul>\n            \n            <div class=\"mt-6 p-4 bg-blue-50 rounded-lg\">\n                <p class=\"text-sm text-blue-700\"><b>Видео:</b> <a href=\"https://rutube.ru/video/260002c76369a4c673f30752e8beac0d/\" class=\"underline text-red-600\" target=\"_blank\">Смотреть на Rutube</a></p>\n            </div>\n        ",
    "quiz": [
        {
            "question": "Какие напряжения выдаёт блок питания ATX?",
            "options": [
                "Только +12V",
                "+12V, +5V, +3.3V",
                "+9V и +12V",
                "+5V и +12V"
            ],
            "correct": 1
        },
        {
            "question": "Что такое сигнал Power Good (PG)?",
            "options": [
                "Сигнал о включении вентилятора",
                "Сигнал о готовности всех напряжений",
                "Сигнал о перегреве",
                "Сигнал об ошибке"
            ],
            "correct": 1
        },
        {
            "question": "Какой цвет у провода PS_ON?",
            "options": [
                "Чёрный",
                "Зелёный",
                "Красный",
                "Синий"
            ],
            "correct": 1
        },
        {
            "question": "Что такое PFC в блоке питания?",
            "options": [
                "Кулер",
                "Корректор мощности",
                "Фильтр питания",
                "Контроллер"
            ],
            "correct": 1
        },
        {
            "question": "Какое напряжение должно быть на +12V под нагрузкой?",
            "options": [
                "10-12V",
                "11.4-12.6V",
                "12-14V",
                "13-15V"
            ],
            "correct": 1
        }
    ]
},
  {
    "id": "gpu_diagnostics",
    "title": "Диагностика GPU",
    "icon": "monitor",
    "description": "Устройство, диагностика и ремонт видеокарт",
    "content": "\n<img src=\"/static/uploads/lessons/9ece892a86de4a01.jpeg\" class=\"w-full rounded-lg mb-4\">\n\n            <div class=\"mb-6\">\n                <imgg src=\"\" class=\"w-full rounded-lg mb-4\">\n                <p class=\"text-xs text-slate-500\">Фото видеокарты</p>\n            </div>\n            \n            <h3 class=\"text-xl font-bold text-slate-900 mb-4\">3. Видеокарты (GPU)</h3>\n            <p class=\"text-sm text-slate-600 mb-4\">Видеокарта отвечает за отрисовку изображения на мониторе. Современные GPU имеют миллиарды транзисторов и требуют серьёзного охлаждения.</p>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">3.1. Устройство видеокарты</h4>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">3.1.1. Графический процессор (GPU)</h5>\n            <p class=\"text-sm text-slate-600 mb-3\">Это \"сердце\" видеокарты. Современные GPU имеют тысячи ядер, работающих параллельно. NVIDIA использует архитектуру Ada Lovelace, AMD - RDNA 3.</p>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">3.1.2. Видеопамять</h5>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>GDDR6X</b> (NVIDIA) - до 21+ Gbps</li>\n                <li><b>GDDR6</b> (AMD) - до 18-20 Gbps</li>\n                <li>Объём: 8-24GB в зависимости от модели</li>\n            </ul>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">3.1.3. Система питания (VRM)</h5>\n            <p class=\"text-sm text-slate-600 mb-4\">VRM обеспечивает питание GPU стабильным напряжением. Современные карты потребляют 400-600W под нагрузкой!</p>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">3.1.4. Система охлаждения</h5>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li>Радиатор с тепловыми трубками</li>\n                <li>2-3 вентилятора</li>\n                <li>Термопрокладки для VRAM и VRM</li>\n            </ul>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">3.2. Симптомы неисправности GPU</h4>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Артефакты</b> - искажения изображения: полосы, точки. Означает проблему с памятью или GPU.</li>\n                <li><b>Чёрный экран</b> - при нагрузке или при запуске. Перегрев или проблема с питанием.</li>\n                <li><b>Перегрев</b> - температура выше 90°C в простое - ненормально.</li>\n                <li><b>Не определяется</b> - BIOS не видит карту.</li>\n                <li><b>Синие/красные экраны</b> - ошибки видеодрайвера.</li>\n            </ul>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">3.3. Диагностика</h4>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">3.3.1. Программная диагностика</h5>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>GPU-Z</b> - информация о карте, мониторинг температуры</li>\n                <li><b>HWiNFO</b> - детальный мониторинг всех параметров</li>\n                <li><b>FurMark</b> - стресс-тест GPU</li>\n                <li><b>MSI Afterburner</b> - мониторинг, разгон, настройка вентиляторов</li>\n            </ul>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">3.3.2. Нормальные температуры</h5>\n            <div class=\"overflow-x-auto mb-4\">\n                <table class=\"w-full text-sm border-collapse\">\n                    <thead class=\"bg-slate-100\">\n                        <tr><th class=\"border p-2\">Режим</th><th class=\"border p-2\">Норма</th><th class=\"border p-2\">Критическая</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td class=\"border p-2\">Простой</td><td class=\"border p-2\">30-45°C</td><td class=\"border p-2\">70°C+</td></tr>\n                        <tr><td class=\"border p-2\">Нагрузка</td><td class=\"border p-2\">60-75°C</td><td class=\"border p-2\">90°C+</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">3.4. Обслуживание</h4>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li>Чистка от пыли</li>\n                <li>Замена термопасты на GPU (каждые 2-3 года)</li>\n                <li>Замена термопрокладок</li>\n                <li>Смазка вентиляторов</li>\n            </ul>\n            \n            <div class=\"mt-6 p-4 bg-blue-50 rounded-lg\">\n                <p class=\"text-sm text-blue-700\"><b>Видео:</b> <a href=\"https://rutube.ru/video/c8f067e64b87b16068e2c0fe5c542d21/\" class=\"underline text-red-600\" target=\"_blank\">Смотреть на Rutube</a></p>\n            </div>\n        ",
    "quiz": [
        {
            "question": "Что такое артефакты на видеокарте?",
            "options": [
                "Декорации в играх",
                "Искажения изображения",
                "Программы",
                "Драйвера"
            ],
            "correct": 1
        },
        {
            "question": "Какая нормальная температура GPU в простое?",
            "options": [
                "20-30°C",
                "30-40°C",
                "50-60°C",
                "70-80°C"
            ],
            "correct": 1
        },
        {
            "question": "Что такое VRM?",
            "options": [
                "Вентилятор",
                "Модуль питания",
                "Радиатор",
                "Видеопамять"
            ],
            "correct": 1
        },
        {
            "question": "Для чего нужны RT-ядра?",
            "options": [
                "Игры",
                "Трассировка лучей",
                "Охлаждение",
                "Звук"
            ],
            "correct": 1
        },
        {
            "question": "Какой тип памяти у RTX 4090?",
            "options": [
                "GDDR6",
                "GDDR6X",
                "GDDR5",
                "HBM2"
            ],
            "correct": 1
        }
    ]
},
  {
    "id": "cooling",
    "title": "Системы охлаждения",
    "icon": "thermometer",
    "description": "Воздушное, жидкостное охлаждение, термоинтерфейсы",
    "content": "\n<img src=\"/static/uploads/lessons/4fa0b873b48e4a58.jpeg\" class=\"w-full rounded-lg mb-4\">\n\n            <div class=\"mb-6\">\n                <imgg src=\"\" class=\"w-full rounded-lg mb-4\">\n                <p class=\"text-xs text-slate-500\">Фото кулера и радиатора</p>\n            </div>\n            \n            <h3 class=\"text-xl font-bold text-slate-900 mb-4\">4. Системы охлаждения ПК</h3>\n            <p class=\"text-sm text-slate-600 mb-4\">Система охлаждения - один из важнейших компонентов. Перегрев - главный враг электроники. При высокой температуре чипы теряют производительность (троттлинг) и могут выйти из строя.</p>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">4.1. Принцип теплоотвода</h4>\n            <p class=\"text-sm text-slate-600 mb-4\">Тепло от нагревающихся компонентов отводится через термоинтерфейс к радиатору, который рассеивает тепло в воздух. Трёхэтапный процесс: теплопередача → рассеивание → конвекция.</p>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">4.2. Типы систем охлаждения</h4>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">4.2.1. Воздушное охлаждение (Air Cooling)</h5>\n            <p class=\"text-sm text-slate-600 mb-3\">Самый распространённый тип. Состоит из радиатора и вентилятора. Простое, надёжное, недорогое.</p>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Радиатор</b> - алюминиевый, с рёбрами</li>\n                <li><b>Тепловые трубки</b> - медные, 4-8 штук</li>\n                <li><b>Вентилятор</b> - 92-140mm</li>\n            </ul>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">4.2.2. Башенные кулеры (Tower Cooler)</h5>\n            <p class=\"text-sm text-slate-600 mb-4\">Самый эффективный тип воздушного охлаждения. Двухбашенная конструкция с двумя радиаторами. Noctua NH-D15, Dark Rock Pro 5 - топовые представители.</p>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">4.2.3. AiO (All-in-One) - СЖО закрытого типа</h5>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Водоблок</b> - контактирует с CPU</li>\n                <li><b>Помпа</b> - обеспечивает циркуляцию жидкости</li>\n                <li><b>Радиатор</b> - 120-360mm</li>\n                <li>Тише воздушного при высокой нагрузке</li>\n            </ul>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">4.3. Подшипники вентиляторов</h4>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Sleeve bearing</b> - простой, недорогой, средний срок службы</li>\n                <li><b>Ball bearing</b> - шариковый, надёжный, долгий срок</li>\n                <li><b>Fluid dynamic bearing (FDB)</b> - самый тихий и долговечный</li>\n            </ul>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">4.4. Термоинтерфейсы</h4>\n            <div class=\"overflow-x-auto mb-4\">\n                <table class=\"w-full text-sm border-collapse\">\n                    <thead class=\"bg-slate-100\">\n                        <tr><th class=\"border p-2\">Тип</th><th class=\"border p-2\">Теплопроводность</th><th class=\"border p-2\">Особенности</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td class=\"border p-2\">Керамическая</td><td class=\"border p-2\">Средняя</td><td class=\"border p-2\">Безопасна, не проводит ток</td></tr>\n                        <tr><td class=\"border p-2\">Металлическая</td><td class=\"border p-2\">Высокая</td><td class=\"border p-2\">ПРОВОДИТ ТОК! Опасна</td></tr>\n                        <tr><td class=\"border p-2\">Жидкий металл</td><td class=\"border p-2\">Очень высокая</td><td class=\"border p-2\">Токопроводящая! Только для опытных</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">Популярные термопасты</h5>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Arctic MX-4</b> - 8.5 W/mK. Баланс цены и качества.</li>\n                <li><b>Thermal Grizzly Kryonaut</b> - 12.5 W/mK. Для разгона.</li>\n                <li><b>Noctua NT-H2</b> - хорошая, недорогая.</li>\n            </ul>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">4.5. Нормальные температуры</h4>\n            <div class=\"overflow-x-auto mb-4\">\n                <table class=\"w-full text-sm border-collapse\">\n                    <thead class=\"bg-slate-100\">\n                        <tr><th class=\"border p-2\">Компонент</th><th class=\"border p-2\">Простой</th><th class=\"border p-2\">Нагрузка</th><th class=\"border p-2\">Критическая</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td class=\"border p-2\">CPU (Desktop)</td><td class=\"border p-2\">30-45°C</td><td class=\"border p-2\">60-75°C</td><td class=\"border p-2\">90-100°C</td></tr>\n                        <tr><td class=\"border p-2\">GPU</td><td class=\"border p-2\">30-40°C</td><td class=\"border p-2\">60-80°C</td><td class=\"border p-2\">85-90°C</td></tr>\n                        <tr><td class=\"border p-2\">VRM</td><td class=\"border p-2\">30-40°C</td><td class=\"border p-2\">50-70°C</td><td class=\"border p-2\">80°C</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <div class=\"mt-6 p-4 bg-blue-50 rounded-lg\">\n                <p class=\"text-sm text-blue-700\"><b>Видео:</b> <a href=\"https://rutube.ru/video/a777fd92b5397054f45c1cf560ab5d4a/\" class=\"underline text-red-600\" target=\"_blank\">Смотреть на Rutube</a></p>\n            </div>\n        ",
    "quiz": [
        {
            "question": "Что такое троттлинг?",
            "options": [
                "Разгон процессора",
                "Снижение частоты при перегреве",
                "Увеличение напряжения",
                "Остановка вентилятора"
            ],
            "correct": 1
        },
        {
            "question": "Какая термопаста лучшая?",
            "options": [
                "КПТ-8",
                "Arctic MX-4",
                "Зубная паста",
                "Масло"
            ],
            "correct": 1
        },
        {
            "question": "Что такое AiO?",
            "options": [
                "Воздушное охлаждение",
                "Водяное охлаждение (закрытое)",
                "Стандарт",
                "Процессор"
            ],
            "correct": 1
        },
        {
            "question": "Какая критическая температура для CPU?",
            "options": [
                "70°C",
                "90°C",
                "100°C",
                "60°C"
            ],
            "correct": 1
        },
        {
            "question": "Из чего сделаны тепловые трубки?",
            "options": [
                "Алюминий",
                "Медь",
                "Сталь",
                "Пластик"
            ],
            "correct": 1
        }
    ]
},
  {
    "id": "motherboard",
    "title": "Ремонт материнских плат",
    "icon": "circuit-board",
    "description": "Устройство, диагностика и ремонт материнских плат",
    "content": "\n<img src=\"/static/uploads/lessons/0c37998affa34e9c.jpg\" class=\"w-full rounded-lg mb-4\">\n\n            <div class=\"mb-6\">\n                <imgg src=\"\" class=\"w-full rounded-lg mb-4\">\n                <p class=\"text-xs text-slate-500\">Фото материнской платы</p>\n            </div>\n            \n            <h3 class=\"text-xl font-bold text-slate-900 mb-4\">5. Материнские платы</h3>\n            <p class=\"text-sm text-slate-600 mb-4\">Материнская плата - основа компьютера, обеспечивающая связь между всеми компонентами. На ней расположены: сокет процессора, слоты памяти, чипсет, слоты расширения.</p>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">5.1. Основные компоненты</h4>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Сокет CPU</b> - Intel LGA 1700, AMD AM5</li>\n                <li><b>Слоты DIMM</b> - DDR4/DDR5</li>\n                <li><b>Чипсет</b> - управляет периферией</li>\n                <li><b>VRM</b> - модуль питания CPU (8-16 фаз)</li>\n                <li><b>Слоты PCIe</b> - для видеокарт и плат расширения</li>\n                <li><b>SATA/M.2</b> - разъёмы для накопителей</li>\n            </ul>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">5.2. Диагностика</h4>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">5.2.1. Визуальный осмотр</h5>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Вздутые конденсаторы</b> - крышка выгнута</li>\n                <li><b>Следы прогара</b> - потемнение платы</li>\n                <li><b>Трещины</b> - механические повреждения</li>\n                <li><b>Окисление</b> - зелёный налёт</li>\n            </ul>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">5.2.2. POST-карта</h5>\n            <p class=\"text-sm text-slate-600 mb-3\">POST-карта показывает код ошибки при загрузке:</p>\n            <div class=\"overflow-x-auto mb-4\">\n                <table class=\"w-full text-sm border-collapse\">\n                    <thead class=\"bg-slate-100\">\n                        <tr><th class=\"border p-2\">Код</th><th class=\"border p-2\">Значение</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td class=\"border p-2\">FF</td><td class=\"border p-2\">Тест пройден / CPU неисправен</td></tr>\n                        <tr><td class=\"border p-2\">C0</td><td class=\"border p-2\">Проблема с CPU</td></tr>\n                        <tr><td class=\"border p-2\">C1</td><td class=\"border p-2\">Тест памяти</td></tr>\n                        <tr><td class=\"border p-2\">0D</td><td class=\"border p-2\">Ошибка видео</td></tr>\n                        <tr><td class=\"border p-2\">00</td><td class=\"border p-2\">Успешная загрузка!</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">5.3. POST-сигналы (Beep Codes)</h4>\n            <div class=\"overflow-x-auto mb-4\">\n                <table class=\"w-full text-sm border-collapse\">\n                    <thead class=\"bg-slate-100\">\n                        <tr><th class=\"border p-2\">Сигнал</th><th class=\"border p-2\">AWARD BIOS</th><th class=\"border p-2\">AMI BIOS</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td class=\"border p-2\">1 короткий</td><td class=\"border p-2\">Всё OK</td><td class=\"border p-2\">Всё OK</td></tr>\n                        <tr><td class=\"border p-2\">1 длинный</td><td class=\"border p-2\">Проблема RAM</td><td class=\"border p-2\">Проблема питания</td></tr>\n                        <tr><td class=\"border p-2\">1 длинный, 2 коротких</td><td class=\"border p-2\">Ошибка видео</td><td class=\"border p-2\">Ошибка RAM</td></tr>\n                        <tr><td class=\"border p-2\">3 длинных</td><td class=\"border p-2\">Проблема ctrl</td><td class=\"border p-2\">Ошибка клавиатуры</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">5.4. Типичные неисправности</h4>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">5.4.1. Вздутые конденсаторы</h5>\n            <p class=\"text-sm text-slate-600 mb-4\">Самая частая проблема. Решение: замена конденсаторов на аналогичные по ёмкости и напряжению (LOW ESR).</p>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">5.4.2. Неисправность VRM</h5>\n            <p class=\"text-sm text-slate-600 mb-4\">VRM (модуль питания) может выйти из строя: пробой MOSFET, перегрев, высохшие конденсаторы.</p>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">5.4.3. Проблемы с BIOS</h5>\n            <p class=\"text-sm text-slate-600 mb-4\">Микросхема BIOS хранит прошивку. При сбое - перепрошивка или замена чипа. Разрядка батарейки CR2032 - сброс настроек.</p>\n            \n            <div class=\"mt-6 p-4 bg-blue-50 rounded-lg\">\n                <p class=\"text-sm text-blue-700\"><b>Видео:</b> <a href=\"https://rutube.ru/video/2637e0127beeb8a505cd8afb067dae92/\" class=\"underline text-red-600\" target=\"_blank\">Смотреть на Rutube</a></p>\n            </div>\n        ",
    "quiz": [
        {
            "question": "Что такое VRM?",
            "options": [
                "Видеопамять",
                "Модуль питания",
                "Вентилятор",
                "Слот памяти"
            ],
            "correct": 1
        },
        {
            "question": "Какой сокет у Intel 14-го поколения?",
            "options": [
                "LGA 1200",
                "LGA 1700",
                "AM4",
                "AM5"
            ],
            "correct": 1
        },
        {
            "question": "Что хранит батарейка CR2032?",
            "options": [
                "Дату и время",
                "Все настройки BIOS",
                "Пароли",
                "Данные HDD"
            ],
            "correct": 1
        },
        {
            "question": "Какой форм-фактор самый популярный?",
            "options": [
                "ATX",
                "ITX",
                "E-ATX",
                "NLX"
            ],
            "correct": 0
        },
        {
            "question": "Сколько фаз питания нормально для CPU?",
            "options": [
                "2-4",
                "4-6",
                "8-16",
                "20+"
            ],
            "correct": 2
        }
    ]
},
  {
    "id": "storage",
    "title": "Диагностика накопителей",
    "icon": "hard-drive",
    "description": "HDD, SSD, NVMe - устройство и диагностика",
    "content": "\n<img src=\"/static/uploads/lessons/07c6a77eacf240f5.jpeg\" class=\"w-full rounded-lg mb-4\">\n\n            <div class=\"mb-6\">\n                <imgg src=\"\" class=\"w-full rounded-lg mb-4\">\n                <p class=\"text-xs text-slate-500\">Фото накопителей</p>\n            </div>\n            \n            <h3 class=\"text-xl font-bold text-slate-900 mb-4\">7. Накопители данных</h3>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">7.1. Типы накопителей</h4>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">7.1.1. HDD (Hard Disk Drive)</h5>\n            <p class=\"text-sm text-slate-600 mb-4\">Механический накопитель с вращающимися дисками (5400-7200 об/мин). Пластины, головки, шпиндель.</p>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">7.1.2. SATA SSD</h5>\n            <p class=\"text-sm text-slate-600 mb-4\">Твердотельный накопитель с интерфейсом SATA. Скорость до 550 МБ/с (ограничена SATA III).</p>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">7.1.3. NVMe SSD</h5>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>PCIe 3.0 x4</b> - до 3500 МБ/с</li>\n                <li><b>PCIe 4.0 x4</b> - до 7000 МБ/с</li>\n                <li><b>PCIe 5.0 x4</b> - до 12000 МБ/с</li>\n            </ul>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">7.2. Программы для диагностики</h4>\n            <div class=\"overflow-x-auto mb-4\">\n                <table class=\"w-full text-sm border-collapse\">\n                    <thead class=\"bg-slate-100\">\n                        <tr><th class=\"border p-2\">Программа</th><th class=\"border p-2\">Назначение</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td class=\"border p-2\">CrystalDiskInfo</td><td class=\"border p-2\">S.M.A.R.T. параметры, здоровье</td></tr>\n                        <tr><td class=\"border p-2\">CrystalDiskMark</td><td class=\"border p-2\">Тест скорости</td></tr>\n                        <tr><td class=\"border p-2\">Victoria</td><td class=\"border p-2\">Сканирование HDD, поиск бэд-блоков</td></tr>\n                        <tr><td class=\"border p-2\">HD Tune</td><td class=\"border p-2\">Полный анализ диска</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">7.3. S.M.A.R.T. параметры</h4>\n            <div class=\"overflow-x-auto mb-4\">\n                <table class=\"w-full text-sm border-collapse\">\n                    <thead class=\"bg-slate-100\">\n                        <tr><th class=\"border p-2\">Параметр</th><th class=\"border p-2\">Норма</th><th class=\"border p-2\">Плохо</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td class=\"border p-2\">Reallocated Sectors</td><td class=\"border p-2\">0</td><td class=\"border p-2\">>0</td></tr>\n                        <tr><td class=\"border p-2\">Current Pending Sectors</td><td class=\"border p-2\">0</td><td class=\"border p-2\">>0</td></tr>\n                        <tr><td class=\"border p-2\">UltraDMA CRC Errors</td><td class=\"border p-2\">0</td><td class=\"border p-2\">>100</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">7.4. Признаки скорой смерти HDD</h4>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Странные звуки</b> - щелчки, скрежет, писк</li>\n                <li><b>Тормоза</b> - замедление работы при чтении</li>\n                <li><b>BAD-блоки</b> - ошибки при проверке</li>\n                <li><b>Зависания</b> - при обращении к диску</li>\n            </ul>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">7.5. Обслуживание</h4>\n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">HDD</h5>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li>Не дефрагментировать (для SSD)</li>\n                <li>Проверка S.M.A.R.T. - регулярно</li>\n                <li>Резервное копирование данных</li>\n            </ul>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">SSD</h5>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li>Не дефрагментировать!</li>\n                <li>Оставить 10-15% свободного места</li>\n                <li>Включить TRIM в Windows</li>\n            </ul>\n            \n            <div class=\"mt-6 p-4 bg-blue-50 rounded-lg\">\n                <p class=\"text-sm text-blue-700\"><b>Видео:</b> <a href=\"https://rutube.ru/video/89f7753282d69813ea405b6da04a7811/\" class=\"underline text-red-600\" target=\"_blank\">Смотреть на Rutube</a></p>\n            </div>\n        ",
    "quiz": [
        {
            "question": "Какой накопитель самый быстрый?",
            "options": [
                "HDD",
                "SATA SSD",
                "NVMe",
                "USB флешка"
            ],
            "correct": 2
        },
        {
            "question": "Что такое S.M.A.R.T.?",
            "options": [
                "Технология охлаждения",
                "Самодиагностика диска",
                "Система защиты",
                "Тип памяти"
            ],
            "correct": 1
        },
        {
            "question": "Какой максимум скорости PCIe 4.0 x4?",
            "options": [
                "3500 MB/s",
                "7000 MB/s",
                "12000 MB/s",
                "1500 MB/s"
            ],
            "correct": 1
        },
        {
            "question": "Можно ли дефрагментировать SSD?",
            "options": [
                "Да",
                "Нет",
                "Только один раз",
                "Только вручную"
            ],
            "correct": 1
        },
        {
            "question": "Что делает команда TRIM?",
            "options": [
                "Ускоряет запись",
                "Очищает удалённые блоки",
                "Проверяет диск",
                "Шифрует данные"
            ],
            "correct": 1
        }
    ]
},
  {
    "id": "ram_diagnostics",
    "title": "Диагностика оперативной памяти",
    "icon": "memory-stick",
    "description": "Тестирование и устранение проблем с RAM",
    "content": "\n<img src=\"/static/uploads/lessons/a4ffd235790040d2.jpe\" class=\"w-full rounded-l mb-4\">\n\n            <div class=\"mb-6\">\n                <img src=\"\" class=\"w-full rounded-l mb-4\">\n                <p class=\"text-xs text-slate-500\">Фото оперативной памяти</p>\n            </div>\n            \n            <h3 class=\"text-xl font-bold text-slate-900 mb-4\">6. Оперативная память (ОЗУ/RAM)</h3>\n            <p class=\"text-sm text-slate-600 mb-4\">Оперативная память - энергозависимая память, хранит данные и коды программ. Её нехватка приводит к тормозам, а ошибки - к синим экранам (BSOD).</p>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">6.1. Устройство модуля памяти</h4>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Микросхемы памяти</b> - чипы DRAM (4-16 штук)</li>\n                <li><b>SPD-микросхема</b> - хранит информацию о модуле</li>\n                <li><b>Теплораспределитель</b> - отвод тепла</li>\n            </ul>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">6.2. Типы памяти DDR</h4>\n            <div class=\"overflow-x-auto mb-4\">\n                <table class=\"w-full text-sm border-collapse\">\n                    <thead class=\"b-slate-100\">\n                        <tr><th class=\"border p-2\">Тип</th><th class=\"border p-2\">Частота</th><th class=\"border p-2\">Напряжение</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td class=\"border p-2\">DDR3</td><td class=\"border p-2\">800-2133 MHz</td><td class=\"border p-2\">1.5V</td></tr>\n                        <tr><td class=\"border p-2\">DDR4</td><td class=\"border p-2\">2133-5000 MHz</td><td class=\"border p-2\">1.2V</td></tr>\n                        <tr><td class=\"border p-2\">DDR5</td><td class=\"border p-2\">4800-8000 MHz</td><td class=\"border p-2\">1.1V</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">6.3. Симптомы неисправности</h4>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Синий экран (BSOD)</b> - MEMORY_MANAGEMENT, IRQL_NOT_LESS_OR_EQUAL</li>\n                <li><b>Не проходит POST</b> - один длинный, два коротких сигнала</li>\n                <li><b>Спонтанные перезагрузки</b> - особенно при нагрузке</li>\n                <li><b>Артефакты</b> - искажения в играх</li>\n                <li><b>Уменьшение объёма</b> - Windows видит меньше памяти</li>\n            </ul>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">6.4. Диагностика</h4>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>MemTest86</b> - лучший автономный тест</li>\n                <li><b>Windows Memory Dianostic</b> - встроенная утилита</li>\n                <li><b>TestMem5 (TM5)</b> - продвинутый тест</li>\n                <li><b>AIDA64</b> - комплексная диагностика</li>\n            </ul>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">Правила тестирования</h5>\n            <ol class=\"list-decimal pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li>Минимум 4-5 проходов теста</li>\n                <li>Тестировать каждый модуль отдельно</li>\n                <li>Проверять в разных слотах</li>\n                <li>Ноль ошибок после 5 проходов = память исправна</li>\n            </ol>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">6.5. XMP профили</h4>\n            <p class=\"text-sm text-slate-600 mb-4\">XMP (eXtreme Memory Profile) - технология Intel для автоматического разгона памяти. Производитель записывает профили в SPD. DDR5 использует XMP 3.0 (до 5 пользовательских профилей).</p>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">6.6. Двухканальный режим (Dual Channel)</h4>\n            <p class=\"text-sm text-slate-600 mb-4\">Два канала работают параллельно, удваивая пропускную способность. Вставьте модули в цветные слоты (обычно A2 и B2).</p>\n            \n            <div class=\"mt-6 p-4 b-blue-50 rounded-l\">\n                <p class=\"text-sm text-blue-700\"><b>Видео:</b> <a href=\"https://rutube.ru/video/e807a33a7d3bb23b6ecfb6cc3f72c2a0/\" class=\"underline text-red-600\" target=\"_blank\">Смотреть на Rutube</a></p>\n            </div>\n        ",
    "quiz": [
        {
            "question": "Что означает DDR?",
            "options": [
                "Double Data Rate",
                "Direct Data Read",
                "Digital Dynamic RAM",
                "Dual Data Reading"
            ],
            "correct": 0
        },
        {
            "question": "Что хранит SPD?",
            "options": [
                "Личные данные",
                "Пароли",
                "Настройки модуля памяти",
                "Видео"
            ],
            "correct": 2
        },
        {
            "question": "Какой тайминг самый важный?",
            "options": [
                "CL",
                "tRCD",
                "tRP",
                "Все одинаковы"
            ],
            "correct": 0
        },
        {
            "question": "Как проверить память?",
            "options": [
                "CPU-Z",
                "MemTest86",
                "GPU-Z",
                "DiskInfo"
            ],
            "correct": 1
        },
        {
            "question": "Сколько каналов у DDR5?",
            "options": [
                "Один",
                "Два",
                "Четыре",
                "Восемь"
            ],
            "correct": 1
        }
    ]
},
  {
    "id": "cpu",
    "title": "Диагностика CPU",
    "icon": "cpu",
    "description": "Устройство, диагностика и обслуживание процессоров",
    "content": "\n<img src=\"/static/uploads/lessons/2dfea30f981d4876.jpeg\" class=\"w-full rounded-lg mb-4\">\n\n            <div class=\"mb-6\">\n                <imgg src=\"\" class=\"w-full rounded-lg mb-4\">\n                <p class=\"text-xs text-slate-500\">Фото процессора</p>\n            </div>\n            \n            <h3 class=\"text-xl font-bold text-slate-900 mb-4\">8. Процессоры (CPU)</h3>\n            <p class=\"text-sm text-slate-600 mb-4\">Центральный процессор - главный вычислительный элемент компьютера. Состоит из миллиардов транзисторов.</p>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">8.1. Основные характеристики</h4>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Тактовая частота</b> - 3.5-5.5 GHz</li>\n                <li><b>Количество ядер</b> - 4-24 cores</li>\n                <li><b>Кэш L1/L2/L3</b> - быстрая память внутри CPU</li>\n                <li><b>TDP</b> - тепловыделение (65-250W)</li>\n            </ul>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">8.2. Сокеты</h4>\n            <div class=\"overflow-x-auto mb-4\">\n                <table class=\"w-full text-sm border-collapse\">\n                    <thead class=\"bg-slate-100\">\n                        <tr><th class=\"border p-2\">Производитель</th><th class=\"border p-2\">Сокет</th><th class=\"border p-2\">Поколения</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td class=\"border p-2\">Intel</td><td class=\"border p-2\">LGA 1700</td><td class=\"border p-2\">12/13/14gen</td></tr>\n                        <tr><td class=\"border p-2\">AMD</td><td class=\"border p-2\">AM5</td><td class=\"border p-2\">Ryzen 7000</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">8.3. Симптомы проблем</h4>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Не проходит POST</b> - код ошибки FF или CC</li>\n                <li><b>Перегрев</b> - троттлинг, аварийное выключение</li>\n                <li><b>Нестабильность</b> - ошибки в приложениях</li>\n                <li><b>Синие экраны</b> - Machine Check Exception</li>\n            </ul>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">8.4. Программы для диагностики</h4>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>CPU-Z</b> - информация о процессоре</li>\n                <li><b>HWiNFO</b> - детальный мониторинг температур</li>\n                <li><b>Cinebench R23/R24</b> - рендеринг, проверка производительности</li>\n                <li><b>Prime95</b> - стресс-тест стабильности</li>\n            </ul>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">8.5. Нормальные температуры</h4>\n            <div class=\"overflow-x-auto mb-4\">\n                <table class=\"w-full text-sm border-collapse\">\n                    <thead class=\"bg-slate-100\">\n                        <tr><th class=\"border p-2\">Режим</th><th class=\"border p-2\">Норма</th><th class=\"border p-2\">Критическая</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td class=\"border p-2\">Простой</td><td class=\"border p-2\">30-45°C</td><td class=\"border p-2\">70°C+</td></tr>\n                        <tr><td class=\"border p-2\">Нагрузка</td><td class=\"border p-2\">60-75°C</td><td class=\"border p-2\">90°C+</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <div class=\"mt-6 p-4 bg-blue-50 rounded-lg\">\n                <p class=\"text-sm text-blue-700\"><b>Видео:</b> <a href=\"https://rutube.ru/video/511e4eaef79fd068f1fe2c23b0d7e724/\" class=\"underline text-red-600\" target=\"_blank\">Смотреть на Rutube</a></p>\n            </div>\n        ",
    "quiz": [
        {
            "question": "Какая нормальная температура CPU в простое?",
            "options": [
                "50-60°C",
                "30-45°C",
                "60-70°C",
                "70-80°C"
            ],
            "correct": 1
        },
        {
            "question": "Что такое Turbo Boost?",
            "options": [
                "Охлаждение",
                "Автоматический разгон",
                "Защита от перегрева",
                "Экономия энергии"
            ],
            "correct": 1
        },
        {
            "question": "Какой техпроцесс у Intel 14-gen?",
            "options": [
                "14нм",
                "10нм",
                "7нм",
                "5нм"
            ],
            "correct": 0
        },
        {
            "question": "Сколько ядер у i9-14900K?",
            "options": [
                "8",
                "12",
                "24",
                "16"
            ],
            "correct": 2
        },
        {
            "question": "Что такое TDP?",
            "options": [
                "Температура",
                "Тепловыделение",
                "Тактовая частота",
                "Тип памяти"
            ],
            "correct": 1
        }
    ]
},
  {
    "id": "bios_settings",
    "title": "Настройка BIOS",
    "icon": "settings",
    "description": "Конфигурация, оптимизация и прошивка BIOS/UEFI",
    "content": "\n            <div class=\"mb-6\">\n                <img src=\"/static/uploads/lessons/c87817ace36c4693.jpg\" class=\"w-full rounded-lg mb-4\">\n                <p class=\"text-xs text-slate-500\">Скриншот BIOS</p>\n            </div>\n            \n            <h3 class=\"text-xl font-bold text-slate-900 mb-4\">9. BIOS/UEFI</h3>\n            <p class=\"text-sm text-slate-600 mb-4\"><b>BIOS</b> - базовая система ввода/вывода. <b>UEFI</b> - современный стандарт с поддержкой GPT, Secure Boot.</p>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">9.1. Важные настройки</h4>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">9.1.1. XMP/EXPO профили</h5>\n            <p class=\"text-sm text-slate-600 mb-4\">XMP (Intel) или EXPO (AMD) - профили для автоматического разгона памяти. Включает XMP/EXPO в BIOS - ставится Auto или XMP profile.</p>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">9.1.2. Виртуализация</h5>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Intel VT-x</b> - виртуализация Intel</li>\n                <li><b>AMD SVM</b> - виртуализация AMD</li>\n                <li>Нужна для: VirtualBox, VMware, Hyper-V</li>\n            </ul>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">9.1.3. TPM (Trusted Platform Module)</h5>\n            <p class=\"text-sm text-slate-600 mb-4\">Модуль безопасности для Windows 11. Windows 11 требует TPM 2.0.</p>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">9.1.4. Secure Boot</h5>\n            <p class=\"text-sm text-slate-600 mb-4\">Защита от загрузки неподписанных ОС. Для Linux - отключить или добавить ключи.</p>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">9.2. Прошивка BIOS</h4>\n            <ol class=\"list-decimal pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li>Скачать последнюю версию с сайта производителя МП</li>\n                <li>Записать на флешку FAT32</li>\n                <li>Зайти в BIOS/UEFI → Tools → Q-Flash/Flash</li>\n                <li>Выбрать файл с флешки</li>\n                <li>Дождаться завершения. Не выключайте!</li>\n            </ol>\n            \n            <div class=\"p-4 bg-red-50 rounded-lg mb-4\">\n                <p class=\"text-sm text-red-700\"><b>ВНИМАНИЕ!</b> При неудачной прошивке плата может не работать! Всегда используйте стабильное питание.</p>\n            </div>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">9.3. Сброс BIOS</h4>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Программный</b> - Load Setup Defaults в BIOS</li>\n                <li><b>Аппаратный</b> - переставить перемычку CMOS или вынуть батарейку на 5 минут</li>\n            </ul>\n            \n            <div class=\"mt-6 p-4 bg-blue-50 rounded-lg\">\n                <p class=\"text-sm text-blue-700\"><b>Видео:</b> <a href=\"https://rutube.ru/video/f29d7f6e27a891aa32bf65b91148330b/\" class=\"underline text-red-600\" target=\"_blank\">Смотреть на Rutube</a></p>\n            </div>\n        ",
    "quiz": [
        {
            "question": "Что такое XMP?",
            "options": [
                "Технология охлаждения",
                "Профиль памяти",
                "Тип процессора",
                "Система питания"
            ],
            "correct": 1
        },
        {
            "question": "Что делает Secure Boot?",
            "options": [
                "Защищает от вирусов при загрузке",
                "Шифрует диск",
                "Ограничивает запуск ОС",
                "Проверяет драйвера"
            ],
            "correct": 2
        },
        {
            "question": "Как сбросить BIOS?",
            "options": [
                "Вынуть батарейку на 5 минут",
                "Нажать Reset",
                "Выключить ПК",
                "Вынуть ОЗУ"
            ],
            "correct": 0
        },
        {
            "question": "Что такое TPM?",
            "options": [
                "Процессор",
                "Модуль безопасности",
                "Тип памяти",
                "Видеокарта"
            ],
            "correct": 1
        },
        {
            "question": "Какой режим загрузки поддерживает GPT?",
            "options": [
                "Legacy",
                "UEFI",
                "BIOS",
                "DOS"
            ],
            "correct": 1
        }
    ]
},
  {
    "id": "networking",
    "title": "Сети и интернет",
    "icon": "wifi",
    "description": "Настройка сетей, Wi-Fi, роутеров и диагностика подключений",
    "content": "\n<img src=\"/static/uploads/lessons/8cb4e841f0ff497d.jpeg\" class=\"w-full rounded-lg mb-4\">\n\n            <div class=\"mb-6\">\n                <imgg src=\"\" class=\"w-full rounded-lg mb-4\">\n                <p class=\"text-xs text-slate-500\">Изображение сети</p>\n            </div>\n            \n            <h3 class=\"text-xl font-bold text-slate-900 mb-4\">10. Сети и интернет</h3>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">10.1. Основы сетей</h4>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>IPv4</b> - 32 бита: 4 октета (0-255)</li>\n                <li><b>Частные адреса</b>: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16</li>\n                <li><b>Маска подсети</b>: /24 = 255.255.255.0</li>\n                <li><b>Шлюз по умолчанию</b>: обычно .1 (192.168.0.1)</li>\n            </ul>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">10.2. Команды Windows для диагностики</h4>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>ipconfig</b> - просмотр IP-конфигурации</li>\n                <li><b>ipconfig /all</b> - подробная инфа</li>\n                <li><b>ping 8.8.8.8</b> - тест connectivity</li>\n                <li><b>tracert google.com</b> - трассировка</li>\n                <li><b>nslookup google.com</b> - проверка DNS</li>\n            </ul>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">10.3. Частые проблемы</h4>\n            <div class=\"overflow-x-auto mb-4\">\n                <table class=\"w-full text-sm border-collapse\">\n                    <thead class=\"bg-slate-100\">\n                        <tr><th class=\"border p-2\">Проблема</th><th class=\"border p-2\">Решение</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td class=\"border p-2\">Нет IP (169.254.x.x)</td><td class=\"border p-2\">Не получил DHCP, проверить кабель/роутер</td></tr>\n                        <tr><td class=\"border p-2\">Нет интернета</td><td class=\"border p-2\">Ping 8.8.8.8, проверить WAN</td></tr>\n                        <tr><td class=\"border p-2\">Нет DNS</td><td class=\"border p-2\">Прописать 8.8.8.8</td></tr>\n                        <tr><td class=\"border p-2\">Медленный Wi-Fi</td><td class=\"border p-2\">Сменить канал, 5GHz</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">10.4. Настройка роутера</h4>\n            <ol class=\"list-decimal pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li>Подключите кабель провайдера в WAN</li>\n                <li>Введите в браузере 192.168.0.1 или 192.168.1.1</li>\n                <li>Логин/пароль: admin/admin или указан на стикере</li>\n            </ol>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">10.5. Сетевые кабели</h4>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Cat 5e</b> - до 100 Mbps</li>\n                <li><b>Cat 6</b> - до 1 Gbps</li>\n                <li><b>Cat 6a</b> - до 10 Gbps</li>\n            </ul>\n        ",
    "quiz": [
        {
            "question": "Какой IP-адрес в частной сети 192.168.x.x?",
            "options": [
                "Публичный",
                "Частный",
                "Локальный только для роутера",
                "Зарезервирован"
            ],
            "correct": 1
        },
        {
            "question": "Что делает команда ping?",
            "options": [
                "Показывает IP",
                "Проверяет соединение",
                "Трассирует маршрут",
                "Показывает DNS"
            ],
            "correct": 1
        },
        {
            "question": "Сколько бит в IPv4?",
            "options": [
                "16",
                "32",
                "64",
                "128"
            ],
            "correct": 1
        },
        {
            "question": "Что такое DHCP?",
            "options": [
                "Тип шифрования",
                "Автораздача IP-адресов",
                "Протокол Wi-Fi",
                "Сетевой фильтр"
            ],
            "correct": 1
        },
        {
            "question": "Какой канал лучше для 2.4GHz Wi-Fi?",
            "options": [
                "1",
                "6",
                "11",
                "Любой"
            ],
            "correct": 2
        }
    ]
},
  {
    "id": "laptop_repair",
    "title": "Ремонт ноутбуков",
    "icon": "laptop",
    "description": "Разборка, ремонт, чистка и обслуживание ноутбуков",
    "content": "\n<img src=\"/static/uploads/lessons/af285c4a812e42d4.jpeg\" class=\"w-full rounded-lg mb-4\">\n\n            <div class=\"mb-6\">\n                <imgg src=\"\" class=\"w-full rounded-lg mb-4\">\n                <p class=\"text-xs text-slate-500\">Ремонт ноутбука</p>\n            </div>\n            \n            <h3 class=\"text-xl font-bold text-slate-900 mb-4\">11. Ремонт ноутбуков</h3>\n            <p class=\"text-sm text-slate-600 mb-4\">Ноутбук требует особого подхода к ремонту из-за компактной конструкции. Все компоненты спроектированы для минимизации размера.</p>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">11.1. Типичные неисправности</h4>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">11.1.1. Ноутбук не включается</h5>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Нет питания от сети</b> - проверьте БП</li>\n                <li><b>Разряжена батарея</b> - подключите БП</li>\n                <li><b>Неисправность разъёма питания (DC Jack)</b> - требует пайки</li>\n                <li><b>Сброс CMOS</b> - выньте батарейку на 5 минут</li>\n            </ul>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">11.1.2. Батарея не заряжается</h5>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Износ батареи</b> - после 3-5 лет ёмкость падает</li>\n                <li><b>Неисправен контроллер заряда</b> - ремонт платы</li>\n            </ul>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">11.1.3. Перегрев</h5>\n            <p class=\"text-sm text-slate-600 mb-4\">Перегрев - очень частая проблема. Причины: пыль, высохшая термопаста, неисправность вентилятора.</p>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">11.2. Разборка ноутбука</h4>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">Необходимые инструменты</h5>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Отвёртки</b> - крестовые (#0, #1), Torx (T6, T8, T10)</li>\n                <li><b>Пластиковый инструмент</b> - медиаторы для открывания</li>\n                <li><b>Антистатический браслет</b> - обязательно!</li>\n            </ul>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">Алгоритм разборки</h5>\n            <ol class=\"list-decimal pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li>Выключите ноутбук, отключите БП, выньте батарею</li>\n                <li>Выкрутите винты нижней крышки (все разной длины!)</li>\n                <li>Откройте крышку пластиковым инструментом</li>\n                <li>Отключите все шлейфы</li>\n                <li>Снимите системы охлаждения при необходимости</li>\n            </ol>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">11.3. Чистка системы охлаждения</h4>\n            <ol class=\"list-decimal pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li>Разобрать ноутбук, снять систему охлаждения</li>\n                <li>Удалить пыль с радиатора и вентилятора</li>\n                <li>Удалить старую термопасту спиртом</li>\n                <li>Нанести новую термопасту (Arctic MX-4)</li>\n                <li>Собрать в обратном порядке</li>\n            </ol>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">11.4. Замена компонентов</h4>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>RAM</b> - SODIMM, DDR3/DDR4/DDR5</li>\n                <li><b>SSD/HDD</b> - 2.5\" SATA, M.2 SATA, M.2 NVMe</li>\n                <li><b>Wi-Fi</b> - Mini-PCIe или M.2</li>\n                <li><b>Клавиатура</b> - точная модель, язык</li>\n                <li><b>Матрица</b> - разрешение, тип (IPS/TN), разъём</li>\n            </ul>\n        ",
    "quiz": [
        {
            "question": "Как часто чистить ноутбук от пыли?",
            "options": [
                "Раз в год",
                "Раз в 3 года",
                "Каждые 5 лет",
                "Никогда"
            ],
            "correct": 0
        },
        {
            "question": "Что такое SODIMM?",
            "options": [
                "Тип процессора",
                "Форм-фактор памяти ноутбука",
                "Разъём видеокарты",
                "Тип SSD"
            ],
            "correct": 1
        },
        {
            "question": "Если ноутбук не включается - что проверить сначала?",
            "options": [
                "Оперативную память",
                "Жёсткий диск",
                "Блок питания",
                "Кнопку питания"
            ],
            "correct": 2
        },
        {
            "question": "Что такое тачпад?",
            "options": [
                "Внешняя мышь",
                "Сенсорная панель",
                "Клавиатура",
                "Экран"
            ],
            "correct": 1
        },
        {
            "question": "Какая нормальная температура ноутбука в нагрузке?",
            "options": [
                "40-50°C",
                "60-75°C",
                "80-90°C",
                "100°C"
            ],
            "correct": 1
        }
    ]
},
  {
    "id": "printers",
    "title": "Оргтехника",
    "icon": "printer",
    "description": "Принтеры, МФУ, картриджи и обслуживание",
    "content": "\n<img src=\"/static/uploads/lessons/6bd7708ba57b4551.jpeg\" class=\"w-full rounded-lg mb-4\">\n\n            <div class=\"mb-6\">\n                <imgg src=\"\" class=\"w-full rounded-lg mb-4\">\n                <p class=\"text-xs text-slate-500\">Изображение принтера</p>\n            </div>\n            \n            <h3 class=\"text-xl font-bold text-slate-900 mb-4\">12. Оргтехника</h3>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">12.1. Виды принтеров</h4>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">12.1.1. Лазерные</h5>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Тонер</b> - порошок, плавится лазером</li>\n                <li><b>Быстрая печать</b> - 20-60 стр/мин</li>\n                <li><b>Экономичный</b> - дешёвый отпечаток</li>\n            </ul>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">12.1.2. Струйные</h5>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Чернила</b> - жидкие, разные цвета</li>\n                <li><b>Фото</b> - лучше для фото</li>\n                <li><b>Засыхают</b> - регулярно печатать</li>\n            </ul>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">12.2. Картриджи</h4>\n            \n            <h5 class=\"font-medium text-slate-800 mb-2 mt-4\">Лазерные картриджи</h5>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li>Бункер с тонером</li>\n                <li>Фотобарабан (DRUM)</li>\n                <li>Ролик заряда (PCR)</li>\n                <li>Ресурс - 1500-10000 стр</li>\n            </ul>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">12.3. Типичные проблемы</h4>\n            <div class=\"overflow-x-auto mb-4\">\n                <table class=\"w-full text-sm border-collapse\">\n                    <thead class=\"bg-slate-100\">\n                        <tr><th class=\"border p-2\">Проблема</th><th class=\"border p-2\">Причина</th><th class=\"border p-2\">Решение</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td class=\"border p-2\">Бледная печать</td><td class=\"border p-2\">Мало тонера</td><td class=\"border p-2\">Заправить</td></tr>\n                        <tr><td class=\"border p-2\">Чёрные полосы</td><td class=\"border p-2\">Повреждён барабан</td><td class=\"border p-2\">Заменить картридж</td></tr>\n                        <tr><td class=\"border p-2\">Белые полосы</td><td class=\"border p-2\">Тонер не подаётся</td><td class=\"border p-2\">Встряхнуть картридж</td></tr>\n                        <tr><td class=\"border p-2\">Полосы (струйный)</td><td class=\"border p-2\">Засохла головка</td><td class=\"border p-2\">Очистка сопел</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">12.4. Обслуживание</h4>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Чистка лазерного</b> - отключить от сети, протереть, продуть</li>\n                <li><b>Чистка струйного</b> - программная очистка головок</li>\n                <li><b>Не разбирать барабан!</b></li>\n            </ul>\n        ",
    "quiz": [
        {
            "question": "Какой принтер лучше для текста?",
            "options": [
                "Струйный",
                "Лазерный",
                "Матричный",
                "Светодиодный"
            ],
            "correct": 1
        },
        {
            "question": "Что такое тонер?",
            "options": [
                "Чернила",
                "Порошок",
                "Бумага",
                "Свет"
            ],
            "correct": 1
        },
        {
            "question": "Что такое МФУ?",
            "options": [
                "Принтер и сканер",
                "Принтер, сканер, копир",
                "Монитор",
                "Факс"
            ],
            "correct": 1
        },
        {
            "question": "Можно ли дефрагментировать SSD?",
            "options": [
                "Да",
                "Нет",
                "Только HDD",
                "Только RAID"
            ],
            "correct": 1
        },
        {
            "question": "Как часто чистить лазерный принтер?",
            "options": [
                "Каждый день",
                "Раз в месяц",
                "По необходимости",
                "Никогда"
            ],
            "correct": 2
        }
    ]
},
  {
    "id": "data_recovery",
    "title": "Хранилища данных",
    "icon": "database",
    "description": "Восстановление данных, RAID массивы и NAS",
    "content": "\n            <div class=\"mb-6\">\n                <img src=\"/static/uploads/lessons/d37f5e3a15fe4dc1.jpg\" class=\"w-full rounded-lg mb-4\">\n                <p class=\"text-xs text-slate-500\">Изображение хранилища данных</p>\n            </div>\n            \n            <h3 class=\"text-xl font-bold text-slate-900 mb-4\">13. Хранилища данных</h3>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">13.1. Жёсткие диски (HDD)</h4>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>Пластины</b> - 1-5 шт, 7200/5400 RPM</li>\n                <li><b>S.M.A.R.T.</b> - самодиагностика диска</li>\n                <li>Критичные атрибуты: Reallocated Sectors Count</li>\n            </ul>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">13.2. SSD накопители</h4>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>SATA SSD</b> - до 560 MB/s</li>\n                <li><b>M.2 NVMe</b> - до 7000 MB/s (PCIe 4.0)</li>\n                <li><b>TRIM</b> - команда для очистки удалённых блоков</li>\n            </ul>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">13.3. RAID массивы</h4>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>RAID 0</b> - Striping, без отказоустойчивости</li>\n                <li><b>RAID 1</b> - Mirroring, зеркало</li>\n                <li><b>RAID 5</b> - Striping + Parity, мин 3 диска</li>\n                <li><b>RAID 6</b> - Двойная чётность, 2 диска отказа</li>\n                <li><b>RAID 10</b> - 1+0, зеркало + страйп</li>\n            </ul>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">13.4. Восстановление данных</h4>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>R-Studio</b> - платная, мощная</li>\n                <li><b>TestDisk + PhotoRec</b> - бесплатная</li>\n                <li><b>Recuva</b> - простая для файлов</li>\n            </ul>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">13.5. Правило 3-2-1</h4>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li><b>3 копии данных</b></li>\n                <li><b>2 разных носителя</b></li>\n                <li><b>1 копия вне офиса (облако)</b></li>\n            </ul>\n            \n            <h4 class=\"font-semibold text-slate-900 mb-3 mt-6\">13.6. NAS (Network Attached Storage)</h4>\n            <p class=\"text-sm text-slate-600 mb-3\">Сетевое хранилище. Бренды: QNAP, Synology, WD My Cloud.</p>\n            <ul class=\"list-disc pl-5 space-y-2 text-sm text-slate-600 mb-4\">\n                <li>Общая папка (SMB)</li>\n                <li>Time Machine (Mac)</li>\n                <li>Резервные копии</li>\n                <li>DLNA/Media Server</li>\n            </ul>\n        ",
    "quiz": [
        {
            "question": "Что такое NAS?",
            "options": [
                "Тип HDD",
                "Сетевое хранилище",
                "Видеокарта",
                "Оперативная память"
            ],
            "correct": 1
        },
        {
            "question": "Что делает правило 3-2-1?",
            "options": [
                "Шифрование данных",
                "Резервное копирование",
                "Восстановление данных",
                "Защита паролем"
            ],
            "correct": 1
        },
        {
            "question": "Что лучше для надёжности - RAID 0 или RAID 1?",
            "options": [
                "RAID 0",
                "RAID 1",
                "Оба одинаково",
                "Ни один"
            ],
            "correct": 1
        },
        {
            "question": "Как восстановить удалённые файлы?",
            "options": [
                "Официальная утилита",
                "Recuva/TestDisk",
                "Форматирование",
                "Удалить ещё раз"
            ],
            "correct": 1
        },
        {
            "question": "Что такое облачное хранилище?",
            "options": [
                "Физический диск",
                "Удалённый сервер",
                "Локальная сеть",
                "RAID массив"
            ],
            "correct": 1
        }
    ]
}
];

// END OF LEARNING_MODULES

const ACHIEVEMENTS = [
    { id: 'first_lesson', name: 'Первый шаг', icon: 'star', type: 'lessons', threshold: 1 },
    { id: 'atlas_explorer', name: 'Исследователь', icon: 'compass', type: 'atlas', threshold: 5 },
    { id: 'half_course', name: 'Половина пути', icon: 'award', type: 'lessons', threshold: 4 }
];

const QUEST_SIMPLE = [
    { problem: 'Компьютер не включается, индикаторы не горят', options: ['Проверить кабель питания 220В', 'Менять ОЗУ', 'Переустановить Windows'], correct: 0 },
    { problem: 'Нет изображения, монитор показывает "Нет сигнала"', options: ['Проверить кабель монитора', 'Менять HDD', 'Обновить BIOS'], correct: 0 },
    { problem: 'Синий экран (BSOD) при загрузке Windows', options: ['Проверить память MemTest', 'Сбросить BIOS', 'Заменстить HDD'], correct: 0 },
    { problem: 'Компьютер сам перезагружается через 5 минут работы', options: ['Проверить температуру CPU/GPU', 'Менять БП', 'Чистить реестр Windows'], correct: 0 },
    { problem: 'HDD не определяется в BIOS', options: ['Проверить кабель SATA/питание', 'Менять материнскую плату', 'Форматировать диск'], correct: 0 },
    { problem: 'Компьютер пищит при включении и не загружается', options: ['Проверить ОЗУ, переставить модули', 'Менять CPU', 'Заменить CMOS батарейку'], correct: 0 },
    { problem: 'После чистки пыли компьютер не подаёт признаков жизни', options: ['Проверить подключение передней панели', 'Заменить БП', 'Менять материнку'], correct: 0 },
    { problem: 'USB устройства не работают, мышь и клавиатура не реагируют', options: ['Проверить драйвера USB в BIOS', 'Менять материнскую плату', 'Установить Windows заново'], correct: 0 },
    { problem: 'Изображение есть, но периодически пропадает на 1-2 секунды', options: ['Проверить кабель монитора/DVI/HDMI', 'Менять видеокарту', 'Понизить частоту RAM'], correct: 0 },
    { problem: 'Принтер не определяется компьютером', options: ['Проверить кабель USB/сеть', 'Переустановить драйвер принтера', 'Менять материнку'], correct: 0 },
    { problem: 'Ноутбук не заряжается от сети, но от батареи работает', options: ['Заменить разъём питания на плате', 'Менять материнскую плату', 'Сбросить BIOS'], correct: 0 },
    { problem: 'Компьютер зависает при высокой нагрузке (игры, рендер)', options: ['Проверить температуру CPU/GPU', 'Увеличить скорость вентиляторов', 'Понизить напряжение RAM'], correct: 0 },
    { problem: 'Windows загружается, но экран остаётся чёрным', options: ['Проверить драйвер видеокарты', 'Войти в безопасном режиме', 'Менять HDD'], correct: 0 },
    { problem: 'Звук не воспроизводится, колонки подключены', options: ['Проверить драйвер звуковой карты', 'Переключить аудиовыход в ОС', 'Менять материнскую плату'], correct: 0 },
    { problem: 'Кулер процессора крутится на максимальных оборотах постоянно', options: ['Нанести новую термопасту на CPU', 'Проверить работу регулятора оборотов', 'Заменить БП'], correct: 0 },
    { problem: 'Wi-Fi адаптер не находит сети', options: ['Проверить антенны адаптера', 'Обновить драйвер Wi-Fi', 'Менять адаптер'], correct: 0 },
    { problem: 'CD/DVD привод не читает диски', options: ['Прочистить головку лазера', 'Заменить привод', 'Проверить шлейф SATA'], correct: 0 },
    { problem: 'Компьютер не видит флешку, USB определяется как "Неизвестное устройство"', options: ['Проверить USB порты на материнке', 'Форматировать флешку', 'Менять USB контроллер'], correct: 0 },
    { problem: 'При загрузке Windows появляется чёрный экран с курсором', options: ['Войти в безопасном режиме', 'Восстановить систему из бэкапа', 'Переустановить Windows'], correct: 0 },
    { problem: 'SSD диск определяется в BIOS, но не в Windows', options: ['Проверить режим AHCI/IDE в BIOS', 'Инициализировать диск в управлении дисками', 'Заменить SSD'], correct: 0 },
    { problem: 'Клавиатура печатает не те буквы или буквы задвоены', options: ['Заменить клавиатуру', 'Почистить клавиши', 'Проверить штекер PS/2'], correct: 0 },
    { problem: 'Вентилятор на видеокарте шумит и останавливается', options: ['Почистить видеокарту от пыли', 'Заменить вентилятор на GPU', 'Проверить термопасту на GPU'], correct: 0 },
    { problem: 'Монитор показывает полосы и артефакты на изображении', options: ['Проверить кабель монитора', 'Менять видеокарту', 'Снизить разрешение экрана'], correct: 0 },
    { problem: 'Windows выдаёт ошибку "Inaccessible boot device"', options: ['Проверить режим SATA (AHCI/IDE)', 'Восстановить загрузчик Windows', 'Проверить шлейф SATA'], correct: 0 },
    { problem: 'Компьютер издаёт щелчки при работе, слышен треск', options: ['Заменить HDD на SSD', 'Проверить крепление вентиляторов', 'Заменить БП'], correct: 0 },
    { problem: 'Принтер печатает с полосами, оставляет чёрные следы', options: ['Прочистить картридж', 'Заменить картридж', 'Откалибровать принтер'], correct: 0 },
    { problem: 'Ноутбук не включается, индикатор заряда мигает оранжевым', options: ['Заменить батарею', 'Проверить зарядное устройство', 'Сбросить CMOS'], correct: 0 },
    { problem: 'Принтер по сети не отвечает, но напрямую работает', options: ['Проверить IP адрес принтера', 'Перезагрузить роутер', 'Переустановить драйвер'], correct: 0 },
    { problem: 'Компьютер выключается сразу после включения', options: ['Проверить кнопку питания на материнке', 'Заменить БП', 'Менять материнскую плату'], correct: 0 },
    { problem: 'Windows загружается очень долго, более 5 минут', options: ['Отключить автозагрузку программ', 'Провести дефрагментацию HDD', 'Увеличить объём RAM'], correct: 0 }
];

let state = {
    userName: '',
    visitedComponents: [],
    completedLessons: [],
    achievements: [],
    questStats: { solved: 0, correct: 0 }
};

function loadState() {
    fetch('/api/progress')
    .then(function(r) { return r.json(); })
    .then(function(data) {
        if (data.visited_components) state.visitedComponents = data.visited_components;
        if (data.completed_lessons) state.completedLessons = data.completed_lessons;
        if (data.quest_stats) state.questStats = data.quest_stats;
        document.getElementById('headerName').textContent = state.userName || 'Студент';
    })
    .catch(function(e) {
        console.log('Error loading state from server');
    });
}

function saveState() {
    fetch('/api/progress', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            visited_components: state.visitedComponents,
            completed_lessons: state.completedLessons,
            quest_stats: state.questStats
        })
    });
}

function showSection(section) {
    document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
    const target = document.getElementById(section + 'Section');
    if (target) target.classList.remove('hidden');
    if (section === 'quest') nextQuest();
    if (section === 'dashboard') renderDashboard();
    if (section === 'presentations' && typeof initPresentations === 'function') initPresentations();
    replaceIcons();
}

function renderHotspots() {
    const container = document.getElementById('atlas2D');
    if (!container) return;
    
    const existing = container.querySelectorAll('.hotspot');
    existing.forEach(h => h.remove());
    
    ATLAS_COMPONENTS.forEach(comp => {
        const hotspot = document.createElement('div');
        hotspot.className = 'hotspot';
        hotspot.style.left = comp.x + '%';
        hotspot.style.top = comp.y + '%';
        hotspot.onclick = function() { showComponentInfo(comp); };
        container.appendChild(hotspot);
    });
}

function showComponentInfo(compOrId) {
    const comp = typeof compOrId === 'string' ? ATLAS_COMPONENTS.find(c => c.id === compOrId) : compOrId;
    if (!comp) return;
    
    const visited = state.visitedComponents || [];
    if (!visited.includes(comp.id)) {
        visited.push(comp.id);
        state.visitedComponents = visited;
        saveState();
    }
    
    const info = document.getElementById('componentInfo');
    if (info) {
        info.innerHTML = '<h4 class="font-semibold text-slate-900 mb-2">' + comp.name + '</h4>' +
            '<div class="space-y-3 text-sm">' +
                '<div><span class="font-medium text-slate-700">Характеристики:</span><p class="text-slate-600">' + comp.specs.replace(/<br>/g, ', ') + '</p></div>' +
                '<div><span class="font-medium text-red-600">Неисправности:</span><p class="text-slate-600">' + comp.failures + '</p></div>' +
                '<div><span class="font-medium text-green-600">Диагностика:</span><p class="text-slate-600">' + comp.diagnostics + '</p></div></div>';
    }
}

function renderLearningCards() {
    var grid = document.getElementById('learningGrid');
    if (!grid || !LEARNING_MODULES) return;
    
    grid.innerHTML = LEARNING_MODULES.map(function(module) {
        var completed = state.completedLessons || [];
        var isDone = completed.indexOf(module.id) !== -1;
        return '<div onclick="openLesson(\'' + module.id + '\')" class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 card-hover cursor-pointer">' +
            '<i data-lucide="' + module.icon + '" class="w-8 h-8 text-blue-600 mb-3"></i>' +
            '<h3 class="font-semibold text-slate-900 mb-1">' + module.title + '</h3>' +
            '<p class="text-sm text-slate-500 mb-4">' + module.description + '</p>' +
            '<div class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition text-sm text-center">' +
            (isDone ? 'Повторить' : 'Начать') + '</div></div>';
    }).join('');
    
    replaceIcons();
}

function renderAchievements() {
    var container = document.getElementById('achievements');
    if (!container || !ACHIEVEMENTS) return;
    var completed = state.completedLessons || [];
    var visited = state.visitedComponents || [];
    container.innerHTML = ACHIEVEMENTS.map(function(ach) {
        var earned = (ach.type === 'lessons' && completed.length >= ach.threshold) ||
                      (ach.type === 'atlas' && visited.length >= ach.threshold);
        return '<div class="text-center p-2 ' + (earned ? '' : 'opacity-40') + '">' +
            '<i data-lucide="' + ach.icon + '" class="w-6 h-6 mx-auto ' + (earned ? 'text-amber-500' : 'text-slate-300') + '"></i>' +
            '<p class="text-xs text-slate-600 mt-1">' + ach.name + '</p></div>';
    }).join('');
    replaceIcons();
}

function renderProgressList() {
    var container = document.getElementById('progressList');
    if (!container || !LEARNING_MODULES) return;
    var completed = state.completedLessons || [];
    container.innerHTML = LEARNING_MODULES.map(function(module) {
        var isDone = completed.indexOf(module.id) !== -1;
        return '<div class="flex items-center justify-between p-3 ' + (isDone ? 'bg-green-50' : 'bg-slate-50') + ' rounded-lg">' +
            '<div class="flex items-center gap-2">' +
                '<i data-lucide="' + module.icon + '" class="w-4 h-4 ' + (isDone ? 'text-green-600' : 'text-slate-400') + '"></i>' +
                '<span class="text-sm ' + (isDone ? 'text-green-700' : 'text-slate-600') + '">' + module.title + '</span></div>' +
            '<span class="text-sm ' + (isDone ? 'text-green-600' : 'text-slate-400') + '">' + (isDone ? '✓' : '-') + '</span></div>';
    }).join('');
    replaceIcons();
}

let currentLesson = null;

function openLesson(moduleId) {
    currentLesson = LEARNING_MODULES.find(m => m.id === moduleId);
    if (!currentLesson) return;
    var modal = document.getElementById('lessonModal');
    var title = document.getElementById('lessonTitle');
    var content = document.getElementById('lessonContent');
    if (modal && title && content) {
        title.textContent = currentLesson.title;
        content.innerHTML = '<div class="mb-4 p-4 bg-green-50 rounded-lg text-green-700 text-sm">Изучите материал, затем нажмите кнопку внизу для прохождения теста.</div>' + (currentLesson.content || '');
        modal.classList.remove('hidden');
        document.getElementById('lessonModalContent').scrollTop = 0;
        window.scrollTo(0, 0);
    }
}

function closeLessonModal() {
    var m = document.getElementById('lessonModal');
    if (m) m.classList.add('hidden');
}

function showQuiz() {
    if (!currentLesson) return;
    closeLessonModal();
    var m = document.getElementById('quizModal');
    if (m) {
        document.getElementById('quizModuleTitle').textContent = currentLesson.title;
        renderQuizQuestions();
        m.classList.remove('hidden');
        document.getElementById('quizModalContent').scrollTop = 0;
        window.scrollTo(0, 0);
    }
}

function closeQuizModal() {
    var m = document.getElementById('quizModal');
    if (m) m.classList.add('hidden');
}

function renderQuizQuestions() {
    if (!currentLesson || !currentLesson.quiz) return;
    var container = document.getElementById('quizQuestions');
    if (!container) return;
    container.innerHTML = currentLesson.quiz.map(function(q, i) {
        return '<div class="border border-slate-200 rounded-lg p-4 mb-3">' +
            '<p class="font-medium text-slate-900 mb-3">' + (i+1) + '. ' + q.question + '</p>' +
            '<div class="space-y-2">' + q.options.map(function(opt, j) {
                return '<label class="flex items-center gap-2 cursor-pointer p-2 rounded hover:bg-slate-50">' +
                    '<input type="radio" name="q' + i + '" value="' + j + '" class="text-blue-600">' +
                    '<span class="text-sm text-slate-700">' + opt + '</span></label>';
            }).join('') + '</div></div>';
    }).join('');
}

function submitQuiz() {
    if (!currentLesson || !currentLesson.quiz) return;
    var quiz = currentLesson.quiz;
    var correct = 0;
    quiz.forEach(function(q, i) {
        var sel = document.querySelector('input[name="q' + i + '"]:checked');
        if (sel && parseInt(sel.value) === q.correct) correct++;
    });
    var percent = Math.round((correct / quiz.length) * 100);
    var passed = percent >= 60;
    if (passed) {
        var completed = state.completedLessons || [];
        if (!completed.includes(currentLesson.id)) {
            completed.push(currentLesson.id);
            state.completedLessons = completed;
            saveState();
        }
    }
    alert('Результат: ' + percent + '% ' + (passed ? '(Пройден!)' : '(Не пройден, нужно 60%)'));
    closeQuizModal();
    renderLearningCards();
    updateProgress();
    renderDashboard();
}

function renderAchievements() {
    const container = document.getElementById('achievements');
    if (!container || !ACHIEVEMENTS) return;
    const completed = state.completedLessons || [];
    const visited = state.visitedComponents || [];
    container.innerHTML = ACHIEVEMENTS.map(function(ach) {
        var earned = (ach.type === 'lessons' && completed.length >= ach.threshold) ||
                      (ach.type === 'atlas' && visited.length >= ach.threshold);
        return '<div class="text-center p-2 ' + (earned ? '' : 'opacity-40') + '">' +
            '<i data-lucide="' + ach.icon + '" class="w-6 h-6 mx-auto ' + (earned ? 'text-amber-500' : 'text-slate-300') + '"></i>' +
            '<p class="text-xs text-slate-600 mt-1">' + ach.name + '</p></div>';
    }).join('');
    replaceIcons();
}

function renderDashboard() {
    renderSkillMap();
    renderProgressList();
    renderAchievements();
    updateQuestStats();
    updateProgress();
}

function renderSkillMap() {
    const container = document.getElementById('skillMap');
    if (!container) return;
    const completed = state.completedLessons || [];
    const skills = [
        { name: 'Диагностика', id: 'intro', progress: completed.includes('intro') ? 50 : 0 },
        { name: 'Ремонт БП', id: 'power_supply', progress: completed.includes('power_supply') ? 50 : 0 },
        { name: 'Видеокарты', id: 'gpu_diagnostics', progress: completed.includes('gpu_diagnostics') ? 50 : 0 },
        { name: 'Охлаждение', id: 'cooling', progress: completed.includes('cooling') ? 50 : 0 }
    ];
    container.innerHTML = skills.map(function(skill) {
        return '<div class="flex items-center gap-3">' +
            '<div class="w-28 text-sm text-slate-600">' + skill.name + '</div>' +
            '<div class="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">' +
                '<div class="h-full bg-blue-600 transition-all" style="width:' + skill.progress + '%"></div></div>' +
            '<div class="w-8 text-xs text-slate-500">' + skill.progress + '%</div></div>';
    }).join('');
}

function renderProgressList() {
    var container = document.getElementById('progressList');
    if (!container || !LEARNING_MODULES) return;
    var completed = state.completedLessons || [];
    container.innerHTML = LEARNING_MODULES.map(function(module) {
        var isDone = completed.indexOf(module.id) !== -1;
        return '<div class="flex items-center justify-between p-3 ' + (isDone ? 'bg-green-50' : 'bg-slate-50') + ' rounded-lg">' +
            '<div class="flex items-center gap-2">' +
                '<i data-lucide="' + module.icon + '" class="w-4 h-4 ' + (isDone ? 'text-green-600' : 'text-slate-400') + '"></i>' +
                '<span class="text-sm ' + (isDone ? 'text-green-700' : 'text-slate-600') + '">' + module.title + '</span></div>' +
            '<span class="text-sm ' + (isDone ? 'text-green-600' : 'text-slate-400') + '">' + (isDone ? '✓' : '-') + '</span></div>';
    }).join('');
    replaceIcons();
}

function updateQuestStats() {
    const { solved = 0, correct = 0 } = state.questStats || {};
    const accuracy = solved > 0 ? Math.round((correct / solved) * 100) : 0;
    if (document.getElementById('statCases')) document.getElementById('statCases').textContent = solved;
    if (document.getElementById('statCorrect')) document.getElementById('statCorrect').textContent = correct;
    if (document.getElementById('statAccuracy')) document.getElementById('statAccuracy').textContent = accuracy + '%';
    if (document.getElementById('statQuests')) document.getElementById('statQuests').textContent = solved;
}

function updateProgress() {
    const totalLessons = LEARNING_MODULES ? LEARNING_MODULES.length : 0;
    const completed = state.completedLessons ? state.completedLessons.length : 0;
    const percent = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
    if (document.getElementById('globalProgress')) document.getElementById('globalProgress').style.width = percent + '%';
    if (document.getElementById('statLessons')) document.getElementById('statLessons').textContent = completed + '/' + totalLessons;
}

let currentQuest = null;

function nextQuest() {
    currentQuest = QUEST_SIMPLE[Math.floor(Math.random() * QUEST_SIMPLE.length)];
    const correctAnswer = currentQuest.options[currentQuest.correct];
    
    document.getElementById('questTitle').textContent = currentQuest.problem;
    document.getElementById('questResult').classList.add('hidden');
    document.getElementById('nextQuestBtn').classList.add('hidden');
    
    const container = document.getElementById('questOptions');
    const shuffled = [...currentQuest.options].map((v, i) => ({v, i})).sort(() => Math.random() - 0.5);
    
    container.innerHTML = shuffled.map(function(item) {
        return '<button onclick="selectQuestOption(\'' + item.v + '\')" class="w-full text-left p-3 border border-slate-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition flex items-center gap-2">' +
            '<i data-lucide="wrench" class="w-4 h-4 text-slate-400 flex-shrink-0"></i>' +
            '<span class="text-sm text-slate-700">' + item.v + '</span></button>';
    }).join('');
    currentQuest.correctAnswer = correctAnswer;
    replaceIcons();
}

function selectQuestOption(selectedText) {
    const isCorrect = selectedText === currentQuest.correctAnswer;
    const buttons = document.querySelectorAll('#questOptions button');
    buttons.forEach(function(btn) {
        var text = btn.querySelector('span').textContent;
        if (text === currentQuest.correctAnswer) btn.classList.add('bg-green-100', 'border-green-500');
        else if (text === selectedText && !isCorrect) btn.classList.add('bg-red-100', 'border-red-500');
        btn.disabled = true;
    });
    
    state.questStats = state.questStats || { solved: 0, correct: 0 };
    state.questStats.solved++;
    if (isCorrect) state.questStats.correct++;
    saveState();
    
    const resultText = isCorrect ? '✓ Верно!' : '✗ Неверно. Правильный ответ: ' + currentQuest.correctAnswer;
    document.getElementById('questResultText').textContent = resultText;
    document.getElementById('questResult').classList.remove('hidden');
    document.getElementById('nextQuestBtn').classList.remove('hidden');
    updateQuestStats();
}

// Modal functions
function openProfileModal() {
    document.getElementById('profileModal').classList.remove('hidden');
    document.getElementById('studentName').value = state.userName || '';
}

function closeProfileModal() {
    document.getElementById('profileModal').classList.add('hidden');
}

function saveProfile() {
    const name = document.getElementById('studentName').value.trim();
    state.userName = name;
    document.getElementById('headerName').textContent = name || 'Студент';
    saveState();
    closeProfileModal();
}

function openAboutModal() {
    document.getElementById('aboutModal').classList.remove('hidden');
}

function closeAboutModal() {
    document.getElementById('aboutModal').classList.add('hidden');
}

function resetProgress() {
    if (confirm('Сбросить весь прогресс?')) {
        state = { userName: state.userName, visitedComponents: [], completedLessons: [], achievements: [], questStats: { solved: 0, correct: 0 } };
        saveState();
        renderLearningCards();
        renderDashboard();
        updateProgress();
        alert('Прогресс сброшен!');
    }
}

function showDebugInfo() {
    const debugWindow = window.open('', '_blank', 'width=500,height=400');
    debugWindow.document.write('<html><head><title>Debug</title></head><body><pre style="background:#f5f5f5;padding:20px;font-size:12px;">');
    debugWindow.document.write(JSON.stringify(state, null, 2));
    debugWindow.document.write('</pre></body></html>');
}

// Initialization with debug logging
function init() {
    console.log('Initializing application...');
    try {
        replaceIcons();
        console.log('Icons initialized');
        replaceIcons();
        console.log('Lucide icons replaced');
        loadState();
        console.log('State loaded:', state);
        
        const hotspots = renderHotspots();
        console.log('Hotspots rendered');
        
        const cards = renderLearningCards();
        console.log('Learning cards rendered');
        
        renderDashboard();
        console.log('Dashboard rendered');
        
        updateProgress();
        console.log('Progress updated');
        
        showSection('home');
        console.log('Initial section shown');
        
        // Re-run after a short delay to ensure all elements are loaded
        setTimeout(() => {
            replaceIcons();
        }, 200);
    } catch (e) {
        console.error('Initialization error:', e);
    }
}

if (document.readyState === 'complete') {
    init();
} else {
    window.addEventListener('load', init);
}

// Also try to init after DOMContentLoaded as fallback
document.addEventListener('DOMContentLoaded', () => {
setTimeout(() => {
            replaceIcons();
        }, 500);
});