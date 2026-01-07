import { X } from "lucide-react";
import { useState, useEffect } from "react";

const weekdays = [
  "SUNDAY",
  "MONDAY", 
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY"
];

const getGivingDay = () => {
  const today = new Date();
  const dayName = weekdays[today.getDay()];
  return `GIVING${dayName}`;
};

const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [givingDay, setGivingDay] = useState(getGivingDay());

  useEffect(() => {
    // Update at midnight
    const interval = setInterval(() => {
      setGivingDay(getGivingDay());
    }, 1000 * 60 * 60); // Check every hour

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-accent text-accent-foreground py-2 px-4 relative">
      <div className="container mx-auto flex items-center justify-center text-center">
        <p className="text-sm font-medium">
          This <span className="font-bold">#{givingDay}</span>, support India-GRULAC partnerships and cooperation.{" "}
          <a href="#contact" className="underline font-bold hover:opacity-80 transition-opacity">
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
