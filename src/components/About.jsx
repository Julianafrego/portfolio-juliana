import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-purple-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
            SOBRE MIM
          </h2>
          
          <div className="bg-gray-900 rounded-lg text-xl p-8 shadow-sm">

            <p className="text-gray-50 leading-relaxed mb-6">
              Me chamo Juliana, sou desenvolvedora Fullstack, tenho experiência em desenvolvimento web e mobile, atuando tanto no front-end quanto no back-end.
            </p>
            
            <p className="text-gray-50 leading-relaxed mb-6">
              Já desenvolvi utilizando tecnologias como React, FastAPI, SQL Alchemy, PostgreSQL e MariaDB, etc, sempre focando em criar aplicações funcionais e eficientes.
            </p>
            
            <p className="text-gray-50 leading-relaxed mb-8">
              Além da programação, tenho habilidades em design gráfico e UI/UX, procurando unir criatividade e usabilidade para entregar interfaces bonitas e fáceis de usar. Gosto de transformar ideias em soluções eficientes, sempre buscando aprender novas ferramentas e melhorar minhas práticas de desenvolvimento.
            </p>
            


            <div className="grid grid-cols-1 text-xl md:grid-cols-3 gap-6 text-sm">
              <div>
                <span className="font-semibold text-purple-400">Idade:</span>
                <span className="text-gray-50 ml-2">21</span>
              </div>
              <div>
                <span className="font-semibold text-purple-400">Idiomas:</span>
                <span className="text-gray-50 ml-2">pt-br, en, es</span>
              </div>
              <div>
                <span className="font-semibold text-purple-400">email:</span>
                <span className="text-gray-50 ml-2">julianafrego@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

