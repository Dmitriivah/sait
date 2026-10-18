import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { Locale } from "@/config/site";
import { copy, type ProjectId } from "@/lib/content";
import { ProjectArtwork } from "@/components/projects/ProjectArtwork";

const demos = {
  ru: {
    northline: {
      nav: ["Услуги", "Подход", "Проекты", "FAQ"],
      title: "Ясный путь вперёд.",
      intro: "Помогаем сервисным компаниям увидеть, что мешает работать слаженно, и превратить сложность в последовательные решения.",
      offer: "Независимый взгляд на процессы — без готовых рецептов.",
      serviceHeading: "Системная работа начинается с ясности.",
      cards: [["Операционная модель", "Разбираемся, как связаны роли, процессы и повседневные решения."], ["Рабочие процессы", "Находим точки трения и предлагаем понятные варианты улучшений."], ["Поддержка изменений", "Помогаем команде внедрять согласованные изменения в подходящем темпе."]],
      approachHeading: "Сначала понять. Затем менять.",
      approach: "Каждая работа начинается с контекста: целей команды, существующих ограничений и того, что уже работает. После этого можно определить разумную последовательность действий.",
      workHeading: "Исследование подхода",
      work: "Вымышленный пример: как консалтинговая услуга может объяснять сложную тему через последовательную структуру и содержательные разделы.",
      quote: "Дизайн этого концепта намеренно сдержанный: содержание и навигация остаются в центре внимания.",
      faqHeading: "Первые вопросы.",
      faq: [["С чего начинается работа?", "С разговора о задаче, команде и текущем положении дел."], ["Подходит ли единый план всем?", "Нет. Возможный объём зависит от обстоятельств и согласуется отдельно."]],
      cta: "Расскажите, что нужно вашей команде.",
    },
    "atelier-form": {
      nav: ["Услуги", "Проекты", "Процесс", "Контакты"],
      title: "Дом, в котором тише.",
      intro: "Интерьеры с естественными материалами, спокойной палитрой и продуманным вниманием к тому, как устроен каждый день.",
      offer: "Пространство должно быть красивым — и своим.",
      serviceHeading: "Сдержанный интерьер с личным характером.",
      cards: [["Частные пространства", "Комфортный дом, в котором важные детали поддерживают повседневные привычки."], ["Рабочие интерьеры", "Продуманная среда для встреч, сосредоточенной работы и отдыха."], ["Предметный подбор", "Материалы, свет и фактуры, собранные в цельную композицию."]],
      approachHeading: "От первого эскиза до последней детали.",
      approach: "Слушаем, как вы хотите чувствовать себя дома, знакомимся с пространством и вместе выбираем направление. Этапы и объём работы согласуются под каждую задачу.",
      workHeading: "Дом на тихой улице",
      work: "Вымышленный интерьер-концепт: спокойные текстуры, естественный свет и функциональная планировка без визуального шума.",
      quote: "Цель — не заполнить пространство, а помочь ему стать по-настоящему вашим.",
      faqHeading: "О процессе.",
      faq: [["С чего начинается проект?", "Со знакомства, обсуждения пространства и ваших повседневных привычек."], ["Можно ли привлечь только к одной комнате?", "В рамках этого концепта услуги показаны как направления. Реальный состав работ следует согласовать отдельно."]],
      cta: "Обсудить пространство.",
    },
    clearspace: {
      nav: ["Услуги", "Объекты", "Процесс", "Вопросы"],
      title: "Чистое пространство. Ясный рабочий день.",
      intro: "Плановое обслуживание рабочих пространств, чтобы забота о повседневной чистоте была организована и понятна.",
      offer: "Профессиональный уход за коммерческими помещениями.",
      serviceHeading: "Сервис, который подстраивается под объект.",
      cards: [["Ежедневная уборка", "Регулярный уход за общими, рабочими и санитарными зонами."], ["Уход за поверхностями", "Бережный порядок для полов, стекла и часто используемых пространств."], ["Гибкое обслуживание", "Согласованный график и список работ с учётом особенностей объекта."]],
      approachHeading: "Понятный порядок взаимодействия.",
      approach: "Знакомимся с объектом и его режимом работы, обсуждаем зоны и частоту обслуживания, затем составляем предложение для согласования.",
      workHeading: "Коммерческие пространства",
      work: "Концепт показывает, как компактно объяснить структуру обслуживания для офиса, общей зоны или коммерческого объекта.",
      quote: "Конкретный объём услуг и возможности зависят от объекта и согласованного предложения.",
      faqHeading: "До запроса.",
      faq: [["Какие объекты обслуживаются?", "В концепте рассматриваются офисы и коммерческие пространства."], ["Как узнать доступный объём и стоимость?", "Условия и стоимость требуют оценки объекта и согласования — концепт не представляет реальную компанию."]],
      cta: "Обсудить задачу.",
    },
  },
  en: {
    northline: {
      nav: ["Services", "Approach", "Work", "FAQ"],
      title: "A clearer way forward.",
      intro: "Helping service businesses understand what gets in the way of good work and turn complexity into considered next steps.",
      offer: "An independent perspective on operations — without off-the-shelf answers.",
      serviceHeading: "Good operations start with clarity.",
      cards: [["Operating model", "See how roles, processes, and everyday decisions connect."], ["Ways of working", "Identify friction and explore practical options for improvement."], ["Change support", "Help your team put agreed changes into practice at a workable pace."]],
      approachHeading: "Understand first. Then make a change.",
      approach: "Every engagement begins with context: your team's goals, existing constraints, and what already works. From there, it is easier to agree on a sensible sequence of steps.",
      workHeading: "A closer look at the approach",
      work: "A fictional example of how a consultancy can explain a complex service through thoughtful structure and useful detail.",
      quote: "The visual language is intentionally restrained, keeping the content and navigation in focus.",
      faqHeading: "A few first questions.",
      faq: [["How does an engagement begin?", "With a conversation about the brief, your team, and where things stand."], ["Is there one plan that works for everyone?", "No. Scope depends on the circumstances and is agreed separately."]],
      cta: "Tell us what your team needs.",
    },
    "atelier-form": {
      nav: ["Services", "Projects", "Process", "Contact"],
      title: "A quieter kind of home.",
      intro: "Interiors with natural materials, a considered palette, and a thoughtful sense of how everyday life unfolds.",
      offer: "A space should feel beautiful — and feel like yours.",
      serviceHeading: "A considered interior with a personal point of view.",
      cards: [["Private spaces", "A welcoming home shaped around the details of everyday life."], ["Places to work", "Thoughtful surroundings for meeting, focus, and a moment to pause."], ["Finishing touches", "Materials, light, and texture brought together in a coherent whole."]],
      approachHeading: "From the first sketch to the final detail.",
      approach: "We talk about how you want to feel at home, get to know the space, and explore a direction together. The right scope and stages are agreed for each brief.",
      workHeading: "A home on a quiet street",
      work: "A fictional interior study in considered texture, natural light, and a practical plan without visual noise.",
      quote: "The aim is not to fill a room, but to help it feel like it belongs to you.",
      faqHeading: "About the process.",
      faq: [["How does a project begin?", "With a conversation about your space and the way you live in it."], ["Can you help with one room?", "This concept presents service directions. The scope of real work would be agreed separately."]],
      cta: "Talk about your space.",
    },
    clearspace: {
      nav: ["Services", "Spaces", "Process", "Questions"],
      title: "Space to do your best.",
      intro: "Planned care for working environments, making everyday upkeep organised, considered, and clear.",
      offer: "Professional cleaning for commercial premises.",
      serviceHeading: "A service shaped around the space.",
      cards: [["Regular cleaning", "Planned care for shared, working, and washroom spaces."], ["Surface care", "Thoughtful upkeep for floors, glass, and well-used areas."], ["Flexible schedules", "An agreed list of tasks and cadence to suit each site."]],
      approachHeading: "A straightforward way to work together.",
      approach: "We learn about the site and its working hours, discuss the spaces and frequency, and prepare a proposal for review.",
      workHeading: "Commercial spaces",
      work: "This concept shows how to explain a service for an office, shared space, or commercial location in a compact, useful way.",
      quote: "The actual scope and availability depend on the site and an agreed proposal.",
      faqHeading: "Before you enquire.",
      faq: [["What spaces are covered?", "This concept is designed around offices and commercial premises."], ["How do I find out scope and pricing?", "These depend on a site review and agreement. This concept is not a real company."]],
      cta: "Discuss a brief.",
    },
  },
} as const;

