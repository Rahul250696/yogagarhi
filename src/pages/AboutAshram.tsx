import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Heart, Users, BookOpen, Sparkles, Mountain, ArrowRight, GraduationCap, Compass, Leaf, Star, Flame } from "lucide-react";
import { useEnrollment } from "@/components/EnrollmentDialog";
import heroImage from "@/assets/hero-yoga-bali.jpg";
import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import gallery4 from "@/assets/gallery/gallery-4.jpg";
import gallery5 from "@/assets/gallery/gallery-5.jpg";
import founderImage from "@/assets/founder-image.png";

const whyChooseUs = [
  { icon: Sparkles, title: "The Unique Shivshakti Method", desc: "Our Signature Approach converts yogic theory into practical wisdom." },
  { icon: GraduationCap, title: "Real Teaching Skills", desc: "Micro-teaching, with short sessions and fewer students, builds trust and shapes practitioners into future teachers." },
  { icon: Compass, title: "Post-TTC Mentorship", desc: "Include Yoga business modules, teaching set up, authentic marketing, retreat, workshops, and alumni community to support your career." },
  { icon: Users, title: "Small Learning Groups", desc: "Only 10-15 students per batch for personalized attention. We make sure everyone learns." },
  { icon: BookOpen, title: "Philosophy-driven Approach", desc: "Brings highest philosophy into practice through rituals, meditation, satsang and many more." },
  { icon: Star, title: "Technical Expertise", desc: "We teach you anatomy and biomechanics on the mat. You learn alignment, sequencing, adjustments in detail." },
];

const experiences = [
  { icon: Leaf, title: "Simple, yet profound", desc: "Because truth doesn't need complexity to be felt." },
  { icon: Heart, title: "Scientific, yet spiritual", desc: "Where ancient wisdom meets modern understanding." },
  { icon: Flame, title: "Practical, yet sacred", desc: "Grounded in daily life, yet rooted in timeless depth." },
];

const lifetimeExperiences = [
  "Nature walks",
  "Evening meditation", 
  "Morning silence",
  "Fire rituals",
  "Ayurveda sessions",
  "Reflection sessions",
  "Yoga community",
  "Certification"
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
            <span className="text-sm font-medium tracking-[0.2em] uppercase opacity-80">About YogaGarhi</span>
            <div className="w-8 h-px bg-primary-foreground/40" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            A Fortress of Wisdom
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Where the timeless wisdom of yoga is preserved and passed on with utmost care
          </p>
        </div>
      </section>

      {/* About YogaGarhi - The Name */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-2xl overflow-hidden">
                  <img src={gallery1} alt="YogaGarhi Practice" className="w-full h-full object-cover" />
                </div>
                <div className="h-32 rounded-2xl overflow-hidden">
                  <img src={gallery2} alt="YogaGarhi Environment" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="pt-8">
                <div className="h-64 rounded-2xl overflow-hidden">
                  <img src={gallery3} alt="YogaGarhi Ashram" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <span className="text-primary text-sm font-medium tracking-[0.15em] uppercase">The Meaning</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                What is <span className="text-primary">YogaGarhi</span>?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Yogagarhi is made up of two words: <strong className="text-foreground">yoga</strong> and <strong className="text-foreground">garhi</strong>. Yoga means union, and garhi means fortress. Yes, a fort, that's what we are.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are a fortress that protects the true essence of yoga from outside influences, distortions, and dilution. It is a place where the timeless wisdom contained in the authentic principles of yoga is preserved and passed on with utmost care.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                A fort is situated at a much higher altitude than its surroundings. For us, the true foundation or essence of Yoga lies in the highest philosophy of <strong className="text-foreground">Advaita or non-duality</strong>. Yogagarhi isn't just a yoga school. It's a fortress of wisdom, awareness, and inner freedom.
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

      {/* Why YogaGarhi was Established */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Founder Image */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                    <img src={founderImage} alt="Yogacharya Sachin" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-xl">
                    <p className="font-semibold">Yogacharya Sachin</p>
                    <p className="text-sm opacity-80">Founder</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                  <span className="text-primary text-sm font-medium tracking-[0.15em] uppercase">Our Story</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why YogaGarhi was Established
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Even after teaching yoga for seven years at a reputed yoga teacher training school, there was still a sense of incompleteness within me. I felt something was missing.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We were teaching people anatomy, demonstrating postures, teaching alignment, and finally giving certificates, but something was missing—something that cannot be priced. Yoga had become just a course. But deep inside I knew that the importance of yoga is not limited to just a few physical postures.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  After a long period of observation, I realized that we live in duality—I and the world, day and night, pleasure and pain. The sages have said that this duality is the cause of all human suffering. Therefore, life is a journey from duality (dwaita) to non-duality (Advaita).
                </p>
                <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-muted/30 rounded-r-xl">
                  <p className="text-foreground italic">
                    "A yogi is one who remains unaffected from all external conditions—success and failure, pleasure and pain. Through discipline, self-knowledge, and selfless action one connects with the divine essence within."
                  </p>
                  <cite className="text-muted-foreground text-sm mt-2 block">— Bhagavad Gita, Chapter 6</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Purpose */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary/40" />
              <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">Our Purpose</span>
              <div className="w-8 h-px bg-primary/40" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Purpose of YogaGarhi
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The idea behind Yogagarghi was to create a space where yoga is not just taught, but <strong className="text-foreground">lived as a way of life</strong>. Over the years, we have understood one simple fact—people don't want just information, they desire <strong className="text-foreground">transformation</strong>.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-center text-muted-foreground leading-relaxed mb-12">
              That's why our focus is not on how to "do" yoga, but on <strong className="text-foreground">how to be a yogi</strong>. The path we take is simple but deep and scientific yet spiritual. For us, yoga is not something to be just performed physically. It is a way to live, to breathe, to reflect, to spread, and ultimately—to become.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {experiences.map((exp) => (
                <div 
                  key={exp.title}
                  className="p-6 bg-muted/30 rounded-2xl border border-border/50 text-center hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <exp.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{exp.title}</h3>
                  <p className="text-muted-foreground text-sm">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose YogaGarhi */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary/40" />
              <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">Why Choose Us</span>
              <div className="w-8 h-px bg-primary/40" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose YogaGarhi for Yoga Teacher Training
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              YogaGarhi offers everything you need to become an outstanding yoga teacher. The foundation of our school is rooted in strong spiritual values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChooseUs.map((feature, index) => (
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

      {/* Lifetime Experiences */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary/40" />
              <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">Beyond Training</span>
              <div className="w-8 h-px bg-primary/40" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              A Lifetime Experience
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto mb-12">
            {lifetimeExperiences.map((exp) => (
              <span 
                key={exp}
                className="px-6 py-3 bg-primary/10 text-primary rounded-full font-medium hover:bg-primary/20 transition-colors"
              >
                {exp}
              </span>
            ))}
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img src={gallery1} alt="Experience 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img src={gallery2} alt="Experience 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img src={gallery4} alt="Experience 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img src={gallery5} alt="Experience 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
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
            Join the YogaGarhi Family
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Get an opportunity to become a member of a large yoga family that cultivates learning and supports growth.
          </p>
          <Button variant="hero" size="xl" onClick={() => setShowEnrollDialog(true)}>
            Start Your Transformation
          </Button>
        </div>
      </section>
    </Layout>
  );
}