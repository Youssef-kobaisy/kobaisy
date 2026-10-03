import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  Blocks,
  BrainCircuit,
  Braces,
  CheckCircle2,
  Cpu,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Languages,
  Laptop,
  LayoutTemplate,
  Linkedin,
  MapPin,
  Menu,
  X,
  MessageCircle,
  PackageOpen,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

// Import images directly from images folder (root level)
const portraitUrl = "/images/youssef-portrait.jpg";
const projectSetupUrl = "/images/invoice-reconciliation-setup.png";
const projectResultsUrl = "/images/invoice-reconciliation-results.png";

type Language = "en" | "ar";

const capabilities = [
  { icon: Braces, en: ["Programming languages", "Python and C++ with OOP, data structures, and clean modular logic."], ar: ["لغات البرمجة", "Python وC++ مع البرمجة كائنية التوجه وهياكل البيانات والمنطق النظيف المعياري."] },
  { icon: Laptop, en: ["Desktop interfaces", "Practical desktop interfaces built with Tkinter and Qt."], ar: ["واجهات سطح المكتب", "واجهات عملية لبرامج سطح المكتب مع Tkinter و Qt."] },
  { icon: Database, en: ["Database knowledge", "Working knowledge of storing, organizing, and retrieving application data."], ar: ["قواعد البيانات", "معرفة بتخزين وتنظيم واسترجاع بيانات التطبيقات."] },
  { icon: BrainCircuit, en: ["Problem solving", "Breaking complex requirements into clear, reliable software logic."], ar: ["حل المشكلات", "تحويل المتطلبات المعقدة إلى منطق برمجي واضح وموثوق."] },
  { icon: Cpu, en: ["Systems integration", "Serial communication, Arduino control, and hardware bridging."], ar: ["تكامل الأنظمة", "الاتصال التسلسلي والتحكم في Arduino وربط الأجهزة."] },
  { icon: ShieldCheck, en: ["Software testing", "ISTQB Foundation syllabus and structured testing methodologies."], ar: ["اختبار البرمجيات", "منهج ISTQB Foundation وأساليب الاختبار المنظمة."] },
  { icon: LayoutTemplate, en: ["UI/UX design", "User-centric interfaces for desktop and mobile applications."], ar: ["تصميم UI/UX", "واجهات تتمحور حول المستخدم لتطبيقات سطح المكتب والهاتف."] },
  { icon: Blocks, en: ["Scalable code", "Modular OOP architecture designed to stay maintainable."], ar: ["كود قابل للتوسع", "بنية OOP منظمة تسهّل التطوير والصيانة المستمرة."] },
] as const;

const caseStudy = {
  en: [
    ["The problem", "Checking tax portal invoices against a company ledger by hand is slow, repetitive, and easy to get wrong."],
    ["What it does", "It loads both files, maps matching columns, and compares them with a configurable amount tolerance."],
    ["What it finds", "Matches, amount differences, missing invoices, empty data, and duplicates are grouped for review."],
    ["Why it matters", "Accountants focus on the records that need attention and export a clear report."],
  ],
  ar: [
    ["المشكلة", "مراجعة فواتير بوابة الضرائب مع دفتر الشركة يدويًا بطيئة ومتكررة وسهلة الخطأ."],
    ["ماذا يفعل", "يحمّل الملفين ويربط الأعمدة ويقارن النتائج مع هامش فرق قابل للتعديل."],
    ["ماذا يكتشف", "الفواتير المتطابقة والفروقات والمفقودة والبيانات الفارغة والتكرارات."],
    ["القيمة", "يساعد المحاسبين على التركيز على السجلات المهمة وتصدير تقرير واضح."],
  ],
} as const;

const resultStats = [
  ["357", "Matched", "متطابقة"],
  ["66", "Amount differences", "فروقات مبلغ"],
  ["13 / 22", "Missing (A / B)", "مفقودة (A / B)"],
  ["35", "Duplicates", "مكررة"],
] as const;