export function ProjectDemo({ locale, projectId }: { locale: Locale; projectId: ProjectId }) {
  const project = copy[locale].projects[projectId];
  const content = demos[locale][projectId];
  const navIds = projectId === "atelier-form"
    ? ["services", "work", "approach", "contact"]
    : projectId === "clearspace"
      ? ["services", "work", "approach", "faq"]
      : ["services", "approach", "work", "faq"];
  const approachLabel = projectId === "atelier-form" ? content.nav[2] : projectId === "clearspace" ? content.nav[2] : content.nav[1];
  const workLabel = projectId === "atelier-form" ? content.nav[1] : projectId === "clearspace" ? content.nav[1] : content.nav[2];
  const faqLabel = projectId === "atelier-form" ? (locale === "ru" ? "Вопросы" : "Questions") : content.nav[3];
  return (
    <div className={`project-demo demo-${projectId}`}>
      <div className="demo-ribbon">{copy[locale].concept} <span>·</span> {locale === "ru" ? "Демонстрационный сайт" : "Interactive concept site"}</div>
      <header className="demo-header">
        <Link className="demo-brand" href={`/${locale}/projects/${projectId}`}>{project.name}<span> / {project.category}</span></Link>
        <nav aria-label={locale === "ru" ? "Навигация концепта" : "Concept navigation"}>
          {content.nav.map((item, index) => <a href={`#${navIds[index]}`} key={item}>{item}</a>)}
        </nav>
        <Link className="demo-contact" href={`/${locale}/contact`}>{locale === "ru" ? "Обсудить" : "Enquire"} ↗</Link>
        <div className="demo-locale" aria-label={locale === "ru" ? "Язык" : "Language"}>
          <Link href={`/ru/projects/${projectId}/demo`} aria-current={locale === "ru" ? "page" : undefined}>RU</Link>
          <span>/</span>
          <Link href={`/en/projects/${projectId}/demo`} aria-current={locale === "en" ? "page" : undefined}>EN</Link>
        </div>
      </header>
      <section className="demo-hero">
        <div className="demo-hero-copy"><span className="eyebrow">{content.offer}</span><h1>{content.title}</h1><p>{content.intro}</p><a className="demo-link" href="#services">{locale === "ru" ? "Изучить концепцию" : "Explore the concept"}<ArrowDown size={15} /></a></div>
        <div className="demo-hero-art"><ProjectArtwork project={project} /></div>
      </section>
      <section className="demo-services" id="services"><span className="section-kicker">01 / {locale === "ru" ? "Услуги" : "Services"}</span><h2>{content.serviceHeading}</h2><div className="demo-service-grid">{content.cards.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
      <section className="demo-approach" id="approach"><span className="section-kicker">02 / {approachLabel}</span><h2>{content.approachHeading}</h2><p>{content.approach}</p><span className="demo-approach-mark" aria-hidden="true">↗</span></section>
      <section className="demo-work" id="work"><div><span className="section-kicker">03 / {workLabel}</span><h2>{content.workHeading}</h2><p>{content.work}</p><span className="demo-quote">{content.quote}</span></div><div className="demo-work-art"><ProjectArtwork project={project} compact /></div></section>
      <section className="demo-faq" id="faq"><div><span className="section-kicker">04 / {faqLabel}</span><h2>{content.faqHeading}</h2></div><div className="demo-faq-list">{content.faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>
      <section className="demo-end" id="contact"><div><span className="eyebrow">{project.name} / {locale === "ru" ? "Концепт" : "Concept study"}</span><h2>{content.cta}</h2><p>{locale === "ru" ? "Этот бренд и его услуги вымышлены. Посмотрите описание концепта или обсудите похожую задачу для вашего бизнеса." : "This brand and its services are fictional. Explore the concept notes or discuss a similar brief for your business."}</p><div className="demo-end-actions"><Link href={`/${locale}/contact`}>{locale === "ru" ? "Обсудить похожий сайт" : "Discuss a similar website"}<ArrowUpRight size={16} /></Link><Link href={`/${locale}/projects/${projectId}`}>{locale === "ru" ? "О концепте" : "About this concept"}<ArrowUpRight size={16} /></Link></div></div></section>
    </div>
  );
}
