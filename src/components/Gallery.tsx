import { useState, useEffect, useRef } from 'react';
import { useSpring, animated, config } from '@react-spring/web';

// Image URLs from images.md
const galleryImages = [
  // Original images
  { src: 'https://ik.imagekit.io/fazrinphcc/OReilly/image-1-1534X1024.jpeg?updatedAt=1744662350489', name: 'landscape1.jpeg' },
  { src: 'https://ik.imagekit.io/fazrinphcc/OReilly/image-4-1024X1024.jpeg?updatedAt=1744662350333', name: 'square1.jpeg' },
  { src: 'https://ik.imagekit.io/fazrinphcc/OReilly/image-2-1534X1024.jpeg?updatedAt=1744662350269', name: 'landscape2.jpeg' },
  { src: 'https://ik.imagekit.io/fazrinphcc/OReilly/image-2-1024X1024.jpeg?updatedAt=1744662350273', name: 'square2.jpeg' },
  { src: "https://ik.imagekit.io/fazrinphcc/OReilly/WhatsApp%20Image%202025-03-08%20at%2016.06.27_15c9b0c5.jpg?updatedAt=1741468432007", name: "resort_view_1.jpg" },
  { src: "https://ik.imagekit.io/fazrinphcc/OReilly/WhatsApp%20Image%202025-03-08%20at%2016.06.26_32424aa8.jpg?updatedAt=1741468431993", name: "resort_view_2.jpg" },
  { src: "https://ik.imagekit.io/fazrinphcc/OReilly/WhatsApp%20Image%202025-03-08%20at%2016.06.28_2526b803.jpg?updatedAt=1741468431968", name: "resort_view_3.jpg" },
  { src: "https://ik.imagekit.io/fazrinphcc/OReilly/WhatsApp%20Image%202025-03-08%20at%2016.06.27_2c7ea83c.jpg?updatedAt=1741468431870", name: "resort_view_4.jpg" },
  { src: "https://ik.imagekit.io/fazrinphcc/OReilly/WhatsApp%20Image%202025-03-08%20at%2016.06.27_5739e4e6.jpg?updatedAt=1741468431819", name: "resort_view_5.jpg" },
  { src: "https://ik.imagekit.io/fazrinphcc/OReilly/WhatsApp%20Image%202025-03-08%20at%2016.06.28_6089c75c.jpg?updatedAt=1741468431789", name: "resort_view_6.jpg" },
  { src: "https://ik.imagekit.io/fazrinphcc/OReilly/WhatsApp%20Image%202025-03-08%20at%2016.06.27_e12b9650.jpg?updatedAt=1741468431715", name: "resort_view_7.jpg" },
  { src: "https://ik.imagekit.io/fazrinphcc/OReilly/external_resort_view.jpg?updatedAt=1741539261861", name: "external_resort_view.jpg" }
];

// Modal component for displaying full-sized images
interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  imageName: string;
  onClose: () => void;
  imageIndex: number;
  onNext: () => void;
  onPrevious: () => void;
  totalImages: number;
}

