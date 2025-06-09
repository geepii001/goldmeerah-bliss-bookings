import Card from "@/components/ui/carousel-card";

const GALLERY_DATA = [
  {
    id: 1,
    imgUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800",
    content: "Luxurious spa treatment rooms designed for your comfort and relaxation",
  },
  {
    id: 2,
    imgUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800",
    content: "Professional massage therapy services for ultimate stress relief",
  },
  {
    id: 3,
    imgUrl: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800",
    content: "State-of-the-art salon facilities for all your beauty needs",
  },
  {
    id: 4,
    imgUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800",
    content: "Peaceful and serene environment for your relaxation",
  },
  {
    id: 5,
    imgUrl: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800",
    content: "Premium beauty treatments and services",
  },
  {
    id: 6,
    imgUrl: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800",
    content: "Expert staff providing personalized care and attention",
  },
];

const Gallery = () => {
  return (
    <section className="py-20 bg-background" id="gallery">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our <span className="text-gradient">Gallery</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Experience the luxury and professional care at Gold-Meerah Spa and Salon through our gallery
        </p>
        <Card data={GALLERY_DATA} cardsPerView={3} />
      </div>
    </section>
  );
};

export default Gallery;