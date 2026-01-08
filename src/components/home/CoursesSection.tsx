import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const courses = [
  {
    hours: "100",
    title: "Hour",
    duration: "12 Days",
    level: "Beginner",
    price: "$1149",
    href: "/courses/100-hour",
    featured: false,
  },
  {
    hours: "200",
    title: "Hour",
    duration: "24 Days",
    level: "Beginner to Intermediate",
    price: "$1750",
    href: "/courses/200-hour",
    featured: true,
  },
  {
    hours: "300",
    title: "Hour",
    duration: "28 Days",
    level: "Intermediate to Advanced",
    price: "$2399",
    href: "/courses/300-hour",
    featured: false,
  },
];

export default function CoursesSection() {
  return (
    <section className="py-20 bg-background pattern-lotus">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Yoga Teacher Training Courses in Bali Ubud
          </h2>
          <p className="text-muted-foreground text-lg">
            Begin your transformation journey with our internationally certified yoga teacher training programs
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course) => (
            <div
              key={course.hours}
              className={`relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                course.featured
                  ? "bg-primary text-primary-foreground shadow-elevated scale-105"
                  : "bg-card text-card-foreground shadow-card"
              }`}
            >
              {course.featured && (
                <div className="absolute top-0 left-0 right-0 bg-accent text-accent-foreground text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${course.featured ? "pt-14" : ""}`}>
                <div className="text-center mb-8">
                  <p className="text-sm font-medium opacity-80 mb-2">
                    Yoga Teacher Training Course
                  </p>
                  <h3 className="font-heading text-5xl font-bold mb-1">
                    {course.hours}
                  </h3>
                  <p className="font-heading text-2xl font-semibold">
                    {course.title}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${course.featured ? "bg-primary-foreground" : "bg-accent"}`} />
                    {course.duration}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${course.featured ? "bg-primary-foreground" : "bg-accent"}`} />
                    {course.level}
                  </li>
                </ul>

                <div className="text-center mb-8">
                  <p className="text-sm opacity-80">starting from</p>
                  <p className="font-heading text-4xl font-bold">
                    {course.price} <span className="text-lg font-normal">USD</span>
                  </p>
                </div>

                <Button
                  variant={course.featured ? "hero" : "cta"}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <Link to={course.href}>Know More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
