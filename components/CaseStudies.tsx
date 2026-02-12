import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const specialties = [
  {
    title: "Prospection",
    tags: ["Automatisation LinkedIn", "Hyper-personnalisation"],
    theme: "dark",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Service Client",
    tags: ["Onboarding automatique", "Gestion des tickets"],
    theme: "dark",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Gestion Admin",
    tags: ["Traitement de documents", "Gestion des stocks"],
    theme: "dark",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Projets personnalisés",
    tags: ["Développés sur-mesure pour vos besoins"],
    theme: "dark",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop"
  }
];

const CaseStudies: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) {
              setVisibleItems((prev) => Array.from(new Set([...prev, index])));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.reveal-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="case-studies" className="py-32 bg-[#F2F3F5]" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12 space-y-40">
        
        {/* --- PARTIE 1 : Présentation --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-3 bg-gray-200/80 px-1 py-1 pr-4 rounded-full mb-8">
              <span className="bg-black text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold font-mono">
                  1
              </span>
              <span className="text-sm font-medium text-gray-700">Présentation</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-display font-medium text-black leading-[1.05] mb-8 tracking-tight">
              Des milliers d'heures (et d'€) économisés
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
              Nous vous aidons à identifier et à automatiser les tâches à faible valeur ajoutée de votre quotidien, vous permettant de vous concentrer à 100 % sur ce qui compte vraiment.  
            </p>

            <a
              href="https://cal.com/emile-bron/decouverte"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill inline-flex items-center gap-3 bg-black text-white pl-6 pr-2 py-2 rounded-full text-base font-medium transition-transform hover:scale-105"
            >
              <span>Discuter d'un projet</span>
              <div className="bg-white rounded-full p-2 btn-icon transition-transform duration-300">
                  <ArrowRight className="w-4 h-4 text-black" />
              </div>
            </a>
          </div>

          <div className="flex-1 w-full">
             <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
               <img 
                  src="https://i.postimg.cc/WpYpn2Vz/Gemini-Generated-Image-9g826e9g826e9g82.png" 
                  alt="Emile Bron - photo conférence ENB Agency" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
             </div>
          </div>
        </div>

        {/* --- PARTIE 2 : Nos Services --- */}
        <div id="nos-services" className="scroll-mt-32">
           <div className="mb-16">
              <div className="inline-flex items-center gap-3 bg-gray-200/80 px-1 py-1 pr-4 rounded-full mb-6">
                <span className="bg-black text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold font-mono">
                    2
                </span>
                <span className="text-sm font-medium text-gray-700">Nos services</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-medium text-black tracking-tight">
                Nos spécialités.
              </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specialties.map((spec, index) => (
                <div 
                  key={index}
                  data-index={index}
                  className={`reveal-card relative aspect-square md:aspect-[4/3] rounded-[2rem] p-10 flex flex-col justify-end overflow-hidden transition-all duration-1000 ease-out transform
                    ${visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}
                    ${spec.theme === 'dark' ? 'text-white' : 'bg-white text-black'}
                  `}
                >
                  {/* Background for Dark Cards */}
                  {spec.theme === 'dark' && spec.image && (
                    <>
                      <img src={spec.image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                      <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    </>
                  )}

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-4xl md:text-5xl font-display font-medium mb-8 text-center md:text-left">
                      {spec.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      {spec.tags.map((tag, tIndex) => (
                        <span 
                          key={tIndex}
                          className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md
                            ${spec.theme === 'dark' 
                              ? 'bg-white/10 text-white border border-white/20' 
                              : 'bg-gray-100 text-gray-600'
                            }
                          `}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;