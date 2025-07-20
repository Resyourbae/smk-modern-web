import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { JurusanSection } from "./components/JurusanSection";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <JurusanSection />
      <AboutSection />
      <Footer />
    </div>
  );
}