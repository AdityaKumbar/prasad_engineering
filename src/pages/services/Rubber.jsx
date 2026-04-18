import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import PageHero from "../../components/ui/PageHero";
import rubberImg1 from "../../components/images/7.jpeg";
import rubberImg2 from "../../components/images/8.jpg";
import rubberImg3 from "../../components/images/9.jpg";

const products = [
  {
    title: "Rubber Moulded Components",
    image: rubberImg1,
    desc: "Precision-moulded rubber parts engineered for stable performance across industrial, automotive, and engineering applications.",
  },
  {
    title: "Gaskets & Seals",
    image: rubberImg2,
    desc: "Custom sealing components designed for leak-proof joints, pressure retention, and reliable operation in demanding service conditions.",
  },
  {
    title: "Bushes & Rubber Mounts",
    image: rubberImg3,
    desc: "Vibration-isolating bushes and mounts that improve system stability, reduce wear, and enhance equipment life.",
  },
  {
    title: "Vibration Dampers",
    image: rubberImg1,
    desc: "Engineered dampers for shock absorption and vibration control in machinery, rotating equipment, and transport assemblies.",
  },
  {
    title: "Custom Rubber Parts",
    image: rubberImg2,
    desc: "Tailor-made components manufactured to customer drawings, dimensions, and performance requirements.",
  },
  {
    title: "Metal-Rubber Integration Support",
    image: rubberImg3,
    desc: "Complementary rubber component capability to support customers requiring both aluminium and rubber parts in one supply chain.",
  },
];

const compounds = ["NBR", "EPDM", "Silicone", "Viton (FKM)", "Neoprene", "Natural Rubber", "SBR", "PU"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Rubber() {
  return (
    <>
      <PageHero
        tag="Services"
        title="Rubber Industry Services"
        subtitle="Precision rubber components for sealing, vibration control, and integrated metal-rubber requirements in industrial applications."
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
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full
                        bg-brand-700/15 blur-3xl pointer-events-none -translate-x-1/3 -translate-y-1/3"
        />

        <div className="container-max section-padding py-20 lg:py-28 relative z-10">
          <motion.div {...fadeUp(0)} className="max-w-2xl mb-14">
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold
                             tracking-widest uppercase text-brand-400 mb-4"
            >
              <span className="w-6 h-[1.5px] bg-brand-400 rounded-full" />
              Expanded Capability
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight">
              Rubber <span className="text-gradient">Products</span>
            </h2>
            <p className="mt-4 text-steel-300 text-[15px] leading-relaxed">
              As an extended in-house capability, our rubber component services are built to customer drawings
              and quality requirements, helping reduce vendor dependency while improving compatibility in final
              assemblies.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(({ title, image, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group p-6 rounded-2xl bg-surface-2 border border-white/[0.07]
                           hover:border-brand-500/30 hover:bg-surface-3 transition-all duration-300"
              >
                <img
                  src={image}
                  alt={title}
                  className="h-48 sm:h-52 w-full rounded-xl object-cover border border-white/[0.08] mb-4"
                  width={952}
                  height={1600}
                  loading="lazy"
                />
                <h3 className="font-display font-bold text-[15px] text-white mb-2">{title}</h3>
                <p className="text-[13px] text-steel-400 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-surface-2 overflow-hidden">
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full
                        bg-brand-800/20 blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3"
        />

        <div className="container-max section-padding py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <motion.div {...fadeUp(0)}>
                <h2 className="text-3xl font-display font-bold text-white mb-4">Rubber Compounds</h2>
                <p className="text-steel-300 text-[15px] leading-relaxed mb-6">
                  We process a wide range of rubber compounds to meet varied temperature,
                  chemical resistance, and mechanical performance requirements.
                </p>
              </motion.div>
              <motion.div {...fadeUp(0.1)} className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-xl">
                {compounds.map((c, i) => (
                  <motion.span
                    key={c}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                    className="px-3 py-1.5 rounded-lg text-center text-xs font-semibold
                               bg-brand-500/10 border border-brand-500/20 text-brand-300"
                  >
                    {c}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <motion.div {...fadeUp(0.1)} className="space-y-6">
              <div className="rounded-2xl border border-white/[0.08] bg-surface overflow-hidden">
                <div className="px-6 py-4 border-b border-white/[0.07] bg-brand-500/5">
                  <h3 className="font-display font-bold text-white">Applications</h3>
                </div>
                <div className="p-6 space-y-3">
                  {[
                    "Sealing and pressure-control applications",
                    "Vibration and shock-control systems",
                    "Industrial machinery and pump assemblies",
                    "Automotive and mobility components",
                    "Electrical and equipment enclosures",
                    "Integrated aluminium-rubber component needs",
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
                id="rubber-cta"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl
                           bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm
                           transition-colors duration-200 shadow-lg shadow-brand-900/30 group"
              >
                Discuss Your Requirements
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

