import { useState } from "react";
import { Menu, X, Facebook, Youtube, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ilaccLogo from "@/assets/ilacc-logo.png";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "WHAT WE DO", href: "/what-we-do" },
  { label: "OPPORTUNITIES", href: "/opportunities" },
  { label: "MEMBERSHIP", href: "/membership" },
  { label: "RESOURCES", href: "/resources" },
  { label: "EVENTS", href: "/events" },
  { label: "CONTACT", href: "/contact" },
];

// Custom X (Twitter) icon
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header className="bg-white text-foreground sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 md:py-3">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src={ilaccLogo} 
              alt="ILACC - Indo-Latin American & Caribbean Council" 
              className="h-14 md:h-18 lg:h-20 w-auto"
            />
            <div className="w-full h-0.5 bg-accent mt-1"></div>
            <span className="text-[8px] md:text-[9px] text-foreground font-medium tracking-wide mt-0.5">Indo Latin American & Caribbean Council</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Nav Links */}
            <nav className="flex items-center gap-0.5">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-2.5 py-2 text-xs font-semibold rounded transition-colors tracking-wide ${
                    isActive(item.href) 
                      ? 'text-primary bg-primary/10' 
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Divider */}
            <div className="w-px h-8 bg-border" />

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a href="https://www.facebook.com/ilacc.in/" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://x.com/ilaccin" className="text-muted-foreground hover:text-primary transition-colors" aria-label="X">
                <XIcon className="h-4 w-4" />
              </a>
              <a href="https://www.youtube.com/@ilacc_in" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/ilacc.in/" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/indo-latin-american-caribbean-council" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs px-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => handleNavClick('/membership')}
              >
                Join Us
              </Button>
              <Button 
                variant="default" 
                size="sm" 
                className="text-xs px-3"
                onClick={() => handleNavClick('/contact')}
              >
                Partner Now
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`px-4 py-3 text-sm font-semibold text-left rounded transition-colors ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:bg-secondary hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
              <Button 
                variant="outline" 
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => handleNavClick('/membership')}
              >
                Join Us
              </Button>
              <Button 
                variant="default" 
                className="w-full"
                onClick={() => handleNavClick('/contact')}
              >
                Partner Now
              </Button>
            </div>
            {/* Social Icons */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="X">
                <XIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
