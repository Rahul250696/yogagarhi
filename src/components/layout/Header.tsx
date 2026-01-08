import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/yogagarhi-logo.png";

const courses = [
  { name: "100 Hour YTTC", href: "/courses/100-hour" },
  { name: "200 Hour YTTC", href: "/courses/200-hour" },
  { name: "300 Hour YTTC", href: "/courses/300-hour" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Yoga Courses", href: "#", dropdown: courses },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm">
        <p className="max-w-5xl mx-auto">
          We trust the depth of what we offer. If, after the first day, you feel this journey is not meant for you, we will offer a 100% full refund.
        </p>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="YogaGarhi" className="h-14 w-14 object-contain" />
              <span className="font-heading text-2xl font-bold text-primary hidden sm:block">
                YOGAGARHI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.dropdown ? (
                    <button
                      className={`flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors font-medium ${
                        location.pathname.startsWith("/courses") ? "text-primary" : ""
                      }`}
                      onMouseEnter={() => setCoursesOpen(true)}
                      onMouseLeave={() => setCoursesOpen(false)}
                    >
                      {link.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className={`text-foreground/80 hover:text-primary transition-colors font-medium ${
                        isActive(link.href) ? "text-primary" : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {link.dropdown && (
                    <div
                      className={`absolute top-full left-0 mt-2 w-56 bg-card rounded-lg shadow-elevated overflow-hidden transition-all duration-200 ${
                        coursesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                      }`}
                      onMouseEnter={() => setCoursesOpen(true)}
                      onMouseLeave={() => setCoursesOpen(false)}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-3 hover:bg-secondary transition-colors text-foreground/80 hover:text-primary"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-primary transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Start Your Journey</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-card shadow-elevated transition-all duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setCoursesOpen(!coursesOpen)}
                      className="w-full flex items-center justify-between py-3 text-foreground/80 hover:text-primary transition-colors font-medium"
                    >
                      {link.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${coursesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {coursesOpen && (
                      <div className="pl-4 flex flex-col gap-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setIsOpen(false)}
                            className="py-2 text-foreground/60 hover:text-primary transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 text-foreground/80 hover:text-primary transition-colors font-medium ${
                      isActive(link.href) ? "text-primary" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Button variant="cta" size="lg" className="mt-4" asChild>
              <Link to="/contact" onClick={() => setIsOpen(false)}>Start Your Journey</Link>
            </Button>
          </nav>
        </div>
      </header>
    </>
  );
}
