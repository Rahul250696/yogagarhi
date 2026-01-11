import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEnrollment } from "@/components/EnrollmentDialog";
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

// Track pages where banner has been shown (persists across navigation)
const seenPages = new Set<string>();

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const location = useLocation();
  const { setShowEnrollDialog } = useEnrollment();

  // Reset banner state when navigating to a new page
  useEffect(() => {
    const currentPath = location.pathname;
    
    // If this page was already seen, mark as dismissed
    if (seenPages.has(currentPath)) {
      setBannerDismissed(true);
      setShowBanner(false);
    } else {
      // New page - reset for fresh banner show
      setBannerDismissed(false);
      setShowBanner(false);
    }
  }, [location.pathname]);

  // Show banner when user starts scrolling (only once per page)
  useEffect(() => {
    const currentPath = location.pathname;
    
    const handleScroll = () => {
      if (!bannerDismissed && !seenPages.has(currentPath) && window.scrollY > 50) {
        setShowBanner(true);
        seenPages.add(currentPath); // Mark this page as seen
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [bannerDismissed, location.pathname]);

  const dismissBanner = () => {
    setShowBanner(false);
    setBannerDismissed(true);
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Top Banner - Shutter Style from Top */}
      <div 
        className={`fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground overflow-hidden transition-all duration-700 ease-out origin-top ${
          showBanner && !bannerDismissed 
            ? 'max-h-20 py-2 opacity-100 translate-y-0' 
            : 'max-h-0 py-0 opacity-0 -translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-center gap-4">
          <p className="text-center text-sm flex-1">
            We trust the depth of what we offer. If, after the first day, you feel this journey is not meant for you, we will offer a 100% full refund.
          </p>
          <button 
            onClick={dismissBanner}
            className="flex-shrink-0 p-1.5 bg-primary-foreground/20 hover:bg-primary-foreground/40 rounded-full transition-all border border-primary-foreground/30 hover:scale-110"
            aria-label="Dismiss banner"
          >
            <X className="h-4 w-4 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Name Below on Mobile */}
            <Link to="/" className="flex items-center gap-3">
              <div className="flex flex-col items-center lg:flex-row lg:gap-3">
                <img src={logo} alt="YogaGarhi" className="h-12 w-12 lg:h-14 lg:w-14 object-contain" />
                <span className="font-heading text-xs lg:text-2xl font-bold text-primary lg:hidden">
                  YOGAGARHI
                </span>
              </div>
              <span className="font-heading text-2xl font-bold text-primary hidden lg:block">
                YOGAGARHI
              </span>
            </Link>

            {/* Mobile CTA Button - Between Logo and Hamburger */}
            <Button 
              variant="cta" 
              size="sm"
              className="lg:hidden text-xs px-3 py-1.5"
              onClick={() => setShowEnrollDialog(true)}
            >
              Start Your Journey
            </Button>

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
              <Button 
                variant="cta" 
                size="lg" 
                onClick={() => setShowEnrollDialog(true)}
              >
                Start Your Journey
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

        {/* Mobile Menu - Shutter Down Animation with Yoga Background */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 shadow-elevated overflow-hidden transition-all duration-500 ease-out origin-top ${
            isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {/* Yoga Poses Background Pattern */}
          <div className="relative bg-card">
            {/* Decorative Yoga Silhouettes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04]">
              {/* Lotus Pose - Top Right */}
              <svg className="absolute top-4 right-4 w-24 h-24 text-primary" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 20c-5 0-10 5-15 15-5 10-5 20 0 25s15 5 15 5 10 0 15-5 5-15 0-25c-5-10-10-15-15-15zm0 35c-8 0-12-5-12-10s4-15 12-15 12 10 12 15-4 10-12 10z"/>
                <path d="M50 60c-3 0-5 2-5 5v15c0 3 2 5 5 5s5-2 5-5V65c0-3-2-5-5-5z"/>
                <circle cx="35" cy="70" r="8"/>
                <circle cx="65" cy="70" r="8"/>
              </svg>
              
              {/* Tree Pose - Bottom Left */}
              <svg className="absolute bottom-10 left-6 w-20 h-28 text-primary" viewBox="0 0 60 100" fill="currentColor">
                <circle cx="30" cy="10" r="8"/>
                <path d="M30 20v25"/>
                <path d="M30 45c0 0-15-10-15-20" strokeWidth="3" stroke="currentColor" fill="none"/>
                <path d="M30 45c0 0 15-10 15-20" strokeWidth="3" stroke="currentColor" fill="none"/>
                <path d="M30 45v35"/>
                <path d="M20 80h20"/>
                <path d="M25 60c-10 5-15 0-15-5"/>
              </svg>
              
              {/* Warrior Pose - Center Right */}
              <svg className="absolute top-1/2 right-8 w-28 h-20 text-primary -translate-y-1/2" viewBox="0 0 120 80" fill="currentColor">
                <circle cx="60" cy="10" r="7"/>
                <path d="M60 18v20"/>
                <path d="M40 38h40"/>
                <path d="M60 38l-25 30"/>
                <path d="M60 38l25 30"/>
              </svg>
              
              {/* Om Symbol - Bottom Right */}
              <svg className="absolute bottom-6 right-10 w-16 h-16 text-primary" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 40c-5 0-8-4-8-10s4-12 12-12c6 0 10 4 10 10"/>
                <path d="M34 28c0-6 4-10 10-10s10 6 10 14c0 10-8 18-20 18"/>
                <circle cx="48" cy="16" r="4" fill="currentColor"/>
                <path d="M52 8c4 0 6 2 6 6"/>
              </svg>
              
              {/* Mandala Pattern - Top Left */}
              <svg className="absolute top-8 left-8 w-20 h-20 text-primary" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="40" cy="40" r="35"/>
                <circle cx="40" cy="40" r="25"/>
                <circle cx="40" cy="40" r="15"/>
                <circle cx="40" cy="40" r="5"/>
                <path d="M40 5v70M5 40h70M12 12l56 56M68 12L12 68"/>
              </svg>
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-card via-card/95 to-card pointer-events-none" />
            
            {/* Navigation Content */}
            <nav className="relative z-10 container mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <div 
                  key={link.name}
                  className={`transform transition-all duration-300 ${
                    isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: isOpen ? `${index * 50}ms` : "0ms" }}
                >
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setCoursesOpen(!coursesOpen)}
                        className="w-full flex items-center justify-between py-3 text-foreground/80 hover:text-primary transition-colors font-medium"
                      >
                        {link.name}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${coursesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${coursesOpen ? "max-h-40" : "max-h-0"}`}>
                        <div className="pl-4 flex flex-col gap-1 pb-2">
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
                      </div>
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
              
              {/* Social Links */}
              <div 
                className={`flex items-center justify-center gap-4 py-4 border-t border-border/50 mt-2 transform transition-all duration-300 ${
                  isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: isOpen ? `${navLinks.length * 50}ms` : "0ms" }}
              >
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
              
              <Button 
                variant="cta" 
                size="lg" 
                className={`mt-2 transform transition-all duration-300 ${
                  isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: isOpen ? `${(navLinks.length + 1) * 50}ms` : "0ms" }}
                onClick={() => {
                  setShowEnrollDialog(true);
                  setIsOpen(false);
                }}
              >
                Start Your Journey
              </Button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
