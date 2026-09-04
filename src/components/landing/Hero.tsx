import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gov-50 transition-colors duration-500 dark:bg-gov-950">
      {/* Background ambient gradients */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-96 w-96 rounded-full bg-forest-400/30 blur-3xl dark:bg-forest-900/40" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[30rem] w-[30rem] rounded-full bg-moss-400/20 blur-3xl dark:bg-pine-800/30" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-20 lg:grid-cols-2">
        {/* Left content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="mb-6 text-5xl leading-tight font-extrabold text-gov-900 md:text-7xl dark:text-white">
            Monitor Forests with <br />
            <span className="bg-gradient-to-r from-forest-500 to-moss-400 bg-clip-text text-transparent">
              AI Precision
            </span>
          </h1>
          <p className="mb-8 max-w-lg text-lg text-gov-600 dark:text-gov-400">
            A next-generation Decision Support System tracking FRA claims,
            flagging anomalies, and visualizing data in real-time.
          </p>

          <div className="flex gap-4">
            <button
              type="button"
              className="rounded-full bg-gradient-to-r from-forest-500 to-moss-500 px-8 py-4 font-bold text-white shadow-lg shadow-forest-500/30 transition-all duration-300 hover:-translate-y-1 hover:from-forest-600 hover:to-moss-600"
            >
              Launch Dashboard
            </button>
            <button
              type="button"
              className="rounded-full border-2 border-gov-200 px-8 py-4 font-bold text-gov-700 transition-all duration-300 hover:bg-gov-100 dark:border-gov-800 dark:text-gov-300 dark:hover:bg-gov-900"
            >
              View Documentation
            </button>
          </div>
        </motion.div>

        {/* Right image / future 3D placeholder */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-tr from-gov-200 to-gov-100 shadow-2xl md:h-[500px] dark:from-gov-900 dark:to-gov-800"
        >
          <img
            src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop"
            alt="Forest map concept"
            className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-overlay dark:mix-blend-luminosity"
          />
          <p className="z-10 rounded-full bg-white/80 px-6 py-3 font-medium text-gov-500 backdrop-blur-md dark:bg-gov-950/80 dark:text-gov-400">
            Future 3D Build Canvas
          </p>
        </motion.div>
      </div>
    </section>
  )
}
