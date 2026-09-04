import { motion } from 'framer-motion';
import { Globe, Link } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  color: string;
}

const team: TeamMember[] = [
  { name: "Harsh Ratnaparkhe", role: "Team Lead", color: "from-blue-500 to-indigo-500" },
  { name: "Yash Mehta", role: "App Developer", color: "from-emerald-500 to-teal-500" },
  { name: "Kartikey Karanwal", role: "Full-Stack Developer", color: "from-orange-500 to-red-500" },
  { name: "Nilesh Dwivedi", role: "Front-End & Supporting Dev", color: "from-purple-500 to-pink-500" },
  { name: "Aryan Kumar", role: "Moral Support", color: "from-yellow-400 to-amber-500" }
];

export function Team() {
  return (
    <section id="team" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Meet the Team
          </h2>
          <p className="text-slate-600 dark:text-slate-400">The minds behind the Origin DSS platform.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="w-full md:w-64 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg text-center group"
            >
              <div className={`w-20 h-20 mx-auto rounded-full mb-4 bg-gradient-to-br ${member.color} shadow-inner flex items-center justify-center text-white text-2xl font-bold`}>
                {member.name.charAt(0)}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{member.name}</h3>
              <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-6">{member.role}</p>
              
              <div className="flex justify-center gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
                <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><Globe size={18}/></button>
                <button className="text-slate-400 hover:text-blue-500 transition-colors"><Link size={18}/></button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}