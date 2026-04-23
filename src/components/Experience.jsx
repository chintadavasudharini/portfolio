import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheck, FiExternalLink, FiAward } from 'react-icons/fi';

const experiences = [
  {
    role: 'Python Full Stack Developer Intern',
    company: 'Codegnan IT Solutions',
    location: 'Vijayawada, AP',
    period: 'Sep 2024 – Aug 2025',
    type: 'Internship',
    color: 'from-purple-500 to-violet-600',
    highlights: [
      'Engineered full-stack web features using Python (Flask) and REST APIs, boosting application performance by 25–30% through query optimisation and caching strategies.',
      'Collaborated in Agile sprints using GitHub for version control and pull-request reviews, maintaining clean and scalable code across a team of 6.',
      'Deployed production-ready applications to AWS (EC2 + S3), ensuring 99.9% uptime and fast content delivery.',
      'Wrote and maintained unit tests, reducing regression bugs by 40% across module releases.',
    ],
    tags: ['Python', 'Flask', 'REST APIs', 'AWS', 'GitHub', 'Agile'],
  },
  {
    role: 'AI-ML Virtual Internship',
    company: 'AICTE NEAT - EduSkills Foundation',
    location: 'Remote (Supported by AWS Academy)',
    period: 'Mar 2022 – May 2022',
    type: 'Virtual Internship',
    color: 'from-pink-500 to-rose-600',
    highlights: [
      'Successfully completed a 10-week intensive virtual internship program focusing on AI/ML fundamentals.',
      'Mastered core concepts including supervised/unsupervised learning, feature engineering, and model deployment.',
      'Engaged with AWS Academy curriculum to understand cloud-native machine learning workflows.',
      'Earned a completion certificate after rigorous evaluation and project submissions.',
    ],
    tags: ['AI', 'ML', 'Python', 'AWS Academy', 'Data Preprocessing'],
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6957590033918763008/',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section-pad relative" aria-label="Experience section">
      <div className="orb orb-purple w-[350px] h-[350px] top-10 left-[-80px] opacity-20" />

      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-2">What I've built & done</p>
          <h2 className="section-heading">My <span className="gradient-text">Experience</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-8">
          <div className="timeline-line" aria-hidden="true" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.18 }}
              className="relative flex gap-5 mb-8 last:mb-0"
            >
              <div className="timeline-dot mt-2" aria-hidden="true" />

              <article className="glass-card flex-1 p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <FiBriefcase size={14} className="text-purple-400" />
                      <span className="text-xs font-semibold text-purple-400 uppercase tracking-wide">{exp.type}</span>
                    </div>
                    <h3 className="font-bold text-[var(--text-primary)] text-lg leading-snug">{exp.role}</h3>
                    <p className="text-[var(--text-muted)] text-sm font-medium mt-0.5">{exp.company}</p>
                    <p className="text-[var(--text-muted)] text-xs flex items-center gap-1 mt-1 opacity-80">
                      <FiMapPin size={10} />
                      {exp.location}
                      &nbsp;·&nbsp;
                      <FiCalendar size={10} />
                      {exp.period}
                    </p>
                  </div>
              </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-4" aria-label="Key highlights">
                  {exp.highlights.map((h, hi) => (
                    <li key={hi} className="flex gap-3 text-[var(--text-muted)] text-sm leading-relaxed">
                      <FiCheck size={14} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.05]">
                  {exp.tags.map(tag => (
                    <span key={tag} className="skill-pill">{tag}</span>
                  ))}
                </div>

                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 transition-colors group self-start"
                  >
                    <FiAward size={12} />
                    View Certificate
                    <FiExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
