import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#F2F3F5] border-t border-gray-200/50">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="mb-24">
            <div className="inline-flex items-center gap-3 bg-gray-200/80 px-1 py-1 pr-4 rounded-full mb-8">
              <span className="bg-black text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold font-mono">
                  3
              </span>
              <span className="text-sm font-medium text-gray-700">À propos</span>
            </div>

            <h2 className="text-3xl md:text-6xl font-display font-medium text-black mb-10 tracking-tight">
              Utilisateur d'IA depuis 2021. 
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl leading-relaxed">
              L'équipe d'ENB Agency a repéré très tôt l'utilité de l'IA générative. 
              En 2021, bien avant ChatGPT, nous utilisions déjà GPT-2 et GPT-3 pour des usages personnels et profesionnels.
            </p>
        </div>

        {/* Profile Card - Single Person */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start max-w-5xl">
            
            {/* Photo */}
            <div className="w-full md:w-[200px] shrink-0">
               <img 
                  src="https://i.postimg.cc/5ySxbYpB/PDP-Emile.jpg" 
                  alt="Founder Portrait" 
                  className="w-full aspect-[4/5] object-cover rounded-[2rem]"
               />
            </div>

            {/* Info */}
            <div className="flex-1 pt-4">
                <h3 className="text-4xl font-display font-bold text-black mb-1">
                   Emile Bron
                </h3>
                <p className="text-lg text-gray-400 font-medium mb-8">
                   Fondateur / Développeur d'automatisation
                </p>

                <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
                    <p>
                       Consultant IA et développeur, Emile dirige cette agence avec une vision claire : l'automatisation n'est utile que si elle rapporte (du temps ou de l'argent).
                    </p>
                    <p>
                       Il a d'abord commencé son activité en tant que développeur d'automatisations, pour se diriger 1 an après vers un conseil stratégique pour les PME.
                    </p>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};

export default Services;