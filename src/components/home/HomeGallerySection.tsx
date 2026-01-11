import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Large decorative Mandala SVG component
const MandalaBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-10"
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer circle rings */}
    <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1" className="text-primary" />
    <circle cx="200" cy="200" r="170" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
    <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1" className="text-primary" />
    <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
    <circle cx="200" cy="200" r="110" stroke="currentColor" strokeWidth="1" className="text-primary" />
    <circle cx="200" cy="200" r="90" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
    <circle cx="200" cy="200" r="70" stroke="currentColor" strokeWidth="1" className="text-primary" />
    <circle cx="200" cy="200" r="50" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
    <circle cx="200" cy="200" r="30" stroke="currentColor" strokeWidth="1" className="text-primary" />
    
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
        r="2"
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

const HomeGallerySection = () => {
  return (
    <section className="py-20 bg-secondary/30 overflow-hidden relative">
      {/* Large Mandala Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] lg:w-[1200px] lg:h-[1200px] animate-spin-slow">
          <MandalaBackground />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary/60 font-medium text-sm tracking-widest uppercase mb-2 block">
            Moments & Memories
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Life at Yogagarhi
          </h2>
        </div>

        {/* Central Content */}
        <div className="flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px]">
          {/* Decorative Lotus Icon */}
          <div className="mb-8">
            <svg className="w-20 h-20 md:w-24 md:h-24 text-primary/60" viewBox="0 0 64 64" fill="currentColor">
              <path d="M32 8c-2 8-8 14-16 16 8 2 14 8 16 16 2-8 8-14 16-16-8-2-14-8-16-16z"/>
              <path d="M32 16c-1.5 6-6 10.5-12 12 6 1.5 10.5 6 12 12 1.5-6 6-10.5 12-12-6-1.5-10.5-6-12-12z" opacity="0.5"/>
              <ellipse cx="32" cy="52" rx="20" ry="6" opacity="0.2"/>
            </svg>
          </div>
          
          {/* Text Content */}
          <div className="text-center max-w-2xl">
            <p className="font-heading text-2xl md:text-3xl text-foreground/80 leading-relaxed mb-4">
              Where practice meets purpose.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              Glimpses of transformation, community, and the yogic journey. Every moment at Yogagarhi is a step toward inner awakening.
            </p>
            
            {/* CTA Link */}
            <Link 
              to="/gallery" 
              className="inline-flex items-center gap-2 text-primary font-medium group/link hover:gap-3 transition-all text-lg"
            >
              Explore Full Gallery
              <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGallerySection;
