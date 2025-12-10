import React, { useState } from 'react';

const reviews = [
  {
    text: "Le chatbot qu'Emile nous a construit fonctionne super bien, on est très content du résultat",
    author: "Solène",
    role: "Responsable Marketing, Laudevco"
  },
  {
    text: "Emile m'a beaucoup aidé pour développer mon business freelance. Grace à son travail j'ai pu tripler mon nombre de clients par mois. Je le recommande et serai totalement prêt à travailler avec lui encore à l'avenir !",
    author: "Constantin",
    role: "Designer Graphique"
  },
  {
    text: "Je remercie Emile pour son professionnalisme et son respect des délais. Il a créé un système de création de contenu dont nous sommes extrêmement satisfaits.",
    author: "Lucas",
    role: "Fondateur, Troupe des Deux Ailes"
  },
  {
    text: "La durée de création de nos campagnes publicitaires a baissé de 85 % depuis que nous avons fait appel aux services d'Emile et son équipe.",
    author: "Audrey",
    role: "Co-Directrice, Heredis"
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-20 bg-[#F2F3F5]">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Label */}
        <div className="mb-12">
            <div className="inline-flex items-center gap-3 bg-gray-200/80 px-1 py-1 pr-4 rounded-full">
              <span className="bg-black text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold font-mono">
                  4
              </span>
              <span className="text-sm font-medium text-gray-700">Ils nous ont fait confiance</span>
            </div>
        </div>

        {/* Card */}
        <div className="bg-[#E5E7EB] rounded-[3rem] px-6 pt-16 pb-40 md:p-24 min-h-[500px] flex flex-col justify-center items-center text-center relative transition-all">
          
          <div key={current} className="max-w-4xl animate-fade-in">
            <p className="text-xl md:text-5xl font-display font-medium text-black mb-10 leading-tight">
              "{reviews[current].text}"
            </p>
            <div>
              <p className="text-xl font-bold text-black">{reviews[current].author}</p>
              <p className="text-gray-500">{reviews[current].role}</p>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="absolute bottom-12 flex gap-3">
             {reviews.map((_, idx) => (
               <button 
                 key={idx}
                 onClick={() => setCurrent(idx)}
                 className={`h-3 rounded-full transition-all duration-300 ${current === idx ? 'w-10 bg-black' : 'w-3 bg-gray-400 hover:bg-gray-500'}`}
                 aria-label={`Show review ${idx + 1}`}
               />
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;