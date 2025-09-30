import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import SpidaLogo from "./SpidaLogo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: "Home", href: "/", section: "home" },
    { name: "About", href: "/about", section: "about" },
    { name: "Products", href: "/products", section: "top" },
    { name: "Blog", href: "/blog", section: "top" },
    { name: "FAQ", href: "/faq", section: "top" },
    { name: "Contact", href: "/#contact", section: "contact" },
  ];

  // Handle scroll detection for header transparency
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (e: React.MouseEvent, sectionId: string | null, href: string) => {
    e.preventDefault();
    
    if (sectionId) {
      if (sectionId === "top") {
        // Special case: scroll to top of the target page
        navigate(href);
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else {
        // This is a section that exists on the home page
        if (location.pathname !== '/') {
          // If not on home page, navigate to home first, then scroll
          navigate('/');
          setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        } else {
          // If already on home page, just scroll
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    } else {
      // This is a regular page navigation
      navigate(href);
      // Always scroll to top when navigating to a new page
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
    
    setIsMenuOpen(false);
  };

  return (
    <header className={`relative z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/20 backdrop-blur-sm border-b border-border/30' 
        : 'bg-background/40 backdrop-blur-sm border-b border-border/50'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={() => {
              // Always scroll to top when clicking logo
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);
            }}
          >
            <SpidaLogo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.section ? (
                <button
                  key={item.name}
                  onClick={(e) => handleSectionClick(e, item.section, item.href)}
                  className="text-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <Button 
              variant="default" 
              className="bg-gradient-primary hover:shadow-glow"
              onClick={(e) => handleSectionClick(e, "contact", "/#contact")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navigation.map((item) => (
                item.section ? (
                  <button
                    key={item.name}
                    onClick={(e) => handleSectionClick(e, item.section, item.href)}
                    className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="px-3 py-2">
                <Button 
                  variant="default" 
                  className="w-full bg-gradient-primary"
                  onClick={(e) => {
                    handleSectionClick(e, "contact", "/#contact");
                    setIsMenuOpen(false);
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;