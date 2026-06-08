import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload } from 'react-icons/fi';

export default function ResumeModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label="Resume viewer"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-5xl h-[90vh] bg-[#0d1117] rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0d1117]">
              <h3 className="text-white font-semibold font-['Space_Grotesk']">Resume Viewer</h3>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-red-500/20 hover:text-red-400 transition-all duration-300 group"
                aria-label="Close viewer"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* PDF Content */}
            <div className="flex-1 bg-white/5 relative">
              <iframe
                src="/CHINTADA.VASUDHARINI.pdf#toolbar=0"
                className="w-full h-full border-none"
                title="Resume PDF"
              />
            </div>

            {/* Bottom Bar / Download Action */}
            <div className="absolute bottom-6 right-6 z-10">
              <a
                href="/CHINTADA.VASUDHARINI.pdf"
                download
                className="btn-primary flex items-center gap-2 shadow-2xl shadow-purple-500/30"
                aria-label="Download PDF"
              >
                <FiDownload size={18} />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Overlay click to close */}
          <div className="absolute inset-0 -z-10" onClick={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