const copy = {
  en: {
    nav: ["Work", "About", "Certificates", "Contact"],
    available: "Available for projects",
    hero: "Python and C++ applications, Tkinter and Qt interfaces, and practical problem solving — built around the way you work.",
    heroRole: "Python & C++ desktop developer",
    heroStudent: "Student at Elsewedy International Applied Technology School",
    viewWork: "Explore my work",
    scroll: "Discover more",
    workIntro: "Every project starts with understanding your workflow, then building a practical desktop tool around it.",
    workDetail: "From invoice reconciliation to hardware integration, I focus on clear interfaces and maintainable application logic.",
    workInvite: "Bring your workflow challenge. Let’s explore what we can build.",
    request: "Request a project",
    statement: "I build desktop software that turns demanding workflows into clear, dependable tools.",
    projectEyebrow: "Selected project / 2026",
    projectTitle: "Invoice Reconciliation",
    projectStack: "Python / Data processing / Bilingual UX",
    projectLead: "A bilingual desktop tool that compares Egyptian Tax Authority records with a company ledger — turning hours of manual checking into a clear, reviewable report.",
    projectPitch: "Try the application, see the reconciliation flow for yourself, then contact me directly when you are ready to activate it after the trial.",
    downloadApp: "Download the application",
    activateApp: "Activate after trial",
    sample: "Figures from the sample reconciliation shown above.",
    aboutEyebrow: "About / Why choose me",
    aboutTitle: "Built for the desktop. Designed around the problem.",
    aboutBody: "I'm a Software Development and Programming student at Elsewedy International Applied Technology School. My focus is creating practical desktop products with Python — from intuitive setup to reliable operation. Every tool I build is tested, documented, and ready to solve real workflow problems.",
    trustLine: "I treat every system as a real product: I understand the workflow first, build the right desktop experience, and keep communication clear from the first idea to delivery.",
    reasons: ["Problem-first thinking", "Clear user-focused interfaces", "Reliable, maintainable logic"],
    capabilities: "Capabilities / 08",
    certificates: "Certificates / Verified learning",
    certificateTitle: "Learning that ships with the work.",
    kaggleTitle: "Python Coder Certificate",
    courseraTitle: "Data Analysis using Google Excel",
    verify: "View certificate",
    moreWork: "More work",
    ideas: "Ideas made tangible.",
    start: "Start a conversation",
    contactTitle: "Have an idea? Let's build the tool it needs.",
    contactBody: "Tell me what you want to automate, simplify, or turn into a desktop product.",
  },
  ar: {
    nav: ["الأعمال", "عني", "الشهادات", "تواصل"],
    available: "متاح لتنفيذ المشاريع",
    hero: "تطبيقات Python وC++، وواجهات Tkinter وQt، وحلول عملية للمشكلات — مبنية حول طريقة عملك.",
    heroRole: "مطور برامج سطح المكتب بـ Python وC++",
    heroStudent: "طالب بمدرسة السويدي الدولية للتكنولوجيا التطبيقية",
    viewWork: "استكشف أعمالي",
    scroll: "اكتشف المزيد",
    workIntro: "كل مشروع يبدأ بفهم طريقة عملك، ثم بناء برنامج سطح مكتب عملي يناسبها.",
    workDetail: "من مطابقة الفواتير إلى تكامل الأجهزة، أركز على واجهات واضحة ومنطق برمجي يسهل تطويره وصيانته.",
    workInvite: "شاركني تحديات عملك، ولنكتشف معًا ما يمكننا بناؤه.",
    request: "اطلب برنامجًا أو مشروعًا",
    statement: "أبني برامج سطح مكتب تحوّل خطوات العمل المعقدة إلى أدوات واضحة وموثوقة.",
    projectEyebrow: "مشروع مختار / 2026",
    projectTitle: "مطابقة الفواتير الضريبية",
    projectStack: "Python / معالجة البيانات / واجهة ثنائية اللغة",
    projectLead: "برنامج سطح مكتب ثنائي اللغة يقارن سجلات مصلحة الضرائب بدفتر الشركة، ويحوّل ساعات المراجعة اليدوية إلى تقرير واضح وسهل المراجعة.",
    projectPitch: "جرّب التطبيق وتعرّف على خطوات المطابقة بنفسك، ثم تواصل معي مباشرة لتفعيل النسخة بعد انتهاء فترة التجربة.",
    downloadApp: "تحميل وتجربة التطبيق",
    activateApp: "تفعيل التطبيق بعد التجربة",
    sample: "الأرقام مأخوذة من نموذج المطابقة الظاهر بالأعلى.",
    aboutEyebrow: "عني / لماذا تختارني",
    aboutTitle: "متخصص في سطح المكتب. أبدأ دائمًا من المشكلة.",
    aboutBody: "أنا طالب تطوير وبرمجة في مدرسة السويدي الدولية للتكنولوجيا التطبيقية. أركز على بناء منتجات سطح مكتب عملية باستخدام Python — من الإعداد البديهي إلى التشغيل الموثوق. كل برنامج أبنيه يتم اختباره وتوثيقه وتجهيزه لحل مشاكل العمل الحقيقية.",
    trustLine: "أتعامل مع كل نظام كمنتج حقيقي: أفهم طريقة العمل أولًا، ثم أبني تجربة سطح مكتب مناسبة، مع تواصل واضح من الفكرة الأولى إلى التسليم.",
    reasons: ["تفكير يبدأ من المشكلة", "واجهات واضحة للمستخدم", "منطق موثوق وسهل التطوير"],
    capabilities: "المهارات / 08",
    certificates: "الشهادات / تعلم موثق",
    certificateTitle: "تعلّم يتحول إلى منتجات حقيقية.",
    kaggleTitle: "شهادة Python Coder",
    courseraTitle: "تحليل البيانات باستخدام Google Excel",
    verify: "عرض الشهادة",
    moreWork: "أعمال أخرى",
    ideas: "أفكار تتحول إلى واقع.",
    start: "ابدأ محادثة",
    contactTitle: "لديك فكرة؟ لنصنع الأداة التي تحتاجها.",
    contactBody: "أخبرني بما تريد أتمتته أو تبسيطه أو تحويله إلى برنامج سطح مكتب.",
  },
} as const;

