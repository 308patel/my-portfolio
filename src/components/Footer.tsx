import React from 'react';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Jaydeep Patel</h2>
            <p className="text-slate-300">Node.js Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/jaydeep-patel-081b5b1b3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:jaydeepatel2001@gmail.com" 
              className="text-slate-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <hr className="border-slate-700 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>&copy; {currentYear} Jaydeep Patel. All rights reserved.</p>
          
          <div className="mt-4 md:mt-0">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-slate-400 hover:text-white transition-colors"
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