import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

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
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header with offset design */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <span className="text-primary/60 font-medium text-sm tracking-widest uppercase mb-2 block">
              Moments & Memories
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Life at Yogagarhi
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md md:text-right">
            Where practice meets purpose. Glimpses of transformation, community, and the yogic journey.
          </p>
        </div>

        {/* Main Gallery - Horizontal Scroll with Featured */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Featured Large Image */}
          <div className="lg:col-span-7 relative group">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <img 
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
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
          </div>

          {/* Thumbnail Grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-4 lg:grid-cols-2 gap-3 h-full">
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative overflow-hidden rounded-xl aspect-square transition-all duration-300 ${
                    activeIndex === index 
                      ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' 
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

        {/* Bottom CTA Strip */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Play className="w-5 h-5 text-primary ml-0.5" />
            </div>
            <div>
              <p className="font-medium text-foreground">Watch Student Stories</p>
              <p className="text-sm text-muted-foreground">Real experiences from our graduates</p>
            </div>
          </div>
          <Button asChild size="lg" className="group">
            <Link to="/gallery" className="flex items-center gap-2">
              Explore Full Gallery
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeGallerySection;
