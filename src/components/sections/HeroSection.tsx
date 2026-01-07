import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden min-h-[600px] lg:min-h-[650px]">
      {/* Decorative circles inspired by logo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large decorative circles */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-logo-green/10 blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-logo-orange/10 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-72 h-72 rounded-full bg-logo-purple/10 blur-3xl" />
        <div className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-logo-cyan/5 blur-2xl" />
        
        {/* World Map Background */}
        <svg viewBox="0 0 1200 600" className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.3" />
              <stop offset="100%" stopColor="white" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {/* Connection lines from India to LAC */}
          <path d="M750,280 Q600,200 350,320" stroke="url(#mapGradient)" strokeWidth="2" fill="none" strokeDasharray="10,5" className="animate-pulse" />
          <path d="M750,280 Q550,350 300,380" stroke="url(#mapGradient)" strokeWidth="2" fill="none" strokeDasharray="10,5" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <path d="M750,280 Q600,400 280,450" stroke="url(#mapGradient)" strokeWidth="2" fill="none" strokeDasharray="10,5" className="animate-pulse" style={{ animationDelay: '1s' }} />
        </svg>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary/80" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[600px] lg:min-h-[650px] text-center py-16 lg:py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 animate-fade-in border border-white/20">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium tracking-wide">India–GRULAC Partnership Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 animate-slide-up max-w-5xl">
            ILACC – Bridging India & GRULAC{" "}
            <span className="text-accent">for a Global Future</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Strengthening trade, culture, policy and strategic cooperation between India and the 33 nations of Latin America & the Caribbean.
          </p>

          {/* Short Description */}
          <p className="text-sm md:text-base text-white/70 max-w-2xl mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Connecting continents. Creating opportunities. Empowering sustainable growth for businesses, governments, academia, and institutions across India and GRULAC.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="accent" size="lg" className="min-w-[140px] md:min-w-[160px] font-semibold">
              Join ILACC
            </Button>
            <Button variant="hero" size="lg" className="min-w-[140px] md:min-w-[160px] font-semibold">
              Explore Opportunities
            </Button>
            <Button variant="hero" size="lg" className="min-w-[140px] md:min-w-[160px] font-semibold">
              Partner With Us
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0,60 L0,30 Q360,0 720,30 T1440,30 L1440,60 Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
