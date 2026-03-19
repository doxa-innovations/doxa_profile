import Header from "@/app/components/Header";
import HeroSection from "@/app/components/Hero";
import SpecializeSection from "@/app/components/Specialize";
import OurTeam from "@/app/components/ourteam";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-doxa-dark gap-6 text-white overflow-x-hidden">
      {/* 1. Navigation */}
      <Header />

      {/* 2. Hero / Landing Section */}
      <HeroSection />

      {/* 3. Partners / Trust Section */}

      <SpecializeSection />

      {/* 4. Team Section */}
      <OurTeam />
    </main>
  );
}
