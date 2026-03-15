import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      // NOTE: You need to replace these with your actual EmailJS credentials
      // Sign up at https://www.emailjs.com/

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_name: 'Jaydeep',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-surface relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-textMain mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-textMuted max-w-2xl mx-auto text-lg leading-relaxed">
            Feel free to reach out to me for any inquiries or opportunities. I'm always open to discussing new projects,
            creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              { icon: <Mail size={24} />, title: 'Email', value: 'jaydeepatel2001@gmail.com', link: 'mailto:jaydeepatel2001@gmail.com' },
              { icon: <Phone size={24} />, title: 'Phone', value: '+91 8160779122', link: 'tel:+918160779122' },
              { icon: <MapPin size={24} />, title: 'Location', value: 'Nadiad, Gujarat, India', link: '#' },
              { icon: <Linkedin size={24} />, title: 'LinkedIn', value: 'jaydeep-patel', link: 'https://www.linkedin.com/in/jaydeep-patel-081b5b1b3' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-6 glass-card p-6"
              >
                <div className="p-4 bg-surface rounded-2xl text-primary border border-primary/10 shadow-inner">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-textMuted mb-1">{item.title}</h4>
                  {item.link !== '#' ? (
                    <a href={item.link} target={item.link.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" className="text-textMain hover:text-primary transition-colors text-lg">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-textMain text-lg">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="block text-textMuted mb-2 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface/50 border border-primary/10 rounded-xl px-4 py-3 text-textMain focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-textMuted/40"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-textMuted mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface/50 border border-primary/10 rounded-xl px-4 py-3 text-textMain focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-textMuted/40"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-textMuted mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-surface/50 border border-primary/10 rounded-xl px-4 py-3 text-textMain focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none placeholder:text-textMuted/40"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-primary hover:bg-primary/9 group hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    Sending...
                    <Loader2 size={18} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;