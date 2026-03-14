import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const skills = [
  { name: "Node.js", percentage: 90, color: "bg-primary" },
  { name: "Express.js", percentage: 75, color: "bg-primary" },
  { name: "NestJs", percentage: 80, color: "bg-primary" },
  { name: "Strapi", percentage: 70, color: "bg-primary" },
  { name: "MySQL", percentage: 70, color: "bg-primary" },
  { name: "PostgreSQL", percentage: 65, color: "bg-primary" },
  { name: "TypeORM", percentage: 75, color: "bg-primary" },
  { name: "API Development", percentage: 90, color: "bg-primary" },
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
  return (
    <section id="skills" className="py-24 px-4 bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[128px] -translate-y-1/2" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-textMain mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-semibold text-textMain mb-8 flex items-center gap-3">
              <span className="text-primary bg-primary/10 p-2 rounded-lg">⚡</span>
              Technical Proficiency
            </h3>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-textMuted group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-primary font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-surfaceLight rounded-full overflow-hidden border border-primary/10">
                    <motion.div
                      className={`h-full bg-gradient-to-r from-primary to-secondary rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-8"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-textMain mb-8 flex items-center gap-3">
                <span className="text-secondary bg-secondary/10 p-2 rounded-lg">🛠️</span>
                Technologies & Tools
              </h3>

              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <Tilt key={index} options={{ max: 25, scale: 1.1, speed: 400 }}>
                    <div className="px-5 py-2.5 bg-surfaceLight border border-primary/10 rounded-xl text-textMuted hover:text-textMain hover:border-primary/50 shadow-lg hover:shadow-primary/20 transition-all cursor-default relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="relative z-10 font-medium">{tech}</span>
                    </div>
                  </Tilt>
                ))}
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-textMain mb-6 flex items-center gap-3">
                <span className="text-purple-500 bg-purple-500/10 p-2 rounded-lg">🌍</span>
                Languages
              </h3>
              <div className="space-y-6">
                {[
                  { name: 'Gujarati', level: 5 },
                  { name: 'Hindi', level: 5 },
                  { name: 'English', level: 4 }
                ].map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between group">
                    <span className="font-medium text-textMuted text-lg group-hover:text-textMain transition-colors">{lang.name}</span>
                    <div className="flex gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + (i * 0.1), type: "spring" }}
                          className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${i < lang.level
                              ? "bg-gradient-to-tr from-primary to-secondary shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                              : "bg-surfaceLight border border-primary/10"
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
