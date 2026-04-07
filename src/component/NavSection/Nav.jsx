import { Menu, X } from "lucide-react"; // Hamburger icons
import { useState } from "react";

export default function Nav() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skill" },
    { id: "contact", label: "Contact Us" },
  ];
  const handleContactClick = () => {
    alert(
      "Thank you for your interest! Please contact me via email at: mumtahina324@gmail.com",
    );
  };

  return (
    <nav className="w-full fixed top-2 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-2xl font-bold text-emerald-400">
          portfolio<span className="text-white">.konika</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {menu.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setActive(item.id)}
                className={`font-medium transition ${
                  active === item.id
                    ? "text-emerald-400 border-b-2 border-emerald-400 pb-1"
                    : "text-gray-300 hover:text-emerald-400"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Contact Button */}
        <a
          onClick={handleContactClick}
          href="#contact"
          className="hidden md:inline-block bg-linear-to-r from-purple-600 to-emerald-400 
            hover:from-emerald-600 hover:to-cyan-600 text-white px-5 py-2 rounded-md font-semibold transition"
        >
          Contact Us
        </a>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} className="text-emerald-400" />
          ) : (
            <Menu size={28} className="text-emerald-400" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden w-full bg-black/80 backdrop-blur-md flex flex-col items-center gap-6 py-6">
          {menu.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => {
                setActive(item.id);
                setIsOpen(false);
              }}
              className={`text-lg font-medium transition ${
                active === item.id
                  ? "text-emerald-400"
                  : "text-gray-300 hover:text-emerald-400"
              }`}
            >
              {item.label}
            </a>
          ))}

          {/* Mobile Contact Button */}
          <a
            onClick={handleContactClick}
            href="#contact"
            className="bg-linear-to-r from-purple-600 to-emerald-400 
              hover:from-emerald-600 hover:to-cyan-600 text-white px-6 py-2 rounded-md font-semibold transition"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
