const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    caption: "India–Brazil Business Meet 2024",
    category: "Trade Fair",
  },
  {
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
    caption: "Cultural Exchange, Delhi 2025",
    category: "Cultural Program",
  },
  {
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
    caption: "High-Level Diplomatic Meeting",
    category: "Delegation",
  },
  {
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
    caption: "Academic MoU Signing Ceremony",
    category: "Academic",
  },
  {
    image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&h=400&fit=crop",
    caption: "India–LAC Celebrations",
    category: "Festival",
  },
  {
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    caption: "Technology Workshop 2024",
    category: "Workshop",
  },
];

const GallerySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Gallery
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            India × GRULAC <span className="text-primary">Moments</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            A Glimpse of ILACC Activities & Engagements
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                index === 0 || index === 5 ? "md:row-span-2" : ""
              }`}
            >
              <div className={`aspect-[4/3] ${index === 0 || index === 5 ? "md:aspect-[4/5]" : ""}`}>
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Caption */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded mb-2 w-fit">
                  {item.category}
                </span>
                <h3 className="font-heading text-sm md:text-base font-bold text-white">
                  {item.caption}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
          >
            View All Gallery Photos
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
