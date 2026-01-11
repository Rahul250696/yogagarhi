import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import gallery4 from "@/assets/gallery/gallery-4.jpg";
import gallery5 from "@/assets/gallery/gallery-5.jpg";
import gallery6 from "@/assets/gallery/gallery-6.jpg";
import gallery7 from "@/assets/gallery/gallery-7.jpg";
import gallery8 from "@/assets/gallery/gallery-8.jpg";

const galleryImages = [
  { src: gallery1, alt: "Waterfall excursion", label: "Excursions" },
  { src: gallery2, alt: "Meditation at waterfall", label: "Meditation" },
  { src: gallery3, alt: "Yoga class in studio", label: "Practice" },
  { src: gallery4, alt: "Child's pose", label: "Asana" },
  { src: gallery5, alt: "Community meal", label: "Community" },
  { src: gallery6, alt: "Warrior pose", label: "Training" },
  { src: gallery7, alt: "Group session", label: "Classes" },
  { src: gallery8, alt: "Anatomy learning", label: "Anatomy" },
];

const HomeGallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <span className="text-primary/60 font-medium text-sm tracking-widest uppercase mb-2 block">
            Moments & Memories
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Life at Yogagarhi
          </h2>
        </div>

        {/* Main Gallery Grid */}
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Left Column - Featured Image + Description */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Featured Image */}
            <div className="relative group overflow-hidden rounded-2xl">
              <div className="aspect-[4/3]">
                <img 
                  src={galleryImages[activeIndex].src}
                  alt={galleryImages[activeIndex].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              
              {/* Label */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-4 py-1.5 bg-primary-foreground/90 backdrop-blur-sm rounded-full text-sm font-medium text-foreground mb-3">
                  {galleryImages[activeIndex].label}
                </span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground">
                  {galleryImages[activeIndex].alt}
                </h3>
              </div>

              {/* Counter */}
              <div className="absolute top-6 right-6 bg-foreground/30 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-primary-foreground font-medium">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Description Area - Below Featured Image */}
            <div className="flex items-start gap-6 py-6">
              {/* Decorative Lotus Icon */}
              <div className="flex-shrink-0 hidden sm:block">
                <svg className="w-12 h-12 text-primary/40" viewBox="0 0 64 64" fill="currentColor">
                  <path d="M32 8c-2 8-8 14-16 16 8 2 14 8 16 16 2-8 8-14 16-16-8-2-14-8-16-16z"/>
                  <path d="M32 16c-1.5 6-6 10.5-12 12 6 1.5 10.5 6 12 12 1.5-6 6-10.5 12-12-6-1.5-10.5-6-12-12z" opacity="0.5"/>
                  <ellipse cx="32" cy="52" rx="20" ry="6" opacity="0.2"/>
                </svg>
              </div>
              
              {/* Text Content */}
              <div className="flex-1">
                <p className="font-heading text-xl md:text-2xl text-foreground/80 leading-relaxed mb-4">
                  Where practice meets purpose.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Glimpses of transformation, community, and the yogic journey. Every moment at Yogagarhi is a step toward inner awakening.
                </p>
                
                {/* CTA Link */}
                <Link 
                  to="/gallery" 
                  className="inline-flex items-center gap-2 mt-6 text-primary font-medium group/link hover:gap-3 transition-all"
                >
                  Explore Full Gallery
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Thumbnail Grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-4 lg:grid-cols-2 gap-3 h-full">
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative overflow-hidden rounded-xl aspect-square transition-all duration-300 ${
                    activeIndex === index 
                      ? 'ring-2 ring-primary ring-offset-2 ring-offset-secondary/30' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Active indicator */}
                  {activeIndex === index && (
                    <div className="absolute inset-0 bg-primary/10" />
                  )}
                  {/* Hover overlay with number */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    activeIndex === index ? 'opacity-0' : 'bg-foreground/40 opacity-0 hover:opacity-100'
                  }`}>
                    <span className="text-primary-foreground font-heading text-2xl font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGallerySection;
