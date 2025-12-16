import { X } from "lucide-react";
import { useState } from "react";

const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-accent text-accent-foreground py-2 px-4 relative">
      <div className="container mx-auto flex items-center justify-center text-center">
        <p className="text-sm font-medium">
          This #GIVINGTUESDAY, donate to protect Latino families across the country.{" "}
          <a href="#donate" className="underline font-bold hover:opacity-80 transition-opacity">
            Donate Here
          </a>
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
