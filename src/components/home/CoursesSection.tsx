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
  },
  {
    hours: "200",
    title: "Hour",
    duration: "24 Days",
    level: "Beginner to Intermediate",
    price: "$1750",
    href: "/courses/200-hour",
  },
  {
    hours: "300",
    title: "Hour",
    duration: "28 Days",
    level: "Intermediate to Advanced",
    price: "$2399",
    href: "/courses/300-hour",
  },
];

export default function CoursesSection() {
  return (
    <section className="py-20 bg-sand">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Yoga Teacher Training Courses in Bali Ubud
          </h2>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course) => (
            <div
              key={course.hours}
              className="bg-primary rounded-2xl overflow-hidden shadow-elevated transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="p-8 text-center text-primary-foreground">
                {/* Course Title */}
                <p className="text-sm font-medium opacity-90 mb-2 tracking-wide uppercase">
                  Yoga Teacher Training Course
                </p>
                
                {/* Hours Display */}
                <h3 className="font-heading text-6xl font-bold mb-1">
                  {course.hours}
                </h3>
                <p className="font-heading text-2xl font-semibold mb-6">
                  {course.title}
                </p>

                {/* Course Details */}
                <ul className="space-y-3 mb-8 text-left max-w-[200px] mx-auto">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="opacity-90">{course.duration}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="opacity-90">{course.level}</span>
                  </li>
                </ul>

                {/* Price */}
                <div className="mb-8">
                  <p className="text-xs opacity-80 uppercase tracking-wider mb-1">
                    starting from
                  </p>
                  <p className="font-heading text-4xl font-bold">
                    {course.price} <span className="text-lg font-normal">USD</span>
                  </p>
                </div>

                {/* CTA Button */}
                <Button
                  variant="hero"
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
