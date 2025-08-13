import React, { useState } from 'react';

import { motion } from 'framer-motion';
import {
  Clock,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from 'lucide-react';

import { personalInfo } from '../../data/about';

export const ContactBento: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || 'Contact from Portfolio'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="fixed inset-0 overflow-hidden flex items-center justify-center p-4 md:p-6 lg:p-8">
      <div className="w-full h-full max-w-[1600px] flex flex-col">
        <div className="text-center mb-4">
          <p className="text-lg" style={{ color: 'var(--muted)' }}>
            Let's discuss your next project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
          {/* Contact Form - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="soft-surface rounded-2xl p-8 h-full flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <MessageSquare size={24} />
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="soft-surface-sm px-5 py-4 rounded-lg bg-transparent focus-ring text-base"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="soft-surface-sm px-5 py-4 rounded-lg bg-transparent focus-ring text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full soft-surface-sm px-5 py-4 rounded-lg bg-transparent focus-ring text-base"
                placeholder="Subject"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full flex-1 soft-surface-sm px-5 py-4 rounded-lg bg-transparent focus-ring resize-none text-base"
                placeholder="Your message..."
              />

              <button
                type="submit"
                className="w-full soft-surface px-6 py-4 font-medium rounded-lg soft-hover soft-press focus-ring inline-flex items-center justify-center gap-2 text-base"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="soft-surface rounded-2xl p-8 h-full flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="soft-surface-sm p-6 rounded-xl soft-hover group flex flex-col justify-center"
              >
                <Mail
                  className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform"
                  style={{ color: 'var(--muted)' }}
                />
                <p className="font-medium mb-1">Email</p>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  {personalInfo.email}
                </p>
              </a>

              {/* Phone */}
              <div className="soft-surface-sm p-6 rounded-xl flex flex-col justify-center">
                <Phone className="w-12 h-12 mb-3" style={{ color: 'var(--muted)' }} />
                <p className="font-medium mb-1">Phone</p>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  {personalInfo.phone}
                </p>
              </div>

              {/* Location */}
              <div className="soft-surface-sm p-6 rounded-xl flex flex-col justify-center">
                <MapPin className="w-12 h-12 mb-3" style={{ color: 'var(--muted)' }} />
                <p className="font-medium mb-1">Location</p>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  Chennai, India
                </p>
              </div>

              {/* Response Time */}
              <div className="soft-surface-sm p-6 rounded-xl flex flex-col justify-center">
                <Clock className="w-12 h-12 mb-3" style={{ color: 'var(--muted)' }} />
                <p className="font-medium mb-1">Response Time</p>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  Within 24 hours
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-semibold mb-4">Connect on Social</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soft-surface-sm p-4 rounded-lg flex flex-col items-center gap-2 soft-hover soft-press focus-ring"
                >
                  <Github size={24} />
                  <span className="text-xs">GitHub</span>
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soft-surface-sm p-4 rounded-lg flex flex-col items-center gap-2 soft-hover soft-press focus-ring"
                >
                  <Linkedin size={24} />
                  <span className="text-xs">LinkedIn</span>
                </a>
                <a
                  href={personalInfo.social.stackoverflow}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soft-surface-sm p-4 rounded-lg flex flex-col items-center gap-2 soft-hover soft-press focus-ring"
                >
                  <Code2 size={24} />
                  <span className="text-xs">Stack</span>
                </a>
                <a
                  href={personalInfo.social.devto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soft-surface-sm p-4 rounded-lg flex flex-col items-center gap-2 soft-hover soft-press focus-ring"
                >
                  <Code2 size={24} />
                  <span className="text-xs">Dev.to</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
