import React from 'react';
import { Download, GraduationCap, Briefcase, Award, Medal } from 'lucide-react';

const Resume: React.FC = () => {
  const handleDownloadResume = () => {
   // this would trigger a download
    const link = document.createElement("a");
  link.href = "/pawan-kumar-resume.pdf"; // File is in public folder
  link.download = "pawan-kumar-resume.pdf"; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
   
  };

  const resumeData = [
    {
      category: 'Education',
      icon: GraduationCap,
      items: [
        {
          title: 'Computer Science Degree',
          institution: 'NED University',
          year: '2021-2025',
          details: '🥇 Gold Medal Awarded for highest academic performance in the department.'
        },

          {
          title: 'Intermedidate',
          institution: 'Royal Public college Umerkot',
          year: '2019-2021',
          details: 'Completed Intermediate from Royal Public College with 94% marks'
        },
      
      ]
    },
    {
      category: 'Experience',
      icon: Briefcase,
      items: [
        {
           title: 'Junior Full-Stack Developer',
    institution: 'Qavi Tech',
    year: '2024',
    details: 'Built small-scale full-stack apps using React, Node.js, and MongoDB.'
  },
  {
    title: 'Freelance Web Developer',
    institution: 'Fiverr',
    year: '2024-Present',
    details: 'Providing full-stack web development services to global clients.'
  },

  {
  title: 'Coding Competition Participant',
  institution: 'Koderz Kombat Spring 23',
  year: '2024',
  details: 'Qualified through multiple rounds in a Koderz Kombat Spring coding competition, solving algorithmic and real-world programming challenges.'
}

      ]
    },
    {
      category: 'Certifications',
      icon: Award,
      items: [
        {
          title: 'Full Stack Development',
          institution: 'Apna College',
          year: '2024',
          details: 'Completed a comprehensive course covering frontend development with React and backend integration using Node.js, Express, and MongoDB.'
        },
        {
          title: 'Web Developer Certification',
          institution: 'Udemy',
          year: '2025',
          details: 'Advanced Web development Concepts'
        },
        {
          title: 'Next Js',
          institution: 'Udemy',
          year: '2025',
          details: 'Mastered advanced web development concepts using Next.js, including server-side rendering, API routes, and dynamic routing.'
        }
      ]
    }
  ];

  return (
    <section id="resume" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Resume</span>
        </h2>

        {/* Download Resume Button */}
        <div className="text-center mb-16">
          <button
            onClick={handleDownloadResume}
            className="bg-gradient-to-r from-purple-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </button>
        </div>

        {/* Resume Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {resumeData.map((section) => {
            const IconComponent = section.icon;
            return (
              <div
                key={section.category}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-purple-500 to-teal-500 p-3 rounded-xl">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{section.category}</h3>
                </div>

                <div className="space-y-6">
                  {section.items.map((item, index) => (
                    <div key={index} className="border-l-2 border-purple-400/30 pl-6">
                      <h4 className="font-semibold text-white text-lg mb-1">{item.title}</h4>
                      <p className="text-purple-300 font-medium mb-1">{item.institution}</p>
                      <p className="text-purple-400 text-sm mb-2">{item.year}</p>
                      <p className="text-purple-200 text-sm">{item.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;