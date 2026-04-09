import { useEffect, useState } from "react";
import shinchanWave from "@/assets/shinchan-wave.png";

const IntroSection = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-foreground/90 to-foreground/70">
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {["🌸", "⭐", "🎀", "✨", "🌟", "💫"].map((emoji, i) => (
          <span
            key={i}
            className="absolute text-2xl md:text-4xl animate-float opacity-40"
            style={{
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      <div
        className={`text-center transition-all duration-[2000ms] ease-out ${
          show ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
        }`}
      >
        <p className="text-pastel-yellow text-lg md:text-xl mb-4 font-handwritten tracking-wider">
          psst… hey you! 👀
        </p>
        <h1 className="text-4xl md:text-7xl font-playful text-pastel-pink leading-tight">
          Oiiii…
        </h1>
        <p className="text-2xl md:text-4xl mt-6 font-handwritten text-pastel-yellow">
          guess whose birthday is coming 😏
        </p>
      </div>

      {/* Shinchan sticker */}
      <img
        src={shinchanWave}
        alt="Shinchan waving"
        loading="lazy"
        width={120}
        height={120}
        className={`absolute bottom-12 right-8 md:right-16 w-24 md:w-32 animate-wiggle transition-all duration-1000 delay-[2000ms] ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      />

      <div
        className={`mt-16 transition-all duration-1000 delay-[2500ms] ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <span className="text-pastel-orange animate-bounce-gentle inline-block text-3xl">↓</span>
      </div>
    </section>
  );
};

export default IntroSection;
