import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Award, Sparkles, ArrowRight } from "lucide-react";
import course100hr from "@/assets/course-100hr.jpg";
import course200hr from "@/assets/course-200hr.jpg";
import course300hr from "@/assets/course-300hr.jpg";

const courses = [
  {
    hours: "100",
    title: "Hour YTTC",
    tagline: "Begin Your Journey",
    duration: "12 Days",
    level: "Beginner",
    price: "$1149",
    originalPrice: "$1399",
    href: "/courses/100-hour",
    image: course100hr,
    highlights: ["Foundation Building", "Core Asanas", "Basic Pranayama"],
  },
  {
    hours: "200",
    title: "Hour YTTC",
    tagline: "Transform Yourself",
    duration: "24 Days",
    level: "Beginner to Intermediate",
    price: "$1750",
    originalPrice: "$2187",
    href: "/courses/200-hour",
    image: course200hr,
    highlights: ["Yoga Alliance Certified", "Teaching Methodology", "Anatomy & Philosophy"],
    featured: true,
  },
  {
    hours: "300",
    title: "Hour YTTC",
    tagline: "Master Your Practice",
    duration: "28 Days",
    level: "Intermediate to Advanced",
    price: "$2399",
    originalPrice: "$2999",
    href: "/courses/300-hour",
    image: course300hr,
    highlights: ["Advanced Techniques", "Specialized Training", "Leadership Skills"],
  },
];

export default function CoursesSection() {
  return (
    <section className="py-24 bg-sand relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 text-primary/80 text-sm font-medium tracking-widest uppercase mb-4">
            <Sparkles className="w-4 h-4" />
            Transform Your Life
            <Sparkles className="w-4 h-4" />
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Yoga Teacher Training
            <span className="block text-primary">Courses in Bali Ubud</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Embark on a life-changing journey with our internationally certified programs
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={course.hours}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-3 ${
                course.featured 
                  ? "md:-mt-6 md:mb-6 shadow-2xl ring-2 ring-primary/20" 
                  : "shadow-elevated"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Featured Badge */}
              {course.featured && (
                <div className="absolute top-4 left-4 z-20 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg animate-pulse">
                  Most Popular
                </div>
              )}

              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={course.image}
                  alt={`${course.hours} Hour Yoga Teacher Training`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Hours Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-white/80 text-xs uppercase tracking-widest mb-1">
                        {course.tagline}
                      </p>
                      <h3 className="font-heading text-5xl font-bold text-white leading-none">
                        {course.hours}
                        <span className="text-xl ml-1">{course.title}</span>
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-white/60 text-xs line-through">{course.originalPrice}</p>
                      <p className="font-heading text-2xl font-bold text-accent">{course.price}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="bg-card p-6">
                {/* Quick Stats */}
                <div className="flex items-center gap-4 mb-5 text-sm">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Award className="w-4 h-4 text-primary" />
                    <span>{course.level}</span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2.5 mb-6">
                  {course.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant={course.featured ? "default" : "outline"}
                  size="lg"
                  className={`w-full group/btn ${
                    course.featured 
                      ? "bg-primary hover:bg-primary/90" 
                      : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                  asChild
                >
                  <Link to={course.href} className="flex items-center justify-center gap-2">
                    Explore Course
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-8 bg-gradient-to-l from-accent/30 to-transparent rotate-45 translate-x-8 -translate-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Not sure which course is right for you?
          </p>
          <Button variant="ghost" className="text-primary hover:text-primary/80" asChild>
            <Link to="/contact" className="flex items-center gap-2">
              Get Personalized Guidance
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
