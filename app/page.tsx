"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
// import { FloatingNav } from "@/components/ui/FloatingNav"
// import { navItems } from "@/data";
// import Cursor from "@/components/cursor/Cursor";

const Grid = dynamic(() => import("@/components/Grid"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#1c1c22]" />,
});

const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#1c1c22]" />,
});

const RecentProject = dynamic(() => import("@/components/RecentProject"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#1c1c22]" />,
});

const Clients = dynamic(() => import("@/components/Clients"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#1c1c22]" />,
});

const Services = dynamic(() => import("@/components/Services"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#1c1c22]" />,
});

const SEO = dynamic(() => import("@/components/SEO"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#1c1c22]" />,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#1c1c22]" />,
});

const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#1c1c22]" />,
});

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <Suspense fallback={<div className="w-full h-full bg-[#1c1c22]" />}>
          <Navbar />
        </Suspense>
        {/* <FloatingNav navItems = {navItems} /> */}
        <Suspense fallback={<div className="w-full h-full bg-[#1c1c22]" />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<div className="w-full h-full bg-[#1c1c22]" />}>
          <Services />
        </Suspense>
        <Suspense fallback={<div className="w-full h-full bg-[#1c1c22]" />}>
          <Grid />
        </Suspense>
        <Suspense fallback={<div className="w-full h-full bg-[#1c1c22]" />}>
          <RecentProject />
        </Suspense>
        <Suspense fallback={<div className="w-full h-full bg-[#1c1c22]" />}>
          <Clients />
        </Suspense>
        <Suspense fallback={<div className="w-full h-full bg-[#1c1c22]" />}>
          <SEO />
        </Suspense>
        <Suspense fallback={<div className="w-full h-full bg-[#1c1c22]" />}>
          <Footer />
        </Suspense>
        {/* <Cursor /> */}
      </div>
    </main>
  );
}
