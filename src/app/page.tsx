import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/sections/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">

      <Hero />
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </section>
      <Footer />
    </main>
  );
}
