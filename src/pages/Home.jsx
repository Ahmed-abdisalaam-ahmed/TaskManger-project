import { Link } from "react-router-dom";
import {
  Sparkles,
  CheckCircle,
  Zap,
  ShieldCheck,
  Plus,
  Minus,
  Coffee,
} from "lucide-react";
import Footer from "../components/Footer";
import FinalCall from "../components/ui/FinalCallSection";
import FaqSection from "../components/ui/FaqSection";
import FeaturesSection from "../components/ui/FeaturesSection";
import HeroSection from "../components/ui/Herosection";

const Home = () => {
  return (
    <div className="dark:bg-slate-950 min-h-screen dark:text-white text-slate-900 font-sans">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Grid */}
      <FeaturesSection />

      {/* Faq sEction */}
      <FaqSection />

      {/* Final Action */}
      <FinalCall />

      <Footer />
    </div>
  );
};

export default Home;
