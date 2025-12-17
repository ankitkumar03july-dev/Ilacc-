import TopBanner from "@/components/layout/TopBanner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  TrendingUp, Briefcase, Scale, Palette, Leaf, BookOpen, 
  Users, Building, FileText, Truck, Globe, GraduationCap 
} from "lucide-react";

const programs = [
  {
    icon: TrendingUp,
    title: "Trade & Investment Promotion",
    description: "We help businesses from India and GRULAC access new markets, establish partnerships and invest with confidence.",
    activities: ["Business matchmaking", "Investment roadshows", "Sectoral delegations", "Market intelligence"],
    color: "primary"
  },
  {
    icon: Briefcase,
    title: "Business Facilitation & Support",
    description: "End-to-end guidance for companies planning expansion.",
    activities: ["Regulatory compliance", "Risk assessment", "Legal & policy support", "Logistics & supply-chain facilitation"],
    color: "accent"
  },
  {
    icon: Scale,
    title: "Policy & Advocacy",
    description: "ILACC works closely with governments to strengthen India–GRULAC dialogue.",
    activities: ["Reduce trade barriers", "Improve regulatory frameworks", "Promote FTAs & economic cooperation"],
    color: "logo-green"
  },
  {
    icon: Palette,
    title: "Cultural, Tourism & Educational Exchange",
    description: "We promote deeper socio-cultural engagement between regions.",
    activities: ["Art, music & film festivals", "Sports diplomacy", "Student exchange programs", "Ayurveda, yoga & wellness collaborations"],
    color: "logo-purple"
  },
  {
    icon: Leaf,
    title: "Sustainable Development & Green Initiatives",
    description: "ILACC promotes collaboration in sustainable development.",
    activities: ["Renewable energy", "Green hydrogen", "Climate resilience", "Responsible investment"],
    color: "logo-cyan"
  },
  {
    icon: BookOpen,
    title: "Knowledge & Research Partnerships",
    description: "Building knowledge bridges between India and GRULAC.",
    activities: ["Joint academic programs", "Research publications", "Seminars & conferences", "Thought leadership reports"],
    color: "logo-blue"
  },
];

const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-logo-green/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            What We <span className="text-primary">Do</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive programs bridge India and GRULAC through trade, culture, policy, and sustainable development
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-${program.color}/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <program.icon className={`h-9 w-9 text-${program.color}`} />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                
                <div className="border-t border-border/50 pt-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Activities:</h4>
                  <ul className="space-y-1">
                    {program.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner with ILACC?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join us in building stronger India-GRULAC partnerships
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="/membership"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Become a Member
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatWeDo;
