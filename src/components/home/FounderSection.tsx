import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Heart, Users, Sparkles } from "lucide-react";
import founderImage from "@/assets/founder-image.png";

const achievements = [
  { icon: Users, label: "500+ Students Trained" },
  { icon: Award, label: "E-RYT 200 Certified" },
  { icon: Heart, label: "10+ Years Practice" },
];

export default function FounderSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Image Column */}
            <div className="relative order-1 lg:order-1">
              {/* Decorative Ring */}
              <div className="absolute inset-0 -m-4 border-2 border-primary/20 rounded-3xl rotate-3" />
              <div className="absolute inset-0 -m-4 border-2 border-accent/20 rounded-3xl -rotate-3" />
              
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={founderImage}
                  alt="Founder of YogaGarhi"
                  className="w-full h-auto object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-4 shadow-elevated border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Founder & Lead Teacher</p>
                    <p className="font-heading text-lg font-semibold text-foreground">YogaGarhi</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Column */}
            <div className="order-2 lg:order-2">
              <span className="inline-flex items-center gap-2 text-primary/80 text-sm font-medium tracking-widest uppercase mb-4">
                <Heart className="w-4 h-4" fill="currentColor" />
                Meet Your Guide
              </span>
              
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                A Journey from the
                <span className="block text-primary">Himalayas to Your Heart</span>
              </h2>
              
              <div className="space-y-5 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Namaste! I am the founder of <strong className="text-foreground">YogaGarhi</strong>, 
                  and my journey into yoga began in the sacred foothills of the Himalayas, where ancient 
                  wisdom flows as naturally as the Ganges. Raised in a lineage of spiritual practitioners, 
                  I was immersed in authentic yogic traditions from childhood.
                </p>
                
                <p>
                  After years of intensive sadhana under revered masters and earning international 
                  certifications, I felt a calling to share this transformative knowledge with seekers 
                  worldwide. YogaGarhi was born from a vision to create a space where traditional 
                  teachings meet modern understanding – a sanctuary where every student can discover 
                  their true potential.
                </p>
                
                <p>
                  My teaching philosophy is simple: <em className="text-foreground font-medium">
                  "Yoga is not about touching your toes; it is about what you learn on the way down."</em> 
                  I believe in nurturing not just the body, but awakening the spirit within each practitioner.
                </p>
              </div>
              
              {/* Achievement Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                {achievements.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full"
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <Button size="lg" className="group" asChild>
                <Link to="/about" className="flex items-center gap-2">
                  Learn More About My Journey
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
