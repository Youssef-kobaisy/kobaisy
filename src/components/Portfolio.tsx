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
  MessageCircle,
  PackageOpen,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import portrait from "../assets/youssef-portrait.jpg.asset.json";
import projectSetup from "../assets/invoice-reconciliation-setup.png.asset.json";
import projectResults from "../assets/invoice-reconciliation-results.png.asset.json";
import resume from "../assets/youssef-resume.docx.asset.json";

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
    hero: "Desktop software specialist building focused Python applications, scalable C++ logic, and systems that connect software with real hardware.",
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
    hero: "متخصص في بناء برامج سطح المكتب باستخدام Python، وتطوير منطق برمجي قوي بـ C++، وربط البرمجيات بالأجهزة الحقيقية.",
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
            <div className="relative aspect-[1365/742] w-full">
              <motion.img style={reducedMotion ? {} : { opacity: setupOpacity }} src={projectSetup.url} alt="Tax invoice reconciliation setup screen showing file mapping and configuration" className="project-screenshot absolute inset-0 h-full w-full object-cover" />
              <motion.img style={reducedMotion ? {} : { opacity: resultOpacity }} src={projectResults.url} alt="Tax invoice reconciliation results dashboard with detailed analysis metrics" className="project-screenshot absolute inset-0 h-full w-full object-cover" />
            </div>
          </motion.div>
          <div className="mt-4 flex justify-between text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground"><span>{language === "ar" ? "01 — الإعداد والربط" : "01 — Setup & Config"}</span><motion.span style={reducedMotion ? {} : { opacity: labelOpacity }}>{language === "ar" ? "02 — عرض النتائج" : "02 — Results View"}</motion.span></div>
        </div>
      </div>
    </section>
    <section className="relative px-[6vw] pb-28 pt-10 md:pb-40">
      <div className="mx-auto max-w-[1180px]">
        <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="max-w-2xl text-base leading-8 text-muted-foreground">{t.projectLead}</motion.p>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="mt-8 flex flex-col gap-8 border-t border-border pt-8 md:flex-row md:items-start md:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">{t.projectPitch}</p>
          <div className="flex shrink-0 flex-wrap gap-3">
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
  return <p ref={ref} className="max-w-[1200px] font-display text-[clamp(2.4rem,6.8vw,7rem)] font-medium leading-[1.02]">{words.map((word, i) => <Word key={`${word}-${i}`} progress={scrollYProgress} range={[i * 0.05, Math.min(i * 0.05 + 0.2, 1)]} still={reducedMotion} children={word}/>)}</p>;
}

function Word({ children, progress, range, still }: { children: string; progress: ReturnType<typeof useScroll>["scrollYProgress"]; range: [number, number]; still: boolean }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [18, 0]);
  return <motion.span style={still ? {} : { opacity, y }} className="mr-[0.25em] inline-block">{children}</motion.span>;
}

