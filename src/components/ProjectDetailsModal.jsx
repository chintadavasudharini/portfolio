import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'react-icons/fi';

// Helper to dynamically render feather icons by name
function DynamicIcon({ name, size = 20, className = '' }) {
  const IconComponent = Icons[name] || Icons.FiBox;
  return <IconComponent size={size} className={className} />;
}

export default function ProjectDetailsModal({ project, isOpen, onClose }) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-hidden">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full max-w-5xl h-[90vh] md:h-[85vh] bg-[#070b14] light:bg-white rounded-2xl border border-white/10 light:border-sky-200/50 shadow-2xl flex flex-col overflow-hidden z-10"
            style={{
              backgroundColor: 'var(--bg-primary)',
              borderColor: 'var(--border-glass)',
            }}
          >
            {/* Top Brand Color Bar */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

            {/* Modal Header */}
            <header className="flex items-center justify-between px-6 py-4 border-b border-white/5 light:border-gray-100 bg-white/2 light:bg-black/[0.01]">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white shadow-md`}>
                  <DynamicIcon name={project.iconName || 'FiBox'} size={18} />
                </div>
                <div>
                  <h3 className="text-white light:text-gray-900 font-bold font-['Space_Grotesk'] text-lg leading-none">
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-[10px] uppercase tracking-wider font-semibold mt-1">
                    Technical Case Study
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/5 light:bg-gray-100 border border-white/10 light:border-gray-200 text-[var(--text-muted)]">
                  {project.badge}
                </span>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 light:bg-gray-100 hover:bg-red-500/20 hover:text-red-400 light:hover:text-red-600 transition-all duration-200 cursor-pointer"
                  aria-label="Close details modal"
                >
                  <Icons.FiX size={18} />
                </button>
              </div>
            </header>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar-container">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 p-6 md:p-8">
                
                {/* Left Side: Overview & Tech Specs */}
                <div className="lg:col-span-1 space-y-6">
                  {/* Overview */}
                  <section className="space-y-3">
                    <h4 className="text-sm font-bold text-white light:text-gray-900 font-['Space_Grotesk'] uppercase tracking-wider flex items-center gap-2">
                      <Icons.FiInfo className="text-purple-400" />
                      Overview
                    </h4>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                      {project.detailedWriteup?.overview || project.description}
                    </p>
                  </section>

                  {/* Tech Stack Specs Table */}
                  <section className="space-y-3">
                    <h4 className="text-sm font-bold text-white light:text-gray-900 font-['Space_Grotesk'] uppercase tracking-wider flex items-center gap-2">
                      <Icons.FiCpu className="text-cyan-400" />
                      Technical Stack
                    </h4>
                    <div className="border border-white/5 light:border-gray-200 rounded-xl overflow-hidden divide-y divide-white/5 light:divide-gray-100 text-xs">
                      {project.detailedWriteup?.techStack ? (
                        project.detailedWriteup.techStack.map((item, index) => (
                          <div key={index} className="flex p-3 bg-white/[0.01] light:bg-gray-50/30">
                            <span className="w-24 font-bold text-[var(--text-primary)] opacity-80 shrink-0">
                              {item.category}
                            </span>
                            <span className="text-[var(--text-muted)] leading-normal">
                              {item.tech}
                            </span>
                          </div>
                        ))
                      ) : (
                        <div className="flex flex-wrap gap-1.5 p-3">
                          {project.tags.map(tag => (
                            <span key={tag} className="tag">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </section>

                  {/* Project Links CTA */}
                  <div className="flex flex-col gap-2.5 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline w-full justify-center flex items-center gap-2 cursor-pointer"
                      aria-label="View source code on GitHub"
                    >
                      <Icons.FiGithub size={16} />
                      GitHub Repository
                    </a>
                    {project.demo && project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full justify-center flex items-center gap-2 cursor-pointer"
                        aria-label="Launch Live Deployment Demo"
                      >
                        <Icons.FiExternalLink size={16} />
                        Launch Live Application
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Side: Detailed Features & Case Study */}
                <div className="lg:col-span-2 space-y-6">
                  <h4 className="text-sm font-bold text-white light:text-gray-900 font-['Space_Grotesk'] uppercase tracking-wider flex items-center gap-2">
                    <Icons.FiAward className="text-purple-400" />
                    Key Features & Implementations
                  </h4>

                  <div className="space-y-4">
                    {project.detailedWriteup?.sections?.map((section, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="p-5 rounded-xl border border-white/5 light:border-gray-200 bg-white/[0.02] light:bg-gray-50/20 hover:border-purple-500/20 light:hover:border-purple-500/30 hover:bg-white/[0.03] transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          {/* Feature Icon container */}
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white shrink-0 shadow-sm opacity-90`}>
                            <DynamicIcon name={section.icon} size={18} />
                          </div>

                          <div className="space-y-2 flex-1">
                            <h5 className="font-bold text-white light:text-gray-900 text-sm font-['Space_Grotesk']">
                              {section.title}
                            </h5>
                            <ul className="space-y-2">
                              {section.details.map((detail, dIdx) => (
                                <li key={dIdx} className="flex items-start gap-2 text-[var(--text-muted)] text-xs leading-relaxed">
                                  <Icons.FiCheck size={13} className="text-cyan-400 shrink-0 mt-0.5" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Footer */}
            <footer className="px-6 py-3 border-t border-white/5 light:border-gray-100 flex justify-between items-center bg-white/2 light:bg-black/[0.01]">
              <span className="text-[10px] text-[var(--text-muted)] opacity-60">
                © {new Date().getFullYear()} Chintada Vasudharini
              </span>
              <button
                onClick={onClose}
                className="text-[11px] font-bold text-purple-400 hover:text-purple-300 light:text-purple-600 light:hover:text-purple-700 transition-colors cursor-pointer"
              >
                Close Case Study
              </button>
            </footer>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
