import Navbar from "@/components/Navbar";
import ParallaxHero from "@/components/hero/ParallaxHero";
import AboutSection from "@/components/about/AboutSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import TeamSection from "@/components/team/TeamSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <ParallaxHero />
        <AboutSection />
        <ProjectsSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
