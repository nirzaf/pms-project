import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { WinterStaySection } from './components/WinterStaySection';
import { FeatureHighlights } from './components/FeatureHighlights';
import { BookingSection } from './components/BookingSection';
import { Gallery } from './components/Gallery';
import { LocationMap } from './components/LocationMap';
// LocalAssetsGallery component has been removed
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative bg-white">
      <Navigation />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="winter-stay">
        <WinterStaySection />
      </section>
      <section id="features">
        <FeatureHighlights />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="location">
        <LocationMap />
      </section>
      {/* LocalAssetsGallery section has been removed */}
      <section id="booking">
        <BookingSection />
      </section>
      <Footer />
    </div>
  );
}

export default App;