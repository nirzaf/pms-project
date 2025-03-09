import React, { useEffect } from 'react';
import { animated, useSpring, useTransition } from '@react-spring/web';

const images = [
  'https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?auto=format&fit=crop&q=80&w=2070'
];

export const HeroSection = () => {
  const [currentImage, setCurrentImage] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const transitions = useTransition(currentImage, {
    from: { opacity: 0, scale: 1.1 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0 },
    config: { duration: 700 }
  });

  const titleSpring = useSpring({
    from: { opacity: 0, y: 50, rotate: -5 },
    to: { opacity: 1, y: 0, rotate: 0 },
    delay: 200,
    config: { tension: 120, friction: 14 }
  });

  const descriptionSpring = useSpring({
    from: { opacity: 0, y: 30, scale: 0.9 },
    to: { opacity: 1, y: 0, scale: 1 },
    delay: 800,
    config: { tension: 120, friction: 12 }
  });

  const buttonContainerSpring = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    delay: 1400,
    config: { tension: 120, friction: 12 }
  });

  const glowSpring = useSpring({
    from: { backgroundPosition: '200% 0' },
    to: { backgroundPosition: '-200% 0' },
    loop: true,
    config: { duration: 12000 }
  });

  return (
    <div className="relative h-screen overflow-hidden">
      {transitions((style, item) => (
        <animated.div style={style} className="absolute inset-0">
          <img
            src={images[item]}
            alt="Resort view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
        </animated.div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <animated.div 
          style={{
            ...titleSpring,
            background: 'linear-gradient(145deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1))',
          }}
          className="h-64 mb-8 p-2 px-6 rounded-full backdrop-blur-xl 
            shadow-[inset_-2px_-2px_10px_rgba(255,255,255,0.7),_inset_2px_2px_10px_rgba(0,0,0,0.1),_0_0_30px_rgba(255,255,255,0.3)]
            hover:shadow-[inset_-2px_-2px_10px_rgba(255,255,255,0.7),_inset_2px_2px_10px_rgba(0,0,0,0.1),_0_0_40px_rgba(255,255,255,0.4)]
            transition-all duration-300 ease-out
            before:content-[''] before:absolute before:inset-0 before:rounded-full 
            before:bg-gradient-to-br before:from-white/50 before:to-transparent before:opacity-70 before:-z-10
            relative overflow-hidden mt-24 md:mt-28"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-full"></div>
          <img
            src="https://ik.imagekit.io/fazrinphcc/O'REILLY'S%202D%20WITH%20TRANPARENT%20BACKGROUND.png.png?updatedAt=1741451666598"
            alt="O'Reilly's Bungalow"
            className="h-full object-contain drop-shadow-lg relative z-10"
          />
        </animated.div>

        <div className="text-center text-white max-w-5xl px-4 relative z-20 mx-auto py-4">
          <animated.h1
            style={{
              ...titleSpring,
              background: 'linear-gradient(90deg, #ffffff 0%, #f0f0f0 50%, #ffffff 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              ...glowSpring
            }}
            className="font-['Quicksand'] text-2xl md:text-4xl mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] leading-[1.5] md:leading-[1.4] tracking-widest px-2 font-light uppercase"
          >
            Welcome to Paradise
          </animated.h1>
          <animated.h2
            style={{
              ...titleSpring,
              background: 'linear-gradient(90deg, #ffffff 0%, #f0f0f0 50%, #ffffff 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              ...glowSpring
            }}
            className="font-['Pacifico'] text-4xl md:text-6xl lg:text-7xl mb-6 md:mb-12 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] leading-[1.5] md:leading-[1.4] tracking-wide px-2 break-words"
          >
            O'Reilly's Bungalow
          </animated.h2>
          <animated.p
            style={descriptionSpring}
            className="hidden md:block font-['Quicksand'] text-xl md:text-2xl mb-8 px-6 py-3 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10 shadow-lg text-white font-medium tracking-wide inline-block mx-auto"
          >
            Where every moment feels like a gentle ocean breeze
          </animated.p>
          <animated.div 
            style={buttonContainerSpring}
            className="relative inline-block mt-0 md:mt-6"
          >
            <div className="absolute inset-0 bg-navy blur-xl opacity-20 rounded-full transform scale-110"></div>
            <animated.button
              style={{
                transform: 'scale(1)'
              }}
              className="relative bg-gradient-to-r from-navy to-navy/80 hover:from-gold hover:to-gold/90 
                text-white px-8 md:px-16 py-3 md:py-5 rounded-full text-lg md:text-xl font-['Quicksand'] font-bold transition-all duration-500 
                shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]
                backdrop-blur-sm hover:tracking-wider"
            >
              Start Your Vacation
            </animated.button>
          </animated.div>
        </div>
      </div>
    </div>
  );
};