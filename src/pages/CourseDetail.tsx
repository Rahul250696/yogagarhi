import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, Clock, Users, Award, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-yoga-bali.jpg";

const courseData = {
  "100-hour": {
    title: "100 Hour Yoga Teacher Training",
    duration: "12 Days",
    level: "Beginner",
    price: "$1149",
    description: "Perfect for beginners looking to deepen their personal practice and gain foundational teaching skills.",
    curriculum: [
      "Asana Practice & Alignment",
      "Pranayama & Breathwork",
      "Introduction to Meditation",
      "Yoga Philosophy Basics",
      "Anatomy for Yoga",
      "Teaching Methodology",
    ],
    includes: [
      "12 days accommodation",
      "3 vegetarian meals daily",
      "All course materials",
      "Certificate upon completion",
      "Airport pickup",
      "Excursions & activities",
    ],
  },
  "200-hour": {
    title: "200 Hour Yoga Teacher Training",
    duration: "24 Days",
    level: "Beginner to Intermediate",
    price: "$1750",
    description: "Our most popular comprehensive training for those seeking to become certified yoga teachers.",
    curriculum: [
      "Multi-style Asana Practice",
      "Advanced Pranayama",
      "Meditation & Mindfulness",
      "Yoga Philosophy & Ethics",
      "Functional Anatomy",
      "Teaching Methodology & Practicum",
      "Ayurveda Basics",
      "Business of Yoga",
    ],
    includes: [
      "24 days accommodation",
      "3 vegetarian meals daily",
      "All course materials",
      "Yoga Alliance Certificate",
      "Airport pickup",
      "Excursions & activities",
      "Pre-YTTC preparation",
      "Lifetime re-attendance",
    ],
  },
  "300-hour": {
    title: "300 Hour Yoga Teacher Training",
    duration: "28 Days",
    level: "Intermediate to Advanced",
    price: "$2399",
    description: "Advanced training for certified teachers looking to deepen their expertise and teaching skills.",
    curriculum: [
      "Advanced Asana & Adjustments",
      "Therapeutic Yoga Applications",
      "Advanced Pranayama & Bandhas",
      "Yoga Nidra & Meditation",
      "In-depth Philosophy Studies",
      "Advanced Anatomy & Biomechanics",
      "Sequencing & Class Design",
      "Specialty Workshops",
    ],
    includes: [
      "28 days accommodation",
      "3 vegetarian meals daily",
      "All course materials",
      "Yoga Alliance Certificate",
      "Airport pickup",
      "Excursions & activities",
      "Mentorship program",
      "Teaching opportunities",
    ],
  },
};

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courseData[slug as keyof typeof courseData];

  if (!course) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Course Not Found</h1>
            <Button asChild>
              <Link to="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {course.title}
          </h1>
          <p className="text-xl opacity-90 mb-8">{course.description}</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>{course.level}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>Yoga Alliance Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Price Banner */}
      <section className="bg-accent py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent-foreground">
            <span className="text-sm">Starting from</span>
            <span className="font-heading text-4xl font-bold mx-3">{course.price}</span>
            <span className="text-sm">USD</span>
          </p>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Curriculum */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
                What You'll Learn
              </h2>
              <ul className="space-y-4">
                {course.curriculum.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Included */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
                What's Included
              </h2>
              <ul className="space-y-4">
                {course.includes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Secure your spot in our next training. Limited to 8-10 students per batch.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Enroll Now</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="https://wa.me/+917895350563" target="_blank" rel="noopener noreferrer">
                Ask Questions
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
