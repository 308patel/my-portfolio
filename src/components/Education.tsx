import React, { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

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
  const educationRef = useRef<HTMLDivElement>(null);

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

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  return (
    <section id="education" className="py-20 px-4 bg-white">
      <div 
        ref={educationRef}
        className="container mx-auto max-w-6xl transition-all duration-1000 ease-out opacity-0 translate-y-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-slate-800 mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-slate-200 transform md:translate-x-[-50%] hidden md:block"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform translate-x-[-50%] w-6 h-6 rounded-full bg-slate-800 z-10 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                <div className={`md:w-[45%] ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                  <div className="bg-white rounded-lg shadow-md p-6 border border-slate-100 hover:shadow-lg transition-shadow relative">
                    <div className="absolute top-4 right-4 bg-slate-50 p-2 rounded-full">
                      <GraduationCap size={24} className="text-slate-700" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-2 pr-12">{edu.degree}</h3>
                    <p className="text-slate-700 font-medium mb-4">{edu.institution}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-slate-600 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{edu.year}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 p-3 rounded-md">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700 font-medium">CGPA</span>
                        <span className="text-slate-900 font-bold">{edu.score}/10</span>
                      </div>
                      <div className="mt-2 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-slate-800 rounded-full"
                          style={{ width: `${parseFloat(edu.score) * 10}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;