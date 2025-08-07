import React, { useState } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');

  const projects = [
    // here is examples you can use in future:

  //      {
  //     id: 1,
  //     title: 'E-Commerce Platform',
  //     category: 'Frontend',
  //     description: 'Built a complete e-commerce frontend with all product categories, responsive design, and smooth animations.',
  //     image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
  // tech: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
  //     liveUrl: 'https://ecommerceweb-pi-two.vercel.app/',
    
  //   },
  
  ,
  {
  id: 1,
  title: 'Cake & Bakery Website',
  category: 'Frontend',
  description: 'Designed and developed a deliciously responsive website for a bakery business with sections for featured cakes, online ordering, pricing, customer reviews, and contact. Smooth animations and vibrant visuals enhance user engagement and overall browsing experience.',
  image: '/CakeWeb.png',
  tech: ['React', 'Tailwind CSS', 'Framer Motion'],
  liveUrl: 'https://cake-bakery-opal.vercel.app/',
  githubUrl: 'https://github.com/yourusername/cake-bakery-website'
}

, 
{
  id: 2,
  title: 'Trading Website',
  category: 'Frontend',
  description: 'Developed a modern and responsive trading platform UI with real-time charts, market data. Designed for optimal performance and user experience using interactive components and smooth animations.',
  image: '/Trading.png',
  tech: ['React', 'Tailwind CSS', 'Framer Motion','JavaScript'],
  liveUrl: 'https://tradescape-three.vercel.app/',
  // githubUrl: 'https://github.com/yourusername/trading-dashboard'
}
  ,
  {
 id: 3,
 title: 'Dental Service Website',
 category: 'Frontend',
 description: 'Designed and developed a responsive dental clinic website with sections for services, appointment booking, doctor profiles, and patient testimonials.  Included smooth animations and modern UI for a professional user experience.',
 image: '/Clinic.png',
 tech: ['React', 'TypeScript',  'Tailwind CSS', 'Framer Motion'],
 liveUrl: 'https://dentalcareserve.vercel.app/',

}
,


{
  id: 4,
  title: 'Restaurant Website',
  category: 'Frontend',
  description: 'Created a fully responsive and visually appealing restaurant website with sections for menu, reservations, chef profiles, and customer reviews. Integrated smooth animations for an interactive user experience and mobile-friendly layout.',
  image: '/pkrespng.png',
 tech: ['React', 'TypeScript',  'Tailwind CSS', 'Framer Motion'],
  liveUrl: 'https://pkrestaurant-three.vercel.app/',

},



{
  id: 5,
  title: 'Safe Water Service',
  category: 'Frontend',
  description: 'Built a modern, responsive website  sections for features, product details, team, testimonials, and blog. Highlighted key selling points like rigorous quality checks, 5‑step filtration, balanced mineral composition, and over 20 years of experience. Included easy ordering and contact access.',
  image: '/Water.png',
  tech: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
  liveUrl: 'https://safedrinkwater.netlify.app/',
  
},
{
  id: 6,
  title: 'Hair & Beauty Salon Website',
  category: 'Frontend',
  description: 'Crafted a sleek and responsive salon website showcasing services, stylist portfolios, booking form, and client testimonials. Modern UI with smooth animations creates an inviting user experience.',
  image: '/Beauty.png',
  tech: ['React', 'Tailwind CSS', 'TypeScript' , 'Framer Motion'],
  liveUrl: 'https://hair-and-beauty.vercel.app/',

}

,
{
    id: 7,
    title: 'E-Commerce Platform',
    category: 'Frontend',
    description: 'Built a complete e-commerce frontend with all product categories, responsive design, and smooth animations.',
    image: '/Ecommerce.png',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    liveUrl: 'https://ecommerceweb-pi-two.vercel.app/',
    
  },
  {
  id: 8,
  title: 'AutoCare Pro Car Service Website',
  category: 'Frontend',
  description: 'Built a clean and responsive automotive service site highlighting key offerings (oil change, brake service, engine diagnostics), customer testimonials, and transparent features like honest pricing and quality assurance.',
  image: '/CarService.png',
  tech: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
  liveUrl: 'https://carservicepro.netlify.app/',
 
}

  ];
  
  const tabs = ['All'];

  // for future use when we will add full stack projects:
  //  const tabs = ['All', 'Full Stack', 'Frontend'];

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Projects</span>
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-full p-1 border border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-purple-500 to-teal-500 text-white shadow-lg'
                    : 'text-purple-200 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    {/* <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </a> */}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-300 text-sm">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-purple-200 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-500/20 text-purple-200 px-2 py-1 rounded-full text-xs border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 inline-flex items-center gap-2"
                >
                  View Live
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;