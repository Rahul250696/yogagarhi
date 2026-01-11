import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Award, ArrowRight, Users, MapPin } from "lucide-react";
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
    accent: "from-amber-500/20 to-orange-500/20",
    number: "01",
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
    featured: true,
    accent: "from-primary/20 to-teal-500/20",
    number: "02",
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
    accent: "from-emerald-500/20 to-primary/20",
    number: "03",
  },
];

export default function CoursesSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Large Typography Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-heading text-[20rem] md:text-[30rem] font-bold text-primary/[0.02] leading-none">
          YOGA
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - Editorial Style */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="flex-1">
              {/* Location Tag */}
              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm tracking-widest uppercase">Ubud, Bali • Indonesia</span>
              </div>
              
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.9]">
                Yoga Teacher
                <br />
                <span className="text-primary">Training Courses</span>
              </h2>
            </div>
            
            <div className="md:max-w-sm md:text-right">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Internationally certified programs designed to transform your practice and awaken the teacher within.
              </p>
              <div className="flex items-center gap-4 mt-4 md:justify-end">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  <strong className="text-foreground">500+</strong> Students Trained
                </span>
              </div>
            </div>
          </div>
          
          {/* Decorative Line */}
          <div className="mt-12 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
            <div className="flex gap-2">
              {[1,2,3].map((i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-primary/40" />
              ))}
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-primary/40 to-transparent" />
          </div>
        </div>

        {/* Course Cards - Staggered Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {courses.map((course, index) => (
              <div
                key={course.hours}
                className={`group relative ${
                  index === 1 ? 'lg:-mt-0' : index === 0 ? 'lg:mt-8' : 'lg:mt-16'
                }`}
              >
                {/* Card Container */}
                <div className="relative bg-secondary/40 rounded-2xl overflow-hidden border border-border/30 hover:border-primary/30 transition-all duration-500">
                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="font-heading text-6xl font-bold text-white/20 leading-none">
                      {course.number}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {course.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        <Users className="w-3 h-3" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={course.image}
                      alt={`${course.hours} Hour Yoga Teacher Training`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    
                    {/* Price Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-muted-foreground text-xs uppercase tracking-widest mb-1">
                            {course.tagline}
                          </p>
                          <h3 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-none">
                            {course.hours}
                            <span className="text-lg ml-1 font-medium text-muted-foreground">{course.title}</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 pt-0">
                    {/* Stats Row */}
                    <div className="flex items-center gap-6 py-4 border-b border-border/50 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{course.level}</span>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">From</span>
                        <div className="flex items-baseline gap-2">
                          <span className="font-heading text-3xl font-bold text-foreground">{course.price}</span>
                          <span className="text-sm text-muted-foreground line-through">{course.originalPrice}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block bg-accent/20 text-accent-foreground px-2 py-1 rounded text-xs font-medium">
                          Save ${parseInt(course.originalPrice.replace('$', '')) - parseInt(course.price.replace('$', ''))}
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button
                      variant={course.featured ? "default" : "outline"}
                      size="lg"
                      className={`w-full group/btn ${
                        course.featured 
                          ? "bg-primary hover:bg-primary/90" 
                          : "border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                      }`}
                      asChild
                    >
                      <Link to={course.href} className="flex items-center justify-center gap-2">
                        Explore Course
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>

                  {/* Hover Accent Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${course.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center">
            <p className="text-muted-foreground mb-4">
              Not sure which course is right for you?
            </p>
            <Button variant="ghost" size="lg" className="text-primary hover:text-primary/80 group" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                <span className="relative">
                  Get Personalized Guidance
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
