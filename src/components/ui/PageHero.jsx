import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import DotGrid from "./DotGrid";
import banner3 from "../../assets/banner3.jpg";

export default function PageHero({ title, subtitle, tag, className, backgroundImage }) {
  const heroImage = backgroundImage || banner3;

  return (
    <section
      className={cn(
        "relative flex items-center min-h-[46vh] overflow-hidden bg-[#307db5]",
        className
      )}
    >
      {/* Background image */}
      <img
        src={heroImage}
        alt="Background banner"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 pointer-events-none opacity-40">
        <DotGrid
          dotSize={4}
          gap={5}
          baseColor="#555555"
          activeColor="#2b2929"
          proximity={50}
          shockRadius={120}
          shockStrength={2}
          resistance={1000}
          returnDuration={1.4}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-[#2d74a8]/20 via-transparent to-[#214f74]/25 pointer-events-none" />

      <div className="container-max section-padding w-full py-20 relative z-10">
        {tag && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold
                       tracking-widest uppercase bg-white/10 text-white border border-white/30"
          >
            {tag}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 max-w-2xl text-lg text-white/85"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
