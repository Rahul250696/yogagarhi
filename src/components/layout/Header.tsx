import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEnrollment } from "@/components/EnrollmentDialog";
import logo from "@/assets/yogagarhi-logo.png";

// Yoga pose SVG icons
const TreePoseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="currentColor">
    <path d="M12 2c-.5 0-1 .19-1.41.59L8 5.17V8c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V5.17l-2.59-2.58C13 2.19 12.5 2 12 2zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1 5v3H9v2h2v6h2v-6h2v-2h-2v-3h-2z"/>
  </svg>
);

const WarriorPoseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="currentColor">
    <path d="M12 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM4 9l4 1v4l-3 7h2.5l2.5-5.5 2 2V22h2v-5.5l-2-2.5v-4l4.5 1L18 9l-6-2-6 2h-2z"/>
  </svg>
);

const LotusPoseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="currentColor">
    <path d="M12 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM7.5 8C5.5 8 4 10 4 12.5S5.5 17 7.5 17H9v5h2v-5h2v5h2v-5h1.5c2 0 3.5-2 3.5-4.5S18.5 8 16.5 8H15c-.6-1.2-1.9-2-3-2s-2.4.8-3 2H7.5z"/>
  </svg>
);

const courses = [
  { name: "100 Hour YTTC", href: "/courses/100-hour", icon: TreePoseIcon },
  { name: "200 Hour YTTC", href: "/courses/200-hour", icon: WarriorPoseIcon },
  { name: "300 Hour YTTC", href: "/courses/300-hour", icon: LotusPoseIcon },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "#", dropdown: courses },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { setShowEnrollDialog } = useEnrollment();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setCoursesOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;
  const isCoursesActive = location.pathname.startsWith("/courses");

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/98 backdrop-blur-md shadow-md py-2' 
          : 'bg-background py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <img 
                src={logo} 
                alt="YogaGarhi" 
                className={`object-contain transition-all duration-300 ${
                  scrolled ? 'h-10 w-10' : 'h-12 w-12'
                }`} 
              />
              <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-bold text-primary tracking-wide transition-all duration-300 ${
                scrolled ? 'text-lg' : 'text-xl'
              }`}>
                YOGAGARHI
              </span>
              <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase hidden sm:block">
                Transform Within
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center bg-secondary/30 rounded-full px-2 py-1.5">
              {navLinks.map((link, index) => (
                <div key={link.name} className="relative">
                  {link.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setCoursesOpen(true)}
                      onMouseLeave={() => setCoursesOpen(false)}
                    >
                      <button
                        className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          isCoursesActive 
                            ? 'bg-primary text-primary-foreground' 
                            : 'text-foreground/70 hover:text-primary hover:bg-secondary/50'
                        }`}
                      >
                        {link.name}
                        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          coursesOpen ? 'rotate-180' : ''
                        }`} />
                      </button>

                      {/* Dropdown */}
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-card rounded-2xl shadow-xl border border-border/50 overflow-hidden transition-all duration-300 ${
                          coursesOpen 
                            ? 'opacity-100 visible translate-y-0' 
                            : 'opacity-0 invisible -translate-y-4'
                        }`}
                      >
                        <div className="p-2">
                          {link.dropdown.map((item, i) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className={`block px-4 py-3 rounded-xl text-sm transition-all duration-200 ${
                                location.pathname === item.href
                                  ? 'bg-primary/10 text-primary font-medium'
                                  : 'text-foreground/70 hover:bg-secondary hover:text-primary'
                              }`}
                            >
                              <span className="flex items-center gap-3">
                                <item.icon />
                                {item.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        isActive(link.href) 
                          ? 'bg-primary text-primary-foreground' 
                          : 'text-foreground/70 hover:text-primary hover:bg-secondary/50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Right Side - CTA */}
          <div className="flex items-center gap-3">
            <Button 
              variant="cta" 
              size="default"
              className="hidden sm:flex"
              onClick={() => setShowEnrollDialog(true)}
            >
              Begin Journey
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-full hover:bg-secondary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-foreground rounded-full transition-all duration-300 origin-left ${
                  isOpen ? 'rotate-45 translate-x-0.5' : ''
                }`} />
                <span className={`w-full h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                  isOpen ? 'opacity-0 translate-x-4' : ''
                }`} />
                <span className={`w-full h-0.5 bg-foreground rounded-full transition-all duration-300 origin-left ${
                  isOpen ? '-rotate-45 translate-x-0.5' : ''
                }`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slide Down */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background border-t border-border/50 shadow-lg transition-all duration-400 overflow-hidden ${
          isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => setCoursesOpen(!coursesOpen)}
                    className={`w-full flex items-center justify-between py-3 px-4 rounded-xl text-base font-medium transition-all ${
                      isCoursesActive 
                        ? 'bg-primary/10 text-primary' 
                        : 'text-foreground/80 hover:bg-secondary'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                      coursesOpen ? 'rotate-180' : ''
                    }`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    coursesOpen ? 'max-h-48 mt-1' : 'max-h-0'
                  }`}>
                    <div className="pl-4 flex flex-col gap-1 pb-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-3 py-2.5 px-4 rounded-lg text-sm transition-all ${
                            location.pathname === item.href
                              ? 'bg-primary/10 text-primary font-medium'
                              : 'text-foreground/60 hover:text-primary hover:bg-secondary/50'
                          }`}
                        >
                          <item.icon />
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
                  className={`block py-3 px-4 rounded-xl text-base font-medium transition-all ${
                    isActive(link.href) 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-foreground/80 hover:bg-secondary hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          
          <div className="pt-4 mt-2 border-t border-border/50">
            <Button 
              variant="cta" 
              size="lg" 
              className="w-full"
              onClick={() => {
                setShowEnrollDialog(true);
                setIsOpen(false);
              }}
            >
              Begin Your Journey
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
