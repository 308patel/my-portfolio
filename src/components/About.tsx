import React from 'react';
import { Code, Server, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-textMain mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-10 text-textMuted"
          >
            <h3 className="text-2xl font-semibold text-textMain mb-6 flex items-center gap-3">
              <span className="bg-primary/20 text-primary p-2 rounded-lg">👨‍💻</span>
              Who I Am
            </h3>
            <p className="mb-6 leading-relaxed text-lg">
              I'm a passionate Node.js developer with over 2 years of hands-on experience in crafting robust backend solutions. 
              My expertise lies in designing and implementing efficient APIs that power a variety of applications across 
              different industries.
            </p>
            <p className="mb-6 leading-relaxed text-lg">
              I'm fluent in <span className="text-textMain font-medium">Gujarati, Hindi, and English</span>, allowing me to communicate effectively in diverse environments.
              My approach combines technical excellence with strong problem-solving skills to provide solutions that exceed expectations.
            </p>
            <p className="leading-relaxed text-lg">
              I thrive in collaborative environments where I can contribute to the full development lifecycle and continuously 
              expand my technical knowledge.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-textMain mb-8">What I Do</h3>
            
            <div className="space-y-6">
              {[
                { icon: <Server size={24} />, title: 'Backend Development', desc: 'I develop scalable and maintainable backend systems using Node.js, Express, NestJs, and Strapi.' },
                { icon: <Code size={24} />, title: 'API Development', desc: 'I design and implement RESTful APIs that facilitate seamless data exchange between applications.' },
                { icon: <Database size={24} />, title: 'Database Management', desc: 'I work with MySQL and TypeORM to design efficient database structures and optimize queries.' }
              ].map((item, index) => (
                <motion.div 
                   key={index}
                   whileHover={{ scale: 1.02, x: 10 }}
                   className="flex items-start gap-4 glass p-6 rounded-2xl group transition-all"
                >
                  <div className="p-4 bg-surfaceLight group-hover:bg-primary/20 group-hover:text-primary transition-colors rounded-xl text-textMuted">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-textMain mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-textMuted text-lg leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;