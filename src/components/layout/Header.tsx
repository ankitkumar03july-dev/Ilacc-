import { useState } from "react";
import {
  Menu,
  X,
  Search,
  Facebook,
  Youtube,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ilaccLogo from "@/assets/ilacc-logo.png";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "OBJECTIVES", href: "#objectives" },
  { label: "SECTORS", href: "#sectors" },
  { label: "SERVICES", href: "#services" },
  { label: "GALLERY", href: "#gallery" },
  { label: "CONTACT", href: "#contact" },
];

// Custom X (Twitter) icon
const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white text-foreground sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 md:py-3">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={ilaccLogo}
              alt="ILACC - Indo-Latin American & Caribbean Council"
              className="h-14 md:h-16 lg:h-20 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Nav Links */}
            <nav className="flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm font-semibold text-foreground hover:text-primary rounded transition-colors tracking-wide"
                >
                  {item.label}
                </a>
              ))}

              <button
                className="px-3 py-2 hover:text-primary rounded transition-colors"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>
            </nav>

            {/* Divider */}
            <div className="w-px h-8 bg-border" />

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/ilacc.in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>

              <a
                href="https://x.com/ilaccin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <XIcon className="h-4 w-4" />
              </a>

              <a
                href="https://www.youtube.com/@ilacc_in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>

              <a
                href="https://www.instagram.com/ilacc.in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>

              <a
                href="https://www.linkedin.com/company/indo-latin-american-caribbean-council"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="text-xs px-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Join Us
              </Button>
              <Button variant="default" size="sm" className="text-xs px-4">
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
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-3 text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* CTA Buttons */}
            <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Join Us
              </Button>
              <Button variant="default" className="w-full">
                Partner Now
              </Button>
            </div>

            {/* Mobile Social Icons */}
            <div className="flex items-center justify-center gap-5 pt-4">
              <a
                href="https://www.facebook.com/ilacc.in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="https://x.com/ilaccin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <XIcon className="h-5 w-5" />
              </a>

              <a
                href="https://www.youtube.com/@ilacc_in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/ilacc.in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/company/indo-latin-american-caribbean-council"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
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
