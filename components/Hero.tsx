import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const followerRef = useRef<HTMLDivElement>(null);
  
  // On stocke la position actuelle et la cible
  const position = useRef({ 
    x: 0, 
    y: 0, 
    targetX: 0, 
    targetY: 0 
  });

  useEffect(() => {
    // Initialisation : On place l'élément directement en HAUT À DROITE au chargement
    if (typeof window !== 'undefined') {
      const startX = window.innerWidth * 0.75; // 75% vers la droite
      const startY = window.innerHeight * 0.25; // 25% vers le bas
      
      position.current.x = startX;
      position.current.y = startY;
      position.current.targetX = startX;
      position.current.targetY = startY;
    }

    let animationFrameId: number;

    const animate = () => {
      const { x, y, targetX, targetY } = position.current;
      
      // Vitesse très lente pour l'effet "organique"
      const speed = 0.005; 
      
      // Calcul de la distance restante vers la cible
      const dx = targetX - x;
      const dy = targetY - y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Si on est proche de la cible (< 10px), on en choisit une nouvelle
      if (distance < 10) {
        // --- LOGIQUE DE SÉCURITÉ (Zone Haut-Droite) ---
        const minX = window.innerWidth * 0.5 + 50; 
        const maxX = window.innerWidth - 100;
        const minY = 50;
        const maxY = window.innerHeight * 0.5 - 50;

        position.current.targetX = Math.random() * (maxX - minX) + minX;
        position.current.targetY = Math.random() * (maxY - minY) + minY;
      }

      // Interpolation (mouvement fluide)
      position.current.x += (targetX - x) * speed;
      position.current.y += (targetY - y) * speed;

      // Application du mouvement
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-end overflow-hidden bg-[#E6E6E6]">
      
      {/* Background Curtain Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-full bg-curtain mask-gradient-b opacity-40 pointer-events-none transform -translate-y-12"></div>
      
      {/* --- L'ÉLÉMENT TEXTURÉ (Haut Droite + Barres plus grasses) --- */}
      <div 
        ref={followerRef}
        className="absolute top-0 left-0 w-[600px] h-[300px] pointer-events-none z-0 mix-blend-multiply opacity-80"
        style={{
          // --- MODIFICATION ICI : BARRES PLUS GRASSES ---
          // J'ai élargi la zone colorée de 0.5% à 1.5% (donc 1% de largeur de barre)
          // Le motif se répète tous les 2%
          background: 'repeating-linear-gradient(90deg, transparent 0%, transparent 0.5%, rgba(0,0,0,0.2) 0.5%, rgba(0,0,0,0.3) 1.5%, transparent 1.5%, transparent 2%)',
          // ---------------------------------------------
          
          // Netteté (très peu de flou)
          filter: 'blur(0.5px)',
          
          // Masque ovale
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          
          transformOrigin: 'center center',
          transform: 'translate(-50%, -50%)' 
        }}
      />
      {/* --------------------------------------------------------- */}

      {/* MODIFICATION : pb-12 md:pb-20 (réduit pour descendre le contenu) */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-end pb-12 md:pb-20">
        
        <div className="max-w-[90rem]">
            <div className="flex flex-col items-start gap-8 md:gap-10 animate-fade-in">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-black leading-[1.1] tracking-tight -ml-1">
                    Le partenaire de croissance IA <br className="hidden lg:block" />
                    des entreprises B2B.
                </h1>

                {/* MODIFICATION : Bouton plus petit (pl-6, py-1.5, text-base) */}
                <a
                    href="https://cal.com/emile-bron/decouverte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-black text-white pl-6 pr-1.5 py-1.5 rounded-full text-base font-medium transition-all hover:scale-105 hover:shadow-xl hover:shadow-black/10"
                >
                    <span className="py-1">Discutons</span>
                    <div className="bg-white rounded-full p-2 transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRight className="w-4 h-4 text-black" />
                    </div>
                </a>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;