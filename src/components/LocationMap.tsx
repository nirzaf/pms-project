import React from 'react';
import { useSpring, animated } from '@react-spring/web';

export const LocationMap: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const mapSection = document.getElementById('map-section');
    if (mapSection) {
      observer.observe(mapSection);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const mapSpring = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 },
    delay: 300,
    config: { mass: 1, tension: 280, friction: 20 }
  });

  const titleSpring = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 },
    delay: 200,
    config: { mass: 1, tension: 280, friction: 20 }
  });

  return (
    <section id="map-section" className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <animated.h2 
          style={titleSpring}
          className="text-5xl font-bold text-center mb-8 text-[#050063]">
          Our Location
        </animated.h2>
        
        <animated.div 
          style={mapSpring}
          className="w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-xl"
        >
          <div className="relative pb-[56.25%] h-0">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7916.072464518216!2d79.84498795097372!3d7.236707136335276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2eeb163654703%3A0x20a21aba22188162!2sEthukala%2C%20Negombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sqa!4v1744664692096!5m2!1sen!2sqa" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="O'Reilly Resort Location"
              className="rounded-lg"
            />
          </div>
        </animated.div>
        
        <animated.div 
          style={mapSpring}
          className="mt-8 text-center max-w-2xl mx-auto"
        >
          <p className="text-lg text-gray-700 mb-4">
            Located at 31A Don Bosco Road, Ethukala, Negombo, Sri Lanka. Just 1.4km from Negombo beach and 11km from the airport (15-20 minutes travel time).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#050063] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm">31A Don Bosco Road, Ethukala, Negombo</span>
            </div>
            <div className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#050063] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm">+94 777 587 755</span>
            </div>
            <div className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#050063] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm">0777 063 239</span>
            </div>
          </div>
          <div className="mt-6 text-center">
            <div className="inline-flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#050063] mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
                <span>Beach: 1.4km</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#050063] mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span>Airport: 11km (15-20 min)</span>
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    </section>
  );
};
