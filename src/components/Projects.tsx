import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, LayoutGrid, List } from 'lucide-react';

const projects = [
  {
    title: "Bikefolder",
    company: "Zignuts Technolab Pvt. Ltd.",
    description: [
      "Bike Platform gives all bikes a digital registration card or a bike card.",
      "It follows the bicycle throughout its lifecycle and forms the core of an interaction platform which, among other things, deals with maintenance and documentation.",
      "Implemented core functionalities using Node.js, Express, and MySQL.",
      "Designed APIs to facilitate interactions for scraping data from various websites related to bicycles.",
    ],
    technologies: ["Node.js", "Express", "MySQL", "API Development"],
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    title: "Carlogik",
    company: "Zignuts Technolab Pvt. Ltd.",
    description: [
      "Contributed to the development and maintenance of Automobile Maintenance Platform, the UAE's premier automotive online marketplace.",
      "Created and managed APIs using Node.js, Strapi and MySQL.",
      "Collaborated with team to enhance user experience and platform functionality.",
      "Played a key role in improving scalability and performance of the system.",
    ],
    technologies: ["Node.js", "Strapi", "MySQL", "RESTful APIs"],
    image:
      "https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    title: "Hospitality",
    company: "Zignuts Technolab Pvt. Ltd.",
    description: [
      "Engineered a hospitality solution to provide personalized user experiences in hotels across India.",
      "Utilized Node.js, MySQL, and Strapi to develop and maintain APIs for seamless data exchange.",
      "Integrated third-party APIs, including Flight Information and Local Events, to enrich user experience.",
      "Implemented features enabling user information display on in-room TVs upon check-in.",
    ],
    technologies: ["Node.js", "Strapi", "MySQL", "Third-party API Integration"],
    image:
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    title: "Freightro",
    company: "Zignuts Technolab Pvt. Ltd.",
    description: [
      "A shipping management system allows users to book shipments and place bids. The shipment creator can accept bids and add multiple stop locations.",
      "Created and managed APIs using NestJs and MySQL.",
      "Working on modules for generating Bill of Lading and Proof of Delivery for multiple stop locations and invoicing.",
      "Implemented two-factor authentication for enhanced security during user login.",
      "Successfully implemented API-based integrations with external partners.",
    ],
    technologies: [
      "NestJs",
      "MySQL",
      "TypeORM",
      "Authentication",
      "API Integration",
    ],
    image:
      "https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    title: "Wise CRM",
    company: "Radicalloop Technolab",
    description: [
      "Developed comprehensive relationship management between organizations, groups, and individuals with advanced filtering capabilities.",
      "Built a CRM system using Node.js, NestJS and PostgreSQL to manage organizations, groups, and people with flexible assignment capabilities.",
      "Implemented features to assign multiple groups to a single organization and person, and link organizations directly to people.",
      "Added a People Not on List module to identify and display individuals not yet part of the workspace, improving data completeness.",
    ],
    technologies: ["Node.js", "NestJS", "PostgreSQL", "CRM", "API Development"],
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div 
        ref={projectsRef}
        className="container mx-auto max-w-6xl transition-all duration-1000 ease-out opacity-0 translate-y-8"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-slate-800 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Here are some of the key projects I've worked on. Each project demonstrates my ability to build 
            robust backend solutions and APIs for different industries.
          </p>
        </div>
        
        <div className="flex justify-end mb-6">
          <div className="bg-slate-100 p-1 rounded-md inline-flex">
            <button 
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-slate-600'}`}
              onClick={() => setViewMode('grid')}
            >
              <LayoutGrid size={20} />
            </button>
            <button 
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : 'text-slate-600'}`}
              onClick={() => setViewMode('list')}
            >
              <List size={20} />
            </button>
          </div>
        </div>
        
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.company}</p>
                  
                  <p className="text-slate-700 mb-4">{project.description[0]}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => {
                      document.getElementById(`project-modal-${index}`)?.classList.remove('hidden');
                    }}
                    className="text-slate-700 hover:text-slate-900 flex items-center gap-1 font-medium"
                  >
                    View Details <ExternalLink size={16} />
                  </button>
                </div>
                
                {/* Modal for project details */}
                <div id={`project-modal-${index}`} className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center hidden">
                  <div className="bg-white rounded-lg max-w-3xl max-h-[90vh] overflow-y-auto p-6 m-4">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                      <button 
                        onClick={() => {
                          document.getElementById(`project-modal-${index}`)?.classList.add('hidden');
                        }}
                        className="text-slate-500 hover:text-slate-700"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <p className="text-slate-600 mb-4">{project.company}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-slate-800 mb-2">Description:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-slate-700">
                        {project.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                    <p className="text-slate-600 mb-4">{project.company}</p>
                    
                    <p className="text-slate-700 mb-4">{project.description[0]}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <button 
                      onClick={() => {
                        document.getElementById(`project-modal-list-${index}`)?.classList.remove('hidden');
                      }}
                      className="text-slate-700 hover:text-slate-900 flex items-center gap-1 font-medium"
                    >
                      View Details <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
                
                {/* Modal for project details */}
                <div id={`project-modal-list-${index}`} className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center hidden">
                  <div className="bg-white rounded-lg max-w-3xl max-h-[90vh] overflow-y-auto p-6 m-4">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                      <button 
                        onClick={() => {
                          document.getElementById(`project-modal-list-${index}`)?.classList.add('hidden');
                        }}
                        className="text-slate-500 hover:text-slate-700"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <p className="text-slate-600 mb-4">{project.company}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-slate-800 mb-2">Description:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-slate-700">
                        {project.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;