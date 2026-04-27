import { ExternalLink, Github } from "lucide-react";
import { projectData } from "../../data/projectData";

export default function Project() {
  return (
    <section className="py-14 text-white">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
          <span className="text-white">My </span>
          <span className="bg-linear-to-r from-purple-600 to-emerald-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="bg-emerald-500/10 backdrop-blur-lg rounded-2xl overflow-hidden 
              shadow-lg hover:scale-[1.03] hover:shadow-2xl transition duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between h-auto md:min-h-55">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="text-xs bg-emerald-400/10 border border-emerald-400/50 text-emerald-400 px-4 py-1 rounded-xl"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-emerald-400/20 my-3"></div>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 text-sm 
                    bg-emerald-600 
                    hover:bg-emerald-700 
                    px-4 py-2 rounded-xl transition-all duration-300 shadow-md"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 text-sm 
                    bg-emerald-400/10 border border-emerald-400/50
                    px-4 py-2 rounded-xl transition-all duration-300"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
