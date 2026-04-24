import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiHackerrank, SiLeetcode } from 'react-icons/si';

const TYPING_ROLES = ['Python Full Stack Developer', 'AWS Cloud Practitioner', 'AI-ML Enthusiast'];

import { useEffect, useState } from 'react';

function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay]   = useState('');
  const [wordIdx, setWordIdx]   = useState(0);
  const [charIdx, setCharIdx]   = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx % words.length];
    let timer;
    if (!deleting && charIdx < word.length) {
      timer = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx === word.length) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timer = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx(w => (w + 1) % words.length);
    }
    setDisplay(word.slice(0, charIdx));
    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

const float = {
  animate: { y: [0, -12, 0] },
  transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
};

export default function Hero({ onOpenResume }) {
  const typed = useTypewriter(TYPING_ROLES);

  const handleScroll = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Ambient orbs */}
      <div className="orb orb-purple w-[500px] h-[500px] top-[-100px] left-[-120px] opacity-60" />
      <div className="orb orb-cyan w-[400px] h-[400px] bottom-[0px] right-[-80px] opacity-50" />
      <div className="orb orb-pink w-[300px] h-[300px] top-[40%] left-[50%] opacity-30" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20 sm:py-0 max-w-4xl mx-auto">

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-['Space_Grotesk'] font-bold leading-tight mb-4"
          style={{ fontSize: 'clamp(2.2rem, 7vw, 4rem)' }}
        >
          <span className="text-[var(--text-primary)]">I am </span><span className="gradient-text">Chintada Vasudharini</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-[var(--text-primary)] font-medium mb-4 min-h-[2.5rem] flex items-center justify-center flex-wrap"
          aria-label="Role"
        >
          {typed}
          <span className="gradient-text animate-pulse ml-0.5">|</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="text-[var(--text-muted)] text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          B.Tech CSE graduate from KL University crafting scalable web apps,
          cloud-native solutions, and intelligent AI systems.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center mb-12"
        >
          <button
            onClick={onOpenResume}
            className="btn-primary"
            aria-label="View Resume"
          >
            View Resume
          </button>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="flex gap-5 justify-center mb-16"
        >
          {[
            { icon: FiGithub, href: 'https://github.com/chintadavasudharini', label: 'GitHub' },
            { icon: FiLinkedin, href: 'https://www.linkedin.com/in/chintada-vasudharini-nov21/', label: 'LinkedIn' },
            { icon: FiMail, href: 'mailto:chintadavasudharini@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-12 h-12 rounded-xl bg-[var(--bg-card)] border border-[var(--border-glass)] flex items-center justify-center text-[var(--text-primary)] hover:text-purple-400 hover:scale-110 transition-all duration-300 shadow-sm"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Floating avatar card */}
        <motion.div
          {...float}
          className="inline-flex items-center gap-3 px-5 py-3 glass-card"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 overflow-hidden flex items-center justify-center border border-[var(--border-glass)]">
            <img
              src="/profile.jpeg"
              alt="Avatar"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden w-full h-full items-center justify-center font-bold text-[var(--text-primary)] text-xs">
              CV
            </div>
          </div>
          <div className="text-left">
            <p className="text-[var(--text-primary)] text-sm font-semibold">Chintada Vasudharini</p>
            <p className="text-[var(--text-muted)] text-xs opacity-80">KL University · CSE · 8.51 CGPA</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--text-muted)] text-xs cursor-pointer hover:text-[var(--text-primary)] transition-colors duration-300"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        onClick={() => handleScroll('#about')}
        role="button"
        aria-label="Scroll to About section"
      >
        <FiArrowDown size={18} />
        <span>scroll</span>
      </motion.div>
    </section>
  );
}
