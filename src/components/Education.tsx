import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'Master of Computer Application',
    institution: 'Charotar University of Science And Technology',
    location: 'Changa, Anand',
    year: '2023',
    score: '8.39'
  },
  {
    degree: 'Bachelor of Computer Application',
    institution: 'Charotar University of Science And Technology',
    location: 'Changa, Anand',
    year: '2021',
    score: '8.52'
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-textMain mb-4 flex items-center justify-center gap-3">
            <span className="text-secondary bg-secondary/10 p-2 rounded-lg"><BookOpen size={32} /></span>
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-primary/30 via-secondary/30 to-transparent transform md:-translate-x-px hidden md:block z-0"></div>
          
          <div className="space-y-16">
            {education.map((edu, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                key={index} 
                className="relative z-10"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -mt-2 w-8 h-8 rounded-full bg-surface border-4 border-secondary shadow-[0_0_15px_rgba(139,92,246,0.5)] items-center justify-center z-20">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                
                <div className={`md:w-[45%] ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                  <div className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute top-6 right-6 bg-primary/10 p-3 rounded-xl border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <GraduationCap size={28} className="text-primary" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-textMain mb-3 pr-16">{edu.degree}</h3>
                    <p className="text-secondary font-medium text-lg mb-6">{edu.institution}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-8 text-textMuted font-medium">
                      <div className="flex items-center gap-2 bg-surfaceLight px-4 py-1.5 rounded-full border border-primary/10 shadow-inner">
                        <Calendar size={18} className="text-primary" />
                        <span>{edu.year}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-surfaceLight px-4 py-1.5 rounded-full border border-primary/10 shadow-inner">
                        <MapPin size={18} className="text-primary" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    <div className="bg-surfaceLight/50 p-5 rounded-2xl border border-primary/10 shadow-inner relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-textMuted font-medium tracking-wider uppercase text-sm">CGPA</span>
                        <span className="text-textMain font-bold text-xl">{edu.score}<span className="text-textMuted/60 text-sm">/10</span></span>
                      </div>
                      <div className="h-2 bg-surface rounded-full overflow-hidden border border-primary/10">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${parseFloat(edu.score) * 10}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;