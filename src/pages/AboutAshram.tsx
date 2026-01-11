import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Heart, Sparkles, TreePine, Sun, Mountain, ArrowRight } from "lucide-react";
import { useEnrollment } from "@/components/EnrollmentDialog";
import heroImage from "@/assets/hero-yoga-bali.jpg";
import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import gallery4 from "@/assets/gallery/gallery-4.jpg";
import gallery5 from "@/assets/gallery/gallery-5.jpg";

const ashramFeatures = [
  { icon: MapPin, title: "Sacred Location", desc: "Nestled in the holy city of Rishikesh, by the sacred Ganges river" },
  { icon: Heart, title: "Authentic Living", desc: "Experience traditional ashram lifestyle with daily rituals and meditation" },
  { icon: Sparkles, title: "Peaceful Environment", desc: "Surrounded by nature, perfect for deep spiritual practice" },
  { icon: TreePine, title: "Natural Setting", desc: "Lush green gardens and peaceful walking paths for contemplation" },
  { icon: Sun, title: "Daily Practices", desc: "Morning prayers, evening aartis, and guided meditation sessions" },
  { icon: Mountain, title: "Himalayan Views", desc: "Breathtaking views of the majestic Himalayan foothills" },
];

const facilities = [
  { title: "Yoga Shalas", desc: "Multiple spacious halls for practice with natural lighting" },
  { title: "Meditation Caves", desc: "Quiet spaces for deep introspection and meditation" },
  { title: "Organic Kitchen", desc: "Sattvic vegetarian meals prepared with love and mindfulness" },
  { title: "Library", desc: "Collection of ancient texts and modern yoga literature" },
  { title: "Accommodation", desc: "Clean, comfortable rooms with private bathrooms" },
  { title: "Gardens", desc: "Beautiful gardens for walking meditation and relaxation" },
];

export default function AboutAshram() {
  const { setShowEnrollDialog } = useEnrollment();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground px-4">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary-foreground/40" />
            <span className="text-sm font-medium tracking-[0.2em] uppercase opacity-80">Our Sacred Space</span>
            <div className="w-8 h-px bg-primary-foreground/40" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About the Ashram
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            A sanctuary for self-discovery in the heart of Rishikesh
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-2xl overflow-hidden">
                  <img src={gallery1} alt="Ashram" className="w-full h-full object-cover" />
                </div>
                <div className="h-32 rounded-2xl overflow-hidden">
                  <img src={gallery2} alt="Practice" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="pt-8">
                <div className="h-64 rounded-2xl overflow-hidden">
                  <img src={gallery3} alt="Environment" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Welcome to <span className="text-primary">YogaGarhi</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Welcome to YogaGarhi, a sanctuary for self-discovery nestled in the spiritual heart of Rishikesh. Here, yoga is not just practiced but lived.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our ashram blends the depth of classical yogic traditions with the comforts needed for focused learning, creating the perfect environment for transformation. Every session is designed to inspire peace, strength, and harmony.
              </p>
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => setShowEnrollDialog(true)}
              >
                Begin Your Journey
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary/40" />
              <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">What Makes Us Special</span>
              <div className="w-8 h-px bg-primary/40" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Our Unique Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ashramFeatures.map((feature, index) => (
              <div 
                key={feature.title}
                className={`p-6 bg-background rounded-2xl border border-border/50 transition-all hover:shadow-lg ${
                  index === 0 ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary/40" />
              <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">Amenities</span>
              <div className="w-8 h-px bg-primary/40" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Our Facilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {facilities.map((facility) => (
              <div 
                key={facility.title}
                className="p-5 bg-muted/30 rounded-xl border border-border/40"
              >
                <h3 className="font-semibold text-foreground mb-2">{facility.title}</h3>
                <p className="text-muted-foreground text-sm">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              A Glimpse of Our Ashram
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img src={gallery1} alt="Ashram View 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img src={gallery2} alt="Ashram View 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img src={gallery4} alt="Ashram View 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img src={gallery5} alt="Ashram View 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link to="/gallery">
                View Full Gallery
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Experience Our Sacred Space
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Visit us in Rishikesh and immerse yourself in the authentic yoga tradition.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">Plan Your Visit</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}