import About from "./component/AboutSection/About";
import Contact from "./component/ContactSection/Contact";
import Timeline from "./component/EducationSection/Timeline";
import Experience from "./component/Experience/Experience";
import Footer from "./component/Footer/Footer";
import Hero from "./component/HeroSection/Hero";
import Nav from "./component/NavSection/Nav";
import Project from "./component/Project/Project";
import Skill from "./component/SkillSection/Skill";
import State from "./component/StateSaction/State";

export default function App() {
  return (
    <div className="min-h-screen flex justify-center px-4 sm:px-6 lg:px-8">
      <div
        className="
        w-full 
        max-w-7xl 
        flex flex-col gap-6 
        py-6 sm:py-8 lg:py-10
        backdrop-blur-xl bg-black/10
        border border-emerald-400/30
        rounded-2xl sm:rounded-3xl
        my-6 sm:my-10

        {/* Mobile content centered */}
        items-center
        sm:items-start sm:text-left
        "
      >
        <Nav />
        <Hero />
        <State />
        <About />
        <Timeline />
        <Experience />
        <Skill />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
