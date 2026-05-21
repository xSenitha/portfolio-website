import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import { socialLinks } from '../data/socialLinks';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitting(true);

    // Simulate form submission API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 4000);
    }, 1200);
  };

  const contactDetails = socialLinks.map(link => {
    let displayVal = "senitha817s@gmail.com";
    if (link.name === "GitHub") displayVal = "https://github.com/xSenitha";
    else if (link.name === "LinkedIn") displayVal = "https://linkedin.com/in/senitha-gihen-5061b2311";
    else if (link.name === "Discord") displayVal = "@senix_tha";

    return {
      name: link.name,
      url: link.url,
      value: displayVal,
      icon: link.icon,
      color: link.color,
      hoverColor: link.hoverColor
    };
  });

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow element */}
      <div className="glow-accent top-1/3 right-1/4 w-[300px] h-[300px] bg-accent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-text"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accent mx-auto mt-4 rounded-full"
          />
          <p className="text-muted mt-6 max-w-xl mx-auto text-sm md:text-base">
            Have an internship role, a project idea, or simply want to connect? Send a message below or contact me through any platform!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl border border-cardBorder h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-text mb-6 text-left">Contact Info</h3>
                <div className="space-y-6">
                  {contactDetails.map((detail) => {
                    const Icon = detail.icon;
                    return (
                      <a
                        key={detail.name}
                        href={detail.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group p-3.5 rounded-xl bg-bg/30 border border-cardBorder/30 hover:border-accent/30 transition-all duration-300 text-left"
                      >
                        <div
                          className="w-11 h-11 rounded-lg flex items-center justify-center bg-bg/70 shadow-sm flex-shrink-0"
                          style={{ color: detail.color }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] text-muted font-semibold uppercase tracking-wider">{detail.name}</p>
                          <p className="text-sm font-medium text-text group-hover:text-accent transition-colors duration-300 truncate">
                            {detail.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-cardBorder text-xs text-muted leading-relaxed text-left">
                Currently open to internships, contract projects, and developer collaborations. I will make sure to follow up within 24 hours.
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 rounded-2xl border border-cardBorder">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-left text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3.5 rounded-xl border border-cardBorder bg-bg/30 text-text placeholder-muted/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-left text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="example@gmail.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-cardBorder bg-bg/30 text-text placeholder-muted/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-left text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows="5"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3.5 rounded-xl border border-cardBorder bg-bg/30 text-text placeholder-muted/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 text-sm resize-none"
                  />
                </div>

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-accent text-white font-medium hover:bg-accent/90 focus:outline-none transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-md shadow-accent/15 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : isSuccess ? (
                    "Message Sent!"
                  ) : (
                    <>
                      <FaPaperPlane className="w-3.5 h-3.5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
