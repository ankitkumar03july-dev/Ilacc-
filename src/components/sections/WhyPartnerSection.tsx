import { Button } from "@/components/ui/button";
import { 
  Target, 
  ShieldCheck, 
  Globe, 
  Languages, 
  Truck, 
  HeartHandshake,
  Lightbulb
} from "lucide-react";

const benefits = [
  {
    icon: Target,
    text: "Access the projected ₹10 lakh crore India–LAC trade corridor by 2035",
  },
  {
    icon: ShieldCheck,
    text: "Smooth market entry with regulatory & policy guidance",
  },
  {
    icon: Globe,
    text: "Strong credibility through diplomatic & institutional networks",
  },
  {
    icon: Languages,
    text: "Multilingual support & cultural alignment",
  },
  {
    icon: Truck,
    text: "Advocacy for improved logistics & shipping routes",
  },
  {
    icon: HeartHandshake,
    text: "End-to-end support for Indian companies entering LAC—and vice versa",
  },
  {
    icon: Lightbulb,
    text: "High-impact research, seminars, B2B connect, and government linkages",
  },
];

const WhyPartnerSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Partnership Benefits
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Why Partner with <span className="text-accent">ILACC?</span>
            </h2>
            <p className="text-primary-foreground/80 text-base md:text-lg mb-8">
              A Trusted Institutional Bridge Between Two Dynamic Regions
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-primary-light/20 rounded-lg p-4 hover:bg-primary-light/30 transition-colors"
                >
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-sm md:text-base text-primary-foreground/90 leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="accent" size="lg" className="font-semibold">
                Become a Member
              </Button>
              <Button variant="hero" size="lg" className="font-semibold">
                Partner With ILACC
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Background circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full border-2 border-accent/20 rounded-full animate-pulse" />
              </div>
              <div className="absolute inset-8 flex items-center justify-center">
                <div className="w-full h-full border-2 border-accent/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              <div className="absolute inset-16 flex items-center justify-center">
                <div className="w-full h-full border-2 border-accent/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-accent text-accent-foreground rounded-2xl p-8 text-center shadow-2xl">
                  <div className="font-heading text-4xl md:text-5xl font-bold mb-2">₹10L Cr</div>
                  <div className="text-sm md:text-base font-medium">Trade Corridor by 2035</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;
