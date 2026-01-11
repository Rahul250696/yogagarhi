import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Import gallery images
import yogaRiver from "@/assets/gallery/yoga-river.jpg";
import anatomyClass from "@/assets/gallery/anatomy-class.jpg";
import outdoorSession from "@/assets/gallery/outdoor-session.jpg";
import acroYoga from "@/assets/gallery/acro-yoga.jpg";
import groupStudy from "@/assets/gallery/group-study.jpg";
import adjustment from "@/assets/gallery/adjustment.jpg";
import backbend from "@/assets/gallery/backbend.jpg";
import seatedTwist from "@/assets/gallery/seated-twist.jpg";
import communityMeal from "@/assets/gallery/community-meal.jpg";
import teachingPractice from "@/assets/gallery/teaching-practice.jpg";

const galleryImages = [
  { src: yogaRiver, alt: "Yoga by the river" },
  { src: anatomyClass, alt: "Anatomy class" },
  { src: outdoorSession, alt: "Outdoor session" },
  { src: acroYoga, alt: "Acro yoga practice" },
  { src: groupStudy, alt: "Group study" },
  { src: adjustment, alt: "Hands-on adjustment" },
  { src: backbend, alt: "Backbend practice" },
  { src: seatedTwist, alt: "Seated twist" },
  { src: communityMeal, alt: "Community meal" },
  { src: teachingPractice, alt: "Teaching practice" },
];

// Large decorative Mandala SVG component
const MandalaBackground = () => (
  <svg
    className="w-full h-full opacity-20"
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer circle rings */}
    <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <circle cx="200" cy="200" r="170" stroke="currentColor" strokeWidth="1" className="text-primary" />
    <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="1" className="text-primary" />
    <circle cx="200" cy="200" r="110" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <circle cx="200" cy="200" r="90" stroke="currentColor" strokeWidth="1" className="text-primary" />
    <circle cx="200" cy="200" r="70" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    <circle cx="200" cy="200" r="50" stroke="currentColor" strokeWidth="1" className="text-primary" />
    <circle cx="200" cy="200" r="30" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
    
    {/* Lotus petals - outer layer */}
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
    
    {/* Lotus petals - middle layer */}
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
    
    {/* Lotus petals - inner layer */}
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
    
    {/* Diamond shapes */}
    {[...Array(8)].map((_, i) => (
      <path
        key={`diamond-${i}`}
        d="M200 60 L210 80 L200 100 L190 80 Z"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
        className="text-primary"
        transform={`rotate(${i * 45} 200 200)`}
      />
    ))}
    
    {/* Inner star pattern */}
    <path
      d="M200 150 L210 180 L240 180 L215 200 L225 230 L200 210 L175 230 L185 200 L160 180 L190 180 Z"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      className="text-primary"
    />
    
    {/* Center lotus */}
    <circle cx="200" cy="200" r="15" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary" />
    <circle cx="200" cy="200" r="8" stroke="currentColor" strokeWidth="1" className="text-primary" fill="currentColor" fillOpacity="0.3" />
    
    {/* Radiating lines */}
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
    
    {/* Decorative dots on outer ring */}
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
    
    {/* Sacred geometry triangles */}
    <path
      d="M200 80 L260 180 L140 180 Z"
      stroke="currentColor"
      strokeWidth="0.5"
      fill="none"
      className="text-primary"
    />
    <path
      d="M200 280 L260 180 L140 180 Z"
      stroke="currentColor"
      strokeWidth="0.5"
      fill="none"
      className="text-primary"
    />
  </svg>
);

export default function Gallery() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden bg-secondary/30">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] animate-spin-slow">
            <MandalaBackground />
          </div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Our Gallery
          </h1>
          <p className="text-xl text-muted-foreground">
            Glimpses of life at YogaGarhi
          </p>
        </div>
      </section>

      {/* Mandala Gallery Section */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden min-h-screen">
        {/* Central Mandala with Rotating Images */}
        <div className="container mx-auto px-4">
          <div className="relative flex items-center justify-center">
            {/* The rotating mandala container */}
            <div className="relative w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px]">
              {/* Background mandala - rotating slowly */}
              <div className="absolute inset-0 animate-spin-slow">
                <MandalaBackground />
              </div>

              {/* Images arranged in a circle - rotating in opposite direction */}
              <div className="absolute inset-0" style={{ animation: 'spin 60s linear infinite reverse' }}>
                {galleryImages.map((image, index) => {
                  const angle = (index * 36) - 90; // 36 degrees apart (360/10), start from top
                  const radius = 42; // percentage from center
                  const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                  const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
                  
                  return (
                    <div
                      key={index}
                      className="absolute w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        animation: 'spin 60s linear infinite', // Counter-rotate to keep images upright
                      }}
                    >
                      <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-lg hover:border-primary hover:scale-110 transition-all duration-300 group">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-full">
                          <span className="text-primary-foreground text-xs md:text-sm font-medium text-center px-2">
                            {image.alt}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Center decorative element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                  <svg className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 text-primary/60" viewBox="0 0 64 64" fill="currentColor">
                    <path d="M32 8c-2 8-8 14-16 16 8 2 14 8 16 16 2-8 8-14 16-16-8-2-14-8-16-16z"/>
                    <path d="M32 16c-1.5 6-6 10.5-12 12 6 1.5 10.5 6 12 12 1.5-6 6-10.5 12-12-6-1.5-10.5-6-12-12z" opacity="0.5"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Description below */}
          <div className="text-center mt-12 md:mt-16">
            <p className="font-heading text-xl md:text-2xl text-foreground/80 leading-relaxed mb-4">
              Where practice meets purpose.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
              Every moment at Yogagarhi is a step toward inner awakening. From sunrise practice to community meals, we cherish each experience on this transformative journey.
            </p>

            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary font-medium group hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
