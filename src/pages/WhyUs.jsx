import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Clock, ThumbsUp, Layers, Cog, Wrench, Settings2, Factory,
  Shield, PhoneCall, ArrowRight
} from "lucide-react";
import PageHero from "../components/ui/PageHero";
import CountUp from "../components/ui/CountUp";
import whyUsBanner from "../assets/banner5.jpg";

const reasons = [
  {
    Icon: Clock,
    title: "35+ Years of Industry Experience",
    desc: "Founded as Prasad Patterns in 1987 and re-established as Prasad Engineering in 1994, we have built deep expertise across aluminium casting technologies through decades of consistent, hands-on manufacturing.",
    delay: 0,
  },
  {
    Icon: Shield,
    title: "ISO-Certified Quality Systems",
    desc: "Our ISO certification covers the full production lifecycle — from raw material sourcing and process control to inspection, traceability, and delivery.",
    delay: 0.07,
  },
  {
    Icon: ThumbsUp,
    title: "916+ Companies Served",
    desc: "A wide and loyal client base spanning automotive, pump, electrical, agricultural, and industrial sectors is a testament to our reliability and long-term value.",
    delay: 0.14,
  },
  {
    Icon: Layers,
    title: "64+ Aluminium Alloy Expertise",
    desc: "We work with over 64 aluminium alloy grades — LM series, EN, and ASTM — to meet exact mechanical, thermal, and corrosion performance specifications.",
    delay: 0.21,
  },
  {
    Icon: Cog,
    title: "Multiple Casting Technologies",
    desc: "GDC, HPDC, sand casting, and centrifugal casting under one roof give clients complete flexibility across volume, geometry, and tolerance requirements.",
    delay: 0.28,
  },
  {
    Icon: Wrench,
    title: "In-House Machining Capability",
    desc: "VMC and CNC turning centres allow us to deliver fully machined, ready-to-assemble components — reducing lead times and vendor complexity for clients.",
    delay: 0.35,
  },
  {
    Icon: Settings2,
    title: "Rubber Component Support",
    desc: "Our expanded rubber division delivers seals, gaskets, bushes, and moulded parts — enabling clients to source complementary components from a single trusted partner.",
    delay: 0.42,
  },
  {
    Icon: Factory,
    title: "Reduced Vendor Dependency",
    desc: "End-to-end manufacturing — casting, machining, and rubber — all under one roof means fewer suppliers, shorter lead times, and better quality control for clients.",
    delay: 0.49,
  },
  {
    Icon: PhoneCall,
    title: "Responsive, Committed Team",
    desc: "We respond quickly, communicate clearly, and deliver on our commitments. Our team maintains direct client relationships built on trust and accountability.",
    delay: 0.56,
  },
];

const stats = [
  { to: 35, suffix: "+", label: "Years Experience" },
  { to: 916, suffix: "+", label: "Companies Served" },
  { to: 64, suffix: "+", label: "Alloys Capability" },
  { to: 49, suffix: "+", label: "Skilled Engineers" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function WhyUs() {
  return (
    <>
      <PageHero
        tag="Why Choose Us"
        title="The Prasad Engineering Difference"
        subtitle="Reasons why leading companies across India continue to trust Prasad Engineering for their precision component needs."
        backgroundImage={whyUsBanner}
      />

      {/* ── Stats strip ──────────────────────────── */}
      <section className="bg-[#307db5] border-y border-white/[0.10] section-transition">
        <div className="container-max section-padding py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-white/[0.08]">
            {stats.map(({ to, suffix, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="text-4xl font-display font-bold text-white">
                  <CountUp to={to} suffix={suffix} />
                </div>
                <p className="text-sm text-white/80 mt-1">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reasons grid ─────────────────────────── */}
      <section className="relative bg-white overflow-hidden section-transition">
        <div className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full
                        bg-brand-200/50 blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3" />

        <div className="container-max section-padding py-20 lg:py-28 relative z-10">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map(({ Icon, title, desc, delay }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex gap-5 p-6 rounded-2xl
                           bg-white border border-steel-200/90
                           hover:border-brand-300/60 hover:shadow-lg hover:shadow-brand-100/70
                           transition-all duration-300"
              >
                <div className="absolute top-0 inset-x-0 h-[1.5px] rounded-t-2xl
                                bg-gradient-to-r from-brand-500/0 via-brand-500/60 to-brand-500/0
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="shrink-0 w-11 h-11 rounded-xl bg-brand-500/10 border border-brand-500/20
                                flex items-center justify-center
                                group-hover:bg-brand-500/20 group-hover:border-brand-500/40
                                transition-all duration-300">
                  <Icon size={20} className="text-brand-400" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[15px] text-steel-900 mb-1.5
                                 group-hover:text-brand-700 transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="text-[13px] text-steel-700 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div {...fadeUp(0.6)} className="flex justify-center mt-12">
            <Link
              to="/contact"
              id="why-us-page-cta"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                         bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm
                         transition-colors duration-200 shadow-lg shadow-brand-900/30 group"
            >
              Work With Us
              <ArrowRight size={15}
                className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
