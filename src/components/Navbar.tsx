import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="text-slate-900 font-bold text-xl">JP</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['about', 'experience', 'projects', 'skills', 'education', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-slate-700 hover:text-slate-900 capitalize font-medium"
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-800" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full py-4">
          <div className="flex flex-col space-y-4 px-4">
            {['about', 'experience', 'projects', 'skills', 'education', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-slate-700 hover:text-slate-900 py-2 capitalize font-medium text-left"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;