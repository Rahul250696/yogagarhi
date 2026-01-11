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
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          <span className="text-sm font-semibold text-primary">{review.avatar}</span>
        </div>
        
        {/* Name & Location */}
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-foreground text-sm">{review.name}</h4>
          <p className="text-xs text-muted-foreground">{review.location}</p>
        </div>
        
        {/* Google Icon */}
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      </div>
      
      {/* Rating & Date */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-0.5">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-xs text-muted-foreground">{review.date}</span>
      </div>
      
      {/* Review Text */}
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
    "October, 2026", "November, 2026", "December, 2026", "January, 2027", "February, 2027",
    "March, 2027", "April, 2027", "May, 2027", "June, 2027", "July, 2027",
    "August, 2027", "September, 2027", "October, 2027", "November, 2027", "December, 2027"
  ];
  const [selectedTimezone, setSelectedTimezone] = useState('UTC +05:30 New Delhi, Mumbai');
  const [showTimezoneDropdown, setShowTimezoneDropdown] = useState(false);
  const [isFoodSectionOpen, setIsFoodSectionOpen] = useState(false);
  const [isAccommodationOpen, setIsAccommodationOpen] = useState(true);
  const foodTriggerRef = useRef<HTMLDivElement>(null);

  // Handle food section toggle with scroll position preservation
  const handleFoodSectionToggle = (open: boolean) => {
    setIsFoodSectionOpen(open);
    
    // If opening, scroll to the trigger after a brief delay for content to render
    if (open) {
      setTimeout(() => {
        foodTriggerRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 100);
    }
  };

  // Scroll to top functionality
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

  const timezones = [
    { value: 'UTC -12:00 Baker Island', label: 'UTC -12:00 Baker Island' },
    { value: 'UTC -11:00 Pago Pago', label: 'UTC -11:00 Pago Pago' },
    { value: 'UTC -10:00 Honolulu', label: 'UTC -10:00 Honolulu' },
    { value: 'UTC -09:00 Anchorage', label: 'UTC -09:00 Anchorage' },
    { value: 'UTC -08:00 Los Angeles, Vancouver', label: 'UTC -08:00 Los Angeles, Vancouver' },
    { value: 'UTC -07:00 Denver, Phoenix', label: 'UTC -07:00 Denver, Phoenix' },
    { value: 'UTC -06:00 Chicago, Mexico City', label: 'UTC -06:00 Chicago, Mexico City' },
    { value: 'UTC -05:00 New York, Toronto', label: 'UTC -05:00 New York, Toronto' },
    { value: 'UTC -04:00 Santiago, Caracas', label: 'UTC -04:00 Santiago, Caracas' },
    { value: 'UTC -03:00 São Paulo, Buenos Aires', label: 'UTC -03:00 São Paulo, Buenos Aires' },
    { value: 'UTC -02:00 Mid-Atlantic', label: 'UTC -02:00 Mid-Atlantic' },
    { value: 'UTC -01:00 Azores, Cape Verde', label: 'UTC -01:00 Azores, Cape Verde' },
    { value: 'UTC +00:00 London, Dublin, Lisbon', label: 'UTC +00:00 London, Dublin, Lisbon' },
    { value: 'UTC +01:00 Paris, Berlin, Rome', label: 'UTC +01:00 Paris, Berlin, Rome' },
    { value: 'UTC +02:00 Cairo, Johannesburg', label: 'UTC +02:00 Cairo, Johannesburg' },
    { value: 'UTC +03:00 Moscow, Nairobi, Riyadh', label: 'UTC +03:00 Moscow, Nairobi, Riyadh' },
    { value: 'UTC +03:30 Tehran', label: 'UTC +03:30 Tehran' },
    { value: 'UTC +04:00 Dubai, Baku', label: 'UTC +04:00 Dubai, Baku' },
    { value: 'UTC +04:30 Kabul', label: 'UTC +04:30 Kabul' },
    { value: 'UTC +05:00 Karachi, Tashkent', label: 'UTC +05:00 Karachi, Tashkent' },
    { value: 'UTC +05:30 New Delhi, Mumbai', label: 'UTC +05:30 New Delhi, Mumbai' },
    { value: 'UTC +05:45 Kathmandu', label: 'UTC +05:45 Kathmandu' },
    { value: 'UTC +06:00 Dhaka, Almaty', label: 'UTC +06:00 Dhaka, Almaty' },
    { value: 'UTC +06:30 Yangon', label: 'UTC +06:30 Yangon' },
    { value: 'UTC +07:00 Bangkok, Jakarta, Hanoi', label: 'UTC +07:00 Bangkok, Jakarta, Hanoi' },
    { value: 'UTC +08:00 Singapore, Hong Kong, Beijing', label: 'UTC +08:00 Singapore, Hong Kong, Beijing' },
    { value: 'UTC +09:00 Tokyo, Seoul', label: 'UTC +09:00 Tokyo, Seoul' },
    { value: 'UTC +09:30 Adelaide, Darwin', label: 'UTC +09:30 Adelaide, Darwin' },
    { value: 'UTC +10:00 Sydney, Melbourne', label: 'UTC +10:00 Sydney, Melbourne' },
    { value: 'UTC +11:00 Solomon Islands', label: 'UTC +11:00 Solomon Islands' },
    { value: 'UTC +12:00 Auckland, Fiji', label: 'UTC +12:00 Auckland, Fiji' },
    { value: 'UTC +13:00 Tonga, Samoa', label: 'UTC +13:00 Tonga, Samoa' },
    { value: 'UTC +14:00 Line Islands', label: 'UTC +14:00 Line Islands' },
  ];

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
      setQuizStep(quizQuestions.length); // Show email input
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
            {/* Main Course Info Row - Static Border Container */}
            <div className="relative rounded-xl border-2 border-primary/40 bg-background shadow-card p-6 md:p-8">
              <div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 items-center">
                {/* Course Duration */}
                <div className="text-center lg:text-left border-r border-border/30 pr-4 last:border-r-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Course</p>
                  <p className="font-heading font-semibold text-foreground">100 Hour YTTC</p>
                </div>
                
                {/* Course Length */}
                <div className="text-center lg:text-left border-r border-border/30 pr-4 last:border-r-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Duration</p>
                  <p className="font-heading font-semibold text-foreground">12 Days</p>
                </div>
                
                {/* Yoga Style */}
                <div className="text-center lg:text-left border-r border-border/30 pr-4 last:border-r-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Style</p>
                  <p className="font-heading font-semibold text-foreground">Multi-Style Yoga</p>
                </div>
                
                {/* Level */}
                <div className="text-center lg:text-left border-r border-border/30 pr-4 last:border-r-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Level</p>
                  <p className="font-heading font-semibold text-foreground">Beginner Friendly</p>
                </div>
                
                {/* Certification */}
                <div className="text-center lg:text-left border-r border-border/30 pr-4 last:border-r-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Certification</p>
                  <p className="font-heading font-semibold text-foreground">Yoga Alliance RYS 100</p>
                </div>
                
                {/* Price */}
                <div className="text-center lg:text-left border-r border-border/30 pr-4 last:border-r-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Starting From</p>
                  <div className="flex items-baseline gap-2 justify-center lg:justify-start">
                    <span className="text-sm text-muted-foreground line-through">$1436</span>
                    <span className="font-heading text-2xl md:text-3xl font-bold text-primary animate-pulse">$1199</span>
                  </div>
                  <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700 rounded-full">Save $237</span>
                </div>
                
                {/* Book Now Button */}
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
                      <Download className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Yoga Mat Included</p>
                      <p className="text-xs text-muted-foreground">Premium Quality</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== ICON HIGHLIGHTS ===== */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {iconHighlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-lg hover:bg-secondary/30 transition-colors duration-300"
                >
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <highlight.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-sm mb-1">
                    {highlight.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{highlight.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WELCOME SECTION ===== */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="order-2 lg:order-2">
                <p className="font-body uppercase tracking-[0.2em] text-sm text-primary mb-4">
                  Welcome to YogaGarhi
                </p>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  100 Hour Yoga Teacher Training in Bali
                </h2>
                
                {/* YouTube Video for Mobile - Show right after title */}
                <div className="lg:hidden mb-8">
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
                
                <div className="prose prose-lg text-muted-foreground">
                  <p className="mb-4">
                    The 100-hour yoga teacher training course at YogaGarhi in Bali is designed 
                    for beginners and those who wish to deepen their personal yoga practice. 
                    This foundational course provides a solid introduction to yoga philosophy, 
                    asana practice, pranayama, and meditation.
                  </p>
                  <p className="mb-4">
                    Over 12 transformative days, you will immerse yourself in authentic yogic 
                    teachings while surrounded by the spiritual energy of Bali. Our experienced 
                    teachers guide you through traditional practices that have been passed down 
                    through generations.
                  </p>
                  
                  <Collapsible open={showWelcomeExpanded} onOpenChange={setShowWelcomeExpanded}>
                    <CollapsibleContent>
                      <p className="mb-4">
                        This course is perfect for those who are new to yoga or want to establish 
                        a strong foundation before pursuing advanced certifications. You will learn 
                        the fundamentals of Hatha, Vinyasa, and Ashtanga yoga styles.
                      </p>
                      <p className="mb-4">
                        Upon completion, you will receive a Yoga Alliance certified 100-hour certificate, 
                        which can be used as a stepping stone towards your 200-hour certification. 
                        More importantly, you will leave with a deeper understanding of yourself 
                        and the transformative power of yoga.
                      </p>
                    </CollapsibleContent>
                    <CollapsibleTrigger asChild>
                      <Button variant="link" className="p-0 h-auto text-primary font-semibold">
                        {showWelcomeExpanded ? "Read Less" : "Read More"}
                        <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${showWelcomeExpanded ? 'rotate-180' : ''}`} />
                      </Button>
                    </CollapsibleTrigger>
                  </Collapsible>
                </div>
              </div>
              
              {/* Right Column - YouTube Video (desktop only) */}
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

        {/* ===== VIDEO TESTIMONIALS ===== */}
        <section className="py-20 bg-secondary/30 relative overflow-hidden">
          {/* Enhanced Yoga-themed Background Art with Animations */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Large Chakra Wheel - Center */}
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] text-primary/[0.04] animate-float-gentle" viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <circle cx="50" cy="50" r="48" strokeWidth="0.2"/>
              <circle cx="50" cy="50" r="40" strokeWidth="0.2"/>
              <circle cx="50" cy="50" r="32" strokeWidth="0.2"/>
              <circle cx="50" cy="50" r="24" strokeWidth="0.2"/>
              <circle cx="50" cy="50" r="16" strokeWidth="0.2"/>
              {/* 8-pointed star */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <line key={i} x1="50" y1="50" x2={50 + 48 * Math.cos(angle * Math.PI / 180)} y2={50 + 48 * Math.sin(angle * Math.PI / 180)} strokeWidth="0.15"/>
              ))}
            </svg>
            
            {/* Sri Yantra - Top Left */}
            <svg className="absolute -top-5 -left-5 w-56 h-56 text-primary/[0.05] animate-float" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
              <polygon points="50,5 95,90 5,90"/>
              <polygon points="50,95 5,10 95,10"/>
              <polygon points="50,20 78,75 22,75"/>
              <polygon points="50,80 22,25 78,25"/>
              <circle cx="50" cy="50" r="20"/>
              <circle cx="50" cy="50" r="30"/>
              <circle cx="50" cy="50" r="40"/>
            </svg>
            
            {/* Lotus Flower - Bottom Right */}
            <svg className="absolute -bottom-10 -right-10 w-72 h-72 text-primary/[0.04] animate-float-slow" style={{ animationDelay: '2s' }} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.4">
              {/* Outer petals */}
              <ellipse cx="50" cy="50" rx="10" ry="35"/>
              <ellipse cx="50" cy="50" rx="10" ry="35" transform="rotate(30 50 50)"/>
              <ellipse cx="50" cy="50" rx="10" ry="35" transform="rotate(60 50 50)"/>
              <ellipse cx="50" cy="50" rx="10" ry="35" transform="rotate(90 50 50)"/>
              <ellipse cx="50" cy="50" rx="10" ry="35" transform="rotate(120 50 50)"/>
              <ellipse cx="50" cy="50" rx="10" ry="35" transform="rotate(150 50 50)"/>
              {/* Inner petals */}
              <ellipse cx="50" cy="50" rx="6" ry="20"/>
              <ellipse cx="50" cy="50" rx="6" ry="20" transform="rotate(45 50 50)"/>
              <ellipse cx="50" cy="50" rx="6" ry="20" transform="rotate(90 50 50)"/>
              <ellipse cx="50" cy="50" rx="6" ry="20" transform="rotate(135 50 50)"/>
              {/* Center */}
              <circle cx="50" cy="50" r="8"/>
            </svg>
            
            {/* Om Symbol - Top Right */}
            <svg className="absolute top-16 right-20 w-36 h-36 text-primary/[0.06] animate-float-gentle" style={{ animationDelay: '1s' }} viewBox="0 0 100 100" fill="currentColor">
              <path d="M28,68 C18,68 12,58 12,48 C12,32 24,22 40,22 C56,22 62,34 62,44 C62,56 50,62 44,62 C38,62 32,56 32,48 C32,42 38,38 44,38" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M62,44 C62,32 74,26 80,32 C86,38 80,50 74,56 L68,72" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M74,18 C80,18 84,24 84,30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="88" cy="14" r="4"/>
            </svg>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Student Testimonials
            </h2>
            {/* Decorative Lotus Icon */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
              <svg className="w-10 h-6 text-primary" viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <ellipse cx="20" cy="12" rx="4" ry="10"/>
                <ellipse cx="20" cy="12" rx="4" ry="10" transform="rotate(60 20 12)"/>
                <ellipse cx="20" cy="12" rx="4" ry="10" transform="rotate(-60 20 12)"/>
                <circle cx="20" cy="12" r="2" fill="currentColor"/>
              </svg>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
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
                    Get Free 100-Hour Study Manual
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
                      Enter your email to receive the complete 100-hour YTTC study manual.
                    </p>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className={`w-full px-4 py-3 rounded-lg border ${manualEmailError ? 'border-red-500' : 'border-border'} bg-background focus:outline-none focus:ring-2 focus:ring-primary`}
                      value={manualEmail}
                      onChange={(e) => {
                        setManualEmail(e.target.value);
                        setManualEmailError("");
                      }}
                    />
                    {manualEmailError && (
                      <p className="text-sm text-red-500">{manualEmailError}</p>
                    )}
                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={() => {
                        if (!manualEmail) {
                          setManualEmailError("Please enter your email address");
                          return;
                        }
                        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(manualEmail)) {
                          setManualEmailError("Please enter a valid email address");
                          return;
                        }
                        setManualEmailError("");
                        setShowManualDialog(false);
                        setShowManualThankYou(true);
                      }}
                    >
                      Send Me The Manual
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              
              {/* Manual Thank You Dialog */}
              <Dialog open={showManualThankYou} onOpenChange={(open) => {
                setShowManualThankYou(open);
                if (!open) {
                  setManualEmail("");
                  setManualEmailError("");
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
                        Your free 100-hour study manual is on its way to <span className="font-medium text-foreground">{manualEmail}</span>
                      </p>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground">
                      <p>Please check your inbox (and spam folder) within the next 24 hours.</p>
                    </div>
                    <Button 
                      onClick={() => {
                        setShowManualThankYou(false);
                        setManualEmail("");
                        setManualEmailError("");
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
              {/* Decorative Om Symbol */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
                <svg className="w-8 h-8 text-primary" viewBox="0 0 40 40" fill="currentColor">
                  <path d="M12,28 C6,28 3,22 3,17 C3,9 9,4 18,4 C27,4 30,11 30,17 C30,24 23,28 19,28 C15,28 12,24 12,19 C12,15 16,13 19,13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M30,17 C30,11 36,8 39,12 C42,16 38,22 34,26 L31,32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="37" cy="6" r="2"/>
                </svg>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
              </div>
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

              {/* Feature 4: Small Groups */}
              <WhyFeatureItem
                icon={<Users className="w-4 h-4 text-primary" />}
                title="Small Group Deep Work. Personal Transformation."
                preview="We believe yoga is a personal path, not a crowd sport. That's why we intentionally limit our batches to 8–10 students only."
                expanded={`This allows:

• Real attention from teachers
• Personalized corrections
• Safe space to ask questions
• Meaningful connections with peers

Yoga cannot be transmitted in overcrowded settings. It is received in intimacy, in stillness, in shared silence. Here, you are not a number. You are a seeker.`}
                imageUrl={activityWaterfall}
                imageAlt="Small Groups"
                isReversed={true}
              />
            </div>
          </div>
        </section>

        {/* ===== POST-PROGRAM SUPPORT ===== */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="font-body uppercase tracking-[0.2em] text-sm text-primary mb-4">
                Your Journey Continues
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Post-Program Support
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Your growth doesn't end when the training ends. We're committed to supporting you on your teaching journey.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Bi-Annual Upgrades",
                  description: "Access to new course materials and teachings twice a year",
                  image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop"
                },
                {
                  title: "Alumni Community",
                  description: "Join our global network of YogaGarhi graduates",
                  image: "https://images.unsplash.com/photo-1529693662653-9d480530a697?w=300&h=300&fit=crop"
                },
                {
                  title: "Teaching Resources",
                  description: "Class templates, sequences, and marketing guidance",
                  image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&h=300&fit=crop"
                },
                {
                  title: "Mentorship Access",
                  description: "Direct connection with senior teachers for guidance",
                  image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=300&h=300&fit=crop"
                },
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== DAILY SCHEDULE ===== */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-primary mb-4">
              Daily Schedule
            </h2>
            {/* Decorative Sun Icon */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
              <svg className="w-10 h-10 text-primary" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="20" cy="20" r="8"/>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <line key={i} x1={20 + 11 * Math.cos(angle * Math.PI / 180)} y1={20 + 11 * Math.sin(angle * Math.PI / 180)} x2={20 + 16 * Math.cos(angle * Math.PI / 180)} y2={20 + 16 * Math.sin(angle * Math.PI / 180)}/>
                ))}
              </svg>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
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
        <section className="py-20 bg-secondary/30 overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-primary mb-4">
              What You Will Receive in This Training
            </h2>
            {/* Decorative Mandala Icon */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
              <svg className="w-10 h-10 text-primary" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="20" cy="20" r="16"/>
                <circle cx="20" cy="20" r="10"/>
                <circle cx="20" cy="20" r="4"/>
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <circle key={i} cx={20 + 10 * Math.cos(angle * Math.PI / 180)} cy={20 + 10 * Math.sin(angle * Math.PI / 180)} r="3" fill="currentColor"/>
                ))}
              </svg>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
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
        <section className="py-20 bg-background">
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
        <section className="py-20 bg-secondary/30 overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Course Syllabus
            </h2>
            {/* Decorative Book/Scroll Icon */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
              <svg className="w-10 h-8 text-primary" viewBox="0 0 48 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M24 6 C24 6 18 4 8 4 C4 4 2 6 2 8 L2 26 C2 28 4 30 8 30 C18 30 24 28 24 28"/>
                <path d="M24 6 C24 6 30 4 40 4 C44 4 46 6 46 8 L46 26 C46 28 44 30 40 30 C30 30 24 28 24 28"/>
                <line x1="24" y1="6" x2="24" y2="28"/>
              </svg>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
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
                    title: "Hatha Yoga Postures", 
                    content: "Introduction to traditional Hatha yoga. Pawanmuktasana series, Sun Salutation variations, Standing and seated postures, basic backbends and forward folds.",
                    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=400&fit=crop"
                  },
                  { 
                    title: "Vinyasa Flow", 
                    content: "Dynamic flowing sequences connecting breath with movement. Learn to create smooth transitions and build heat in the body.",
                    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=400&h=400&fit=crop"
                  },
                  { 
                    title: "Yoga Philosophy", 
                    content: "Introduction to yoga sutras of Patanjali, Eight limbs of Ashtanga Yoga, Nadis, Chakras, and inspiring stories of great yogis.",
                    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop"
                  },
                  { 
                    title: "Pranayama & Breathing", 
                    content: "Basic breathing techniques including Ujjayi, Kapalbhati, Nadi-Sodhana, and introduction to breath retention.",
                    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=400&h=400&fit=crop"
                  },
                  { 
                    title: "Meditation Basics", 
                    content: "Introduction to meditation, mantra chanting, Om meditation, and concentration practices for beginners.",
                    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=400&h=400&fit=crop"
                  },
                  { 
                    title: "Yoga Anatomy", 
                    content: "Basic understanding of the body's systems, alignment principles, and how to practice safely.",
                    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop"
                  },
                  { 
                    title: "Teaching Methodology", 
                    content: "Fundamentals of class sequencing, verbal cues, hands-on adjustments, and building positive communication.",
                    image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=400&h=400&fit=crop"
                  },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-72 snap-start"
                  >
                    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-card h-full">
                      {/* Circle Image */}
                      <div className="p-4 flex justify-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      {/* Content */}
                      <div className="p-5 pt-0">
                        <h3 className="font-heading text-lg font-bold text-foreground mb-3 text-center">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== ACCOMMODATION ===== */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <img 
              src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&h=1080&fit=crop"
              alt="Bali yoga retreat accommodation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/60" />
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4 text-center relative z-10">
            {/* Main Title */}
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[0.15em] uppercase mb-8">
              Accommodation
            </h2>
            
            {/* Subtitle */}
            <p className="font-heading text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-16 leading-relaxed">
              A serene yoga retreat in the heart of Bali's sacred Ubud region
            </p>
            
            {/* Location Features */}
            <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <p className="font-heading text-base md:text-lg text-white text-left">
                  10 beautiful waterfalls within 10 km
                </p>
              </div>
              
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Mountain className="w-6 h-6 text-white" />
                </div>
                <p className="font-heading text-base md:text-lg text-white text-left">
                  Private forest with an in-house waterfall
                </p>
              </div>
              
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <p className="font-heading text-base md:text-lg text-white text-left">
                  Peaceful rice-field trekking on-site
                </p>
              </div>
              
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <p className="font-heading text-base md:text-lg text-white text-left">
                  Only 15 km from central Ubud
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Room Types Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-primary uppercase tracking-[0.2em] text-sm mb-3">Choose Your Stay</p>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Room Options
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Rest and recharge in our peaceful living spaces, designed to support your yogic journey
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Triple Sharing",
                  beds: 3,
                  description: "Share your space with two like-minded yogis. A great way to build lasting friendships.",
                  originalPrice: "$1,436",
                  price: "$1,199",
                  images: [
                    "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=400&fit=crop",
                  ],
                  features: ["Hot Water", "AC/Fan", "Wi-Fi", "Daily Clean"],
                  badge: null,
                  isPopular: false,
                },
                {
                  title: "Double Sharing",
                  beds: 2,
                  description: "Share with one roommate. Perfect balance of community and personal space.",
                  originalPrice: "$1,599",
                  price: "$1,349",
                  images: [
                    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=500&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500&h=400&fit=crop",
                  ],
                  features: ["Hot Water", "AC/Fan", "Wi-Fi", "Daily Clean"],
                  badge: "Most Popular",
                  isPopular: true,
                },
                {
                  title: "Private Room",
                  beds: 1,
                  description: "Your own sanctuary for complete privacy and deep personal reflection.",
                  originalPrice: "$2,199",
                  price: "$1,799",
                  images: [
                    "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&h=400&fit=crop",
                  ],
                  features: ["Hot Water", "AC/Fan", "Wi-Fi", "Daily Clean"],
                  badge: "Premium",
                  isPopular: false,
                },
              ].map((room, roomIndex) => (
                <div 
                  key={roomIndex} 
                  className={`group bg-card rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-elevated ${
                    room.isPopular ? 'border-primary shadow-lg' : 'border-border shadow-card'
                  }`}
                >
                  {/* Image Carousel */}
                  <div className="relative h-52 overflow-hidden">
                    <div 
                      className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide h-full scroll-smooth"
                      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                      {room.images.map((img, idx) => (
                        <div key={idx} className="flex-shrink-0 w-full h-full snap-start">
                          <img 
                            src={img}
                            alt={`${room.title} ${idx + 1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                    
                    {/* Badge */}
                    {room.badge && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          room.isPopular 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-foreground/80 text-background'
                        }`}>
                          {room.badge}
                        </span>
                      </div>
                    )}
                    
                    {/* Slide to explore text */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10">
                      <span className="text-[10px] text-white/80 font-medium tracking-wide bg-black/30 px-2 py-1 rounded-full">
                        Slide to explore
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-heading text-lg font-bold text-foreground">{room.title}</h3>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span className="text-xs">{room.beds} {room.beds === 1 ? 'bed' : 'beds'}</span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {room.description}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {room.features.map((feature) => (
                        <span 
                          key={feature} 
                          className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    {/* Pricing */}
                    <div className="flex items-end justify-between pt-4 border-t border-border mb-4">
                      <div>
                        <p className="text-muted-foreground line-through text-sm">{room.originalPrice}</p>
                        <p className="font-heading text-2xl font-bold text-foreground">{room.price}</p>
                      </div>
                      <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md">
                        Save 16%
                      </span>
                    </div>
                    
                    {/* Book Now Button */}
                    <Button 
                      onClick={() => setShowEnrollDialog(true)}
                      className={`w-full ${room.isPopular ? 'bg-primary hover:bg-primary/90' : 'bg-foreground hover:bg-foreground/90'} text-background font-semibold py-2.5`}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Common Amenities */}
            <div className="mt-16 max-w-4xl mx-auto">
              <h3 className="font-heading text-xl font-bold text-center text-foreground mb-8">
                All Rooms Include
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Wifi, label: "Free Wi-Fi" },
                  { icon: Droplets, label: "Hot Water" },
                  { icon: Wind, label: "AC / Fan" },
                  { icon: Sparkles, label: "Daily Cleaning" },
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground text-sm">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ===== SATTVIC FOOD ===== */}
        <section className="py-20 bg-secondary/20 relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent/5 translate-y-1/2 -translate-x-1/2" />
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header - Always Visible */}
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <UtensilsCrossed className="w-4 h-4" />
                Nourishment for Body & Soul
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
                Sattvic Food Experience
              </h2>
              {/* Decorative Leaf/Plant Icon */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
                <svg className="w-10 h-10 text-primary" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 36 C20 36 20 20 20 12 C20 4 28 2 36 6 C36 14 30 20 20 20" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 20 C10 20 4 14 4 6 C12 2 20 4 20 12" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Three daily meals prepared with love, following ancient yogic principles 
                to support your practice and elevate your consciousness.
              </p>
            </div>

            {/* Food Philosophy Grid - Always Visible */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
              {foodPhilosophy.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index}
                    className="group text-center p-6 bg-background rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-heading font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Collapsible Section - Daily Meals & More */}
            <Collapsible open={isFoodSectionOpen} onOpenChange={handleFoodSectionToggle}>
              {/* Collapse Trigger */}
              <CollapsibleTrigger asChild>
                <div ref={foodTriggerRef} className="text-center mb-10 cursor-pointer group scroll-mt-24">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-background rounded-full border border-border hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-card">
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      A Day of Mindful Eating
                    </h3>
                    <ChevronDown className={`w-6 h-6 text-primary transition-transform duration-300 ${isFoodSectionOpen ? 'rotate-180' : ''}`} />
                  </div>
                  <p className="text-primary/70 text-sm mt-3 group-hover:text-primary transition-colors">
                    {isFoodSectionOpen ? 'Click to collapse' : 'Click to expand'}
                  </p>
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <div className="pb-8">
                  {/* Daily Meals */}
                  <div className="max-w-6xl mx-auto">
              
              <div className="grid md:grid-cols-3 gap-8">
                {foodMenu.map((meal, index) => {
                  const MealIcon = meal.icon;
                  return (
                    <div 
                      key={index}
                      className="group relative bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-elevated"
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={meal.image} 
                          alt={meal.meal}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        
                        {/* Time Badge */}
                        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm">
                          <Clock className="w-3.5 h-3.5 text-primary" />
                          <span className="text-xs font-medium text-foreground">{meal.time}</span>
                        </div>
                        
                        {/* Meal Title */}
                        <div className="absolute bottom-4 left-4">
                          <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                              <MealIcon className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <h4 className="font-heading text-2xl font-bold text-white">{meal.meal}</h4>
                          </div>
                        </div>
                      </div>
                      
                      {/* Menu Items */}
                      <div className="p-6">
                        <ul className="space-y-3">
                          {meal.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Dietary Options */}
              <div className="mt-16">
                <h3 className="font-heading text-2xl font-bold text-center text-foreground mb-8">
                  Dietary Requirements We Accommodate
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {dietaryOptions.map((option, index) => {
                    const OptionIcon = option.icon;
                    return (
                      <div 
                        key={index}
                        className="group text-center p-4 bg-background rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <OptionIcon className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="font-heading font-semibold text-foreground text-sm mb-1">{option.name}</h4>
                        <p className="text-xs text-muted-foreground">{option.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </section>

        {/* ===== UPCOMING DATES ===== */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Upcoming Course Dates
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Choose your preferred dates and begin your transformation journey
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Dates List */}
              <div className="lg:col-span-2 space-y-4">
                {upcomingDates.map((date, index) => (
                  <div 
                    key={index}
                    className="flex flex-wrap items-center justify-between p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-foreground">{date.date}</h4>
                        <p className="text-sm text-muted-foreground">{date.spotsLeft} spots left</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-3 sm:mt-0">
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                        Save {date.earlyBirdSaving}
                      </span>
                      <Button 
                        size="sm"
                        onClick={() => setShowEnrollDialog(true)}
                      >
                        Enroll
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pricing Card */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded-xl overflow-hidden sticky top-24">
                  {/* Header */}
                  <div className="bg-primary text-primary-foreground p-4 text-center">
                    <h3 className="font-heading font-bold text-lg tracking-wide">100 HOUR YOGA TTC FEES</h3>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-5">
                    <p className="text-center text-foreground font-medium border-b border-border pb-4">
                      Course Duration: 11 Nights / 12 Days
                    </p>
                    
                    {/* Triple Sharing */}
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Triple Sharing</p>
                      <p className="font-heading text-2xl font-bold text-foreground">
                        $1,199
                      </p>
                      <p className="text-muted-foreground line-through text-sm">
                        $1,436
                      </p>
                    </div>
                    
                    {/* Double Sharing */}
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Double Sharing</p>
                      <p className="font-heading text-2xl font-bold text-foreground">
                        $1,349
                      </p>
                      <p className="text-muted-foreground line-through text-sm">
                        $1,599
                      </p>
                    </div>
                    
                    {/* Private Room */}
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Private Room</p>
                      <p className="font-heading text-2xl font-bold text-foreground">
                        $1,799
                      </p>
                      <p className="text-muted-foreground line-through text-sm">
                        $2,199
                      </p>
                    </div>
                    
                    {/* CTA */}
                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={() => setShowEnrollDialog(true)}
                    >
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== GOOGLE REVIEWS ===== */}
        <section className="py-20 bg-secondary/30 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            {/* Header with Google Branding */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="font-heading text-xl font-semibold text-foreground">Google Reviews</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Our Students Say
              </h2>
              
              {/* Overall Rating */}
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="font-heading text-5xl font-bold text-foreground">5.0</span>
                <div className="text-left">
                  <div className="flex gap-0.5 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Based on 127 reviews</p>
                </div>
              </div>
            </div>
            
            {/* Reviews Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  name: "Priya Sharma",
                  location: "Mumbai, India",
                  avatar: "PS",
                  rating: 5,
                  date: "2 weeks ago",
                  text: "The 100-hour YTTC at YogaGarhi was a perfect introduction to yoga. The teachers are patient and knowledgeable. The Bali location is absolutely stunning."
                },
                {
                  name: "Emma Thompson",
                  location: "London, UK",
                  avatar: "ET",
                  rating: 5,
                  date: "1 month ago",
                  text: "I came as a complete beginner and left with confidence. The small group size meant I got personal attention. Best decision I've ever made!"
                },
                {
                  name: "Michael Chen",
                  location: "Sydney, Australia",
                  avatar: "MC",
                  rating: 5,
                  date: "3 weeks ago",
                  text: "The 100-hour course gave me a solid foundation. The daily schedule was intensive but balanced. I'm now ready to pursue my 200-hour certification."
                },
                {
                  name: "Sarah Williams",
                  location: "California, USA",
                  avatar: "SW",
                  rating: 5,
                  date: "1 month ago",
                  text: "YogaGarhi exceeded all my expectations. The philosophy classes opened my eyes to the deeper meaning of yoga. Truly transformative."
                },
                {
                  name: "Anika Mueller",
                  location: "Berlin, Germany",
                  avatar: "AM",
                  rating: 5,
                  date: "2 months ago",
                  text: "Perfect for beginners! The multi-style approach helped me understand different yoga traditions. The food was amazing and the accommodation was comfortable."
                },
                {
                  name: "James O'Brien",
                  location: "Dublin, Ireland",
                  avatar: "JO",
                  rating: 5,
                  date: "6 weeks ago",
                  text: "12 days that changed my life. The morning meditation sessions at sunrise were magical. I highly recommend this course to anyone wanting to start their yoga journey."
                },
              ].map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </div>
            
            {/* View All Reviews Link */}
            <div className="text-center mt-10">
              <a 
                href="https://maps.app.goo.gl/qE7ouyMxUyLsRhNk6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
              >
                View all reviews on Google
                <ChevronDown className="w-4 h-4 -rotate-90" />
              </a>
            </div>
          </div>
        </section>

        {/* ===== BOOK A CALL ===== */}
        <section id="book-call" className="py-20 bg-secondary/20 relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/5 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 translate-x-1/2 translate-y-1/2" />
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Do you have any questions?
            </h2>
            
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-muted-foreground mb-8">
                We're here to help you make the right decision. Reach out to us and we'll get back to you within 24 hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => setShowQuickEnquiryDialog(true)}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Send Enquiry
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://wa.me/917895350563" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp Us
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="mailto:yogagarhi@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ===== LOCATION & MAP ===== */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Location
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Ds Madangan Kaja, Desa Petak, Petak Kaja, Kec. Gianyar, Kabupaten Gianyar, Bali 80515, Indonesia
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden bg-muted shadow-elevated">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.5!2d115.3!3d-8.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd217a4e2d26eaf%3A0x5b5a8f3b5f9b9c0a!2sYoga%20Teacher%20Training%20in%20Bali%20-%20Yogagarhi!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yogagarhi Location - Gianyar, Bali"
                />
              </div>
              
              {/* Location Details */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="outline" asChild>
                  <a 
                    href="https://maps.app.goo.gl/u6pCMseX1a6ADLCA8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Open in Google Maps
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Open 24 hours</span> • Gianyar, Bali
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="py-20 relative overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/85" />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <p className="text-center text-primary-foreground/70 uppercase tracking-widest text-sm mb-4">
              Your Journey Awaits
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-center text-primary-foreground mb-6">
              Ready to Begin?
            </h2>
            <p className="text-center text-primary-foreground/80 max-w-2xl mx-auto mb-12">
              Take the first step towards deepening your yoga practice
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                onClick={() => setShowEnrollDialog(true)}
              >
                Start Your Journey
              </Button>
              <Button 
                size="lg" 
                className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => setShowManualDialog(true)}
              >
                Free Manual
              </Button>
              <Button 
                size="lg" 
                className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
                asChild
              >
                <a href="https://wa.me/917895350563" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </section>
      </Layout>

      {/* ===== ENROLLMENT DIALOG ===== */}
      <Dialog open={showEnrollDialog} onOpenChange={setShowEnrollDialog}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">Enroll Now</DialogTitle>
            <p className="text-sm text-muted-foreground">
              Fill in your details to begin your yoga journey
            </p>
          </DialogHeader>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Full Name <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                value={enrollForm.name}
                onChange={(e) => setEnrollForm(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address <span className="text-destructive">*</span>
              </label>
              <input
                type="email"
                value={enrollForm.email}
                onChange={(e) => setEnrollForm(prev => ({ ...prev, email: e.target.value }))}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            
            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Phone Number <span className="text-destructive">*</span>
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
            
            {/* Course Name */}
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
            
            {/* Course Date */}
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
            
            {/* Accommodation */}
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
            
            {/* Gender */}
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
            
            {/* Country */}
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
            
            {/* Source */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                How did you hear about us? <span className="text-destructive">*</span>
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
            
            {/* Message */}
            <div className="md:col-span-2">
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
            {/* Name */}
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
            
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email <span className="text-destructive">*</span>
              </label>
              <Input
                type="email"
                required
                value={quickEnquiryForm.email}
                onChange={(e) => setQuickEnquiryForm(prev => ({ ...prev, email: e.target.value }))}
                placeholder="your@email.com"
              />
            </div>
            
            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message <span className="text-destructive">*</span>
              </label>
              <Textarea
                required
                value={quickEnquiryForm.message}
                onChange={(e) => setQuickEnquiryForm(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Tell us about your interest in yoga teacher training..."
                className="min-h-[120px]"
              />
            </div>
            
            {/* Trust Badge */}
            <div className="bg-accent/20 rounded-lg p-4">
              <p className="text-sm text-foreground">
                We Trust The Depth Of What We Offer. If, After The First Day, You Feel This Journey Is Not Meant For You, We Will Offer A 100% Full Refund With Complete Respect.
              </p>
            </div>
            
            <Button type="submit" className="w-full" size="lg">
              Submit Enquiry
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-elevated hover:bg-primary/90 transition-all duration-300 flex items-center justify-center animate-fade-in hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronDown className="w-6 h-6 rotate-180" />
        </button>
      )}
    </>
  );
}
