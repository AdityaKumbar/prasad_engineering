import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle2, ArrowRight, Package, Layers, Shield, Wrench,
  ZoomIn, X, ChevronLeft, ChevronRight,
} from "lucide-react";
import PageHero from "../../components/ui/PageHero";
import { TextEffect } from "../../components/ui/text-effect";
import rubberBanner from "../../assets/banner4.jpg";

/* ── Gallery images ──────────────────────────────────────────── */
const gallery = [
  { src: "/src/assets/rubber.png",              caption: "Rubber Components" },
  { src: "/src/components/images/6.jpg",         caption: "Moulded Parts" },
  { src: "/src/components/images/7.jpeg",         caption: "Gaskets & Seals" },
  { src: "/src/components/images/8.jpg",         caption: "Metal-Rubber Bonded" },
  { src: "/src/components/images/9.jpg",         caption: "Precision Components" },
  { src: "/src/components/images/5.jpg",         caption: "Quality Inspection" },
];

/* ── Product data ────────────────────────────────────────────── */
const products = [
  {
    step: "01",
    title: "Moulded Rubber Parts",
    short: "Moulded",
    desc: "Custom compression and injection-moulded rubber components for sealing, vibration isolation, and structural applications across industrial assemblies.",
    tags: ["Compression Moulded", "Injection Moulded", "Custom Profiles"],
    Icon: Package,
  },
  {
    step: "02",
    title: "Gaskets & Seals",
    short: "Sealing",
    desc: "Precision-cut and moulded gaskets and seals for fluid containment, pressure resistance, and thermal isolation in demanding environments.",
    tags: ["Fluid Sealing", "Pressure Resistant", "Custom Sizes"],
    Icon: Shield,
  },
  {
    step: "03",
    title: "Bushes & Vibration Dampers",
    short: "Anti-Vibration",
    desc: "Anti-vibration mounts, bushes, and isolators for automotive, industrial, and machinery applications — absorbing shock and reducing noise.",
    tags: ["Anti-Vibration", "Noise Reduction", "Shock Absorption"],
    Icon: Layers,
  },
  {
    step: "04",
    title: "Metal-Rubber Bonded Parts",
    short: "Bonded",
    desc: "Components heat-bonded to combine the structural strength of metal with the flexibility and sealing properties of rubber — single-part precision assemblies.",
    tags: ["Heat Bonded", "Structural Flex", "Precision Assembly"],
    Icon: Wrench,
  },
];

const capabilities = [
  "Natural rubber, EPDM, NBR, SBR, and silicone grades",
  "Hardness range: 30 to 90 Shore A",
  "Temperature resistance up to 200°C (silicone)",
  "Custom colour, profile, and dimensions per drawing",
  "Metal-rubber bonded assemblies in-house",
  "Compatible with Prasad aluminium casting supply",
  "Compression set and fatigue resistance testing",
  "ISO-aligned quality inspection on all batches",
];

