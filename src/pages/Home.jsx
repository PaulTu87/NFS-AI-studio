import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Process from "../components/Process";
import Results from "../components/Results";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#0d1f2d" }}>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Process />
      <Results />
      <Contact />
      <Footer />
    </div>
  );
}
