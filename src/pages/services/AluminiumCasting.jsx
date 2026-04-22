import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle2, ArrowRight, Shield, Cog, Layers, Settings2,
  RotateCcw, ZoomIn, X, ChevronLeft, ChevronRight,
} from "lucide-react";
import PageHero from "../../components/ui/PageHero";
import CountUp from "../../components/ui/CountUp";
import { TextEffect } from "../../components/ui/text-effect";
import aluminiumBanner from "../../assets/aluminium_banner1.jpg";

/* ── Gallery images ──────────────────────────────────────────── */
const gallery = [
  { src: "/src/assets/aluminium.png",           caption: "Aluminium Die Cast Components" },
  { src: "/src/components/images/1.jpg",         caption: "Production Floor" },
  { src: "/src/components/images/2.jpg",         caption: "Quality Inspection" },
  { src: "/src/components/images/3.jpg",         caption: "CNC Machining Centre" },
  { src: "/src/components/images/4.jpg",         caption: "Pattern & Tooling" },
  { src: "/src/components/images/5.jpg",         caption: "Finished Castings" },
  { src: "/src/components/images/8.png",         caption: "Aluminium Casting Unit" },
  { src: "/src/components/images/9.png",         caption: "Machined Aluminium Components" },
  { src: "/src/components/images/HPDC.png",      caption: "HPDC Process" },
  { src: "/src/components/images/GDC.png",       caption: "GDC Process" },
  { src: "/src/components/images/sandcasting.png", caption: "Sand Casting Process" },
];

/* ── Casting process data ─────────────────────────────────────── */
const processes = [
  {
    step: "01",
    title: "High-Pressure Die Casting",
    short: "HPDC",
    desc: "Molten aluminium injected at high pressure into hardened steel dies — ideal for high-volume, thin-walled, dimensionally precise components with excellent surface finish.",
    tags: ["High Volume", "Tight Tolerances", "Excellent Surface"],
    Icon: Cog,
    image: "/src/components/images/1.jpg",
  },
  {
    step: "02",
    title: "Gravity Die Casting  |  Gravity Die Casting with Pressure Tightening",
    short: "GDC",
    desc: "Aluminium poured into reusable permanent moulds by gravity — producing dense, high-integrity castings for structural and load-bearing applications.",
    tags: ["Structural Parts", "Dense Castings", "Reusable Moulds"],
    Icon: Layers,
    image: "/src/components/images/2.jpg",
  },
  {
    step: "03",
    title: "Sand Casting | Intricate Sand Casting with Pressure Tightening",
    short: "Sand Casting",
    desc: "Flexible, cost-effective route for complex geometries and low-to-medium volumes — ideal for prototypes, one-offs, and custom engineering parts.",
    tags: ["Complex Geometry", "Prototypes", "Low Volume"],
    Icon: Settings2,
    image: "/src/components/images/3.jpg",
  },
  {
    step: "04",
    title: "Centrifugal Casting",
    short: "Centrifugal",
    desc: "Rotating mould process for cylindrical or symmetrical parts — delivers superior grain structure, eliminates porosity, and produces near-net-shape components.",
    tags: ["Cylindrical Parts", "Zero Porosity", "Superior Grain"],
    Icon: RotateCcw,
    image: "/src/components/images/4.jpg",
  },
];

const capabilities = [
  "In-house VMC & CNC turning machining",
  "64+ Aluminium Alloy Grades (LM, EN, ASTM series)",
  "First Article Inspection (FAI) on every new tool",
  "Dimensional inspection on all production batches",
  "Material traceability and heat number records",
  "ISO-certified quality management system",
  "Export-ready packaging and logistics support",
  "Custom alloy selection advisory",
];
const HIGHLIGHT_CAPABILITY = "In-house VMC & CNC turning machining";

const stats = [
  { to: 35,  suffix: "+", label: "Years Experience"  },
  { to: 64,  suffix: "+", label: "Alloy Grades"      },
  { to: 916, suffix: "+", label: "Companies Served"  },
  { to: 4,   suffix: "",  label: "Casting Processes" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ── ReplayTextEffect ────────────────────────────────────────── */
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
        <span className={props.className} style={{ opacity: 0 }} aria-hidden="true">
          {children}
        </span>
      )}
    </span>
  );
}

