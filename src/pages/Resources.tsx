import TopBanner from "@/components/layout/TopBanner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  FileText, BarChart3, Newspaper, Download, 
  ArrowRight, BookOpen, Globe, TrendingUp 
} from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "Reports & Policy Papers",
    description: "Trade studies, economic insights and ILACC publications on India-GRULAC cooperation.",
    items: ["Trade Analysis Reports", "Policy Recommendations", "Economic Outlook Papers", "Sector Studies"],
    color: "primary"
  },
  {
    icon: BarChart3,
    title: "Market Intelligence Hub",
    description: "Comprehensive market data and business intelligence for informed decision-making.",
    items: ["Sectoral Reports", "Tariff Guides", "Logistics Corridors", "FTA Updates"],
    color: "accent"
  },
  {
    icon: Newspaper,
    title: "News & Updates",
    description: "Stay informed with the latest developments in India-GRULAC relations.",
    items: ["Announcements", "Events Coverage", "Press Releases", "Strategic Developments"],
    color: "logo-green"
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-logo-blue/10 via-primary/5 to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            <span className="text-primary">Resources</span> & Insights
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Access comprehensive research, market intelligence, and news on India-GRULAC cooperation
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-${resource.color}/10 rounded-xl flex items-center justify-center mb-6`}>
                  <resource.icon className={`h-9 w-9 text-${resource.color}`} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">{resource.title}</h3>
                <p className="text-muted-foreground mb-6">{resource.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {resource.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full">
                  Explore <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Publications
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Download our latest reports and policy papers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "India-GRULAC Trade Report 2024", type: "Annual Report", icon: TrendingUp },
              { title: "Market Entry Guide: Latin America", type: "Business Guide", icon: Globe },
              { title: "Policy Brief: FTA Opportunities", type: "Policy Paper", icon: FileText },
              { title: "Sector Analysis: Renewable Energy", type: "Sector Study", icon: BookOpen },
            ].map((pub, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-border/50 flex items-center gap-4 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <pub.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{pub.title}</h3>
                  <p className="text-sm text-muted-foreground">{pub.type}</p>
                </div>
                <Button variant="ghost" size="icon">
                  <Download className="h-5 w-5" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
