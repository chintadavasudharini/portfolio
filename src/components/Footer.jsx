import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { SiHackerrank, SiLeetcode } from 'react-icons/si';

const links = [
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
];

const socials = [
  { icon: FiGithub,   href: 'https://github.com/chintadavasudharini',          label: 'GitHub'   },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/chintada-vasudharini-nov21/',      label: 'LinkedIn' },
  { icon: SiHackerrank, href: 'https://www.hackerrank.com/profile/Vasudharini_21', label: 'HackerRank' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/chintadavasudharini/', label: 'LeetCode' },
  { icon: FiMail,     href: 'mailto:chintadavasudharini@gmail.com',     label: 'Email'    },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.06] pt-14 pb-8 overflow-hidden" aria-label="Footer">
      <div className="orb orb-purple w-[300px] h-[300px] bottom-[-100px] left-[10%] opacity-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-['Space_Grotesk'] font-bold text-2xl gradient-text mb-1">
              Chintada Vasudharini
            </p>
            <p className="text-slate-400 text-sm">Python Full Stack · AWS · AI-ML</p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 list-none m-0 p-0">
              {links.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={e => handleNav(e, l.href)}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(s => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        <div className="flex flex-col items-center justify-center gap-3 text-slate-500 text-xs text-center">
          <p>© {year} Chintada Vasudharini. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
