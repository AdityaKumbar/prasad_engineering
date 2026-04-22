import { motion, useInView, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Shield, Clock, CheckCircle2, Cog, Layers, Factory, Settings2, ThumbsUp, Wrench } from "lucide-react";
import SplitText from "../components/ui/SplitText";
import CountUp from "../components/ui/CountUp";
import { TextEffect } from "../components/ui/text-effect";
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
} from "../components/ui/card";
import DotGrid from "../components/ui/DotGrid";
import factoryHeroImage from "../components/images/6.jpg";
import factoryAboutImage from "../components/images/3.jpg";
import aluminiumImage from "../assets/aluminium.png";
import rubberImage from "../assets/rubber.png";

/* --- Stats data ------------------------------------------------- */
const stats = [
  { to: 35,  suffix: "+", label: "Years Experience",    sub: "Est. 1987"          },
  { to: 916, suffix: "+", label: "Companies Served",    sub: "Across India"         },
  { to: 64,  suffix: "+", label: "Alloys Capability",   sub: "Aluminium grades"     },
  { to: 49,  suffix: "+", label: "Skilled Workforce",   sub: "Expert engineers"     },
];

/* --- Framer variants -------------------------------------------- */
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

function ReplayTextEffect({ children, ...props }) {
  const ref = useRef(null);
  const [runKey, setRunKey] = useState(0);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.55,
    margin: "-10% 0px -10% 0px",
  });

  useEffect(() => {
    if (isInView) {
      setRunKey((prev) => prev + 1);
    }
  }, [isInView]);

  return (
    <span ref={ref} className="block">
      {isInView ? (
        <TextEffect key={runKey} {...props} trigger>
          {children}
        </TextEffect>
      ) : (
        /* Keep layout space but hide text until animation starts */
        <span className={props.className} style={{ opacity: 0 }} aria-hidden="true">
          {children}
        </span>
      )}
    </span>
  );
}

function InteractiveImageCard({
  src,
  alt,
  containerClassName,
  imageClassName,
  width,
  height,
  loading = "lazy",
  enableTilt = true,
  enableParallax = true,
  hoverScale = 1.01,
  tapScale = 0.995,
  imageBaseScale = 1.05,
  imageHoverScale = null,
  children,
}) {
  const cardRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const parallaxX = useMotionValue(0);
  const parallaxY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, { stiffness: 180, damping: 18, mass: 0.45 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 180, damping: 18, mass: 0.45 });
  const smoothParallaxX = useSpring(parallaxX, { stiffness: 160, damping: 20, mass: 0.5 });
  const smoothParallaxY = useSpring(parallaxY, { stiffness: 160, damping: 20, mass: 0.5 });

  const updateMotion = (clientX, clientY) => {
    if (!enableTilt && !enableParallax) return;
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width;
    const y = (clientY - rect.top) / rect.height;
    const nx = x - 0.5;
    const ny = y - 0.5;

    if (enableTilt) {
      rotateY.set(nx * 8);
      rotateX.set(-ny * 8);
    }
    if (enableParallax) {
      parallaxX.set(nx * -12);
      parallaxY.set(ny * -12);
    }
  };

  const resetMotion = () => {
    rotateX.set(0);
    rotateY.set(0);
    parallaxX.set(0);
    parallaxY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`group ${containerClassName}`}
      style={{
        rotateX: enableTilt ? smoothRotateX : 0,
        rotateY: enableTilt ? smoothRotateY : 0,
        transformPerspective: 1200,
      }}
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: tapScale }}
      onMouseMove={(event) => updateMotion(event.clientX, event.clientY)}
      onMouseLeave={resetMotion}
      onTouchMove={(event) => {
        const touch = event.touches[0];
        if (touch) updateMotion(touch.clientX, touch.clientY);
      }}
      onTouchEnd={resetMotion}
    >
      <motion.img
        src={src}
        alt={alt}
        className={imageClassName}
        width={width}
        height={height}
        loading={loading}
        whileHover={imageHoverScale ? { scale: imageHoverScale } : undefined}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        style={{
          x: enableParallax ? smoothParallaxX : 0,
          y: enableParallax ? smoothParallaxY : 0,
          scale: imageBaseScale,
        }}
      />
      {children}
    </motion.div>
  );
}

