import React from "react";
import { Linkedin, Mail, MapPin, ChevronDown, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full mix-blend-screen filter blur-[128px] animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/30 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-4000" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-3/5"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm"
            >
              🚀 Welcome to my portfolio
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-textMain mb-4 leading-tight">
              Hi, I'm <br />
              <span className="text-gradient">Jaydeep Patel</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-textMain/80 mb-6 font-medium flex items-center gap-2">
              <Code2 size={24} className="text-secondary" />
              Node.js Developer
            </h2>
            <p className="text-lg text-textMuted mb-8 leading-relaxed max-w-xl">
              Passionate about creating robust backend solutions with 2+ years
              of experience developing APIs and integrating systems for various
              industries including automotive, hospitality, and shipping.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl text-center font-medium hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border border-primary/20 glass text-textMain rounded-xl text-center font-medium hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-1"
              >
                View Projects
              </a>
            </div>

            <div className="flex items-center flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 text-textMuted bg-surfaceLight/50 px-4 py-2 rounded-full border border-primary/10">
                <MapPin size={16} className="text-primary" />
                <span>Nadiad, Gujarat, India</span>
              </div>

              <a
                href="https://www.linkedin.com/in/jaydeep-patel-081b5b1b3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-textMuted bg-surfaceLight/50 px-4 py-2 rounded-full border border-primary/10 hover:text-textMain hover:border-primary/50 transition-all"
              >
                <Linkedin size={16} className="text-primary" />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:jaydeepatel2001@gmail.com"
                className="flex items-center gap-2 text-textMuted bg-surfaceLight/50 px-4 py-2 rounded-full border border-primary/10 hover:text-textMain hover:border-primary/50 transition-all"
              >
                <Mail size={16} className="text-primary" />
                <span>Email</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-3/4 md:w-2/5 relative"
          >
            <Tilt options={{ max: 15, scale: 1.05, speed: 400 }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[2rem] transform rotate-3 scale-105 opacity-50 blur-xl"></div>
                <div className="aspect-square rounded-[2rem] glass p-2 relative z-10 overflow-hidden border border-primary/10 group">
                  <div className="w-full h-full bg-surface rounded-[1.5rem] overflow-hidden relative">
                    <img
                      src="/profile.jpg"
                      alt="Jaydeep Patel"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>
      
      <motion.button 
        onClick={() => {
          const element = document.getElementById('about');
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-textMuted cursor-pointer hover:text-primary transition-colors z-20"
        aria-label="Scroll to About"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default Hero;
