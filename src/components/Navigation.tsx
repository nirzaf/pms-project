import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { animated, useSpring } from '@react-spring/web';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', href: '#' },
    { title: 'Rooms', href: '#' },
    { title: 'Amenities', href: '#' },
    { title: 'Book Now', href: '#', isButton: true }
  ];

  const titleSpring = useSpring({
    from: { opacity: 0, x: -20 },
    to: { opacity: 1, x: 0 }
  });

  const menuItemSprings = useSpring({
    from: { opacity: 0, y: -20 },
    to: { opacity: 1, y: 0 },
    delay: 100
  });

  const mobileMenuSpring = useSpring({
    from: { opacity: 0, height: 0 },
    to: { opacity: 1, height: 'auto' }
  });

  return (
    <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <animated.h1 
            style={titleSpring}
            className="text-2xl font-bold text-white"
          >
            O'Reilly's Bungalow
          </animated.h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <animated.a
                key={item.title}
                href={item.href}
                style={menuItemSprings}
                className={`text-white hover:text-blue-200 transition-colors ${
                  item.isButton 
                    ? 'bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg'
                    : ''
                }`}
              >
                {item.title}
              </animated.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <animated.div
            style={mobileMenuSpring}
            className="md:hidden bg-white/20 backdrop-blur-md rounded-lg mt-2 mb-4"
          >
            <div className="flex flex-col space-y-4 p-4">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className={`text-white hover:text-blue-200 transition-colors ${
                    item.isButton 
                      ? 'bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-center'
                      : ''
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </animated.div>
        )}
      </div>
    </nav>
  );
};