/* --- Interactive "Why Choose Us" card ----------------------------- */
function WhyCard({ Icon, title, desc, delay, inViewOnce }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inViewOnce}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex h-full flex-col rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Card surface */}
      <div className="relative z-10 flex h-full flex-col border border-white/70 rounded-2xl bg-white/95
                      group-hover:border-brand-400/60 group-hover:shadow-xl group-hover:shadow-[#1d5781]/30
                      transition-all duration-300 overflow-hidden">

        {/* Accent bar — slides in from left on hover */}
        <div className="absolute top-0 inset-x-0 h-[2.5px] overflow-hidden rounded-t-2xl">
          <motion.div
            className="h-full bg-gradient-to-r from-brand-400 via-brand-500 to-brand-300"
            initial={{ x: "-100%" }}
            animate={{ x: hovered ? "0%" : "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="flex items-start gap-4 p-6">
          {/* Icon with animated glow ring */}
          <div className="relative shrink-0">
            {/* Glow ring pulse */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-brand-400/20"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={hovered ? { scale: 1.5, opacity: 0 } : { scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <motion.div
              className="premium-card-icon flex items-center justify-center"
              animate={hovered
                ? { backgroundColor: "rgba(48,125,181,0.18)", borderColor: "rgba(48,125,181,0.4)", scale: 1.08 }
                : { backgroundColor: "", borderColor: "", scale: 1 }
              }
              transition={{ duration: 0.25 }}
            >
              <motion.div
                animate={hovered ? { rotate: [0, -8, 8, 0], scale: [1, 1.15, 1] } : {}}
                transition={{ duration: 0.45, ease: "easeInOut" }}
              >
                <Icon size={20} className="text-brand-400" strokeWidth={1.75} />
              </motion.div>
            </motion.div>
          </div>

          {/* Text */}
          <div className="min-w-0">
            <motion.h3
              className="premium-card-title mb-1.5 !text-steel-900"
              animate={{ color: hovered ? "#1d5c8b" : "#1a2332" }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h3>
            <p className="premium-card-text mt-0 !text-steel-700">{desc}</p>
          </div>
        </div>

        {/* Bottom shimmer line on hover */}
        <div className="absolute bottom-0 inset-x-0 h-[1px] overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-brand-400/60 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: hovered ? "0%" : "-100%" }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
}

const servicesPreview = [
  {
    title: "Aluminium Casting",
    description:
      "High-precision aluminium casting using HPDC, GDC, sand casting, and centrifugal routes for durable, dimensionally stable components.",
    image: aluminiumImage,
    tags: ["HPDC", "GDC", "Sand Casting", "Centrifugal"],
    href: "/services/aluminium-casting",
    id: "service-aluminium-learn-more",
    accent: "brand",
    badge: "Aluminium Casting",
  },
  {
    title: "Rubber Component Solutions",
    description:
      "Precision rubber components for sealing, damping, and metal-rubber integration tailored to industrial duty cycles.",
    image: rubberImage,
    tags: ["Moulded Parts", "Gaskets", "Bushes", "Vibration Dampers"],
    href: "/services/rubber",
    id: "service-rubber-learn-more",
    accent: "amber",
    badge: "Rubber Engineering",
  },

];

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
      {/* ------------------------------------------------
          HERO SECTION
      ------------------------------------------------ */}
      <section ref={heroRef} className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden
                          bg-[#307db5]">

        {/* -- Background layers -- */}

        {/* DotGrid background (React Bits) */}
        <motion.div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0, y: dotFieldY, opacity: 0.7 }}>
          <DotGrid
            dotSize={4}
            gap={5}
            baseColor="#555555"
            activeColor="#30cae1ff"
            proximity={50}
            shockRadius={120}
            shockStrength={2}
            resistance={1000}
            returnDuration={1.4}
          />
        </motion.div>

        {/* Background image */}
        <InteractiveImageCard
          src={factoryHeroImage}
          alt="Foundry setup and casting process at Prasad Engineering"
          containerClassName="absolute inset-0 h-full w-full overflow-hidden"
          imageClassName="h-full w-full object-cover"
          width={1280}
          height={960}
          loading="lazy"
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-[#0f2940]/40" />
        </InteractiveImageCard>

        {/* -- Hero inner -- */}
        <div className="container-max section-padding w-full relative z-10
                        py-24 lg:py-28 max-w-2xl">

          {/* -- LEFT: Content -- */}
          <div className="flex flex-col items-start">

            {/* ISO badge */}
            <motion.div {...fadeUp(0)} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                               bg-white/10 border border-white/30 text-white
                               text-xs font-semibold tracking-widest uppercase">
                <Shield size={12} />
                ISO Certified · Est. 1987 · Belagavi, India
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.75rem]
                           font-display font-bold text-white leading-[1.14] pb-1 mb-6">
              <SplitText
                tag="span"
                text="Precision Aluminium Casting"
                className="block"
                delay={28}
                duration={0.7}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 36 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.2}
                rootMargin="-60px"
                textAlign="left"
              />
              <ReplayTextEffect
                as="span"
                per="word"
                preset="slide"
                delay={0.24}
                className="block mt-1 pb-1 leading-[1.08] text-white"
              >
                & Engineering Solutions
              </ReplayTextEffect>
            </h1>

            {/* Subtitle */}
            <motion.p
              {...fadeUp(0.5)}
              className="text-base sm:text-lg text-white/85 leading-relaxed max-w-xl mb-8"
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
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white text-[#225f8e] font-semibold
                           hover:bg-blue-50 transition-all duration-200 active:scale-95 shadow-lg"
              >
                Get Quote
                <ArrowRight size={17} />
              </Link>
              <Link
                to="/services/aluminium-casting"
                id="hero-view-services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/70 text-white
                           font-semibold hover:bg-white/10 transition-all duration-200 active:scale-95"
              >
                View Services
                <ChevronRight size={17} />
              </Link>
            </motion.div>

            {/* Trust line */}
            <motion.div
              {...fadeUp(0.8)}
              className="mt-8 flex items-center gap-2 text-xs text-white/75"
            >
              <Clock size={13} />
              <span>ISO quality systems • 916+ companies served across industrial sectors</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------
          STATS STRIP
      ------------------------------------------------ */}
      <section
        id="hero-stats"
        className="bg-[#307db5] border-y border-white/[0.10] relative z-10"
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
                    "hover:bg-white/10 transition-colors duration-300",
                    /* right border on all except last in each row */
                    i < 3 ? "border-r border-white/[0.07]" : "",
                    /* bottom border on first row of 2-col mobile grid */
                    i < 2 ? "border-b border-white/[0.07] lg:border-b-0" : "",
                  ].join(" ")
                }
              >
                {/* Number */}
                <p className="text-4xl sm:text-5xl font-display font-bold text-white
                               group-hover:text-white/90 transition-colors duration-300
                               tabular-nums tracking-tight">
                  <CountUp to={s.to} suffix={s.suffix} duration={2.4} />
                </p>
                {/* Divider pip */}
                <div className="w-8 h-[2px] bg-gradient-to-r from-white/0 via-white/70
                                to-white/0 rounded-full mt-3 mb-2
                                group-hover:via-white transition-all duration-300" />
                {/* Label */}
                <p className="text-sm font-semibold text-white/95">{s.label}</p>
                {/* Sub-label */}
                <p className="mt-1 text-[11px] tracking-widest text-white/70 uppercase">
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

      {/* ------------------------------------------------
          ABOUT PREVIEW
      ------------------------------------------------ */}
      <section className="relative overflow-hidden bg-white section-transition">

        {/* Subtle section divider orb */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full
                        bg-brand-200/40 blur-3xl pointer-events-none -translate-y-1/2
                        translate-x-1/2" />

        <div className="section-shell">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* -- LEFT: Image placeholder -- */}
                        <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={inViewOnce}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1"
            >
              <InteractiveImageCard
                src={factoryAboutImage}
                alt="Aluminium casting mould setup at the Prasad Engineering facility"
                containerClassName="relative h-full w-full rounded-2xl overflow-hidden"
                imageClassName="absolute inset-0 h-full w-full object-cover rounded-2xl border border-white/8"
                width={1280}
                height={960}
                loading="lazy"
                enableTilt={false}
                enableParallax={false}
                hoverScale={1.01}
                imageBaseScale={1}
                imageHoverScale={1.03}
              >
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
              </InteractiveImageCard>
            </motion.div>

            {/* -- RIGHT: Content -- */}
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
              <h2 className="section-heading !text-steel-900">
                <SplitText
                  tag="span"
                  text="35+ Years of Precision"
                  className="block !text-steel-900"
                  delay={22}
                  duration={0.55}
                  ease="power3.out"
                  splitType="words"
                  from={{ opacity: 0, y: 24 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.2}
                  rootMargin="-60px"
                  textAlign="left"
                />
                <ReplayTextEffect
                  as="span"
                  per="char"
                  preset="slide"
                  delay={0.22}
                  className="block text-brand-700"
                >
                  Manufacturing
                </ReplayTextEffect>
              </h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inViewOnce}
                transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                className="section-lead mt-0 text-[15px] !text-steel-800"
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
                      className="flex items-center gap-3 text-[14px] !text-steel-800 leading-relaxed">
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
                  className="section-link text-brand-600 hover:text-brand-500 group"
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

      {/* ------------------------------------------------
          SERVICES PREVIEW
      ------------------------------------------------ */}
      <section className="relative bg-[#307db5] overflow-hidden section-transition">
        <div className="absolute inset-0 pointer-events-none opacity-40" style={{ zIndex: 0 }}>
          <DotGrid
            dotSize={4}
            gap={5}
            baseColor="#555555"
            activeColor="#2b2929"
            proximity={50}
            shockRadius={120}
            shockStrength={2}
            resistance={1000}
            returnDuration={1.4}
          />
        </div>

        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            zIndex: 1,
          }}
        />
        {/* Left orb */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-brand-700/10 rounded-full
                        blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/3"
             style={{ zIndex: 1 }} />

        <div className="section-shell relative z-10">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inViewOnce}
            transition={{ duration: 0.5 }}
            className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
          >
            <div>
              <span className="section-eyebrow mb-3 !text-white/80">
                <span className="w-6 h-[1.5px] bg-white/70 rounded-full" />
                What We Offer
              </span>
              <h2 className="section-heading">
                Our Core Services
              </h2>
            </div>
            <Link
              to="/services/rubber"
              id="services-view-all"
              className="section-link shrink-0 group !text-white/90 hover:!text-white"
            >
              View All Services
              <ArrowRight size={15}
                className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {servicesPreview.map((service, index) => {
              const isBrand = service.accent === "brand";
              const isAmber = service.accent === "amber";
              return (
                <motion.div
                  key={service.title}
                  className="h-full"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={inViewOnce}
                  transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                >
                  <Card
                    className={[
                      "h-full group relative overflow-hidden rounded-2xl bg-white/95",
                      "transition-all duration-300 hover:shadow-2xl",
                      isBrand
                        ? "border-white/70 hover:border-white hover:shadow-[#1d5781]/35"
                        : isAmber
                          ? "border-white/70 hover:border-accent/45 hover:shadow-[#1d5781]/30"
                          : "border-white/70 hover:border-steel-300/70 hover:shadow-[#1d5781]/30",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "absolute top-0 inset-x-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                        isBrand
                          ? "bg-gradient-to-r from-brand-600/0 via-brand-500 to-brand-600/0"
                          : isAmber
                            ? "bg-gradient-to-r from-accent/0 via-accent to-accent/0"
                            : "bg-gradient-to-r from-steel-400/0 via-steel-400 to-steel-400/0",
                      ].join(" ")}
                    />

                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={`${service.title} at Prasad Engineering`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/80 via-[#0f2940]/20 to-transparent" />
                      <span
                        className={[
                          "absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider",
                          isBrand
                            ? "bg-white/90 text-brand-700"
                            : isAmber
                              ? "bg-white/90 text-amber-700"
                              : "bg-white/90 text-steel-700",
                        ].join(" ")}
                      >
                        {service.badge}
                      </span>
                    </div>

                    <CardHeader className="pb-4 pt-6 px-7">
                      <CardTitle className="text-2xl lg:text-[1.6rem] mb-1 !text-steel-900">
                        {service.title}
                      </CardTitle>

                      <div
                        className={[
                          "w-10 h-[2px] rounded-full mt-3 group-hover:w-16 transition-all duration-300",
                          isBrand
                            ? "bg-gradient-to-r from-brand-500/0 via-brand-500 to-brand-500/0"
                            : isAmber
                              ? "bg-gradient-to-r from-accent/0 via-accent to-accent/0"
                              : "bg-gradient-to-r from-steel-400/0 via-steel-400 to-steel-400/0",
                        ].join(" ")}
                      />
                    </CardHeader>

                    <CardContent className="px-7 pb-0">
                      <CardDescription className="text-[15px] leading-relaxed !text-steel-700">
                        {service.description}
                      </CardDescription>

                      <div className="flex flex-wrap gap-2 mt-6">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className={[
                              "px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide border",
                              isBrand
                                ? "bg-brand-500/12 text-brand-700 border-brand-500/25"
                                : isAmber
                                  ? "bg-accent/10 text-amber-700 border-accent/20"
                                  : "bg-steel-100 text-steel-700 border-steel-300/70",
                            ].join(" ")}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="px-7 py-7 mt-2">
                      <Link
                        to={service.href}
                        id={service.id}
                        className={[
                          "inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 group/link",
                          isBrand
                            ? "text-brand-700 hover:text-brand-800"
                            : isAmber
                              ? "text-amber-700 hover:text-amber-800"
                              : "text-steel-700 hover:text-steel-800",
                        ].join(" ")}
                      >
                        Learn More
                        <ArrowRight
                          size={15}
                          className="group-hover/link:translate-x-1 transition-transform duration-200"
                        />
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------
          INDUSTRIES PREVIEW
      ------------------------------------------------ */}
      <section className="relative bg-white overflow-hidden section-transition">

        {/* Right-side orb */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full
                        bg-brand-200/40 blur-3xl pointer-events-none -translate-y-1/2
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
              <h2 className="section-heading !text-steel-900">
                <SplitText
                  tag="span"
                  text="Built for Many,"
                  className="block !text-steel-900"
                  delay={18}
                  duration={0.5}
                  ease="power3.out"
                  splitType="words"
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.2}
                  rootMargin="-60px"
                  textAlign="left"
                />
                <ReplayTextEffect
                  as="span"
                  per="word"
                  preset="slide"
                  delay={0.18}
                  className="block text-amber-600"
                >
                  Trusted by All
                </ReplayTextEffect>
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
                className="section-link shrink-0 group text-brand-600 hover:text-brand-500"
              >
                Explore Industries
                <ArrowRight size={15}
                  className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>

          {/* 3-col image-led grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "/src/assets/automotive.jpg",
                title: "Automotive Industry",
                desc: "Precision aluminium components for automotive applications requiring durability and performance.",
                tag: "Automotive",
                delay: 0,
              },
              {
                image: "/src/assets/pump.png",
                title: "Pump Manufacturing",
                desc: "Corrosion-resistant castings for pump housings, impellers, and fluid handling systems.",
                tag: "Fluid Systems",
                delay: 0.06,
              },
              {
                image: "/src/assets/electrical.jpg",
                title: "Electrical Components",
                desc: "Dimensionally accurate housings and enclosures for electrical and switchgear applications.",
                tag: "Electrical",
                delay: 0.12,
              },
              {
                image: "/src/assets/agri.png",
                title: "Agricultural Machinery",
                desc: "Robust castings engineered for heavy-duty agricultural equipment and field machinery.",
                tag: "Agri-Tech",
                delay: 0.18,
              },
              {
                image:"/src/assets/industry_equipments.png",
                title: "Industrial Equipment",
                desc: "High-strength components for a wide range of industrial machinery and equipment.",
                tag: "Heavy Industry",
                delay: 0.24,
              },
              {
                image: "/src/assets/mechanical_tools.png",
                title: "Mechanical Engineering",
                desc: "Custom engineered parts for mechanical assemblies, jigs, fixtures, and tooling.",
                tag: "Engineering",
                delay: 0.30,
              },
            ].map(({ image, title, desc, tag, delay }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inViewOnce}
                transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-steel-200/90 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300/80 hover:shadow-xl hover:shadow-brand-100/80"
              >
                {/* Top hover accent */}
                <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-2xl
                                bg-gradient-to-r from-brand-500/0 via-brand-500 to-brand-500/0
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Visual */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={image}
                    alt={`${title} manufacturing`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/65 via-[#0f2940]/15 to-transparent" />
                  <span className="absolute top-3 left-3 inline-flex rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-700">
                    {tag}
                  </span>
                </div>

                {/* Text */}
                <div className="p-5">
                  <h3 className="premium-card-title mb-2 !text-steel-900 group-hover:text-brand-700 transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="premium-card-text mt-0 !text-steel-700">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------
          WHY CHOOSE US
      ------------------------------------------------ */}
      <section className="relative bg-[#307db5] overflow-hidden section-transition">
        <div className="absolute inset-0 pointer-events-none opacity-35" style={{ zIndex: 0 }}>
          <DotGrid
            dotSize={6}
            gap={5}
            baseColor="#555555"
            activeColor="#1885aaba"
            proximity={100}
            shockRadius={120}
            shockStrength={2}
            resistance={760}
            returnDuration={1.4}
          />
        </div>

        {/* Diagonal grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            zIndex: 1,
          }}
        />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full
                        bg-brand-800/20 blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3"
             style={{ zIndex: 1 }} />

        <div className="section-shell relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inViewOnce}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center mb-14"
          >
            <span className="section-eyebrow mb-3 !text-white/80">
              <span className="w-6 h-[1.5px] bg-white/70 rounded-full" />
              Why Choose Us
              <span className="w-6 h-[1.5px] bg-white/70 rounded-full" />
            </span>
            <h2 className="section-heading">
              <SplitText
                tag="span"
                text="Casting Precision for the Giants"
                className="block"
                delay={20}
                duration={0.55}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 24 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.2}
                rootMargin="-60px"
                textAlign="center"
              />
              <ReplayTextEffect
                as="span"
                per="char"
                preset="slide"
                delay={0.2}
                className="block text-brand-200"
              >
                Delivering ISO Quality Standards.
              </ReplayTextEffect>
            </h2>
            <p className="section-lead text-[15px] !text-white/85">
              Built on 35+ years of manufacturing discipline, ISO quality systems, and reliable execution.
            </p>
          </motion.div>

          {/* Responsive grid — 2 col → 3 col → 6 cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                Icon: Factory,
                title: "Single-Source Supply",
                desc: "Aluminium casting and rubber components under one roof — fewer suppliers, faster delivery, and tighter quality control across integrated requirements.",
                delay: 0.30,
              },
            ].map(({ Icon, title, desc, delay }) => (
              <WhyCard key={title} Icon={Icon} title={title} desc={desc} delay={delay} inViewOnce={inViewOnce} />
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
              className="section-link !text-white/90 hover:!text-white group"
            >
              Explore All Reasons
              <ArrowRight size={15}
                className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------
          CTA BAND
      ------------------------------------------------ */}
      <section className="relative overflow-hidden bg-[#307db5] section-transition">
        {/* Gradient background */}
        <div className="absolute inset-0
                        bg-gradient-to-br from-[#2a6f9f] via-[#307db5] to-[#265f88]" />

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
              <SplitText
                tag="h2"
                text="Looking for Reliable Aluminium Casting Solutions?"
                className="section-heading lg:text-5xl"
                delay={18}
                duration={0.6}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 24 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.2}
                rootMargin="-60px"
                textAlign="center"
              />
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
                           bg-white/10 text-white border border-white/45
                           hover:bg-white/18 transition-colors duration-200"
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










