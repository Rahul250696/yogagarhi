import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import gallery4 from "@/assets/gallery/gallery-4.jpg";
import gallery5 from "@/assets/gallery/gallery-5.jpg";
import gallery6 from "@/assets/gallery/gallery-6.jpg";
import gallery7 from "@/assets/gallery/gallery-7.jpg";
import gallery8 from "@/assets/gallery/gallery-8.jpg";

const galleryImages = [
  { src: gallery1, alt: "Waterfall excursion with yoga students" },
  { src: gallery2, alt: "Meditation at waterfall" },
  { src: gallery3, alt: "Yoga class in studio" },
  { src: gallery4, alt: "Child's pose in sunlit studio" },
  { src: gallery5, alt: "Community meal together" },
  { src: gallery6, alt: "Warrior pose practice" },
  { src: gallery7, alt: "Group yoga session" },
  { src: gallery8, alt: "Anatomy learning session" },
];

const HomeGallerySection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Life at Yogagarhi
          </h2>
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
            <Camera className="w-6 h-6 text-primary" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Glimpses from our yoga teacher training programs — practice, community, and transformation.
          </p>
        </div>

        {/* Masonry-style Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
          {/* Large image - spans 2 rows */}
          <div className="row-span-2 group relative overflow-hidden rounded-xl">
            <img 
              src={galleryImages[0].src} 
              alt={galleryImages[0].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
          </div>

          {/* Regular images */}
          {galleryImages.slice(1, 4).map((img, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl aspect-square">
              <img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </div>
          ))}

          {/* Large image - spans 2 columns on desktop */}
          <div className="col-span-2 group relative overflow-hidden rounded-xl aspect-video">
            <img 
              src={galleryImages[4].src} 
              alt={galleryImages[4].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
          </div>

          {/* Remaining images */}
          {galleryImages.slice(5).map((img, index) => (
            <div key={index + 5} className="group relative overflow-hidden rounded-xl aspect-square">
              <img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/gallery">
              View Full Gallery
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeGallerySection;
