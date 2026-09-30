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
  Download,
  ExternalLink,
  GraduationCap,
  Languages,
  Laptop,
  LayoutTemplate,
  Linkedin,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import portrait from "../assets/youssef-portrait.jpg.asset.json";
import projectSetup from "../assets/invoice-reconciliation-setup.png.asset.json";
import projectResults from "../assets/invoice-reconciliation-results.png.asset.json";
import resume from "../assets/youssef-resume.docx.asset.json";

type Language = "en" | "ar";

const capabilities = [
  { icon: Laptop, en: ["Desktop development", "Python and Tkinter applications built around practical workflows."], ar: ["تطوير برامج سطح المكتب", "تطبيقات Python وTkinter مبنية حول احتياجات عملية حقيقية."] },
  { icon: Braces, en: ["Programming", "Advanced Python core, C++ OOP, and data structures."], ar: ["البرمجة", "Python متقدم وC++ والبرمجة كائنية التوجه وهياكل البيانات."] },
  { icon: BrainCircuit, en: ["Problem solving", "Breaking complex requirements into clear, reliable software logic."], ar: ["حل المشكلات", "تحويل المتطلبات المعقدة إلى منطق برمجي واضح وموثوق."] },
  { icon: Cpu, en: ["Systems integration", "Serial communication, Arduino control, and hardware bridging."], ar: ["تكامل الأنظمة", "الاتصال التسلسلي والتحكم في Arduino وربط البرامج بالأجهزة."] },
  { icon: ShieldCheck, en: ["Software testing", "ISTQB Foundation syllabus and structured testing methodologies."], ar: ["اختبار البرمجيات", "منهج ISTQB Foundation وأساليب الاختبار المنظمة."] },
  { icon: LayoutTemplate, en: ["UI/UX design", "User-centric interfaces for desktop and mobile applications."], ar: ["تصميم UI/UX", "واجهات تتمحور حول المستخدم لتطبيقات سطح المكتب والموبايل."] },
  { icon: Blocks, en: ["Scalable code", "Modular OOP architecture designed to stay maintainable."], ar: ["كود قابل للتوسع", "بنية OOP منظمة تسهّل التطوير والصيانة."] },
  { icon: Wrench, en: ["Data & tools", "Kaggle, Google Sheets data analysis, and Microsoft Office."], ar: ["البيانات والأدوات", "Kaggle وتحليل البيانات عبر Google Sheets وMicrosoft Office."] },
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
    sample: "Figures from the sample reconciliation shown above.",
    aboutEyebrow: "About / Why choose me",
    aboutTitle: "Built for the desktop. Designed around the problem.",
    aboutBody: "I’m a Software Development and Programming student at Elsewedy International Applied Technology School. My focus is creating practical desktop products with Python — from intuitive interfaces to data workflows and hardware-connected systems.",
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
    contactTitle: "Have an idea? Let’s build the tool it needs.",
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
    projectLead: "برنامج سطح مكتب ثنائي اللغة يقارن سجلات مصلحة الضرائب بدفتر الشركة، ويحوّل ساعات المراجعة اليدوية إلى تقرير واضح وسهل التدقيق.",
    sample: "الأرقام مأخوذة من نموذج المطابقة الظاهر بالأعلى.",
    aboutEyebrow: "عني / لماذا تختارني",
    aboutTitle: "متخصص في سطح المكتب. أبدأ دائمًا من المشكلة.",
    aboutBody: "أنا طالب تطوير وبرمجة في مدرسة السويدي الدولية للتكنولوجيا التطبيقية. أركز على بناء منتجات سطح مكتب عملية باستخدام Python، من الواجهات السهلة إلى معالجة البيانات والأنظمة المتصلة بالأجهزة.",
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

function ProjectShowcase({ language }: { language: Language }) {
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
        <motion.div style={reducedMotion ? {} : { opacity: titleOpacity, y: titleY }} className="relative z-20 mb-[4vh] mt-12 flex w-full max-w-[min(1180px,128svh)] items-end justify-between gap-6">
          <div><p className="section-kicker">{t.projectEyebrow}</p><h2 className="mt-3 font-display text-[clamp(2.2rem,5vw,5rem)] font-medium leading-[0.92]">{t.projectTitle}</h2></div>
          <p className="hidden text-right text-xs uppercase tracking-[0.18em] text-muted-foreground md:block">{t.projectStack}</p>
        </motion.div>
        <div className="project-stage relative z-10 w-full max-w-[min(1180px,128svh)]">
          <motion.div style={reducedMotion ? {} : { scale, rotateX, z: translateZ, opacity: frameOpacity }} className="project-frame relative w-full overflow-hidden rounded-lg border border-border bg-card shadow-project">
            <div className="project-chrome flex h-7 items-center gap-1.5 border-b border-border px-3"><span/><span/><span/><p>Invoice reconciliation / product view</p></div>
            <div className="relative aspect-[1365/742] w-full">
              <motion.img style={reducedMotion ? {} : { opacity: setupOpacity }} src={projectSetup.url} alt="Tax invoice reconciliation setup screen" className="project-screenshot absolute inset-0 size-full object-contain" />
              <motion.img style={reducedMotion ? {} : { opacity: resultOpacity }} src={projectResults.url} alt="Tax invoice reconciliation results dashboard" className="project-screenshot absolute inset-0 size-full object-contain" />
            </div>
          </motion.div>
          <div className="mt-4 flex justify-between text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground"><span>01 — Setup & mapping</span><motion.span style={reducedMotion ? {} : { opacity: labelOpacity }}>02 — Results</motion.span></div>
        </div>
      </div>
    </section>
    <section className="relative px-[6vw] pb-28 pt-10 md:pb-40">
      <div className="mx-auto max-w-[1180px]">
        <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="max-w-4xl font-display text-[clamp(1.6rem,3vw,2.6rem)] leading-[1.15]">{t.projectLead}</motion.p>
        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {caseStudy[language].map(([title, body], i) => <motion.article key={title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }} className="bg-background p-7"><p className="font-mono text-xs text-accent">0{i + 1}</p><h3 className="mt-5 font-display text-2xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p></motion.article>)}
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">{resultStats.map(([value, en, ar], i) => <motion.div key={en} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.07 }} className="border-t border-border pt-4"><p className="font-display text-4xl md:text-5xl">{value}</p><p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">{language === "en" ? en : ar}</p></motion.div>)}</div>
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
  return <p ref={ref} className="max-w-[1200px] font-display text-[clamp(2.4rem,6.8vw,7rem)] font-medium leading-[1.02]">{words.map((word, i) => <Word key={`${word}-${i}`} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} still={!!reducedMotion}>{word}</Word>)}</p>;
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
  const whatsappMessage = isArabic ? "مرحبًا يوسف، أريد مناقشة تنفيذ برنامج أو مشروع جديد." : "Hello Youssef, I would like to discuss a new software product or project.";
  const whatsappUrl = `https://wa.me/201107022373?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [isArabic, language]);

  return <main dir={isArabic ? "rtl" : "ltr"} onPointerMove={(event) => { if (reducedMotion) return; mouseX.set((event.clientX / window.innerWidth - 0.5) * 18); mouseY.set((event.clientY / window.innerHeight - 0.5) * 18); }} className="overflow-clip bg-background text-foreground">
    <header className="fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between px-[5vw] mix-blend-difference">
      <a href="#top" aria-label="Youssef Abdelhady — home" className="flex items-center gap-2 text-inverse"><img src={portrait.url} alt="" className="site-avatar size-8 rounded-full object-cover"/><span className="hidden font-display text-sm font-semibold uppercase tracking-[0.16em] sm:block">Y.A.Q</span></a>
      <nav className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.1em] text-inverse sm:gap-6 md:gap-9">
        <a className="nav-link hidden sm:block" href="#work">{t.nav[0]}</a><a className="nav-link hidden md:block" href="#about">{t.nav[1]}</a><a className="nav-link hidden lg:block" href="#certificates">{t.nav[2]}</a><a className="nav-link hidden sm:block" href="#contact">{t.nav[3]}</a>
        <div className="language-switch" aria-label="Language"><button type="button" onClick={() => setLanguage("en")} className={language === "en" ? "is-active" : ""}>EN</button><button type="button" onClick={() => setLanguage("ar")} className={language === "ar" ? "is-active" : ""}>ع</button></div>
      </nav>
    </header>

    <section ref={hero} id="top" className="relative flex min-h-[100svh] items-end overflow-hidden px-[5vw] pb-[7vh] pt-28">
      <div className="absolute inset-0 hero-grid opacity-35" />
      <motion.div style={reducedMotion ? {} : { x: smoothX, y: portraitY }} className="portrait-shell absolute bottom-0 right-[5vw] h-[88vh] w-[min(52vw,720px)] overflow-hidden portrait-mask">
        <img src={portrait.url} alt="Portrait of Youssef Abdelhady Qubaisy" className="size-full object-cover grayscale-[10%]"/><div className="absolute inset-0 portrait-grade"/>
      </motion.div>
      <motion.div style={reducedMotion ? {} : { y: smoothY, scale: heroScale, opacity: heroOpacity }} className="relative z-10 w-full origin-bottom-left">
        <div className="mb-[6vh] flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground"><span className="status-dot"/>{t.available}</div>
        <h1 className="font-display text-[clamp(4rem,12vw,11.5rem)] font-medium leading-[0.76]"><span className="block">Youssef</span><span className="ml-[8vw] block text-outline">Abdelhady</span></h1>
        <div className="mt-8 flex items-end justify-between gap-6"><p className="max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">{t.hero}</p><a href="#intro" aria-label="Continue" className="scroll-cue hidden size-14 items-center justify-center border border-border md:flex"><ArrowDown size={18}/></a></div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild size="lg" className="h-12 rounded-none px-5"><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle/>{t.request}<ArrowUpRight/></a></Button>
          <Button asChild variant="outline" size="lg" className="h-12 rounded-none border-border bg-background/40 px-5 backdrop-blur-sm"><a href="https://linkedin.com/in/youssef-abdalhady-57111b38" target="_blank" rel="noreferrer"><Linkedin/>LinkedIn</a></Button>
        </div>
      </motion.div>
    </section>

    <section id="intro" className="relative flex min-h-[85vh] items-center px-[6vw] py-32"><RevealStatement text={t.statement}/></section>
    <ProjectShowcase language={language}/>

    <section id="about" className="relative px-[6vw] py-28 md:py-44">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid items-center gap-14 border-t border-border pt-12 md:grid-cols-[0.85fr_1.35fr] md:gap-24">
          <motion.div initial={{ opacity: 0, rotateY: -12, y: 30 }} whileInView={{ opacity: 1, rotateY: 0, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="identity-frame relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden border border-border"><img src={portrait.url} alt="Youssef Abdelhady" className="size-full object-cover object-top"/><div className="identity-overlay"/><div className="absolute bottom-5 left-5 right-5 flex items-center justify-between"><span className="font-mono text-xs uppercase tracking-[0.15em]">Youssef / Developer</span><Sparkles className="text-accent" size={18}/></div></motion.div>
          <div><p className="section-kicker">{t.aboutEyebrow}</p><h2 className="mt-5 max-w-3xl font-display text-[clamp(2.7rem,5.5vw,6rem)] font-medium leading-[0.95]">{t.aboutTitle}</h2><p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">{t.aboutBody}</p><div className="mt-8 grid gap-3 sm:grid-cols-3">{t.reasons.map((reason) => <div key={reason} className="reason-pill"><CheckCircle2 size={16}/><span>{reason}</span></div>)}</div></div>
        </div>

        <div className="mt-28 flex items-end justify-between border-b border-border pb-6"><p className="section-kicker">{t.capabilities}</p><BrainCircuit className="text-accent" size={22}/></div>
        <div className="skills-grid mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ icon: Icon, en, ar }, i) => { const [title, detail] = language === "en" ? en : ar; return <motion.article key={en[0]} initial={{ opacity: 0, y: 45, rotateX: 8 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }} className="skill-card group"><div className="flex items-start justify-between"><span className="skill-icon"><Icon size={21}/></span><span className="font-mono text-[0.65rem] text-muted-foreground">0{i + 1}</span></div><h3 className="mt-12 font-display text-2xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{detail}</p></motion.article>; })}
        </div>
      </div>
    </section>

    <section id="certificates" className="certificate-band px-[6vw] py-28 md:py-40">
      <div className="mx-auto max-w-[1180px]"><p className="section-kicker">{t.certificates}</p><h2 className="mt-5 max-w-3xl font-display text-[clamp(3rem,6vw,6.5rem)] leading-[0.95]">{t.certificateTitle}</h2>
        <div className="certificate-stage mt-16 grid gap-6 md:grid-cols-2">
          <motion.a href="https://kaggle.com/certification/badges/youssefabdalhady/30" target="_blank" rel="noreferrer" whileHover={reducedMotion ? {} : { y: -8, rotateX: 2, rotateY: -2 }} className="certificate-card"><div className="flex items-start justify-between"><span className="certificate-seal"><Award size={26}/></span><ExternalLink size={18}/></div><p className="mt-16 font-mono text-xs uppercase tracking-[0.15em] text-accent">Kaggle</p><h3 className="mt-3 font-display text-3xl md:text-4xl">{t.kaggleTitle}</h3><div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">{t.verify}<ArrowUpRight size={15}/></div></motion.a>
          <motion.a href="https://coursera.org/verify/DTJDXJL13EON" target="_blank" rel="noreferrer" whileHover={reducedMotion ? {} : { y: -8, rotateX: 2, rotateY: 2 }} className="certificate-card"><div className="flex items-start justify-between"><span className="certificate-seal"><GraduationCap size={26}/></span><ExternalLink size={18}/></div><p className="mt-16 font-mono text-xs uppercase tracking-[0.15em] text-accent">Coursera / DTJDXJL13EON</p><h3 className="mt-3 font-display text-3xl md:text-4xl">{t.courseraTitle}</h3><div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">{t.verify}<ArrowUpRight size={15}/></div></motion.a>
        </div>
      </div>
    </section>

    <section className="px-[6vw] py-28 md:py-40"><div className="grid gap-16 md:grid-cols-2 md:gap-24"><div><p className="section-kicker">{t.moreWork}</p><h2 className="mt-5 font-display text-[clamp(3rem,6vw,6.5rem)] leading-[0.95]">{t.ideas}</h2></div><div className="space-y-14 md:pt-32"><article className="border-t border-border pt-6"><p className="font-mono text-xs text-accent">Python × Serial Communication</p><h3 className="mt-4 font-display text-3xl">Arduino Control System</h3><p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">{isArabic ? "برنامج سطح مكتب لإدارة الأجهزة والتحكم بها بمنطق إدخال وإخراج موثوق." : "Desktop software for managing physical hardware with reliable input/output logic and seamless device communication."}</p></article><article className="border-t border-border pt-6"><p className="font-mono text-xs text-accent">Python × Tkinter</p><h3 className="mt-4 font-display text-3xl">Task Management Application</h3><p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">{isArabic ? "تطبيق متكامل لتنظيم المهام اليومية بواجهة عملية وسهلة الاستخدام." : "A full-scale daily planning application shaped by responsive interaction patterns and practical UI/UX principles."}</p></article></div></div></section>

    <section id="contact" className="relative flex min-h-screen flex-col justify-between overflow-hidden px-[6vw] pb-10 pt-32"><div className="absolute inset-0 contact-grid opacity-25"/><div className="relative z-10"><p className="section-kicker">{t.start}</p><h2 className="mt-6 max-w-6xl font-display text-[clamp(3.8rem,10vw,10rem)] font-medium leading-[0.86]">{t.contactTitle}</h2><p className="mt-8 max-w-xl text-muted-foreground">{t.contactBody}</p><Button asChild size="lg" className="mt-8 h-14 rounded-none px-6"><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle/>{t.request}<ArrowUpRight/></a></Button></div>
      <div className="relative z-10 mt-24 flex flex-col gap-10 border-t border-border pt-8 md:flex-row md:items-end md:justify-between"><div><p className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin size={14}/>Egypt</p><a href="tel:+201107022373" className="mt-3 block font-display text-2xl transition-colors hover:text-accent">+20 11 0702 2373</a></div><div className="flex flex-wrap gap-3"><a href="https://linkedin.com/in/youssef-abdalhady-57111b38" target="_blank" rel="noreferrer" className="action-link"><Linkedin size={16}/>LinkedIn</a><a href={resume.url} download className="action-link"><Download size={16}/>Résumé</a><a href="#top" className="action-link"><Languages size={16}/>{isArabic ? "English / العربية" : "العربية / English"}</a></div></div>
    </section>
  </main>;
}