function useCompactLayout() {
  const [isCompact, setIsCompact] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsCompact(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return isCompact;
}

function ProjectShowcase({ language, activationUrl }: { language: Language; activationUrl: string }) {
  const t = copy[language];
  const section = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const isCompact = useCompactLayout();
  const { scrollYProgress } = useScroll({ target: section, offset: ["start end", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 22, mass: 0.5 });
  const scale = useTransform(smoothProgress, [0, 0.4, 0.85, 1], isCompact ? [0.82, 1, 1, 0.96] : [0.55, 1, 1, 0.94]);
  const rotateX = useTransform(smoothProgress, [0, 0.4], isCompact ? [12, 0] : [24, 0]);
  const translateZ = useTransform(smoothProgress, [0, 0.4], isCompact ? [-100, 0] : [-320, 0]);
  const frameOpacity = useTransform(smoothProgress, [0, 0.22], [0, 1]);
  const setupOpacity = useTransform(smoothProgress, [0.58, 0.7], [1, 0]);
  const resultOpacity = useTransform(smoothProgress, [0.6, 0.72], [0, 1]);
  const titleY = useTransform(smoothProgress, [0.1, 0.4], [60, 0]);
  const titleOpacity = useTransform(smoothProgress, [0.12, 0.38, 0.92, 1], [0, 1, 1, 0.4]);
  const labelOpacity = useTransform(smoothProgress, [0.62, 0.74], [0, 1]);

  return <>
    <section ref={section} id="work" className="relative h-[260vh] bg-background">
      <div className="sticky top-0 flex h-[100svh] flex-col items-center justify-center overflow-hidden px-[5vw]">
        <div className="pointer-events-none absolute inset-0 project-grid opacity-40" />
        <motion.div style={reducedMotion ? {} : { opacity: titleOpacity, y: titleY }} className="relative z-20 mb-[4vh] mt-12 flex w-full max-w-[min(1180px,128svh)] items-end justify-between gap-[4vw]">
          <div><p className="section-kicker">{t.projectEyebrow}</p><h2 className="mt-3 font-display text-[clamp(2.2rem,5vw,5rem)] font-medium leading-[0.92]">{t.projectTitle}</h2></div>
          <p className="hidden text-right text-xs uppercase tracking-[0.18em] text-muted-foreground md:block">{t.projectStack}</p>
        </motion.div>
        <div className="project-stage relative z-10 w-full max-w-[min(1180px,128svh)]">
          <motion.div style={reducedMotion ? {} : { scale, rotateX, z: translateZ, opacity: frameOpacity }} className="project-frame relative w-full overflow-hidden rounded-lg border border-border shadow-2xl">
            <div className="project-chrome flex h-7 items-center gap-1.5 border-b border-border px-3"><span/><span/><span/><p>{language === "ar" ? "مطابقة الفواتير / عرض النتائج" : "Invoice Reconciliation / Results"}</p></div>
            <div className="relative aspect-[1365/742] w-full bg-muted">
              <motion.img 
                style={reducedMotion ? {} : { opacity: setupOpacity }} 
                src={projectSetupUrl} 
                alt="Tax invoice reconciliation setup screen showing file mapping and configuration" 
                className="project-screenshot absolute inset-0 h-full w-full object-contain"
                loading="lazy"
              />
              <motion.img 
                style={reducedMotion ? {} : { opacity: resultOpacity }} 
                src={projectResultsUrl} 
                alt="Tax invoice reconciliation results dashboard with detailed analysis metrics" 
                className="project-screenshot absolute inset-0 h-full w-full object-contain"
                loading="lazy"
              />
            </div>
          </motion.div>
          <div className="mt-4 flex justify-between text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground"><span>{language === "ar" ? "01 — الإعداد والربط" : "01 — Setup & Config"}</span><motion.span style={reducedMotion ? {} : { opacity: labelOpacity }}>{language === "ar" ? "02 — عرض النتائج" : "02 — Results View"}</motion.span></div>
        </div>
      </div>
    </section>
    <section className="relative px-[6vw] pb-28 pt-10 md:pb-40">
      <div className="mx-auto max-w-[1180px]">
        <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="max-w-2xl text-base leading-8 text-muted-foreground">{t.projectLead}</motion.p>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="mt-8 flex flex-col gap-8 border-t border-border pt-8 lg:flex-row lg:items-start lg:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">{t.projectPitch}</p>
          <div className="grid min-w-0 gap-3 sm:grid-cols-2 lg:shrink-0 lg:grid-cols-1">
            <Button asChild size="lg" className="h-12 rounded-none px-5"><a href="https://download-taxapp.vercel.app" target="_blank" rel="noreferrer"><PackageOpen/>{t.downloadApp}<ArrowUpRight/></a></Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-none border-border bg-background/40 px-5"><a href={activationUrl} target="_blank" rel="noreferrer"><MessageCircle/>{t.activateApp}<ArrowUpRight/></a></Button>
          </div>
        </motion.div>
        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {caseStudy[language].map(([title, body], i) => <motion.article key={title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }} className="bg-background p-6 md:p-8"><p className="mb-2 text-xs font-medium uppercase tracking-[0.12em] text-accent">{title}</p><p className="text-sm leading-7 text-muted-foreground md:text-base">{body}</p></motion.article>)}
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">{resultStats.map(([value, en, ar], i) => <motion.div key={en} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}><p className="text-lg font-medium text-accent md:text-2xl">{value}</p><p className="mt-1 text-xs uppercase tracking-[0.1em] text-muted-foreground">{language === "en" ? en : ar}</p></motion.div>)}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">{t.sample}</p>
      </div>
    </section>
  </>;
}

function RevealStatement({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "start 0.3"] });
  const words = text.split(" ");
  return <p ref={ref} className="max-w-[1200px] font-display text-[clamp(2.4rem,6.8vw,7rem)] font-medium leading-[1.02]">{words.map((word, i) => <Word key={`${word}-${i}`} progress={scrollYProgress} range={[i * 0.05, Math.min(i * 0.05 + 0.2, 1)]} still={reducedMotion ?? false} children={word}/>)}</p>;
}

