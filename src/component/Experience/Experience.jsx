import Fresher from "../../assets/unemployment.png";

export default function Experience() {
  return (
    <section className="container mx-auto px-6 py-14">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-14 text-center">
        Exper<span className="text-emerald-400">ience</span>
      </h1>

      {/* Experience Card */}
      <div className="max-w-3xl mx-auto bg-emerald-400/10 border border-emerald-400/60 rounded-2xl p-8 md:p-10 shadow-xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Left Icon */}
          <div className="shrink-0">
            <img
              src={Fresher}
              alt="No Experience"
              className="w-28 h-28 md:w-36 md:h-36 object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-emerald-400 mb-4">
              No professional experience yet
            </h2>

            <p className="text-slate-300 leading-relaxed">
              I’m a fresher, currently learning React, Tailwind CSS, and modern
              UI/UX design. Excited to start my career and build amazing
              projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
