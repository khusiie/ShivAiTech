'use client';

import { useState, useEffect, useRef } from 'react';
import { Zap, DollarSign, Handshake } from 'lucide-react';

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
      subtitle: 'Speed to market like never before through AI-powered development.',
      icon: <Zap className="w-5 h-5" />,
    },
    {
      number: '02',
      title: 'Fixed-Price MVPs',
      subtitle: 'Transparent pricing with no hidden costs or scope creep surprises.',
      icon: <DollarSign className="w-5 h-5" />,
      isHighlighted: true,
    },
    {
      number: '03',
      title: 'Handholding, Not Just Handover',
      subtitle: 'Continuous guidance from concept to successful market launch.',
      icon: <Handshake className="w-5 h-5" />,
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
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-gray-300 text-sm font-medium">OUR APPROACH</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our 3 Core Pillars
          </h2>
        </div>

        {/* Pillars List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.number}
              className={`
                group relative transform transition-all duration-700 delay-${index * 100}
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
              `}
            >
              <div className={`
                relative bg-gray-800/50 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300
                ${pillar.isHighlighted 
                  ? 'border-cyan-500/50 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 shadow-lg shadow-cyan-500/10' 
                  : 'border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-800/70'
                }
                hover:transform hover:scale-[1.02] group-hover:shadow-xl
              `}>
                {/* Highlighted Badge */}
                {pillar.isHighlighted && (
                  <div className="absolute -top-3 left-6">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-6">
                  {/* Number Badge */}
                  <div className={`
                    flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300
                    ${pillar.isHighlighted 
                      ? 'bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-lg' 
                      : 'bg-gray-700 text-gray-300 group-hover:bg-gray-600'
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
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                      {pillar.subtitle}
                    </p>
                  </div>

                  {/* Icon */}
                  <div className={`
                    flex-shrink-0 p-3 rounded-xl transition-all duration-300
                    ${pillar.isHighlighted 
                      ? 'bg-cyan-500/20 text-cyan-400' 
                      : 'bg-gray-700/50 text-gray-400 group-hover:bg-gray-600/50 group-hover:text-gray-300'
                    }
                  `}>
                    {pillar.icon}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`
                  absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                  ${pillar.isHighlighted 
                    ? 'bg-gradient-to-r from-cyan-500/5 to-blue-500/5' 
                    : 'bg-gradient-to-r from-blue-500/5 to-purple-500/5'
                  }
                `}></div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default CompactThreePillars;