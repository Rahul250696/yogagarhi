import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Leaf, Mountain, Sun, Quote, Star, Play } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-yoga-bali.jpg";
import founderImage from "@/assets/founder-image.png";
import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";

const ashramFeatures = [
  {
    icon: Mountain,
    title: "Sacred Location",
    description: "Nestled in the spiritual heart of Rishikesh, surrounded by the Himalayas and the holy Ganges.",
  },
  {
    icon: Leaf,
    title: "Natural Environment",
    description: "Lush gardens, fresh mountain air, and serene surroundings for deep practice.",
  },
  {
    icon: Sun,
    title: "Traditional Setting",
    description: "Authentic ashram lifestyle with modern comforts for focused learning.",
  },
  {
    icon: MapPin,
    title: "Easy Access",
    description: "Well-connected to Dehradun airport and Rishikesh railway station.",
  },
];

const teachers = [
  {
    name: "Yogacharya Sachin",
    role: "Founder & Lead Teacher",
    image: founderImage,
    credentials: "E-RYT 500, Master in Yoga",
    experience: "18+ Years",
    specialization: "Hatha Yoga, Yoga Philosophy, Meditation",
    bio: "With over 18 years of dedicated practice and teaching, Yogacharya Sachin has trained 2500+ students globally. His approach blends traditional Himalayan wisdom with practical application.",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Yoga Anatomy Expert",
    image: gallery1,
    credentials: "PhD in Yoga Science",
    experience: "12+ Years",
    specialization: "Anatomy, Physiology, Therapeutic Yoga",
    bio: "Dr. Priya brings scientific understanding to traditional practices, helping students understand the body-mind connection through yoga.",
  },
  {
    name: "Acharya Deepak",
    role: "Philosophy & Meditation",
    image: gallery2,
    credentials: "Vedic Scholar, RYT 500",
    experience: "15+ Years",
    specialization: "Vedanta, Sanskrit, Pranayama",
    bio: "A devoted practitioner and scholar of Vedic traditions, Acharya Deepak guides students through the depths of yogic philosophy.",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    country: "United States",
    course: "200 Hour YTTC",
    rating: 5,
    text: "YogaGarhi transformed my understanding of yoga completely. The teachers are exceptional, and the ashram environment is perfect for deep learning. I left as a different person.",
    avatar: "S",
  },
  {
    name: "Marcus Weber",
    country: "Germany",
    course: "300 Hour YTTC",
    rating: 5,
    text: "The authenticity here is unmatched. Every morning by the Ganges, every meditation session, every philosophy class deepened my practice. Truly life-changing.",
    avatar: "M",
  },
  {
    name: "Yuki Tanaka",
    country: "Japan",
    course: "200 Hour YTTC",
    rating: 5,
    text: "I came seeking knowledge and found a family. The personalized attention, the traditional teachings, and the loving environment exceeded all expectations.",
    avatar: "Y",
  },
  {
    name: "Elena Rodriguez",
    country: "Spain",
    course: "100 Hour YTTC",
    rating: 5,
    text: "Even in the shorter program, the depth of teaching was incredible. The teachers genuinely care about each student's growth and journey.",
    avatar: "E",
  },
];

