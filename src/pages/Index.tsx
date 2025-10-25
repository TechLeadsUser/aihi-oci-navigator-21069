import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import IntroOverview from "@/components/IntroOverview";
import OCIServices from "@/components/OCIServices";
import IndustryFocus from "@/components/IndustryFocus";
import KeyBenefits from "@/components/KeyBenefits";
import ImplementationApproach from "@/components/ImplementationApproach";
import WhyChooseAIHI from "@/components/WhyChooseAIHI";
import ContactCTA from "@/components/ContactCTA";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <HeroSection onOpenForm={() => setIsFormOpen(true)} />
      <IntroOverview />
      <OCIServices />
      <IndustryFocus />
      <KeyBenefits />
      <ImplementationApproach />
      <WhyChooseAIHI />
      <ContactCTA onOpenForm={() => setIsFormOpen(true)} />
      <ContactForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </main>
  );
};

export default Index;
