import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Car, Droplets, Zap, Tractor, Factory, Settings2, ArrowRight
} from "lucide-react";
import PageHero from "../components/ui/PageHero";

const industries = [
  {
    Icon: Car,
    title: "Automotive Industry",
    desc: "Precision aluminium castings for engine blocks, transmission housings, brackets, and structural components requiring strict dimensional tolerances.",
    products: ["Engine components", "Gearbox housings", "Brackets & mounts", "Suspension parts"],
    delay: 0,
  },
  {
    Icon: Droplets,
    title: "Pump Manufacturing",
    desc: "Pump casings, impellers, volutes, and bearing housings cast in high-strength aluminium alloys for water, chemical, and industrial fluid applications.",
    products: ["Pump casings", "Impellers", "Volutes", "Bearing housings"],
    delay: 0.07,
  },
  {
    Icon: Zap,
    title: "Electrical Components",
    desc: "Motor housings, terminal boxes, junction enclosures, and heat sinks manufactured to exacting standards for the electrical and electronics sector.",
    products: ["Motor housings", "Terminal boxes", "Junction enclosures", "Heat sinks"],
    delay: 0.14,
  },
  {
    Icon: Tractor,
    title: "Agricultural Machinery",
    desc: "Durable aluminium and rubber components for tractors, irrigation systems, and agricultural equipment operating in demanding field conditions.",
    products: ["Tractor components", "Irrigation fittings", "Gearbox parts", "Linkage brackets"],
    delay: 0.21,
  },
  {
    Icon: Factory,
    title: "Industrial Equipment",
    desc: "Robust castings for compressors, valves, gearboxes, hydraulic systems, and general industrial equipment across varied manufacturing sectors.",
    products: ["Compressor parts", "Valve bodies", "Gearbox housings", "Hydraulic components"],
    delay: 0.28,
  },
  {
    Icon: Settings2,
    title: "Mechanical Engineering",
    desc: "Custom-engineered aluminium and rubber parts for general mechanical applications, tooling components, and specialised engineering assemblies.",
    products: ["Custom components", "Tooling parts", "Engineering assemblies", "Prototypes"],
    delay: 0.35,
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Industries() {
  return (
    <>
      <PageHero
        tag="Industries"
        title="Industries We Serve"
        subtitle="916+ companies across 6 key industries trust Prasad Engineering for precision aluminium and rubber components."
      />

      {/* ── Industry cards ────────────────────────── */}
      <section className="relative bg-surface overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full
                        bg-brand-700/10 blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />

        <div className="container-max section-padding py-20 lg:py-28 relative z-10">

          {/* Header */}
          <motion.div {...fadeUp(0)} className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-semibold
                             tracking-widest uppercase text-brand-400 mb-3">
              <span className="w-6 h-[1.5px] bg-brand-400 rounded-full" />
              Sector Coverage
              <span className="w-6 h-[1.5px] bg-brand-400 rounded-full" />
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Built for Many,{" "}
              <span className="text-gradient">Trusted by All</span>
            </h2>
          </motion.div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map(({ Icon, title, desc, products, delay }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col gap-5 p-7 rounded-2xl
                           bg-surface-2 border border-white/[0.07]
                           hover:border-brand-500/30 hover:bg-surface-3
                           transition-all duration-300"
              >
                {/* Top hover accent */}
                <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-2xl
                                bg-gradient-to-r from-brand-500/0 via-brand-500 to-brand-500/0
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20
                                flex items-center justify-center
                                group-hover:bg-brand-500/20 group-hover:border-brand-500/40
                                transition-all duration-300">
                  <Icon size={22} className="text-brand-400" strokeWidth={1.75} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-display font-bold text-[16px] text-white mb-2">{title}</h3>
                  <p className="text-[13px] text-steel-400 leading-relaxed">{desc}</p>
                </div>

                {/* Product tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/[0.05]">
                  {products.map((p) => (
                    <span key={p}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium
                                 bg-white/5 border border-white/[0.07] text-steel-400">
                      {p}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div {...fadeUp(0.4)} className="flex justify-center mt-12">
            <Link
              to="/contact"
              id="industries-cta"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                         bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm
                         transition-colors duration-200 shadow-lg shadow-brand-900/30 group"
            >
              Discuss Your Industry Requirements
              <ArrowRight size={15}
                className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
