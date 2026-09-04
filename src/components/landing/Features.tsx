import { motion } from 'framer-motion';
import { Map, BrainCircuit, Activity, ShieldAlert } from 'lucide-react';

const features = [
  {
    icon: <Map className="w-8 h-8 text-emerald-500" />,
    title: "WebGIS Mapping",
    desc: "Interactive district-level visualization of Forest Rights Act claims using Leaflet and GeoJSON overlays."
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-teal-500" />,
    title: "AI Anomaly Detection",
    desc: "Automated flagging of delayed claims and mismatched land records powered by a free LLM integration."
  },
  {
    icon: <Activity className="w-8 h-8 text-emerald-500" />,
    title: "Live State Progress",
    desc: "Dynamic decision-support dashboard providing instant visual summaries of regional approvals and pending requests."
  },
  {
    icon: <ShieldAlert className="w-8 h-8 text-teal-500" />,
    title: "Real-time Alerts",
    desc: "Actionable, plain-text AI summaries explaining exact bottlenecks to field officers and monitoring officials."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            System Capabilities
          </h2>
          <p className="text-slate-600 dark:text-slate-400">Powered by modern geospatial web tech and artificial intelligence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 transition-all cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feat.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}