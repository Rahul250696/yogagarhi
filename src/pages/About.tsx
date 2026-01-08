import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Users, BookOpen, Award } from "lucide-react";
import heroImage from "@/assets/hero-yoga-bali.jpg";

const values = [
  {
    icon: Heart,
    title: "Authentic Practice",
    description: "Rooted in the timeless traditions of yoga, we teach yoga as a way of living, not as a skill to perform.",
  },
  {
    icon: Users,
    title: "Small Groups",
    description: "Only 8-10 students per batch ensuring personalized attention and deep connection.",
  },
  {
    icon: BookOpen,
    title: "Himalayan Wisdom",
    description: "Our teachings are inspired by Himalayan yogic traditions where yoga is understood as an integrated path.",
  },
  {
    icon: Award,
    title: "Lifetime Support",
    description: "Graduates are welcome to return for future trainings and assist as teachers.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About YogaGarhi
          </h1>
          <p className="text-xl opacity-90">
            Ancient Himalayan wisdom. Authentic yoga, lived & taught.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-foreground leading-relaxed mb-8">
                Welcome to <strong className="text-primary">YogaGarhi</strong>, a sacred space where ancient wisdom meets modern living. Rooted in the timeless traditions of yoga and wellness, YogaGarhi is more than just a place to practice – it is a sanctuary for self-discovery, healing, and inner transformation.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                At YogaGarhi, we believe that yoga is not only about postures but a way of life. Our approach blends the depth of classical yogic practices with contemporary insights to create a holistic journey of the body, mind, and soul. With a focus on mindfulness, breathwork, meditation, and authentic teachings, we guide you to reconnect with your true self and find balance in today's fast-paced world.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Every session at YogaGarhi is designed to inspire peace, strength, and harmony. Whether you are a beginner taking your first step into yoga or an experienced practitioner deepening your practice, our community welcomes you with warmth, compassion, and support.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                YogaGarhi stands for growth, awareness, and the joy of living consciously. Here, every breath is a step towards freedom, every practice a journey towards wholeness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join our yoga teacher training program and transform not just your practice, but your entire life.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">Start Your Journey</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
