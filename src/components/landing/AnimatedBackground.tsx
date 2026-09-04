import { motion } from 'framer-motion';

export function AnimatedBackground() {
  // Generate random organic shapes
  const particles = Array.from({ length: 15 });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((_, i) => {
        const size = Math.random() * 300 + 100;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-[100px] opacity-30"
            style={{
              width: size,
              height: size,
              background: i % 2 === 0 ? '#10b981' : '#14b8a6', // Emerald and Teal
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              scale: [1, Math.random() * 0.5 + 1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}