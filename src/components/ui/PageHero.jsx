import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function PageHero({ title, subtitle, tag, className }) {
  return (
    <section
      className={cn(
        "relative flex items-center min-h-[40vh] overflow-hidden",
        "bg-gradient-to-br from-surface via-surface-2 to-steel-900",
        "bg-grid-pattern bg-grid-pattern",
        className
      )}
    >
      {/* Gradient orb */}
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full
                      bg-brand-600/20 blur-3xl pointer-events-none" />

      <div className="container-max section-padding w-full py-20 relative z-10">
        {tag && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold
                       tracking-widest uppercase bg-brand-500/15 text-brand-300 border border-brand-500/30"
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
            className="mt-4 max-w-2xl text-lg text-steel-300"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
