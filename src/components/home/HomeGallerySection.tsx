import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Camera } from "lucide-react";

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
  { src: gallery1, alt: "Waterfall excursion", label: "Nature" },
  { src: gallery2, alt: "Meditation session", label: "Peace" },
  { src: gallery3, alt: "Yoga practice", label: "Practice" },
  { src: gallery4, alt: "Asana training", label: "Growth" },
  { src: gallery5, alt: "Community meal", label: "Sangha" },
  { src: gallery6, alt: "Warrior pose", label: "Strength" },
  { src: gallery7, alt: "Group class", label: "Unity" },
  { src: gallery8, alt: "Anatomy workshop", label: "Wisdom" },
];

// Positions for scattered polaroid layout
const polaroidPositions = [
  { top: "2%", left: "5%", rotate: -12, delay: 0 },
  { top: "5%", left: "32%", rotate: 5, delay: 0.1 },
  { top: "0%", left: "60%", rotate: -6, delay: 0.2 },
  { top: "8%", right: "5%", rotate: 10, delay: 0.3 },
  { bottom: "15%", left: "3%", rotate: 8, delay: 0.4 },
  { bottom: "10%", left: "28%", rotate: -8, delay: 0.5 },
  { bottom: "5%", right: "28%", rotate: 6, delay: 0.6 },
  { bottom: "12%", right: "2%", rotate: -10, delay: 0.7 },
];

const HomeGallerySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-secondary/10 to-background overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/10 rounded-full" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-primary/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-primary/40" />
            <Camera className="w-4 h-4 text-primary/60" />
            <span className="w-8 h-px bg-primary/40" />
          </div>
          <span className="text-primary/60 font-medium text-sm tracking-widest uppercase mb-3 block">
            Moments & Memories
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Life at Yogagarhi
          </h2>
        </div>

        {/* Scattered Polaroid Gallery */}
        <div className="relative h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] max-w-6xl mx-auto">
          {galleryImages.map((image, index) => {
            const pos = polaroidPositions[index];
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                className="absolute transition-all duration-500 ease-out cursor-pointer group"
                style={{
                  top: pos.top,
                  left: pos.left,
                  right: pos.right,
                  bottom: pos.bottom,
                  transform: `rotate(${pos.rotate}deg) ${isHovered ? 'scale(1.15) rotate(0deg)' : ''}`,
                  zIndex: isHovered ? 50 : index,
                  animationDelay: `${pos.delay}s`,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Polaroid frame */}
                <div 
                  className={`
                    bg-background p-2 pb-10 md:p-3 md:pb-12 shadow-xl rounded-sm
                    transition-all duration-500
                    ${isHovered ? 'shadow-2xl shadow-primary/20' : 'shadow-lg'}
                  `}
                >
                  {/* Image */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`
                        w-full h-full object-cover transition-transform duration-700
                        ${isHovered ? 'scale-110' : 'scale-100'}
                      `}
                    />
                  </div>
                  
                  {/* Label */}
                  <div className="absolute bottom-2 md:bottom-3 left-0 right-0 text-center">
                    <span className="font-heading text-xs md:text-sm text-foreground/70 italic">
                      {image.label}
                    </span>
                  </div>

                  {/* Tape decoration */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 md:w-12 h-3 md:h-4 bg-primary/20 rotate-[-2deg]" />
                </div>
              </div>
            );
          })}

          {/* Center text overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-40 pointer-events-none">
            <div className="bg-background/95 backdrop-blur-sm px-8 py-6 md:px-12 md:py-8 rounded-2xl border border-primary/10 shadow-xl">
              <p className="font-heading text-xl md:text-2xl lg:text-3xl text-foreground mb-2">
                Where practice
              </p>
              <p className="font-heading text-xl md:text-2xl lg:text-3xl text-primary">
                meets purpose
              </p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="w-6 h-px bg-primary/40" />
                <span className="text-xs text-muted-foreground tracking-widest uppercase">
                  Bali, Indonesia
                </span>
                <span className="w-6 h-px bg-primary/40" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 md:mt-12">
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
