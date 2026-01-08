import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-yoga-bali.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl opacity-90">
            Begin your transformation journey with us
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center text-foreground mb-12">
            Contact Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a
              href="https://wa.me/+917895350563"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <MessageCircle className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <p className="font-semibold text-foreground">+91-7895350563</p>
              <p className="text-sm text-muted-foreground">WhatsApp</p>
            </a>

            <a
              href="tel:+917895350563"
              className="flex flex-col items-center p-8 bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <Phone className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <p className="font-semibold text-foreground">+91-7895350563</p>
              <p className="text-sm text-muted-foreground">Call Us</p>
            </a>

            <a
              href="mailto:yogagarhi@gmail.com"
              className="flex flex-col items-center p-8 bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <Mail className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <p className="font-semibold text-foreground">yogagarhi@gmail.com</p>
              <p className="text-sm text-muted-foreground">Email Us</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form Info */}
            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Quick Enquiry
              </h2>
              <p className="text-lg text-muted-foreground">
                Connect with us and begin your journey of transformation. Fill out the form and we'll guide you every step of the way.
              </p>
              <div className="bg-accent/20 rounded-lg p-6">
                <p className="text-foreground font-medium">
                  We Trust The Depth Of What We Offer. If, After The First Day, You Feel This Journey Is Not Meant For You, We Will Offer A 100% Full Refund With Complete Respect.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Ds madangan kaja, Desa petak, Petak kaja, Kec. Gianyar, Kabupaten Gianyar, Bali 80515, Indonesia
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full min-h-[150px]"
                    placeholder="Tell us about your interest in yoga teacher training..."
                  />
                </div>
                <Button variant="cta" size="xl" type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
