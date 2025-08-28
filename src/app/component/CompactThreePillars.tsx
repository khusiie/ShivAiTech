'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Zap, DollarSign, Handshake } from 'lucide-react';
import { Star, ChevronRight } from 'lucide-react';
import icon from "../../../public/assets/3pillor/icon.svg";
import star from "../../../public/assets/3pillor/star.svg";

interface Pillar {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  isHighlighted?: boolean;
}

const CompactThreePillars = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const pillars: Pillar[] = [
    {
      number: '01',
      title: 'AI-First Velocity',
      subtitle: 'Senior architects + AI co-pilots for speed and reliability.',
      icon: <Image src={icon} alt="AI Icon" width={59} height={75} />,
    },
    {
      number: '02',
      title: 'Fixed-Price MVPs',
      subtitle: '30-60 day builds with crystal-clear scope and a predictable budget.',
      icon: <Image src={icon} alt="AI Icon" width={59} height={75} />,
      isHighlighted: true, // Highlight the second pillar
    },
    {
      number: '03',
      title: 'Handholding, Not Just Handover',
      subtitle: 'We stay post-launch to iterate, integrate, and scale.',
      icon: <Image src={icon} alt="AI Icon" width={59} height={75} />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-[#000000] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#000000] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#000000] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 font-sora">
          <div className="inline-flex items-center gap-2 bg-gray-900/80 backdrop-blur-sm border-1 border-white-600/80 rounded-full px-2 py-2 mb-6 hover:bg-gray-800/80 hover:border-gray-500/90 transition-all duration-200 cursor-pointer group">
            <div className="flex items-center justify-center w-6 h-6 bg-gradient-to-br from-blue-400/50 to-blue-600/30 backdrop-blur-sm rounded-full shadow-inner">
              <Image
                src={star}
                alt="Star"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
            {/* Text */}
            <span className="text-white text-sm font-regular tracking-wide">
              3 Pillars
            </span>

            {/* Arrow Icon */}
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-300 transition-colors duration-200" />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold text-white font-sora">
            Our 3 Core Pillars
          </h2>
        </div>

        {/* Pillars List */}
        <div className="max-w-5xl mx-auto space-y-4">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.number}
              className={`
                group relative transform transition-all duration-700 delay-${index * 100}
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
              `}
            >
              <div 
                className={`
                  relative py-6 pl-12 pr-6 transition-all duration-300 rounded-lg
                  hover:transform hover:scale-[1.02] group-hover:shadow-xl
                  ${pillar.isHighlighted 
                    ? 'bg-gradient-to-r from-[#01AAFF] via-[#01AAFF]/80 to-black/60' 
                    : ''
                  }
                `}
                style={pillar.isHighlighted ? {
                  background: 'linear-gradient(90deg, #01AAFF 0%, #000 62.5%)'
                } : undefined}
              >
                <div className="flex items-center gap-8 md:gap-16 lg:gap-24">
                  {/* Number Badge */}
                  <div className={`
                    flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-8xl transition-all duration-300
                    ${pillar.isHighlighted
                      ? 'text-white shadow-lg'
                      : 'text-gray-300'
                    }
                  `}>
                    {pillar.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`
                      text-xl md:text-2xl font-bold mb-2 transition-colors duration-300
                      ${pillar.isHighlighted
                        ? 'text-white'
                        : 'text-white group-hover:text-cyan-400'
                      }
                    `}>
                      {pillar.title}
                    </h3>
                    <p className={`
                      text-sm md:text-base leading-relaxed transition-colors duration-300
                      ${pillar.isHighlighted
                        ? 'text-gray-200'
                        : 'text-gray-400'
                      }
                    `}>
                      {pillar.subtitle}
                    </p>
                  </div>

                  {/* Icon */}
                  <div className={`
                    flex-shrink-0 p-3 rounded-xl transition-all duration-300
                    ${pillar.isHighlighted
                      ? 'text-white'
                      : 'text-gray-400 group-hover:text-gray-300'
                    }
                  `}>
                    {pillar.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompactThreePillars;