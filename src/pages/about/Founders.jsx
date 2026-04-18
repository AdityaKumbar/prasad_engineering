import { motion } from "framer-motion";
import PageHero from "../../components/ui/PageHero";

const leaders = [
  {
    initials: "PC",
    name: "Prasad Chougule",
    role: "Founder & Chief Executive Officer",
    bio: "Prasad Engineering was rebuilt and established in its current form in 1994 by Prasad Chougule after the early years of Prasad Patterns (founded in 1987 by Parashuram Chougule). Through sustained effort and long-term vision, he strengthened the company's manufacturing capability, client trust, and industry reputation.",
    highlights: [
      "Led re-establishment and growth from 1994 onward",
      "Scaled operations to serve 916+ companies",
      "Built a quality-first aluminium casting foundation",
    ],
    delay: 0.05,
  },
  {
    initials: "PR",
    name: "Praneet Chougule",
    role: "Managing Director & Chief Operating Officer",
    bio: "Praneet Chougule leads day-to-day operations, production planning, and strategic growth. His focus is on manufacturing efficiency, process reliability, and maintaining high standards of quality across casting, machining, and integrated component execution.",
    highlights: [
      "Leads operations and production management",
      "Drives process discipline and throughput improvement",
      "Supports continuous capability expansion",
    ],
    delay: 0.15,
  },
];

export default function Founders() {
  return (
    <>
      <PageHero
        tag="Leadership"
        title="Founders & Leadership"
        subtitle="Leadership rooted in the 1987 origins of Prasad Patterns and the continued growth of Prasad Engineering."
      />

      <section className="relative bg-surface overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
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

        <div
          className="container-max section-padding py-20 lg:py-28 relative z-10
                        grid md:grid-cols-2 gap-8"
        >
          {leaders.map(({ initials, name, role, bio, highlights, delay }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col rounded-2xl overflow-hidden
                         border border-white/[0.08] bg-surface-2
                         hover:border-brand-500/30 transition-all duration-300"
            >
              <div className="h-1 w-full bg-gradient-to-r from-brand-600 to-brand-400" />

              <div className="p-8 flex flex-col gap-6 flex-1">
                <div className="flex items-center gap-5">
                  <div
                    className="w-16 h-16 rounded-2xl bg-brand-500/15 border border-brand-500/30
                                  flex items-center justify-center shrink-0"
                  >
                    <span className="font-display font-bold text-xl text-brand-300">{initials}</span>
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-lg text-white leading-tight">{name}</h2>
                    <p className="text-sm text-brand-400 font-medium mt-0.5">{role}</p>
                  </div>
                </div>

                <p className="text-steel-300 text-[15px] leading-relaxed">{bio}</p>

                <ul className="space-y-2.5">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-[13px] text-steel-400">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative bg-surface-2 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/60 to-surface-2" />

        <div className="container-max section-padding py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
              Guided by Experience, <span className="text-gradient">Driven by Excellence</span>
            </h3>
            <p className="text-steel-300 text-[15px] leading-relaxed">
              The leadership at Prasad Engineering believes that great manufacturing is built on
              trust, consistency, and a relentless commitment to client success. Every decision
              from technology investment to team training is rooted in delivering lasting value.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