const specs = [
  { label: "Rubber Grades",      value: "Multiple" },
  { label: "Hardness Range",     value: "30–90 ShA" },
  { label: "Max Temp (silicone)", value: "200°C" },
  { label: "Supply QC",          value: "ISO Aligned" },
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

/* ── Interactive product card ────────────────────────────────── */
function ProductCard({ step, title, short, desc, tags, Icon, delay }) {
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
                      group-hover:border-amber-400/60 group-hover:shadow-xl group-hover:shadow-amber-900/20
                      transition-all duration-300 overflow-hidden">

        {/* Top accent bar */}
        <div className="absolute top-0 inset-x-0 h-[3px] overflow-hidden rounded-t-2xl">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-300"
            initial={{ x: "-100%" }}
            animate={{ x: hovered ? "0%" : "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="p-7 flex flex-col gap-4 flex-1">
          <div className="flex items-start justify-between gap-3">
            <span className="text-4xl font-display font-bold text-amber-200 leading-none">{step}</span>
            <motion.div
              className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20
                          flex items-center justify-center shrink-0"
              animate={hovered ? { backgroundColor: "rgba(245,158,11,0.2)", borderColor: "rgba(245,158,11,0.4)", scale: 1.08 } : {}}
              transition={{ duration: 0.25 }}
            >
              <motion.div
                animate={hovered ? { rotate: [0, -8, 8, 0], scale: [1, 1.15, 1] } : {}}
                transition={{ duration: 0.45 }}
              >
                <Icon size={20} className="text-amber-500" strokeWidth={1.75} />
              </motion.div>
            </motion.div>
          </div>

          <div>
            <motion.h3
              className="font-display font-bold text-[16px] text-steel-900 mb-1"
              animate={{ color: hovered ? "#92400e" : "#1a2332" }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h3>
            <span className="text-[11px] font-semibold tracking-widest uppercase text-amber-500">{short}</span>
          </div>

          <p className="text-[13px] text-steel-700 leading-relaxed">{desc}</p>

          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-steel-100">
            {tags.map((tag) => (
              <span key={tag}
                className="px-2.5 py-1 rounded-full text-[11px] font-semibold
                           bg-amber-500/10 text-amber-700 border border-amber-500/20">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom shimmer */}
        <div className="absolute bottom-0 inset-x-0 h-[1px] overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"
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

export default function Rubber() {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  return (
    <>
      <PageHero
        tag="Services"
        title="Rubber Components"
        subtitle="Precision rubber parts — gaskets, seals, bushes, vibration dampers, and bonded assemblies — manufactured to your specifications."
        backgroundImage={rubberBanner}
      />

      {/* ── Overview ──────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden section-transition">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full
                        bg-amber-100/50 blur-3xl pointer-events-none -translate-x-1/3 -translate-y-1/3" />

        <div className="container-max section-padding py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Content */}
            <div className="flex flex-col gap-6 order-1">
              <motion.div {...fadeUp(0)}>
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-500 mb-4">
                  <span className="w-6 h-[1.5px] bg-amber-500 rounded-full" />
                  Our Capability
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-steel-900 leading-tight mb-5">
                  <ReplayTextEffect className="text-3xl sm:text-4xl font-display font-bold text-steel-900">
                    Rubber Engineering
                  </ReplayTextEffect>
                  <ReplayTextEffect className="block text-amber-600 mt-1 text-3xl sm:text-4xl font-display font-bold">
                    Under One Roof
                  </ReplayTextEffect>
                </h2>
              </motion.div>

              <motion.p {...fadeUp(0.1)} className="text-steel-700 text-[15px] leading-relaxed">
                Prasad Engineering's rubber division delivers precision rubber components as a
                complementary capability alongside our core aluminium casting operations. Clients
                can source matched rubber seals, bushes, and dampers with their castings — reducing
                vendor dependency and improving assembly compatibility.
              </motion.p>

              {/* Quick spec tiles */}
              <motion.div {...fadeUp(0.14)} className="grid grid-cols-2 gap-3">
                {specs.map(({ label, value }) => (
                  <div key={label}
                    className="px-4 py-3.5 rounded-xl border border-steel-200 bg-amber-50/60
                               hover:border-amber-300 hover:bg-amber-100/60 transition-all duration-200">
                    <p className="text-xl font-display font-bold text-amber-700">{value}</p>
                    <p className="text-[11px] text-steel-600 mt-0.5">{label}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div {...fadeUp(0.20)}>
                <Link to="/contact" id="rubber-cta-top"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                             bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm
                             transition-colors duration-200 shadow-lg shadow-amber-900/20 group">
                  Enquire About Rubber Parts
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            </div>

            {/* Hero image */}
            <motion.div {...fadeUp(0.08)}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl group cursor-pointer order-2"
              >
              <motion.img
                src="/src/assets/rubber.png"
                alt="Rubber components at Prasad Engineering"
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/50 to-transparent" />

              {/* Zoom hint */}
              {/* <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/50 backdrop-blur-sm rounded-full p-4">
                  <ZoomIn size={24} className="text-white" />
                </div>
              </motion.div> */}

              <div className="absolute bottom-5 right-5 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
                <Package size={16} className="text-amber-500" />
                <div>
                  <p className="text-xs font-bold text-steel-900">Custom Profiles</p>
                  <p className="text-[10px] text-steel-600">Per Client Drawing</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ─────────────────────────────────── */}
      <section className="relative bg-[#fafafa] overflow-hidden section-transition">
        <div className="container-max section-padding py-20 relative z-10">
          <motion.div {...fadeUp(0)} className="mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-500 mb-3">
              <span className="w-6 h-[1.5px] bg-amber-500 rounded-full" />
              Products & Facility
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-steel-900">
              Our Rubber Product Range
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

      {/* ── Products ──────────────────────────────────────── */}
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
              Product Range
              <span className="w-6 h-[1.5px] bg-white/70 rounded-full" />
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              What We Manufacture
            </h2>
            <p className="text-white/80 text-[15px] mt-3 leading-relaxed">
              Our rubber product range covers the most common industrial requirements — produced to client specifications and drawings.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {products.map(({ step, title, short, desc, tags, Icon }, i) => (
              <ProductCard key={title} step={step} title={title} short={short}
                desc={desc} tags={tags} Icon={Icon} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities ──────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden section-transition">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full
                        bg-amber-100/50 blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/2" />

        <div className="container-max section-padding py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Stacked image pair */}
            <motion.div {...fadeUp(0)} className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl cursor-pointer"
                onClick={() => setLightboxIdx(1)}>
                <motion.img src="/src/components/images/6.jpg" alt="Rubber moulding"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/40 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-4 w-48 h-36 rounded-2xl overflow-hidden border-4 border-white shadow-xl cursor-pointer"
                onClick={() => setLightboxIdx(2)}>
                <motion.img src="/src/components/images/7.jpeg" alt="Rubber gaskets"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            </motion.div>

            {/* Capabilities */}
            <motion.div {...fadeUp(0.12)}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-500 mb-4">
                <span className="w-6 h-[1.5px] bg-amber-500 rounded-full" />
                Material & Process Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-steel-900 mb-8 leading-tight">
                Engineered to Your Specification
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
                    <CheckCircle2 size={16} className="text-amber-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Single-source CTA ─────────────────────────────── */}
      <section className="relative bg-[#307db5] overflow-hidden section-transition">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a6f9f] via-[#307db5] to-[#265f88]" />
        <div className="container-max section-padding py-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div {...fadeUp(0)}>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                Aluminium Casting +
                <span className="block text-amber-300 mt-1">Rubber, One Supplier</span>
              </h2>
              <p className="text-white/85 text-[15px] mb-8 leading-relaxed">
                Sourcing matched rubber components from the same supplier as your aluminium castings
                means fewer vendors, faster turnaround, better fit tolerance, and simplified procurement.
              </p>
              <Link to="/contact" id="rubber-cta-bottom"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                           bg-white text-brand-700 font-bold text-sm
                           hover:bg-amber-50 transition-colors duration-200 shadow-xl group">
                Discuss Your Requirements
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>

            <motion.div {...fadeUp(0.1)} className="grid grid-cols-2 gap-4">
              {[
                { label: "Fewer Suppliers", value: "1 Source" },
                { label: "Rubber Grades",   value: "Multiple" },
                { label: "Custom Profiles", value: "Per Drawing" },
                { label: "ISO Compliant",   value: "All Batches" },
              ].map(({ label, value }) => (
                <motion.div key={label}
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center text-center p-5 rounded-2xl
                             border border-white/70 bg-white/95 cursor-default">
                  <p className="text-2xl font-display font-bold text-amber-600">{value}</p>
                  <p className="text-[12px] text-steel-600 mt-1">{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
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
