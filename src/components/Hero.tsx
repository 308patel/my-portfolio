import React, { useEffect, useRef } from "react";
import { Github as GitHub, Linkedin, Mail, MapPin } from "lucide-react";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-12 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
      <div
        ref={heroRef}
        className="container mx-auto max-w-6xl transition-all duration-1000 ease-out opacity-0 translate-y-8"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-3/5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Jaydeep Patel
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-600 mb-6 font-medium">
              Node.js Developer
            </h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Passionate about creating robust backend solutions with 2+ years
              of experience developing APIs and integrating systems for various
              industries including automotive, hospitality, and shipping.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#contact"
                className="px-6 py-3 bg-slate-800 text-white rounded-md text-center font-medium hover:bg-slate-900 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-slate-300 text-slate-700 rounded-md text-center font-medium hover:bg-slate-100 transition-colors"
              >
                View Projects
              </a>
            </div>

            <div className="flex items-center flex-wrap gap-6">
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin size={18} />
                <span>Nadiad, Gujarat, India</span>
              </div>

              <a
                href="https://www.linkedin.com/in/jaydeep-patel-081b5b1b3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:jaydeepatel2001@gmail.com"
                className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
          </div>

          <div className="w-3/4 md:w-2/5 relative">
            <div className="aspect-square rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-white flex items-center justify-center text-8xl font-bold">
              <img
                src="/profile.jpg"
                alt="Jaydeep Patel"
                className="aspect-square rounded-full object-cover w-full h-full"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-slate-200 -m-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
