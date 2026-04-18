import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, FlaskConical } from "lucide-react";
import PageHero from "../../components/ui/PageHero";
import castingImg1 from "../../components/images/1.jpg";
import castingImg2 from "../../components/images/2.jpg";
import castingImg3 from "../../components/images/3.jpg";
import castingImg4 from "../../components/images/4.jpg";
import castingImg5 from "../../components/images/5.jpg";
import castingImg6 from "../../components/images/6.jpg";

const processes = [
  {
    title: "Gravity Die Casting (GDC)",
    image: castingImg1,
    desc: "High-quality aluminium castings using permanent metal moulds with gravity filling. Ideal for medium-to-high production volumes with excellent dimensional accuracy.",
  },
  {
    title: "High Pressure Die Casting (HPDC)",
    image: castingImg2,
    desc: "Aluminium injected into steel moulds under high pressure. Delivers complex thin-wall components with tight tolerances and superior surface finish.",
  },
  {
    title: "Sand Casting",
    image: castingImg3,
    desc: "Flexible process for complex shapes and large components. Suitable for low-to-medium volumes, prototypes, and intricate geometry.",
  },
  {
    title: "Centrifugal Casting",
    image: castingImg4,
    desc: "Rotating mould process producing cylindrical parts with high density, uniformity, and mechanical strength. Ideal for bushes, rings, and sleeves.",
  },
  {
    title: "CNC Machining (VMC & Turning)",
    image: castingImg5,
    desc: "In-house Vertical Machining Centres and CNC turning deliver ready-to-assemble components with precision tolerances directly from casting.",
  },
  {
    title: "Quality Inspection",
    image: castingImg6,
    desc: "Dimensional verification, visual inspection, and material checks at every stage, backed by ISO-certified quality systems and traceability records.",
  },
];

const alloys = [
  "LM2", "LM4", "LM6", "LM9", "LM13", "LM21", "LM24", "LM25",
  "A380", "A383", "A384", "ADC12", "EN AC-46000", "EN AC-43400",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function AluminiumCasting() {
  return (
    <>
      <PageHero
        tag="Services"
        title="Aluminium Casting"
        subtitle="Precision aluminium casting using multiple technologies engineered for strength, durability, and dimensional accuracy since 1989."
      />

      <section className="relative bg-surface overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full
                        bg-brand-700/15 blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"
        />

        <div className="container-max section-padding py-20 lg:py-28 relative z-10">
          <motion.div {...fadeUp(0)} className="max-w-2xl mb-14">
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold
                             tracking-widest uppercase text-brand-400 mb-4"
            >
              <span className="w-6 h-[1.5px] bg-brand-400 rounded-full" />
              Core Capability Since 1989
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight">
              Our Casting <span className="text-gradient">Process</span>
            </h2>
            <p className="mt-4 text-steel-300 text-[15px] leading-relaxed">
              We operate multiple casting technologies under one roof, giving clients complete
              flexibility across volume, geometry, alloy, and tolerance requirements.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processes.map(({ title, image, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col gap-3 p-6 rounded-2xl
                           bg-surface-2 border border-white/[0.07]
                           hover:border-brand-500/30 transition-all duration-300"
              >
                <div
                  className="absolute top-0 inset-x-0 h-[1.5px] rounded-t-2xl
                                bg-gradient-to-r from-brand-500/0 via-brand-500/60 to-brand-500/0
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <img
                  src={image}
                  alt={title}
                  className="h-48 sm:h-52 w-full rounded-xl object-cover border border-white/[0.08]"
                  width={1280}
                  height={960}
                  loading="lazy"
                />
                <div>
                  <h3 className="font-display font-bold text-[15px] text-white mb-2">{title}</h3>
                  <p className="text-[13px] text-steel-400 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-surface-2 overflow-hidden">
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full
                        bg-brand-800/20 blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3"
        />

        <div className="container-max section-padding py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <motion.div {...fadeUp(0)}>
                <span
                  className="inline-flex items-center gap-2 text-xs font-semibold
                                 tracking-widest uppercase text-brand-400 mb-4"
                >
                  <FlaskConical size={12} />
                  64+ Alloys Capability
                </span>
                <h2 className="text-3xl font-display font-bold text-white mb-4">Alloy Range</h2>
                <p className="text-steel-300 text-[15px] leading-relaxed mb-6">
                  We work with 64+ aluminium alloy grades from standard LM-series to EN and ASTM
                  grades to meet specific mechanical, thermal, and corrosion requirements.
                </p>
              </motion.div>

              <motion.div {...fadeUp(0.1)} className="flex flex-wrap gap-2">
                {alloys.map((a, i) => (
                  <motion.span
                    key={a}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.04 }}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold
                               bg-brand-500/10 border border-brand-500/20 text-brand-300"
                  >
                    {a}
                  </motion.span>
                ))}
                <span
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold
                                 bg-white/5 border border-white/10 text-steel-400"
                >
                  + 50 more grades
                </span>
              </motion.div>
            </div>

            <motion.div {...fadeUp(0.1)} className="space-y-6">
              <div className="rounded-2xl border border-white/[0.08] bg-surface overflow-hidden">
                <div className="px-6 py-4 border-b border-white/[0.07] bg-brand-500/5">
                  <h3 className="font-display font-bold text-white">Key Applications</h3>
                </div>
                <div className="p-6 space-y-3">
                  {[
                    "Automotive engine and transmission parts",
                    "Pump housings and impellers",
                    "Electrical motor housings",
                    "Agricultural machinery components",
                    "Industrial gearbox and valve bodies",
                    "General engineering components",
                  ].map((app) => (
                    <div key={app} className="flex items-center gap-3 text-[14px] text-steel-300">
                      <CheckCircle2 size={14} className="text-brand-500 shrink-0" />
                      {app}
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                id="aluminium-cta"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl
                           bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm
                           transition-colors duration-200 shadow-lg shadow-brand-900/30 group"
              >
                Request a Sample
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

