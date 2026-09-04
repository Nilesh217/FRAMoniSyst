import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

type Theme = 'light' | 'dark'

interface NavbarProps {
  theme: Theme
  toggleTheme: () => void
}

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full border-b border-gov-200 bg-white/70 backdrop-blur-md transition-colors duration-300 dark:border-gov-800 dark:bg-gov-950/70"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="bg-gradient-to-r from-forest-500 to-moss-400 bg-clip-text text-2xl font-bold text-transparent">
          Origin DSS
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#features"
            className="text-gov-600 transition-colors hover:text-forest-500 dark:text-gov-300"
          >
            Features
          </a>
          <a
            href="#dashboard"
            className="text-gov-600 transition-colors hover:text-forest-500 dark:text-gov-300"
          >
            Dashboard
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="rounded-full p-2 transition-colors hover:bg-gov-200 dark:hover:bg-gov-800"
          >
            {theme === 'dark' ? (
              <Sun className="text-caution-400" size={20} />
            ) : (
              <Moon className="text-gov-700" size={20} />
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  )
}