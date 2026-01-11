import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { useEnrollment } from "@/components/EnrollmentDialog";
import heroImage from "@/assets/hero-yoga-bali.jpg";

const ReadyToBeginSection = () => {
  const { setShowEnrollDialog } = useEnrollment();

  return (
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
          Take the first step towards becoming a certified yoga teacher
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
            asChild
          >
            <Link to="/course/200-hour-yoga-teacher-training">
              Explore Courses
            </Link>
          </Button>
          <Button 
            size="lg" 
            className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
            asChild
          >
            <Link to="/contact">
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </Link>
          </Button>
          <Button 
            size="lg" 
            className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
            asChild
          >
            <a href="https://wa.me/917895350563" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReadyToBeginSection;
