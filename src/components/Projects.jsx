import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiGithub, FiCloud, FiImage, FiFileText } from 'react-icons/fi';

const projects = [
  {
    title: 'Quick Notes App',
    description:
      'A full-stack note-taking application with secure authentication, real-time CRUD operations, and cloud deployment on AWS. Features a responsive UI, JWT-based auth, and RESTful API backend.',
    icon: FiFileText,
    gradient: 'from-purple-500 via-violet-500 to-indigo-500',
    glow: 'rgba(139,92,246,0.3)',
    tags: ['Python', 'Flask', 'MySQL', 'AWS EC2', 'JWT Auth', 'REST APIs'],
    features: [
      'JWT authentication & session management',
      'Full CRUD operations with MySQL',
      'Deployed on AWS EC2 with S3 static assets',
      'Responsive mobile-first design',
    ],
    github: 'https://github.com/chintadavasudharini/quicknotes',
    live: null,
    badge: 'AWS Deployed',
  },
  {
    title: 'Image Captioning System',
    description:
      'An AI-powered image captioning tool leveraging Hugging Face\'s BLIP model and deep learning to generate natural-language descriptions for uploaded images. Built with Streamlit for instant interaction.',
    icon: FiImage,
    gradient: 'from-cyan-500 via-sky-500 to-blue-500',
    glow: 'rgba(6,182,212,0.3)',
    tags: ['Python', 'Hugging Face', 'Deep Learning', 'Streamlit', 'BLIP Model', 'NLP'],
    features: [
      'BLIP transformer model for captioning',
      'Streamlit interactive web interface',
      'Supports drag-and-drop image upload',
      'Real-time caption generation',
    ],
    github: 'https://github.com/chintadavasudharini/imagecaption',
    live: null,
    badge: 'AI · ML',
  },
  {
    title: 'Cloud Storage Manager',
    description:
      'A web-based interface for managing AWS S3 buckets — upload, download, organize and share files securely with presigned URLs and IAM-based access controls.',
    icon: FiCloud,
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    glow: 'rgba(249,115,22,0.25)',
    tags: ['Python', 'AWS S3', 'Flask', 'Boto3', 'IAM', 'Presigned URLs'],
    features: [
      'Multi-file upload with progress bar',
      'Presigned URL sharing (time-limited)',
      'Folder-based organisation',
      'IAM role-based access control',
    ],
    github: 'https://github.com/chintadavasudharini/cloud-storage-manager',
    live: null,
    badge: 'AWS S3',
  },
];

function ProjectCard({ project, delay }) {
  const Icon = project.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className="project-card glass-card flex flex-col h-full"
      aria-label={project.title}
    >
      {/* Top gradient bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.gradient} rounded-t-2xl`} />

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}
            style={{ boxShadow: `0 8px 24px ${project.glow}` }}
          >
            <Icon size={22} className="text-white" />
          </div>
          <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-[var(--bg-card)] border border-[var(--border-glass)] text-[var(--text-muted)]">
            {project.badge}
          </span>
        </div>

        <h3 className="font-['Space_Grotesk'] font-bold text-[var(--text-primary)] text-xl mb-2">{project.title}</h3>
        <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Feature list */}
        <ul className="space-y-1.5 mb-5 flex-1">
          {project.features.map(f => (
            <li key={f} className="flex items-start gap-2 text-[var(--text-muted)] text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 flex-shrink-0 mt-1.5" />
              {f}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto pt-4 border-t border-[var(--border-glass)]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline py-2 px-4 text-xs flex-1 justify-center"
            aria-label={`View ${project.title} on GitHub`}
          >
            <FiGithub size={14} />
            GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2 px-4 text-xs flex-1 justify-center"
              aria-label={`Live demo of ${project.title}`}
            >
              <FiExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="section-pad relative" aria-label="Projects section">
      <div className="orb orb-cyan w-[400px] h-[400px] bottom-0 right-[-80px] opacity-20" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">Things I've built</p>
          <h2 className="section-heading">Featured <span className="gradient-text">Projects</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i * 0.12} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/chintadavasudharini"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            aria-label="View all projects on GitHub"
          >
            <FiGithub size={16} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
