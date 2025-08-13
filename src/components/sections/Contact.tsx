import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/about';
import { Mail, Phone, Github, Linkedin, Code2, Send, CheckCircle, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || 'Contact from Portfolio'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    // Show success message
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4">Get In Touch</h2>
          <p className="text-center text-muted mb-12 text-lg">
            Let's discuss your next project
          </p>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="soft-surface p-6 h-full">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-3 soft-surface-sm p-4 soft-hover group"
                  >
                    <Mail size={20} className="text-muted group-hover:text-current transition-colors" />
                    <div>
                      <p className="text-sm text-muted">Email</p>
                      <p className="text-sm font-medium">{personalInfo.email}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 soft-surface-sm p-4">
                    <Phone size={20} className="text-muted" />
                    <div>
                      <p className="text-sm text-muted">Phone</p>
                      <p className="text-sm font-medium">{personalInfo.phone}</p>
                    </div>
                  </div>

                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 soft-surface-sm p-4 soft-hover group"
                  >
                    <Github size={20} className="text-muted group-hover:text-current transition-colors" />
                    <div>
                      <p className="text-sm text-muted">GitHub</p>
                      <p className="text-sm font-medium">@{personalInfo.username}</p>
                    </div>
                  </a>

                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 soft-surface-sm p-4 soft-hover group"
                  >
                    <Linkedin size={20} className="text-muted group-hover:text-current transition-colors" />
                    <div>
                      <p className="text-sm text-muted">LinkedIn</p>
                      <p className="text-sm font-medium">Connect on LinkedIn</p>
                    </div>
                  </a>

                  <a
                    href={personalInfo.social.stackoverflow}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 soft-surface-sm p-4 soft-hover group"
                  >
                    <Code2 size={20} className="text-muted group-hover:text-current transition-colors" />
                    <div>
                      <p className="text-sm text-muted">Stack Overflow</p>
                      <p className="text-sm font-medium">View Profile</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="soft-surface p-6">
                <h3 className="text-xl font-semibold mb-6">Send Message</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full soft-surface-sm px-4 py-3 bg-transparent focus-ring"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full soft-surface-sm px-4 py-3 bg-transparent focus-ring"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full soft-surface-sm px-4 py-3 bg-transparent focus-ring"
                      placeholder="Project Discussion"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full soft-surface-sm px-4 py-3 bg-transparent focus-ring resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full soft-surface px-4 py-3 font-medium soft-hover soft-press focus-ring inline-flex items-center justify-center gap-2"
                  >
                    {status === 'idle' && (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                    {status === 'sending' && 'Sending...'}
                    {status === 'success' && (
                      <>
                        <CheckCircle size={20} />
                        Message Sent!
                      </>
                    )}
                    {status === 'error' && (
                      <>
                        <AlertCircle size={20} />
                        Error Sending
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};