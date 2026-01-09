import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Award, Users, Leaf, MapPin, BookOpen, Heart, 
  Check, X, ChevronDown, Play, Download, Phone,
  Calendar, Clock, Star, Instagram, MessageCircle, Sparkles,
  GraduationCap, Repeat, Mountain, Handshake
} from "lucide-react";
import heroImage from "@/assets/hero-yoga-bali.jpg";
import activityAyurveda from "@/assets/activity-ayurveda.jpg";
import activitySoundHealing from "@/assets/activity-sound-healing.jpg";
import activityWaterfall from "@/assets/activity-waterfall.jpg";
import WhyFeatureItem from "@/components/home/WhyFeatureItem";

// Custom scroll-aware header component
function StickyCompactHeader({ visible }: { visible: boolean }) {
  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md shadow-sm transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-heading text-xl font-bold text-primary">
          YOGAGARHI
        </Link>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <Link to="/contact">Quick Enquiry</Link>
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground" asChild>
            <a href="https://wa.me/1234567890">WhatsApp</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

// Icon Highlights Section
const iconHighlights = [
  { icon: Award, title: "Yoga Alliance Certified", subtitle: "RYS 200" },
  { icon: Leaf, title: "Multi-Style Yoga", subtitle: "Authentic Teaching" },
  { icon: Heart, title: "Prakriti-Based", subtitle: "Personalized Learning" },
  { icon: Users, title: "Small Batch", subtitle: "8-10 Students" },
  { icon: BookOpen, title: "Traditional + Practical", subtitle: "Complete System" },
  { icon: MapPin, title: "Bali Immersion", subtitle: "24-Day Retreat" },
];

// What Sets Apart Data
const whatSetsApart = [
  {
    title: "Teaching Depth Beyond Certification",
    description: "We don't teach yoga to create instructors. We teach yoga to awaken teachers. There is a difference. Instructors repeat. Teachers respond. Our curriculum focuses on inner development alongside technical skill.",
  },
  {
    title: "Lineage & Sincerity",
    description: "Our approach is rooted in authentic Himalayan yogic traditions. Each technique taught has been practiced for generations. We honor this lineage not as nostalgia, but as living wisdom.",
  },
  {
    title: "The Shiv-Shakti Sadhana",
    description: "Beyond asana and pranayama, students are introduced to the subtle practices of Shiv-Shakti Sadhana — awakening the inner masculine and feminine energies that govern transformation.",
  },
  {
    title: "Beyond the Certification Mindset",
    description: "Many come for a certificate. We prepare you for a calling. The certificate is a formality. The transformation is the reality. Our graduates don't just teach yoga — they live it.",
  },
];

// Daily Schedule
const dailySchedule = [
  { time: "6:00 AM", activity: "Wake Up & Morning Cleansing" },
  { time: "6:30 AM", activity: "Pranayama & Meditation" },
  { time: "7:30 AM", activity: "Asana Practice (Hatha/Ashtanga)" },
  { time: "9:00 AM", activity: "Breakfast" },
  { time: "10:00 AM", activity: "Yoga Philosophy / Anatomy" },
  { time: "12:00 PM", activity: "Lunch & Rest" },
  { time: "3:00 PM", activity: "Teaching Methodology" },
  { time: "4:30 PM", activity: "Alignment & Adjustments" },
  { time: "6:00 PM", activity: "Evening Practice" },
  { time: "7:30 PM", activity: "Dinner" },
  { time: "9:00 PM", activity: "Self-Study / Lights Off" },
];

// Course Curriculum
const curriculum = [
  {
    category: "Asana & Alignment",
    items: [
      "Ashtanga Yoga Primary Series",
      "Hatha Yoga & Vinyasa Flow",
      "Iyengar Alignment Principles",
      "Standing, Seated, Backbends, Inversions",
      "Arm Balancing Workshop",
    ],
  },
  {
    category: "Pranayama & Breath",
    items: [
      "Complete Breathing Techniques",
      "Shatkarma Cleansing Practices",
      "Bandhas & Energy Locks",
      "Breath Integration with Asana",
      "Advanced Kumbhaka Practice",
    ],
  },
  {
    category: "Philosophy & Self-Study",
    items: [
      "Yoga Sutras of Patanjali",
      "Eight Limbs of Ashtanga Yoga",
      "Chakras & Nadis System",
      "Introduction to Vedas",
      "Lives of Great Yogis",
    ],
  },
  {
    category: "Teaching & Methodology",
    items: [
      "Class Sequencing Principles",
      "Verbal & Hands-on Adjustments",
      "Working with Different Bodies",
      "Voice & Communication",
      "Practicum & Evaluations",
    ],
  },
  {
    category: "Meditation & Inner Practices",
    items: [
      "Multiple Meditation Techniques",
      "Mantra Chanting & Sacred Sound",
      "Mudras & Gestures",
      "Trataka & Concentration",
      "Silence Practices",
    ],
  },
];

// Inclusions/Exclusions
const inclusions = [
  "Clean and comfortable room",
  "Attached bathroom with hot water",
  "Air conditioning / fan",
  "Free Wi-Fi access",
  "Three healthy vegetarian meals daily",
  "Herbal teas and drinking water",
  "Study material (manuals, notebooks, pens)",
  "Yoga mats and props",
  "Outdoor excursions / weekend trips",
  "Airport pickup (nearest airport)",
  "24/7 campus support team",
  "Certification upon completion",
  "Balinese massage",
  "Balinese dance show",
  "Rice field trek",
  "Pre-TTC preparation",
  "Arm balance workshop",
  "Ayurveda workshop",
  "Course repetition included",
  "Yogagarhi 35+ creative sequencing book",
];

const exclusions = [
  "Airfare and travel expenses",
  "Visa and travel insurance",
  "Airport drop",
  "Laundry service",
  "Personal shopping & extra activities",
];

// What You Will Receive
const whatYouWillReceive = [
  { 
    title: "Multi Style Yoga Training", 
    description: "Learn yoga in its authentic, time-tested way. Our teachers preserve the wisdom of yogic tradition.",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=500&fit=crop"
  },
  { 
    title: "Yoga Alliance Certified", 
    description: "Receive globally recognized certification. Begin teaching yoga with confidence worldwide.",
    icon: Award,
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=500&fit=crop"
  },
  { 
    title: "Peaceful Bali Surroundings", 
    description: "Experience yoga in the lap of nature. Calm beaches and greenery deepen your practice.",
    icon: Mountain,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=500&fit=crop"
  },
  { 
    title: "Outdoor Excursions", 
    description: "Explore temples, beaches, and nature walks. Balance learning with adventure and culture.",
    icon: MapPin,
    image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=400&h=500&fit=crop"
  },
  { 
    title: "Small Batch Sizes", 
    description: "Get personal attention and guidance. Every student's growth matters to us.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=500&fit=crop"
  },
  { 
    title: "Supportive Community", 
    description: "Be part of a warm and positive family. Grow together in a caring environment.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1529693662653-9d480530a697?w=400&h=500&fit=crop"
  },
  { 
    title: "Balinese Massage", 
    description: "Traditional Indonesian therapy to relieve muscle tension. Promotes deep relaxation and holistic healing.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&h=500&fit=crop"
  },
  { 
    title: "Balinese Dance Performance", 
    description: "Ancient, dynamic and highly expressive dance form that reflects Bali's rich cultural heritage.",
    icon: Star,
    image: "https://images.unsplash.com/photo-1518611507436-f9221403cca2?w=400&h=500&fit=crop"
  },
  { 
    title: "Ayurvedic Meals", 
    description: "Enjoy sattvic and healthy meals supporting your practice.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=500&fit=crop"
  },
  { 
    title: "Meditation Practice", 
    description: "Deepen inner peace and mindfulness with guided sessions.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=500&fit=crop"
  },
  { 
    title: "Experienced Instructors", 
    description: "Learn from certified teachers with years of expertise.",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=500&fit=crop"
  },
  { 
    title: "Yoga Lifestyle", 
    description: "Adopt the yogic way of living for body, mind, and spirit.",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=400&h=500&fit=crop"
  },
];

// Workshops
const workshops = [
  { title: "Ayurveda Fundamentals", description: "Understand your unique constitution" },
  { title: "Arm Balance Mastery", description: "Build strength and confidence" },
  { title: "Handstand Workshop", description: "Overcome fear, find your center" },
  { title: "Yin Yoga Deep Stretch", description: "Access deeper tissue layers" },
  { title: "Sound Healing Session", description: "Vibration therapy for inner calm" },
  { title: "Bhakti Yoga & Kirtan", description: "Devotional practice through song" },
];

// Excursions
const excursions = [
  { title: "Balinese Dance Performance", description: "Ancient cultural expression" },
  { title: "Rice Field Trek", description: "Walk through Ubud's terraces" },
  { title: "Waterfall Visit", description: "Sacred cleansing experience" },
];

// Accommodation Types
const accommodations = [
  { type: "Private Room", originalPrice: "$3125", price: "$2499", perPerson: true },
  { type: "Double Sharing", originalPrice: "$2370", price: "$1899", perPerson: true },
  { type: "Triple Sharing", originalPrice: "$2187", price: "$1750", perPerson: true },
];

// Upcoming Dates
const upcomingDates = [
  { date: "1 Dec - 24 Dec 2025", price: "$1750", availability: "5 seats left" },
  { date: "5 Jan - 29 Jan 2026", price: "$1750", availability: "Available" },
  { date: "1 Feb - 24 Feb 2026", price: "$1750", availability: "Available" },
  { date: "1 Mar - 24 Mar 2026", price: "$1750", availability: "Available" },
  { date: "1 Apr - 24 Apr 2026", price: "$1750", availability: "Available" },
  { date: "1 May - 24 May 2026", price: "$1750", availability: "5 seats left" },
];

// Teachers
const teachers = [
  { name: "Master Yogi", specialty: "Ashtanga & Philosophy", experience: "15+ Years" },
  { name: "Priya Devi", specialty: "Hatha & Meditation", experience: "12+ Years" },
  { name: "Arjun Sharma", specialty: "Anatomy & Alignment", experience: "10+ Years" },
];

// Yogic Energy Quiz Questions
const quizQuestions = [
  {
    question: "How does your body typically feel in the morning?",
    options: ["Light and energetic", "Steady and grounded", "Heavy and slow to start"],
  },
  {
    question: "What describes your mental pattern during stress?",
    options: ["Racing thoughts, anxiety", "Irritability, intensity", "Withdrawal, lethargy"],
  },
  {
    question: "How would you describe your natural energy rhythm?",
    options: ["Variable, creative bursts", "Focused, consistent drive", "Calm, steady, enduring"],
  },
  {
    question: "What is your relationship with heat?",
    options: ["Prefer warmth, dislike cold", "Run warm, seek cooling", "Neutral, adaptable"],
  },
  {
    question: "How do you typically process emotions?",
    options: ["Quick to feel, quick to release", "Intense, lasting impressions", "Deep, slow processing"],
  },
  {
    question: "What describes your lifestyle tendency?",
    options: ["Movement, change, variety", "Achievement, structure, goals", "Routine, stability, comfort"],
  },
];

export default function Course200Hour() {
  const [showCompactHeader, setShowCompactHeader] = useState(false);
  const [showQuizDialog, setShowQuizDialog] = useState(false);
  const [showManualDialog, setShowManualDialog] = useState(false);
  const [showSyllabusDialog, setShowSyllabusDialog] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [showWelcomeExpanded, setShowWelcomeExpanded] = useState(false);
  const [activeInclusionTab, setActiveInclusionTab] = useState<'inclusions' | 'exclusions'>('inclusions');

  useEffect(() => {
    const handleScroll = () => {
      setShowCompactHeader(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleQuizAnswer = (answer: string) => {
    const newAnswers = [...quizAnswers, answer];
    setQuizAnswers(newAnswers);
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setQuizStep(quizQuestions.length); // Show email input
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setEmail("");
  };

  return (
    <>
      <StickyCompactHeader visible={showCompactHeader} />
      
      <Layout>
        {/* ===== HERO SECTION ===== */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="200 Hour Yoga Teacher Training in Bali" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/40" />
          </div>
          
          <div className="relative container mx-auto px-4 py-20 text-center text-primary-foreground">
            <p className="font-body uppercase tracking-[0.3em] text-sm mb-4 opacity-90">
              Yogagarhi
            </p>
            <p className="font-heading italic text-lg mb-8 opacity-80">
              Ancient Wisdom. Modern Teaching.
            </p>
            
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              200 Hour Yoga Teacher Training
            </h1>
            <p className="font-heading text-2xl md:text-3xl mb-12 opacity-90">
              Bali, Indonesia
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                className="bg-primary-foreground/20 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/30 font-semibold"
                asChild
              >
                <Link to="/contact">Quick Enquiry</Link>
              </Button>
              <Button 
                size="xl"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                asChild
              >
                <a href="#book-call">Book an Appointment</a>
              </Button>
            </div>
          </div>
        </section>

        {/* ===== COURSE DETAILS BAR ===== */}
        <section className="py-8 bg-secondary/50 border-b border-border/50">
          <div className="container mx-auto px-4">
            {/* Main Course Info Row - Animated Border Container */}
            <div className="relative rounded-xl p-[3px] overflow-hidden">
              {/* Animated rotating gradient border */}
              <div className="absolute inset-0 rounded-xl animate-spin-slow bg-[conic-gradient(from_0deg,hsl(var(--primary)),hsl(var(--primary)/0.3),hsl(var(--primary)),hsl(var(--primary)/0.3),hsl(var(--primary)))]" />
              
              {/* Inner content container */}
              <div className="relative bg-background rounded-xl shadow-card p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 items-center">
                {/* Course Duration */}
                <div className="text-center lg:text-left border-r border-border/30 pr-4 last:border-r-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Course</p>
                  <p className="font-heading font-semibold text-foreground">200 Hour YTTC</p>
                </div>
                
                {/* Course Length */}
                <div className="text-center lg:text-left border-r border-border/30 pr-4 last:border-r-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Duration</p>
                  <p className="font-heading font-semibold text-foreground">24 Days</p>
                </div>
                
                {/* Yoga Style */}
                <div className="text-center lg:text-left border-r border-border/30 pr-4 last:border-r-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Style</p>
                  <p className="font-heading font-semibold text-foreground">Multi-Style Yoga</p>
                </div>
                
                {/* Level */}
                <div className="text-center lg:text-left border-r border-border/30 pr-4 last:border-r-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Level</p>
                  <p className="font-heading font-semibold text-foreground">Beginner - Intermediate</p>
                </div>
                
                {/* Certification */}
                <div className="text-center lg:text-left border-r border-border/30 pr-4 last:border-r-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Certification</p>
                  <p className="font-heading font-semibold text-foreground">Yoga Alliance RYT 200</p>
                </div>
                
                {/* Price */}
                <div className="text-center lg:text-left border-r border-border/30 pr-4 last:border-r-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Starting From</p>
                  <div className="flex items-baseline gap-2 justify-center lg:justify-start">
                    <span className="text-sm text-muted-foreground line-through">$2187</span>
                    <span className="font-heading text-xl font-bold text-primary">$1750</span>
                  </div>
                </div>
                
                {/* Book Now Button */}
                <div className="col-span-2 md:col-span-1 flex justify-center lg:justify-end">
                  <Button 
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full md:w-auto"
                    asChild
                  >
                    <a href="#dates">Book Now</a>
                  </Button>
                </div>
              </div>
              
              {/* What's Included / Bonus Row */}
              <div className="mt-6 pt-6 border-t border-border/30">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Play className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">1 Month Live Access</p>
                      <p className="text-xs text-muted-foreground">Online Classes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Pre-YTTC Support</p>
                      <p className="text-xs text-muted-foreground">Preparation & Guidance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Post-YTTC Mentorship</p>
                      <p className="text-xs text-muted-foreground">Ongoing Support</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Complimentary Goodie Bag</p>
                      <p className="text-xs text-muted-foreground">Yoga Essentials</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== ICON HIGHLIGHTS ===== */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {iconHighlights.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WELCOME SECTION ===== */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - YouTube Video */}
              <div className="relative w-full">
                <div className="aspect-video rounded-lg overflow-hidden shadow-card bg-muted">
                  <iframe
                    src="https://www.youtube.com/embed/U1r2mQRmWXM?rel=0"
                    title="YogaGarhi 200 Hour Yoga Teacher Training"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
              
              {/* Right Column - Welcome Text with Read More */}
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Welcome to Yogagarhi
                </h2>
                <p className="font-heading text-xl text-primary mb-6 italic">
                  200 Hour Yoga Teacher Training Course
                </p>
                
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  {/* First 2 paragraphs - always visible */}
                  <p>
                    Become a Yoga Alliance Registered Yoga Teacher (RYT 200) through Yogagarhi's 
                    200-Hour Yoga Teacher Training in Bali Ubud and join a life-changing journey 
                    of yoga and self-realization.
                  </p>
                  <p>
                    Our professional course is made for both beginners and intermediate practitioners. 
                    This course covers all essential aspects of yoga, including asanas, pranayama, 
                    anatomy, and teaching methodology.
                  </p>
                  
                  {/* Expandable content */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      showWelcomeExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="pt-6">
                      Become a part of this transformative once in a lifetime experience in the 
                      mesmerizing beauty of Bali. This holistic program prepares you to become a 
                      professional yoga teacher having expertise, skills, and confidence.
                    </p>
                  </div>
                  
                  {/* Read More / Read Less Button */}
                  <button
                    onClick={() => setShowWelcomeExpanded(!showWelcomeExpanded)}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors mt-2 group"
                  >
                    {showWelcomeExpanded ? 'Read Less' : 'Read More'}
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-300 ${
                        showWelcomeExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== VIDEO TESTIMONIALS ===== */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Student Testimonials
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Hear from our graduates about their transformative journey
            </p>
            
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-muted shadow-card">
                <iframe
                  src="https://www.youtube.com/embed/OGmWr_aC4WA?rel=0"
                  title="Student testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
            
            <div className="text-center">
              <Dialog open={showManualDialog} onOpenChange={setShowManualDialog}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-primary text-primary-foreground">
                    Get Free 200-Hour Study Manual
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="font-heading text-2xl text-center">
                      Download Your Free Manual
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 pt-4">
                    <p className="text-center text-muted-foreground">
                      Enter your email to receive the complete 200-hour YTTC study manual.
                    </p>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button className="w-full" size="lg">
                      Send Me The Manual
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        {/* ===== WHAT SETS YOGAGARHI APART ===== */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Section Header */}
            <div className="text-center mb-16">
              <p className="font-body uppercase tracking-[0.2em] text-sm text-primary mb-4">
                What Makes Us Different
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                What Sets YogaGarhi Apart
              </h2>
            </div>

            {/* Zigzag Feature Layout */}
            <div className="space-y-16">
              {/* Feature 1: Pre-YTTC */}
              <WhyFeatureItem
                icon={<GraduationCap className="w-4 h-4 text-primary" />}
                title="Begin Before You Begin – Pre YTTC"
                preview="The World's First Pre-YTTC school. The Optional Complimentary Online Pre-YTTC Preparation. If you feel like you don't know you are ready for course or not, this pre-YTTC is for you to be prepared & feel confident."
                expanded={`At Yogagarhi, we do something different. We offer a Pre-YTTC Online Optional Complimentary Preparation Program. This gives you time to:

• Prepare your body
• Get friendly with curriculum & subjects
• Understand basic concepts
• Feel confident & clear

So when training begins, you don't panic. You arrive grounded. You don't jump into transformation — you are gently prepared for it.`}
                imageUrl={heroImage}
                imageAlt="Pre-YTTC Preparation"
                isReversed={false}
              />

              {/* Feature 2: Transform You */}
              <WhyFeatureItem
                icon={<Heart className="w-4 h-4 text-primary" />}
                title="Not Just Transform Yoga – Transform You"
                preview="Very few address the human being behind the practice. At Yogagarhi, yoga is taught as a way of living, not as a skill to perform."
                expanded={`The focus is not only on how you practice, but on how you think, relate, act, and respond to life itself. Here, philosophy is not memorized. It is applied, reflected upon, and lived — so transformation becomes visible in daily life, not just on the mat. We work with:

• How you think
• How you react
• How you handle stress
• How you relate to others

This is where real change happens.`}
                imageUrl={activityAyurveda}
                imageAlt="Yoga Transformation"
                isReversed={true}
              />

              {/* Feature 3: Lifetime Re-Attendance */}
              <WhyFeatureItem
                icon={<Repeat className="w-4 h-4 text-primary" />}
                title="Lifetime Re-Attendance & Assistant Teaching"
                preview="At Yogagarhi, graduation is not the end of learning. Graduates are welcome to return to future trainings for deeper practice and to assist as teachers."
                expanded={`Over years of teaching, our founder observed a clear pattern: students often wanted to repeat their 200-hour training to revise, deepen, and truly integrate what they had learned.

Instead of ignoring this need, Yogagarhi embraced it. Once you complete your YTTC with us, you are welcome to repeat the same course again in the future — without paying the course fee again (food & stay exclusive).

• Observe teaching methodology in real time
• Support classes as an Assistant Teacher
• Build confidence and refine skills

Because yoga is not a one-time achievement. It is a lifelong refinement.`}
                imageUrl={activitySoundHealing}
                imageAlt="Lifetime Learning"
                isReversed={false}
              />

              {/* Feature 4: Small Groups */}
              <WhyFeatureItem
                icon={<Users className="w-4 h-4 text-primary" />}
                title="Small Group Deep Work. Personal Transformation."
                preview="At Yogagarhi, we intentionally keep small groups (8–10 students) allowing personalized guidance, deeper alignment, and understanding different bodies."
                expanded={`This allows:

• Individual attention
• Personal correction
• Emotional and mental support
• Teaching adapted to your unique body and mind
• Learn deeper alignment for your own practice
• Understand how to read and work with different bodies

At Yogagarhi, teaching is personalized, precise, and practical — you are a person on a journey, not a number.`}
                imageUrl={activityWaterfall}
                imageAlt="Small Group Training"
                isReversed={true}
              />

              {/* Feature 5: 35+ Sequences */}
              <WhyFeatureItem
                icon={<BookOpen className="w-4 h-4 text-primary" />}
                title="35+ Functional, Ready-to-Use Sequences"
                preview="Yogagarhi provides over 35 functional, purpose-based yoga sequences for personal practice, teaching clarity, therapeutic understanding, and intelligent class structuring."
                expanded={`At Yogagarhi, students receive over 35 carefully designed yoga sequences:

• Personal Practice – structured flows to deepen your daily practice
• Teaching Clarity – sequences to confidently structure your own classes
• Therapeutic Understanding – flows designed to address common body imbalances
• Intelligent Class Structuring – practical tools to create effective classes

Key Benefits:
• Ready-to-use sequences for immediate application
• Flexible and adaptable to different student levels
• Designed to refine over time as your understanding deepens

These sequences are not random flows — they are practical, purposeful, and built to give maximum benefit.`}
                imageUrl={heroImage}
                imageAlt="Yoga Sequences"
                isReversed={false}
              />

              {/* Feature 6: Himalayan Lineage */}
              <WhyFeatureItem
                icon={<Mountain className="w-4 h-4 text-primary" />}
                title="Rooted in Himalayan Lineage"
                preview="Modern yoga often focuses only on physical and meditative practices. At Yogagarhi, our teachings are inspired by Himalayan yogic traditions, where yoga is understood as an integrated path."
                expanded={`We teach the four classical paths:

• Karma Yoga – conscious action
• Jnana Yoga – self-inquiry and wisdom
• Bhakti Yoga – devotion and humility
• Raja Yoga – discipline of body and mind

These paths are not taught as theory. They are experienced through daily life, reflection, and practice.`}
                imageUrl={activityAyurveda}
                imageAlt="Himalayan Tradition"
                isReversed={true}
              />

              {/* Feature 7: Living Philosophy */}
              <WhyFeatureItem
                icon={<Sparkles className="w-4 h-4 text-primary" />}
                title="The Heart of Yogagarhi: Living Philosophy"
                preview="At Yogagarhi we teach philosophy as a tool for living. Our approach focuses on applied yogic philosophy — helping students observe suffering, understand its roots, and dissolve it through awareness."
                expanded={`This is one of Yogagarhi's core strengths: students don't just transform how they practice, they transform how they live.

Philosophy is not memorized for an exam — it is applied, reflected upon, and integrated into daily decisions, relationships, and self-understanding.`}
                imageUrl={activitySoundHealing}
                imageAlt="Living Philosophy"
                isReversed={false}
              />

              {/* Feature 8: Continuing Community */}
              <WhyFeatureItem
                icon={<Handshake className="w-4 h-4 text-primary" />}
                title="A Community That Continues After Certification"
                preview="Yoga does not end with a certificate. Yogagarhi is building a living yoga community where students remain connected after completing their training."
                expanded={`Growth is supported through:

• Connection with fellow graduates
• Ongoing guidance from teachers
• Sharing experiences and asking questions
• Support as your journey continues

This is not a transactional relationship — it is a lifelong connection.`}
                imageUrl={activityWaterfall}
                imageAlt="Yoga Community"
                isReversed={true}
              />
            </div>
          </div>
        </section>

        {/* ===== WHY ONE STYLE DOESN'T FIT ALL ===== */}
        <section className="relative overflow-hidden">
          {/* Background Image - Sticky only on mobile within this section */}
          <div className="absolute inset-0 -z-10">
            <div className="md:relative md:h-full sticky top-0 h-screen">
              <img 
                src={heroImage}
                alt="Yoga practice in nature"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>
          </div>

          {/* Content - Scrollable on mobile */}
          <div className="relative z-10 min-h-screen md:min-h-0 flex items-center py-20">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-white mb-6">
                Why One Style Does Not Fit All
              </h2>
              <p className="font-heading text-xl text-center text-primary-foreground/90 mb-8 italic">
                Why We Teach Authentic Multi-Style & Prakriti-Based Yoga
              </p>
              
              <div className="space-y-6 text-white/90 leading-relaxed text-center max-w-3xl mx-auto mb-12">
                <p>
                  Every human being is unique. Your body, your energy, your mind — they are unlike 
                  anyone else's. So why should your yoga practice be the same as everyone else's?
                </p>
                <p>
                  At Yogagarhi, we teach multi-style yoga not to confuse, but to liberate. 
                  By understanding Hatha, Vinyasa, Ashtanga, and Iyengar as complete systems, 
                  you learn to adapt yoga to the individual — not force the individual into yoga.
                </p>
                <p>
                  Our Prakriti-based approach considers your unique constitution. We help you 
                  discover which practices serve your nature, so your teaching can be truly 
                  responsive to each student who comes to you.
                </p>
              </div>
              
              <div className="text-center">
                <Dialog open={showQuizDialog} onOpenChange={(open) => {
                  setShowQuizDialog(open);
                  if (!open) resetQuiz();
                }}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-amber-500 text-white hover:bg-amber-600 font-semibold shadow-lg">
                      Reveal Your Yogic Energy
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                      <DialogTitle className="font-heading text-2xl text-center">
                        {quizStep < quizQuestions.length 
                          ? "Discover Your Yogic Energy" 
                          : "Your Insight Awaits"}
                      </DialogTitle>
                    </DialogHeader>
                    
                    <div className="pt-4">
                      {quizStep < quizQuestions.length ? (
                        <div className="space-y-6">
                          <div className="text-center mb-2">
                            <span className="text-sm text-muted-foreground">
                              Question {quizStep + 1} of {quizQuestions.length}
                            </span>
                          </div>
                          <p className="text-center font-medium text-lg">
                            {quizQuestions[quizStep].question}
                          </p>
                          <div className="space-y-3">
                            {quizQuestions[quizStep].options.map((option, i) => (
                              <button
                                key={i}
                                onClick={() => handleQuizAnswer(option)}
                                className="w-full p-4 text-left rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4 text-center">
                          <p className="text-muted-foreground">
                            Thank you for sharing. Enter your email and we will send you 
                            your personalized yogic energy insight shortly.
                          </p>
                          <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <Button className="w-full" size="lg" onClick={() => setShowQuizDialog(false)}>
                            Receive My Insight
                          </Button>
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </section>
        {/* ===== DAILY SCHEDULE ===== */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-primary mb-4">
              Daily Schedule
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              A typical day at YogaGarhi is designed to balance intensive learning with rest and integration.
            </p>
            
            <div className="max-w-3xl mx-auto">
              <div className="relative space-y-4">
                {/* Vertical connecting line */}
                <div className="absolute left-[calc(6rem+1.5rem+0.5rem-1px)] md:left-[calc(7rem+1.5rem+0.5rem-1px)] top-2 bottom-2 w-0.5 bg-primary/30" />
                
                {dailySchedule.map((item, index) => (
                  <div 
                    key={index}
                    className="relative flex items-center gap-6"
                  >
                    {/* Time */}
                    <div className="w-24 md:w-28 flex-shrink-0 text-right">
                      <span className="font-heading text-lg md:text-xl font-semibold text-primary">{item.time}</span>
                    </div>
                    
                    {/* Timeline dot with pulse animation */}
                    <div className="flex-shrink-0 z-10">
                      <div 
                        className="w-4 h-4 rounded-full bg-primary animate-pulse-dot"
                        style={{ animationDelay: `${index * 0.5}s` }}
                      />
                    </div>
                    
                    {/* Activity card */}
                    <div className="flex-1 bg-card border border-border rounded-lg px-6 py-4 shadow-sm">
                      <span className="text-foreground font-medium">{item.activity}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="mt-12 text-center text-sm text-muted-foreground">
                Sunday is a full day off for rest, self-study, or optional excursions.
              </p>
            </div>
          </div>
        </section>

        {/* ===== WHAT YOU'LL RECEIVE ===== */}
        <section className="py-20 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-primary mb-4">
              What You Will Receive in This Training
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              A comprehensive curriculum covering all aspects of yoga
            </p>
            
            {/* Horizontal Scrollable Flip Cards */}
            <div className="relative">
              {/* Gradient fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              
              <div className="overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
                <div className="flex gap-6" style={{ width: 'max-content' }}>
                  {whatYouWillReceive.map((item, index) => (
                    <div 
                      key={index}
                      className="flip-card w-64 h-72 flex-shrink-0 cursor-pointer"
                      onClick={(e) => {
                        const card = e.currentTarget;
                        card.classList.toggle('flipped');
                      }}
                    >
                      <div className="flip-card-inner relative w-full h-full transition-transform duration-500 transform-style-preserve-3d">
                        {/* Front - Image */}
                        <div className="flip-card-front absolute w-full h-full backface-hidden rounded-xl overflow-hidden border border-border shadow-card">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-5">
                            <h3 className="font-heading text-lg font-semibold text-white text-center">
                              {item.title}
                            </h3>
                            <p className="text-xs text-white/70 mt-1 text-center md:hidden">Tap to see more</p>
                            <p className="text-xs text-white/70 mt-1 text-center hidden md:block">Hover to see more</p>
                          </div>
                        </div>
                        
                        {/* Back - Content */}
                        <div className="flip-card-back absolute w-full h-full backface-hidden rounded-xl overflow-hidden border border-border shadow-card rotate-y-180 bg-card">
                          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                              <item.icon className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                              {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== INCLUSIONS / EXCLUSIONS ===== */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            {/* Tab Buttons */}
            <div className="flex justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveInclusionTab('inclusions')}
                className={`px-8 py-3 rounded-lg font-heading text-lg font-semibold transition-all duration-300 ${
                  activeInclusionTab === 'inclusions'
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card text-foreground border border-border hover:bg-secondary'
                }`}
              >
                What's Included
              </button>
              <button
                onClick={() => setActiveInclusionTab('exclusions')}
                className={`px-8 py-3 rounded-lg font-heading text-lg font-semibold transition-all duration-300 ${
                  activeInclusionTab === 'exclusions'
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card text-foreground border border-border hover:bg-secondary'
                }`}
              >
                What's Not Included
              </button>
            </div>
            
            {/* Content */}
            <div className="max-w-5xl mx-auto">
              {activeInclusionTab === 'inclusions' ? (
                <div className="animate-fade-in">
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-primary mb-10">
                    What's Included
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {inclusions.map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-4 p-5 bg-card rounded-lg shadow-sm"
                      >
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-5 h-5 text-accent" />
                        </div>
                        <span className="text-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="animate-fade-in">
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-primary mb-10">
                    What's Not Included
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {exclusions.map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-4 p-5 bg-card rounded-lg shadow-sm"
                      >
                        <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                          <X className="w-5 h-5 text-destructive" />
                        </div>
                        <span className="text-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ===== COURSE SYLLABUS ===== */}
        <section className="py-20 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Course Syllabus
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Comprehensive curriculum covering all aspects of yoga teacher training
            </p>
            
            {/* Horizontal Scrollable Cards */}
            <div className="relative">
              <div 
                className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide scroll-smooth snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {[
                  { 
                    title: "Ashtanga Yoga Postures", 
                    content: "Complete Ashtanga yoga primary series sequence. Week-by-week progression through Sun Salutation A & B, Standing sequence, Seated sequence, and Mysore style practice.",
                    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop"
                  },
                  { 
                    title: "Hatha & Vinyasa Flow", 
                    content: "Pawanmuktasana series, Surya Namaskar variations, Standing and seated postures, Backbends, Forward folds, Inversions, and complete sequencing methodology.",
                    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop"
                  },
                  { 
                    title: "Yoga Philosophy", 
                    content: "Introduction to yoga sutras of Patanjali, Eight limbs of Ashtanga Yoga, Nadis, Chakras, Pancha-Vayus, Panchakoshas, Triguna, and inspiring stories of great yogis.",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                  },
                  { 
                    title: "Pranayama & Breathing", 
                    content: "Complete breathing techniques including Ujjayi, Bhastrika, Kapalbhati, Nadi-Sodhana, Bhramari, Surya-Bhedi, Chandra-Bhedi, Sheetali, and Sheetkari.",
                    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=400&fit=crop"
                  },
                  { 
                    title: "Anatomy & Physiology", 
                    content: "Body movement planes, joint protection, anatomy of ankle, knee, spine, shoulder, breathing mechanism, physiology of muscles, and nervous system.",
                    image: "https://images.unsplash.com/photo-1559757175-7cb036e0e69a?w=400&h=400&fit=crop"
                  },
                  { 
                    title: "Teaching Methodology", 
                    content: "Class sequencing, adjustments, working with different levels, voice usage, mental preparation, demonstration principles, and step-by-step class planning.",
                    image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=400&h=400&fit=crop"
                  },
                  { 
                    title: "Meditation & Mantra", 
                    content: "Multiple meditation techniques, mantra chanting, Trataka, Osho Dynamic meditation, Nada Brahma, Antar Mouna, and silence practices.",
                    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=400&h=400&fit=crop"
                  },
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 snap-start first:ml-4 last:mr-4"
                  >
                    {/* Card with circular image attached */}
                    <div className="flex flex-col items-center">
                      {/* Circular Image */}
                      <div className="relative z-10 mb-[-40px]">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-background shadow-lg">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Square Card */}
                      <div className="w-72 bg-card rounded-xl border border-border p-6 pt-12 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-heading text-lg font-semibold text-foreground text-center mb-3">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground text-center leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Scroll indicator */}
              <div className="flex justify-center gap-2 mt-6">
                <span className="text-sm text-muted-foreground">← Scroll to explore →</span>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Dialog open={showSyllabusDialog} onOpenChange={setShowSyllabusDialog}>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="gap-2">
                    <Download className="w-4 h-4" />
                    Download Detailed Syllabus
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="font-heading text-2xl text-center">
                      Download Syllabus
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 pt-4">
                    <p className="text-center text-muted-foreground text-sm">
                      Select your course and enter email to receive the detailed syllabus.
                    </p>
                    <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="100">100 Hour YTTC</option>
                      <option value="200" selected>200 Hour YTTC</option>
                      <option value="300">300 Hour YTTC</option>
                    </select>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button className="w-full" size="lg">
                      Send Syllabus
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        {/* ===== FREE WEBINAR ===== */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Free Orientation Webinar
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our live webinar to learn more about the training, ask questions, 
              and connect with our teachers before making your decision.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground">
              Register for Free Webinar
            </Button>
          </div>
        </section>

        {/* ===== WHY CHOOSE YOGAGARHI (USPs) ===== */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Why Choose Yogagarhi
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { title: "Unique Shiv-Shakti Method", desc: "Our signature approach converts yogic theory into practical wisdom." },
                { title: "Traditional Multi-Style", desc: "Vinyasa, Hatha, Ashtanga, and Iyengar as complete systems." },
                { title: "Pre-TTC Mentorship", desc: "Build a strong foundation before training begins." },
                { title: "Small Learning Groups", desc: "Only 8-10 students for personalized attention." },
                { title: "Philosophy-Driven", desc: "Highest philosophy through rituals, meditation, and satsang." },
                { title: "35+ Sequencing Book", desc: "Practical sequences for immediate teaching application." },
                { title: "Yoga Community", desc: "Join a large yoga family that supports growth." },
                { title: "Course Repetition", desc: "Revisit training whenever it runs, at no extra cost." },
              ].map((item, index) => (
                <div key={index} className="p-6 bg-card rounded-lg border border-border text-center">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== YOGA ALLIANCE CERTIFICATION ===== */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center gap-8 mb-8">
                <img 
                  src="https://www.yogagarhi.com/wp-content/uploads/2025/09/ryt200-1-1.png" 
                  alt="RYT 200" 
                  className="h-24 w-24 object-contain"
                />
                <img 
                  src="https://www.yogagarhi.com/wp-content/uploads/2025/09/rys-200-yoga-alliance.jpg" 
                  alt="RYS 200" 
                  className="h-24 w-24 object-contain"
                />
              </div>
              
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Yoga Alliance Certified School
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                At Yogagarhi, we are proud to be a Yoga Alliance certified school. This means our 
                teacher training courses meet high international standards. When you train with us, 
                you get a certificate recognized all over the world.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SPECIAL WORKSHOPS ===== */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Special Workshops Included
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Free additional sessions to enrich your training
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {workshops.map((workshop, index) => (
                <div key={index} className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {workshop.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{workshop.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== EXCURSIONS ===== */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Excursions
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {excursions.map((excursion, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {excursion.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{excursion.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ACCOMMODATION TYPES ===== */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Accommodation Types
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {accommodations.map((acc, index) => (
                <div key={index} className="p-8 bg-card rounded-lg border border-border text-center">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    {acc.type}
                  </h3>
                  <div className="mb-6">
                    <span className="text-muted-foreground line-through text-lg">
                      {acc.originalPrice}
                    </span>
                    <span className="block font-heading text-3xl font-bold text-primary">
                      {acc.price}
                    </span>
                    <span className="text-sm text-muted-foreground">/person</span>
                  </div>
                  <Button className="w-full" asChild>
                    <Link to="/contact">Reserve Now</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ACCOMMODATION & FOOD ===== */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Accommodation
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5" />
                    <span>Clean, spacious, and peaceful rooms designed for comfort</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5" />
                    <span>Attached bathrooms with hot water, AC/fan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5" />
                    <span>Both shared and private options available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5" />
                    <span>Natural surroundings for calm and reflection</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Food
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5" />
                    <span>Three fresh vegetarian/vegan meals daily</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5" />
                    <span>Sattvic food — light, healthy, and nourishing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5" />
                    <span>Designed to energize body and calm mind</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5" />
                    <span>Herbal teas, fresh fruits, local Balinese flavors</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== UPCOMING DATES ===== */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Upcoming Dates 2025 - 2026
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Limited seats available. Secure your spot today.
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-4">
                {upcomingDates.map((date, index) => (
                  <div 
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-card rounded-lg border border-border gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">{date.date}</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="font-heading text-xl font-bold text-primary">
                        {date.price}
                      </span>
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        date.availability === "Available" 
                          ? "bg-primary/10 text-primary" 
                          : "bg-accent/10 text-accent"
                      }`}>
                        {date.availability}
                      </span>
                      <Button size="sm" asChild>
                        <Link to="/contact">Book Now</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== GOOGLE REVIEWS ===== */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              What Our Students Say
            </h2>
            <div className="flex justify-center gap-1 mb-12">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: "Sarah M.", text: "This training changed my life. The teachers are incredibly knowledgeable and the experience in Bali was magical." },
                { name: "Michael K.", text: "Best decision I ever made. The small group size meant I got personal attention and really grew as a teacher." },
                { name: "Emma L.", text: "Yogagarhi is special. It's not just about poses — it's about transformation. I came as a student, left as a teacher." },
              ].map((review, index) => (
                <div key={index} className="p-6 bg-card rounded-lg border border-border">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <p className="font-medium text-foreground">— {review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TEACHERS ===== */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Our Teachers
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {teachers.map((teacher, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                    <Users className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                    {teacher.name}
                  </h3>
                  <p className="text-primary text-sm mb-1">{teacher.specialty}</p>
                  <p className="text-muted-foreground text-sm">{teacher.experience}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== BOOK A CALL ===== */}
        <section id="book-call" className="py-20 bg-foreground text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Book an Appointment
            </h2>
            <p className="mb-8 opacity-80 max-w-2xl mx-auto">
              Have questions? Schedule a free call with our team to discuss your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
              >
                <Phone className="w-4 h-4 mr-2" />
                Schedule a Call
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="https://wa.me/1234567890">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ===== CODE OF CONDUCT & REFUND ===== */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Code of Conduct
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Follow the daily schedule and attend all classes on time</li>
                  <li>• No drugs, alcohol, or smoking on campus</li>
                  <li>• Only vegetarian meals within school premises</li>
                  <li>• Maintain silence during classes and meals</li>
                  <li>• Wear modest, comfortable clothing</li>
                  <li>• Show respect to teachers, staff, and fellow students</li>
                  <li>• No mobile phones during classes and meditations</li>
                  <li>• Full attendance required for certification</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Refund & Cancellation Policy
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Cannot attend? Reschedule to any future batch within 12 months</li>
                  <li>• Transfer your seat to a friend or family member</li>
                  <li>• School cancellation: full refund or new date offered</li>
                  <li>• The first day is a trial day — if not right, inform management for refund eligibility</li>
                  <li>• No refund after the first day</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== MORE VIDEO TESTIMONIALS ===== */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              More Student Stories
            </h2>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-8">
              {["J2LT9xn4RBE", "OGmWr_aC4WA", "2pLe6NHa5WU", "30jjvcqHEwA", "J2LT9xn4RBE"].map((videoId, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden bg-muted group cursor-pointer">
                  <img 
                    src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                    alt={`Testimonial ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-primary-foreground/90 flex items-center justify-center">
                      <Play className="w-4 h-4 text-primary ml-0.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="outline" asChild>
                <Link to="/testimonials">See More Testimonials</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ===== WANT TO KNOW MORE ===== */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Want to Know More?
            </h2>
            <p className="text-muted-foreground mb-8">
              Request access to our free orientation webinar and get all your questions answered.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground">
              Request Webinar Access
            </Button>
          </div>
        </section>

        {/* ===== LOCATION & MAP ===== */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Location
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Nature's Escape Resort, Ubud, Bali, Indonesia
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126130.13656780396!2d115.15619897854716!3d-8.456310468621978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d739f22c9c3%3A0x54a38affd03fd0!2sUbud%2C%20Gianyar%20Regency%2C%20Bali%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== FINAL CONVERSION HUB ===== */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Ready to Begin?
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              <Button size="lg" variant="outline" onClick={() => setShowManualDialog(true)}>
                Free Manual
              </Button>
              <Button size="lg" variant="outline" onClick={() => setShowQuizDialog(true)}>
                Reveal Your Yogic Energy
              </Button>
              <Button size="lg" variant="outline">
                Free Webinar
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="w-4 h-4 mr-2" />
                Book a Call
              </Button>
              <Button size="lg" className="bg-primary text-primary-foreground" asChild>
                <a href="https://wa.me/1234567890">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ===== INSTAGRAM FOLLOW ===== */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              Follow Our Journey
            </h2>
            <a 
              href="https://instagram.com/yogagarhi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <Instagram className="w-5 h-5" />
              @yogagarhi
            </a>
          </div>
        </section>
      </Layout>
    </>
  );
}
