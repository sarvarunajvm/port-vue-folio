import React, { useState } from 'react';
import { personalInfo } from '../../data/about';
import { BentoGrid, BentoCard } from '../BentoGrid';
import { Mail, Phone, Github, Linkedin, Code2, Send, MapPin, Clock, MessageSquare } from 'lucide-react';

export const ContactBento: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <p className="text-lg" style={{ color: 'var(--muted)' }}>
          Let's discuss your next project
        </p>
      </div>

        <BentoGrid>
          {/* Contact Form - Large Card */}
          <BentoCard size="large" delay={0.1}>
            <div className="h-full">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MessageSquare size={20} />
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="soft-surface-sm px-4 py-3 rounded-lg bg-transparent focus-ring"
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="soft-surface-sm px-4 py-3 rounded-lg bg-transparent focus-ring"
                    placeholder="your.email@example.com"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full soft-surface-sm px-4 py-3 rounded-lg bg-transparent focus-ring"
                  placeholder="Subject"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full soft-surface-sm px-4 py-3 rounded-lg bg-transparent focus-ring resize-none"
                  placeholder="Your message..."
                />

                <button
                  type="submit"
                  className="w-full soft-surface px-4 py-3 font-medium rounded-lg soft-hover soft-press focus-ring inline-flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </BentoCard>

          {/* Email Card */}
          <BentoCard size="medium" delay={0.2}>
            <a
              href={`mailto:${personalInfo.email}`}
              className="h-full flex flex-col justify-center soft-hover group"
            >
              <Mail className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" style={{ color: 'var(--muted)' }} />
              <p className="text-sm font-medium mb-1">Email</p>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>{personalInfo.email}</p>
            </a>
          </BentoCard>

          {/* Phone Card */}
          <BentoCard size="small" delay={0.3}>
            <div className="h-full flex flex-col justify-center">
              <Phone className="w-8 h-8 mb-2" style={{ color: 'var(--muted)' }} />
              <p className="text-sm font-medium mb-1">Phone</p>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>{personalInfo.phone}</p>
            </div>
          </BentoCard>

          {/* Response Time Card */}
          <BentoCard size="small" delay={0.4}>
            <div className="h-full flex flex-col justify-center items-center text-center">
              <Clock className="w-8 h-8 mb-2" style={{ color: 'var(--muted)' }} />
              <p className="text-lg font-bold">24h</p>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>Avg. Response</p>
            </div>
          </BentoCard>

          {/* Social Links Card */}
          <BentoCard size="medium" delay={0.5}>
            <div className="h-full">
              <h4 className="font-semibold mb-3">Connect on Social</h4>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soft-surface-sm p-2 rounded-lg flex items-center gap-2 soft-hover soft-press focus-ring"
                >
                  <Github size={16} />
                  <span className="text-xs">GitHub</span>
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soft-surface-sm p-2 rounded-lg flex items-center gap-2 soft-hover soft-press focus-ring"
                >
                  <Linkedin size={16} />
                  <span className="text-xs">LinkedIn</span>
                </a>
                <a
                  href={personalInfo.social.stackoverflow}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soft-surface-sm p-2 rounded-lg flex items-center gap-2 soft-hover soft-press focus-ring"
                >
                  <Code2 size={16} />
                  <span className="text-xs">Stack</span>
                </a>
                <a
                  href={personalInfo.social.devto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soft-surface-sm p-2 rounded-lg flex items-center gap-2 soft-hover soft-press focus-ring"
                >
                  <Code2 size={16} />
                  <span className="text-xs">Dev.to</span>
                </a>
              </div>
            </div>
          </BentoCard>

          {/* Location Card */}
          <BentoCard size="small" delay={0.6}>
            <div className="h-full flex flex-col justify-center items-center text-center">
              <MapPin className="w-8 h-8 mb-2" style={{ color: 'var(--muted)' }} />
              <p className="text-sm font-medium">Chennai</p>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>India</p>
            </div>
          </BentoCard>
        </BentoGrid>
    </div>
  );
};