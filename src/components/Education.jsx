import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiBook, FiMapPin } from 'react-icons/fi';
import { FaGraduationCap, FaBuildingColumns, FaSchool } from 'react-icons/fa6';

const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'KL University',
    location: 'Vijayawada, Andhra Pradesh',
    period: '2020 – 2024',
    score: 'CGPA: 8.51',
    scoreLabel: 'CGPA',
    icon: FaGraduationCap,
    color: 'from-purple-500 to-violet-600',
    tags: ['AIML Specialization', 'Data Structures', 'Cloud Computing', 'Full-Stack Dev'],
  },
  {
    degree: 'Intermediate (MPC) — Class XII',
    institution: 'Sri Chaitanya Junior College',
    location: 'Vijayawada, Andhra Pradesh',
    period: '2018 – 2020',
    score: 'CGPA: 9.63',
    scoreLabel: 'CGPA',
    icon: FaBuildingColumns,
    color: 'from-cyan-500 to-sky-600',
    tags: ['Mathematics', 'Physics', 'Chemistry'],
  },
  {
    degree: 'Secondary School Certificate (SSC) — Class X',
    institution: 'Siddhartha EM High School',
    location: 'Vijayawada, Andhra Pradesh',
    period: '2017 – 2018',
    score: 'CGPA: 8.5',
    scoreLabel: 'CGPA',
    icon: FaSchool,
    color: 'from-pink-500 to-rose-600',
    tags: ['General Science', 'Mathematics', 'Secondary Education'],
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="section-pad relative" aria-label="Education section">
      <div className="orb orb-purple w-[400px] h-[400px] bottom-0 left-[-100px] opacity-20" />

      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">Academic background</p>
          <h2 className="section-heading">My <span className="gradient-text">Education</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-8">
          <div className="timeline-line" aria-hidden="true" />

          {education.map((edu, i) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                className="relative flex gap-5 mb-8 last:mb-0"
              >
                {/* Dot */}
                <div className="timeline-dot mt-1.5" aria-hidden="true" />

                {/* Card */}
                <div className="glass-card flex-1 p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${edu.color} bg-opacity-20 flex items-center justify-center flex-shrink-0`}
                        style={{ background: `linear-gradient(135deg, rgba(139,92,246,0.25), rgba(6,182,212,0.15))` }}
                      >
                        <Icon size={18} className="text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--text-primary)] text-base leading-snug">{edu.degree}</h3>
                        <p className="text-[var(--text-muted)] text-sm flex items-center gap-1 mt-0.5">
                          <FiMapPin size={11} />
                          {edu.institution} · {edu.location}
                        </p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="gradient-text font-bold text-lg font-['Space_Grotesk']">{edu.score}</span>
                      <p className="text-[var(--text-muted)] text-xs opacity-70">{edu.period}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {edu.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
