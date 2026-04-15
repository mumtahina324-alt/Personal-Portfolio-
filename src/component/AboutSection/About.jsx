import AboutImg from "./AboutImg";

export default function About() {
  return (
    <section className="container mx-auto px-14 py-10 mb-10">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Side Image */}
        <AboutImg />

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 space-y-2">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span className="bg-linear-to-r from-purple-600 to-emerald-400 bg-clip-text text-transparent inline-block">
              About
            </span>{" "}
            <span className="text-white inline-block">Me</span>
          </h1>

          <p className="text-gray-100 leading-relaxed font-light0 mt-4">
            I’m a dedicated Frontend Developer specializing in React, Tailwind
            CSS,and modern UI design.I focus on building responsive, accessible
            and user-centered web interfaces.
          </p>

          <p className="text-gray-100 leading-relaxed font-light">
            As a developer with a hearing disability, I bring strong
            concentration, patience, and a deep appreciation for accessibility
            in digital products. I communicate clearly through written and
            visual tools and work effectively in structured environments.
          </p>

          <p className="text-gray-100 leading-relaxed font-light">
            I’m actively seeking opportunities to grow as a frontend developer
            and contribute meaningful value through clean and inclusive code.
          </p>

          <button className="mt-6 font-medium px-8 py-2 border border-emerald-400 text-emerald-400 rounded-xl hover:bg-emerald-400 hover:text-white hover:scale-105 transition ">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
