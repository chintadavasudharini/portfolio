import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiCloud, FiCpu, FiHeart } from 'react-icons/fi';

const highlights = [
  { icon: FiCode,  label: 'Full-Stack',  desc: 'Python · Flask · REST APIs · React'  },
  { icon: FiCloud, label: 'AWS Cloud',   desc: 'S3 · EC2 · Lambda · Deployment'       },
  { icon: FiCpu,   label: 'AI & ML',     desc: 'NLP · Deep Learning · Hugging Face'   },
  { icon: FiHeart, label: 'Passionate',  desc: 'Lifelong learner & team collaborator' },
];

function Card({ icon: Icon, label, desc, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-5 flex gap-4 items-start hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10"
    >
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
        <Icon size={18} className="text-purple-400" />
      </div>
      <div>
        <p className="font-semibold text-[var(--text-primary)] text-sm mb-1">{label}</p>
        <p className="text-[var(--text-muted)] text-xs leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-pad relative" aria-label="About section">
      <div className="orb orb-cyan w-[350px] h-[350px] top-0 right-[-80px] opacity-20" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-2">Get to know me</p>
          <h2 className="section-heading">About <span className="gradient-text">Me</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Avatar & stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Avatar */}
            <div className="relative w-full max-w-[340px]">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-purple-500 via-violet-600 to-cyan-400 p-0.5 shadow-2xl shadow-purple-500/20">
                <div className="w-full h-full rounded-2xl bg-[var(--bg-secondary)] overflow-hidden flex items-center justify-center">
                  <img
                    src="/profile.jpeg"
                    alt="Chintada Vasudharini"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="hidden font-['Space_Grotesk'] font-bold text-6xl gradient-text">CV</span>
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 w-full">
              {[
                { value: '2+', label: 'Internships' },
                { value: '5+', label: 'Projects' },
                { value: '4+', label: 'Certs' },
              ].map(s => (
                <div key={s.label} className="glass-card p-4 text-center">
                  <p className="gradient-text font-bold text-2xl font-['Space_Grotesk']">{s.value}</p>
                  <p className="text-[var(--text-muted)] text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1 font-['Space_Grotesk']">
              Chintada Vasudharini
            </h3>
            <p className="gradient-text font-semibold text-sm mb-5">Python Full Stack Developer · AWS · AI-ML</p>

            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              I'm a passionate Computer Science graduate from <span className="text-[var(--text-primary)] font-medium">KL University</span> with
              hands-on experience in building full-stack web applications, cloud-native services on AWS, and intelligent
              machine-learning pipelines.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              Through my internships at <span className="text-[var(--text-primary)] font-medium">Codegnan</span> and an <span className="text-[var(--text-primary)] font-medium">AWS AI-ML program</span>,
              I've deployed real-world apps, optimised performance by up to <span className="text-[var(--text-primary)] font-medium">30%</span>, and
              built data pipelines that improved efficiency by <span className="text-[var(--text-primary)] font-medium">20%</span>.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed mb-8">
              I thrive in agile environments, love clean code, and am always eager to learn the next exciting technology.
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <Card key={h.label} {...h} delay={0.3 + i * 0.08} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
