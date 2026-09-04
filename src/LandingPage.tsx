// src/LandingPage.jsx
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/landing/Navbar';
import { AnimatedBackground } from './components/landing/AnimatedBackground';
import { Hero } from './components/landing/Hero';
import { ProjectOverview } from './components/landing/ProjectOverview';
import { Features } from './components/landing/Features'; 
import { TechStack } from './components/landing/TechStack';
import { Stats } from './components/landing/Stats';       
import { Team } from './components/landing/Team';
import { Contact } from './components/landing/Contact';

export default function LandingPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 scroll-smooth overflow-hidden">
      
      {/* 1. Global Dynamic Background */}
      <AnimatedBackground />

      {/* 2. Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      {/* 3. Page Content */}
      <div className="relative z-10">
        <Hero />
        <ProjectOverview />
        <Features />
        <TechStack />
        <Stats />
        <Team />
        <Contact />
      </div>
      
    </div>
  );
}