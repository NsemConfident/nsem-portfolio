import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import ReviewOnScroll from "../ReviewOnScroll";

const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <ReviewOnScroll>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-center bg-clip-text text-transparent">
            Feature Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-white/10 rounded-2xl hover:translate-y-1 hover:border-blue-500/30 shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Portfolio Project</h3>
              <p className="text-gray-400 mb-4">
                Scalable and responsive web portfolio with react
              </p>
              <div className="mb-4">
                {["React JS", "Email Js", "Tailwind"].map((tools, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 text-sm rounded-2xl hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {tools}
                  </span>
                ))}
              </div>
              <div>
                <a
                  href=""
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project
                  <FaLongArrowAltRight />
                </a>
              </div>
            </div>
            <div className="p-6 border border-white/10 rounded-2xl hover:translate-y-1 hover:border-blue-500/30 shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Portfolio Project</h3>
              <p className="text-gray-400 mb-4">
                Scalable and responsive web portfolio with react
              </p>
              <div className="mb-4">
                {["React JS", "Email Js", "Tailwind"].map((tools, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 text-sm rounded-2xl hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {tools}
                  </span>
                ))}
              </div>
              <div>
                <a
                  href=""
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project
                  <FaLongArrowAltRight />
                </a>
              </div>
            </div>
            <div className="p-6 border border-white/10 rounded-2xl hover:translate-y-1 hover:border-blue-500/30 shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Portfolio Project</h3>
              <p className="text-gray-400 mb-4">
                Scalable and responsive web portfolio with react
              </p>
              <div className="mb-4">
                {["React JS", "Email Js", "Tailwind"].map((tools, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 text-sm rounded-2xl hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {tools}
                  </span>
                ))}
              </div>
              <div>
                <a
                  href=""
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project
                  <FaLongArrowAltRight />
                </a>
              </div>
            </div>
            <div className="p-6 border border-white/10 rounded-2xl hover:translate-y-1 hover:border-blue-500/30 shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Portfolio Project</h3>
              <p className="text-gray-400 mb-4">
                Scalable and responsive web portfolio with react
              </p>
              <div className="mb-4">
                {["React JS", "Email Js", "Tailwind"].map((tools, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 text-sm rounded-2xl hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {tools}
                  </span>
                ))}
              </div>
              <div>
                <a
                  href=""
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project
                  <FaLongArrowAltRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default Project;
