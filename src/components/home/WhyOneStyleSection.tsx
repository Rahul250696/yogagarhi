import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import heroImage from "@/assets/hero-yoga-bali.jpg";

// Quiz Questions
const quizQuestions = [
  {
    question: "How do you typically start your mornings?",
    options: [
      "With energy and movement",
      "Slowly and mindfully",
      "It varies day to day",
      "With structure and routine"
    ]
  },
  {
    question: "When facing challenges, you tend to:",
    options: [
      "Take action immediately",
      "Reflect before responding",
      "Seek guidance from others",
      "Analyze all options first"
    ]
  },
  {
    question: "Your ideal yoga practice feels:",
    options: [
      "Dynamic and energizing",
      "Calm and restorative",
      "Balanced and flowing",
      "Precise and aligned"
    ]
  }
];

export default function WhyOneStyleSection() {
  const [showQuizDialog, setShowQuizDialog] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showQuizThankYou, setShowQuizThankYou] = useState(false);

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setEmail("");
    setEmailError("");
  };

  const handleQuizAnswer = (answer: string) => {
    setQuizAnswers([...quizAnswers, answer]);
    setQuizStep(quizStep + 1);
  };

  const handleQuizSubmit = () => {
    if (!email) {
      setEmailError("Please enter your email address");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setShowQuizDialog(false);
    setShowQuizThankYou(true);
  };

  return (
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
            Prakriti and Multistyle Yoga Teacher Training
          </h2>
          <p className="font-heading text-xl text-center text-primary-foreground/90 mb-8 italic">
            Why We Teach Authentic Multi-Style & Prakriti-Based Yoga
          </p>
          
          <div className="space-y-6 text-white/90 leading-relaxed text-center max-w-3xl mx-auto mb-12">
            <p>
              Every human being is unique. Your body, your energy, your mind, they are unlike 
              anyone else's. So why should your yoga practice be the same as everyone else's?
            </p>
            <p>
              At Yogagarhi, we teach multi-style yoga not to confuse, but to liberate. 
              By understanding Hatha, Vinyasa, Ashtanga, and Iyengar as complete systems, 
              you learn to adapt yoga to the individual, not force the individual into yoga.
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
                      <div className="space-y-2">
                        <input
                          type="email"
                          placeholder="Your email address *"
                          className={`w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary ${emailError ? 'border-red-500' : 'border-border'}`}
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (emailError) setEmailError("");
                          }}
                        />
                        {emailError && (
                          <p className="text-sm text-red-500">{emailError}</p>
                        )}
                      </div>
                      <Button 
                        className="w-full" 
                        size="lg" 
                        onClick={handleQuizSubmit}
                      >
                        Submit & Receive My Insight
                      </Button>
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
            
            {/* Quiz Thank You Dialog */}
            <Dialog open={showQuizThankYou} onOpenChange={(open) => {
              setShowQuizThankYou(open);
              if (!open) resetQuiz();
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
                      Your personalized yogic energy insight is on its way to <span className="font-medium text-foreground">{email}</span>
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground">
                    <p>Please check your inbox (and spam folder) within the next 24 hours.</p>
                  </div>
                  <Button 
                    onClick={() => {
                      setShowQuizThankYou(false);
                      resetQuiz();
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
      </div>
    </section>
  );
}
