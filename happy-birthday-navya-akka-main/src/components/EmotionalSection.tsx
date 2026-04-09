import { useEffect, useRef, useState } from "react";
import shinchanHeart from "@/assets/shinchan-heart.png";

const fullText = "I won't say this again okay 😤… but you're the best akka ever 💕";

const EmotionalSection = () => {
  const [visible, setVisible] = useState(false);
  const [typed, setTyped] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [visible]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-pastel-pink to-primary/20"
    >
      {/* Blurred circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pastel-yellow/40 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pastel-pink/50 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <img
          src={shinchanHeart}
          alt="Shinchan making heart"
          loading="lazy"
          width={100}
          height={100}
          className={`mx-auto w-20 md:w-28 mb-6 transition-all duration-1000 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
        <p className="text-xl md:text-3xl font-handwritten text-foreground leading-relaxed min-h-[4rem]">
          {typed}
          <span
            className="inline-block w-0.5 h-6 ml-1 align-middle"
            style={{
              borderRight: "2px solid hsl(var(--primary))",
              animation: "typing-cursor 1s infinite",
            }}
          />
        </p>
        <p
          className={`mt-12 text-foreground/60 font-handwritten text-lg transition-all duration-1000 delay-[4000ms] ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          — your annoying but loving Shinchan 🤗
        </p>
      </div>
    </section>
  );
};

export default EmotionalSection;
