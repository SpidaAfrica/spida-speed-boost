import { Mail, Phone, MapPin } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import SpidaLogo from "./SpidaLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about", section: null },
      { name: "Our Mission", href: "/#about", section: "about" },
      { name: "Leadership", href: "/about#leadership", section: "leadership" },
      { name: "Careers", href: "#", section: null }
    ],
    solutions: [
      { name: "Products", href: "/products", section: null },
      { name: "Digital Platform", href: "/products", section: null },
      { name: "Smart Agriculture", href: "/products", section: null },
      { name: "Market Access", href: "/products", section: null }
    ],
    resources: [
      { name: "Blog", href: "/blog", section: null },
      { name: "FAQ", href: "/faq", section: null },
      { name: "Documentation", href: "#", section: null },
      { name: "Support", href: "/#contact", section: "contact" }
    ]
  };

  const handleSectionClick = (e: React.MouseEvent, sectionId: string | null, href: string) => {
    e.preventDefault();
    
    if (sectionId) {
      // Check if this is a section on a specific page (like /about#leadership)
      if (href.includes('#') && href !== '/#') {
        // Extract the page path and section ID
        const [pagePath] = href.split('#');
        if (location.pathname !== pagePath) {
          // Navigate to the page first, then scroll to section
          navigate(pagePath);
          setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        } else {
          // Already on the correct page, just scroll to section
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }
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
      // This is a regular page navigation or placeholder
      if (href !== '#') {
        navigate(href);
        // Always scroll to top when navigating to a new page
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <SpidaLogo size="lg" className="text-primary-foreground" />
              </div>
              
              <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
                Transforming Africa's agricultural landscape through technology and innovation, 
                ensuring every farmer thrives with higher productivity and guaranteed market access.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="text-sm">hello@spida.africa</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-accent" />
                  <span className="text-sm">+2347089540773</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-sm">Lagos, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <div className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <button
                    key={index}
                    onClick={(e) => handleSectionClick(e, link.section, link.href)}
                    className="block text-left text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Solutions</h3>
              <div className="space-y-3">
                {footerLinks.solutions.map((link, index) => (
                  <button
                    key={index}
                    onClick={(e) => handleSectionClick(e, link.section, link.href)}
                    className="block text-left text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <div className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <button
                    key={index}
                    onClick={(e) => handleSectionClick(e, link.section, link.href)}
                    className="block text-left text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © {currentYear} SPIDA Africa. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a 
                href="#" 
                className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;