export default function About() {
  const [activeTeacher, setActiveTeacher] = useState(0);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-72 md:h-80 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground px-4">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About YogaGarhi
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            A sacred space where ancient Himalayan wisdom meets authentic practice
          </p>
        </div>
      </section>

      {/* Section Navigation */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-2 md:gap-8 py-3">
            {["About Ashram", "Teachers", "Testimonials"].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase().replace(" ", "-")}`}
                className="px-4 py-2 text-sm md:text-base font-medium text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-secondary/50"
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* About Ashram Section */}
      <section id="about-ashram" className="py-16 md:py-24 bg-background scroll-mt-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">Our Sacred Space</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              About the Ashram
            </h2>
            <div className="w-16 h-1 bg-primary/30 mx-auto rounded-full" />
          </div>

          {/* Intro Text */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to <span className="text-primary font-semibold">YogaGarhi</span>, a sanctuary for self-discovery nestled in the spiritual heart of Rishikesh. Here, yoga is not just practiced but lived. Our ashram blends the depth of classical yogic traditions with the comforts needed for focused learning, creating the perfect environment for transformation.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 max-w-5xl mx-auto">
            <div className="md:col-span-2 relative h-64 md:h-80 rounded-2xl overflow-hidden">
              <img src={gallery1} alt="Ashram main view" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-heading text-xl font-semibold">Main Practice Hall</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative h-36 md:h-[calc(50%-8px)] rounded-2xl overflow-hidden">
                <img src={gallery2} alt="Meditation space" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="relative h-36 md:h-[calc(50%-8px)] rounded-2xl overflow-hidden">
                <img src={gallery3} alt="Garden area" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {ashramFeatures.map((feature, index) => (
              <div 
                key={feature.title} 
                className="p-6 bg-secondary/30 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-16 md:py-24 bg-secondary/20 scroll-mt-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">Learn from the Best</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              Our Teachers
            </h2>
            <div className="w-16 h-1 bg-primary/30 mx-auto rounded-full" />
          </div>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground">
              Our faculty comprises dedicated practitioners and scholars who bring decades of experience and authentic knowledge to every session.
            </p>
          </div>

          {/* Teachers Display */}
          <div className="max-w-5xl mx-auto">
            {/* Teacher Selector - Mobile */}
            <div className="flex gap-3 overflow-x-auto pb-4 mb-8 lg:hidden scrollbar-hide">
              {teachers.map((teacher, index) => (
                <button
                  key={teacher.name}
                  onClick={() => setActiveTeacher(index)}
                  className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTeacher === index 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-background border border-border hover:border-primary/50'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="font-medium text-sm whitespace-nowrap">{teacher.name.split(" ")[0]}</span>
                </button>
              ))}
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-8">
              {teachers.map((teacher, index) => (
                <div 
                  key={teacher.name}
                  className="bg-background rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={teacher.image} 
                      alt={teacher.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-heading text-xl font-bold">{teacher.name}</h3>
                      <p className="text-sm opacity-90">{teacher.role}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full">{teacher.credentials}</span>
                      <span className="text-xs px-2.5 py-1 bg-secondary text-muted-foreground rounded-full">{teacher.experience}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {teacher.bio}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      Specialization: {teacher.specialization}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Active Teacher */}
            <div className="lg:hidden">
              <div className="bg-background rounded-2xl overflow-hidden border border-border/50">
                <div className="relative h-72">
                  <img 
                    src={teachers[activeTeacher].image} 
                    alt={teachers[activeTeacher].name} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-heading text-2xl font-bold">{teachers[activeTeacher].name}</h3>
                    <p className="text-base opacity-90">{teachers[activeTeacher].role}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full">
                      {teachers[activeTeacher].credentials}
                    </span>
                    <span className="text-xs px-2.5 py-1 bg-secondary text-muted-foreground rounded-full">
                      {teachers[activeTeacher].experience}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {teachers[activeTeacher].bio}
                  </p>
                  <p className="text-xs text-primary font-medium">
                    Specialization: {teachers[activeTeacher].specialization}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-background scroll-mt-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">Student Experiences</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              Testimonials
            </h2>
            <div className="w-16 h-1 bg-primary/30 mx-auto rounded-full" />
          </div>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground">
              Hear from our global community of graduates who have transformed their lives through our programs.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="p-6 bg-secondary/20 rounded-2xl border border-border/50 hover:border-primary/20 transition-all duration-300 group"
              >
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-foreground/80 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-heading text-lg font-bold text-primary">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.country} • {testimonial.course}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Reviews Link */}
          <div className="text-center mt-10">
            <a 
              href="https://www.google.com/maps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-background border-2 border-border rounded-full text-sm font-medium text-foreground hover:border-primary/50 transition-all"
            >
              <Star className="w-4 h-4 text-amber-500" />
              View all reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
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
