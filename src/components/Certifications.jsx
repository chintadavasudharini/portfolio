import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import { FaAws, FaRedhat, FaDatabase } from 'react-icons/fa';

const certifications = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: 'Aug 2022',
    icon: FaAws,
    iconColor: '#ff9900',
    description: 'Strategically design well-architected distributed systems that are scalable, resilient, efficient, and fault-tolerant using AWS architectural principles.',
    gradient: 'from-orange-500/15 to-purple-500/5',
    border: 'border-orange-500/20',
    link: 'https://www.credly.com/badges/a974b096-7054-473f-8664-6126990ebdf2/linked_in?t=rnjot6',
    badge: 'Associate',
  },
  {
    title: 'Red Hat Certified Enterprise Application Developer',
    issuer: 'Red Hat',
    date: 'Dec 2022',
    icon: FaRedhat,
    iconColor: '#e00',
    description: 'Demonstrated proficiency in undertaking real-world Java development tasks and building enterprise applications with JSE/JEE technologies.',
    gradient: 'from-red-500/15 to-rose-500/5',
    border: 'border-red-500/20',
    link: 'https://www.credly.com/badges/c6f32f83-6a61-4383-b00b-25dfb84b243e/linked_in?t=sinvto',
    badge: 'Professional',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'May 2022',
    icon: FaAws,
    iconColor: '#ff9900',
    description: 'Fundamental understanding of IT services and their uses in the AWS Cloud, demonstrating cloud fluency and foundational AWS knowledge.',
    gradient: 'from-orange-500/15 to-amber-500/5',
    border: 'border-orange-500/20',
    link: 'https://www.credly.com/badges/df2fe9f1-08f4-479c-8ccc-a0585e63c395/public_url',
    badge: 'Foundational',
  },
  {
    title: 'OCI 2023 Certified Foundations Associate',
    issuer: 'Oracle',
    date: 'Mar 2024',
    icon: FaDatabase,
    iconColor: '#f00',
    description: 'Validation of foundational-level knowledge around core OCI services including Compute, Storage, Networking, Database, and Security.',
    gradient: 'from-rose-500/15 to-pink-500/5',
    border: 'border-rose-500/20',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=A9FF4E7AC3EB7183DA737879CE43D2B029F86B47F97D6F599205DCAD2D5D168B',
    badge: 'Foundations',
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" className="section-pad relative" aria-label="Certifications section">
      <div className="orb orb-purple w-[350px] h-[350px] bottom-0 left-[-60px] opacity-20" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-2">Credentials & achievements</p>
          <h2 className="section-heading">My <span className="gradient-text">Certifications</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                className={`glass-card p-6 bg-gradient-to-br ${cert.gradient} border ${cert.border} hover:scale-[1.02] hover:shadow-xl transition-all duration-300 flex flex-col`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--bg-card)] border border-[var(--border-glass)] flex items-center justify-center">
                    <Icon size={26} style={{ color: cert.iconColor }} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[var(--text-muted)] bg-[var(--bg-card)] px-2 py-0.5 rounded-md border border-[var(--border-glass)]">
                      {cert.badge}
                    </span>
                    <span className="text-xs text-[var(--text-muted)] opacity-70">{cert.date}</span>
                  </div>
                </div>
                <h3 className="font-['Space_Grotesk'] font-bold text-[var(--text-primary)] text-sm leading-snug mb-1 min-h-[40px]">{cert.title}</h3>
                <p className="text-[var(--text-muted)] text-xs font-medium mb-3">{cert.issuer}</p>
                <p className="text-[var(--text-muted)] text-xs leading-relaxed flex-1 opacity-80">{cert.description}</p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-1.5 text-xs text-[var(--accent-purple)] hover:text-[var(--accent-cyan)] transition-colors group">
                  <FiAward size={12} /> View Credential <FiExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
