import { motion } from 'framer-motion';

export function ProjectOverview() {
  return (
    <section id="overview" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        {/* Problem Statement Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-2xl h-80 lg:h-96"
          >
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop" 
              alt="Farming Land" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-6"
          >
            <h2 className="text-sm font-bold tracking-widest text-emerald-500 uppercase">The Challenge</h2>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Fragmented Land Rights Monitoring</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Implementation of the Forest Rights Act (FRA) is notoriously difficult to track across states. Claims, approvals, and critical land-use data remain fragmented in disconnected systems, making it nearly impossible for officials to accurately monitor progress, track tribal affairs, and flag administrative anomalies in real time.
            </p>
          </motion.div>
        </div>

        {/* Solution & Description Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-sm font-bold tracking-widest text-teal-500 uppercase">Our Solution</h2>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">AI-Powered Decision Support System</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Origin DSS is a comprehensive WebGIS platform designed specifically for FRA monitoring. By synthesizing geospatial data with a custom AI anomaly-detection layer, the system provides officials with a real-time map view of mock claim data, instantly flagging delayed claims or mismatched land records. It transforms raw, scattered data into an actionable, state-wise decision-support dashboard.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl h-80 lg:h-96"
          >
            <img 
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2000&auto=format&fit=crop" 
              alt="Forest Canopy" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}