import React, { useEffect, useRef } from 'react';
import { Code, Server, Database } from 'lucide-react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div 
        ref={aboutRef}
        className="container mx-auto max-w-6xl transition-all duration-1000 ease-out opacity-0 translate-y-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-slate-800 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Who I Am</h3>
            <p className="text-slate-700 mb-6 leading-relaxed">
              I'm a passionate Node.js developer with over 2 years of hands-on experience in crafting robust backend solutions. 
              My expertise lies in designing and implementing efficient APIs that power a variety of applications across 
              different industries.
            </p>
            <p className="text-slate-700 mb-6 leading-relaxed">
              I'm fluent in Gujarati, Hindi, and English, allowing me to communicate effectively in diverse environments.
              My approach combines technical excellence with strong problem-solving skills to deliver solutions that exceed expectations.
            </p>
            <p className="text-slate-700 leading-relaxed">
              I thrive in collaborative environments where I can contribute to the full development lifecycle and continuously 
              expand my technical knowledge.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">What I Do</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded-lg text-slate-700">
                  <Server size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Backend Development</h4>
                  <p className="text-slate-600">
                    I develop scalable and maintainable backend systems using Node.js, Express, NestJs, and Strapi.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded-lg text-slate-700">
                  <Code size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">API Development</h4>
                  <p className="text-slate-600">
                    I design and implement RESTful APIs that facilitate seamless data exchange between applications.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded-lg text-slate-700">
                  <Database size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Database Management</h4>
                  <p className="text-slate-600">
                    I work with MySQL and TypeORM to design efficient database structures and optimize queries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;