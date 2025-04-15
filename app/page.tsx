import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutUsSection from "./components/AboutUsSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <AboutUsSection />
      </main>
      <Footer />
    </div>
  );
}
