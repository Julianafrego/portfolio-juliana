import React from 'react';
import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiDart, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiReact, 
  SiFlutter, 
  SiVite, 
  SiFastapi, 
  SiFirebase, 
  SiPostgresql, 
  SiMysql, 
  SiGit, 
  SiGithub, 
  SiFigma, 
  SiDocker,
  SiC
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import Galaxy from './style/Galaxy';

const Technologies = () => {
  const technologies = [
    { name: 'Java', icon: FaJava },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Python', icon: SiPython },
    { name: 'C', icon: SiC },
    { name: 'Dart', icon: SiDart },
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'React', icon: SiReact },
    { name: 'Flutter', icon: SiFlutter },
    { name: 'Vite', icon: SiVite },
    { name: 'FastAPI', icon: SiFastapi },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MySQL', icon: SiMysql },
    { name: 'Git', icon: SiGit },
    { name: 'GitHub', icon: SiGithub },
    { name: 'Figma', icon: SiFigma },
    { name: 'Docker', icon: SiDocker }
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      
      {/* Galaxy como background - posicionamento absoluto */}
      <div className="absolute inset-0 z-0">
        <Galaxy 
        mouseRepulsion={true}
        mouseInteraction={true}
        density={1.5}
        glowIntensity={0.2}
        saturation={0.5}
        hueShift={240}
        starSpeed={0.1}
        />
      </div>

      {/* Conteúdo principal - com z-index maior para ficar na frente */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Tecnologias que utilizo para desenvolver
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div key={index} className="flex flex-col items-center p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md hover:bg-white transition-all duration-300">
                  <IconComponent className="text-4xl mb-2 text-purple-800" />
                  <span className="text-sm font-medium text-gray-700 text-center">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;