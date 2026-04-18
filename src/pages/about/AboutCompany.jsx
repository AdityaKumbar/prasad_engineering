import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin, Calendar, Award, Users, CheckCircle2, ArrowRight, Target, Eye
} from "lucide-react";
import PageHero from "../../components/ui/PageHero";

/* ── Quick-facts ─────────────────────────────── */
const facts = [
  { label: "Founded",           value: "1989",               accent: true  },
  { label: "Location",          value: "Belagavi, Karnataka", accent: false },
  { label: "Certification",     value: "ISO Certified",       accent: true  },
  { label: "Companies Served",  value: "916+",               accent: true  },
  { label: "Experience",        value: "35+ Years",          accent: false },
  { label: "Alloys Capability", value: "64+ Grades",         accent: false },
];

/* ── Animation helpers ───────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function AboutCompany() {
  return (
    <>
      <PageHero
        tag="About Us"
        title="Our Story"
        subtitle="Three decades of excellence in precision aluminium casting from the heart of Karnataka."
      />

      {/* ── History & Facts ─────────────────────────── */}
      <section className="relative bg-surface overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full
                        bg-brand-700/15 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/3" />

        <div className="container-max section-padding py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* LEFT — narrative */}
            <div>
              <motion.div {...fadeUp(0)}>
                <span className="inline-flex items-center gap-2 text-xs font-semibold
                                 tracking-widest uppercase text-brand-400 mb-4">
                  <span className="w-6 h-[1.5px] bg-brand-400 rounded-full" />
                  35+ Years of Manufacturing Excellence
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white
                               leading-tight mb-6">
                  From a Small Workshop to a{" "}
                  <span className="text-gradient">Trusted Name</span>
                </h2>
              </motion.div>

              <div className="space-y-5 text-steel-300 text-[15px] leading-relaxed">
                <motion.p {...fadeUp(0.08)}>
                  Founded in <strong className="text-white">1989</strong>, Prasad Engineering
                  began as a small workshop in Belagavi with a vision to deliver high-quality
                  aluminium components to Indian industry. Over three and a half decades, we have
                  grown into a full-fledged ISO-certified manufacturing unit — serving over{" "}
                  <strong className="text-white">916 companies</strong> across India.
                </motion.p>

                <motion.p {...fadeUp(0.14)}>
                  Our core expertise lies in aluminium casting — gravity die casting, high-pressure
                  die casting (HPDC), sand casting, and centrifugal casting — delivering
                  precision-engineered components to automotive, electrical, and industrial sectors.
                  With the ability to work across{" "}
                  <strong className="text-white">64+ aluminium alloys</strong>, we cater to the
                  most demanding mechanical and thermal specifications.
                </motion.p>

                <motion.p {...fadeUp(0.20)}>
                  In recent years, we have expanded our capabilities to include{" "}
                  <strong className="text-white">in-house VMC and CNC turning</strong> as well as
                  rubber component manufacturing — offering complete engineering solutions under
                  one roof and reducing vendor dependency for our clients.
                </motion.p>

                <motion.p {...fadeUp(0.26)}>
                  Quality, reliability, and long-term partnerships define who we are.
                </motion.p>
              </div>

              <motion.div {...fadeUp(0.32)} className="mt-8">
                <Link
                  to="/contact"
                  id="about-company-cta"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                             bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm
                             transition-colors duration-200 shadow-lg shadow-brand-900/30 group"
                >
                  Get in Touch
                  <ArrowRight size={15}
                    className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            </div>

            {/* RIGHT — quick-facts card */}
            <motion.div {...fadeUp(0.1)}>
              <div className="rounded-2xl border border-white/[0.08] bg-surface-2
                              overflow-hidden shadow-xl">
                {/* Card header */}
                <div className="px-7 py-5 border-b border-white/[0.07] bg-brand-500/5">
                  <h3 className="font-display font-bold text-white text-lg">
                    Company at a Glance
                  </h3>
                  <p className="text-[13px] text-steel-400 mt-0.5">
                    Key details about Prasad Engineering
                  </p>
                </div>

                {/* Fact rows */}
                <div className="divide-y divide-white/[0.05]">
                  {facts.map(({ label, value, accent }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
                      className="flex items-center justify-between px-7 py-4"
                    >
                      <span className="text-sm text-steel-400">{label}</span>
                      <span className={`text-sm font-semibold ${
                        accent ? "text-brand-300" : "text-white"
                      }`}>
                        {value}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* ISO badge footer */}
                <div className="px-7 py-4 bg-brand-500/5 border-t border-white/[0.07]
                                flex items-center gap-2">
                  <Award size={14} className="text-brand-400" />
                  <span className="text-xs text-steel-400 font-medium">
                    ISO Certified Manufacturer · Est. 1989
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ────────────────────────── */}
      <section className="relative bg-surface-2 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full
                        bg-brand-800/20 blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3" />

        <div className="container-max section-padding py-20 lg:py-28 relative z-10">

          {/* Section tag */}
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold
                             tracking-widest uppercase text-brand-400 mb-3">
              <span className="w-6 h-[1.5px] bg-brand-400 rounded-full" />
              Our Direction
              <span className="w-6 h-[1.5px] bg-brand-400 rounded-full" />
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Vision &{" "}
              <span className>Mission</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Vision */}
            <motion.div
              {...fadeUp(0.1)}
              className="group relative p-8 rounded-2xl border border-white/[0.08]
                         bg-surface hover:border-brand-500/40 transition-all duration-300"
            >
              <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-2xl
                              bg-gradient-to-r from-brand-500/0 via-brand-500 to-brand-500/0
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20
                              flex items-center justify-center mb-5">
                <Eye size={22} className="text-brand-400" strokeWidth={1.75} />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">Our Vision</h3>
              <p className="text-steel-300 text-[15px] leading-relaxed">
                To be recognised as India's most trusted aluminium casting and precision
                engineering company — known for uncompromising quality, innovation, and
                long-term client partnerships across every industry we serve.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              {...fadeUp(0.18)}
              className="group relative p-8 rounded-2xl border border-white/[0.08]
                         bg-surface hover:border-brand-500/40 transition-all duration-300"
            >
              <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-2xl
                              bg-gradient-to-r from-brand-500/0 via-brand-500 to-brand-500/0
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20
                              flex items-center justify-center mb-5">
                <Target size={22} className="text-brand-400" strokeWidth={1.75} />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">Our Mission</h3>
              <p className="text-steel-300 text-[15px] leading-relaxed">
                To deliver precision-engineered aluminium and rubber components that exceed
                client expectations — through continuous investment in technology, in-house
                capability, skilled people, and ISO-certified quality systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
