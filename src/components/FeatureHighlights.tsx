import { School as Pool, Utensils, Wifi, Coffee, Dumbbell, Wine } from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';

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

export const FeatureHighlights = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Resort Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const [props, set] = useSpring(() => ({
              scale: 1,
              rotateY: 0,
              rotateX: 0,
              shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              config: { mass: 1, tension: 200, friction: 20 }
            }));

            const [iconProps, setIcon] = useSpring(() => ({
              rotate: 0,
              scale: 1,
              config: { mass: 1, tension: 200, friction: 20 }
            }));

            return (
              <animated.div
                key={index}
                style={{
                  transform: props.scale.to((s, ry = props.rotateY.get(), rx = props.rotateX.get()) =>
                    `perspective(1000px) rotateY(${ry}deg) rotateX(${rx}deg) scale(${s})`
                  ),
                  boxShadow: props.shadow,
                  background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
                  borderRadius: '30px'
                }}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const mouseX = e.clientX - rect.left;
                  const mouseY = e.clientY - rect.top;
                  const rotateY = ((mouseX - rect.width / 2) / rect.width) * 10;
                  const rotateX = ((rect.height / 2 - mouseY) / rect.height) * 10;
                  
                  set({
                    scale: 1.05,
                    rotateY,
                    rotateX,
                    shadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
                  });
                  setIcon({ rotate: 360, scale: 1.2 });
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const mouseX = e.clientX - rect.left;
                  const mouseY = e.clientY - rect.top;
                  const rotateY = ((mouseX - rect.width / 2) / rect.width) * 10;
                  const rotateX = ((rect.height / 2 - mouseY) / rect.height) * 10;
                  
                  set({ rotateX, rotateY });
                }}
                onMouseLeave={() => {
                  set({ scale: 1, rotateY: 0, rotateX: 0, shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' });
                  setIcon({ rotate: 0, scale: 1 });
                }}
                className="p-8 transition-all duration-300 transform-gpu relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
                <animated.div
                  style={{
                    transform: iconProps.rotate.to(r => `rotate(${r}deg) scale(${iconProps.scale.get()})`),
                    transformOrigin: 'center center',
                    display: 'inline-flex',
                    marginBottom: '1rem'
                  }}
                >
                  <feature.icon className="w-12 h-12 text-navy" />
                </animated.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </animated.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};