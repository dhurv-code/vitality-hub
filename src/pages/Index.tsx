import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import ProgramsSection from "@/components/ProgramsSection";
import ExercisesSection from "@/components/ExercisesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HoursSection from "@/components/HoursSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FacilitiesSection />
      <ProgramsSection />
      <ExercisesSection />
      <GallerySection />
      <TestimonialsSection />
      <HoursSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
