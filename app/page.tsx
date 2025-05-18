import { Header } from "@/components/Header";
import { PopupDialog } from "@/components/PopupDialog";
import { HeroSection } from "@/components/HeroSection";
import { IntegrationSection } from "@/components/IntegrationSection";
import { OpportunitySection } from "@/components/OpportunitySection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AssistantsSection } from "@/components/AssistantsSection";
import { AdvantagesSection } from "@/components/AdvantagesSection";
import { SuccessSection } from "@/components/SuccessSection";
import { BusinessEdgeSection } from "@/components/BusinessEdgeSection";
import { AIRevolutionSection } from "@/components/AIRevolutionSection";
import { JoinRevolutionSection } from "@/components/JoinRevolutionSection";

export default function Home() {
  return (
    <main>
      <PopupDialog />
      <Header />
      <HeroSection />
      <IntegrationSection />
      <OpportunitySection />
      <FeaturesSection />
      <AssistantsSection />
      <AdvantagesSection />
      <SuccessSection />
      <BusinessEdgeSection />
      <AIRevolutionSection />
      <JoinRevolutionSection />
    </main>
  );
}
