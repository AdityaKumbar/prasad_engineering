import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Car,
  Droplets,
  Factory,
  Settings2,
  Tractor,
  Zap,
} from "lucide-react";
import PageHero from "../components/ui/PageHero";
import { TextEffect } from "../components/ui/text-effect";
import banner6 from "../assets/banner6.jpg";

function ReplayTextEffect({ children, ...props }) {
  const ref = useRef(null);
  const [runKey, setRunKey] = useState(0);
  const isInView = useInView(ref, { once: false, amount: 0.55, margin: "-10% 0px -10% 0px" });
  useEffect(() => { if (isInView) setRunKey((k) => k + 1); }, [isInView]);
  return (
    <span ref={ref} className="block">
      {isInView ? (
        <TextEffect key={runKey} {...props} trigger>{children}</TextEffect>
      ) : (
        <span className={props.className} style={{ opacity: 0 }} aria-hidden="true">{children}</span>
      )}
    </span>
  );
}

const industries = [
  {
    Icon: Car,
    title: "Automotive Industry",
    image: "/src/assets/automotive.jpg",
    tag: "Automotive",
    desc: "Precision aluminium components for automotive applications requiring durability and performance.",
    products: ["Engine components", "Gearbox housings", "Brackets and mounts", "Suspension parts"],
  },
  {
    Icon: Droplets,
    title: "Pump Manufacturing",
    image: "/src/assets/pump.png",
    tag: "Fluid Systems",
    desc: "Corrosion-resistant castings for pump housings, impellers, and fluid handling systems.",
    products: ["Pump casings", "Impellers", "Volutes", "Bearing housings"],
  },
  {
    Icon: Zap,
    title: "Electrical Components",
    image: "/src/assets/electrical.jpg",
    tag: "Electrical",
    desc: "Dimensionally accurate housings and enclosures for electrical and switchgear applications.",
    products: ["Motor housings", "Terminal boxes", "Junction enclosures", "Heat sinks"],
  },
  {
    Icon: Tractor,
    title: "Agricultural Machinery",
    image: "/src/assets/agri.png",
    tag: "Agri-Tech",
    desc: "Robust castings engineered for heavy-duty agricultural equipment and field machinery.",
    products: ["Tractor components", "Irrigation fittings", "Gearbox parts", "Linkage brackets"],
  },
  {
    Icon: Factory,
    title: "Industrial Equipment",
    image: "/src/assets/industry_equipments.png",
    tag: "Heavy Industry",
    desc: "High-strength components for a wide range of industrial machinery and equipment.",
    products: ["Compressor parts", "Valve bodies", "Gearbox housings", "Hydraulic components"],
  },
  {
    Icon: Settings2,
    title: "Mechanical Engineering",
    image: "/src/assets/mechanical_tools.png",
    tag: "Engineering",
    desc: "Custom engineered parts for mechanical assemblies, jigs, fixtures, and tooling.",
    products: ["Custom components", "Tooling parts", "Engineering assemblies", "Prototypes"],
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Industries() {
  return (
    <>
      <PageHero
        tag="Industries"
        title="Industries We Serve"
        subtitle="916+ companies across key sectors trust Prasad Engineering for precision aluminium and rubber components."
        backgroundImage={banner6}
      />

      <section className="relative bg-white overflow-hidden section-transition">
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        <div className="absolute top-1/2 right-0 h-[540px] w-[540px] rounded-full bg-brand-200/40 blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />

        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-400 mb-3">
              <span className="h-[1.5px] w-6 rounded-full bg-brand-400" />
              Sector Coverage
              <span className="h-[1.5px] w-6 rounded-full bg-brand-400" />
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-steel-900">
              <ReplayTextEffect
                as="span"
                per="word"
                preset="slide"
                delay={0.15}
                className="text-steel-900"
              >
                Built for Many, Trusted by All
              </ReplayTextEffect>
            </h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {industries.map(({ Icon, title, image, tag, desc, products }) => (
              <motion.article
                key={title}
                variants={cardVariant}
                whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
                className="group relative overflow-hidden rounded-2xl border border-steel-200 bg-white
                           shadow-sm hover:shadow-xl hover:shadow-brand-200/50
                           hover:border-brand-400/40 transition-shadow duration-300 cursor-default"
              >
                {/* Top border glow on hover */}
                <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-2xl z-10
                                bg-gradient-to-r from-brand-500/0 via-brand-500 to-brand-500/0
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <motion.img
                    src={image}
                    alt={`${title} manufacturing`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  />
                  {/* Gradient overlay — deepens on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2940]/65 via-[#0f2940]/15 to-transparent
                                  group-hover:from-[#0f2940]/80 group-hover:via-[#0f2940]/30 transition-all duration-400" />

                  {/* Tag badge */}
                  <span className="absolute top-3 left-3 inline-flex rounded-full bg-white/90 px-3 py-1
                                   text-[10px] font-bold uppercase tracking-wider text-brand-700
                                   group-hover:bg-white transition-colors duration-200">
                    {tag}
                  </span>


                </div>

                {/* Card body */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-200
                                 bg-brand-50 text-brand-600 group-hover:bg-brand-500 group-hover:border-brand-500
                                 group-hover:text-white transition-all duration-300">
                    <Icon size={18} strokeWidth={1.9} />
                  </div>
                    <h3 className="font-display font-bold text-[15px] sm:text-base text-steel-900
                                   group-hover:text-brand-700 transition-colors duration-200">
                      {title}
                    </h3>
                  </div>

                  <p className="text-[13px] text-steel-700 leading-relaxed">{desc}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5 pt-4 border-t border-steel-100">
                    {products.map((product, i) => (
                      <motion.span
                        key={product}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.05 + i * 0.05 }}
                        className="rounded-md border border-brand-100 bg-brand-50 px-2.5 py-1
                                   text-[11px] font-medium text-brand-700
                                   group-hover:border-brand-300 group-hover:bg-brand-100
                                   transition-colors duration-200"
                      >
                        {product}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-12 flex justify-center">
            <Link
              to="/contact"
              id="industries-cta"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-7 py-3.5
                         text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-500
                         shadow-lg shadow-brand-900/20 group"
            >
              Discuss Your Industry Requirements
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
