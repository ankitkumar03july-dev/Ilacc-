import { Users, TrendingUp, Globe2, Heart, Zap, Building } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "650M+",
    label: "Consumers",
    description: "Across Latin America",
  },
  {
    icon: TrendingUp,
    value: "$35.7B",
    label: "Trade (2023-24)",
    description: "India–LAC bilateral trade",
  },
  {
    icon: Globe2,
    value: "33",
    label: "Nations",
    description: "In GRULAC region",
  },
  {
    icon: Building,
    value: "$100B",
    label: "Target by 2025",
    description: "Trade corridor goal",
  },
];

const opportunities = [
  { icon: Zap, text: "Energy, digital innovation, mining" },
  { icon: Heart, text: "Agriculture, pharma, fintech" },
  { icon: Globe2, text: "Startups, tourism, green tech" },
];

const WhyIndiaGRULACSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Why India–GRULAC?
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            A High-Potential Partnership Built on{" "}
            <span className="text-accent">Shared History & Future Opportunities</span>
          </h2>
          <p className="text-primary-foreground/80 text-base md:text-lg">
            Shared civilizational roots & diaspora ties create a strong foundation for expanding cooperation.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-primary-light/20 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-primary-light/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 md:w-9 md:h-9 text-foreground" />
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="font-semibold text-sm md:text-base mb-1">
                {stat.label}
              </div>
              <div className="text-xs md:text-sm text-primary-foreground/60">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Opportunities */}
        <div className="bg-primary-dark/50 rounded-2xl p-6 md:p-8">
          <h3 className="font-heading text-xl md:text-2xl font-bold text-center mb-6">
            Expanding Cooperation In
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {opportunities.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-primary-foreground/5 rounded-lg p-4 hover:bg-primary-foreground/10 transition-colors"
              >
                <item.icon className="w-7 h-7 md:w-8 md:h-8 text-accent flex-shrink-0" />
                <span className="text-sm md:text-base">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyIndiaGRULACSection;
