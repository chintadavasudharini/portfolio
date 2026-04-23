import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiSend, FiCheck, FiAlertCircle, FiCode, FiPhone } from 'react-icons/fi';

const contactLinks = [
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'chintadavasudharini',
    href: 'https://github.com/chintadavasudharini',
    color: 'text-slate-500',
    bg: 'var(--border-divider)',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'chintada-vasudharini-nov21',
    href: 'https://www.linkedin.com/in/chintada-vasudharini-nov21/',
    color: 'text-blue-500',
    bg: 'rgba(59, 130, 246, 0.08)',
  },
  {
    icon: FiMail,
    label: 'Email',
    value: 'chintadavasudharini@gmail.com',
    href: 'mailto:chintadavasudharini@gmail.com',
    color: 'text-purple-500',
    bg: 'rgba(139, 92, 246, 0.08)',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 7396922477',
    href: 'tel:+917396922477',
    color: 'text-green-500',
    bg: 'rgba(34, 197, 94, 0.08)',
  },
];

export default function Contact() {
  const ref     = useRef(null);
  const inView  = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError]   = useState('');

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setStatus('sending');
    /* ── Replace with your EmailJS credentials ── */
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        throw new Error('Send failed');
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="section-pad relative" aria-label="Contact section">
      <div className="orb orb-cyan   w-[400px] h-[400px] top-0 right-[-80px] opacity-20" />
      <div className="orb orb-purple w-[300px] h-[300px] bottom-0 left-[-60px] opacity-20" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">Let's connect</p>
          <h2 className="section-heading">Get In <span className="gradient-text">Touch</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mt-4" />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            I'm currently open to new opportunities. Whether you have a question, a project idea,
            or just want to say hi — my inbox is always open!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="glass-card p-6 sm:p-8">
              <h3 className="font-['Space_Grotesk'] font-bold text-[var(--text-primary)] text-xl mb-1">Chintada Vasudharini</h3>
              <p className="gradient-text text-sm font-semibold mb-4 text-base">Python Full Stack · AWS · AI-ML</p>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-8">
                Based in Andhra Pradesh, India · Available for full-time roles &amp; freelance projects.
              </p>
              <div className="flex flex-col gap-3">
                {contactLinks.map(link => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('mailto') || link.href.startsWith('tel') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl border border-[var(--border-glass)] hover:border-purple-500/40 transition-all duration-300 group"
                      style={{ background: link.bg }}
                      aria-label={link.label}
                    >
                      <Icon size={20} className={link.color} />
                      <div>
                        <p className="text-[var(--text-muted)] text-xs">{link.label}</p>
                        <p className="text-[var(--text-primary)] text-sm font-medium group-hover:text-[var(--accent-purple)] transition-colors">{link.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="glass-card p-5 flex items-center justify-center gap-4">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <div>
                <p className="text-[var(--text-primary)] text-sm font-semibold">Available for opportunities</p>
                <p className="text-[var(--text-muted)] text-xs text-center">Let's build something amazing!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
