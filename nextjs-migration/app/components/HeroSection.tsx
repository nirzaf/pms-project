'use client';

import React, { useEffect } from 'react';
import { animated, useSpring, useTransition } from '@react-spring/web';
import Image from 'next/image';

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

  const logoTextSpring = useSpring({
    from: { opacity: 0, y: 20, scale: 0.9 },
    to: { opacity: 1, y: 0, scale: 1 },
    delay: 600,
    config: { tension: 120, friction: 14 }
  });

  return (
    <div className="relative h-screen overflow-hidden">
      {transitions((style, item) => (
        <animated.div style={style} className="absolute inset-0">
          <Image
            src={images[item]}
            alt="Resort view"
            fill
            className="object-cover"
            priority={item === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
        </animated.div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <animated.div 
          style={{
            ...titleSpring,
            background: 'linear-gradient(145deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
          }}
          className="group relative h-72 w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 mb-8 p-4 rounded-full backdrop-blur-2xl 
            shadow-[inset_-3px_-3px_15px_rgba(255,255,255,0.8),_inset_3px_3px_15px_rgba(0,0,0,0.15),_0_0_40px_rgba(255,255,255,0.4),_0_0_80px_rgba(222,164,1,0.2)]
            hover:shadow-[inset_-3px_-3px_15px_rgba(255,255,255,0.9),_inset_3px_3px_15px_rgba(0,0,0,0.2),_0_0_60px_rgba(255,255,255,0.6),_0_0_120px_rgba(222,164,1,0.3)]
            transition-all duration-500 ease-out transform hover:scale-105 animate-pulse-gentle
            before:content-[''] before:absolute before:inset-0 before:rounded-full 
            before:bg-gradient-to-br before:from-white/30 before:via-transparent before:to-gold/20 before:opacity-60 before:-z-10
            after:content-[''] after:absolute after:inset-[-2px] after:rounded-full 
            after:bg-gradient-to-r after:from-gold/30 after:via-white/20 after:to-gold/30 after:opacity-0 after:hover:opacity-100 after:transition-opacity after:duration-500 after:-z-20
            overflow-hidden mt-16 md:mt-20"
        >
          {/* Animated background rings */}
          <div className="absolute inset-0 rounded-full">
            <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-white/20 to-transparent animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-bl from-gold/10 to-transparent opacity-70"></div>
          </div>
          
          {/* Rotating glow effect */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 rounded-full bg-gradient-conic from-gold/20 via-transparent to-gold/20 animate-spin-slow"></div>
          </div>
          
          {/* Main logo container */}
          <div className="relative w-full h-full flex items-center justify-center z-10">
            <div className="relative w-full h-full max-w-[85%] max-h-[85%]">
              <Image
                src="https://ik.imagekit.io/fazrinphcc/O'REILLY'S%202D%20WITH%20TRANPARENT%20BACKGROUND.png.png?updatedAt=1741451666598"
                alt="O'Reilly's Bungalow - Premium Accommodation"
                fill
                className="object-contain drop-shadow-2xl filter brightness-110 contrast-110 group-hover:brightness-125 group-hover:contrast-125 transition-all duration-500"
                priority
                sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
              />
              
              {/* Logo enhancement overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          
          {/* Floating particles effect */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-gold rounded-full animate-float-1"></div>
            <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-float-2"></div>
            <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-gold/70 rounded-full animate-float-3"></div>
            <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-white/80 rounded-full animate-float-4"></div>
          </div>
        </animated.div>

        {/* Enhanced logo text */}
        <animated.div 
          style={logoTextSpring}
          className="text-center mb-6"
        >
          <div className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-lg">
            <h1 className="font-['Pacifico'] text-2xl md:text-3xl lg:text-4xl text-white drop-shadow-lg tracking-wide">
              O&apos;Reilly&apos;s Bungalow
            </h1>
            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent mt-2 opacity-70"></div>
            <p className="font-['Quicksand'] text-sm md:text-base text-white/90 mt-1 font-medium tracking-widest uppercase">
              Premium Accommodation
            </p>
          </div>
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
            O&apos;Reilly&apos;s Bungalow
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