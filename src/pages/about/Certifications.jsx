import { motion } from "framer-motion";
import PageHero from "../../components/ui/PageHero";
import { Award, ShieldCheck, ClipboardCheck, CheckCircle2 } from "lucide-react";

const certs = [
  {
    Icon: Award,
    title: "ISO Certified Manufacturing",
    badge: "ISO Certified",
    desc: "Prasad Engineering is an ISO-certified manufacturing unit, adhering to internationally recognised quality management standards across all production processes — from raw material procurement to final inspection.",
    points: [
      "Structured quality management system",
      "Documented process controls",
      "Regular internal and external audits",
      "Non-conformance tracking and resolution",
    ],
    delay: 0.05,
  },
  {
    Icon: ShieldCheck,
    title: "Quality Assurance Standards",
    badge: "QA Certified",
    desc: "Every component manufactured at Prasad Engineering undergoes rigorous quality assurance checks including dimensional inspection, visual verification, and material testing — ensuring zero-defect delivery to clients.",
    points: [
      "Dimensional inspection on all components",
      "Material grade verification",
      "Surface quality and finish checks",
      "First Article Inspection (FAI) on new tools",
    ],
    delay: 0.12,
  },
  {
    Icon: ClipboardCheck,
    title: "Process & Documentation Control",
    badge: "Process Control",
    desc: "We maintain strict documentation of every manufacturing process, including routing cards, inspection records, and traceability logs — enabling full audit trails and consistent output quality.",
    points: [
      "Route cards and process sheets",
      "Material traceability records",
      "Customer-specific quality plans",
      "Continuous improvement records",
    ],
    delay: 0.19,
  },
];

export default function Certifications() {
  return (
    <>
      <PageHero
        tag="Certifications"
        title="Quality & Certifications"
        subtitle="Our commitment to quality is backed by internationally recognised certifications and rigorous process controls."
      />

      {/* ── Cert cards ───────────────────────────── */}
      <section className="relative bg-surface overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container-max section-padding py-20 lg:py-28 relative z-10">

          {/* Badge highlight row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-14"
          >
            {["ISO Certified", "QA Standards", "Process Control", "100% Inspection"].map((b) => (
              <span
                key={b}
                className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider
                           bg-brand-500/10 border border-brand-500/25 text-brand-300 uppercase"
              >
                {b}
              </span>
            ))}
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {certs.map(({ Icon, title, badge, desc, points, delay }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col rounded-2xl overflow-hidden
                           border border-white/[0.08] bg-surface-2
                           hover:border-brand-500/30 transition-all duration-300"
              >
                {/* Accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-brand-600 to-brand-400" />

                <div className="p-7 flex flex-col gap-5 flex-1">
                  {/* Icon + badge */}
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20
                                    flex items-center justify-center">
                      <Icon size={22} className="text-brand-400" strokeWidth={1.75} />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold
                                     tracking-widest uppercase bg-brand-500/10
                                     border border-brand-500/20 text-brand-400">
                      {badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-[17px] text-white leading-snug">
                    {title}
                  </h3>

                  <p className="text-steel-400 text-[13px] leading-relaxed">{desc}</p>

                  {/* Points */}
                  <ul className="space-y-2 mt-auto pt-2 border-t border-white/[0.05]">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-[13px] text-steel-400">
                        <CheckCircle2 size={13} className="text-brand-500 mt-0.5 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center text-[13px] text-steel-500"
          >
            Certificate documentation available on request.{" "}
            <a href="/contact" className="text-brand-400 hover:text-brand-300 transition-colors">
              Contact us
            </a>{" "}
            for details.
          </motion.p>
        </div>
      </section>
    </>
  );
}
