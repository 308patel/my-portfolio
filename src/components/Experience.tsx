import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Jr. Web Developer',
    company: 'Zignuts Technolab Pvt. Ltd.',
    location: 'Gandhinagar, Gujarat',
    period: 'August 2023 - January 2025',
    description: [
      'Experienced Node.js developer with over 2 years of experience.',
      'Demonstrated proficiency in designing and implementing APIs for a range of applications, including digital registration systems for bicycles, automotive marketplaces, hospitality solutions and shipping management system.',
      'Skilled in utilizing Node.js alongside frameworks like Strapi and NestJs to develop robust backend solutions, and adept at integrating third party APIs to enhance functionality and user experience.',
      'Proven ability to collaborate effectively within cross-functional teams to deliver high-quality solutions that meet client needs and exceed expectations.'
    ]
  },
  {
    role: 'Trainee Web Developer',
    company: 'Zignuts Technolab Pvt. Ltd.',
    location: 'Gandhinagar, Gujarat',
    period: 'January 2023 - July 2023',
    description: [
      'Received mentorship and guidance from experienced developers to improve coding practices and skills.',
      'During this training period, I gathered various skills, including NodeJs, ExpressJs, MySQL, NestJs.'
    ]
  }
];

const Experience: React.FC = () => {
  const experienceRef = useRef<HTMLDivElement>(null);

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

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="py-20 px-4 bg-slate-50">
      <div 
        ref={experienceRef}
        className="container mx-auto max-w-6xl transition-all duration-1000 ease-out opacity-0 translate-y-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-slate-800 mx-auto"></div>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 md:p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-slate-800"></div>
              
              <div className="md:flex justify-between items-start gap-6">
                <div className="mb-6 md:mb-0 md:w-2/3">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                  <p className="text-lg text-slate-700 font-medium mb-3">{exp.company}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-6 text-slate-600 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="md:w-1/3 bg-slate-50 p-5 rounded-lg">
                  <h4 className="font-medium text-slate-800 mb-3">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600">
                    <li>API Development</li>
                    <li>Backend Architecture</li>
                    <li>Database Design</li>
                    <li>Third-party Integrations</li>
                    <li>Code Reviews</li>
                    <li>Documentation</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;