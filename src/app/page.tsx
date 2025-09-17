import HeroSection from '@/components/home/HeroSection';
import ValuePropositionSection from '@/components/home/ValuePropositionSection';
import MembershipSection from '@/components/home/MembershipSection';
import FocusAreasSection from '@/components/home/FocusAreasSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import ApplicationProcessSection from '@/components/home/ApplicationProcessSection';
import EventsSection from '@/components/home/EventsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValuePropositionSection />
      <MembershipSection />
      <FocusAreasSection />
      <BenefitsSection />
      <ApplicationProcessSection />
      <EventsSection />
    </>
  );
}
