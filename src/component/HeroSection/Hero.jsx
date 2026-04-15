import { Github, Instagram, Linkedin, Mail, Send } from "lucide-react";
import { useEffect, useState } from "react";
import HeroImg from "./HeroImg";
import Resume from "./Resume";

export default function Hero() {
  const texts = ["UI/UX Designer....", "Frontend Developer...."];

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const speed = isDeleting ? 60 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setCharIndex((p) => p + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((p) => p - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((p) => (p + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  const handleContactClick = () => {
    alert(
      "Thank you for your interest! Please contact me via email at: mumtahina324@gmail.com",
    );
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 md:px-20 py-10">
      <div className="max-w-7xl mx-auto px-2 py-8 flex flex-col md:flex-row items-center md:justify-between gap-3 md:gap-10">
        <div className="order-1 md:order-2 w-full max-w-70 sm:max-w-sm md:max-w-md mb-1 md:mb-0">
          <HeroImg />
        </div>

        {/* CONTENT */}
        <div className="text-white flex flex-col items-center md:items-start text-center md:text-left space-y-5 order-2 md:order-1 max-w-xl w-full">
          {/* Status */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/30">
            <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
              <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-emerald-500" />
            </span>
            <span className="text-emerald-300 text-xs sm:text-sm font-medium">
              Available for Work
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight">
            Hi, I’m{" "}
            <span className="bg-linear-to-r from-purple-600 to-emerald-400 bg-clip-text text-transparent inline-block">
              Konika
            </span>
          </h1>

          {/* Typing Effect */}
          <div className="text-lg sm:text-xl md:text-3xl font-medium text-emerald-400 h-8">
            {texts[textIndex].substring(0, charIndex)}
            <span className="animate-pulse">|</span>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg">
            I'm a passionate{" "}
            <span className="text-emerald-400">UI/UX Designer</span> and{" "}
            <span className="text-emerald-400">Frontend Developer</span> who
            builds clean, modern and user-friendly interfaces using{" "}
            <span className="text-emerald-400">
              HTML, CSS, JavaScript, React & Tailwind CSS
            </span>
            .
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center w-full sm:w-auto">
            <Resume />

            <button
              onClick={handleContactClick}
              className="w-full sm:w-auto flex justify-center items-center gap-3 px-8 py-3 border-2 border-emerald-400 text-emerald-400 rounded-xl font-medium hover:bg-emerald-400 hover:text-white hover:scale-105 transition-transform"
            >
              <Mail size={18} />
              Contact Me
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-6">
            {[Linkedin, Github, Instagram, Send].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 border border-emerald-400/60 rounded-full flex items-center justify-center hover:bg-emerald-400/20 hover:-translate-y-1 transition text-emerald-400"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
