'use client'
import NavBar from "./components/NavBar";
import ContactSection from "./sections/ContactSection";
import EducationSection from "./sections/EducationSection";
import HomeSection from "./sections/HomeSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main id='home' className="pt-24">
        <HomeSection />
        <div id='education'>
          <EducationSection />
        </div>
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
