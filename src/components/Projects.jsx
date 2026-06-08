import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiCloud, FiImage, FiFileText, FiBook, FiBox, FiExternalLink, FiShield } from 'react-icons/fi';
import ProjectDetailsModal from './ProjectDetailsModal.jsx';

const projects = [
  {
    title: 'Quick Notes',
    description:
      'A secure, responsive, full-stack note-taking and file-management application deployed on AWS, incorporating password hashing, secure session management, and two-step OTP verification.',
    icon: FiFileText,
    iconName: 'FiFileText',
    gradient: 'from-purple-500 via-violet-500 to-indigo-500',
    glow: 'rgba(139,92,246,0.3)',
    tags: ['Python', 'Flask', 'MySQL', 'Bcrypt', 'Flask Session', 'AWS EC2', 'Nginx'],
    features: [
      'Bcrypt hashing & Flask session security',
      'Multi-flow OTP email verification',
      'Full CRUD notes & file management',
      'AWS EC2 deployment with Nginx & Gunicorn',
    ],
    github: 'https://github.com/chintadavasudharini/quicknotes',
    demo: 'http://98.80.74.218/',
    badge: 'AWS Deployed',
    detailedWriteup: {
      overview: 'Quick Notes is a secure, responsive, full-stack note-taking and file-management application deployed on AWS. The application allows users to create, view, edit, search, and delete personal notes and uploaded files. Designed with a security-first approach, it incorporates password hashing, secure session management, and two-step OTP (One-Time Password) verification flows for registration and account settings. The system is fully responsive across mobile, tablet, and desktop viewports and is deployed on cloud infrastructure.',
      techStack: [
        { category: 'Backend', tech: 'Python, Flask, Gunicorn' },
        { category: 'Frontend', tech: 'HTML5, Vanilla CSS3 (Custom Variables, Flexbox, Grid), JavaScript (ES6)' },
        { category: 'Database', tech: 'MySQL' },
        { category: 'Security', tech: 'Bcrypt (Hashing), Flask Session, ItsDangerous (Encrypted Tokens)' },
        { category: 'Deployment', tech: 'AWS EC2 (Ubuntu), Nginx (Reverse Proxy), Git, systemd' },
        { category: 'Email Service', tech: 'SMTP (Gmail integration with local developer fallback simulations)' },
      ],
      sections: [
        {
          title: 'Robust Authentication & Session Security',
          icon: 'FiLock',
          details: [
            'Utilizes Bcrypt for secure salted password hashing before database storage.',
            'Implements session-based user authentication using Flask session cookies to track login states securely.'
          ]
        },
        {
          title: 'Multi-Flow OTP Verification',
          icon: 'FiShield',
          details: [
            'Account Registration: Sends a time-sensitive OTP to verify email addresses before account activation.',
            'Password Recoveries & Resets: Generates secure password reset links and codes via email.',
            'Secure Account Settings: Implements a two-step verification flow where changing a password from the user profile triggers a secure verification OTP sent to the user\'s email, which must be verified before the change is committed.'
          ]
        },
        {
          title: 'File & Notes Management (CRUD)',
          icon: 'FiBox',
          details: [
            'Supports full CRUD (Create, Read, Update, Delete) actions for rich-text notes.',
            'Supports secure file uploading and downloading, writing file metadata to MySQL and serving downloads.',
            'Updates a global updated_at user activity timestamp whenever notes or files are modified, showing real-time feedback on the user profile.'
          ]
        },
        {
          title: 'Resilient Database Layer',
          icon: 'FiDatabase',
          details: [
            'Implements a connection recovery handler (@app.before_request) that automatically detects and reconnects dropped MySQL database connections, preventing timeouts or crashed requests.'
          ]
        },
        {
          title: 'Premium Responsive UI/UX Design',
          icon: 'FiSmartphone',
          details: [
            'Designed a unified aesthetic featuring CSS glassmorphic cards, gradients, and typography using Google Fonts (Outfit).',
            'Mobile-First Tables: Automatically transforms standard database lists and tables into responsive, tap-friendly card layout elements on screens <= 768px.',
            'Collapsible Navigation: Implements a slide-out sidebar menu controlled by a hamburger button with automatic "click outside to collapse" touch events.'
          ]
        },
        {
          title: 'Cloud Infrastructure & Web Server Deployment',
          icon: 'FiServer',
          details: [
            'Deployed on an AWS EC2 (Ubuntu) instance.',
            'Configured Gunicorn as the WSGI server run by systemd.',
            'Set up Nginx as a reverse proxy, linking incoming HTTP traffic to Gunicorn\'s Unix domain socket for performance and security.'
          ]
        }
      ]
    }
  },
  {
    title: 'Image Captioning System',
    description:
      'An AI-powered image captioning tool leveraging Hugging Face\'s BLIP model and deep learning to generate natural-language descriptions for uploaded images. Built with Streamlit for instant interaction.',
    icon: FiImage,
    iconName: 'FiImage',
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
    demo: 'https://chintadavasudharini-imagecaption.streamlit.app/',
    badge: 'AI · ML',
    detailedWriteup: {
      overview: 'An AI-powered image captioning tool leveraging Hugging Face\'s BLIP model and deep learning to generate natural-language descriptions for uploaded images. Built with Streamlit for instant interaction.',
      techStack: [
        { category: 'AI / ML', tech: 'Hugging Face Transformers, BLIP (Bootstrapping Language-Image Pre-training) Model, PyTorch' },
        { category: 'Frontend/UI', tech: 'Streamlit Framework, Custom CSS, Python-based Interactive Elements' },
        { category: 'Deployment', tech: 'Streamlit Community Cloud' },
        { category: 'NLP', tech: 'Natural Language Processing tokenization and caption generation workflows' }
      ],
      sections: [
        {
          title: 'BLIP Transformer Model Integration',
          icon: 'FiCpu',
          details: [
            'Integrates Salesforce\'s BLIP vision-language pre-trained model via Hugging Face\'s library.',
            'Extracts contextual semantics from images to generate cohesive natural language captions.'
          ]
        },
        {
          title: 'Interactive User Interface',
          icon: 'FiLayout',
          details: [
            'Utilizes Streamlit to build a clean, responsive layout with drag-and-drop file uploading.',
            'Provides instant visual feedback with real-time rendering of uploaded images alongside generated descriptions.'
          ]
        },
        {
          title: 'Optimized Inference Workflows',
          icon: 'FiServer',
          details: [
            'Leverages PyTorch CPU execution optimization to execute model inference efficiently.',
            'Implements custom Streamlit caching decorators to load the transformer weights into memory once, bypassing slow reload times.'
          ]
        }
      ]
    }
  },
  {
    title: 'Home Inventory Tracker',
    description:
      'A production-ready Flask web application for securely managing household inventory with an intuitive interactive dashboard and real-time updates.',
    icon: FiBox,
    iconName: 'FiBox',
    gradient: 'from-pink-500 via-rose-500 to-red-500',
    glow: 'rgba(244,63,94,0.3)',
    tags: ['Python', 'Flask', 'Render', 'Authentication', 'Inventory'],
    features: [
      'Secure Session-based Authentication',
      'Full CRUD Inventory Management',
      'Multi-field Search & Filtering',
      'Deployed on Render with Gunicorn',
    ],
    github: 'https://github.com/chintadavasudharini/HomeInventoryTracker',
    demo: 'https://homeinventorytracker-t7if.onrender.com/',
    badge: 'Production Ready',
    detailedWriteup: {
      overview: 'A production-ready Flask web application for securely managing household inventory with an intuitive interactive dashboard and real-time updates.',
      techStack: [
        { category: 'Backend', tech: 'Python, Flask, Gunicorn' },
        { category: 'Database', tech: 'SQLite (Local Dev), PostgreSQL (Production migration ready)' },
        { category: 'Security', tech: 'Session-based User Authentication, bcrypt-hashed passwords' },
        { category: 'Deployment', tech: 'Render, Gunicorn WSGI server' }
      ],
      sections: [
        {
          title: 'Secure Session-Based Auth',
          icon: 'FiLock',
          details: [
            'Protects routes using Flask sessions, ensuring only logged-in users can manage inventory items.',
            'Encodes session data securely using App Secret Keys to prevent tampering.'
          ]
        },
        {
          title: 'Inventory CRUD Management',
          icon: 'FiBox',
          details: [
            'Provides full Create, Read, Update, and Delete endpoints for tracking household items.',
            'Stores item details like names, categories, quantities, locations, and optional purchase dates.'
          ]
        },
        {
          title: 'Multi-Field Searching & Filtering',
          icon: 'FiDatabase',
          details: [
            'Implements SQL-based search querying to let users search products by title, category, or location.',
            'Sorts items dynamically to highlight low stock levels or specific item groups.'
          ]
        }
      ]
    }
  },
  {
    title: 'SecureTrust Banking System',
    description:
      'A comprehensive Flask-based banking simulation featuring multi-tier authentication (User/Admin), real-time balance tracking, and secure fund transfers with detailed transaction logging.',
    icon: FiShield,
    iconName: 'FiShield',
    gradient: 'from-blue-600 via-indigo-600 to-violet-600',
    glow: 'rgba(79,70,229,0.3)',
    tags: ['Python', 'Flask', 'Session Auth', 'Banking UI', 'Admin Portal', 'Jinja2'],
    features: [
      'Multi-tier Auth (User & Admin Portals)',
      'Secure Deposits, Withdrawals & Transfers',
      'Transaction History & Account Statements',
      'Admin User Management & Monitoring',
    ],
    github: 'https://github.com/chintadavasudharini/SecureTrust',
    demo: 'https://securetrust.onrender.com',
    badge: 'Banking Demo',
    detailedWriteup: {
      overview: 'A comprehensive Flask-based banking simulation featuring multi-tier authentication (User/Admin), real-time balance tracking, and secure fund transfers with detailed transaction logging.',
      techStack: [
        { category: 'Backend', tech: 'Python, Flask, Jinja2 Templates' },
        { category: 'Database', tech: 'SQLite / MySQL, SQLAlchemy ORM' },
        { category: 'Security', tech: 'Multi-tier Authorization (User/Admin roles), CSRF mitigation, transaction checks' },
        { category: 'Deployment', tech: 'Render, Gunicorn' }
      ],
      sections: [
        {
          title: 'Multi-Tier Role-Based Security',
          icon: 'FiShield',
          details: [
            'Separates user routes from administrative configuration paths.',
            'Enforces strict backend checks to prevent cross-account data leaking or unauthorized admin operations.'
          ]
        },
        {
          title: 'Transactional Balance Operations',
          icon: 'FiDatabase',
          details: [
            'Implements deposits, withdrawals, and bank transfers.',
            'Employs database transaction locks or validation steps to ensure balances remain consistent.'
          ]
        },
        {
          title: 'Comprehensive Logs & Auditing',
          icon: 'FiFileText',
          details: [
            'Generates detailed statements listing date, transaction ID, type, sender, receiver, and amount.',
            'Admin panel provides global metrics, user management, and transactional auditing.'
          ]
        }
      ]
    }
  },
  {
    title: 'Book Collection Tracker',
    description:
      'A Flask-based web application that helps users manage their personal book collections with secure authentication, modern UI, and deployment-ready configurations.',
    icon: FiBook,
    iconName: 'FiBook',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    glow: 'rgba(16,185,129,0.3)',
    tags: ['Python', 'Flask', 'SQLite', 'Authentication', 'Render', 'Responsive UI'],
    features: [
      'Secure User Authentication (Register/Login)',
      'Complete Book Management (CRUD)',
      'Quick Search & Filter functionality',
      'Deployment-ready for Render & Heroku',
    ],
    github: 'https://github.com/chintadavasudharini/BookCollectionTracker',
    demo: 'https://book-collection-tracker.onrender.com/',
    badge: 'Full Stack',
    detailedWriteup: {
      overview: 'A Flask-based web application that helps users manage their personal book collections with secure authentication, modern UI, and deployment-ready configurations.',
      techStack: [
        { category: 'Backend', tech: 'Python, Flask' },
        { category: 'Database', tech: 'SQLite (development), PostgreSQL (production-ready)' },
        { category: 'Deployment', tech: 'Render, Heroku' }
      ],
      sections: [
        {
          title: 'Personal Book Collections (CRUD)',
          icon: 'FiBook',
          details: [
            'Enables logging details like book title, author, total pages, rating, read status, and comments.',
            'Full CRUD operations tied to a specific user session so collections are kept private.'
          ]
        },
        {
          title: 'Dynamic Filtering & Searching',
          icon: 'FiLayout',
          details: [
            'Provides instant queries to search collections by author, title, or status (read vs. unread).',
            'Clean responsive cards that scale beautifully down to mobile devices.'
          ]
        }
      ]
    }
  },
  {
    title: 'Cloud Storage Manager',
    description:
      'A web-based interface for managing AWS S3 buckets — upload, download, organize and share files securely with presigned URLs and IAM-based access controls.',
    icon: FiCloud,
    iconName: 'FiCloud',
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
    demo: '#',
    badge: 'AWS S3',
    detailedWriteup: {
      overview: 'A web-based interface for managing AWS S3 buckets — upload, download, organize and share files securely with presigned URLs and IAM-based access controls.',
      techStack: [
        { category: 'Backend', tech: 'Python, Flask, Boto3 (AWS SDK)' },
        { category: 'Cloud Infrastructure', tech: 'AWS S3 Buckets, AWS IAM Access Key Controls' },
        { category: 'Security', tech: 'Presigned Temporary URLs, SSL/TLS data transfer' }
      ],
      sections: [
        {
          title: 'Direct AWS S3 Integration',
          icon: 'FiCloud',
          details: [
            'Connects to AWS using verified access credentials via Boto3.',
            'Supports file list queries, object metadata retrieval, and bucket management.'
          ]
        },
        {
          title: 'Secure Sharing with Presigned URLs',
          icon: 'FiLock',
          details: [
            'Generates secure links that expire after a configurable duration (e.g. 1 hour).',
            'Keeps the target S3 bucket fully private while granting limited read/download privileges to third parties.'
          ]
        }
      ]
    }
  }
];

