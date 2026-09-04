import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

function AnimatedCounter({ from, to }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [count, to]);

  return <motion.span>{rounded}</motion.span>;
}

export function Stats() {
  return (
    <section className="py-20 bg-emerald-600 dark:bg-emerald-900 transition-colors duration-500 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="text-4xl md:text-5xl font-extrabold mb-2">
            <AnimatedCounter from={0} to={50} />+
          </div>
          <div className="text-emerald-100 font-medium">Districts Mapped</div>
        </motion.div>
        
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <div className="text-4xl md:text-5xl font-extrabold mb-2">
            <AnimatedCounter from={0} to={1200} />
          </div>
          <div className="text-emerald-100 font-medium">Claims Tracked</div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <div className="text-4xl md:text-5xl font-extrabold mb-2">
            <AnimatedCounter from={0} to={85} />%
          </div>
          <div className="text-emerald-100 font-medium">Anomaly Detection Rate</div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          <div className="text-4xl md:text-5xl font-extrabold mb-2">
            <AnimatedCounter from={0} to={10} />ms
          </div>
          <div className="text-emerald-100 font-medium">AI Query Latency</div>
        </motion.div>
      </div>
    </section>
  );
}