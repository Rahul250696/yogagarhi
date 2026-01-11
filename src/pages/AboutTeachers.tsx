import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Clock, GraduationCap, Heart, ArrowRight } from "lucide-react";
import { useEnrollment } from "@/components/EnrollmentDialog";
import heroImage from "@/assets/hero-yoga-bali.jpg";
import founderImage from "@/assets/founder-image.png";
import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";

const teachers = [
  {
    name: "Yogacharya Sachin",
    role: "Founder & Lead Teacher",
    image: founderImage,
    credentials: "E-RYT 500",
    experience: "18+ Years",
    specialization: "Hatha & Vinyasa Yoga",
    bio: "Yogacharya Sachin brings over 18 years of dedicated practice and teaching experience. His approach combines traditional Hatha yoga with modern teaching methodologies, making ancient wisdom accessible to contemporary practitioners.",
    featured: true,
  },
  {
    name: "Dr. Priya Sharma",
    role: "Anatomy & Physiology Expert",
    image: gallery1,
    credentials: "PhD Yoga Science",
    experience: "12+ Years",
    specialization: "Yoga Therapy",
    bio: "Dr. Priya holds a PhD in Yoga Science and specializes in yoga therapy. Her deep understanding of human anatomy helps students practice safely and effectively.",
    featured: false,
  },
  {
    name: "Acharya Deepak",
    role: "Philosophy Teacher",
    image: gallery2,
    credentials: "Vedic Scholar",
    experience: "15+ Years",
    specialization: "Yoga Philosophy",
    bio: "Acharya Deepak is a renowned Vedic scholar who brings ancient texts to life through engaging storytelling and practical applications for modern life.",
    featured: false,
  },
  {
    name: "Swami Ananda",
    role: "Meditation Guide",
    image: gallery3,
    credentials: "RYT 500",
    experience: "20+ Years",
    specialization: "Pranayama & Meditation",
    bio: "Swami Ananda has spent two decades mastering meditation techniques from various traditions. His calm presence creates the perfect environment for inner exploration.",
    featured: false,
  },
];

const teachingApproach = [
  {
    icon: Heart,
    title: "Personalized Attention",
    desc: "Small class sizes ensure each student receives individual guidance",
  },
  {
    icon: GraduationCap,
    title: "Traditional Knowledge",
    desc: "Authentic teachings rooted in ancient yogic scriptures",
  },
  {
    icon: Award,
    title: "Certified Expertise",
    desc: "All teachers hold internationally recognized certifications",
  },
];

export default function AboutTeachers() {
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
            <span className="text-sm font-medium tracking-[0.2em] uppercase opacity-80">Learn from Masters</span>
            <div className="w-8 h-px bg-primary-foreground/40" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Teachers
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Dedicated practitioners with decades of combined experience
          </p>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {teachingApproach.map((item) => (
              <div key={item.title} className="text-center p-6">
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary/40" />
              <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">Meet the Team</span>
              <div className="w-8 h-px bg-primary/40" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Our Expert Teachers
            </h2>
          </div>

          {/* Featured Teacher */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-muted/30 rounded-3xl p-6 md:p-8 ring-2 ring-primary/20">
              <div className="relative aspect-square md:aspect-[3/4] rounded-2xl overflow-hidden">
                <img 
                  src={teachers[0].image} 
                  alt={teachers[0].name} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Founder
                </div>
              </div>
              <div>
                <p className="text-primary text-sm uppercase tracking-wider mb-2">{teachers[0].role}</p>
                <h3 className="font-heading text-3xl font-bold text-foreground mb-4">{teachers[0].name}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{teachers[0].bio}</p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="w-4 h-4 text-primary" />
                    {teachers[0].credentials}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    {teachers[0].experience}
                  </div>
                </div>
                
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  {teachers[0].specialization}
                </div>
              </div>
            </div>
          </div>

          {/* Other Teachers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teachers.slice(1).map((teacher) => (
              <div 
                key={teacher.name}
                className="group rounded-3xl overflow-hidden border border-border/40 transition-all hover:shadow-xl"
              >
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <p className="text-white/70 text-xs uppercase tracking-wider mb-1">{teacher.role}</p>
                    <h3 className="font-heading text-2xl font-bold">{teacher.name}</h3>
                  </div>
                </div>
                <div className="bg-muted/30 p-6">
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{teacher.bio}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      {teacher.credentials}
                    </div>
                    <div className="w-px h-4 bg-border" />
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      {teacher.experience}
                    </div>
                  </div>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                    {teacher.specialization}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Learn from the Best
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join our teacher training program and learn from experienced masters who are dedicated to your growth.
          </p>
          <Button 
            variant="hero" 
            size="xl" 
            onClick={() => setShowEnrollDialog(true)}
          >
            Start Your Journey
          </Button>
        </div>
      </section>
    </Layout>
  );
}
