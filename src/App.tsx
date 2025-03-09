import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { FeatureHighlights } from './components/FeatureHighlights';
import { BookingSection } from './components/BookingSection';
import { Gallery } from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen relative bg-white">
      <Navigation />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="features">
        <FeatureHighlights />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="booking">
        <BookingSection />
      </section>
    </div>
  );
}

export default App;