import { Calendar } from "lucide-react";
import { timelineData } from "../../data/timelineData";

export default function Timeline() {
  return (
    <div className="container mx-auto pt-4 pb-8 px-6 py-8 md:py-8 lg:py-4">
      {/* Header Section */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
        <span className="bg-linear-to-r from-purple-600 to-emerald-400 bg-clip-text text-transparent">
          Educ
        </span>
        <span className="text-white">ation</span>
      </h1>

      {/*  Timeline Grid */}
      <div className="max-w-6xl mx-0 md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {timelineData.map((item, index) => (
          <div key={index} className="relative flex group">
            {/* Timeline Line and Dot */}
            <div className="flex flex-col items-center mr-2">
              <div className="w-3 h-3 bg-emerald-400 rounded-full z-10 shadow-[0_0_10px_#22d3ee]"></div>
              <div className="w-0.5 h-full bg-emerald-300/50"></div>
              <div className="w-3 h-3 bg-emerald-400 rounded-full z-10 shadow-[0_0_10px_#22d3ee]"></div>
            </div>

            {/* Content Card */}
            <div className="flex-1 border border-emerald-400 bg-emerald-400/10 rounded-sm p-6 ">
              <div className="flex items-center text-emerald-400 mb-2">
                <span className="text-sm font-medium mr-2">{item.year}</span>
                <Calendar className="w-4 h-4" />
              </div>

              <h2 className="font-bold text-white text-xl mb-3">
                {item.title}
              </h2>

              <p className="text-gray-100 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
