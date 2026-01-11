import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Import gallery images
import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import gallery4 from "@/assets/gallery/gallery-4.jpg";
import gallery5 from "@/assets/gallery/gallery-5.jpg";
import gallery6 from "@/assets/gallery/gallery-6.jpg";
import gallery7 from "@/assets/gallery/gallery-7.jpg";
import gallery8 from "@/assets/gallery/gallery-8.jpg";

const galleryImages = [
  { src: gallery1, alt: "Waterfall excursion" },
  { src: gallery2, alt: "Meditation session" },
  { src: gallery3, alt: "Yoga practice" },
  { src: gallery4, alt: "Asana training" },
  { src: gallery5, alt: "Community meal" },
  { src: gallery6, alt: "Warrior pose" },
  { src: gallery7, alt: "Group class" },
  { src: gallery8, alt: "Anatomy workshop" },
];

// Large decorative Mandala SVG component
const MandalaBackground = () => (
  <svg
    className="w-full h-full opacity-15"
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <circle cx="200" cy="200" r="170" stroke="currentColor" strokeWidth="1" className="text-primary" />
    <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="1" className="text-primary" />
    <circle cx="200" cy="200" r="110" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <circle cx="200" cy="200" r="90" stroke="currentColor" strokeWidth="1" className="text-primary" />
    <circle cx="200" cy="200" r="70" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    
    {[...Array(12)].map((_, i) => (
      <ellipse
        key={`outer-petal-${i}`}
        cx="200"
        cy="40"
        rx="20"
        ry="50"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className="text-primary"
        transform={`rotate(${i * 30} 200 200)`}
      />
    ))}
    
    {[...Array(12)].map((_, i) => (
      <ellipse
        key={`middle-petal-${i}`}
        cx="200"
        cy="70"
        rx="15"
        ry="40"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className="text-primary"
        transform={`rotate(${i * 30 + 15} 200 200)`}
      />
    ))}
    
    {[...Array(8)].map((_, i) => (
      <ellipse
        key={`inner-petal-${i}`}
        cx="200"
        cy="120"
        rx="12"
        ry="30"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className="text-primary"
        transform={`rotate(${i * 45} 200 200)`}
      />
    ))}

    {[...Array(24)].map((_, i) => (
      <line
        key={`line-${i}`}
        x1="200"
        y1="110"
        x2="200"
        y2="90"
        stroke="currentColor"
        strokeWidth="0.5"
        className="text-primary"
        transform={`rotate(${i * 15} 200 200)`}
      />
    ))}
    
    {[...Array(36)].map((_, i) => (
      <circle
        key={`dot-${i}`}
        cx="200"
        cy="20"
        r="3"
        fill="currentColor"
        className="text-primary"
        transform={`rotate(${i * 10} 200 200)`}
      />
    ))}
  </svg>
);

const HomeGallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/20 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="text-primary/60 font-medium text-sm tracking-widest uppercase mb-2 block">
            Moments & Memories
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Life at Yogagarhi
          </h2>
        </div>

        {/* Mandala Gallery */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[650px]">
            {/* Background mandala - rotating slowly */}
            <div className="absolute inset-0 animate-spin-slow">
              <MandalaBackground />
            </div>

            {/* Images arranged in a circle - rotating around center */}
            <div className="absolute inset-0 animate-spin-slow" style={{ animationDirection: 'reverse' }}>
              {galleryImages.map((image, index) => {
                const angle = (index * (360 / galleryImages.length)) - 90;
                const radius = 42;
                const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
                
                return (
                  <div
                    key={index}
                    className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                    }}
                  >
                    <div className="w-full h-full animate-spin-slow">
                      <div className="w-full h-full rounded-full overflow-hidden border-2 md:border-3 border-primary/30 shadow-lg hover:border-primary transition-all duration-300">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center static photo carousel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative">
                {/* Main circular image */}
                <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl">
                  <img
                    src={galleryImages[currentIndex].src}
                    alt={galleryImages[currentIndex].alt}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>

                {/* Navigation buttons */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-background/90 border border-primary/30 shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                </button>
                
                <button
                  onClick={goToNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-background/90 border border-primary/30 shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Description & CTA */}
        <div className="text-center mt-8 md:mt-12">
          <p className="font-heading text-xl md:text-2xl text-foreground/80 leading-relaxed mb-3">
            Where practice meets purpose.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6 text-sm md:text-base">
            Glimpses of transformation, community, and the yogic journey.
          </p>
          
          <Link 
            to="/gallery" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium group hover:bg-primary/90 transition-all"
          >
            Explore Full Gallery
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeGallerySection;
