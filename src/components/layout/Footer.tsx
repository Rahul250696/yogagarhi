import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/yogagarhi-logo.png";

const quickLinks = [
  { name: "100 Hour YTTC", href: "/courses/100-hour" },
  { name: "200 Hour YTTC", href: "/courses/200-hour" },
  { name: "300 Hour YTTC", href: "/courses/300-hour" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="YogaGarhi" className="h-12 w-12 object-contain brightness-0 invert" />
              <span className="font-heading text-2xl font-bold">YogaGarhi</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              We are one of the most reputed yoga schools in Bali, Indonesia. The purpose of our school is to spread authentic yoga in modern & practical way.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6">Yoga Courses</h3>
            <ul className="space-y-3">
              {quickLinks.slice(0, 3).map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6">Important Links</h3>
            <ul className="space-y-3">
              {quickLinks.slice(3).map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6">Contact with Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Ds madangan kaja, Desa petak, Petak kaja, Kec. Gianyar, Kabupaten Gianyar, Bali 80515, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+917895350563" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +91-7895350563
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:yogagarhi@gmail.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  yogagarhi@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 text-center text-primary-foreground/60">
          <p>© {new Date().getFullYear()} YogaGarhi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
