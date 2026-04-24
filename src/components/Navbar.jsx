import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume, isDark, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      /* Active section detection */
      const sections = navItems.map(n => document.querySelector(n.href));
      sections.forEach((sec, i) => {
        if (!sec) return;
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) setActive(navItems[i].href);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? 'bg-[var(--bg-nav)] backdrop-blur-xl border-b border-[var(--border-glass)] shadow-lg py-3'
            : isDark 
              ? 'bg-transparent py-5' 
              : 'bg-[var(--bg-nav)] backdrop-blur-md border-b border-[var(--border-glass)] py-4'
          }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={e => handleNav(e, '#hero')}
            className="font-bold text-base sm:text-lg md:text-xl tracking-tight font-['Space_Grotesk'] flex items-center group whitespace-nowrap"
            aria-label="Home"
          >
            <span className="navbar-name whitespace-nowrap">Chintada Vasudharini</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
            {navItems.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={e => handleNav(e, item.href)}
                  className={`nav-link ${active === item.href ? 'active' : ''}`}
                  aria-current={active === item.href ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-glass)] hover:bg-[var(--accent-purple)] hover:bg-opacity-10 transition-all text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              aria-label="Toggle theme"
            >
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-glass)] text-[var(--text-muted)]"
              aria-label="Toggle theme"
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <button
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-[64px] left-0 right-0 z-40 bg-[var(--bg-nav)] backdrop-blur-xl border-b border-[var(--border-glass)] shadow-2xl overflow-hidden md:hidden"
            role="dialog"
            aria-label="Mobile menu"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={e => handleNav(e, item.href)}
                  className={`text-lg font-medium px-4 py-2 rounded-xl transition-all ${
                    active === item.href 
                      ? 'bg-[var(--accent-purple)] bg-opacity-10 text-[var(--nav-text-active)]' 
                      : 'text-[var(--nav-text)] hover:bg-white/5'
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
