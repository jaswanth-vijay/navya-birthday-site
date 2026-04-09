import { useEffect, useRef, useState } from "react";
import shinchanDance from "@/assets/shinchan-dance.png";

const RevealSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-pastel-yellow to-pastel-orange"
    >
      {/* Cartoon burst */}
      <div
        className={`absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-pastel-pink/30 transition-all duration-1000 ${
          visible ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      />

      <div className={`relative z-10 text-center ${visible ? "animate-pop-in" : "opacity-0"}`}>
        <p className="text-6xl mb-4">🎉</p>
        <h2 className="text-3xl md:text-6xl font-playful text-deep-pink leading-snug">
          It's MY favorite
        </h2>
        <h2 className="text-4xl md:text-7xl font-playful text-primary mt-2">
          Akka 💖
        </h2>
      </div>

      {/* Shinchan sticker */}
      <img
        src={shinchanDance}
        alt="Shinchan dancing"
        loading="lazy"
        width={140}
        height={140}
        className={`absolute bottom-16 left-6 md:left-20 w-28 md:w-36 animate-float transition-all duration-700 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      />

      {/* Floating stickers */}
      {visible && (
        <div className="absolute inset-0 pointer-events-none">
          {["🎈", "🎀", "🧁", "🎂", "🌸", "💝", "⭐", "🎊"].map((e, i) => (
            <span
              key={i}
              className="absolute text-3xl md:text-5xl animate-float"
              style={{
                left: `${10 + i * 11}%`,
                top: `${15 + (i % 4) * 20}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + (i % 3)}s`,
              }}
            >
              {e}
            </span>
          ))}
        </div>
      )}
    </section>
  );
};

export default RevealSection;
