'use client'
import NavBar from "./components/NavBar";
import HomeSection from "./sections/HomeSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="mt-24"> { /*pt-4 mt-28*/}
        <HomeSection />
      </main>
    </>
  );
}
