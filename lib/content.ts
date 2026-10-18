import type { Locale } from "@/config/site";

export type ProjectId = "northline" | "atelier-form" | "clearspace";

export type Project = {
  id: ProjectId;
  name: string;
  category: string;
  short: string;
  concept: string;
  audience: string;
  challenge: string;
  direction: string;
  decisions: string[];
  pages: string[];
  features: string[];
  palette: string;
  next: ProjectId;
};

export const copy = {
  ru: {
    nav: { services: "Услуги", work: "Работы", about: "Обо мне", contact: "Контакты", start: "Обсудить проект", menu: "Открыть меню", close: "Закрыть меню" },
    home: {
      eyebrow: "Независимый веб-дизайнер и разработчик",
      title: "Сайты, которые помогают вашему бизнесу выглядеть на своём уровне.",
      intro: "Разрабатываю современные сайты и лендинги для сервисных компаний — с продуманной структурой, выразительным дизайном и удобным пользовательским опытом.",
      primary: "Обсудить проект", secondary: "Посмотреть работы",
      signature: "Веб-дизайн · Разработка · Адаптивные интерфейсы",
      statementLabel: "Хороший сайт объясняет ценность вашего бизнеса ещё до первого разговора.",
      statement: "Посетителю должно быть понятно, какие услуги вы предлагаете, кому они подходят и почему стоит связаться именно с вами. Я уделяю внимание структуре, визуальной подаче и простоте взаимодействия, чтобы сайт помогал вашей компании представлять себя последовательно и профессионально.",
      workLabel: "Избранные работы", workTitle: "Концепты, созданные с вниманием к деталям.", workIntro: "Демонстрационные проекты, показывающие мой подход к дизайну и разработке сайтов для сервисного бизнеса.",
      servicesLabel: "Чем могу помочь", servicesTitle: "Что я могу разработать для вашего бизнеса.",
      principlesLabel: "Принципы", principlesTitle: "Дизайн — это не только внешний вид.",
      processLabel: "Как строится работа", processTitle: "От первой идеи до готового сайта.",
      processNote: "Конкретные этапы могут меняться в зависимости от задачи и масштаба проекта.",
      faqLabel: "Частые вопросы", faqTitle: "Важное — до начала работы.",
      ctaTitle: "Расскажите, какой сайт нужен вашему бизнесу.", ctaIntro: "Обсудим вашу задачу, необходимые функции и подходящий формат реализации.", ctaForm: "Или заполните короткую форму",
    },
    portfolio: { eyebrow: "Подборка работ", title: "Три направления. Один внимательный подход.", intro: "Это концептуальные проекты, созданные для демонстрации дизайна и разработки. Они не представляют реальные компании или клиентские заказы." },
    servicesPage: { eyebrow: "Услуги", title: "Сайт, продуманный вокруг вашей задачи.", intro: "От первой структуры до готового адаптивного интерфейса. Объём и технические возможности согласуем под конкретный проект.", process: "Этапы работы", deliver: "Что передаю", needed: "Что понадобится от вас", extra: "Возможное дополнительно", faq: "Частые вопросы", packages: "Форматы работы" },
    about: { eyebrow: "О подходе", title: "Внимание к содержанию не меньше, чем к форме.", intro: "Меня зовут Дмитрий. Я специализируюсь на создании современных сайтов и лендингов для сервисного бизнеса. В работе уделяю внимание структуре, визуальной подаче, адаптивности и качеству реализации.", approachTitle: "Как я думаю о проекте", approach: "Сначала разбираюсь в услугах, аудитории и задаче. Затем собираю понятную структуру и только после этого ищу визуальный язык, который подходит именно этому бизнесу.", toolsTitle: "Инструменты и технологии", principlesTitle: "Рабочие принципы", languagesTitle: "Коммуникация", languages: "Предпочтительный язык общения — русский. Язык коммуникации по англоязычным проектам нужно согласовать до начала работы.", personalize: "В портфолио представлены концептуальные проекты, созданные для демонстрации дизайна и разработки, а не выполненные заказы реальных клиентов." },
    contact: { eyebrow: "Контакты", title: "Обсудим ваш следующий сайт?", intro: "Расскажите о задаче — я помогу определить подходящий формат и объём работы.", form: "Форма проекта", note: "Поля со звёздочкой обязательны. Контактные данные используются только для ответа на ваш запрос.", notConfigured: "Форма временно недоступна. Напишите Дмитрию по email или телефону, указанным рядом с формой." },
    thanks: { eyebrow: "Сообщение принято", title: "Спасибо за обращение.", intro: "Форма приняла ваш запрос. Дмитрий ответит на указанный вами email." },
    privacy: { eyebrow: "Правовая информация", title: "Политика конфиденциальности", intro: "Эту информацию необходимо проверить и дополнить с учётом страны проживания владельца сайта, применимых законов и актуальных условий Formspree.", sections: [["Владелец сайта", "Сайт ведёт Дмитрий. Для вопросов об обработке данных используйте dimavahterov2006@mail.ru или телефон 8 (980) 198-02-18."], ["Какие данные обрабатываются", "Форма запрашивает имя, email и описание проекта; компания, сайт, услуга, бюджет и сроки необязательны. Отправляя форму, вы соглашаетесь передать эти сведения для ответа на запрос."], ["Как отправляется заявка", "Заявка направляется через сервис Formspree (formspree.io) и может пересылаться владельцу сайта по email. Formspree — сторонний получатель данных. Перед публикацией ознакомьтесь с его актуальными условиями конфиденциальности и укажите применимые сведения о хранении, обработчиках и международной передаче данных."], ["Срок хранения и ваши права", "До публикации определите фактический срок хранения писем и применимые процедуры доступа, исправления или удаления данных. Для запросов используйте dimavahterov2006@mail.ru."] ] as [string, string][] },
    concept: "Концептуальный проект — демонстрация дизайна",
    viewProject: "Смотреть проект", viewAll: "Все проекты", backWork: "Все работы", nextProject: "Следующий проект", discussSimilar: "Обсудить похожую задачу",
    fields: { name: "Имя", email: "Email", company: "Компания", website: "Сайт компании", service: "Какая услуга вас интересует?", details: "Расскажите о задаче", budget: "Бюджет", timeline: "Желаемые сроки", send: "Отправить запрос", sending: "Отправляем…", required: "Обязательное поле", invalidEmail: "Введите корректный адрес электронной почты", detailsMin: "Добавьте немного больше информации (не менее 20 символов)", error: "Не удалось отправить запрос. Проверьте соединение и попробуйте ещё раз.", success: "Запрос отправлен." },
    services: [
      { title: "Лендинг", en: "Landing page", summary: "Одностраничный сайт для презентации конкретной услуги, предложения или кампании.", detail: "Продуманная структура, ясный оффер и удобный путь к обращению — без лишних отвлечений.", audience: "Подходит, если нужно сфокусировать внимание на одном направлении или предложении.", includes: ["Структура и иерархия контента", "Индивидуальный визуальный дизайн", "Адаптивная разработка и формы"], deliver: ["Готовый адаптивный сайт", "Исходный код проекта", "Базовые метаданные страниц"], needed: ["Описание услуги и аудитории", "Материалы и фирменный стиль, если они есть"], extra: ["Подключение домена", "Интеграции, согласованные отдельно"] },
      { title: "Сайт компании", en: "Business website", summary: "Многостраничный сайт, который помогает компании представить услуги, объяснить свой подход и дать посетителям понятный способ связаться с командой.", detail: "Подходит сервисным компаниям с несколькими направлениями, аудиториями или важными разделами.", audience: "Для компаний, которым важно целостно представить свои услуги и принципы работы.", includes: ["Архитектура страниц и контента", "Единая система интерфейса", "Адаптивные шаблоны страниц"], deliver: ["Рабочий многостраничный сайт", "Файлы проекта", "Базовая SEO-подготовка"], needed: ["Информация о компании и услугах", "Контент для ключевых страниц"], extra: ["Дополнительные страницы", "Настройка согласованных внешних сервисов"] },
      { title: "Редизайн", en: "Website redesign", summary: "Обновление визуального языка и структуры существующего сайта с учётом содержания, удобства использования и текущих технических ограничений.", detail: "Начинаем с оценки текущего сайта и согласуем реалистичный объём обновления.", audience: "Для компаний, чей сайт перестал соответствовать услугам или визуальному позиционированию.", includes: ["Оценка существующих страниц", "Новая визуальная концепция", "Реализация согласованных изменений"], deliver: ["Обновлённые интерфейсы", "Адаптивные страницы", "Рекомендации по дальнейшим работам"], needed: ["Ссылка на действующий сайт", "Доступы и материалы — если потребуются"], extra: ["Перенос контента", "Точечные улучшения уже после оценки"] },
      { title: "Frontend-разработка", en: "Frontend development", summary: "Реализация адаптивных интерфейсов с вниманием к точности макета, доступности, скорости загрузки и поведению на разных устройствах.", detail: "Можно подключить к проекту с готовыми макетами или отдельной задачей по интерфейсу.", audience: "Для студий, агентств и команд, которым нужна реализация интерфейса.", includes: ["Адаптивная вёрстка", "Интерактивные элементы", "Проверка поведения на разных экранах"], deliver: ["Готовые интерфейсные компоненты", "Рабочие страницы", "Код в согласованном формате"], needed: ["Макеты и дизайн-спецификация", "Технические требования проекта"], extra: ["Интеграция с существующим приложением", "Доступность и производительность в рамках проекта"] },
    ],
    principles: [
      ["Ясность", "Посетителю легко понять предложение и следующий шаг."],
      ["Согласованность", "Интерфейс выглядит и ведёт себя последовательно на всех страницах."],
      ["Адаптивность", "Содержание и управление удобны на разных экранах."],
      ["Мастерство", "Внимание к типографике, деталям и качеству реализации."],
    ],
    process: [
      ["01", "Знакомство", "Обсуждаем задачи бизнеса, аудиторию, содержание сайта и ожидаемый результат."],
      ["02", "Структура", "Определяем страницы, иерархию контента и основные пользовательские сценарии."],
      ["03", "Дизайн", "Разрабатываем визуальную концепцию и интерфейс с учётом позиционирования компании."],
      ["04", "Разработка", "Реализуем адаптивный сайт, интерактивные элементы и интеграции в согласованном объёме."],
      ["05", "Проверка и запуск", "Проверяем работу сайта, исправляем согласованные замечания и готовим проект к публикации."],
    ],
    faq: [
      ["Сколько стоит создание сайта?", "Стоимость зависит от количества страниц, сложности дизайна, функциональности, подготовки контента и интеграций. После обсуждения задачи можно определить объём работ и подготовить предложение."],
      ["Сколько времени занимает проект?", "Срок зависит от масштаба проекта, готовности материалов и скорости согласования. Предварительные сроки определяются после обсуждения задачи."],
      ["Можете ли вы обновить существующий сайт?", "Да, если техническое состояние проекта и требуемые изменения подходят под мой стек и возможности. Сначала необходимо оценить текущую реализацию."],
      ["Работаете ли вы с международными клиентами?", "Удалённый формат возможен. До начала проекта нужно отдельно согласовать язык коммуникации, часовой пояс, сроки и порядок взаимодействия. Предпочтительный язык общения — русский."],
      ["Что потребуется от меня?", "Понадобятся сведения о компании, услугах, аудитории и задачах сайта. Также можно использовать готовые тексты, изображения и фирменный стиль."],
      ["Вы гарантируете увеличение продаж?", "Нет универсальной гарантии такого результата. Я сосредотачиваюсь на структуре, удобстве интерфейса и технической реализации. Коммерческие результаты также зависят от предложения компании, спроса и маркетинга."],
    ],
    projects: {
      northline: { id: "northline", name: "NORTHLINE", category: "Бизнес-консалтинг", short: "Редакционный сайт для концептуальной консалтинговой компании.", concept: "Строгая цифровая идентичность для консалтинга в сфере бизнес-операций. Вымышленный бренд создан только как демонстрационный концепт.", audience: "Основатели и руководители компаний, которым нужна ясная поддержка в организации процессов.", challenge: "Показать сложную консалтинговую услугу спокойно и предметно, не перегружая страницу отраслевым жаргоном.", direction: "Графитовый фон, спокойная крупная типографика, тонкие линии и геометрическая сетка создают собранное редакционное впечатление.", decisions: ["Контрастная типографическая иерархия", "Ритмичная сетка с тонкими разделителями", "Ясная структура услуг, подхода и вопросов"], pages: ["Главная", "Услуги", "Подход", "Концептуальный кейс", "FAQ", "Контакты"],       features: ["Адаптивная многостраничная навигация", "Страницы услуг и концептуального кейса", "Внутренние ссылки и контактная форма с серверной валидацией"], palette: "northline", next: "atelier-form" },
      "atelier-form": { id: "atelier-form", name: "ATELIER FORM", category: "Дизайн интерьеров", short: "Визуальная история для концептуальной интерьерной студии.", concept: "Премиальная демонстрация проектного процесса и образа пространств. Бренд и все описанные проекты являются вымышленными.", audience: "Частные и коммерческие заказчики, которые выбирают интерьерную студию по её вкусу и подходу.", challenge: "Дать изображениям пространство, сохранив понятную навигацию по услугам и отдельным проектам.", direction: "Тёплая светлая палитра, крупная типографика, асимметричная сетка и редакционная подача изображений.", decisions: ["Асимметричная галерея и большие поля", "Спокойный контраст между изображениями и текстом", "Отдельная структура проекта и процесса"], pages: ["Главная", "Проекты", "Услуги", "Процесс", "Детальная страница проекта", "Контакты"],       features: ["Адаптивная сетка проектов", "Детальная презентация вымышленного интерьера", "Навигация и доступная форма проекта"], palette: "atelier", next: "clearspace" },
      clearspace: { id: "clearspace", name: "CLEARSPACE", category: "Коммерческий клининг", short: "Понятное предложение для концептуального сервиса обслуживания помещений.", concept: "Концептуальный бренд для демонстрации коммерческого сайта профессионального сервиса. Не является действующей компанией или клиентом.", audience: "Администраторы, управляющие объектами и команды, которым важен регулярный уход за помещениями.", challenge: "Быстро объяснить объём сервиса и сделать следующий шаг понятным для потенциального заказчика.", direction: "Графитовая основа, светлые поверхности, выразительный лаймовый акцент и компактная информация.", decisions: ["Ясный первый экран с прямым действием", "Короткие блоки об услугах и объектах", "Заметные контактные пути без давления"], pages: ["Главная", "Услуги", "Объекты", "Процесс", "FAQ", "Контакты"], features: ["Адаптивное меню и призывы к действию", "Структурированные сервисные блоки", "Интерактивная форма проекта"], palette: "clearspace", next: "northline" },
    } satisfies Record<ProjectId, Project>,
  },
  en: {
    nav: { services: "Services", work: "Work", about: "About", contact: "Contact", start: "Start a project", menu: "Open menu", close: "Close menu" },
    home: {
      eyebrow: "Independent web designer & developer",
      title: "Websites built to reflect the quality of your business.",
      intro: "I design and build modern websites and landing pages for service businesses, combining clear structure, considered visuals, and thoughtful user experience.",
      primary: "Start a project", secondary: "Explore selected work",
      signature: "Web design · Development · Responsive experiences",
      statementLabel: "A good website communicates the value of your business before the first conversation.",
      statement: "Visitors should quickly understand what you offer, who it is for, and how to get in touch. I focus on structure, visual direction, and ease of use so your website can represent your business with clarity and consistency.",
      workLabel: "Selected work", workTitle: "Concepts, crafted with care.", workIntro: "Demonstration projects that show how I approach design and development for service businesses.",
      servicesLabel: "What I do", servicesTitle: "A website shaped around your business.",
      principlesLabel: "Principles", principlesTitle: "Design is more than how it looks.",
      processLabel: "The process", processTitle: "From first conversation to a finished website.",
      processNote: "The exact stages depend on the scope and needs of each project.",
      faqLabel: "Questions", faqTitle: "A few things worth knowing.",
      ctaTitle: "Tell me what kind of website your business needs.", ctaIntro: "We can talk through the brief, functionality, and a suitable way to bring it to life.", ctaForm: "Or fill in a short project form",
    },
    portfolio: { eyebrow: "Selected work", title: "Three directions. One considered approach.", intro: "These are concept projects created to demonstrate design and development. They do not represent real companies or client commissions." },
    servicesPage: { eyebrow: "Services", title: "A website shaped around your brief.", intro: "From the initial structure to a finished responsive interface. Scope and technical options are agreed around each project.", process: "How it works", deliver: "What you receive", needed: "What I need from you", extra: "Optional additions", faq: "Common questions", packages: "Ways to work together" },
    about: { eyebrow: "About the approach", title: "As much care for the content as the craft.", intro: "I'm Dmitry. I specialise in building modern websites and landing pages for service businesses. My work focuses on structure, visual direction, responsive behaviour, and considered implementation.", approachTitle: "How I approach a project", approach: "I start by understanding the service, audience, and brief. Then I shape a clear structure before exploring a visual direction that fits the business.", toolsTitle: "Tools & technology", principlesTitle: "Working principles", languagesTitle: "Communication", languages: "Russian is the preferred language for communication. Please agree on the communication language for English-language projects before work begins.", personalize: "The portfolio features design and development concepts created for demonstration, not commissioned work for real clients." },
    contact: { eyebrow: "Get in touch", title: "Planning your next website?", intro: "Tell me a little about the brief and we can work out a suitable scope and format.", form: "Project enquiry", note: "Fields marked with an asterisk are required. Your contact details are used only to respond to your enquiry.", notConfigured: "The form is temporarily unavailable. Contact Dmitry using the email or phone listed beside the form." },
    thanks: { eyebrow: "Enquiry received", title: "Thank you for getting in touch.", intro: "Your enquiry was accepted by the form. Dmitry will reply to the email address you provided." },
    privacy: { eyebrow: "Legal information", title: "Privacy policy", intro: "Review and complete this information for the website owner's country of residence and the laws and current Formspree terms that apply.", sections: [["Website owner", "This website is operated by Dmitry. For privacy enquiries, email dimavahterov2006@mail.ru or call +7 (980) 198-02-18."], ["Information collected", "The form asks for your name, email, and project details. Company, website, service, budget, and timing are optional. Submitting the form agrees to the use of those details to reply to your enquiry."], ["How an enquiry is sent", "Enquiries are submitted through Formspree (formspree.io) and may be forwarded to the site owner's email. Formspree is a third-party data recipient. Before launch, check its current privacy terms and document applicable storage, subprocessors, and international data transfers."], ["Retention and your rights", "Before launch, determine how long enquiry emails are retained and document applicable access, correction, and deletion processes. Contact dimavahterov2006@mail.ru with privacy requests."] ] as [string, string][] },
    concept: "Concept project — design demonstration",
    viewProject: "Explore project", viewAll: "View all projects", backWork: "All work", nextProject: "Next project", discussSimilar: "Discuss a similar brief",
    fields: { name: "Name", email: "Email", company: "Company", website: "Company website", service: "What do you need help with?", details: "Tell me about your project", budget: "Budget", timeline: "Preferred timeline", send: "Send enquiry", sending: "Sending…", required: "This field is required", invalidEmail: "Enter a valid email address", detailsMin: "Please share a little more detail (at least 20 characters)", error: "Your enquiry could not be sent. Check your connection and try again.", success: "Your enquiry has been sent." },
    services: [
      { title: "Landing page", en: "Landing page", summary: "A single-page website for one service, offer, or campaign.", detail: "A clear structure, focused proposition, and straightforward path to get in touch.", audience: "Useful when one service or offer needs a dedicated, focused page.", includes: ["Content structure and hierarchy", "A considered visual design", "Responsive development and forms"], deliver: ["A responsive finished website", "Project source code", "Basic page metadata"], needed: ["Details about the service and audience", "Existing content and brand assets, if available"], extra: ["Domain connection", "Separately scoped integrations"] },
      { title: "Business website", en: "Business website", summary: "A multi-page website to present your services, explain your approach, and give visitors a clear way to reach your team.", detail: "For service businesses with several offerings, audiences, or important sections.", audience: "For businesses that need to present their services and working principles as a whole.", includes: ["Page and content architecture", "A consistent interface system", "Responsive page templates"], deliver: ["A working multi-page website", "Project files", "Basic SEO preparation"], needed: ["Company and service information", "Content for the key pages"], extra: ["Additional pages", "Agreed third-party integrations"] },
      { title: "Website redesign", en: "Website redesign", summary: "A visual and structural update informed by your content, usability, and existing technical constraints.", detail: "We begin by reviewing the current website and agreeing a realistic scope.", audience: "For businesses whose current website no longer reflects their services or positioning.", includes: ["A review of existing pages", "A new visual direction", "Implementation of agreed changes"], deliver: ["Updated interface", "Responsive pages", "Recommendations for further work"], needed: ["A link to the current website", "Access and source materials if required"], extra: ["Content migration", "Further updates, subject to review"] },
      { title: "Frontend development", en: "Frontend development", summary: "Responsive interface development with close attention to design accuracy, accessibility, speed, and behaviour across devices.", detail: "A good fit for an existing project with approved designs or a focused interface task.", audience: "For studios, agencies, and teams that need help building an interface.", includes: ["Responsive implementation", "Interactive interface elements", "Checks across screen sizes"], deliver: ["Production-ready interface components", "Working pages", "Code in the agreed format"], needed: ["Design files and specifications", "Project requirements"], extra: ["Integration into an existing application", "Accessibility and performance improvements within scope"] },
    ],
    principles: [
      ["Clarity", "Visitors can understand the offer and what to do next."],
      ["Consistency", "The interface feels coherent from page to page."],
      ["Responsiveness", "Content and controls work across screen sizes."],
      ["Craft", "Care goes into typography, details, and implementation."],
    ],
    process: [
      ["01", "Discovery", "We discuss your business, audience, content, and the purpose of the website."],
      ["02", "Structure", "We map the pages, content hierarchy, and key visitor journeys."],
      ["03", "Design", "I develop a visual direction and interface that fits your positioning."],
      ["04", "Development", "I build the responsive website and agreed interactions or integrations."],
      ["05", "Review & launch", "We check the website, address agreed feedback, and prepare it for launch."],
    ],
    faq: [
      ["How much does a website cost?", "Cost depends on the number of pages, design complexity, functionality, content preparation, and integrations. After discussing the brief, I can define a scope and put together a proposal."],
      ["How long does a project take?", "Timing depends on the scope, how ready the materials are, and feedback cycles. We can discuss an initial timeline after reviewing the brief."],
      ["Can you update an existing website?", "Yes, if the project's technical setup and requested changes are a good fit. I would first need to review the current implementation."],
      ["Do you work with international clients?", "Remote work is possible. We would agree on the communication language, time zone, timing, and working format before starting. Russian is the preferred language for communication."],
      ["What will I need to provide?", "Information about your business, services, audience, and goals. Existing copy, images, and brand assets can be helpful too."],
      ["Can you guarantee more sales?", "There is no universal guarantee. I focus on the quality of the structure, interface, and implementation. Commercial outcomes also depend on your offer, market demand, and marketing."],
    ],
    projects: {
      northline: { id: "northline", name: "NORTHLINE", category: "Business consulting", short: "An editorial website for a conceptual business consultancy.", concept: "A restrained digital identity for an operations consultancy. The brand is fictional and created solely as a design demonstration.", audience: "Founders and leadership teams looking for clarity around business operations.", challenge: "Present a complex consulting service in a calm, approachable way without filling the page with jargon.", direction: "A graphite background, confident typography, fine rules, and geometric layouts create an editorial feel.", decisions: ["A clear, high-contrast type hierarchy", "A measured grid with fine dividers", "Straightforward service, approach, and FAQ sections"], pages: ["Home", "Services", "Approach", "Concept case study", "FAQ", "Contact"], features: ["Responsive multi-page navigation", "Service and concept case pages", "Working internal links and contact form"], palette: "northline", next: "atelier-form" },
      "atelier-form": { id: "atelier-form", name: "ATELIER FORM", category: "Interior design", short: "A visual narrative for a conceptual interior studio.", concept: "A premium showcase of spaces and a design process. The studio and all described projects are fictional.", audience: "Residential and commercial clients looking for an interior studio whose work reflects their taste.", challenge: "Let project imagery lead while keeping services and project details easy to explore.", direction: "Warm light tones, expressive typography, an asymmetric grid, and a considered editorial presentation.", decisions: ["An asymmetric gallery with generous space", "Quiet contrast between imagery and copy", "Dedicated project and process content"], pages: ["Home", "Projects", "Services", "Process", "Project detail", "Contact"], features: ["Responsive project grid", "Detailed fictional interior showcase", "Accessible navigation and enquiry form"], palette: "atelier", next: "clearspace" },
      clearspace: { id: "clearspace", name: "CLEARSPACE", category: "Commercial cleaning", short: "A clear service proposition for a conceptual facilities team.", concept: "A fictional facilities-service brand created to demonstrate a commercial website. It is not a real business or client.", audience: "Office managers and facilities teams looking for dependable premises care.", challenge: "Explain the scope of the service quickly and make the next step easy to find.", direction: "A graphite base, light surfaces, a measured lime accent, and compact information blocks.", decisions: ["A direct opening statement with a clear next step", "Concise service and premises sections", "Visible contact routes without pushy language"], pages: ["Home", "Services", "Premises", "Process", "FAQ", "Contact"], features: ["Responsive navigation and calls to action", "Structured service information", "Interactive project enquiry form"], palette: "clearspace", next: "northline" },
    } satisfies Record<ProjectId, Project>,
  },
} as const;

export function projectPath(locale: Locale, id: ProjectId) {
  return `/${locale}/projects/${id}`;
}
