import { 
  Building2, 
  Landmark, 
  Users,
  Shield
} from "lucide-react";

const serviceCategories = [
  {
    icon: Building2,
    title: "Business & Trade Services",
    color: "bg-logo-teal",
    services: [
      "Market entry facilitation",
      "B2B and B2G matchmaking",
      "Delegations, expos, trade fairs",
      "Compliance & regulatory assistance",
      "Logistics, supply-chain & shipping support",
    ],
  },
  {
    icon: Landmark,
    title: "Government & Diplomatic Services",
    color: "bg-logo-orange",
    services: [
      "Policy research & advocacy",
      "Support for FTAs, tariff reforms, regulatory harmonisation",
      "Institutional and diplomatic engagement",
    ],
  },
  {
    icon: Users,
    title: "Cultural, Academic & People-to-People Services",
    color: "bg-logo-purple",
    services: [
      "Student exchange programmes",
      "Cultural delegations & festivals",
      "Tourism, Ayurveda & yoga promotion",
      "Research partnerships & training modules",
    ],
  },
  {
    icon: Shield,
    title: "Strategic & Defence Cooperation",
    color: "bg-logo-red",
    services: [
      "Drone systems",
      "Cybersecurity",
      "Surveillance technologies",
      "Joint capacity-building programs",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            ILACC Services – <span className="text-primary">What We Deliver</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className={`${category.color} p-6 text-white`}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white/20 rounded-xl flex items-center justify-center">
                    <category.icon className="w-8 h-8 md:w-9 md:h-9" />
                  </div>
                  <h3 className="font-heading text-lg md:text-xl font-bold">
                    {category.title}
                  </h3>
                </div>
              </div>
              
              {/* Services List */}
              <div className="p-6">
                <ul className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <li
                      key={serviceIndex}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className={`w-2 h-2 ${category.color} rounded-full mt-2 flex-shrink-0`} />
                      <span className="text-sm md:text-base">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
