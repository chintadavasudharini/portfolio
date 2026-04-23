import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ResumeModal from './components/ResumeModal.jsx';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`noise-bg min-h-screen ${isDark ? '' : 'light'}`} style={{ background: 'var(--bg-primary)' }}>
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Subtle section separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

        <About />
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <Education />
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <Skills />
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-divider)] to-transparent" />

        <Experience />
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-divider)] to-transparent" />

        <Projects />
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-divider)] to-transparent" />

        <Certifications />
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-divider)] to-transparent" />

        <Contact />
      </main>

      <Footer />

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
