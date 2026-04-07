import { Download } from "lucide-react";

export default function Resume() {
  return (
    <a
      href="/Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-auto flex justify-center items-center gap-3 px-8 py-3 bg-linear-to-r from-purple-600 to-emerald-500 rounded-xl text-white font-medium hover:scale-105 transition-transform shadow-lg"
    >
      Download CV
      <Download size={18} className="animate-bounce" />
    </a>
  );
}
