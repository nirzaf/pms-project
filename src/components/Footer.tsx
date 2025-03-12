import { animated, useSpring } from '@react-spring/web';

export const Footer = () => {
  // Animation for the footer
  const footerSpring = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 200,
    config: { tension: 120, friction: 14 }
  });

  // Animation for the border glow effect
  const glowSpring = useSpring({
    from: { backgroundPosition: '0% 50%' },
    to: { backgroundPosition: '100% 50%' },
    loop: true,
    config: { duration: 8000 }
  });

  const currentYear = new Date().getFullYear();

  return (
    <animated.footer 
      style={footerSpring}
      className="relative py-8 mt-16 overflow-hidden"
    >
      {/* Animated border at the top */}
      <animated.div 
        style={glowSpring}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-navy via-gold to-navy bg-[length:200%_auto]"
      />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and copyright */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <img 
                src="https://ik.imagekit.io/fazrinphcc/O'REILLY'S%202D%20WITH%20TRANPARENT%20BACKGROUND.png.png?updatedAt=1741451666598" 
                alt="O'Reilly's Bungalow" 
                className="h-12 mr-3"
              />
              <div>
                <h3 className="font-['Pacifico'] text-navy text-xl">O'Reilly's</h3>
                <p className="font-bold text-xs tracking-widest text-navy">BUNGALOW</p>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              © {currentYear} O'Reilly's Bungalow. All rights reserved.
            </p>
          </div>
          
          {/* Powered by section with animation */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-600 mb-2">Powered by</p>
            <div className="inline-block relative">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-navy to-gold opacity-20 blur-sm rounded-lg transform scale-110"
              />
              <div 
                className="relative px-4 py-2 bg-gradient-to-r from-navy/10 to-gold/10 backdrop-blur-sm 
                  rounded-lg border border-white/20 shadow-lg transition-all duration-300 
                  hover:shadow-[0_0_15px_rgba(222,164,1,0.3)] group"
              >
                <p className="font-['Quicksand'] font-bold text-navy group-hover:text-gold transition-colors duration-300">
                  Quadrate Tech Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social media links */}
        <div className="mt-8 flex justify-center space-x-6">
          {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
            <a 
              key={social}
              href={`#${social}`} 
              className="text-gray-500 hover:text-gold transition-colors duration-300"
              aria-label={social}
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-full 
                bg-gradient-to-br from-navy/20 to-gold/20 backdrop-blur-sm 
                border border-white/10 shadow-md hover:shadow-gold/20 transition-all duration-300"
              >
                {/* Placeholder for social icons - in a real implementation you would use actual icons */}
                <span className="text-xs uppercase">{social.charAt(0)}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </animated.footer>
  );
};