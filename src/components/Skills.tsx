import React, { useEffect, useRef } from 'react';

const skills = [
  { 
    name: 'Node.js', 
    percentage: 90,
    color: 'bg-green-500'
  },
  { 
    name: 'Express.js', 
    percentage: 75,
    color: 'bg-gray-700'
  },
  { 
    name: 'NestJs', 
    percentage: 80,
    color: 'bg-red-600'
  },
  { 
    name: 'Strapi', 
    percentage: 70,
    color: 'bg-blue-600'
  },
  { 
    name: 'MySQL', 
    percentage: 70,
    color: 'bg-blue-500'
  },
  { 
    name: 'TypeORM', 
    percentage: 75,
    color: 'bg-red-500'
  },
  { 
    name: 'API Development', 
    percentage: 90,
    color: 'bg-purple-600'
  }
];

const technologies = [
  'JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'NestJs', 'Strapi', 
  'MySQL', 'MongoDB', 'TypeORM', 'RESTful APIs', 'Authentication', 
  'Third-party Integrations', 'Git', 'Agile Development'
];

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
          
          // Animate skill bars
          const skillBars = document.querySelectorAll('.skill-bar');
          skillBars.forEach((bar, index) => {
            setTimeout(() => {
              bar.classList.add('skill-bar-animated');
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 px-4 bg-slate-50">
      <div 
        ref={skillsRef}
        className="container mx-auto max-w-6xl transition-all duration-1000 ease-out opacity-0 translate-y-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-slate-800 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">Technical Proficiency</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-800">{skill.name}</span>
                    <span className="text-slate-600">{skill.percentage}%</span>
                  </div>
                  <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${skill.color} skill-bar rounded-full`} 
                      style={{ 
                        width: '0%', // Start at 0 for animation
                        maxWidth: `${skill.percentage}%`,
                        transition: 'width 1s ease-in-out'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">Technologies & Tools</h3>
            
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 hover:shadow-md transition-shadow cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Languages</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-800">Gujarati</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-4 h-4 rounded-full mx-1 ${i < 5 ? 'bg-slate-800' : 'bg-slate-300'}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-800">Hindi</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-4 h-4 rounded-full mx-1 ${i < 5 ? 'bg-slate-800' : 'bg-slate-300'}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-800">English</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-4 h-4 rounded-full mx-1 ${i < 4 ? 'bg-slate-800' : 'bg-slate-300'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx="true">{`
        .skill-bar-animated {
          width: 100%; /* This will be limited by the max-width set in the inline style */
        }
      `}</style>
    </section>
  );
};

export default Skills;