export default function Portfolio() {
  const [language, setLanguage] = useState<Language>("en");
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
    {/* Header with Portrait (First appearance) */}
    <header className="fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between px-[5vw] mix-blend-difference">
      <a href="#top" aria-label="Youssef Abdelhady — home" className="flex items-center gap-2 text-inverse">
        <img src={portrait.url} alt="Youssef Abdelhady profile picture" className="site-avatar size-8 rounded-full object-cover" />
        <span className="hidden text-xs font-medium uppercase tracking-[0.1em] sm:block">Youssef</span>
      </a>
      <nav className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.1em] text-inverse sm:gap-6 md:gap-9">
        <a className="nav-link hidden sm:block" href="#work">{t.nav[0]}</a>
        <a className="nav-link hidden md:block" href="#about">{t.nav[1]}</a>
        <a className="nav-link hidden lg:block" href="#certificates">{t.nav[2]}</a>
        <a className="nav-link hidden lg:block" href="#contact">{t.nav[3]}</a>
        <div className="language-switch" aria-label="Language">
          <button type="button" onClick={() => setLanguage("en")} className={language === "en" ? "is-active" : ""}>EN</button>
          <button type="button" onClick={() => setLanguage("ar")} className={language === "ar" ? "is-active" : ""}>AR</button>
        </div>
      </nav>
    </header>

    {/* Hero Section with Portrait (Second appearance) */}
    <section ref={hero} id="top" className="relative flex min-h-[100svh] items-end overflow-hidden px-[5vw] pb-[7vh] pt-28">
      <div className="absolute inset-0 hero-grid opacity-35" />
      <motion.div style={reducedMotion ? {} : { x: smoothX, y: portraitY }} className="portrait-shell absolute bottom-0 right-[5vw] h-[88vh] w-[min(52vw,720px)] overflow-hidden portrait-mask">
        <img src={portrait.url} alt="Portrait of Youssef Abdelhady Qubaisy — Desktop Software Developer" className="size-full object-cover grayscale-[10%]"/>
        <div className="absolute inset-0 portrait-grade"/>
      </motion.div>
      <motion.div style={reducedMotion ? {} : { y: smoothY, scale: heroScale, opacity: heroOpacity }} className="relative z-10 w-full origin-bottom-left">
        <div className="mb-[6vh] flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span className="status-dot"/>
          {t.available}
        </div>
        <h1 className="font-display text-[clamp(4rem,12vw,11.5rem)] font-medium leading-[0.76]">
          <span className="block">Youssef</span>
          <span className="ml-[8vw] block text-outline">Abdelhady</span>
        </h1>
        <div className="mt-8 flex items-end justify-between gap-6">
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">{t.hero}</p>
          <a href="#intro" aria-label="Continue scrolling to learn more" className="hidden items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted-foreground opacity-60 transition hover:opacity-100 md:flex">
            <span>Scroll</span>
            <ArrowDown size={16}/>
          </a>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild size="lg" className="h-12 rounded-none px-5">
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle/>
              {t.request}
              <ArrowUpRight/>
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 rounded-none border-border bg-background/40 px-5 backdrop-blur-sm">
            <a href="https://www.linkedin.com/in/youssef-abdalhady-571b01349/" target="_blank" rel="noreferrer">
              <Linkedin/>
              LinkedIn
              <ArrowUpRight/>
            </a>
          </Button>
        </div>
      </motion.div>
    </section>

    {/* Introduction Statement */}
    <section id="intro" className="relative flex min-h-[85vh] items-center px-[6vw] py-32">
      <RevealStatement text={t.statement}/>
    </section>

    {/* Project Showcase with Product Images */}
    <ProjectShowcase language={language} activationUrl={activationUrl}/>

    {/* About Section */}
    <section id="about" className="relative px-[6vw] py-28 md:py-44">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid items-center gap-14 border-t border-border pt-12 md:grid-cols-[0.85fr_1.35fr] md:gap-24">
          <motion.div initial={{ opacity: 0, rotateY: -12, y: 30 }} whileInView={{ opacity: 1, rotateY: 0, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="hidden md:block">
            <img src={portrait.url} alt="Portrait of Youssef Abdelhady for about section" className="aspect-square rounded-lg object-cover grayscale-[5%]" />
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
          {capabilities.map(({ icon: Icon, en, ar }, i) => { const [title, detail] = language === "en" ? en : ar; return <motion.article key={en[0]} initial={{ opacity: 0, y: 45, rotateX: 8 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }} className="group border border-border bg-background/50 p-5 transition hover:bg-background hover:shadow-lg md:p-6"><Icon size={20} className="mb-3 text-accent transition group-hover:scale-110" /><h3 className="mb-2 font-semibold text-foreground">{title}</h3><p className="text-xs leading-6 text-muted-foreground">{detail}</p></motion.article>; }}
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
          <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">Every project starts with understanding your workflow, then building the tool that solves it — on the desktop, in your hands, running locally.</p>
        </div>
        <div className="space-y-4">
          <p className="text-sm leading-7 text-muted-foreground md:text-base">Whether it's reconciliation, data processing, system monitoring, or hardware integration, I build desktop applications that work reliably and scale with your needs.</p>
          <p className="text-sm leading-7 text-muted-foreground md:text-base">Reach out with your workflow challenge, and let's explore what's possible.</p>
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