const ImageModal: React.FC<ImageModalProps> = ({ 
  isOpen, 
  imageUrl, 
  imageName,
  onClose, 
  imageIndex,
  onNext,
  onPrevious,
  totalImages
}) => {
  // Ref for touch handling
  const touchStartXRef = useRef<number | null>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Animation for the modal backdrop
  const backdropSpring = useSpring({
    opacity: isOpen ? 0.8 : 0,
    config: { ...config.gentle, clamp: true },
    onRest: () => {
      if (!isOpen) {
        document.body.style.overflow = 'auto';
      }
    }
  });

  // Animation for the modal content
  const modalSpring = useSpring({
    transform: isOpen 
      ? 'translate(-50%, -50%) scale(1)' 
      : 'translate(-50%, -50%) scale(0.5)',
    opacity: isOpen ? 1 : 0,
    config: { mass: 1, tension: 280, friction: 20 }
  });

  // Handle touch events for swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    
    // Threshold for swipe detection (50px)
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left, go to next image
        onNext();
      } else {
        // Swipe right, go to previous image
        onPrevious();
      }
    }
    
    touchStartXRef.current = null;
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowRight':
          onNext();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
        default:
          break;
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!isOpen) return null;

  return (
    <>
      {/* Modal backdrop */}
      <animated.div 
        style={{
          ...backdropSpring,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'black',
          zIndex: 50
        }}
        onClick={onClose}
      />
      
      {/* Modal content */}
      <animated.div
        ref={modalContentRef}
        style={{
          ...modalSpring,
          position: 'fixed',
          top: '50%',
          left: '50%',
          zIndex: 51,
          width: '95vw',  // Slightly wider on mobile
          maxWidth: '1200px',
          maxHeight: '90vh',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}
        onClick={(e) => e.stopPropagation()} // Prevent clicks from closing modal
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="touch-manipulation" // Improves touch behavior
      >
        <div className="relative w-full h-full">
          <img 
            src={imageUrl} 
            alt={`Full view of ${imageName}`} 
            className="w-full h-full object-contain"
            style={{ maxHeight: 'calc(90vh - 80px)' }} // Account for caption height
          />
          
          {/* Close button - larger touch target on mobile */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 sm:p-3 backdrop-blur-sm transition-colors duration-300 z-10"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          {/* Navigation arrows - larger on mobile and better positioned */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrevious();
              }}
              className="ml-1 sm:ml-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 sm:p-3 backdrop-blur-sm transition-colors duration-300 transform hover:scale-110 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
              aria-label="Previous image"
              disabled={imageIndex === 0}
              style={{ opacity: imageIndex === 0 ? 0.5 : 1 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="mr-1 sm:mr-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 sm:p-3 backdrop-blur-sm transition-colors duration-300 transform hover:scale-110 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
              aria-label="Next image"
              disabled={imageIndex === totalImages - 1}
              style={{ opacity: imageIndex === totalImages - 1 ? 0.5 : 1 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
          
          {/* Image caption with counter - responsive text sizes */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 sm:p-4 backdrop-blur-sm">
            <div className="flex justify-between items-center">
              <p className="text-base sm:text-lg font-medium truncate">{imageName}</p>
              <p className="text-xs sm:text-sm ml-2">{imageIndex + 1} / {totalImages}</p>
            </div>
          </div>
        </div>
      </animated.div>
    </>
  );
};

export const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const gallerySection = document.getElementById('gallery-section');
    if (gallerySection) {
      observer.observe(gallerySection);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const titleSpring = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 },
    delay: 300,
    config: config.gentle
  });

  const subtitleSpring = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 },
    delay: 400,
    config: config.gentle
  });

  const imageSpring = useSpring({
    from: { opacity: 0, scale: 0.9 },
    to: { opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 },
    delay: 500,
    config: config.gentle
  });

  const handleImageClick = (index: number) => {
    setModalImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const goToNextImage = () => {
    if (modalImageIndex < galleryImages.length - 1) {
      setModalImageIndex(prevIndex => prevIndex + 1);
    }
  };

  const goToPreviousImage = () => {
    if (modalImageIndex > 0) {
      setModalImageIndex(prevIndex => prevIndex - 1);
    }
  };

  return (
    <section id="gallery-section" className="py-20 bg-[#FFFFFF]">
      <div className="container mx-auto px-4">
        <animated.h2 
          style={titleSpring}
          className="text-5xl font-bold text-center mb-4 text-[#050063]">
          Our Gallery
        </animated.h2>
        <animated.p 
          style={subtitleSpring}
          className="text-xl text-center text-[#000000]/70 mb-16 max-w-2xl mx-auto">
          Experience the beauty and luxury of our resort through these stunning images
        </animated.p>

        <animated.div 
          style={imageSpring}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer group bg-[#FFFFFF]"
              onClick={() => handleImageClick(index)}
            >
              {/* Animated border effect */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                {/* Top border */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#DEA401] via-[#050063] to-[#DEA401] group-hover:w-full transition-all duration-700 ease-in-out"></div>
                {/* Right border */}
                <div className="absolute top-0 right-0 w-[2px] h-0 bg-gradient-to-b from-[#DEA401] via-[#050063] to-[#DEA401] group-hover:h-full transition-all duration-700 ease-in-out delay-150"></div>
                {/* Bottom border */}
                <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-gradient-to-l from-[#DEA401] via-[#050063] to-[#DEA401] group-hover:w-full transition-all duration-700 ease-in-out delay-300"></div>
                {/* Left border */}
                <div className="absolute bottom-0 left-0 w-[2px] h-0 bg-gradient-to-t from-[#DEA401] via-[#050063] to-[#DEA401] group-hover:h-full transition-all duration-700 ease-in-out delay-450"></div>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#DEA401] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#DEA401] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#DEA401] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#DEA401] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500"></div>
              </div>
              
              <img 
                src={image.src} 
                alt={`Gallery image: ${image.name}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ aspectRatio: '1/1' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end z-20">
                <div className="p-4 text-[#FFFFFF]">
                  <p className="font-medium">{image.name}</p>
                </div>
              </div>
            </div>
          ))}
        </animated.div>
      </div>

      {/* Image Modal */}
      <ImageModal 
        isOpen={modalOpen}
        imageUrl={galleryImages[modalImageIndex]?.src || ''}
        imageName={galleryImages[modalImageIndex]?.name || ''}
        onClose={closeModal}
        imageIndex={modalImageIndex}
        onNext={goToNextImage}
        onPrevious={goToPreviousImage}
        totalImages={galleryImages.length}
      />
    </section>
  );
};
