import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, MessageSquare, ArrowRight } from "lucide-react";

const videoTestimonials = [
  { id: "OGmWr_aC4WA", name: "Sarah M.", country: "USA" },
  { id: "2pLe6NHa5WU", name: "Priya K.", country: "India" },
  { id: "30jjvcqHEwA", name: "Emma L.", country: "UK" },
  { id: "J2LT9xn4RBE", name: "Maria S.", country: "Spain" },
  { id: "OGmWr_aC4WA", name: "Anna T.", country: "Germany" },
  { id: "2pLe6NHa5WU", name: "Lisa R.", country: "Australia" },
];

const StudentStoriesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Real Transformations
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Student Stories
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hear directly from our graduates about their life-changing journey
          </p>
        </div>
        
        {/* Featured Video */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-elevated group">
            <div className="aspect-video bg-muted">
              <iframe
                src="https://www.youtube.com/embed/J2LT9xn4RBE?rel=0"
                title="Featured Student Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
        
        {/* Horizontal Scrolling Thumbnails */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide snap-x snap-mandatory">
            {videoTestimonials.map((video, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[200px] snap-center group"
              >
                <div className="relative rounded-xl overflow-hidden bg-muted aspect-[9/16] shadow-card group-hover:shadow-elevated transition-shadow duration-300">
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={`${video.name} testimonial`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-primary-foreground/95 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-primary ml-1" />
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-heading font-semibold text-primary-foreground text-sm">
                      {video.name}
                    </p>
                    <p className="text-primary-foreground/70 text-xs">
                      {video.country}
                    </p>
                  </div>
                  
                  {/* Quote icon */}
                  <div className="absolute top-3 right-3">
                    <MessageSquare className="w-4 h-4 text-primary-foreground/50" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group" asChild>
            <Link to="/gallery">
              View All Stories
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudentStoriesSection;
