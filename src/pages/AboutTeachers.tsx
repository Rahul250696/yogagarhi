import { useRef, useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { Award, Clock, Heart, Sparkles, Users, BookOpen, Mountain, Flame, Star } from "lucide-react";
import { useEnrollment } from "@/components/EnrollmentDialog";
import ReadyToBeginSection from "@/components/home/ReadyToBeginSection";
import heroImage from "@/assets/hero-yoga-bali.jpg";
import founderImage from "@/assets/founder-image.png";
import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import gallery4 from "@/assets/gallery/gallery-4.jpg";
import gallery5 from "@/assets/gallery/gallery-5.jpg";
import gallery6 from "@/assets/gallery/gallery-6.jpg";

const founderAchievements = [
  { icon: Users, label: "2500+ Students Trained" },
  { icon: Award, label: "E-RYT 500 & Master in Yoga" },
  { icon: Clock, label: "18+ Years Practice" },
  { icon: Heart, label: "Yoga Therapy to Indian Army" },
];

const teachingPillars = [
  { 
    icon: Mountain, 
    title: "Himalayan Lineage", 
    desc: "Rooted in authentic Himalayan yogic traditions where yoga is understood as an integrated path." 
  },
  { 
    icon: BookOpen, 
    title: "Living Philosophy", 
    desc: "Philosophy taught as a tool for living, helping students observe suffering and dissolve it through awareness." 
  },
  { 
    icon: Flame, 
    title: "Beyond Asana", 
    desc: "Karma, Jnana, Bhakti, and Raja Yoga experienced through daily life, reflection, and practice." 
  },
  { 
    icon: Users, 
    title: "Personal Attention", 
    desc: "Only 8-10 students per batch ensures individual attention, personal correction, and emotional support." 
  },
];

const supportingTeachers = [
  {
    name: "Guest Yoga Masters",
    role: "Visiting Faculty",
    image: gallery1,
    desc: "Experienced teachers from various traditions join as guest faculty to share specialized knowledge in anatomy, Ayurveda, and advanced practices.",
    specialties: ["Anatomy", "Ayurveda", "Adjustments"],
  },
  {
    name: "Philosophy Scholars",
    role: "Vedic Studies",
    image: gallery2,
    desc: "Scholars well-versed in Vedantic texts and yogic scriptures guide students through the profound depths of yogic philosophy.",
    specialties: ["Bhagavad Gita", "Yoga Sutras", "Upanishads"],
  },
  {
    name: "Pranayama Guides",
    role: "Breath Work",
    image: gallery3,
    desc: "Dedicated practitioners who have mastered the subtle art of breath, guiding students into deeper states of awareness.",
    specialties: ["Pranayama", "Kriyas", "Meditation"],
  },
  {
    name: "Meditation Masters",
    role: "Inner Sciences",
    image: gallery4,
    desc: "Teachers who guide students through various meditation techniques, from concentration practices to advanced states of awareness.",
    specialties: ["Dhyana", "Yoga Nidra", "Mindfulness"],
  },
  {
    name: "Mantra & Kirtan Guides",
    role: "Sacred Sound",
    image: gallery5,
    desc: "Masters of sacred sound who lead students through the transformative power of mantra chanting and devotional practices.",
    specialties: ["Mantra", "Kirtan", "Sanskrit"],
  },
  {
    name: "Ayurveda Specialists",
    role: "Holistic Wellness",
    image: gallery6,
    desc: "Practitioners of the ancient science of life who integrate Ayurvedic wisdom with yoga for complete mind-body harmony.",
    specialties: ["Diet", "Lifestyle", "Herbal Medicine"],
  },
];

// Lotus SVG decoration
const LotusDecor = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M50 55 C50 40, 30 30, 20 40 C10 50, 30 55, 50 55" />
    <path d="M50 55 C50 40, 70 30, 80 40 C90 50, 70 55, 50 55" />
    <path d="M50 55 C50 35, 35 20, 30 30 C25 40, 40 50, 50 55" />
    <path d="M50 55 C50 35, 65 20, 70 30 C75 40, 60 50, 50 55" />
    <path d="M50 55 C50 30, 50 15, 50 25 C50 35, 50 45, 50 55" />
  </svg>
);