function ProjectCard({ project, delay, onOpenDetails }) {
  const Icon = project.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className="project-card glass-card flex flex-col h-full cursor-pointer group/card"
      aria-label={project.title}
      onClick={onOpenDetails}
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
        <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Feature list */}
        <ul className="space-y-1.5 mb-5 flex-1">
          {project.features.map(f => (
            <li key={f} className="flex items-start gap-2 text-[var(--text-muted)] text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 flex-shrink-0 mt-1.5" />
              {f}
            </li>
          ))}
        </ul>

        {/* View Case Study prompt */}
        <div className="text-xs font-semibold text-purple-400 light:text-sky-600 group-hover/card:text-cyan-400 light:group-hover/card:text-sky-500 transition-colors flex items-center gap-1 mb-4">
          View Case Study & Specs →
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-2 mt-auto pt-4 border-t border-[var(--border-glass)]" onClick={(e) => e.stopPropagation()}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex-1 justify-center flex items-center gap-1.5 whitespace-nowrap"
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
            aria-label={`View ${project.title} on GitHub`}
          >
            <FiGithub size={14} />
            GitHub
          </a>
          {project.demo && project.demo !== '#' && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 justify-center flex items-center gap-1.5 whitespace-nowrap"
              style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
              aria-label={`View Live Demo for ${project.title}`}
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
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseDetails = () => {
    setIsModalOpen(false);
  };

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
            <ProjectCard key={p.title} project={p} delay={i * 0.12} onOpenDetails={() => handleOpenDetails(p)} />
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

      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseDetails}
      />
    </section>
  );
}
