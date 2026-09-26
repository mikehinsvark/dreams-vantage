import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpenText,
  BrainCircuit,
  Building2,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clock3,
  Compass,
  Crown,
  Download,
  Film,
  Gift,
  Landmark,
  Mail,
  Menu,
  Play,
  ShieldCheck,
  Sparkles,
  Trophy,
  UsersRound,
  WalletCards,
  X,
  Zap,
} from "lucide-react";

const assets = {
  hero: "/assets/hero-opportunity.webp",
  logoGold: "/assets/dreams-mark.webp",
  logoBlue: "/assets/dreams-logo-blue.webp",
  film1: "/assets/film-renewals.webp",
  film2: "/assets/film-benefits.webp",
  film3: "/assets/film-legacy.webp",
  partnership: "/assets/partnership.webp",
  advantagesVisual: "/assets/vantage-advantages.webp",
  allianceLogos: "/assets/vantage-dreams-alliance.webp",
  strength: "/assets/strength-in-selection.pdf",
  advantage: "/assets/vantage-advantage.pdf",
};

const videoHub = "https://renewalsforlife.com/dreams/";

const pageSections = [
  { id: "top", label: "Invitation" },
  { id: "films", label: "Three films" },
  { id: "visual-story", label: "Visual story" },
  { id: "advantage", label: "The advantage" },
  { id: "next-step", label: "Next step" },
  { id: "faq", label: "Questions" },
];

const heroSlides = [
  {
    image: assets.allianceLogos,
    alt: "Vantage Financial Alliance and Dreams Insurance Solutions partnership",
    eyebrow: "Dreams × Vantage",
    title: "A powerful alliance",
  },
  {
    image: assets.partnership,
    alt: "Vantage Financial Alliance with Dreams opportunity overview",
    eyebrow: "The opportunity",
    title: "Built for a brighter tomorrow",
  },
  {
    image: assets.advantagesVisual,
    alt: "Fifteen Vantage advantages for licensed agents",
    eyebrow: "The advantages",
    title: "Fifteen reasons to look closer",
  },
  {
    image: assets.hero,
    alt: "Dreams strategic solutions and Vantage Financial Alliance",
    eyebrow: "The ecosystem",
    title: "More than insurance",
  },
];

const galleryImages = [
  {
    image: assets.partnership,
    alt: "Vantage Financial Alliance with Dreams compensation and waived-fee overview",
    eyebrow: "01 · The opportunity",
    title: "A powerful partnership for a brighter tomorrow",
  },
  {
    image: assets.advantagesVisual,
    alt: "Fifteen published Vantage advantages for agents",
    eyebrow: "02 · The platform",
    title: "Fifteen Vantage advantages at a glance",
  },
  {
    image: assets.hero,
    alt: "Dreams strategic insurance solutions and featured Vantage partnership",
    eyebrow: "03 · The ecosystem",
    title: "The complete Dreams strategic solutions platform",
  },
];

const films = [
  {
    number: "01",
    title: "The Income You Keep",
    label: "Income architecture",
    duration: "2:06",
    image: assets.film1,
    href: `${videoHub}#film-1`,
    accent: "teal",
    copy: "See how the structure behind a sale can change the long-term value of the same work.",
  },
  {
    number: "02",
    title: "A Bigger Picture",
    label: "Perspective intelligence",
    duration: "1:34",
    image: assets.film2,
    href: `${videoHub}#film-2`,
    accent: "gold",
    copy: "Lift the perspective, recognize the system, and see opportunity that is easy to miss from the ground.",
  },
  {
    number: "03",
    title: "The Dreams Opportunity",
    label: "The complete platform",
    duration: "23:23",
    image: assets.film3,
    href: `${videoHub}#film-3`,
    accent: "violet",
    copy: "Connect recurring-income potential, relationship leverage, practical AI, and the wider Dreams platform.",
  },
];

