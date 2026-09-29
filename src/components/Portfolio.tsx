import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowDown, ArrowUpRight, Download, Linkedin, MapPin } from "lucide-react";

import portrait from "../assets/youssef-portrait.jpg.asset.json";
import projectSetup from "../assets/invoice-reconciliation-setup.png.asset.json";
import projectResults from "../assets/invoice-reconciliation-results.png.asset.json";
import resume from "../assets/youssef-resume.docx.asset.json";

const capabilities = [
  ["01", "Python", "Advanced core, desktop systems & GUI"],
  ["02", "C++", "OOP, data structures & scalable modules"],
  ["03", "Desktop", "Tkinter & functional GUI development"],
  ["04", "Systems", "Serial communication & hardware bridging"],
  ["05", "Hardware", "Arduino control & physical device interaction"],
  ["06", "Testing", "ISTQB Foundation syllabus & test methodologies"],
  ["07", "Design", "User-centric desktop & mobile UI/UX"],
  ["08", "Data & Tools", "Kaggle, Google Sheets & Microsoft Office"],
] as const;

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

function ProjectShowcase() {
  const section = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const isCompact = useCompactLayout();
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 72, damping: 24, mass: 0.45 });
  const scale = useTransform(smoothProgress, [0, 0.3, 0.78, 1], isCompact ? [0.9, 1, 1.04, 0.94] : [0.76, 1, 1, 0.9]);
  const rotateX = useTransform(smoothProgress, [0, 0.32], isCompact ? [3, 0] : [8, 0]);
  const translateY = useTransform(smoothProgress, [0, 0.3, 0.8, 1], isCompact ? [24, 0, -8, -20] : [70, 0, -18, -55]);
  const setupOpacity = useTransform(smoothProgress, [0.38, 0.53], [1, 0]);
  const resultOpacity = useTransform(smoothProgress, [0.4, 0.55], [0, 1]);
  const copyOpacity = useTransform(smoothProgress, [0, 0.18, 0.88, 1], [0, 1, 1, 0]);

  return (
    <section ref={section} id="work" className="relative h-[280vh] bg-background">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 project-grid opacity-40" />
        <motion.div style={reducedMotion ? {} : { opacity: copyOpacity }} className="absolute left-[6vw] top-[10vh] z-20">
          <p className="section-kicker">Selected project / 2026</p>
          <h2 className="mt-3 max-w-xl font-display text-[clamp(2.4rem,6vw,6rem)] font-medium leading-[0.92]">
            Invoice<br />Reconciliation
          </h2>
        </motion.div>

        <motion.div
          style={reducedMotion ? {} : { scale, rotateX, y: translateY }}
          className="project-stage absolute left-1/2 top-1/2 w-[88vw] max-w-[1420px] -translate-x-1/2 -translate-y-[37%]"
        >
          <div className="project-frame relative aspect-[1.84/1] overflow-hidden border border-border bg-card shadow-project">
            <div className="project-chrome absolute inset-x-0 top-0 z-10 flex h-7 items-center gap-1.5 border-b border-border px-3">
              <span /><span /><span />
              <p>Invoice reconciliation / product view</p>
            </div>
            <motion.img
              style={reducedMotion ? {} : { opacity: setupOpacity }}
              src={projectSetup.url}
              alt="Tax invoice reconciliation setup screen"
              className="project-screenshot absolute inset-0 size-full object-cover pt-7"
            />
            <motion.img
              style={reducedMotion ? {} : { opacity: resultOpacity }}
              src={projectResults.url}
              alt="Tax invoice reconciliation results dashboard"
              className="project-screenshot absolute inset-0 size-full object-cover pt-7"
            />
          </div>
        </motion.div>

        <div className="absolute bottom-[5vh] left-[6vw] right-[6vw] z-20 flex items-end justify-between gap-6">
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
            A bilingual desktop workflow that compares Egyptian Tax Authority records against company ledgers, surfaces discrepancies, and exports clear reports.
          </p>
          <div className="hidden text-right md:block">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Python / Data processing / UX</p>
            <p className="mt-2 text-sm text-foreground">Built for clarity under complexity</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  const hero = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 85, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 85, damping: 22 });
  const { scrollYProgress } = useScroll({ target: hero, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.83]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <main
      onPointerMove={(event) => {
        if (reducedMotion) return;
        mouseX.set((event.clientX / window.innerWidth - 0.5) * 18);
        mouseY.set((event.clientY / window.innerHeight - 0.5) * 18);
      }}
      className="overflow-clip bg-background text-foreground"
    >
      <header className="fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between px-[5vw] mix-blend-difference">
        <a href="#top" className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-inverse">
          Y.A.Q
        </a>
        <nav className="flex items-center gap-6 text-xs uppercase tracking-[0.14em] text-inverse md:gap-10">
          <a className="nav-link" href="#work">Work</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#contact">Contact</a>
          <a className="nav-link hidden sm:block" href="https://linkedin.com/in/youssef-abdalhady-57111b38" target="_blank" rel="noreferrer">LinkedIn</a>
        </nav>
      </header>

      <section ref={hero} id="top" className="relative flex min-h-screen items-end overflow-hidden px-[5vw] pb-[7vh] pt-28">
        <div className="absolute inset-0 hero-grid opacity-35" />
        <motion.div
          style={reducedMotion ? {} : { x: smoothX, y: portraitY }}
          className="absolute bottom-0 right-[7vw] h-[82vh] w-[min(48vw,650px)] overflow-hidden portrait-mask"
        >
          <img src={portrait.url} alt="Portrait of Youssef Abdelhady Qubaisy" className="size-full object-cover object-top grayscale-[18%]" />
          <div className="absolute inset-0 portrait-grade" />
        </motion.div>

        <motion.div style={reducedMotion ? {} : { scale: heroScale, opacity: heroOpacity }} className="relative z-10 w-full origin-bottom-left">
          <div className="mb-[8vh] flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="status-dot" /> Available for opportunities
          </div>
          <h1 className="font-display text-[clamp(4rem,12vw,11.5rem)] font-medium leading-[0.76]">
            <span className="block">Youssef</span>
            <span className="ml-[8vw] block text-outline">Abdelhady</span>
          </h1>
          <div className="mt-8 flex items-end justify-between gap-6">
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base">
              Software developer building thoughtful systems where code, hardware, and human experience meet.
            </p>
            <a href="#work" aria-label="Scroll to selected work" className="scroll-cue hidden size-14 items-center justify-center border border-border md:flex">
              <ArrowDown size={18} />
            </a>
          </div>
          <a href="https://linkedin.com/in/youssef-abdalhady-57111b38" target="_blank" rel="noreferrer" className="hero-social mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-foreground sm:hidden">
            <Linkedin size={15} /> LinkedIn <ArrowUpRight size={13} />
          </a>
        </motion.div>
      </section>

      <section className="relative flex min-h-[85vh] items-center px-[6vw] py-32">
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[1200px] font-display text-[clamp(2.4rem,6.8vw,7rem)] font-medium leading-[1.02]"
        >
          I turn complex logic into <span className="text-muted-foreground">clear, useful software</span> — from desktop tools to connected hardware.
        </motion.p>
      </section>

      <ProjectShowcase />

      <section id="about" className="relative px-[6vw] py-32 md:py-48">
        <div className="grid gap-16 border-t border-border pt-10 md:grid-cols-[0.8fr_1.7fr] md:gap-24">
          <div>
            <p className="section-kicker">Capabilities / 08</p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A Software Development and Programming student at Elsewedy International Applied Technology School, combining applied engineering with a strong instinct for teaching.
            </p>
          </div>
          <div>
            {capabilities.map(([number, title, detail]) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="group grid grid-cols-[3rem_1fr] gap-4 border-b border-border py-7 md:grid-cols-[4rem_0.8fr_1.2fr] md:items-center"
              >
                <span className="font-mono text-xs text-muted-foreground">{number}</span>
                <h3 className="font-display text-3xl md:text-5xl">{title}</h3>
                <p className="col-start-2 text-sm text-muted-foreground md:col-start-auto md:text-right">{detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[6vw] py-28 md:py-40">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <p className="section-kicker">More work</p>
            <h2 className="mt-5 font-display text-[clamp(3rem,6vw,6.5rem)] leading-[0.95]">Ideas made tangible.</h2>
          </div>
          <div className="space-y-14 md:pt-32">
            <article className="border-t border-border pt-6">
              <p className="font-mono text-xs text-accent">Python × Serial Communication</p>
              <h3 className="mt-4 font-display text-3xl">Arduino Control System</h3>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">Desktop software for managing physical hardware with reliable input/output logic and seamless device communication.</p>
            </article>
            <article className="border-t border-border pt-6">
              <p className="font-mono text-xs text-accent">Python × Tkinter</p>
              <h3 className="mt-4 font-display text-3xl">Task Management Application</h3>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">A full-scale daily planning application shaped by responsive interaction patterns and practical UI/UX principles.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="relative flex min-h-screen flex-col justify-between overflow-hidden px-[6vw] pb-10 pt-32">
        <div className="absolute inset-0 contact-grid opacity-25" />
        <div className="relative z-10">
          <p className="section-kicker">Start a conversation</p>
          <h2 className="mt-6 max-w-6xl font-display text-[clamp(4rem,11vw,11rem)] font-medium leading-[0.82]">
            Let’s build<br /><span className="text-outline">what’s next.</span>
          </h2>
        </div>
        <div className="relative z-10 mt-24 flex flex-col gap-10 border-t border-border pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin size={14} /> Egypt</p>
            <a href="tel:+201107022373" className="mt-3 block font-display text-2xl transition-colors hover:text-accent">+20 11 0702 2373</a>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://linkedin.com/in/youssef-abdalhady-57111b38" target="_blank" rel="noreferrer" className="action-link"><Linkedin size={16} /> LinkedIn</a>
            <a href={resume.url} download className="action-link"><Download size={16} /> Résumé</a>
            <a href="https://kaggle.com/certification/badges/youssefabdalhady/30" target="_blank" rel="noreferrer" className="action-link">Kaggle <ArrowUpRight size={16} /></a>
            <a href="https://coursera.org/verify/DTJDXJL13EON" target="_blank" rel="noreferrer" className="action-link">Coursera <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>
    </main>
  );
}