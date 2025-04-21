import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 px-4 bg-slate-50">
      <div 
        ref={contactRef}
        className="container mx-auto max-w-6xl transition-all duration-1000 ease-out opacity-0 translate-y-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-slate-800 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-xl mx-auto">
            Feel free to reach out to me for any inquiries or opportunities. I'm always open to discussing new projects, 
            creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-lg shadow-md text-slate-700">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-1">Email</h4>
                <a 
                  href="mailto:jaydeepatel2001@gmail.com" 
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  jaydeepatel2001@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-lg shadow-md text-slate-700">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-1">Phone</h4>
                <a 
                  href="tel:+918160779122" 
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  +91 8160779122
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-lg shadow-md text-slate-700">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-1">Location</h4>
                <p className="text-slate-600">Nadiad, Gujarat, India</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-lg shadow-md text-slate-700">
                <Linkedin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-1">LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/jaydeep-patel-081b5b1b3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  linkedin.com/in/jaydeep-patel-081b5b1b3
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;