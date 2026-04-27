import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaPython, FaJs, FaHtml5, FaCss3Alt, FaBootstrap,
  FaDatabase, FaAws, FaGitAlt, FaGithub, FaReact, FaDocker, FaCode,
} from 'react-icons/fa';
import { SiFlask, SiMysql, SiMongodb, SiStreamlit, SiJupyter, SiPostman, SiHackerrank, SiLeetcode, SiVercel, SiRender } from 'react-icons/si';
import { FiCpu, FiCode as FiCodeIcon } from 'react-icons/fi';
import { DiJava } from 'react-icons/di';

const skillGroups = [
  {
    category: 'Languages',
    color: 'from-purple-500/20 to-purple-500/5',
    border: 'border-purple-500/20',
    skills: [
      { name: 'Python',     icon: FaPython,     color: '#3776ab' },
      { name: 'Java',       icon: DiJava,       color: '#f8981d' },
      { name: 'JavaScript', icon: FaJs,         color: '#f7df1e' },
    ],
  },
  {
    category: 'Frontend',
    color: 'from-cyan-500/20 to-cyan-500/5',
    border: 'border-cyan-500/20',
    skills: [
      { name: 'HTML5',      icon: FaHtml5,      color: '#e34f26' },
      { name: 'CSS3',       icon: FaCss3Alt,    color: '#1572b6' },
      { name: 'Bootstrap',  icon: FaBootstrap,  color: '#7952b3' },
      { name: 'React',      icon: FaReact,      color: '#61dafb' },
    ],
  },
  {
    category: 'Backend',
    color: 'from-violet-500/20 to-violet-500/5',
    border: 'border-violet-500/20',
    skills: [
      { name: 'Flask',      icon: SiFlask,      color: '#94a3b8' },
      { name: 'REST APIs',  icon: FiCpu,        color: '#8b5cf6' },
    ],
  },
  {
    category: 'Database',
    color: 'from-sky-500/20 to-sky-500/5',
    border: 'border-sky-500/20',
    skills: [
      { name: 'MySQL',    icon: SiMysql,    color: '#4479a1' },
      { name: 'MongoDB',  icon: SiMongodb,  color: '#47a248' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    color: 'from-orange-500/20 to-orange-500/5',
    border: 'border-orange-500/20',
    skills: [
      { name: 'AWS',       icon: FaAws,     color: '#ff9900' },
      { name: 'Git',       icon: FaGitAlt,  color: '#f05032' },
      { name: 'GitHub',    icon: FaGithub,  color: '#94a3b8' },
    ],
  },
  {
    category: 'AI & ML',
    color: 'from-pink-500/20 to-pink-500/5',
    border: 'border-pink-500/20',
    skills: [
      { name: 'NLP',           icon: FiCpu, color: '#ec4899' },
      { name: 'Deep Learning', icon: FiCpu, color: '#8b5cf6' },
      { name: 'Hugging Face',  icon: FiCpu, color: '#f59e0b' },
    ],
  },
  {
    category: 'Competitive Coding',
    color: 'from-green-500/20 to-green-500/5',
    border: 'border-green-500/20',
    skills: [
      { name: 'HackerRank', icon: SiHackerrank, color: '#2ec866', href: 'https://www.hackerrank.com/profile/Vasudharini_21' },
      { name: 'LeetCode',   icon: SiLeetcode,   color: '#ffa116', href: 'https://leetcode.com/u/chintadavasudharini/' },
    ],
  },
];

function SkillIcon({ name, icon: Icon, color, href }) {
  const content = (
    <motion.div
      whileHover={{ scale: 1.08, y: -4 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`icon-card ${
        href ? 'cursor-pointer shadow-lg shadow-white/5' : 'cursor-default'
      } transition-all duration-300 group`}
      title={name}
    >
      <Icon size={28} style={{ color }} className="transition-transform duration-300" />
      <span className="text-[var(--text-muted)] text-[10px] sm:text-xs font-medium group-hover:text-[var(--text-primary)] transition-colors text-center leading-tight">
        {name}
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block outline-none">
        {content}
      </a>
    );
  }

  return content;
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section-pad relative" aria-label="Skills section">
      <div className="orb orb-pink w-[350px] h-[350px] top-20 right-0 opacity-20" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-pink-400 text-sm font-semibold uppercase tracking-widest mb-2">What I work with</p>
          <h2 className="section-heading">My <span className="gradient-text">Skills</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: gi * 0.1 }}
              className={`glass-card p-5 bg-gradient-to-br ${group.color} border ${group.border}`}
            >
              <h3 className="text-[var(--text-primary)] font-semibold text-sm mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
                {group.category}
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {group.skills.map(skill => (
                  <SkillIcon key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 glass-card p-5"
        >
          <p className="text-slate-400 text-sm font-medium mb-4">Tools & Editors</p>
          <div className="flex flex-wrap gap-2">
            {[
              { name: 'VS Code', icon: FaCode },
              { name: 'Git', icon: FaGitAlt },
              { name: 'GitHub', icon: FaGithub },
              { name: 'Postman', icon: SiPostman },
              { name: 'Streamlit', icon: SiStreamlit },
              { name: 'Jupyter', icon: SiJupyter },
              { name: 'AWS', icon: FaAws },
              { name: 'Vercel', icon: SiVercel },
              { name: 'Render', icon: SiRender },
            ].map(tool => (
              <span key={tool.name} className="skill-pill">
                <tool.icon size={12} style={{ opacity: 0.7 }} />
                {tool.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
