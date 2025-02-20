import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { FeatureHighlights } from './components/FeatureHighlights';
import { BookingSection } from './components/BookingSection';
import { Scene } from './components/3D/Scene';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen relative">
      <Scene />
      <div className="relative z-10">
        <Navigation />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <HeroSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FeatureHighlights />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <BookingSection />
        </motion.div>
      </div>
    </div>
  );
}

export default App;