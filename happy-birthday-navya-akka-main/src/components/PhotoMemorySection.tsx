import { useEffect, useRef, useState } from "react";
import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";
import photo4 from "@/assets/photo4.jpg";
import photo5 from "@/assets/photo5.jpg";
import photo6 from "@/assets/photo6.jpg";

const photos = [
  { src: photo1, caption: "The OG pose queen 👑", rotate: "-3deg" },
  { src: photo2, caption: "Main character energy 💃", rotate: "2deg" },
  { src: photo3, caption: "Grace level: 💯", rotate: "-2deg" },
  { src: photo4, caption: "That golden hour glow ✨", rotate: "3deg" },
  { src: photo5, caption: "Slaying in black 🖤", rotate: "-1deg" },
  { src: photo6, caption: "Twirl queen forever 🌀", rotate: "2deg" },
];

const PhotoCard = ({ photo, index }: { photo: typeof photos[0]; index: number }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const bgColors = [
    "bg-pastel-pink", "bg-pastel-yellow", "bg-pastel-orange",
    "bg-pastel-blue", "bg-pastel-green", "bg-pastel-pink",
  ];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        className={`${bgColors[index]} p-3 pb-14 rounded-lg shadow-xl hover:shadow-2xl 
        transition-transform duration-500 hover:scale-105 cursor-pointer group`}
        style={{ transform: `rotate(${photo.rotate})` }}
      >
        <div className="overflow-hidden rounded">
          <img
            src={photo.src}
            alt={photo.caption}
            className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <p className="absolute bottom-3 left-3 right-3 text-center font-handwritten text-foreground text-sm md:text-base">
          {photo.caption}
        </p>
      </div>
    </div>
  );
};

const PhotoMemorySection = () => {
  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-b from-pastel-orange to-pastel-pink relative">
      <h2 className="text-3xl md:text-5xl font-playful text-center text-deep-pink mb-4">
        Our Memories 📸
      </h2>
      <p className="text-center font-handwritten text-foreground/70 text-lg mb-12">
        Some moments that make me smile 🌸
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {photos.map((photo, i) => (
          <PhotoCard key={i} photo={photo} index={i} />
        ))}
      </div>
    </section>
  );
};

export default PhotoMemorySection;
