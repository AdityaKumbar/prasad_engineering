/**
 * SplitText — Animates each word of a text string individually on mount.
 * Inspired by: reactbits.dev/text-animations/split-text
 */
import { motion } from "framer-motion";

export default function SplitText({
  text,
  className = "",
  delay = 0,
  stagger = 0.04,
  duration = 0.5,
  y = 24,
  once = true,
}) {
  const words = text.split(" ");

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariant = {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={wordVariant} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
