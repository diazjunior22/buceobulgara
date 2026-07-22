import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import dynamic from "next/dynamic";

import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import DivePackages from "@/components/sections/DivePackages";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Timeline from "@/components/sections/Timeline";
import Courses from "@/components/sections/Courses";
import Videos from "@/components/sections/Videos";
import Footer from "@/components/ui/Footer";

const Gallery = dynamic(() => import("@/components/sections/Gallery"), {
  loading: () => <div className="h-[500px] bg-bg-white animate-pulse" />,
});

const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), {
  loading: () => <div className="h-[600px] bg-bg-white animate-pulse" />,
});

const FAQ = dynamic(() => import("@/components/sections/FAQ"), {
  loading: () => <div className="h-[500px] bg-bg-light animate-pulse" />,
});

const Contact = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => <div className="h-[700px] bg-bg-light animate-pulse" />,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <DivePackages />
        <WhyChooseUs />
        <Timeline />
        <Courses />
        <Videos />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
