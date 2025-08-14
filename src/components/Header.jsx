import React from 'react';
import Particles from './style/Particles';
import Aurora from './style/aurora';
import Galaxy from './style/Galaxy';
import { Button } from '@/components/ui/button.jsx';
import fotoProfile from '../assets/foto_profile.jpg';

const Header = () => {
  return (
    <header className="relative min-h-screen overflow-hidden">
      
      {/* Galaxy como background */}
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

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between relative z-10 min-h-screen">

        {/* Right side - Profile image */}
        <div className="lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={fotoProfile} 
              alt="Juliana Freire" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Left side - Text content */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">
            Juliana Freire G.
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-6 lg:mb-8">
           Desenvolvedora Fullstack
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              className="bg-purple-600 hover:bg-purple-800 text-white text-xl px-8 py-5 rounded-full w-full sm:w-auto"
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              Sobre mim
            </Button>
            <Button 
              className="bg-purple-600 hover:bg-purple-800 text-white text-xl px-8 py-5 rounded-full w-full sm:w-auto"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              Meus projetos
            </Button>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
