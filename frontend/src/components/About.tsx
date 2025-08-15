import React from 'react';
import { Code, Database, Globe, Zap } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Frontend', icon: Globe, items: ['React', 'Angular', 'Next.js', 'Tailwind CSS'] },
    { name: 'Backend & Database', icon: Database, items: ['Node.js', 'Express', 'PHP', 'MongoDB', 'MySql'] },
    { name: 'Tools', icon: Code, items: ['Git', 'Docker', 'AWS', 'Figma'] },
    { name: 'Other', icon: Zap, items: ['GraphQL', 'REST APIs', 'Testing', 'CI/CD', 'SEO'] },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          About <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <img
                src="/images/Profile.jpg"
                alt="Developer at work"
                className="w-full h-100 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-500 to-teal-500 text-white p-4 rounded-xl shadow-lg">
                <p className="font-semibold">3+ Years</p>
                <p className="text-sm">Experience</p>
              </div>
            </div>
          </div>

          {/* Right side - Bio and Skills */}
          <div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Full-Stack Developer & Digital Craftsman</h3>
              <p className="text-purple-200 text-lg leading-relaxed mb-6">
                With over 3 years of experience in web development, I specialize in creating dynamic, scalable web applications using the MERN stack. My journey began with a curiosity for how websites work, 
                which evolved into a passion for building exceptional digital experiences.

    </p>

 <p className="text-purple-200 text-lg leading-relaxed">
               I believe in writing clean, maintainable code and staying up-to-date with the 
latest industry trends. My approach combines technical expertise with creative problem-solving 
to deliver solutions that not only meet requirements but exceed expectations.
              </p>
          
<br />

              <p className="text-purple-200 text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <IconComponent className="w-6 h-6 text-purple-400" />
                      <h4 className="font-semibold text-white">{skill.name}</h4>
                    </div>
                    <div className="space-y-1">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="text-sm text-purple-200 block"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;