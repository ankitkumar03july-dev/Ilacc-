import { Globe, Handshake, TrendingUp, Building2 } from "lucide-react";
import worldMapHighlighted from "@/assets/world-map-highlighted.jpg";

const features = [
  { icon: TrendingUp, label: "Trade" },
  { icon: Globe, label: "Culture" },
  { icon: Building2, label: "Policy" },
  { icon: Handshake, label: "Strategy" },
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              About ILACC
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Connecting Continents.{" "}
              <span className="text-primary">Enabling Partnerships.</span>{" "}
              Empowering the Future.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              ILACC is the premier institutional gateway linking India with the 33 nations of Latin America & the Caribbean (GRULAC). We promote trade, investment, culture, policy dialogue, research, and long-term strategic cooperation through government engagement, business connect, academic exchanges, and South–South collaboration.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              We bring together governments, industries, diplomatic missions, businesses, universities, and civil society to build a more connected global future.
            </p>

            {/* Feature Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                >
                  <feature.icon className="w-10 h-10 md:w-12 md:h-12 mb-2 text-accent group-hover:text-primary-foreground transition-colors" />
                  <span className="text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* World Map with India Highlighted */}
          <div className="order-1 lg:order-2 w-full">
            <div className="relative w-full mx-auto overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-muted/50 via-background to-accent/10 shadow-lg">
              {/* Map container with better mobile sizing */}
              <div className="p-3 sm:p-5 md:p-8 pb-16 sm:pb-18 md:pb-20">
                <img 
                  src={worldMapHighlighted} 
                  alt="World map highlighting India and Latin America & Caribbean regions"
                  className="w-full h-auto object-contain rounded-lg md:rounded-xl min-h-[180px] sm:min-h-[220px] md:min-h-[280px]"
                  style={{ imageRendering: 'auto' }}
                />
              </div>

              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground p-3 sm:p-4 md:p-5">
                <div className="text-center flex items-center justify-center gap-2">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">33</span>
                  <span className="text-xs sm:text-sm md:text-base opacity-90">Nations Connected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
