import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { BriefcaseBusiness, Building2, Sparkles } from "lucide-react";
import PageHero from "../../components/ui/PageHero";
import { TextEffect } from "../../components/ui/text-effect";
import banner7 from "../../assets/banner7.jpg";

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

const leaders = [
  {
    initials: "PA",
    name: "Parashuram Chougule",
    role: "Founder of Prasad Patterns",
    tenure: "1987 Foundation",
    bio: "Prasad Engineering was originally founded as Prasad Patterns in 1987 by Parashuram Chougule. His entrepreneurial vision and dedication established the early manufacturing foundation and industry relationships for the company. Today he is retired and no longer involved in day-to-day operations.",
    highlights: [
      "Founded Prasad Patterns in 1987",
      "Established the initial aluminium casting vision",
      "Built the earliest manufacturing and customer base",
    ],
    delay: 0.02,
  },
  {
    initials: "PC",
    name: "Prasad Chougule",
    role: "Founder & Chief Executive Officer",
    tenure: "1994 Re-establishment",
   
    bio: "After early uncertainties, Prasad Patterns was rebuilt as Prasad Engineering in 1994 by Prasad Chougule. Through determination and long-term vision, he played the primary role in strengthening operations, manufacturing capability, customer trust, and market reputation.",
    highlights: [
      "Led company re-establishment in 1994",
      "Drove long-term growth and operational stability",
      "Expanded capabilities and strengthened customer partnerships",
    ],
    delay: 0.1,
  },
  {
    initials: "PR",
    name: "Praneet Chougule",
    role: "Managing Director & Chief Operating Officer",
    tenure: "Current Operations",
    bio: "Praneet Chougule oversees operations, production management, and strategic growth. His focus is on improving operational performance while maintaining high standards of quality, efficiency, and reliability across day-to-day manufacturing.",
    highlights: [
      "Leads day-to-day operations and production",
      "Focuses on quality, efficiency, and reliability",
      "Supports continued growth and process improvement",
    ],
    delay: 0.18,
  },
];

export default function Founders() {
  const [activeLeader, setActiveLeader] = useState(leaders[1].name);
  const selectedLeader = leaders.find((leader) => leader.name === activeLeader) ?? leaders[0];

  return (
    <>
      <PageHero
        tag="Leadership"
        title="Founders & Leadership"
        backgroundImage={banner7}
        subtitle="Leadership rooted in the 1987 origins of Prasad Patterns and the continued growth of Prasad Engineering."
      />

      <section className="relative bg-white overflow-hidden section-transition">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-200/60 blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"
        />

        <div className="container-max section-padding py-20 lg:py-28 relative z-10 space-y-8">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {leaders.map(({ initials, name, role, bio, highlights, tenure, delay }) => {
              const isActive = activeLeader === name;

              return (
                <motion.article
                  key={name}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  onMouseEnter={() => setActiveLeader(name)}
                  onFocusCapture={() => setActiveLeader(name)}
                  onClick={() => setActiveLeader(name)}
                  className={`group relative flex h-full cursor-pointer flex-col rounded-2xl overflow-hidden border bg-white transition-all duration-300 ${
                    isActive
                      ? "border-brand-400 shadow-xl shadow-brand-200/70"
                      : "border-steel-200/90 hover:border-brand-300/80 hover:shadow-lg hover:shadow-brand-100/70"
                  }`}
                >
                  <motion.div
                    className="h-1 w-full bg-gradient-to-r from-brand-600 to-brand-400"
                    animate={{ opacity: isActive ? 1 : 0.6 }}
                    transition={{ duration: 0.25 }}
                  />

                  <motion.div
                    className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand-100/80 blur-2xl pointer-events-none"
                    animate={{ scale: isActive ? 1.1 : 0.85, opacity: isActive ? 0.9 : 0.5 }}
                    transition={{ duration: 0.35 }}
                  />

                  <div className="p-7 flex flex-col gap-5 flex-1 relative z-10">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-700">
                        <Building2 size={12} />
                        {tenure}
                      </span>
                      
                        
                      
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-brand-500/15 border border-brand-500/30 flex items-center justify-center shrink-0">
                        <span className="font-display font-bold text-xl text-brand-700">{initials}</span>
                      </div>
                      <div>
                        <h2 className="font-display font-bold text-lg text-steel-900 leading-tight">{name}</h2>
                        <p className="text-sm text-brand-700 font-medium mt-0.5">{role}</p>
                      </div>
                    </div>

                    <p className="text-steel-700 text-[14px] leading-relaxed">{bio}</p>

                    <ul className="space-y-2.5 mt-auto">
                      {highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-[13px] text-steel-700">
                          <Sparkles size={13} className="text-brand-500 mt-0.5 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedLeader.name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28 }}
              className="rounded-2xl border border-brand-200 bg-brand-50/80 px-6 py-5 lg:px-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 mb-2">
                Focus Profile
              </p>
              <h3 className="font-display font-bold text-xl text-steel-900">{selectedLeader.name}</h3>
              <p className="text-sm font-medium text-brand-700 mt-1">{selectedLeader.role}</p>
              <p className="text-[14px] text-steel-700 leading-relaxed mt-3">{selectedLeader.bio}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="relative bg-[#307db5] overflow-hidden section-transition">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a6f9f]/80 to-[#307db5]" />

        <div className="container-max section-padding py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
              Guided by Experience,
              <ReplayTextEffect
                as="span"
                per="word"
                preset="slide"
                delay={0.2}
                className="block text-gradient"
              >
                Driven by Excellence
              </ReplayTextEffect>
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