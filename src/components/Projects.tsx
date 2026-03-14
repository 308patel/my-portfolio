import React, { useState } from 'react';
import { ExternalLink, LayoutGrid, List, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tilt } from 'react-tilt';

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
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-textMain mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-textMuted max-w-3xl mx-auto text-lg leading-relaxed">
            Here are some of the key projects I've worked on. Each project demonstrates my ability to build 
            robust backend solutions and APIs for different industries.
          </p>
        </motion.div>
        
        <div className="flex justify-end mb-8 relative z-20">
          <div className="glass p-1 rounded-xl inline-flex border border-primary/10">
            <button 
              className={`p-2.5 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-surface shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-primary' : 'text-textMuted hover:text-textMain'}`}
              onClick={() => setViewMode('grid')}
            >
              <LayoutGrid size={20} />
            </button>
            <button 
              className={`p-2.5 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-surface shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-primary' : 'text-textMuted hover:text-textMain'}`}
              onClick={() => setViewMode('list')}
            >
              <List size={20} />
            </button>
          </div>
        </div>
        
        <motion.div 
          layout
          className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "flex flex-col gap-8"}
        >
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                key={index}
                className="h-full"
              >
                <Tilt options={{ max: 10, scale: 1.02, speed: 400 }} className="h-full">
                  <div className={`glass-card h-full flex ${viewMode === 'list' ? 'flex-col md:flex-row' : 'flex-col'} group cursor-pointer`} onClick={() => setActiveProject(index)}>
                    <div className={`${viewMode === 'list' ? 'md:w-2/5 md:h-auto' : 'h-56'} w-full overflow-hidden relative`}>
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className={`p-8 flex flex-col flex-grow ${viewMode === 'list' ? 'md:w-3/5' : ''}`}>
                      <h3 className="text-2xl font-bold text-textMain mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-secondary font-medium mb-4">{project.company}</p>
                      
                      <p className="text-textMuted mb-6 line-clamp-3 leading-relaxed flex-grow">{project.description[0]}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-surfaceLight border border-primary/10 text-textMuted text-xs font-semibold rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 bg-surfaceLight border border-primary/10 text-textMuted/70 text-xs font-semibold rounded-full">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2 text-primary font-medium group-hover:translate-x-2 transition-transform">
                        Explore <ExternalLink size={16} />
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass border border-primary/20 rounded-2xl shadow-2xl z-10"
            >
              <div className="sticky top-0 right-0 p-4 flex justify-end z-20 pointer-events-none">
                <button 
                  onClick={() => setActiveProject(null)}
                  className="p-2 bg-surfaceLight/80 backdrop-blur rounded-full text-textMuted hover:text-textMain pointer-events-auto transition-colors border border-primary/10"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="px-8 pb-8 pt-4">
                <h3 className="text-3xl font-bold text-textMain mb-2">{projects[activeProject].title}</h3>
                <p className="text-secondary font-medium text-lg mb-8">{projects[activeProject].company}</p>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-textMain mb-4 flex items-center gap-2">
                    <span className="text-primary">✨</span> About Project
                  </h4>
                  <ul className="space-y-4 text-textMuted leading-relaxed text-lg">
                    {projects[activeProject].description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-textMain mb-4 flex items-center gap-2">
                    <span className="text-secondary">🛠️</span> Technologies
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {projects[activeProject].technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-4 py-2 bg-surfaceLight border border-primary/10 text-textMain font-medium rounded-xl shadow-inner"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;