import React from 'react';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="pt-32 pb-10 bg-white rounded-t-[3rem] scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-sm font-medium text-gray-500 mb-8">
            Vous êtes prêts ?
        </span>

        <h2 className="text-6xl md:text-8xl font-display font-medium text-black mb-12 tracking-tight">
          Développons ensemble votre moteur de croissance.
        </h2>

        <div className="flex justify-center">
            <a
                href="https://cal.com/emile-bron/decouverte"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill inline-flex items-center gap-4 bg-black text-white pl-10 pr-3 py-3 rounded-full text-2xl font-medium transition-transform hover:scale-105"
            >
                <span>Prendre rendez-vous</span>
                <div className="bg-white rounded-full p-4 btn-icon transition-transform duration-300">
                    <ArrowRight className="w-6 h-6 text-black" />
                </div>
            </a>
        </div>

        <div className="mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} ENB Agency. Tous droits réservés</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="https://www.linkedin.com/in/emilebron/" target="_blank" rel="noopener noreferrer" className="hover:text-black">LinkedIn</a>
            </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;