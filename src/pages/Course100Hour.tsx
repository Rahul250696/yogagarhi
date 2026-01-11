import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Award, Users, Leaf, MapPin, BookOpen, Heart, 
  Check, X, ChevronDown, Play, Download, Phone,
  Calendar, Clock, Star, Instagram, MessageCircle, Sparkles,
  GraduationCap, Repeat, Mountain, Handshake, Zap, Layers, 
  UserCheck, Brain, BookMarked, UsersRound, RefreshCw,
  Salad, Coffee, Apple, Soup, UtensilsCrossed, Wheat, Milk, 
  Cherry, Sprout, CircleDot, Sun, MessageSquare, Mail,
  Wifi, Droplets, Wind
} from "lucide-react";
import heroImage from "@/assets/hero-yoga-bali.jpg";
import activityAyurveda from "@/assets/activity-ayurveda.jpg";
import activitySoundHealing from "@/assets/activity-sound-healing.jpg";
import activityWaterfall from "@/assets/activity-waterfall.jpg";
import webinarBackground from "@/assets/webinar-background.jpg";
import yogaAllianceBg from "@/assets/yoga-alliance-bg.jpg";
import yaRyt200 from "@/assets/ya-ryt-200.png";
import yaRys100 from "@/assets/ya-rys-100.png";
import yaRys200 from "@/assets/ya-rys-200.jpg";
import yaAllCertifications from "@/assets/ya-all-certifications.jpg";
import WhyFeatureItem from "@/components/home/WhyFeatureItem";

