import React, { useEffect, useRef, useState } from "react";

const skills = [
  {
    name: "Node.js",
    percentage: 90,
    color: "bg-gray-700", // All progress bars will have this color
  },
  {
    name: "Express.js",
    percentage: 75,
    color: "bg-gray-700", // Same color for all progress bars
  },
  {
    name: "NestJs",
    percentage: 80,
    color: "bg-gray-700", // Same color for all progress bars
  },
  {
    name: "Strapi",
    percentage: 70,
    color: "bg-gray-700", // Same color for all progress bars
  },
  {
    name: "MySQL",
    percentage: 70,
    color: "bg-gray-700", // Same color for all progress bars
  },
  {
    name: "PostgreSQL",
    percentage: 65,
    color: "bg-gray-700", // Same color for all progress bars
  },
  {
    name: "TypeORM",
    percentage: 75,
    color: "bg-gray-700", // Same color for all progress bars
  },
  {
    name: "API Development",
    percentage: 90,
    color: "bg-gray-700", // Same color for all progress bars
  },
];

const technologies = [
  "JavaScript",
  "Node.js",
  "Express.js",
  "NestJs",
  "Strapi",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "TypeORM",
  "RESTful APIs",
  "Authentication",
  "Third-party Integrations",
  "Git",
  "Agile Development",
];

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationTriggered(true); // Trigger animation once in view
          observer.unobserve(entry.target);
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
      <div ref={skillsRef} className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-slate-800 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              Technical Proficiency
            </h3>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-800">
                      {skill.name}
                    </span>
                    <span className="text-slate-600">{skill.percentage}%</span>
                  </div>
                  <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${skill.color} skill-bar rounded-full`}
                      style={{
                        width: animationTriggered
                          ? `${skill.percentage}%`
                          : "0%", // Animates only when triggered
                        transition: "width 1s ease-in-out",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              Technologies & Tools
            </h3>

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
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                Languages
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-800">Gujarati</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 rounded-full mx-1 ${
                          i < 5 ? "bg-slate-800" : "bg-slate-300"
                        }`}
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
                        className={`w-4 h-4 rounded-full mx-1 ${
                          i < 5 ? "bg-slate-800" : "bg-slate-300"
                        }`}
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
                        className={`w-4 h-4 rounded-full mx-1 ${
                          i < 4 ? "bg-slate-800" : "bg-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
