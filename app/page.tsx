import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { CredibilityStrip } from "@/components/credibility-strip";
import { ProjectsSection } from "@/components/projects-section";
import { ResearchSection } from "@/components/research-section";
import ExperienceSection from "@/components/experience-section";
import SkillsSection from "@/components/skills-section";
import HowIBuild from "@/components/how-i-build";
import MetricsSection from "@/components/metrics-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <CredibilityStrip />
        <ProjectsSection />
        <ResearchSection />
        <ExperienceSection />
        <SkillsSection />
        <HowIBuild />
        <MetricsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
