import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import AboutSection from "@/components/AboutSection";
import WaitlistSection from "@/components/WaitlistSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <AboutSection />
        <WaitlistSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