const highlights = [
  {
    value: "100%",
    eyebrow: "Advance",
    title: "Eligible Ethos business",
    copy: "Advance availability is subject to carrier rules, product terms, eligibility, and chargeback provisions.",
    icon: Zap,
  },
  {
    value: "143%",
    eyebrow: "Total field payout",
    title: "Across the compensation plan",
    copy: "A company-level total field payout—not an individual agent contract percentage.",
    icon: UsersRound,
  },
  {
    value: "Up to 115%",
    eyebrow: "Personal contract level",
    title: "For qualified leaders",
    copy: "Promotion level, production requirements, licensing, contracting, and good standing apply.",
    icon: Crown,
  },
  {
    value: "3× weekly",
    eyebrow: "Commission cycles",
    title: "Monday · Wednesday · Friday",
    copy: "Timing is subject to carrier receipt, processing, holidays, and current Vantage procedures.",
    icon: CalendarDays,
  },
];

const advantages = [
  {
    icon: Trophy,
    title: "Recognition that feels earned",
    copy: "Conventions, contests, trips, awards, and a culture designed to celebrate committed producers and leaders.",
  },
  {
    icon: WalletCards,
    title: "Vesting & legacy options",
    copy: "Qualified associates can pursue commission vesting and legacy-program options under current plan terms.",
  },
  {
    icon: Landmark,
    title: "Conditional equity opportunity",
    copy: "Qualified leaders may become eligible for the Equity Sharing Pool tied to a potential future cash-out event.",
  },
  {
    icon: Building2,
    title: "A true home office",
    copy: "Vantage World Headquarters in Alpharetta, Georgia supports operations, meetings, training, and field events.",
  },
  {
    icon: BrainCircuit,
    title: "Modern tools and field support",
    copy: "AI tools, reporting, team management, social media resources, and a system-focused operating environment.",
  },
  {
    icon: ShieldCheck,
    title: "An agent-friendly framework",
    copy: "No quotas, no exchange program, no recruit requirement for advancement, and no requalification for earned promotions under current published terms.",
  },
];

const steps = [
  {
    number: "01",
    title: "Watch the three films",
    copy: "Start with the two short films, then watch the complete Dreams opportunity presentation.",
    icon: Film,
  },
  {
    number: "02",
    title: "Look for your personal link",
    copy: "Your individual Vantage invitation will arrive separately. It is created specifically for your enrollment.",
    icon: Mail,
  },
  {
    number: "03",
    title: "Review and activate",
    copy: "Follow the personalized link to review the terms and enroll with the standard $100 sign-up fee waived.",
    icon: BadgeCheck,
  },
];

