import { motion } from 'framer-motion';

const stack = [
  { name: "React JS", role: "Frontend UI", icon: "⚛️" },
  { name: "Tailwind CSS", role: "Styling", icon: "🎨" },
  { name: "Leaflet.js", role: "WebGIS Mapping", icon: "🗺️" },
  { name: "Framer Motion", role: "Animations", icon: "✨" },
  { name: "Free LLM API", role: "Anomaly Detection", icon: "🧠" },
  { name: "GeoJSON", role: "Spatial Data", icon: "📍" },
];

export function TechStack() {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-900/30 relative z-10 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">Built With Modern Tech</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stack.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col items-center gap-3"
            >
              <div className="text-3xl">{item.icon}</div>
              <h4 className="font-semibold text-slate-900 dark:text-white">{item.name}</h4>
              <span className="text-xs text-slate-500">{item.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}