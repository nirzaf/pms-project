import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { FeatureHighlights } from './components/FeatureHighlights';
import { BookingSection } from './components/BookingSection';
import { Scene } from './components/3D/Scene';
import { animated, useSpring, useInView } from '@react-spring/web';

function App() {
  const [heroRef, heroInView] = useInView();
  const [featureRef, featureInView] = useInView();
  const [bookingRef, bookingInView] = useInView();

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });

  const featureSpring = useSpring({
    from: { opacity: 0, y: 50 },
    to: { opacity: featureInView ? 1 : 0, y: featureInView ? 0 : 50 },
    config: { duration: 800 }
  });

  const bookingSpring = useSpring({
    from: { opacity: 0, y: 50 },
    to: { opacity: bookingInView ? 1 : 0, y: bookingInView ? 0 : 50 },
    config: { duration: 800 }
  });

  return (
    <div className="min-h-screen relative">
      <Scene />
      <div className="relative z-10">
        <Navigation />
        <animated.div ref={heroRef} style={fadeIn}>
          <HeroSection />
        </animated.div>
        <animated.div ref={featureRef} style={featureSpring}>
          <FeatureHighlights />
        </animated.div>
        <animated.div ref={bookingRef} style={bookingSpring}>
          <BookingSection />
        </animated.div>
      </div>
    </div>
  );
}

export default App;