export default function Footer() {
  return (
    <footer className="container mx-auto border-t-2 border-emerald-400/50 ">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">
        {/* Name */}
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="bg-linear-to-r from-purple-600 to-emerald-400 bg-clip-text text-transparent inline-block">
            portfolio
          </span>
          <span className="text-white">.konika</span>
        </h2>
        {/* Role */}
        <p className="mt-4 text-sm text-emerald-200">
          UI/UX Designer & Front End Developer
        </p>
        {/* Navigation */}
        <nav className="mt-8">
          <ul className="flex flex-wrap justify-center gap-6 text-[16px] text-white">
            {[
              "Home",
              "About",
              "Experience",
              "Skills",
              "Projects",
              "Contact",
            ].map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-emerald-400 transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
        {/* Divider */}
        <div className="my-8 h-px w-8/12 bg-emerald-400/50 justify-center mx-auto" />
        {/* Copyright */}
        <p className="text-xs text-emerald-400">
          © 2026 Konika. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
