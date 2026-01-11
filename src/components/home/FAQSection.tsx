import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, MessageCircle, HelpCircle, Plane, Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqCategories = [
  { id: "travel", label: "Travel & Visa", icon: Plane },
  { id: "schedule", label: "Schedule", icon: Calendar },
  { id: "stay", label: "Stay & Location", icon: MapPin },
];

const faqs = [
  {
    category: "travel",
    question: "What kind of visa do I need to join the course in Bali?",
    answer: "Most students apply for a tourist visa to attend the training. We will guide you with the process once your booking is confirmed.",
  },
  {
    category: "travel",
    question: "Is Bali safe for solo travelers, especially women?",
    answer: "Yes, Bali is generally very safe for solo travelers, including women. With friendly locals and a vibrant travel community, it's easy to explore safely by following basic precautions and local guidelines.",
  },
  {
    category: "travel",
    question: "How do I reach the school from the airport?",
    answer: "We arrange airport pickup from Denpasar (Ngurah Rai International Airport) to make your arrival smooth and easy.",
  },
  {
    category: "schedule",
    question: "What is the best time of year to join the training?",
    answer: "The course runs year-round, but April to October (dry season) is the most pleasant time for yoga and outdoor activities.",
  },
  {
    category: "schedule",
    question: "Will I have free time during the course?",
    answer: "Yes, you will get short breaks between classes and free evenings. Weekends are lighter and often include excursions, giving you time to explore Bali.",
  },
  {
    category: "stay",
    question: "Can I stay longer in Bali after the course ends?",
    answer: "Yes, many students extend their stay. Our team can guide you with local stays, travel tips, and activities.",
  },
];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("travel");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = faqs.filter(faq => faq.category === activeCategory);

  return (
    <section className="py-20 bg-background overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Header & Categories */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-primary" />
                </div>
                <span className="text-primary font-medium tracking-wide uppercase text-sm">Got Questions?</span>
              </div>
              
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                Frequently<br />Asked Questions
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Everything you need to know about our yoga teacher training courses in Bali. 
                Can't find your answer? Reach out to us directly.
              </p>

              {/* Category Tabs */}
              <div className="space-y-2 mb-8">
                {faqCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setOpenIndex(0);
                    }}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left group ${
                      activeCategory === cat.id 
                        ? 'bg-primary text-primary-foreground shadow-lg' 
                        : 'bg-secondary/50 hover:bg-secondary text-foreground'
                    }`}
                  >
                    <cat.icon className={`w-5 h-5 ${activeCategory === cat.id ? 'text-primary-foreground' : 'text-primary'}`} />
                    <span className="font-medium">{cat.label}</span>
                    <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${
                      activeCategory === cat.id ? 'rotate-180' : ''
                    }`} />
                  </button>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="p-6 bg-secondary/30 rounded-2xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Still have questions?</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      We're here to help you on your yoga journey.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    openIndex === index 
                      ? 'bg-card border-primary/30 shadow-card' 
                      : 'bg-card/50 border-border hover:border-primary/20'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-start gap-4 p-6 text-left"
                  >
                    {/* Number Badge */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-heading font-bold text-sm transition-colors ${
                      openIndex === index 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-secondary text-foreground'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    
                    <div className="flex-1 pt-2">
                      <h3 className={`font-heading text-lg font-semibold transition-colors ${
                        openIndex === index ? 'text-primary' : 'text-foreground'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>
                    
                    <div className={`w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4 text-foreground" />
                    </div>
                  </button>
                  
                  {/* Answer */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}>
                    <div className="px-6 pb-6 pl-20">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Note */}
            <div className="mt-8 flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>We typically respond within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
