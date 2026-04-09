import { useEffect, useRef, useState, useCallback } from "react";
import shinchanCake from "@/assets/shinchan-cake.png";
import shinchanParty from "@/assets/shinchan-party.png";

const CONFETTI_COLORS = [
  "hsl(340, 80%, 65%)", "hsl(45, 100%, 75%)", "hsl(30, 90%, 70%)",
  "hsl(200, 80%, 85%)", "hsl(150, 60%, 72%)", "hsl(340, 80%, 85%)",
];

const ConfettiPiece = ({ delay, left }: { delay: number; left: number }) => (
  <div
    className="absolute w-3 h-3 rounded-sm"
    style={{
      left: `${left}%`,
      top: "-5%",
      backgroundColor: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      animation: `confetti-fall ${3 + Math.random() * 2}s linear ${delay}s forwards`,
    }}
  />
);

const FinaleSection = () => {
  const [visible, setVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [surprise, setSurprise] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setShowConfetti(true), 800);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSurprise = useCallback(() => setSurprise(true), []);

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-primary/20 to-pastel-yellow"
    >
      {/* Confetti */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <ConfettiPiece key={i} delay={Math.random() * 2} left={Math.random() * 100} />
          ))}
        </div>
      )}

      {/* Shinchan stickers on sides */}
      <img
        src={shinchanCake}
        alt="Shinchan with cake"
        loading="lazy"
        width={120}
        height={120}
        className={`absolute top-20 left-4 md:left-16 w-20 md:w-28 animate-float transition-all duration-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />
      <img
        src={shinchanParty}
        alt="Shinchan partying"
        loading="lazy"
        width={120}
        height={120}
        className={`absolute top-20 right-4 md:right-16 w-20 md:w-28 animate-wiggle transition-all duration-700 delay-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className={`relative z-10 text-center px-4 ${visible ? "animate-pop-in" : "opacity-0"}`}>
        <p className="text-6xl md:text-8xl mb-4">🎂</p>
        <h2 className="text-4xl md:text-7xl font-playful text-deep-pink leading-tight">
          Happy Birthday
        </h2>
        <h2 className="text-5xl md:text-8xl font-playful text-primary mt-2">
          Akka! 💖
        </h2>
        <p className="mt-6 text-xl font-handwritten text-foreground/70">
          🎉 Wishing you all the love & happiness 🎉
        </p>

        {!surprise ? (
          <button
            onClick={handleSurprise}
            className="mt-10 px-8 py-4 bg-primary text-primary-foreground font-playful text-lg rounded-full 
            shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 
            animate-bounce-gentle"
          >
            Click for Surprise 😏
          </button>
        ) : (
          <div className="mt-10 animate-pop-in">
            <div className="bg-card/80 backdrop-blur-md rounded-2xl p-8 max-w-md mx-auto shadow-2xl border border-border">
              <p className="text-4xl mb-4">🤗💖</p>
              <p className="text-xl md:text-2xl font-handwritten text-foreground leading-relaxed">
                You're not just my akka…
                <br />
                You're my best friend, my guide, and my forever person.
                <br /><br />
                Love you to the moon and back! 🌙✨
              </p>
              <p className="mt-4 text-3xl">🫶</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FinaleSection;