// Custom scroll-aware header component
function StickyCompactHeader({ visible, onQuickEnquiry }: { visible: boolean; onQuickEnquiry: () => void }) {
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
          <Button variant="outline" size="sm" onClick={onQuickEnquiry}>
            Quick Enquiry
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground" asChild>
            <a href="https://wa.me/917895350563" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

// Review Card Component with Read More functionality
function ReviewCard({ review }: { review: { name: string; location: string; avatar: string; rating: number; date: string; text: string } }) {
  const [expanded, setExpanded] = useState(false);
  const isLongText = review.text.length > 120;
  const displayText = expanded || !isLongText ? review.text : review.text.slice(0, 120) + "...";
  
  return (
    <div className="bg-card p-6 rounded-xl border border-border hover:shadow-card transition-shadow duration-300">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          <span className="text-sm font-semibold text-primary">{review.avatar}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-foreground text-sm">{review.name}</h4>
          <p className="text-xs text-muted-foreground">{review.location}</p>
        </div>
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      </div>
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-0.5">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-xs text-muted-foreground">{review.date}</span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {displayText}
      </p>
      {isLongText && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-primary hover:text-primary/80 font-medium mt-2 transition-colors"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
}

// Icon Highlights Section - 100 Hour specific
const iconHighlights = [
  { icon: Award, title: "Yoga Alliance Certified", subtitle: "RYS 100" },
  { icon: Leaf, title: "Multi-Style Yoga", subtitle: "Authentic Teaching" },
  { icon: Heart, title: "Beginner Friendly", subtitle: "Perfect Start" },
  { icon: Users, title: "Small Batch", subtitle: "8-10 Students" },
  { icon: BookOpen, title: "Traditional + Practical", subtitle: "Complete System" },
  { icon: MapPin, title: "Bali Immersion", subtitle: "12-Day Retreat" },
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

// Daily Schedule - 100 Hour
const dailySchedule = [
  { time: "6:00 AM", activity: "Wake Up & Coffee" },
  { time: "7:00 AM", activity: "Hatha & Vinyasa Flow" },
  { time: "8:00 AM", activity: "Pranayama & Meditation" },
  { time: "9:00 AM", activity: "Breakfast" },
  { time: "11:00 AM", activity: "Anatomy" },
  { time: "12:00 PM", activity: "Self Study / Teaching Practice" },
  { time: "1:00 PM", activity: "Lunch" },
  { time: "3:00 PM", activity: "Philosophy" },
  { time: "4:00 PM", activity: "Ashtanga Practice" },
  { time: "6:00 PM", activity: "Alignment Class" },
  { time: "7:00 PM", activity: "Dinner" },
  { time: "9:00 PM", activity: "Lights Off" },
];

// Course Curriculum - 100 Hour
const curriculum = [
  {
    category: "Asana & Alignment",
    items: [
      "Ashtanga Yoga Primary Series (Week 1-2)",
      "Hatha Yoga & Vinyasa Flow",
      "Standing, Seated & Backbend Postures",
      "Fundamental Alignment Principles",
    ],
  },
  {
    category: "Pranayama & Breath",
    items: [
      "Introduction to Pranayama",
      "Clavicular, Thoracic & Diaphragmatic Breathing",
      "Ujjayi, Kapalbhati, Nadi-Sodhana",
      "Basic Shatkarma Practices",
    ],
  },
  {
    category: "Philosophy & Self-Study",
    items: [
      "Introduction to Yoga Philosophy",
      "Yoga Sutras of Patanjali",
      "Nadis, Chakras & Energy Channels",
      "Eight Limbs of Ashtanga Yoga",
    ],
  },
  {
    category: "Teaching & Methodology",
    items: [
      "Class Sequencing Fundamentals",
      "Verbal & Hands-on Adjustments",
      "Working with Different Bodies",
      "Building Positive Communication",
    ],
  },
  {
    category: "Meditation & Inner Practices",
    items: [
      "Introduction to Meditation",
      "Om / Mantra Meditation",
      "Basic Mudras & Gestures",
      "Concentration Practices",
    ],
  },
];

// Inclusions/Exclusions - 100 Hour
const inclusions = [
  "Clean and comfortable room",
  "Attached bathroom with hot water",
  "Air conditioning / fan",
  "Free Wi-Fi access",
  "Three healthy vegetarian meals daily",
  "Herbal teas and drinking water",
  "Study material (manuals, notebooks, pens)",
  "Yoga mats and props",
  "Outdoor excursions",
  "Airport pickup (nearest airport)",
  "24/7 campus support team",
  "Certification upon completion",
  "Balinese massage",
  "Balinese dance show",
  "Rice field trek",
  "Multi style yoga",
];

const exclusions = [
  "Airfare and travel expenses",
  "Visa and travel insurance",
  "Airport drop",
  "Laundry service",
  "Personal shopping & extra activities",
];

// What You Will Receive - 100 Hour
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

// Workshops - 100 Hour
const workshops = [
  { 
    title: "Ayurveda Fundamentals", 
    description: "Understand your unique constitution (Prakriti) and learn how to balance your doshas through diet, lifestyle, and yogic practices.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=400&fit=crop"
  },
  { 
    title: "Yin Yoga Deep Stretch", 
    description: "Access deeper connective tissue layers through long-held passive poses. Release tension, increase flexibility, and cultivate inner stillness.",
    image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=600&h=400&fit=crop"
  },
  { 
    title: "Kirtan Meditation", 
    description: "Open your heart through devotional practice. Learn sacred chants, mantras, and kirtan to connect with the spiritual essence of yoga.",
    image: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=600&h=400&fit=crop"
  },
  { 
    title: "Partner Yoga", 
    description: "Build trust and connection through partner-based yoga practices. Learn adjustments and cooperative asana techniques.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop"
  },
];

// Excursions
const excursions = [
  { 
    title: "Balinese Dance Performance", 
    description: "Witness the ancient art of Balinese dance — a mesmerizing display of grace, storytelling, and spiritual devotion passed down through generations.",
    image: "https://images.unsplash.com/photo-1518611507436-f9221403cca2?w=600&h=600&fit=crop",
    icon: Star
  },
  { 
    title: "Rice Field Trek", 
    description: "Walk through Ubud's iconic terraced rice paddies. Experience the harmony of nature, traditional farming, and the peaceful rhythm of rural Bali.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=600&fit=crop",
    icon: Leaf
  },
  { 
    title: "Sacred Waterfall Visit", 
    description: "Journey to a sacred waterfall for a traditional cleansing ritual. Let the pure waters wash away what no longer serves you.",
    image: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=600&h=600&fit=crop",
    icon: Sparkles
  },
];

// Sattvic Food Menu
const foodMenu = [
  {
    meal: "Breakfast",
    time: "9:00 AM",
    icon: Coffee,
    items: ["Fresh tropical fruits", "Homemade granola with coconut yogurt", "Herbal teas & fresh juices", "Balinese rice porridge"],
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=400&fit=crop"
  },
  {
    meal: "Lunch",
    time: "1:00 PM",
    icon: Salad,
    items: ["Nourishing Buddha bowls", "Tempeh & tofu preparations", "Fresh garden salads", "Traditional Balinese vegetables"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop"
  },
  {
    meal: "Dinner",
    time: "7:00 PM",
    icon: Soup,
    items: ["Light sattvic soups", "Wholesome grain dishes", "Steamed vegetables", "Healing Ayurvedic preparations"],
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop"
  },
];

// Food Philosophy Points
const foodPhilosophy = [
  { icon: Leaf, title: "100% Plant-Based", description: "Pure vegetarian & vegan cuisine" },
  { icon: Heart, title: "Sattvic Principles", description: "Food that promotes clarity & peace" },
  { icon: Apple, title: "Locally Sourced", description: "Fresh ingredients from Bali farms" },
  { icon: Sparkles, title: "Ayurvedic Balance", description: "Meals designed for your dosha" },
];

// Dietary Options
const dietaryOptions = [
  { icon: Leaf, name: "Vegan", description: "100% plant-based meals" },
  { icon: Milk, name: "Lactose Free", description: "Dairy-free alternatives" },
  { icon: Wheat, name: "Gluten Free", description: "No wheat or gluten" },
  { icon: Sprout, name: "Raw Food", description: "Living food options" },
  { icon: CircleDot, name: "Organic", description: "Certified organic produce" },
  { icon: Cherry, name: "Fruitarian", description: "Fruit-based meals" },
  { icon: Sun, name: "Yogic Diet", description: "Traditional sattvic food" },
  { icon: MessageSquare, name: "Custom Request", description: "Other diets on request" },
];

// Upcoming Dates - 100 Hour
const upcomingDates = [
  { date: "1 Dec - 12 Dec 2025", spotsLeft: 5, earlyBirdSaving: "$150" },
  { date: "1 Jan - 12 Jan 2026", spotsLeft: 8, earlyBirdSaving: "$150" },
  { date: "1 Feb - 12 Feb 2026", spotsLeft: 8, earlyBirdSaving: "$150" },
  { date: "1 Mar - 12 Mar 2026", spotsLeft: 8, earlyBirdSaving: "$150" },
  { date: "1 Apr - 12 Apr 2026", spotsLeft: 8, earlyBirdSaving: "$150" },
  { date: "1 May - 12 May 2026", spotsLeft: 5, earlyBirdSaving: "$150" },
  { date: "1 Jun - 12 Jun 2026", spotsLeft: 8, earlyBirdSaving: "$150" },
  { date: "1 Jul - 12 Jul 2026", spotsLeft: 8, earlyBirdSaving: "$150" },
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

export default function Course100Hour() {
  const [showCompactHeader, setShowCompactHeader] = useState(false);
  const [showQuizDialog, setShowQuizDialog] = useState(false);
  const [showQuizThankYou, setShowQuizThankYou] = useState(false);
  const [showManualDialog, setShowManualDialog] = useState(false);
  const [showManualThankYou, setShowManualThankYou] = useState(false);
  const [showSyllabusDialog, setShowSyllabusDialog] = useState(false);
  const [showSyllabusThankYou, setShowSyllabusThankYou] = useState(false);
  const [syllabusEmail, setSyllabusEmail] = useState("");
  const [syllabusEmailError, setSyllabusEmailError] = useState("");
  const [selectedSyllabusCourse, setSelectedSyllabusCourse] = useState("100");
  const [showWebinarThankYou, setShowWebinarThankYou] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [manualEmail, setManualEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [manualEmailError, setManualEmailError] = useState("");
  const [showWelcomeExpanded, setShowWelcomeExpanded] = useState(false);
  const [activeInclusionTab, setActiveInclusionTab] = useState<'inclusions' | 'exclusions'>('inclusions');
  const [showWebinarDialog, setShowWebinarDialog] = useState(false);
  const [webinarForm, setWebinarForm] = useState({
    name: '',
    email: '',
    timezone: '',
    date: '',
    time: ''
  });
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedDay, setSelectedDay] = useState<number | null>(13);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showBookingDialog, setShowBookingDialog] = useState(false);
  const [showEnrollDialog, setShowEnrollDialog] = useState(false);
  const [showQuickEnquiryDialog, setShowQuickEnquiryDialog] = useState(false);
  const [quickEnquiryForm, setQuickEnquiryForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [bookingForm, setBookingForm] = useState({
    name: '',
    countryCode: '+91',
    contact: '',
    email: '',
    course: ''
  });
  const [enrollForm, setEnrollForm] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    contact: '',
    courseName: '',
    courseDate: '',
    accommodation: '',
    gender: '',
    country: '',
    source: '',
    message: ''
  });

  const isEnrollFormComplete = enrollForm.name && enrollForm.email && enrollForm.contact && 
    enrollForm.courseName && enrollForm.courseDate && enrollForm.accommodation && 
    enrollForm.gender && enrollForm.country && enrollForm.source;

  const courseDates = [
    "December, 2025", "January, 2026", "February, 2026", "March, 2026", "April, 2026",
    "May, 2026", "June, 2026", "July, 2026", "August, 2026", "September, 2026",
    "October, 2026", "November, 2026", "December, 2026"
  ];
  const [selectedTimezone, setSelectedTimezone] = useState('UTC +05:30 New Delhi, Mumbai');
  const [showTimezoneDropdown, setShowTimezoneDropdown] = useState(false);
  const [isFoodSectionOpen, setIsFoodSectionOpen] = useState(false);
  const [isAccommodationOpen, setIsAccommodationOpen] = useState(true);
  const foodTriggerRef = useRef<HTMLDivElement>(null);

  const handleFoodSectionToggle = (open: boolean) => {
    setIsFoodSectionOpen(open);
    if (open) {
      setTimeout(() => {
        foodTriggerRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 100);
    }
  };

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isBookingFormComplete = bookingForm.name && bookingForm.contact && bookingForm.email && bookingForm.course;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const isWebinarFormComplete = webinarForm.name && webinarForm.email && webinarForm.timezone && webinarForm.date && webinarForm.time;

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
      setQuizStep(quizQuestions.length);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setEmail("");
    setEmailError("");
    setShowQuizThankYou(false);
  };

  const handleQuizSubmit = () => {
    if (!email.trim()) {
      setEmailError("Please enter your email address");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    setShowQuizDialog(false);
    setShowQuizThankYou(true);
  };

  return (
    <>
      <StickyCompactHeader visible={showCompactHeader} onQuickEnquiry={() => setShowQuickEnquiryDialog(true)} />
      
      <Layout>
        {/* ===== HERO SECTION ===== */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="100 Hour Yoga Teacher Training in Bali" 
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
              100 Hour Yoga Teacher Training
            </h1>
            <p className="font-heading text-2xl md:text-3xl mb-12 opacity-90">
              Bali, Indonesia
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                className="bg-primary-foreground/20 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/30 font-semibold"
                onClick={() => setShowQuickEnquiryDialog(true)}
              >
                Quick Enquiry
              </Button>
              <Button 
                size="xl"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                onClick={() => scrollToSection('book-call')}
              >
                Book an Appointment
              </Button>
            </div>
          </div>
        </section>

        {/* ===== COURSE DETAILS BAR ===== */}
        <section className="py-8 bg-secondary/50 border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="relative rounded-xl border-2 border-primary/40 bg-background shadow-card p-6 md:p-8">
              <div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 items-center">
                <div className="text-center lg:text-left border-r border-border/30 pr-4 last:border-r-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Course</p>
                  <p className="font-heading font-semibold text-foreground">100 Hour YTTC</p>
                </div>
                
                <div className="text-center lg:text-left border-r border-border/30 pr-4 last:border-r-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Duration</p>
                  <p className="font-heading font-semibold text-foreground">12 Days</p>
                </div>
                
                <div className="text-center lg:text-left border-r border-border/30 pr-4 last:border-r-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Style</p>
                  <p className="font-heading font-semibold text-foreground">Multi-Style Yoga</p>
                </div>
                
                <div className="text-center lg:text-left border-r border-border/30 pr-4 last:border-r-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Level</p>
                  <p className="font-heading font-semibold text-foreground">Beginner</p>
                </div>
                
                <div className="text-center lg:text-left border-r border-border/30 pr-4 last:border-r-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Certification</p>
                  <p className="font-heading font-semibold text-foreground">Yoga Alliance RYT 100</p>
                </div>
                
                <div className="text-center lg:text-left border-r border-border/30 pr-4 last:border-r-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Starting From</p>
                  <div className="flex items-baseline gap-2 justify-center lg:justify-start">
                    <span className="text-sm text-muted-foreground line-through">$1436</span>
                    <span className="font-heading text-2xl md:text-3xl font-bold text-primary animate-pulse">$1149</span>
                  </div>
                  <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700 rounded-full">Save $287</span>
                </div>
                
                <div className="col-span-2 md:col-span-1 flex justify-center lg:justify-end">
                  <Button 
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full md:w-auto"
                    onClick={() => setShowEnrollDialog(true)}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
              
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
                      <p className="text-sm font-medium text-foreground">Ancient Yoga Textbook</p>
                      <p className="text-xs text-muted-foreground">Traditional Wisdom</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Non-Slip Yoga Mat</p>
                      <p className="text-xs text-muted-foreground">Complimentary Gift</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Yoga Alliance Certified</p>
                      <p className="text-xs text-muted-foreground">RYS 100</p>
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
              <div className="order-1 lg:order-2">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Welcome to Yogagarhi
                </h2>
                <p className="font-heading text-xl text-primary mb-6 italic">
                  100 Hour Yoga Teacher Training Course
                </p>
                
                <div className="relative w-full mb-8 lg:hidden">
                  <div className="aspect-video rounded-lg overflow-hidden shadow-card bg-muted">
                    <iframe
                      src="https://www.youtube.com/embed/U1r2mQRmWXM?rel=0"
                      title="YogaGarhi 100 Hour Yoga Teacher Training"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
                
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Become a Yoga Alliance Registered Yoga Teacher through Yogagarhi's 
                    100-Hour Yoga Teacher Training (TTC) in Bali Ubud and join a life-changing journey 
                    of yoga and self-realization.
                  </p>
                  <p>
                    The 100-Hour Yoga Teacher Training (TTC) course is made for beginner practitioners 
                    and yoga enthusiasts who want to kickstart their yoga journey. This course covers all 
                    essential aspects of yoga, including asanas, pranayama, anatomy and teaching methodology.
                  </p>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      showWelcomeExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="pt-6">
                      Become a part of this transformative once in a lifetime experience in the 
                      mesmerizing beauty of Bali. This holistic program prepares you to become a 
                      professional yoga teacher having expertise, skills, and confidence. By the end 
                      of this course, you'll be ready to teach yoga anywhere in the world while 
                      spreading wellness, peace, and love.
                    </p>
                  </div>
                  
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
              
              <div className="relative w-full order-2 lg:order-1 hidden lg:block">
                <div className="aspect-video rounded-lg overflow-hidden shadow-card bg-muted">
                  <iframe
                    src="https://www.youtube.com/embed/U1r2mQRmWXM?rel=0"
                    title="YogaGarhi 100 Hour Yoga Teacher Training"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHAT SETS YOGAGARHI APART ===== */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              What Sets YogaGarhi Apart
            </h2>
            <div className="flex items-center justify-center gap-2 mb-12">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
              <Sparkles className="w-6 h-6 text-primary" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
            
            <div className="space-y-16 max-w-5xl mx-auto">
              <WhyFeatureItem
                icon={<GraduationCap className="w-4 h-4 text-primary" />}
                title="Begin Before You Begin - Pre YTTC"
                preview="The World's First Pre-YTTC school. Optional Complimentary Online Pre-YTTC Preparation to feel confident and prepared."
                expanded={`At Yogagarhi, we do something different. We offer a Pre-YTTC Online Optional Complimentary Preparation Program. This gives you time to:

• Prepare your body
• Get friendly with curriculum & subjects
• Understand basic concepts
• Feel confident & clear

So when training begins, you don't panic. You arrive grounded. You don't jump into transformation. You are gently prepared for it.`}
                imageUrl={heroImage}
                imageAlt="Pre-YTTC Preparation"
                isReversed={false}
              />

              <WhyFeatureItem
                icon={<Heart className="w-4 h-4 text-primary" />}
                title="Not Just Transform Yoga - Transform You"
                preview="You not only work in your YTTC to deepen asana practice, meditation & teaching skills. Very few address the human being behind the practice."
                expanded={`At Yogagarhi, yoga is taught as a way of living, not as a skill to perform. The focus is not only on how you practice, but on how you think, relate, act, and respond to life itself.

We work with:
• How you think
• How you react
• How you handle stress
• How you relate to others

This is where real change happens.`}
                imageUrl={activityAyurveda}
                imageAlt="Transform Your Life"
                isReversed={true}
              />

              <WhyFeatureItem
                icon={<Repeat className="w-4 h-4 text-primary" />}
                title="Lifetime Re-Attendance & Assistant Teaching"
                preview="At Yogagarhi, graduation is not the end of learning. Graduates are welcome to return to future trainings for deeper practice and to assist as teachers."
                expanded={`Over years of teaching, our founder observed a clear pattern: students often wanted to repeat their training to revise, deepen, and truly integrate what they had learned.

Instead of ignoring this need, Yogagarhi embraced it. Once you complete your YTTC with us, you are welcome to repeat the same course again in the future — without paying the course fee again (food & stay exclusive).

• Observe teaching methodology in real time
• Support classes as an Assistant Teacher
• Build confidence and refine skills

Because yoga is not a one-time achievement. It is a lifelong refinement.`}
                imageUrl={activitySoundHealing}
                imageAlt="Lifetime Learning"
                isReversed={false}
              />

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

              <WhyFeatureItem
                icon={<Mountain className="w-4 h-4 text-primary" />}
                title="Rooted in Himalayan Lineage"
                preview="Modern yoga often focuses only on physical and meditative practices. At Yogagarhi, our teachings are inspired by Himalayan yogic traditions."
                expanded={`We teach the four classical paths:

• Karma Yoga – conscious action
• Jnana Yoga – self-inquiry and wisdom
• Bhakti Yoga – devotion and humility
• Raja Yoga – discipline of body and mind

These paths are not taught as theory. They are experienced through daily life, reflection, and practice.`}
                imageUrl={activityAyurveda}
                imageAlt="Himalayan Tradition"
                isReversed={false}
              />
            </div>
          </div>
        </section>

        {/* ===== DAILY SCHEDULE ===== */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-primary mb-4">
              Daily Schedule
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
              <Sun className="w-8 h-8 text-primary" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              A typical day at YogaGarhi is designed to balance intensive learning with rest and integration.
            </p>
            
            <div className="max-w-3xl mx-auto">
              <div className="relative space-y-4">
                <div className="absolute left-[calc(6rem+1.5rem+0.5rem-1px)] md:left-[calc(7rem+1.5rem+0.5rem-1px)] top-2 bottom-2 w-0.5 bg-primary/30" />
                
                {dailySchedule.map((item, index) => (
                  <div 
                    key={index}
                    className="relative flex items-center gap-6"
                  >
                    <div className="w-24 md:w-28 flex-shrink-0 text-right">
                      <span className="font-heading text-lg md:text-xl font-semibold text-primary">{item.time}</span>
                    </div>
                    
                    <div className="flex-shrink-0 z-10">
                      <div 
                        className="w-4 h-4 rounded-full bg-primary animate-pulse-dot"
                        style={{ animationDelay: `${index * 0.5}s` }}
                      />
                    </div>
                    
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

        {/* ===== INCLUSIONS / EXCLUSIONS ===== */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
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
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
              <BookOpen className="w-8 h-8 text-primary" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Comprehensive curriculum covering all essential aspects of yoga teacher training
            </p>
            
            <div className="relative">
              <div 
                className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide scroll-smooth snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {[
                  { 
                    title: "Ashtanga Yoga Postures", 
                    content: "Introduction to Ashtanga yoga followed by Sun Salutation A & B. Standing sequence postures & use of yoga props. Mysore style practice examination.",
                    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=400&fit=crop"
                  },
                  { 
                    title: "Hatha & Vinyasa Flow", 
                    content: "Pawanmuktasana series, Surya Namaskar, Standing postures, Seated postures, Backbends, Forward folds, and core exercises.",
                    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=400&h=400&fit=crop"
                  },
                  { 
                    title: "Yoga Philosophy", 
                    content: "Introduction to yoga sutras of Patanjali, Nadis, Chakras, Hatha yoga limbs, Eight limbs of Ashtanga Yoga.",
                    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop"
                  },
                  { 
                    title: "Pranayama & Breathing", 
                    content: "Clavicular, Thoracic & Diaphragmatic Breathing, Yogic Breathing, Ujjayi, Kapalbhati, Nadi-Sodhana, Bhramari.",
                    image: "https://images.unsplash.com/photo-1474418397713-7ede21d49118?w=400&h=400&fit=crop"
                  },
                  { 
                    title: "Anatomy & Physiology", 
                    content: "Body movement planes, joint protection in asanas, anatomy of ankle, knee, spine, shoulder, breathing mechanism.",
                    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop"
                  },
                  { 
                    title: "Teaching Methodology", 
                    content: "How to sequence a class, adjustments, working with different level students, building positive communication.",
                    image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=400&fit=crop"
                  },
                  { 
                    title: "Meditation", 
                    content: "Introduction to Meditation, Om / Mantra Meditation, Trataka, concentration techniques, and silence practices.",
                    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=400&fit=crop"
                  },
                  { 
                    title: "Bandhas & Mudras", 
                    content: "Mula Bandha, Uddiyana Bandha, Jalandhara Bandha. Jnana mudra, Chin mudra, Shanmukhi mudra.",
                    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=400&h=400&fit=crop"
                  },
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 snap-start first:ml-4 last:mr-4"
                  >
                    <div className="flex flex-col items-center h-full">
                      <div className="relative z-10 mb-[-40px]">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-background shadow-lg">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      <div className="w-72 h-52 bg-card rounded-xl border border-border p-6 pt-12 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                        <h3 className="font-heading text-lg font-semibold text-foreground text-center mb-3">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground text-center leading-relaxed flex-1">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
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
                    <select 
                      value={selectedSyllabusCourse}
                      onChange={(e) => setSelectedSyllabusCourse(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="100">100 Hour YTTC</option>
                      <option value="200">200 Hour YTTC</option>
                      <option value="300">300 Hour YTTC</option>
                    </select>
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={syllabusEmail}
                      onChange={(e) => {
                        setSyllabusEmail(e.target.value);
                        setSyllabusEmailError("");
                      }}
                      className={`w-full px-4 py-3 rounded-lg border ${syllabusEmailError ? 'border-red-500' : 'border-border'} bg-background focus:outline-none focus:ring-2 focus:ring-primary`}
                    />
                    {syllabusEmailError && (
                      <p className="text-sm text-red-500">{syllabusEmailError}</p>
                    )}
                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={() => {
                        if (!syllabusEmail) {
                          setSyllabusEmailError("Please enter your email address");
                          return;
                        }
                        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(syllabusEmail)) {
                          setSyllabusEmailError("Please enter a valid email address");
                          return;
                        }
                        setSyllabusEmailError("");
                        setShowSyllabusDialog(false);
                        setShowSyllabusThankYou(true);
                      }}
                    >
                      Send Syllabus
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Dialog open={showSyllabusThankYou} onOpenChange={(open) => {
                setShowSyllabusThankYou(open);
                if (!open) {
                  setSyllabusEmail("");
                  setSyllabusEmailError("");
                }
              }}>
                <DialogContent className="sm:max-w-md text-center">
                  <div className="py-6 space-y-6">
                    <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                        Thank You! 🙏
                      </h3>
                      <p className="text-muted-foreground">
                        Your {selectedSyllabusCourse}-hour YTTC syllabus is on its way to <span className="font-medium text-foreground">{syllabusEmail}</span>
                      </p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground">
                      <p>Please check your inbox (and spam folder) within the next 24 hours.</p>
                    </div>
                    <Button 
                      onClick={() => {
                        setShowSyllabusThankYou(false);
                        setSyllabusEmail("");
                        setSyllabusEmailError("");
                      }}
                      className="w-full"
                    >
                      Close
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        {/* ===== UPCOMING DATES ===== */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Upcoming Dates 2025 - 2026
            </h2>
            <div className="flex items-center justify-center gap-2 mb-12">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
              <Calendar className="w-8 h-8 text-primary" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Dates List */}
              <div className="space-y-4">
                {upcomingDates.map((date, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-heading font-semibold text-foreground">{date.date}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`text-sm ${date.spotsLeft <= 5 ? 'text-amber-600' : 'text-green-600'}`}>
                        {date.spotsLeft <= 5 ? `${date.spotsLeft} seats left` : 'Available'}
                      </span>
                      <Button size="sm" onClick={() => setShowEnrollDialog(true)}>
                        Book Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pricing Overview */}
              <div className="bg-card rounded-xl p-8 border border-border shadow-card lg:sticky lg:top-24">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  100 Hour YTTC Pricing
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-muted-foreground">Triple Sharing</span>
                    <span className="font-heading text-xl font-bold text-foreground">$1,149</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-muted-foreground">Double Sharing</span>
                    <span className="font-heading text-xl font-bold text-foreground">$1,299</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-muted-foreground">Private Room</span>
                    <span className="font-heading text-xl font-bold text-foreground">$1,499</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => setShowEnrollDialog(true)}
                >
                  Enroll Now
                </Button>
                
                <p className="text-xs text-center text-muted-foreground mt-4">
                  * Early bird discounts available for select dates
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== YOGA ALLIANCE CERTIFICATION ===== */}
        <section 
          className="py-24 relative bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${yogaAllianceBg})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-white/90 text-lg mb-2 font-medium">
                "YOGAGARHI – 100 Hour YTTC"
              </p>
              
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-amber-500 mb-6">
                Yoga Alliance USA CERTIFIED
              </h2>
              
              <p className="text-white/90 text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
                Our school, YogaGarhi, is registered with Yoga Alliance USA. Upon completing this course, 
                you will receive an internationally recognized certification, allowing you to build upon 
                your foundation with our 200-hour or 300-hour programs.
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                <img src={yaRys100} alt="RYS 100" className="h-20 md:h-24 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                <img src={yaRys200} alt="RYS 200" className="h-20 md:h-24 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                <img src={yaRyt200} alt="RYT 200" className="h-20 md:h-24 w-auto object-contain hover:scale-110 transition-transform duration-300" />
              </div>
              
              <div className="mt-10">
                <img src={yaAllCertifications} alt="All Yoga Alliance Certifications" className="max-w-full md:max-w-2xl mx-auto rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img 
              src={heroImage}
              alt="Yoga retreat background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/70" />
          </div>
          
          {/* Decorative circles */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Begin Your Yoga Journey?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join our 100-hour yoga teacher training and take the first step 
              towards becoming a certified yoga teacher.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white/20 font-semibold"
                onClick={() => setShowEnrollDialog(true)}
              >
                Enroll Now
              </Button>
              <Button 
                size="xl"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                asChild
              >
                <a href="https://wa.me/917895350563" target="_blank" rel="noopener noreferrer">
                  Ask Questions on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ===== ENROLLMENT FORM DIALOG ===== */}
        <Dialog open={showEnrollDialog} onOpenChange={setShowEnrollDialog}>
          <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl">Enroll Now</DialogTitle>
              <p className="text-sm text-muted-foreground">
                Fill in your details to begin your yoga journey
              </p>
            </DialogHeader>
            
            <div className="space-y-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  value={enrollForm.name}
                  onChange={(e) => setEnrollForm(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  value={enrollForm.email}
                  onChange={(e) => setEnrollForm(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Contact No./WhatsApp No. <span className="text-destructive">*</span>
                </label>
                <div className="flex gap-2">
                  <select
                    value={enrollForm.countryCode}
                    onChange={(e) => setEnrollForm(prev => ({ ...prev, countryCode: e.target.value }))}
                    className="w-28 px-2 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  >
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+33">🇫🇷 +33</option>
                    <option value="+62">🇮🇩 +62</option>
                  </select>
                  <input
                    type="tel"
                    value={enrollForm.contact}
                    onChange={(e) => setEnrollForm(prev => ({ ...prev, contact: e.target.value }))}
                    placeholder="Phone number"
                    className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Course Name <span className="text-destructive">*</span>
                </label>
                <select
                  value={enrollForm.courseName}
                  onChange={(e) => setEnrollForm(prev => ({ ...prev, courseName: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Choose Your Yoga Course</option>
                  <option value="100 Hour Yoga Teacher Training Course in Bali">100 Hour Yoga Teacher Training Course in Bali</option>
                  <option value="200 Hour Yoga Teacher Training Course in Bali">200 Hour Yoga Teacher Training Course in Bali</option>
                  <option value="300 Hour Yoga Teacher Training Course in Bali">300 Hour Yoga Teacher Training Course in Bali</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Course Date <span className="text-destructive">*</span>
                </label>
                <select
                  value={enrollForm.courseDate}
                  onChange={(e) => setEnrollForm(prev => ({ ...prev, courseDate: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Choose...</option>
                  {courseDates.map((date) => (
                    <option key={date} value={date}>{date}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Accommodation <span className="text-destructive">*</span>
                </label>
                <select
                  value={enrollForm.accommodation}
                  onChange={(e) => setEnrollForm(prev => ({ ...prev, accommodation: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Select Accommodation</option>
                  <option value="Triple Sharing">Triple Sharing</option>
                  <option value="Double Sharing">Double Sharing</option>
                  <option value="Private Room">Private Room</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Gender <span className="text-destructive">*</span>
                </label>
                <select
                  value={enrollForm.gender}
                  onChange={(e) => setEnrollForm(prev => ({ ...prev, gender: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Country <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  value={enrollForm.country}
                  onChange={(e) => setEnrollForm(prev => ({ ...prev, country: e.target.value }))}
                  placeholder="Enter your country"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  From where you get to know about us? <span className="text-destructive">*</span>
                </label>
                <select
                  value={enrollForm.source}
                  onChange={(e) => setEnrollForm(prev => ({ ...prev, source: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Choose</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Recommendation">Recommendation</option>
                  <option value="Any other source">Any other source</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  value={enrollForm.message}
                  onChange={(e) => setEnrollForm(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Any additional message or questions..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
              </div>
            </div>
            
            <Button 
              className="w-full mt-6" 
              size="lg"
              disabled={!isEnrollFormComplete}
              onClick={() => {
                console.log('Enrollment submitted:', enrollForm);
                setShowEnrollDialog(false);
                setEnrollForm({
                  name: '', email: '', countryCode: '+91', contact: '', courseName: '', courseDate: '',
                  accommodation: '', gender: '', country: '', source: '', message: ''
                });
              }}
            >
              Submit Enrollment
            </Button>
          </DialogContent>
        </Dialog>

        {/* ===== QUICK ENQUIRY DIALOG ===== */}
        <Dialog open={showQuickEnquiryDialog} onOpenChange={setShowQuickEnquiryDialog}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl">Quick Enquiry</DialogTitle>
              <p className="text-sm text-muted-foreground">
                Connect with us and begin your journey of transformation
              </p>
            </DialogHeader>
            
            <form onSubmit={(e) => {
              e.preventDefault();
              console.log('Quick Enquiry submitted:', quickEnquiryForm);
              setShowQuickEnquiryDialog(false);
              setQuickEnquiryForm({ name: '', email: '', message: '' });
            }} className="space-y-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name <span className="text-destructive">*</span>
                </label>
                <Input
                  type="text"
                  required
                  value={quickEnquiryForm.name}
                  onChange={(e) => setQuickEnquiryForm(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email <span className="text-destructive">*</span>
                </label>
                <Input
                  type="email"
                  required
                  value={quickEnquiryForm.email}
                  onChange={(e) => setQuickEnquiryForm(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  value={quickEnquiryForm.message}
                  onChange={(e) => setQuickEnquiryForm(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Your questions or message..."
                  rows={4}
                />
              </div>
              
              <Button type="submit" className="w-full" size="lg">
                Send Enquiry
              </Button>
            </form>
          </DialogContent>
        </Dialog>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-all duration-300 animate-fade-in"
            aria-label="Scroll to top"
          >
            <ChevronDown className="w-6 h-6 rotate-180" />
          </button>
        )}
      </Layout>
    </>
  );
}
