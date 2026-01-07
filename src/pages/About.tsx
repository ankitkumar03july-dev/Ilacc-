import TopBanner from "@/components/layout/TopBanner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Globe, Target, Eye, History, Heart, BookOpen, Users, Handshake } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-logo-cyan/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            About <span className="text-primary">ILACC</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            The premier institutional gateway linking India with the 33 nations of Latin America & the Caribbean
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-10 w-10 text-primary" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Who We Are</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The Indian Latin American & Caribbean Council (ILACC) is a collaborative platform dedicated to deepening India's engagement with the 33 nations of Latin America & the Caribbean. We build economic, cultural, academic and policy partnerships that foster long-term cooperation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/5 p-4 rounded-xl text-center">
                  <span className="text-3xl font-bold text-primary">33</span>
                  <p className="text-sm text-muted-foreground">GRULAC Nations</p>
                </div>
                <div className="bg-accent/10 p-4 rounded-xl text-center">
                  <span className="text-3xl font-bold text-accent">650M+</span>
                  <p className="text-sm text-muted-foreground">Consumers</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-logo-green/20 rounded-3xl p-8 aspect-square flex items-center justify-center">
              <Globe className="h-48 w-48 text-primary/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To create a resilient, inclusive and future-ready India–GRULAC corridor that empowers businesses, strengthens diplomatic relations and celebrates cultural linkages.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Promote and expand India–GRULAC trade
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Facilitate market access & business matchmaking
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Strengthen cultural and academic exchanges
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Support sustainable, green and responsible development
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Build stronger people-to-people connections
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Foundations */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <History className="h-10 w-10 text-logo-purple" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Historical Foundations</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              India and the GRULAC nations share deep historical connections
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: History, title: "Ancient Civilizations", desc: "Ancient indigenous civilizations and shared histories" },
              { icon: Users, title: "Colonial Heritage", desc: "Parallel colonial histories & struggles for independence" },
              { icon: Heart, title: "Diaspora Communities", desc: "Strong diaspora communities in the Caribbean" },
              { icon: BookOpen, title: "Cultural Icons", desc: "Cultural exchanges influenced by Tagore & Octavio Paz" },
              { icon: Handshake, title: "Mutual Appreciation", desc: "Shared love for Ayurveda, yoga, art & literature" },
              { icon: Globe, title: "Future Cooperation", desc: "This shared legacy forms the foundation of future cooperation" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-border/50 hover:shadow-lg transition-shadow">
                <item.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
