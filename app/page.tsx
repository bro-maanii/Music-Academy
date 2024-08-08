import FeatureCoures from "@/components/FeatureCoures";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen antialiased ">
      <HeroSection />
      <FeatureCoures />
      <WhyChooseUs />
    </main>
  );
}
