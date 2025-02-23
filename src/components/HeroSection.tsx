import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const transitions = useTransition(currentImage, {
    from: { opacity: 0, scale: 1.1 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0 },
    config: { duration: 700 }
  });

  const buttonSpring = useSpring({
    scale: 1,
    config: { tension: 300, friction: 10 }
  });

  const titleSpring = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 200,
    config: { duration: 800 }
  });

  const descriptionSpring = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 400,
    config: { duration: 800 }
  });

  const buttonContainerSpring = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 600,
    config: { duration: 800 }
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
          style={titleSpring}
          className="h-64 mb-8 z-10 p-8 rounded-xl bg-white/20 backdrop-blur-md"
        >
          <img
            src="https://ik.imagekit.io/fazrinphcc/O'REILLY'S%202D%20WITH%20TRANPARENT%20BACKGROUND.png?updatedAt=1740328984931"
            alt="O'Reilly's Bungalow"
            className="h-full object-contain"
          />
        </animated.div>

        <div className="absolute inset-0 flex items-center justify-between px-4">
          <animated.button
            style={{
              ...buttonSpring,
              transform: buttonSpring.scale.to(s => `scale(${s})`)
            }}
            onMouseEnter={() => buttonSpring.scale.start(1.1)}
            onMouseLeave={() => buttonSpring.scale.start(1)}
            onMouseDown={() => buttonSpring.scale.start(0.9)}
            onMouseUp={() => buttonSpring.scale.start(1.1)}
            onClick={prevImage}
            className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </animated.button>
          <animated.button
            style={{
              ...buttonSpring,
              transform: buttonSpring.scale.to(s => `scale(${s})`)
            }}
            onMouseEnter={() => buttonSpring.scale.start(1.1)}
            onMouseLeave={() => buttonSpring.scale.start(1)}
            onMouseDown={() => buttonSpring.scale.start(0.9)}
            onMouseUp={() => buttonSpring.scale.start(1.1)}
            onClick={nextImage}
            className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </animated.button>
        </div>

        <div className="text-center text-white max-w-4xl px-4">
          <animated.h1
            style={titleSpring}
            className="text-7xl font-bold mb-6 drop-shadow-lg"
          >
            O'Reilly's Bungalow
          </animated.h1>
          <animated.p
            style={descriptionSpring}
            className="text-2xl mb-8 drop-shadow-md"
          >
            Experience luxury like never before
          </animated.p>
          <animated.div style={buttonContainerSpring}>
            <animated.button
              style={{
                ...buttonSpring,
                transform: buttonSpring.scale.to(s => `scale(${s})`)
              }}
              onMouseEnter={() => buttonSpring.scale.start(1.05)}
              onMouseLeave={() => buttonSpring.scale.start(1)}
              onMouseDown={() => buttonSpring.scale.start(0.95)}
              onMouseUp={() => buttonSpring.scale.start(1.05)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg text-xl font-semibold transition-colors shadow-lg backdrop-blur-sm"
            >
              Book Your Stay
            </animated.button>
          </animated.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <animated.button
            key={index}
            style={{
              backgroundColor: currentImage === index ? 'white' : 'white/50'
            }}
            onClick={() => setCurrentImage(index)}
            className="w-3 h-3 rounded-full transition-colors"
          />
        ))}
      </div>
    </div>
  );
};