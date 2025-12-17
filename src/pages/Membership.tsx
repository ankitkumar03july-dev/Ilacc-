import TopBanner from "@/components/layout/TopBanner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Star, Users, FileText, Award, Calendar, 
  CheckCircle, ArrowRight, Crown 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const benefits = [
  {
    icon: Users,
    title: "VIP Access to B2B/B2G Meetings",
    description:
      "Get priority access to exclusive business-to-business and business-to-government meetings with key stakeholders.",
  },
  {
    icon: Calendar,
    title: "Invitations to ILACC Trade Missions",
    description:
      "Join official ILACC delegations to explore markets across India and GRULAC nations.",
  },
  {
    icon: FileText,
    title: "Exclusive Reports & Market Studies",
    description:
      "Access comprehensive market intelligence, trade reports, and sectoral analysis.",
  },
  {
    icon: Award,
    title: "Branding Visibility",
    description:
      "Showcase your brand across ILACC platforms, events, and publications.",
  },
  {
    icon: Star,
    title: "Priority Cultural & Academic Programs",
    description:
      "First access to cultural exchanges, academic partnerships, and educational initiatives.",
  },
];

const Membership = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-logo-purple/10 via-primary/5 to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Crown className="h-12 w-12 text-accent" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Become an <span className="text-primary">ILACC Member</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join India's premier platform for India–GRULAC business and cultural cooperation
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Become an ILACC Member?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Unlock exclusive benefits and accelerate your India–GRULAC business journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-9 w-9 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary via-primary/90 to-accent rounded-3xl p-8 md:p-12 text-center text-white">
            <Crown className="h-16 w-16 mx-auto mb-6 text-white/80" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to Join ILACC?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Take the first step towards expanding your business across India and GRULAC
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => navigate("/membership-application")}
              >
                Apply for Membership <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => navigate("/contact")}
              >
                Contact Us for Details
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Instant Access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Dedicated Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Membership;
