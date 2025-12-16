import { 
  TrendingUp, 
  Users, 
  FileText, 
  Shield, 
  GraduationCap, 
  Leaf, 
  Truck, 
  Handshake,
  BookOpen
} from "lucide-react";

const objectives = [
  {
    icon: TrendingUp,
    title: "Promote Trade & Investment",
    description: "Facilitate bilateral/multilateral trade, joint ventures, technology transfer, FDI, and sustainable business relations.",
  },
  {
    icon: Users,
    title: "Business Networking & Market Access",
    description: "Trade fairs, delegations, buyer-seller meets, B2B/B2G interactions, and sectoral platforms.",
  },
  {
    icon: FileText,
    title: "Policy Research & Advocacy",
    description: "Engage with governments & embassies to reduce trade barriers, support FTAs, regulatory harmonisation, tariff reforms.",
  },
  {
    icon: Shield,
    title: "Defence & Security Cooperation",
    description: "Collaboration in drones, surveillance systems, cybersecurity, small arms, and capacity-building programs.",
  },
  {
    icon: GraduationCap,
    title: "Cultural & Educational Cooperation",
    description: "Film festivals, language initiatives, diaspora engagement, student exchange, tourism, Ayurveda & yoga outreach.",
  },
  {
    icon: Leaf,
    title: "Sustainable Development & Green Tech",
    description: "Renewable energy, green hydrogen, circular economy, climate-friendly tech, SDG-aligned projects.",
  },
  {
    icon: Truck,
    title: "Logistics & Connectivity Improvement",
    description: "Advocacy for direct shipping routes, air connectivity, digital trade platforms & supply-chain resilience.",
  },
  {
    icon: Handshake,
    title: "Strategic Engagement & Partnerships",
    description: "Strengthening South–South cooperation & long-term institutional frameworks.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Exchange & Capacity Building",
    description: "Research programs, seminars, training initiatives, scholarship-based cooperation.",
  },
];

const ObjectivesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Our Core Objectives
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            ILACC Objectives – <span className="text-primary">What We Stand For</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Nine pillars driving India-GRULAC cooperation across trade, culture, policy, and strategic domains.
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:border-accent/30 transition-all duration-300 group card-hover"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <objective.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {objective.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {objective.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
