import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Shield, Clock, CheckCircle2, Cog, Layers, Car, Droplets, Zap, Tractor, Factory, Settings2, ThumbsUp, Wrench } from "lucide-react";
import SplitText from "../components/ui/SplitText";
import CountUp from "../components/ui/CountUp";
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
} from "../components/ui/card";
import ShapeGrid from "../components/ui/ShapeGrid";
import factoryHeroImage from "../components/images/6.jpg";
import factoryAboutImage from "../components/images/3.jpg";

/* ─── Stats data ───────────────────────────────────────────────── */
const stats = [
  { to: 35,  suffix: "+", label: "Years Experience",    sub: "Since 1989"          },
  { to: 916, suffix: "+", label: "Companies Served",    sub: "Across India"         },
  { to: 64,  suffix: "+", label: "Alloys Capability",   sub: "Aluminium grades"     },
  { to: 49,  suffix: "+", label: "Skilled Workforce",   sub: "Expert engineers"     },
];

/* ─── Framer variants ──────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Home() {
  const heroRef = useRef(null);
  const inViewOnce = { once: true, amount: 0.2 };
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const dotFieldY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  return (
    <>
      {/* ════════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden
                          bg-[#0d1117]">

        {/* ── Background layers ── */}

        {/* ShapeGrid background (React Bits) */}
        <motion.div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0, y: dotFieldY, opacity: 0.7 }}>
          <ShapeGrid
            speed={0.12}
            squareSize={44}
            direction="diagonal"
            borderColor="rgba(148, 163, 184, 0.18)"
            hoverFillColor="rgba(71, 85, 105, 0.35)"
            shape="square"
            hoverTrailAmount={0}
          />
        </motion.div>

        {/* Bottom fade to stats strip */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-surface-3/65
                        pointer-events-none" style={{ zIndex: 2 }} />

        {/* ── Hero inner ── */}
        <div className="container-max section-padding w-full relative z-10
                        grid lg:grid-cols-2 gap-12 items-center py-24 lg:py-28">

          {/* ── LEFT: Content ── */}
          <div className="flex flex-col items-start">

            {/* ISO badge */}
            <motion.div {...fadeUp(0)} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                               bg-brand-500/10 border border-brand-500/25 text-brand-300
                               text-xs font-semibold tracking-widest uppercase">
                <Shield size={12} />
                ISO Certified · Est. 1989 · Belagavi, India
              </span>
            </motion.div>

            {/* Headline — SplitText per-word animation */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.75rem]
                           font-display font-bold text-white leading-[1.14] pb-1 mb-6">
              <SplitText
                text="Precision Aluminium Casting"
                delay={0.1}
                stagger={0.04}
                duration={0.55}
                y={28}
              />
              <motion.span
                className="block mt-1 pb-1 leading-[1.08] text-gradient"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {"& Engineering Solutions"}
              </motion.span>
            </h1>

            {/* Subtitle */}
            <motion.p
              {...fadeUp(0.5)}
              className="text-base sm:text-lg text-steel-300 leading-relaxed max-w-xl mb-8"
            >
              35+ years of ISO-certified manufacturing delivering export-ready aluminium
              components with complementary rubber support for integrated industrial applications.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              {...fadeUp(0.65)}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                id="hero-get-quote"
                className="btn-primary px-7 py-3.5 text-[15px]"
              >
                Get Quote
                <ArrowRight size={17} />
              </Link>
              <Link
                to="/services/aluminium-casting"
                id="hero-view-services"
                className="btn-outline px-7 py-3.5 text-[15px]"
              >
                View Services
                <ChevronRight size={17} />
              </Link>
            </motion.div>

            {/* Trust line */}
            <motion.div
              {...fadeUp(0.8)}
              className="mt-8 flex items-center gap-2 text-xs text-steel-500"
            >
              <Clock size={13} />
              <span>ISO quality systems • 916+ companies served across industrial sectors</span>
            </motion.div>
          </div>

          {/* ── RIGHT: Image placeholder ── */}
          <motion.div
            {...fadeLeft(0.3)}
            className="relative w-full aspect-[4/3] lg:aspect-[3/2] xl:aspect-[4/3]
                       rounded-2xl overflow-hidden"
          >
            <img
              src={factoryHeroImage}
              alt="Foundry setup and casting process at Prasad Engineering"
              className="absolute inset-0 h-full w-full object-cover border border-white/8 rounded-2xl"
              width={1280}
              height={960}
              loading="lazy"
            />

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-surface/10 rounded-2xl pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          STATS STRIP
      ════════════════════════════════════════════════ */}
      <section
        id="hero-stats"
        className="bg-surface-3 border-y border-white/[0.07] relative z-10"
      >
        {/* Top accent line */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r
                        from-transparent via-brand-500/60 to-transparent" />

        <div className="container-max section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inViewOnce}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                className={
                  [
                    "flex flex-col items-center text-center py-10 px-6 group",
                    "hover:bg-brand-500/5 transition-colors duration-300",
                    /* right border on all except last in each row */
                    i < 3 ? "border-r border-white/[0.07]" : "",
                    /* bottom border on first row of 2-col mobile grid */
                    i < 2 ? "border-b border-white/[0.07] lg:border-b-0" : "",
                  ].join(" ")
                }
              >
                {/* Number */}
                <p className="text-4xl sm:text-5xl font-display font-bold text-white
                               group-hover:text-brand-300 transition-colors duration-300
                               tabular-nums tracking-tight">
                  <CountUp to={s.to} suffix={s.suffix} duration={2.4} />
                </p>
                {/* Divider pip */}
                <div className="w-8 h-[2px] bg-gradient-to-r from-brand-500/0 via-brand-500/60
                                to-brand-500/0 rounded-full mt-3 mb-2
                                group-hover:via-brand-400/80 transition-all duration-300" />
                {/* Label */}
                <p className="text-sm font-semibold text-steel-200">{s.label}</p>
                {/* Sub-label */}
                <p className="mt-1 text-[11px] tracking-widest text-steel-500 uppercase">
                  {s.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-gradient-to-r
                        from-transparent via-brand-500/40 to-transparent" />
      </section>

      {/* ════════════════════════════════════════════════
          ABOUT PREVIEW
      ════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-surface section-transition">

        {/* Subtle section divider orb */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full
                        bg-brand-700/10 blur-3xl pointer-events-none -translate-y-1/2
                        translate-x-1/2" />

        <div className="section-shell">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* ── LEFT: Image placeholder ── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={inViewOnce}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1"
            >
              <img
                src={factoryAboutImage}
                alt="Aluminium casting mould setup at the Prasad Engineering facility"
                className="absolute inset-0 h-full w-full object-cover rounded-2xl border border-white/8"
                width={1280}
                height={960}
                loading="lazy"
              />

              {/* Floating credibility badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inViewOnce}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-5 left-5 glass rounded-xl px-4 py-3
                           flex items-center gap-3 shadow-xl shadow-black/30"
              >
                <div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0">
                  <Shield size={15} className="text-brand-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">ISO Certified</p>
                  <p className="text-[10px] text-steel-400">Quality Manufacturing</p>
                </div>
              </motion.div>
            </motion.div>

            {/* ── RIGHT: Content ── */}
            <div className="order-1 lg:order-2 flex flex-col gap-6">

              {/* Section tag */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inViewOnce}
                transition={{ duration: 0.4 }}
                className="section-eyebrow"
              >
                <span className="w-6 h-[1.5px] bg-brand-400 rounded-full" />
                About Prasad Engineering
              </motion.span>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inViewOnce}
                transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="section-heading"
              >
                35+ Years of Precision{" "}
                <span className="text-gradient">Manufacturing</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inViewOnce}
                transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                className="section-lead mt-0 text-[15px]"
              >
                Prasad Engineering is an ISO-certified aluminium casting manufacturer in Belagavi
                with 35+ years of experience serving automotive and engineering industries.
                Alongside advanced casting technologies and in-house machining, we provide
                complementary rubber component support to reduce vendor dependency and improve
                supply-chain efficiency.
              </motion.p>

              {/* Highlight bullets */}
              <motion.ul
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inViewOnce}
                transition={{ duration: 0.55, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-2.5"
              >
                {[
                  "ISO Certified Manufacturing",
                  "916+ Companies Served",
                  "64+ Aluminium Alloys",
                  "In-house Machining (VMC & Turning)",
                  "Complementary Rubber Capability",
                ].map((item) => (
                  <li key={item}
                      className="flex items-center gap-3 text-[14px] text-steel-200 leading-relaxed">
                    <CheckCircle2
                      size={16}
                      className="text-brand-400 shrink-0"
                      strokeWidth={2.5}
                    />
                    {item}
                  </li>
                ))}
              </motion.ul>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inViewOnce}
                transition={{ duration: 0.45, delay: 0.32 }}
              >
                <Link
                  to="/about/company"
                  id="about-preview-learn-more"
                  className="section-link text-brand-400 hover:text-brand-300 group"
                >
                  Learn More About Us
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SERVICES PREVIEW
      ════════════════════════════════════════════════ */}
      <section className="relative bg-surface-2 overflow-hidden section-transition">

        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Left orb */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-brand-700/10 rounded-full
                        blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/3" />

        <div className="section-shell">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inViewOnce}
            transition={{ duration: 0.5 }}
            className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
          >
            <div>
              <span className="section-eyebrow mb-3">
                <span className="w-6 h-[1.5px] bg-brand-400 rounded-full" />
                What We Offer
              </span>
              <h2 className="section-heading">
                Our Core Services
              </h2>
            </div>
            <Link
              to="/services/aluminium-casting"
              id="services-view-all"
              className="section-link shrink-0 group"
            >
              View All Services
              <ArrowRight size={15}
                className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">

            {/* ── Card 1: Aluminium Casting ── */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inViewOnce}
              transition={{ duration: 0.6, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="h-full premium-card group relative overflow-hidden
                               transition-all duration-300
                               hover:-translate-y-1.5 hover:border-brand-500/50
                               hover:shadow-2xl hover:shadow-brand-900/40">

                {/* Top gradient accent */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r
                                from-brand-600/0 via-brand-500 to-brand-600/0
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="pb-5 pt-8 px-8">
                  {/* Icon */}
                  <div className="premium-card-icon premium-card-icon-lg
                                  flex items-center justify-center mb-5
                                  group-hover:bg-brand-500/20 group-hover:border-brand-500/40
                                  transition-all duration-300">
                    <Cog size={26} className="text-brand-400"
                         strokeWidth={1.5} />
                  </div>

                  <CardTitle className="text-2xl lg:text-[1.6rem] mb-1">
                    Aluminium Casting
                  </CardTitle>

                  {/* Divider pip */}
                  <div className="w-10 h-[2px] bg-gradient-to-r from-brand-500/0 via-brand-500
                                  to-brand-500/0 rounded-full mt-3
                                  group-hover:w-16 transition-all duration-300" />
                </CardHeader>

                <CardContent className="px-8 pb-0">
                  <CardDescription className="text-[15px] leading-relaxed text-steel-300">
                    High-precision aluminium casting using multiple technologies including HPDC,
                    GDC, sand casting, and centrifugal casting. Designed for strength, durability,
                    and dimensional accuracy.
                  </CardDescription>

                  {/* Process tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {["HPDC", "GDC", "Sand Casting", "Centrifugal"].map((tag) => (
                      <span key={tag}
                            className="px-3 py-1 rounded-full text-[11px] font-semibold
                                       tracking-wide bg-brand-500/10 text-brand-300
                                       border border-brand-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="px-8 py-7 mt-2">
                  <Link
                    to="/services/aluminium-casting"
                    id="service-aluminium-learn-more"
                    className="inline-flex items-center gap-2 text-sm font-semibold
                               text-brand-400 hover:text-brand-300 transition-colors duration-200 group/link"
                  >
                    Learn More
                    <ArrowRight size={15}
                      className="group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            {/* ── Card 2: Rubber Industry Services ── */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inViewOnce}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="h-full premium-card group relative overflow-hidden
                               transition-all duration-300
                               hover:-translate-y-1.5 hover:border-accent/40
                               hover:shadow-2xl hover:shadow-accent/10">

                {/* Top gradient accent — amber for rubber */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r
                                from-accent/0 via-accent to-accent/0
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="pb-5 pt-8 px-8">
                  {/* Icon */}
                  <div className="premium-card-icon premium-card-icon-lg bg-accent/10 border-accent/20
                                  flex items-center justify-center mb-5
                                  group-hover:bg-accent/15 group-hover:border-accent/40
                                  transition-all duration-300">
                    <Layers size={26} className="text-amber-400"
                            strokeWidth={1.5} />
                  </div>

                  <CardTitle className="text-2xl lg:text-[1.6rem] mb-1">
                    Rubber Component Solutions
                  </CardTitle>

                  {/* Divider pip — amber */}
                  <div className="w-10 h-[2px] bg-gradient-to-r from-accent/0 via-accent
                                  to-accent/0 rounded-full mt-3
                                  group-hover:w-16 transition-all duration-300" />
                </CardHeader>

                <CardContent className="px-8 pb-0">
                  <CardDescription className="text-[15px] leading-relaxed text-steel-300">
                    Precision rubber components for sealing and vibration control, with support
                    for metal-rubber integrated requirements in industrial applications.
                  </CardDescription>

                  {/* Process tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {["Moulded Parts", "Gaskets", "Bushes", "Vibration Dampers"].map((tag) => (
                      <span key={tag}
                            className="px-3 py-1 rounded-full text-[11px] font-semibold
                                       tracking-wide bg-accent/10 text-amber-300
                                       border border-accent/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="px-8 py-7 mt-2">
                  <Link
                    to="/services/rubber"
                    id="service-rubber-learn-more"
                    className="inline-flex items-center gap-2 text-sm font-semibold
                               text-amber-400 hover:text-amber-300 transition-colors duration-200 group/link"
                  >
                    Learn More
                    <ArrowRight size={15}
                      className="group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          INDUSTRIES PREVIEW
      ════════════════════════════════════════════════ */}
      <section className="relative bg-surface overflow-hidden section-transition">

        {/* Right-side orb */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full
                        bg-brand-900/30 blur-3xl pointer-events-none -translate-y-1/2
                        translate-x-1/3" />

        <div className="section-shell">

          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inViewOnce}
              transition={{ duration: 0.5 }}
            >
              <span className="section-eyebrow mb-3">
                <span className="w-6 h-[1.5px] bg-brand-400 rounded-full" />
                Industries We Serve
              </span>
              <h2 className="section-heading">
                Built for Many,{" "}
                <span className="text-gradient">Trusted by All</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={inViewOnce}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Link
                to="/industries"
                id="industries-explore"
                className="section-link shrink-0 group"
              >
                Explore Industries
                <ArrowRight size={15}
                  className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>

          {/* 3-col grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                Icon: Car,
                title: "Automotive Industry",
                desc: "Precision aluminium components for automotive applications requiring durability and performance.",
                delay: 0,
              },
              {
                Icon: Droplets,
                title: "Pump Manufacturing",
                desc: "Corrosion-resistant castings for pump housings, impellers, and fluid handling systems.",
                delay: 0.06,
              },
              {
                Icon: Zap,
                title: "Electrical Components",
                desc: "Dimensionally accurate housings and enclosures for electrical and switchgear applications.",
                delay: 0.12,
              },
              {
                Icon: Tractor,
                title: "Agricultural Machinery",
                desc: "Robust castings engineered for heavy-duty agricultural equipment and field machinery.",
                delay: 0.18,
              },
              {
                Icon: Factory,
                title: "Industrial Equipment",
                desc: "High-strength components for a wide range of industrial machinery and equipment.",
                delay: 0.24,
              },
              {
                Icon: Settings2,
                title: "Mechanical Engineering",
                desc: "Custom engineered parts for mechanical assemblies, jigs, fixtures, and tooling.",
                delay: 0.30,
              },
            ].map(({ Icon, title, desc, delay }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inViewOnce}
                transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
                className="premium-card group relative flex h-full flex-col gap-4 p-6"
              >
                {/* Top hover accent */}
                <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-2xl
                                bg-gradient-to-r from-brand-500/0 via-brand-500 to-brand-500/0
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="premium-card-icon
                                flex items-center justify-center
                                group-hover:bg-brand-500/20 group-hover:border-brand-500/40
                                transition-all duration-300">
                  <Icon size={20} className="text-brand-400" strokeWidth={1.75} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="premium-card-title mb-1.5 group-hover:text-brand-100 transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="premium-card-text mt-0">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          WHY CHOOSE US
      ════════════════════════════════════════════════ */}
      <section className="relative bg-surface-2 overflow-hidden section-transition">

        {/* Diagonal grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full
                        bg-brand-800/20 blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3" />

        <div className="section-shell">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inViewOnce}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center mb-14"
          >
            <span className="section-eyebrow mb-3">
              <span className="w-6 h-[1.5px] bg-brand-400 rounded-full" />
              Why Choose Us
              <span className="w-6 h-[1.5px] bg-brand-400 rounded-full" />
            </span>
            <h2 className="section-heading">
              The Prasad Engineering{" "}
              <span className="text-gradient">Difference</span>
            </h2>
            <p className="section-lead text-[15px]">
              Built on 35+ years of manufacturing discipline, ISO quality systems, and reliable execution.
            </p>
          </motion.div>

          {/* Responsive grid — 2 col → 4 col to fit 7 cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                Icon: Clock,
                title: "35+ Years of Experience",
                desc: "Decades of expertise in aluminium casting delivering consistent quality and reliability.",
                delay: 0,
              },
              {
                Icon: ThumbsUp,
                title: "916+ Companies Served",
                desc: "A proven track record of long-term partnerships across automotive, industrial, and engineering sectors.",
                delay: 0.06,
              },
              {
                Icon: Layers,
                title: "64+ Aluminium Alloys",
                desc: "Capability across a wide range of alloys to meet every application's mechanical and thermal requirement.",
                delay: 0.12,
              },
              {
                Icon: Cog,
                title: "Multiple Casting Technologies",
                desc: "HPDC, GDC, sand casting, and centrifugal casting — all under one roof for maximum flexibility.",
                delay: 0.18,
              },
              {
                Icon: Wrench,
                title: "In-House Machining",
                desc: "VMC and CNC turning capability to deliver ready-to-assemble, machined components directly.",
                delay: 0.24,
              },
              {
                Icon: Settings2,
                title: "Complementary Rubber Capability",
                desc: "Extended in-house rubber capability supporting integrated component requirements.",
                delay: 0.30,
              },
              {
                Icon: Factory,
                title: "Reduced Vendor Dependency",
                desc: "End-to-end manufacturing under one roof means fewer suppliers, faster delivery, and better quality control.",
                delay: 0.36,
              },
            ].map(({ Icon, title, desc, delay }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inViewOnce}
                transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
                className="premium-card group flex h-full items-start gap-4 p-6 bg-surface"
              >
                {/* Icon column */}
                <div className="premium-card-icon
                                flex items-center justify-center
                                group-hover:bg-brand-500/20 group-hover:border-brand-500/40
                                transition-all duration-300">
                  <Icon size={20} className="text-brand-400" strokeWidth={1.75} />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <h3 className="premium-card-title mb-1.5 group-hover:text-brand-100 transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="premium-card-text mt-0">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Link to full Why Us page */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inViewOnce}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex justify-center mt-10"
          >
            <Link
              to="/why-us"
              id="why-us-learn-more"
              className="section-link text-brand-400 hover:text-brand-300 group"
            >
              Explore All Reasons
              <ArrowRight size={15}
                className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          CTA BAND
      ════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-brand-900 section-transition">
        {/* Gradient background */}
        <div className="absolute inset-0
                        bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900" />

        {/* Mesh overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[800px] h-[300px] rounded-full bg-white/5 blur-3xl
                        pointer-events-none" />

        <div className="section-shell-compact">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inViewOnce}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="section-heading lg:text-5xl">
                Looking for Reliable Aluminium Casting Solutions?
              </h2>
              <p className="mt-5 text-brand-100 text-[16px] leading-relaxed max-w-2xl mx-auto">
                Partner with Prasad Engineering for precision manufacturing, consistent
                quality, and complete component solutions tailored to your industrial needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inViewOnce}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2
                           px-8 py-3.5 rounded-xl font-bold text-[15px]
                           bg-white text-brand-900
                           hover:bg-brand-50 transition-colors duration-200
                           shadow-xl shadow-brand-900/30 group"
              >
                Get a Quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2
                           px-8 py-3.5 rounded-xl font-bold text-[15px]
                           bg-brand-800/50 text-white border border-white/20
                           hover:bg-brand-800/80 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}