function Word({ children, progress, range, still }: { children: string; progress: ReturnType<typeof useScroll>["scrollYProgress"]; range: [number, number]; still: boolean }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [18, 0]);
  return <motion.span style={still ? {} : { opacity, y }} className="mr-[0.25em] inline-block">{children}</motion.span>;
}

export default function Portfolio() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];
  const isArabic = language === "ar";
  const hero = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 85, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 85, damping: 22 });
  const { scrollYProgress } = useScroll({ target: hero, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.86]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const whatsappMessage = isArabic ? "مرحبًا يوسف، أريد مناقشة تنفيذ برنامج أو مشروع جديد." : "Hello Youssef, I would like to discuss a new software project.";
  const whatsappUrl = `https://wa.me/201107022373?text=${encodeURIComponent(whatsappMessage)}`;
  const activationMessage = isArabic ? "مرحبًا يوسف، انتهت الفترة التجريبية لتطبيق مطابقة الفواتير وأريد تفعيل التطبيق." : "Hello Youssef, I have finished testing the invoice reconciliation app and would like to activate it.";
  const activationUrl = `https://wa.me/201107022373?text=${encodeURIComponent(activationMessage)}`;

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [isArabic, language]);

  return <main dir={isArabic ? "rtl" : "ltr"} onPointerMove={(event) => { if (reducedMotion) return; mouseX.set((event.clientX / window.innerWidth - 0.5) * 18); mouseY.set((event.clientY / window.innerHeight - 0.5) * 18); }} className={`min-h-screen bg-background text-foreground ${isArabic ? "rtl" : "ltr"}`}>
    <header className="portfolio-header fixed inset-x-0 top-0 z-50 grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-[5vw]">
      <a href="#top" aria-label="Youssef Abdelhady — home" className="flex min-w-0 items-center gap-3" onClick={() => setMenuOpen(false)}>
        <img src={portraitUrl} alt="Youssef Abdelhady" className="site-avatar size-9 shrink-0 rounded-full object-cover" />
        <span className="font-display text-xl font-bold text-accent">Y.A</span>
      </a>
      <div className="flex shrink-0 items-center gap-4 md:gap-8">
        <nav aria-label={isArabic ? "التنقل الرئيسي" : "Main navigation"} className="hidden items-center gap-7 text-xs text-muted-foreground md:flex">
          {["work", "about", "certificates", "contact"].map((id, i) => <a key={id} className="nav-link hover:text-accent" href={`#${id}`}>{t.nav[i]}</a>)}
        </nav>
        <div className="language-switch" aria-label={isArabic ? "اللغة" : "Language"}>
          <Button variant="ghost" size="sm" type="button" aria-pressed={language === "en"} onClick={() => setLanguage("en")} className={language === "en" ? "is-active" : ""}>EN</Button>
          <Button variant="ghost" size="sm" type="button" aria-pressed={language === "ar"} onClick={() => setLanguage("ar")} className={language === "ar" ? "is-active" : ""}>AR</Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label={isArabic ? "قائمة التنقل" : "Navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</Button>
      </div>
      {menuOpen && <nav id="mobile-navigation" aria-label={isArabic ? "التنقل" : "Navigation"} className="absolute inset-x-0 top-20 grid grid-cols-2 gap-4 border-b border-border bg-background px-[5vw] py-6 text-sm md:hidden">
        {["work", "about", "certificates", "contact"].map((id, i) => <a key={id} href={`#${id}`} className="nav-link" onClick={() => setMenuOpen(false)}>{t.nav[i]}</a>)}
      </nav>}
    </header>

    <section ref={hero} id="top" className="cinema-hero relative flex items-center overflow-hidden px-[6vw]">
      <div aria-hidden="true" className="cinema-name pointer-events-none absolute inset-0 hidden items-center justify-center font-display font-black uppercase text-foreground/[0.025] lg:flex">Youssef</div>
      <motion.div style={reducedMotion ? {} : { x: smoothX, y: portraitY }} className="cinema-portrait pointer-events-none absolute">
        <img src={portraitUrl} alt="Youssef Abdelhady Qubaisy — Desktop Software Developer" className="h-full w-full object-cover" fetchPriority="high" />
        <div className="cinema-portrait-shade absolute inset-0"/>
        <span aria-hidden="true" className="cinema-corner cinema-corner-top"/>
        <span aria-hidden="true" className="cinema-corner cinema-corner-bottom"/>
      </motion.div>
      <motion.div style={reducedMotion ? {} : { scale: heroScale, opacity: heroOpacity }} className="cinema-content relative z-10 min-w-0 origin-center">
        <motion.p initial={reducedMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-6 flex items-center gap-3 text-xs text-muted-foreground"><span className="h-px w-8 shrink-0 bg-accent"/>{t.heroRole}</motion.p>
        <motion.h1 initial={reducedMotion ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }} className="cinema-title font-display font-black uppercase" dir="ltr">
          <span className="block text-accent">Youssef</span>
          <span className="block text-foreground">Abdelhady</span>
        </motion.h1>
        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground md:text-lg md:leading-8">{t.hero}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 rounded-none bg-accent px-5 text-accent-foreground hover:bg-primary"><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle/>{t.request}<ArrowUpRight/></a></Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-none border-border bg-background/60 px-5 hover:border-accent"><a href="#work">{t.viewWork}<ArrowDown/></a></Button>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
            <a href="https://www.linkedin.com/in/youssef-abdalhady-571b01349/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent"><Linkedin size={14}/>LinkedIn<ArrowUpRight size={12}/></a>
            <span className="flex items-center gap-2"><span className="status-dot shrink-0"/>{t.available}</span>
          </div>
        </motion.div>
      </motion.div>
      <div className="cinema-footer absolute inset-x-[6vw] bottom-7 z-10 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-5 border-t border-border pt-4">
        <p className="flex min-w-0 items-center gap-2 text-xs leading-5 text-muted-foreground"><GraduationCap size={16} className="shrink-0 text-accent"/>{t.heroStudent}</p>
        <a href="#intro" aria-label={t.scroll} className="scroll-cue flex size-9 shrink-0 items-center justify-center border border-border text-accent"><ArrowDown size={16}/></a>
      </div>
    </section>

    {/* Introduction Statement */}
    <section id="intro" className="relative flex min-h-[85vh] items-center px-[6vw] py-32">
      <RevealStatement text={t.statement}/>
    </section>

    {/* Project Showcase with Product Images */}
    <ProjectShowcase language={language} activationUrl={activationUrl}/>

    {/* About Section with Portrait - Third appearance */}
    <section id="about" className="relative px-[6vw] py-28 md:py-44">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid items-center gap-14 border-t border-border pt-12 md:grid-cols-[0.85fr_1.35fr] md:gap-24">
          <motion.div initial={{ opacity: 0, rotateY: -12, y: 30 }} whileInView={{ opacity: 1, rotateY: 0, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="hidden md:block">
            <img src={portraitUrl} alt="Portrait of Youssef Abdelhady for about section" className="aspect-square rounded-lg object-cover grayscale-[5%]" loading="lazy" />
          </motion.div>
          <div>
            <p className="section-kicker">{t.aboutEyebrow}</p>
            <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.7rem,5.5vw,6rem)] font-medium leading-[0.95]">{t.aboutTitle}</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">{t.aboutBody}</p>
            <p className="mt-8 max-w-2xl border-l-2 border-accent pl-4 text-base leading-8 text-muted-foreground italic">{t.trustLine}</p>
            <div className="mt-12 space-y-2">
              {t.reasons.map((reason) => <div key={reason} className="flex items-center gap-3 text-sm"><CheckCircle2 size={16} className="text-accent" />{reason}</div>)}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-28 flex items-end justify-between border-b border-border pb-6">
          <p className="section-kicker">{t.capabilities}</p>
          <BrainCircuit className="text-accent" size={22}/>
        </div>
        <div className="skills-grid mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ icon: Icon, en, ar }, i) => { const [title, detail] = language === "en" ? en : ar; return <motion.article key={en[0]} initial={{ opacity: 0, y: 45, rotateX: 8 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }} className="skill-card group"><Icon size={20} className="mb-3 text-accent transition group-hover:scale-110" /><h3 className="mb-2 font-semibold text-foreground">{title}</h3><p className="text-xs leading-6 text-muted-foreground">{detail}</p></motion.article>; })}
        </div>
      </div>
    </section>

    {/* Certificates Section */}
    <section id="certificates" className="certificate-band px-[6vw] py-28 md:py-40">
      <div className="mx-auto max-w-[1180px]">
        <p className="section-kicker">{t.certificates}</p>
        <h2 className="mt-5 max-w-3xl font-display text-[clamp(3rem,6vw,6.5rem)] leading-[0.95]">{t.certificateTitle}</h2>
        <div className="certificate-stage mt-16 grid gap-6 md:grid-cols-2">
          <motion.a href="https://kaggle.com/certification/badges/youssefabdalhady/30" target="_blank" rel="noreferrer" whileHover={reducedMotion ? {} : { y: -8, rotateX: 2, rotateY: -2 }} className="certificate-card group relative overflow-hidden border border-border bg-gradient-to-br from-background to-background/50 p-8 transition hover:shadow-xl">
            <Award className="mb-4 text-accent transition group-hover:scale-110" size={28}/>
            <h3 className="font-semibold text-foreground">{t.kaggleTitle}</h3>
            <p className="mt-2 text-xs text-muted-foreground">Kaggle Learning</p>
            <ArrowUpRight className="absolute bottom-4 right-4 opacity-0 transition group-hover:opacity-100" size={16}/>
          </motion.a>
          <motion.a href="https://coursera.org/verify/DTJDXJL13EON" target="_blank" rel="noreferrer" whileHover={reducedMotion ? {} : { y: -8, rotateX: 2, rotateY: 2 }} className="certificate-card group relative overflow-hidden border border-border bg-gradient-to-br from-background to-background/50 p-8 transition hover:shadow-xl">
            <GraduationCap className="mb-4 text-accent transition group-hover:scale-110" size={28}/>
            <h3 className="font-semibold text-foreground">{t.courseraTitle}</h3>
            <p className="mt-2 text-xs text-muted-foreground">Coursera Professional</p>
            <ArrowUpRight className="absolute bottom-4 right-4 opacity-0 transition group-hover:opacity-100" size={16}/>
          </motion.a>
        </div>
      </div>
    </section>

    {/* More Work Section */}
    <section className="px-[6vw] py-28 md:py-40">
      <div className="grid gap-16 md:grid-cols-2 md:gap-24">
        <div>
          <p className="section-kicker">{t.moreWork}</p>
          <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.95]">{t.ideas}</h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">{t.workIntro}</p>
        </div>
        <div className="space-y-4">
          <p className="text-sm leading-7 text-muted-foreground md:text-base">{t.workDetail}</p>
          <p className="text-sm leading-7 text-muted-foreground md:text-base">{t.workInvite}</p>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="relative flex min-h-screen flex-col justify-between overflow-hidden px-[6vw] pb-10 pt-32">
      <div className="absolute inset-0 contact-grid opacity-25"/>
      <div className="relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
          <h2 className="font-display text-[clamp(3rem,8vw,8rem)] font-medium leading-[0.9]">{t.contactTitle}</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">{t.contactBody}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="h-12 rounded-none px-8">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle/>
                {t.start}
                <ArrowUpRight/>
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-none border-border px-8">
              <a href="mailto:youssef.abdalhady.dev@gmail.com">
                <ExternalLink/>
                Email
                <ArrowUpRight/>
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mt-24 flex flex-col gap-10 border-t border-border pt-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={16}/>
            Cairo, Egypt
          </p>
          <p className="mt-2 text-sm text-muted-foreground">🌐 Available worldwide</p>
        </div>
        <p className="text-xs text-muted-foreground">© 2026 Youssef Abdelhady. All rights reserved. Crafted with intention and shipped with care.</p>
      </div>
    </section>
  </main>;
}
