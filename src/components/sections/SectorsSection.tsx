import { 
  Pill, 
  Monitor, 
  Wheat, 
  Sun, 
  Factory, 
  Gem, 
  Palmtree, 
  Satellite 
} from "lucide-react";

const sectors = [
  {
    icon: Pill,
    title: "Pharma & Healthcare",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop",
  },
  {
    icon: Monitor,
    title: "IT & Digital Services",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
  },
  {
    icon: Wheat,
    title: "Agriculture & Food Processing",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop",
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
  },
  {
    icon: Factory,
    title: "Energy, Oil, Gas & Mining",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&h=400&fit=crop",
  },
  {
    icon: Gem,
    title: "Textiles, Gems & Jewelry",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop",
  },
  {
    icon: Palmtree,
    title: "Tourism, Hospitality & Creative Industries",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
  },
  {
    icon: Satellite,
    title: "Space, Satellites & Drone Technology",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&h=400&fit=crop",
  },
];

const SectorsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            High-Growth Sectors
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            Sectors with Maximum <span className="text-primary">India–GRULAC Potential</span>
          </h2>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={sector.image}
                alt={sector.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent group-hover:from-primary/95 transition-colors" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-accent/90 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <sector.icon className="w-6 h-6 md:w-8 md:h-8 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-xs md:text-sm font-bold text-white leading-tight">
                  {sector.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
