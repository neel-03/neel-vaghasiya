'use client'
import NavBar from "./components/NavBar";
import HomeSection from "./sections/HomeSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main id='home' className="pt-24">
        <HomeSection />
      </main>
    </>
  );
}
