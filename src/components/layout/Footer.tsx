import {
  Facebook,
  Youtube,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import ilaccLogo from "@/assets/ilacc-logo.png";

const footerLinks = {
  about: [
    { label: "About ILACC", href: "/about" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
  ],
  quickLinks: [
    { label: "Opportunities", href: "/opportunities" },
    { label: "Membership", href: "/membership" },
    { label: "Resources", href: "/resources" },
  ],
  resources: [
    { label: "News", href: "/resources" },
    { label: "Events", href: "/events" },
    { label: "Publications", href: "/resources" },
  ],
};

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

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img
                src={ilaccLogo}
                alt="ILACC - Indo-Latin American & Caribbean Council"
                className="h-16 md:h-20 w-auto bg-white rounded-lg p-2"
              />
            </div>

            <p className="text-sm opacity-70 mb-6 max-w-sm">
              The premier institutional gateway linking India with the 33 nations
              of Latin America & the Caribbean. Promoting trade, investment,
              culture, and strategic cooperation.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a href="https://www.facebook.com/ilacc.in/" className="w-9 h-9 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://x.com/ilaccin" className="w-9 h-9 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="X">
                <XIcon className="h-4 w-4" />
              </a>
              <a href="https://www.youtube.com/@ilacc_in" className="w-9 h-9 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/ilacc.in/" className="w-9 h-9 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/indo-latin-american-caribbean-council" className="w-9 h-9 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-heading text-base font-bold mb-4 uppercase tracking-wider">
              About ILACC
            </h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-base font-bold mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-base font-bold mb-4 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm opacity-70">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>C-12, Third Floor, Near Market, Kailash Colony, New Delhi, South Delhi- 110048, Delhi</span>
              </li>

              <li>
                <a
                  href="tel:+919821337675"
                  className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all"
                >
                  <Phone className="h-4 w-4" />
                  <span>+91 9821337675</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:connect@ilacc.in"
                  className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all"
                >
                  <Mail className="h-4 w-4" />
                  <span>connect@ilacc.in
                    
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
            <p>
              © {new Date().getFullYear()} ILACC – Indo Latin American &
              Caribbean Council. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="#privacy"
                className="hover:opacity-100 hover:text-primary transition-all"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="hover:opacity-100 hover:text-primary transition-all"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
