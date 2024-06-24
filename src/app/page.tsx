'use client'
import NavBar from "./components/NavBar";
import CustomCursor from "./components/custom/CustomCursor";
import ContactSection from "./sections/ContactSection";
import EducationSection from "./sections/EducationSection";
import HomeSection from "./sections/HomeSection";
import ProjectsSection from "./sections/ProjectsSection";
import TechSection from "./sections/TechSection";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <NavBar />
      <main id='home' className="pt-24">
        <HomeSection />
        <EducationSection />
        <TechSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
