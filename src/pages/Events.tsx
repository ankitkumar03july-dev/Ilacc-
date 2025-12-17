import TopBanner from "@/components/layout/TopBanner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Calendar, Users, Building, Palette, GraduationCap, 
  Lightbulb, MapPin, Clock, ArrowRight 
} from "lucide-react";

const eventTypes = [
  { icon: Building, title: "India–LAC Business Summits", description: "High-level meetings bringing together business leaders from both regions" },
  { icon: Users, title: "CEO Roundtables", description: "Exclusive discussions among top executives on strategic partnerships" },
  { icon: MapPin, title: "Trade Delegations", description: "Organized visits to explore market opportunities in partner countries" },
  { icon: Palette, title: "Cultural Festivals", description: "Celebrations showcasing the rich heritage of India and GRULAC nations" },
  { icon: GraduationCap, title: "Academic Conferences", description: "Knowledge exchange forums for researchers and educators" },
  { icon: Lightbulb, title: "Startup & Innovation Series", description: "Connecting entrepreneurs and innovators across continents" },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/10 via-logo-purple/5 to-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Calendar className="h-12 w-12 text-primary" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            ILACC <span className="text-primary">Events</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect, collaborate, and grow at our flagship events bridging India and GRULAC
          </p>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Event Categories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From business summits to cultural festivals, we bring together diverse stakeholders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <event.icon className="h-9 w-9 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{event.title}</h3>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Placeholder */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay tuned for our upcoming events and programs
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-border/50 text-center max-w-2xl mx-auto">
            <Calendar className="h-16 w-16 text-primary/30 mx-auto mb-6" />
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">
              Events Coming Soon
            </h3>
            <p className="text-muted-foreground mb-6">
              We're planning exciting events for the India-GRULAC community. Subscribe to our newsletter to stay updated.
            </p>
            <Button>
              Subscribe for Updates <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-logo-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Want to Host an Event with ILACC?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Partner with us to organize impactful events that connect India and GRULAC
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