export default function AboutTeachers() {
  const { setShowEnrollDialog } = useEnrollment();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
            <span className="text-sm font-medium tracking-[0.2em] uppercase opacity-80">Your Guides</span>
            <div className="w-8 h-px bg-primary-foreground/40" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Learn from Living Wisdom
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Teachers who don't just teach yoga, but live it every day
          </p>
        </div>
      </section>

      {/* Teaching Philosophy Banner */}
      <section className="py-6 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground italic max-w-3xl mx-auto">
            "At Yogagarhi, teaching is personalized, precise, and practical — 
            <span className="text-foreground font-medium"> you are a person on a journey, not a number.</span>"
          </p>
        </div>
      </section>

      {/* Founder Section - Full Width Feature */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Image Column */}
              <div className="relative">
                {/* Decorative Ring */}
                <div className="absolute inset-0 -m-4 border-2 border-primary/20 rounded-3xl rotate-3" />
                <div className="absolute inset-0 -m-4 border-2 border-accent/20 rounded-3xl -rotate-3" />
                
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={founderImage}
                    alt="Yogacharya Sachin - Founder of YogaGarhi"
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-4 shadow-elevated border border-border/50 animate-float-ultra-smooth">
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
              <div>
                <span className="inline-flex items-center gap-2 text-primary/80 text-sm font-medium tracking-widest uppercase mb-4">
                  <Heart className="w-4 h-4" fill="currentColor" />
                  Meet Your Guide
                </span>
                
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
                  Yogacharya Sachin
                </h2>
                <p className="text-primary font-medium text-lg mb-6">Founder & Lead Teacher, YogaGarhi</p>
                
                <div className="space-y-5 text-muted-foreground leading-relaxed mb-8">
                  <p>
                    A fearless child, a curious teen, and a heart that kept seeking. This journey 
                    gradually shaped a revolutionary man, <em className="text-foreground font-medium">not driven by rebellion, 
                    but by awareness</em>. What began as exploration unfolded into a life devoted to 
                    practice, discipline, teaching, and service.
                  </p>
                  
                  <p className="text-foreground/90 border-l-2 border-primary/50 pl-4 italic">
                    "Yoga was not found in a single moment; it revealed itself slowly, through experience, 
                    inquiry, inner silence, and lived understanding."
                  </p>
                  
                  <p>
                    Through years of teaching in teacher training schools, a deeper realization emerged. 
                    While yoga was being taught with technical precision, <strong className="text-foreground">its living 
                    essence was often missing</strong>. From this understanding, <strong className="text-foreground">YogaGarhi</strong> was 
                    founded — a fortress where <em className="text-foreground font-medium">yoga is lived, not merely taught</em>.
                  </p>
                </div>
                
                {/* Achievement Badges */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {founderAchievements.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full"
                    >
                      <item.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Pillars */}
      <section ref={sectionRef} className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium tracking-widest text-primary/70 uppercase mb-3">
              Our Teaching Approach
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Teach
            </h2>
            <LotusDecor className="w-16 h-10 mx-auto text-primary/40" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {teachingPillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500 text-center ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <pillar.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Teachers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium tracking-widest text-primary/70 uppercase mb-3">
              Expert Faculty
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Supporting Teachers & Guides
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A team of dedicated practitioners, scholars, and healers who bring depth and diversity to your learning journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {supportingTeachers.map((teacher, index) => (
              <div 
                key={teacher.name}
                className="group rounded-3xl overflow-hidden bg-card border border-border/40 transition-all hover:shadow-xl hover:border-primary/20"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <p className="text-white/70 text-xs uppercase tracking-wider mb-1">{teacher.role}</p>
                    <h3 className="font-heading text-xl font-bold">{teacher.name}</h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {teacher.desc}
                  </p>
                  
                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2">
                    {teacher.specialties.map((specialty) => (
                      <span 
                        key={specialty}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Our Teaching Unique */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Teaching That Transforms
              </h2>
              <p className="text-muted-foreground">
                What sets YogaGarhi teachers apart
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Beyond Technical Precision</h3>
                    <p className="text-muted-foreground text-sm">
                      We don't just teach poses. We share the essence, the breath, the awareness — the living spirit of yoga.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Emotional & Mental Support</h3>
                    <p className="text-muted-foreground text-sm">
                      Each student is held, seen, and supported through their unique transformational journey.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Work With Different Bodies</h3>
                    <p className="text-muted-foreground text-sm">
                      Learn to read, understand, and adapt teachings for different body types and conditions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Continuous Learning</h3>
                    <p className="text-muted-foreground text-sm">
                      Our community supports ongoing growth with lifetime access to resources and guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Begin Section */}
      <ReadyToBeginSection />
    </Layout>
  );
}
