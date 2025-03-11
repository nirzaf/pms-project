import { useState, useEffect } from 'react';
import { useSpring, animated, config, useSprings } from '@react-spring/web';
import { Home, School as Pool, Dumbbell, UtensilsCrossed, Snowflake, Calendar, Users, Percent, Sun } from 'lucide-react';

export const WinterStaySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  
  // Handle scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Animation for the section title and description
  const titleSpring = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    delay: 300,
    config: config.gentle
  });

  // Animation for the snowflake decorations
  const snowflakeSpring = useSpring({
    from: { rotate: 0, y: 0 },
    to: { rotate: 360, y: -10 },
    loop: { reverse: true },
    config: { duration: 20000 }
  });
  
  // Generate multiple snowflakes with different animations
  const snowflakeCount = 12;
  const snowflakes = useSprings(
    snowflakeCount,
    [...Array(snowflakeCount)].map((_, i) => ({
      from: { 
        x: Math.random() * 100 - 50, 
        y: 0, 
        rotate: 0, 
        opacity: Math.random() * 0.5 + 0.1 
      },
      to: { 
        x: Math.random() * 100 - 50, 
        y: -20, 
        rotate: 360, 
        opacity: Math.random() * 0.5 + 0.1 
      },
      loop: { reverse: true },
      delay: i * 500,
      config: { duration: 10000 + Math.random() * 20000 }
    }))
  );

  // Animation for the wavy line
  const wavyLineSpring = useSpring({
    from: { backgroundPosition: '0% 50%' },
    to: { backgroundPosition: '100% 50%' },
    loop: true,
    config: { duration: 15000 }
  });
  
  // Parallax effect for background elements
  const parallaxBg = useSpring({
    transform: `translateY(${scrollY * 0.1}px)`,
    config: { mass: 1, tension: 280, friction: 60 }
  });

  // Amenities with icons
  const amenities = [
    {
      icon: Home,
      title: '3 Air-Conditioned Rooms',
      description: 'Spacious, comfortable rooms for the whole family'
    },
    {
      icon: Pool,
      title: 'Private Swimming Pool',
      description: 'Refresh and relax in our private pool'
    },
    {
      icon: Dumbbell,
      title: 'Fully Equipped Gym',
      description: 'Stay fit with our modern exercise equipment'
    },
    {
      icon: UtensilsCrossed,
      title: 'Complete Kitchen',
      description: 'All kitchenware for your culinary needs'
    }
  ];

  // Benefits with icons
  const benefits = [
    {
      icon: Calendar,
      title: 'Flexible Booking',
      description: 'Weekly and monthly booking options'
    },
    {
      icon: Users,
      title: 'Family-Friendly',
      description: 'Entire bungalow for your family'
    },
    {
      icon: Percent,
      title: 'Discounted Rates',
      description: 'Special pricing for long-term stays'
    },
    {
      icon: Snowflake,
      title: 'Winter Comfort',
      description: 'Perfect sunny escape during winter months'
    }
  ];

  return (
    <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Enhanced background with frost effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-blue-100 z-0" />
      
      {/* Frost overlay texture */}
      <div className="absolute inset-0 opacity-10 z-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      {/* Parallax background elements */}
      <animated.div style={parallaxBg} className="absolute inset-0 z-0 pointer-events-none">
        {/* Sun glow effect */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-gold/20 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl opacity-40" />
      </animated.div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-70" />
      
      {/* Multiple animated snowflakes */}
      {snowflakes.map((props, i) => (
        <animated.div 
          key={i}
          style={{
            ...props,
            left: `${(i % 6) * 20}%`,
            top: `${Math.floor(i / 6) * 30 + 10}%`
          }}
          className="absolute text-blue-200 z-10 pointer-events-none"
        >
          <Snowflake size={15 + (i % 3) * 10} />
        </animated.div>
      ))}
      
      {/* Original snowflakes for larger screens */}
      <animated.div 
        style={snowflakeSpring}
        className="absolute top-10 right-10 text-blue-200 opacity-50 hidden md:block"
      >
        <Snowflake size={40} />
      </animated.div>
      
      <animated.div 
        style={{...snowflakeSpring, delay: 500}}
        className="absolute bottom-20 left-10 text-blue-200 opacity-30 hidden md:block"
      >
        <Snowflake size={30} />
      </animated.div>
      
      <animated.div 
        style={{...snowflakeSpring, delay: 1000}}
        className="absolute top-40 left-[20%] text-blue-200 opacity-40 hidden md:block"
      >
        <Snowflake size={25} />
      </animated.div>

      {/* Wavy line decoration */}
      <animated.div 
        style={wavyLineSpring}
        className="absolute top-[30%] left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent bg-[length:200%_auto] opacity-40"
      />
      
      {/* Additional decorative elements */}
      <animated.div 
        style={wavyLineSpring}
        className="absolute bottom-[20%] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-300 to-transparent bg-[length:200%_auto] opacity-30"
      />
      
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-navy/5 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <animated.div 
            style={titleSpring}
            className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full shadow-sm"
          >
            <div className="flex items-center space-x-2">
              <Snowflake className="text-blue-400" size={18} />
              <span className="text-blue-600 font-medium">Winter Escapes</span>
            </div>
          </animated.div>
          
          <animated.h2 
            style={{...titleSpring, delay: 200}}
            className="text-4xl md:text-5xl font-bold mb-4 text-navy relative inline-block"
          >
            <span className="relative z-10">Sunny Property for Long-Term Winter Stays</span>
            <div className="absolute bottom-1 left-0 w-full h-3 bg-gold/20 -z-0 transform -rotate-1"></div>
            <div className="absolute -bottom-2 -right-2 w-full h-3 bg-blue-200/30 -z-0 transform rotate-1"></div>
          </animated.h2>
          
          <animated.p 
            style={{...titleSpring, delay: 400}}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Escape the cold and enjoy the sun in our luxurious property, perfect for families looking for extended winter stays.
          </animated.p>
        </div>
        
        {/* Amenities section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {amenities.map((amenity, index) => {
            const isHovered = hoveredIndex === index;
            const Icon = amenity.icon;
            
            return (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 ${isHovered ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-500'}`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* Benefits section */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">Why Book a Winter Stay With Us</h3>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4 text-blue-500">
                    <Icon size={28} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-navy">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
              Book Your Winter Stay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};