/* ── Interactive process card ────────────────────────────────── */
function ProcessCard({ step, title, short, desc, tags, Icon, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer"
    >
      <div className="relative z-10 flex h-full flex-col border border-white/70 rounded-2xl bg-white/95
                      group-hover:border-brand-400/60 group-hover:shadow-xl group-hover:shadow-brand-900/25
                      transition-all duration-300 overflow-hidden">

        {/* Top accent bar */}
        <div className="absolute top-0 inset-x-0 h-[3px] overflow-hidden rounded-t-2xl">
          <motion.div
            className="h-full bg-gradient-to-r from-brand-400 via-brand-500 to-brand-300"
            initial={{ x: "-100%" }}
            animate={{ x: hovered ? "0%" : "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="p-7 flex flex-col gap-4 flex-1">
          <div className="flex items-start justify-between gap-3">
            <span className="text-4xl font-display font-bold text-brand-200 leading-none">{step}</span>
            <motion.div
              className="w-11 h-11 rounded-xl bg-brand-500/10 border border-brand-500/20
                          flex items-center justify-center shrink-0"
              animate={hovered ? { backgroundColor: "rgba(48,125,181,0.2)", borderColor: "rgba(48,125,181,0.4)", scale: 1.08 } : {}}
              transition={{ duration: 0.25 }}
            >
              <motion.div
                animate={hovered ? { rotate: [0, -8, 8, 0], scale: [1, 1.15, 1] } : {}}
                transition={{ duration: 0.45 }}
              >
                <Icon size={20} className="text-brand-500" strokeWidth={1.75} />
              </motion.div>
            </motion.div>
          </div>

          <div>
            <motion.h3
              className="font-display font-bold text-[16px] text-steel-900 mb-1"
              animate={{ color: hovered ? "#1d5c8b" : "#1a2332" }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h3>
            <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-400">{short}</span>
          </div>

          <p className="text-[13px] text-steel-700 leading-relaxed">{desc}</p>

          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-steel-100">
            {tags.map((tag) => (
              <span key={tag}
                className="px-2.5 py-1 rounded-full text-[11px] font-semibold
                           bg-brand-500/10 text-brand-700 border border-brand-500/20">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom shimmer */}
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

/* ── Lightbox ────────────────────────────────────────────────── */
function Lightbox({ images, initial, onClose }) {
  const [idx, setIdx] = useState(initial);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={images[idx].src} alt={images[idx].caption}
          className="w-full max-h-[80vh] object-cover" />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-4">
          <p className="text-white font-semibold text-sm">{images[idx].caption}</p>
          <p className="text-white/60 text-xs mt-0.5">{idx + 1} / {images.length}</p>
        </div>
        <button onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors">
          <X size={16} />
        </button>
        <button onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors">
          <ChevronLeft size={20} />
        </button>
        <button onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors">
          <ChevronRight size={20} />
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function AluminiumCasting() {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  return (
    <>
      <PageHero
        tag="Services"
        title="Aluminium Casting"
        subtitle="High-precision aluminium casting across HPDC, GDC, sand, and centrifugal routes — ISO-certified, export-ready, and across 64+ alloy grades."
        backgroundImage={aluminiumBanner}
      />

      {/* ── Overview ──────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden section-transition">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full
                        bg-brand-200/40 blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />

        <div className="container-max section-padding py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Hero image with hover effect */}
            <motion.div {...fadeUp(0)} className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl group cursor-pointer"
              >
              <motion.img
                src="/src/assets/aluminium.png"
                alt="Aluminium casting component at Prasad Engineering"
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/50 to-transparent"
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0.7 }}
                transition={{ duration: 0.3 }}
              />

              {/* ISO badge */}
              <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
                <Shield size={16} className="text-brand-500" />
                <div>
                  <p className="text-xs font-bold text-steel-900">ISO Certified</p>
                  <p className="text-[10px] text-steel-600">Quality Manufacturing</p>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="flex flex-col gap-6">
              <motion.div {...fadeUp(0.08)}>
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-400 mb-4">
                  <span className="w-6 h-[1.5px] bg-brand-400 rounded-full" />
                  Our Core Expertise
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-steel-900 leading-tight mb-5">
                  <ReplayTextEffect className="text-3xl sm:text-4xl font-display font-bold text-steel-900">
                    Precision Aluminium Casting
                  </ReplayTextEffect>
                  <ReplayTextEffect className="block text-brand-600 mt-1 text-3xl sm:text-4xl font-display font-bold">
                    Since 1987
                  </ReplayTextEffect>
                </h2>
              </motion.div>

              <motion.p {...fadeUp(0.14)} className="text-steel-700 text-[15px] leading-relaxed">
                Prasad Engineering has been manufacturing aluminium castings for over 35 years from
                our ISO-certified facility in Belagavi, Karnataka. We operate across four casting
                routes — HPDC, GDC, sand casting, and centrifugal casting — giving clients complete
                flexibility across volume, geometry, and tolerance requirements.
              </motion.p>

              <motion.ul {...fadeUp(0.20)} className="space-y-2.5">
                {[
                  "35+ years of casting expertise",
                  "64+ aluminium alloy grades",
                  "HPDC, GDC and Sand Casting",
                  "In-house machining for ready-to-assemble parts",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[14px] text-steel-800">
                    <CheckCircle2 size={16} className="text-brand-400 shrink-0" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
                <li className="flex items-center gap-3 text-[14px] text-steel-800">
                  <CheckCircle2 size={16} className="text-brand-400 shrink-0" strokeWidth={2.5} />
                  <span>
                    Casting weight range: <strong>25g</strong> to <strong>230kg</strong>
                  </span>
                </li>
              </motion.ul>

              <motion.div {...fadeUp(0.26)}>
                <Link to="/contact" id="aluminium-cta-top"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                             bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm
                             transition-colors duration-200 shadow-lg shadow-brand-900/30 group">
                  Request a Quote
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ───────────────────────────────────── */}
      <section className="bg-[#307db5] border-y border-white/[0.10] section-transition">
        <div className="container-max section-padding py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-white/[0.08]">
            {stats.map(({ to, suffix, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="text-4xl font-display font-bold text-white">
                  <CountUp to={to} suffix={suffix} />
                </div>
                <p className="text-sm text-white/80 mt-1">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ─────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden section-transition">
        <div className="container-max section-padding py-20 relative z-10">
          <motion.div {...fadeUp(0)} className="mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-400 mb-3">
              <span className="w-6 h-[1.5px] bg-brand-400 rounded-full" />
              Our Facility & Products
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-steel-900">
              Inside Prasad Engineering
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {gallery.map(({ src, caption }, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setLightboxIdx(i)}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer shadow-md"
              >
                <motion.img
                  src={src} alt={caption}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/70 via-transparent to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 inset-x-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-semibold">{caption}</p>
                </div>
                <div className="absolute top-2 right-2 bg-black/40 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ZoomIn size={13} className="text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Casting Processes ─────────────────────────────── */}
      <section className="relative bg-[#307db5] overflow-hidden section-transition">
        <div className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container-max section-padding py-20 lg:py-28 relative z-10">
          <motion.div {...fadeUp(0)} className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-white/80 mb-3">
              <span className="w-6 h-[1.5px] bg-white/70 rounded-full" />
              Process Routes
              <span className="w-6 h-[1.5px] bg-white/70 rounded-full" />
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Four Casting Technologies, One Roof
            </h2>
            <p className="text-white/80 text-[15px] mt-3 leading-relaxed">
              Each route serves different production requirements — we advise on the right process for your application.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {processes.map(({ step, title, short, desc, tags, Icon }, i) => (
              <ProcessCard key={title} step={step} title={title} short={short}
                desc={desc} tags={tags} Icon={Icon} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities ──────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden section-transition">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full
                        bg-brand-200/40 blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3" />

        <div className="container-max section-padding py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-400 mb-4">
                <span className="w-6 h-[1.5px] bg-brand-400 rounded-full" />
                Full-Spectrum Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-steel-900 mb-8 leading-tight">
                Everything Under One Roof
              </h2>
              <ul className="space-y-3">
                {capabilities.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.04 + i * 0.06 }}
                    className="flex items-start gap-3 text-[14px] text-steel-800 leading-relaxed"
                  >
                    {item === HIGHLIGHT_CAPABILITY ? (
                      <span className="inline-flex items-center rounded-md bg-brand-500/12 border border-brand-500/30 px-2 py-1 font-semibold text-brand-700">
                        {item}
                      </span>
                    ) : (
                      <>
                        <CheckCircle2 size={16} className="text-brand-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{item}</span>
                      </>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Stacked image pair */}
            <motion.div {...fadeUp(0.12)} className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl group cursor-pointer"
                onClick={() => setLightboxIdx(4)}>
                <motion.img src="/src/components/images/5.jpg" alt="Casting production"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/40 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-4 w-48 h-36 rounded-2xl overflow-hidden border-4 border-white shadow-xl group cursor-pointer"
                onClick={() => setLightboxIdx(2)}>
                <motion.img src="/src/components/images/2.jpg" alt="Quality check"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="relative bg-[#307db5] overflow-hidden section-transition">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a6f9f] via-[#307db5] to-[#265f88]" />
        <div className="container-max section-padding py-16 relative z-10 text-center">
          <motion.div {...fadeUp(0)} className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Ready to Start Your Casting Project?
            </h2>
            <p className="text-white/85 text-[15px] mb-8 leading-relaxed">
              Share your component drawing or requirements — our team will advise on the best
              casting route, alloy selection, and lead time.
            </p>
            <Link to="/contact" id="aluminium-cta-bottom"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                         bg-white text-brand-700 font-bold text-sm
                         hover:bg-blue-50 transition-colors duration-200 shadow-xl group">
              Get in Touch
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Lightbox ──────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <Lightbox images={gallery} initial={lightboxIdx} onClose={() => setLightboxIdx(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
