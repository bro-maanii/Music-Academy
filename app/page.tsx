import FeatureCoures from "@/components/FeatureCoures";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import VoicesOfSuccess from "@/components/VoicesOfSuccess";
import Webniar from "@/components/Webniar";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen antialiased ">
      <HeroSection />
      <FeatureCoures />
      <WhyChooseUs />
      <VoicesOfSuccess />
      <Webniar />
      <Instructors />
      <div className="flex w-full ">
          <Footer />
      </div>
    </main>
  );
}
