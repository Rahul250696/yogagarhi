import { Users, BookOpen, Sparkles, GraduationCap } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "The Unique Shivshakti Method",
    description: "Our Signature Approach converts Himalayan yogic theory into practical & applied wisdom.",
  },
  {
    icon: BookOpen,
    title: "Traditional Multi-Style Training",
    description: "We teach traditional, multi-style yoga — Vinyasa, Hatha, Ashtanga, and Iyengar — learning each system as a complete method.",
  },
  {
    icon: GraduationCap,
    title: "Pre-TTC Mentorship",
    description: "Begin before you begin — building a strong foundation so body and mind are ready for teacher training.",
  },
  {
    icon: Users,
    title: "Small Learning Groups",
    description: "Only 8-10 students per batch for personalized attention. We make sure everyone learns.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose YogaGarhi
          </h2>
          <p className="text-muted-foreground text-lg">
            YogaGarhi offers everything you need to become an outstanding yoga teacher
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
