import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function WelcomeSection() {
  // Convert YouTube URL to embed format
  const youtubeVideoId = "U1r2mQRmWXM";
  
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10">
            Yoga Teacher Training in Bali
          </h2>
          
          {/* Welcome Text */}
          <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
            <p>
              Welcome to <strong className="text-foreground">YogaGarhi</strong>, a sacred space where ancient wisdom meets modern living. Rooted in the timeless traditions of yoga and wellness, YogaGarhi is more than just a place to practice – it is a sanctuary for self-discovery, healing, and inner transformation.
            </p>
            
            <p>
              At YogaGarhi, we believe that yoga is not only about postures but a way of life. Our approach blends the depth of classical yogic practices with contemporary insights to create a holistic journey of the body, mind, and soul. With a focus on mindfulness, breathwork, meditation, and authentic teachings, we guide you to reconnect with your true self and find balance in today's fast-paced world.
            </p>
            
            <p>
              Every session at YogaGarhi is designed to inspire peace, strength, and harmony. Whether you are a beginner taking your first step into yoga or an experienced practitioner deepening your practice, our community welcomes you with warmth, compassion, and support.
            </p>
            
            <p>
              YogaGarhi stands for growth, awareness, and the joy of living consciously. Here, every breath is a step towards freedom, every practice a journey towards wholeness.
            </p>
          </div>
          
          {/* YouTube Video */}
          <div className="relative w-full max-w-3xl mx-auto mb-10">
            <div className="relative pt-[56.25%] rounded-xl overflow-hidden shadow-card">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                title="Yoga Teacher Training In Bali | Awaken Your Teacher Within"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          
          {/* CTA Button */}
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link to="/about">More About Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
