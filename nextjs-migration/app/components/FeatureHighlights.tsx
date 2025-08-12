'use client';

import { School as Pool, Utensils, Wifi, Coffee, Dumbbell, Wine } from 'lucide-react';
import { useSpring, animated, config } from '@react-spring/web';
import { useState } from 'react';

const features = [
  {
    icon: Pool,
    title: 'Infinity Pool',
    description: 'Stunning oceanfront infinity pool with panoramic views'
  },
  {
    icon: Utensils,
    title: 'Fine Dining',
    description: 'Award-winning restaurants featuring local and international cuisine'
  },
  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    description: 'Stay connected with complimentary high-speed internet access'
  },
  {
    icon: Coffee,
    title: 'Artisan Coffee',
    description: 'Premium coffee selections and expertly crafted espresso drinks'
  },
  {
    icon: Wine,
    title: 'Beverages',
    description: 'Refreshing selection of fresh juices, teas, and signature drinks'
  },
  {
    icon: Dumbbell,
    title: 'Fitness Center',
    description: 'State-of-the-art equipment and personal training services'
  }
];

interface FeatureCardProps {
  feature: typeof features[0];
  index: number;
  isHovered: boolean;
  setHoveredIndex: (index: number | null) => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index, isHovered, setHoveredIndex }) => {
  const [props, set] = useSpring(() => ({
    scale: 1,
    rotateY: 0,
    rotateX: 0,
    y: 0,
    opacity: 1,
    config: { mass: 1, tension: 280, friction: 20 }
  }));

  const [iconProps, setIcon] = useSpring(() => ({
    rotate: 0,
    scale: 1,
    y: 0,
    config: { mass: 1, tension: 200, friction: 15 }
  }));
  
  const [glowProps, setGlow] = useSpring(() => ({
    opacity: 0,
    scale: 0.8,
    config: { mass: 1, tension: 280, friction: 20 }
  }));

  return (
    <animated.div
      style={{
        transform: props.scale.to(s => `scale(${s})`),
        background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
        borderRadius: '30px',
        opacity: props.opacity,
        boxShadow: isHovered 
          ? '0 25px 30px -5px rgba(0, 0, 0, 0.2), 0 10px 15px -6px rgba(0, 0, 0, 0.1)'
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}
      onMouseEnter={() => {
        setHoveredIndex(index);
        set({
          scale: 1.05,
          y: -10
        });
        setIcon({ 
          rotate: 360, 
          scale: 1.3,
          y: -5
        });
        setGlow({
          opacity: 0.8,
          scale: 1.2
        });
      }}
      onMouseLeave={() => {
        setHoveredIndex(null);
        set({ 
          scale: 1, 
          y: 0
        });
        setIcon({ 
          rotate: 0, 
          scale: 1,
          y: 0
        });
        setGlow({
          opacity: 0,
          scale: 0.8
        });
      }}
      className="p-8 transition-all duration-300 transform-gpu relative overflow-hidden backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent pointer-events-none" />
      <animated.div 
        style={{
          ...glowProps,
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '80%',
          height: '80%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(234, 179, 8, 0.15) 0%, rgba(255,255,255,0) 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <animated.div
        style={{
          transform: iconProps.scale.to(s => `scale(${s})`),
          transformOrigin: 'center center',
          display: 'inline-flex',
          marginBottom: '1.5rem',
          position: 'relative',
          zIndex: 10
        }}
      >
        <div className="p-4 bg-white/80 rounded-full shadow-lg">
          <div style={{ color: isHovered ? 'rgb(234, 179, 8)' : 'rgb(30, 58, 138)' }}>
            <feature.icon className="w-12 h-12" />
          </div>
        </div>
      </animated.div>
      <animated.h3 
        style={{
          transform: isHovered ? 'translateY(-5px)' : 'translateY(0px)',
          transition: 'transform 0.3s ease-out'
        }}
        className="text-2xl font-semibold mb-3 text-navy">
        {feature.title}
      </animated.h3>
      <animated.p 
        style={{
          opacity: isHovered ? 1 : 0.9,
          transform: isHovered ? 'translateY(-2px)' : 'translateY(0px)',
          transition: 'all 0.4s ease-out'
        }}
        className="text-gray-600 leading-relaxed">
        {feature.description}
      </animated.p>
    </animated.div>
  );
};

export const FeatureHighlights = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const titleSpring = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    delay: 300,
    config: config.gentle
  });

  const subtitleSpring = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    delay: 400,
    config: config.gentle
  });

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <animated.h2 
          style={titleSpring}
          className="text-5xl font-bold text-center mb-4 text-navy">
          Resort Amenities
        </animated.h2>
        <animated.p 
          style={subtitleSpring}
          className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Experience luxury and comfort with our premium amenities
        </animated.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              feature={feature}
              index={index}
              isHovered={hoveredIndex === index}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};