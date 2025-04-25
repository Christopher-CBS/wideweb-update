"use client";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
// import { FloatingNav } from "@/components/ui/FloatingNav"
// import { navItems } from "@/data";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import Cursor from "@/components/cursor/Cursor";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <Navbar />
        {/* <FloatingNav navItems = {navItems} /> */}
        <Hero />
        <Services />
        <Grid />
        <RecentProject />
        <Clients />
        <SEO />
        <Footer />
        {/* <Cursor /> */}
      </div>
    </main>
  );
}
