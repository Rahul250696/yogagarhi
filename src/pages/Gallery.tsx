import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-yoga-bali.jpg";
import waterfallImg from "@/assets/activity-waterfall.jpg";
import soundHealingImg from "@/assets/activity-sound-healing.jpg";
import ayurvedaImg from "@/assets/activity-ayurveda.jpg";

const galleryImages = [
  { src: heroImage, alt: "Yoga training in Bali" },
  { src: waterfallImg, alt: "Waterfall excursion" },
  { src: soundHealingImg, alt: "Sound healing session" },
  { src: ayurvedaImg, alt: "Ayurveda workshop" },
  { src: heroImage, alt: "Yoga practice" },
  { src: waterfallImg, alt: "Nature activities" },
  { src: soundHealingImg, alt: "Meditation" },
  { src: ayurvedaImg, alt: "Wellness workshop" },
];

export default function Gallery() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Gallery
          </h1>
          <p className="text-xl opacity-90">
            Glimpses of life at YogaGarhi
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-card hover:shadow-elevated transition-all duration-500"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
