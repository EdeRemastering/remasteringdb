import { PresentationNavbar } from "@/components/presentation-page/presentation-navbar";
import { IndexSection } from "@/components/presentation-page/index-section";
import { FeaturesSection } from "@/components/presentation-page/features-section";
import { DemoSection } from "@/components/presentation-page/demo-section";
import { PricingSection } from "@/components/presentation-page/pricing-section";
import { DocsSection } from "@/components/presentation-page/docs-section";
import { ContactSection } from "@/components/presentation-page/contact-section";

export default function Home() {
  return (
    <>  
      <div className="w-screen">
        <PresentationNavbar />
        <IndexSection />
        <FeaturesSection />
        <DemoSection />
        <PricingSection />
        <DocsSection />
        <ContactSection />
      </div>
    </>
  );
}
