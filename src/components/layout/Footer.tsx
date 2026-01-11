import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, Heart } from "lucide-react";
import logo from "@/assets/yogagarhi-logo-hd-preview.png";

const courses = [
  { name: "100 Hour YTTC", href: "/courses/100-hour" },
  { name: "200 Hour YTTC", href: "/courses/200-hour" },
  { name: "300 Hour YTTC", href: "/courses/300-hour" },
];

const explore = [
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

// Decorative Mandala for footer
const FooterMandala = () => (
  <svg
    className="w-32 h-32 text-primary-foreground/10"
    viewBox="0 0 100 100"
    fill="none"
  >
    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="24" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="0.5" />
    {[...Array(8)].map((_, i) => (
      <line
        key={i}
        x1="50"
        y1="2"
        x2="50"
        y2="98"
        stroke="currentColor"
        strokeWidth="0.3"
        transform={`rotate(${i * 22.5} 50 50)`}
      />
    ))}
    {[...Array(6)].map((_, i) => (
      <ellipse
        key={`petal-${i}`}
        cx="50"
        cy="20"
        rx="8"
        ry="18"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
        transform={`rotate(${i * 60} 50 50)`}
      />
    ))}
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Mandala Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-50 pointer-events-none">
        <FooterMandala />
      </div>
      <div className="absolute left-0 bottom-0 -translate-x-1/3 translate-y-1/4 opacity-30 pointer-events-none">
        <FooterMandala />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Top Section - Logo & Tagline */}
        <div className="text-center mb-12 pb-12 border-b border-primary-foreground/10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img src={logo} alt="YogaGarhi" className="h-16 w-16 object-contain" />
            <span className="font-heading text-3xl font-bold tracking-wide">YogaGarhi</span>
          </div>
          <p className="text-primary-foreground/70 max-w-lg mx-auto font-heading text-lg italic">
            "Where ancient wisdom meets modern practice"
          </p>
        </div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Courses */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest mb-4 text-primary-foreground/60">
              Courses
            </h3>
            <ul className="space-y-2">
              {courses.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest mb-4 text-primary-foreground/60">
              Explore
            </h3>
            <ul className="space-y-2">
              {explore.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest mb-4 text-primary-foreground/60">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="tel:+917895350563" 
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Phone className="h-4 w-4" />
                  +91-7895350563
                </a>
              </li>
              <li>
                <a 
                  href="mailto:yogagarhi@gmail.com" 
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  yogagarhi@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest mb-4 text-primary-foreground/60">
              Location
            </h3>
            <div className="flex items-start gap-2 text-primary-foreground/80 text-sm">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>Gianyar, Bali, Indonesia</span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <a 
            href="https://instagram.com/yogagarhi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10 hover:border-primary-foreground/40 transition-all"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a 
            href="https://facebook.com/yogagarhi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10 hover:border-primary-foreground/40 transition-all"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a 
            href="https://youtube.com/@yogagarhi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10 hover:border-primary-foreground/40 transition-all"
            aria-label="YouTube"
          >
            <Youtube className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10 bg-primary-foreground/5">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} YogaGarhi. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-3 w-3 fill-current text-red-400" /> in Bali
          </p>
        </div>
      </div>
    </footer>
  );
}
