import TopBanner from "@/components/layout/TopBanner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Building, Globe, ArrowRight, Users, Briefcase, 
  TrendingUp, MapPin, FileText, Heart 
} from "lucide-react";

const Opportunities = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/10 via-primary/5 to-logo-green/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Business <span className="text-accent">Opportunities</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlock growth potential in India and GRULAC markets with ILACC's comprehensive business support
          </p>
        </div>
      </section>

      {/* For Indian Businesses */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  For Indian Businesses
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Expand into fast-growing Latin American & Caribbean markets with comprehensive support from ILACC.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: MapPin, text: "Market-entry support" },
                  { icon: Users, text: "Partner identification" },
                  { icon: TrendingUp, text: "Import/export facilitation" },
                  { icon: Briefcase, text: "Delegation opportunities" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl">
                    <item.icon className="h-7 w-7 text-primary" />
                    <span className="font-medium text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button className="mt-8" size="lg">
                Explore GRULAC Markets <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 rounded-3xl p-8 lg:p-12">
              <div className="text-center">
                <Globe className="h-32 w-32 text-primary/40 mx-auto mb-6" />
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Access 33 GRULAC Nations
                </h3>
                <p className="text-muted-foreground">
                  650+ million consumers across Latin America & the Caribbean
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For GRULAC Businesses */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-accent/20 via-accent/10 to-logo-green/20 rounded-3xl p-8 lg:p-12">
              <div className="text-center">
                <Building className="h-32 w-32 text-accent/40 mx-auto mb-6" />
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Enter India's Booming Market
                </h3>
                <p className="text-muted-foreground">
                  1.4 billion consumers with growing purchasing power
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Globe className="h-8 w-8 text-accent" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  For GRULAC Businesses
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Establish your presence in India's booming market with ILACC's expert guidance and support.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Users, text: "Distribution & channel partnerships" },
                  { icon: TrendingUp, text: "Investment assistance" },
                  { icon: FileText, text: "Regulatory mentorship" },
                  { icon: Heart, text: "Cultural & linguistic support" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-accent/5 rounded-xl">
                    <item.icon className="h-7 w-7 text-accent" />
                    <span className="font-medium text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button variant="accent" className="mt-8 bg-accent hover:bg-accent/90" size="lg">
                Explore Indian Market <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Expand Your Business?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Connect with ILACC today and unlock new business opportunities
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Opportunities;
