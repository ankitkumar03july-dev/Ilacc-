import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-logo-green/10 blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-80 h-80 rounded-full bg-logo-orange/10 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-logo-purple/10 blur-2xl" />
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg viewBox="0 0 1200 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="ctaPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ctaPattern)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 border border-white/20">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium">Be Part of the Growth Story</span>
          </div>

          {/* Headline */}
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Be Part of the{" "}
            <span className="text-accent">India–GRULAC Growth Story</span>
          </h2>

          {/* Description */}
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join a powerful platform connecting governments, businesses, and institutions across two continents.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="accent" size="lg" className="min-w-[160px] font-semibold text-base">
              Join ILACC
            </Button>
            <Button variant="hero" size="lg" className="min-w-[160px] font-semibold text-base">
              Contact Us
            </Button>
            <Button variant="hero" size="lg" className="min-w-[160px] font-semibold text-base">
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
