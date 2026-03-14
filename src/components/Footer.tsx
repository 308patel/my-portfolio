import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-primary/10 text-textMain py-12 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Jaydeep Patel</h2>
            <p className="text-textMuted">Node.js Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/jaydeep-patel-081b5b1b3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-textMuted hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:jaydeepatel2001@gmail.com" 
              className="text-textMuted hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <hr className="border-primary/10 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-textMuted text-sm">
          <p>&copy; {currentYear} Jaydeep Patel. All rights reserved.</p>
          
          <div className="mt-4 md:mt-0">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-textMuted hover:text-primary transition-colors"
            >
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;