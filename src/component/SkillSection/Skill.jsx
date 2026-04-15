import { skillData } from "../../data/skillData";

export default function Skill() {
  return (
    <div className="container mx-auto px-6 py-14">
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
        My{" "}
        <span className="bg-linear-to-r from-purple-600 to-emerald-400 bg-clip-text text-transparent">
          Skills
        </span>
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillData.map((section, index) => (
          <div
            key={index}
            className="bg-emerald-400/10 border border-emerald-400/50 rounded-2xl p-6 hover:border-emerald-400/50 transition-colors"
          >
            <h3 className="text-gray-300 text-xl font-bold mb-8 text-center">
              {section.category}
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col-1 items-center justify-center gap-3
                             border border-emerald-400/50 rounded-xl px-4 py-2
                              hover:border-emerald-400/50
                             transition-all"
                >
                  {/* ICON */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg ">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-8 h-8 object-contain"
                    />
                  </div>

                  {/* NAME */}
                  <span className="text-emerald-400 text-sm text-center font-medium">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
