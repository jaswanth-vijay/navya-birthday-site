import IntroSection from "@/components/IntroSection";
import RevealSection from "@/components/RevealSection";
import PhotoMemorySection from "@/components/PhotoMemorySection";
import EmotionalSection from "@/components/EmotionalSection";
import FinaleSection from "@/components/FinaleSection";
import MusicToggle from "@/components/MusicToggle";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <MusicToggle />
      <IntroSection />
      <RevealSection />
      <PhotoMemorySection />
      <EmotionalSection />
      <FinaleSection />
    </div>
  );
};

export default Index;
