import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin, Calendar, Award, Users, CheckCircle2, ArrowRight, Target, Eye,
  Building2, Globe
} from "lucide-react";
import PageHero from "../../components/ui/PageHero";
import { TextEffect } from "../../components/ui/text-effect";
import aluminium_banner2 from "../../assets/aluminium_banner2.jpg";

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

/* ── Quick-facts ─────────────────────────────── */
const facts = [
  { label: "Founded",           value: "1987",               accent: true  },
  { label: "Location",          value: "Belagavi, Karnataka", accent: false },
  { label: "Certification",     value: "ISO Certified",       accent: true  },
  { label: "Companies Served",  value: "916+",               accent: true  },
  { label: "Experience",        value: "35+ Years",          accent: false },
  { label: "Alloys Capability", value: "64+ Grades",         accent: false },
];

/* ── States we supply ───────────────────────── */
const supplyStates = [
  "Karnataka",
  "Goa",
  "Maharashtra",
  "Andhra Pradesh",
  "Tamil Nadu",
  "Gujarat",
  "Kerala",
  "Madhya Pradesh",
];

/* ── Key reach stats ─────────────────────────── */
const keyStats = [
  { Icon: Users,    stat: "916+", label: "Companies Served" },
  { Icon: Building2, stat: "49+",  label: "Skilled Workers" },
  { Icon: Calendar, stat: "35+",  label: "Years of Experience" },
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
        backgroundImage={aluminium_banner2}
      />

      {/* ── History & Facts ─────────────────────────── */}
      <section className="relative bg-white overflow-hidden section-transition">
        <div className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full
                        bg-brand-200/60 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/3" />

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
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-steel-900
                               leading-tight mb-6">
                  <ReplayTextEffect
                    as="span"
                    per="word"
                    preset="slide"
                    delay={0.12}
                    className="text-steel-900"
                  >
                    From a Small Workshop to a Trusted Name
                  </ReplayTextEffect>
                </h2>
              </motion.div>

              <div className="space-y-5 text-steel-700 text-[15px] leading-relaxed">
                <motion.p {...fadeUp(0.08)}>
                  Originally established as <strong className="text-steel-900">Prasad Patterns in 1987</strong> by Parashuram Chougule, the company was re-established as <strong className="text-steel-900">Prasad Engineering in 1994</strong> by Prasad Chougule. Over three decades of dedicated manufacturing, we have grown into a full-fledged ISO-certified manufacturing unit — serving over{" "}
                  <strong className="text-steel-900">916 companies</strong> across India.
                </motion.p>

                <motion.p {...fadeUp(0.14)}>
                  Our core expertise lies in aluminium casting — gravity die casting, high-pressure
                  die casting (HPDC), sand casting, and centrifugal casting — delivering
                  precision-engineered components to automotive, electrical, and industrial sectors.
                  With the ability to work across{" "}
                  <strong className="text-steel-900">64+ aluminium alloys</strong>, we cater to the
                  most demanding mechanical and thermal specifications.
                </motion.p>

                <motion.p {...fadeUp(0.20)}>
                  In recent years, we have expanded our capabilities to include{" "}
                  <strong className="text-steel-900">in-house VMC and CNC turning</strong> as well as
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
              <div className="rounded-2xl border border-steel-200/90 bg-white
                              overflow-hidden shadow-xl">
                {/* Card header */}
                <div className="px-7 py-5 border-b border-white/[0.07] bg-brand-500/5">
                  <h3 className="font-display font-bold text-steel-900 text-lg">
                    Company at a Glance
                  </h3>
                  <p className="text-[13px] text-steel-700 mt-0.5">
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
                      <span className="text-sm text-steel-700">{label}</span>
                      <span className={`text-sm font-semibold ${
                        accent ? "text-brand-700" : "text-steel-900"
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
                  <span className="text-xs text-steel-700 font-medium">
                    ISO Certified Manufacturer · Est. 1987
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our Reach ─────────────────────────────── */}
      <section className="relative bg-[#307db5] overflow-hidden section-transition">
        <div className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full
                        bg-brand-800/20 blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />

        <div className="container-max section-padding py-20 lg:py-24 relative z-10">

          {/* Heading */}
          <motion.div {...fadeUp(0)} className="mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-300 mb-3">
              <span className="w-6 h-[1.5px] bg-brand-300 rounded-full" />
              Our Reach
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              <ReplayTextEffect
                as="span"
                per="word"
                preset="slide"
                delay={0.12}
                className="text-white"
              >
                Supplying Across India
              </ReplayTextEffect>
            </h2>
            <p className="mt-3 text-blue-100 text-[15px] leading-relaxed max-w-2xl">
              From our manufacturing base in Belagavi, Karnataka, we supply precision aluminium
              and rubber components directly to companies across eight states — and beyond.
            </p>
          </motion.div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* LEFT — States */}
            <motion.div {...fadeUp(0.1)}>
              <p className="text-sm font-semibold text-brand-300 uppercase tracking-widest mb-5">
                We supply components to companies across:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {supplyStates.map((state, i) => (
                  <motion.div
                    key={state}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.1 + i * 0.06 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl
                               border border-white/70 bg-white/95
                               hover:border-white hover:bg-white transition-all duration-200 shadow-sm"
                  >
                    <MapPin size={13} className="text-brand-500 shrink-0" />
                    <span className="text-[14px] font-semibold text-steel-900">{state}</span>
                  </motion.div>
                ))}
              </div>

              {/* International export note */}
              <motion.div
                {...fadeUp(0.4)}
                className="mt-6 flex items-start gap-4 p-5 rounded-2xl border border-white/[0.08] bg-white/95 shadow-sm"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Globe size={16} className="text-brand-500" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-steel-900 mb-0.5">International Reach via Clients</p>
                  <p className="text-[13px] text-steel-700 leading-relaxed">
                    Many of our clients further export their finished products internationally — our
                    components are part of globally delivered goods.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT — Key stats */}
            <motion.div {...fadeUp(0.15)} className="space-y-4">
              {keyStats.map(({ Icon, stat, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="flex items-center gap-5 p-5 rounded-2xl border border-white/[0.08] bg-white/95 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-brand-500" />
                  </div>
                  <div>
                    <p className="text-3xl font-display font-bold text-steel-900 leading-none">{stat}</p>
                    <p className="text-[13px] text-steel-600 mt-1">{label}</p>
                  </div>
                </motion.div>
              ))}

              {/* Belagavi origin badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-3 px-5 py-4 rounded-2xl border border-white/[0.08] bg-white/95 shadow-sm"
              >
                <MapPin size={15} className="text-brand-500 shrink-0 mt-0.5" />
                <p className="text-[13px] text-steel-700">
                  <span className="font-semibold text-steel-900">Manufacturing base:</span> Plot No. 9/A, BEMCIEL Industrial Estate, Udyambag, Belagavi — 590008
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our Direction — Vision & Mission ────────── */}
      <section className="relative bg-white overflow-hidden section-transition">
        <div className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "linear-gradient(rgba(48,125,181,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(48,125,181,.06) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full
                        bg-brand-200/50 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/3" />

        <div className="container-max section-padding py-20 lg:py-28 relative z-10">

          {/* Section tag */}
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-brand-500 mb-3">
              <span className="w-6 h-[1.5px] bg-brand-400 rounded-full" />
              Our Direction
              <span className="w-6 h-[1.5px] bg-brand-400 rounded-full" />
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-steel-900">
              <ReplayTextEffect
                as="span"
                per="word"
                preset="slide"
                delay={0.12}
                className="text-steel-900"
              >
                Vision & Mission
              </ReplayTextEffect>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Vision */}
            <motion.div
              {...fadeUp(0.1)}
              className="group relative p-8 rounded-2xl border border-steel-200
                         bg-white shadow-sm hover:border-brand-400/50 hover:shadow-lg
                         hover:shadow-brand-100/60 transition-all duration-300"
            >
              <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-2xl
                              bg-gradient-to-r from-brand-500/0 via-brand-500 to-brand-500/0
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20
                              flex items-center justify-center mb-5">
                <Eye size={22} className="text-brand-400" strokeWidth={1.75} />
              </div>
              <h3 className="font-display font-bold text-xl text-steel-900 mb-3">Our Vision</h3>
              <p className="text-steel-700 text-[15px] leading-relaxed mb-3">
                To become a globally trusted manufacturer of precision aluminum components
                recognized for engineering excellence, innovation and consistent product quality.
              </p>
              <p className="text-steel-700 text-[15px] leading-relaxed">
                To expand our capabilities as a leading aluminum casting manufacturer while
                supporting integrated component requirements for evolving industrial applications.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              {...fadeUp(0.18)}
              className="group relative p-8 rounded-2xl border border-steel-200
                         bg-white shadow-sm hover:border-brand-400/50 hover:shadow-lg
                         hover:shadow-brand-100/60 transition-all duration-300"
            >
              <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-2xl
                              bg-gradient-to-r from-brand-500/0 via-brand-500 to-brand-500/0
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20
                              flex items-center justify-center mb-5">
                <Target size={22} className="text-brand-400" strokeWidth={1.75} />
              </div>
              <h3 className="font-display font-bold text-xl text-steel-900 mb-4">Our Mission</h3>
              <div className="space-y-2.5">
                {[
                  "Deliver high-precision aluminum cast components using advanced manufacturing technologies.",
                  "Maintain strict ISO quality standards across all processes.",
                  "Continuously improve manufacturing capability and technical expertise.",
                  "Build long-term partnerships by delivering reliable and durable products.",
                  "Deliver greater value by combining our core aluminum casting expertise with complementary rubber component support.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-[14px] text-steel-700">
                    <CheckCircle2 size={15} className="text-brand-500 shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