const faqs = [
  {
    question: "Is the Vantage sign-up fee really waived?",
    answer:
      "Yes. Eligible licensed Dreams agents who enroll through the personal invitation described in this announcement will have the standard $100 Vantage sign-up fee waived. Licensing, carrier-appointment, background-check, or other third-party requirements may still apply.",
  },
  {
    question: "Where is my enrollment link?",
    answer:
      "Your personal invitation link is being prepared and will arrive separately. Please use that individual link so your waived-fee eligibility and hierarchy placement can be handled correctly.",
  },
  {
    question: "Can I share my personal invitation link?",
    answer:
      "Please do not share it. The enrollment link is intended for the named Dreams agent. Questions about another agent's eligibility should be sent to the Dreams team.",
  },
  {
    question: "Are the commission percentages guaranteed?",
    answer:
      "No. The 143% figure is Vantage's published total field payout, not an individual contract. The personal contract schedule reaches up to 115% for qualified promotion levels. Actual compensation depends on licensing, contracting, product, carrier, production, placement, good standing, and current plan terms. No income is guaranteed.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <Sparkles size={14} aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "section-heading center" : "section-heading"}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

export default function Home() {
  const [activeFilm, setActiveFilm] = useState(0);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);
  const [activePageSection, setActivePageSection] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const film = films[activeFilm];
  const heroSlide = heroSlides[activeHeroSlide];

  useEffect(() => {
    if (carouselPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [carouselPaused]);

  useEffect(() => {
    const sections = pageSections
      .map((section) => document.getElementById(section.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = pageSections.findIndex((section) => section.id === visible.target.id);
        if (index >= 0) setActivePageSection(index);
      },
      { rootMargin: "-22% 0px -62% 0px", threshold: [0, 0.08, 0.2] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const showPreviousHeroSlide = () => {
    setActiveHeroSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  };

  const showNextHeroSlide = () => {
    setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
  };

  const goToPageSection = (index: number) => {
    const safeIndex = Math.max(0, Math.min(index, pageSections.length - 1));
    document.getElementById(pageSections[safeIndex].id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActivePageSection(safeIndex);
    setMobileNavOpen(false);
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="announcement-bar">
        <span>Dreams Agent Exclusive</span>
        <strong>Standard $100 Vantage enrollment fee waived</strong>
        <span>Personal invitation link arriving separately</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Dreams Vantage invitation home">
          <img src={assets.logoGold} alt="Dreams Insurance Solutions" />
          <span className="brand-divider" aria-hidden="true" />
          <span className="brand-vantage"><b>V</b> Vantage</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#films">Watch first</a>
          <a href="#visual-story">Visual story</a>
          <a href="#advantage">The advantage</a>
          <a href="#next-step">Next step</a>
        </nav>
        <a className="nav-cta" href={videoHub} target="_blank" rel="noreferrer">
          Watch 3 films <Play size={15} fill="currentColor" />
        </a>
      </header>

      <nav className="section-rail" aria-label="Page section navigation">
        <button
          type="button"
          onClick={() => goToPageSection(activePageSection - 1)}
          disabled={activePageSection === 0}
          aria-label="Go to previous section"
        >
          <ChevronUp size={20} />
        </button>
        <div className="section-rail-dots">
          {pageSections.map((section, index) => (
            <button
              key={section.id}
              type="button"
              className={activePageSection === index ? "active" : ""}
              aria-current={activePageSection === index ? "location" : undefined}
              aria-label={`Go to ${section.label}`}
              onClick={() => goToPageSection(index)}
            >
              <span>{section.label}</span>
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => goToPageSection(activePageSection + 1)}
          disabled={activePageSection === pageSections.length - 1}
          aria-label="Go to next section"
        >
          <ChevronDown size={20} />
        </button>
      </nav>

      <div className="mobile-section-nav">
        <AnimatePresence>
          {mobileNavOpen && (
            <motion.nav
              className="mobile-section-menu"
              aria-label="Mobile page section navigation"
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
            >
              <div><Compass size={17} /><strong>Jump to a section</strong></div>
              {pageSections.map((section, index) => (
                <button
                  key={section.id}
                  type="button"
                  className={activePageSection === index ? "active" : ""}
                  aria-current={activePageSection === index ? "location" : undefined}
                  onClick={() => goToPageSection(index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>{section.label}
                </button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
        <button
          className="mobile-section-trigger"
          type="button"
          aria-expanded={mobileNavOpen}
          aria-label={mobileNavOpen ? "Close section navigation" : "Open section navigation"}
          onClick={() => setMobileNavOpen((open) => !open)}
        >
          {mobileNavOpen ? <X size={18} /> : <Menu size={18} />}
          <span>{mobileNavOpen ? "Close" : "Navigate"}</span>
        </button>
      </div>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />
          <div className="container hero-grid">
            <motion.div
              className="hero-copy"
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.08 }}
            >
              <motion.div variants={fadeUp} transition={{ duration: 0.45 }}>
                <Eyebrow>For invited licensed Dreams agents</Eyebrow>
              </motion.div>
              <motion.h1 variants={fadeUp} transition={{ duration: 0.5 }}>
                Your next chapter comes with an <em>invitation.</em>
              </motion.h1>
              <motion.p className="hero-lead" variants={fadeUp} transition={{ duration: 0.5 }}>
                Dreams Insurance Solutions is opening an exclusive path to Vantage Financial Alliance—with a personal enrollment link and the standard <strong>$100 sign-up fee waived.</strong>
              </motion.p>
              <motion.div className="hero-actions" variants={fadeUp} transition={{ duration: 0.5 }}>
                <a className="button button-primary" href={videoHub} target="_blank" rel="noreferrer">
                  <Play size={18} fill="currentColor" />
                  Watch the 3 intro films
                </a>
                <a className="button button-secondary" href="#opportunity-image">
                  Explore the advantage <ArrowRight size={18} />
                </a>
              </motion.div>
              <motion.div className="hero-downloads" variants={fadeUp} transition={{ duration: 0.5 }}>
                <div className="hero-downloads-header">
                  <p>
                    <Download size={15} />
                    <span className="details-label-full">Details</span>
                    <span className="details-label-short">Details</span>
                  </p>
                  <div className="hero-agent-paths" aria-label="Dreams agent onboarding options">
                    <a
                      className="hero-path-link path-appointed"
                      href="https://form.jotform.com/252424912692156"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Get appointed with Dreams Insurance Solutions"
                    >
                      <BadgeCheck size={15} />
                      <span className="path-label-full">Get appointed with Dreams Ins Solutions</span>
                      <span className="path-label-short">Get appointed</span>
                      <ArrowUpRight size={14} />
                    </a>
                    <a
                      className="hero-path-link path-licensed"
                      href="https://training.dreamsresources.net/products/a5312df9-9aa4-4e35-b425-2bdf52ed717a/categories/1f8b8eaf-28e1-40c9-926c-1929a90b573a/posts/c0a4b82b-4967-4ca7-b9f0-87b32ee27833?source=courses"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Get licensed with Dreams Insurance Solutions"
                    >
                      <Sparkles size={15} />
                      <span>Get licensed</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
                <div className="hero-download-buttons">
                  <a href={assets.advantage} target="_blank" rel="noreferrer" download>
                    <BookOpenText size={18} />
                    <span><small>Download brochure</small><b>Vantage Advantage</b></span>
                    <Download size={16} />
                  </a>
                  <a href={assets.strength} target="_blank" rel="noreferrer" download>
                    <ShieldCheck size={18} />
                    <span><small>Download portfolio</small><b>Strength in Selection</b></span>
                    <Download size={16} />
                  </a>
                </div>
              </motion.div>
              <motion.div className="hero-proof" variants={fadeUp} transition={{ duration: 0.5 }}>
                <span><Check size={15} /> Personalized enrollment</span>
                <span><Check size={15} /> Waived $100 fee</span>
                <span><Check size={15} /> Dreams hierarchy placement</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
            >
              <div
                className="hero-carousel"
                role="region"
                aria-roledescription="carousel"
                aria-label="Dreams and Vantage campaign highlights"
                onMouseEnter={() => setCarouselPaused(true)}
                onMouseLeave={() => setCarouselPaused(false)}
                onFocus={() => setCarouselPaused(true)}
                onBlur={() => setCarouselPaused(false)}
              >
                <div className="hero-image-frame">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.img
                      key={heroSlide.image}
                      src={heroSlide.image}
                      alt={heroSlide.alt}
                      initial={{ opacity: 0, scale: 1.018 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.99 }}
                      transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}
                    />
                  </AnimatePresence>
                  <div className="hero-image-sheen" aria-hidden="true" />
                  <div className="hero-slide-label">
                    <small>{heroSlide.eyebrow}</small>
                    <strong>{heroSlide.title}</strong>
                  </div>
                </div>
                <div className="hero-carousel-controls">
                  <button type="button" onClick={showPreviousHeroSlide} aria-label="Show previous campaign image">
                    <ChevronLeft size={18} />
                  </button>
                  <div className="hero-carousel-dots" role="tablist" aria-label="Choose campaign image">
                    {heroSlides.map((slide, index) => (
                      <button
                        key={slide.image}
                        type="button"
                        role="tab"
                        aria-selected={activeHeroSlide === index}
                        aria-label={`Show slide ${index + 1}: ${slide.title}`}
                        className={activeHeroSlide === index ? "active" : ""}
                        onClick={() => setActiveHeroSlide(index)}
                      />
                    ))}
                  </div>
                  <button type="button" onClick={showNextHeroSlide} aria-label="Show next campaign image">
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
              <div className="waiver-card">
                <div>
                  <span>Standard enrollment fee</span>
                  <s>$100</s>
                </div>
                <strong>$0</strong>
                <small>for eligible invited Dreams agents</small>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="film-section" id="films">
          <div className="container">
            <SectionHeading
              eyebrow="Start here"
              title={<>Three films. <em>One bigger picture.</em></>}
              copy="Before your personal invitation arrives, take a few minutes to see the income architecture, the perspective, and the complete Dreams platform."
            />

            <div className="film-stage">
              <div className="film-copy-panel">
                <div className={`film-number ${film.accent}`}>Film {film.number}</div>
                <div className="film-duration"><Clock3 size={15} /> {film.duration} · {film.label}</div>
                <h3>{film.title}</h3>
                <p>{film.copy}</p>
                <a className="button button-primary" href={film.href} target="_blank" rel="noreferrer">
                  Watch film {film.number} <ArrowUpRight size={18} />
                </a>
                <p className="external-note">Opens the official Renewals for Life × Dreams film experience.</p>
              </div>

              <a className={`film-screen ${film.accent}`} href={film.href} target="_blank" rel="noreferrer" aria-label={`Watch ${film.title}`}>
                <img src={film.image} alt={`${film.title} video preview`} />
                <span className="film-screen-overlay" aria-hidden="true" />
                <span className="play-orb"><Play size={28} fill="currentColor" /></span>
                <span className="screen-caption"><b>Featured film</b><span>Click to watch</span></span>
              </a>
            </div>

            <div className="film-tabs" role="tablist" aria-label="Intro films">
              {films.map((item, index) => (
                <button
                  key={item.number}
                  type="button"
                  role="tab"
                  aria-selected={activeFilm === index}
                  className={activeFilm === index ? `active ${item.accent}` : ""}
                  onClick={() => setActiveFilm(index)}
                >
                  <span>{item.number}</span>
                  <b>{item.title}</b>
                  <small>{item.duration}</small>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="visual-gallery-section" id="visual-story">
          <div className="container">
            <SectionHeading
              eyebrow="The complete visual story"
              title={<>See the opportunity <em>in full.</em></>}
              copy="Explore every Dreams × Vantage campaign visual at full width—from the partnership and compensation highlights to the complete agent advantage and strategic solutions ecosystem."
              align="center"
            />
            <div className="visual-gallery-stack">
              {galleryImages.map((item, index) => (
                <motion.figure
                  key={item.image}
                  id={index === 0 ? "opportunity-image" : undefined}
                  className="visual-gallery-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.42, delay: index * 0.04 }}
                >
                  <figcaption>
                    <span><small>{item.eyebrow}</small><strong>{item.title}</strong></span>
                    <a href={item.image} target="_blank" rel="noreferrer">
                      Open full size <ArrowUpRight size={16} />
                    </a>
                  </figcaption>
                  <a className="visual-gallery-image" href={item.image} target="_blank" rel="noreferrer" aria-label={`Open ${item.title} full size`}>
                    <img src={item.image} alt={item.alt} loading={index === 0 ? "eager" : "lazy"} />
                  </a>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        <section className="snapshot-section" id="advantage">
          <div className="container">
            <SectionHeading
              eyebrow="Opportunity snapshot"
              title={<>A compensation story built for <em>momentum.</em></>}
              copy="Here are four headline features to review alongside the official Vantage compensation plan and your personal contracting details."
              align="center"
            />
            <div className="highlight-grid">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    className="highlight-card"
                    key={item.value}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.38, delay: index * 0.06 }}
                  >
                    <Icon className="card-icon" size={21} />
                    <span>{item.eyebrow}</span>
                    <strong>{item.value}</strong>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </motion.article>
                );
              })}
            </div>
            <p className="snapshot-note">
              <ShieldCheck size={16} /> Compensation and advance features are subject to current carrier, product, contracting, promotion, production, processing, and chargeback terms. No income is guaranteed.
            </p>
          </div>
        </section>

        <section className="advantage-section">
          <div className="container advantage-layout">
            <div className="advantage-intro">
              <SectionHeading
                eyebrow="More than compensation"
                title={<>An ecosystem designed to help leaders <em>build.</em></>}
                copy="Vantage combines experienced leadership, field support, a broad carrier portfolio, modern systems, and long-term business-building opportunities."
              />
              <div className="resource-links">
                <a href={assets.advantage} target="_blank" rel="noreferrer">
                  <BookOpenText size={19} />
                  <span><b>Vantage Advantage brochure</b><small>Leadership, compensation, legacy, equity, tools & more</small></span>
                  <Download size={17} />
                </a>
                <a href={assets.strength} target="_blank" rel="noreferrer">
                  <ShieldCheck size={19} />
                  <span><b>Strength in Selection</b><small>Review the strategic carrier portfolio</small></span>
                  <Download size={17} />
                </a>
              </div>
            </div>

            <div className="advantage-grid">
              {advantages.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title}>
                    <span className="advantage-icon"><Icon size={20} /></span>
                    <div><h3>{item.title}</h3><p>{item.copy}</p></div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="brand-panel-section">
          <div className="container brand-panel">
            <div className="brand-panel-copy">
              <Eyebrow>Dreams × Vantage</Eyebrow>
              <h2>A stronger platform. A wider field of possibility.</h2>
              <p>
                Bring your existing experience into a system that combines carrier access, compensation architecture, leadership development, modern tools, recognition, and a dedicated home office.
              </p>
              <a className="text-link" href="#next-step">See what happens next <ArrowRight size={17} /></a>
            </div>
            <img src={assets.allianceLogos} alt="Vantage Financial Alliance and Dreams Insurance Solutions" loading="lazy" />
          </div>
        </section>

        <section className="steps-section" id="next-step">
          <div className="container">
            <SectionHeading
              eyebrow="Your next step"
              title={<>The invitation is personal. <em>The process is simple.</em></>}
              copy="Watch the films now, then keep an eye on your inbox for the link created specifically for you."
              align="center"
            />
            <div className="steps-grid">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <article key={step.number}>
                    <div className="step-top"><span>{step.number}</span><Icon size={22} /></div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </article>
                );
              })}
            </div>

            <div className="invitation-callout">
              <div>
                <Gift size={28} />
                <span><small>Dreams agent exclusive</small><strong>Your standard $100 sign-up fee is waived.</strong></span>
              </div>
              <a className="button button-primary" href={videoHub} target="_blank" rel="noreferrer">
                Watch before your link arrives <Play size={18} fill="currentColor" />
              </a>
            </div>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="container faq-layout">
            <div>
              <SectionHeading
                eyebrow="Quick clarity"
                title={<>Questions, <em>answered.</em></>}
                copy="The official invitation and contracting materials control. These answers are here to help you prepare."
              />
              <a className="contact-link" href="mailto:marketing@dreamsresources.com?subject=Dreams%20Vantage%20Invitation%20Question">
                <Mail size={18} /> Questions? Email the Dreams team
              </a>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary><span>{faq.question}</span><span className="faq-plus">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="final-glow" aria-hidden="true" />
          <div className="container final-cta-inner">
            <Eyebrow>Your invitation is on the way</Eyebrow>
            <h2>See the bigger picture <em>before the link arrives.</em></h2>
            <p>Three films. One complete view of the opportunity Dreams is building.</p>
            <a className="button button-primary" href={videoHub} target="_blank" rel="noreferrer">
              Enter the film experience <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="campaign-footer" id="footer">
        <div className="container footer-masthead">
          <a className="footer-brand" href="#top" aria-label="Dreams Vantage invitation home">
            <img src={assets.logoGold} alt="Dreams Insurance Solutions" />
            <span>
              <strong>Dreams Insurance Solutions</strong>
              <small>Vantage agent invitation</small>
            </span>
          </a>
          <blockquote>“A brighter tomorrow—<em>built together.</em>”</blockquote>
        </div>

        <div className="container footer-directory">
          <div className="footer-intro">
            <p>An exclusive path for invited licensed Dreams agents—designed to bring opportunity, support, and long-term business value together.</p>
            <a className="footer-contact" href="mailto:marketing@dreamsresources.com?subject=Dreams%20Vantage%20Invitation%20Question">
              <Mail size={16} /> Contact the Dreams team <ArrowUpRight size={15} />
            </a>
          </div>

          <nav className="footer-column" aria-label="Explore this page">
            <h3>Explore</h3>
            <a href="#top">Invitation <span>↑</span></a>
            <a href="#films">Three intro films <span>↗</span></a>
            <a href="#opportunity-image">Opportunity visual <span>↘</span></a>
            <a href="#advantage">The advantage <span>↘</span></a>
          </nav>

          <nav className="footer-column" aria-label="Campaign resources">
            <h3>Resources</h3>
            <a href={assets.advantage} target="_blank" rel="noreferrer">Vantage Advantage <span>↗</span></a>
            <a href={assets.strength} target="_blank" rel="noreferrer">Strength in Selection <span>↗</span></a>
            <a href="#next-step">Enrollment next steps <span>↘</span></a>
            <a href="#faq">Invitation questions <span>↘</span></a>
          </nav>

          <nav className="footer-column" aria-label="DBR ecosystem">
            <h3>DBR Ecosystem</h3>
            <a href="https://renewalsforlife.com/dreams/" target="_blank" rel="noreferrer">Renewalsforlife.com <span>↗</span></a>
            <a href="https://dreamsfaststart.com/" target="_blank" rel="noreferrer">DreamsFastStart.com <span>↗</span></a>
            <a href="https://aileveragelab.pro/" target="_blank" rel="noreferrer">AILeverageLab.pro <span>↗</span></a>
          </nav>

          <div className="footer-invitation">
            <h3>Dreams agent exclusive</h3>
            <div><span>Standard sign-up fee</span><s>$100</s><strong>$0</strong></div>
            <p>Your personal invitation link arrives separately. Use that unique link to preserve waived-fee eligibility and hierarchy placement.</p>
          </div>
        </div>

        <div className="container footer-actions">
          <a href={videoHub} target="_blank" rel="noreferrer">
            <span className="footer-action-number">01</span>
            <span><small>Watch first</small><strong>Enter the three-film experience</strong></span>
            <Play size={18} fill="currentColor" />
          </a>
          <a href={assets.advantage} target="_blank" rel="noreferrer">
            <span className="footer-action-number">02</span>
            <span><small>Review the opportunity</small><strong>Open the Vantage Advantage</strong></span>
            <BookOpenText size={18} />
          </a>
          <a href="#next-step">
            <span className="footer-action-number">03</span>
            <span><small>Be ready</small><strong>Prepare for your personal link</strong></span>
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="container footer-signoff">
          <span>Dreams × Vantage</span>
          <strong>One alliance. A brighter tomorrow.</strong>
        </div>
        <div className="container legal">
          <p>
            For licensed insurance professionals. Educational and recruiting communication only; not a product solicitation. The standard $100 sign-up-fee waiver applies only to eligible Dreams agents enrolling through their personal invitation. Compensation, advances, payment timing, bonuses, contests, conventions, vesting, legacy, re-insurance, and equity opportunities are subject to current agreements, carrier rules, qualification requirements, good standing, availability, and change. The 143% figure is total field payout and is not an individual agent contract level. Personal contract levels reach up to 115% for qualified promotion levels. Advances are subject to carrier and chargeback terms. Individual results vary; no income is guaranteed.
          </p>
          <span>© 2026 Dreams Insurance Solutions</span>
        </div>
      </footer>
    </div>
  );
}
