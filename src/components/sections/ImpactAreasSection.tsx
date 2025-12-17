import { 
  TrendingUp, 
  Briefcase, 
  GraduationCap, 
  Shield, 
  Leaf, 
  FileText, 
  Truck, 
  Lightbulb 
} from "lucide-react";

const impactAreas = [
  {
    icon: TrendingUp,
    title: "Trade & Investment Promotion",
    color: "bg-logo-teal",
  },
  {
    icon: Briefcase,
    title: "Business Facilitation & Matchmaking",
    color: "bg-logo-orange",
  },
  {
    icon: GraduationCap,
    title: "Cultural & Educational Relations",
    color: "bg-logo-purple",
  },
  {
    icon: Shield,
    title: "Defence & Security Collaboration",
    color: "bg-logo-red",
  },
  {
    icon: Leaf,
    title: "Sustainable Development & Green Cooperation",
    color: "bg-logo-green",
  },
  {
    icon: FileText,
    title: "Policy & Regulatory Advocacy",
    color: "bg-logo-blue",
  },
  {
    icon: Truck,
    title: "Logistics, Transport & Connectivity",
    color: "bg-logo-cyan",
  },
  {
    icon: Lightbulb,
    title: "Research, Innovation & Knowledge Exchange",
    color: "bg-primary",
  },
];

const ImpactAreasSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Our Impact
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            ILACC's Core <span className="text-primary">Areas of Action</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Multidimensional engagement driving real impact across India and GRULAC.
          </p>
        </div>

        {/* Impact Areas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {impactAreas.map((area, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-square bg-card border border-border hover:border-transparent transition-all duration-300 card-hover"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 ${area.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 md:p-6 text-center">
                <div className={`w-16 h-16 md:w-20 md:h-20 ${area.color} bg-opacity-20 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-4 transition-colors`}>
                  <area.icon className="w-9 h-9 md:w-10 md:h-10 text-foreground group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-sm md:text-base font-bold text-foreground group-hover:text-white transition-colors leading-tight">
                  {area.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactAreasSection;
