import { Globe, Handshake, TrendingUp, Building2 } from "lucide-react";

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
                  <feature.icon className="w-8 h-8 mb-2 text-accent group-hover:text-primary-foreground transition-colors" />
                  <span className="text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Illustration */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl" />
              <svg viewBox="0 0 400 400" className="w-full h-full p-8">
                {/* Globe circle */}
                <circle cx="200" cy="200" r="150" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.3" />
                <circle cx="200" cy="200" r="120" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.2" />
                
                {/* India representation */}
                <g transform="translate(250, 180)">
                  <path d="M0,0 L20,5 L25,25 L15,40 L5,35 L-5,20 Z" fill="hsl(var(--accent))" opacity="0.8" />
                  <circle cx="10" cy="20" r="8" fill="hsl(var(--accent))" className="animate-pulse" />
                  <text x="10" y="60" fill="hsl(var(--foreground))" fontSize="12" textAnchor="middle" fontWeight="600">INDIA</text>
                </g>

                {/* LAC representation */}
                <g transform="translate(100, 200)">
                  <path d="M0,30 L10,0 L25,10 L30,40 L40,80 L35,100 L20,90 L10,70 L5,50 Z" fill="hsl(var(--primary))" opacity="0.6" />
                  <circle cx="20" cy="50" r="8" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <text x="20" y="120" fill="hsl(var(--foreground))" fontSize="12" textAnchor="middle" fontWeight="600">GRULAC</text>
                </g>

                {/* Connection arc */}
                <path d="M260,200 Q200,120 120,250" stroke="hsl(var(--accent))" strokeWidth="3" fill="none" strokeDasharray="8,4" className="animate-pulse" />
                
                {/* Connection dots */}
                <circle cx="190" cy="150" r="4" fill="hsl(var(--accent))" />
              </svg>

              {/* Stats overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-primary text-primary-foreground p-4 rounded-xl">
                <div className="text-center">
                  <span className="text-2xl md:text-3xl font-bold text-accent">33</span>
                  <span className="text-sm ml-2 opacity-90">Nations Connected</span>
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
