import React from "react";
import { MdCastForEducation } from "react-icons/md";
import { GrWorkshop } from "react-icons/gr";
import ReviewOnScroll from "../ReviewOnScroll";

const About = () => {
  const Frontend = ["React Js", "View", "Typescript", "TailwindCSS"];
  const Backend = ["Laravel", "Supabase", "Node", "MYSQL"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <ReviewOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-center bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate Full-stack web developer with expertize in building
              scalable web application and creating innovative solutions
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {Frontend.map((skills, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 text-sm rounded-2xl hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                      {skills}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {Backend.map((skills, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 text-sm rounded-2xl hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                      {skills}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                <MdCastForEducation />
                Education
              </h3>
              <ul className="list-disc text-gray-300 space-y-2">
                <li>
                  <strong>B.S. Computer Engineering</strong> - University of
                  Buea (2025 - 2026)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development,
                  Database Administration, Mobile Development
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                <GrWorkshop />
                work Experience
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="font-semibold">
                    {" "}
                    Software Engineer at Gilteck (2024 - present)
                  </h3>
                  <p>
                    Developed and maintained scalable solution for a school
                    management platform Edu Scholar
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">
                    {" "}
                    Intern at Tech Chantier (2024 - 2025)
                  </h3>
                  <p>
                    Assisted in building an buiding E-commerce web app and
                    integrating with APIs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default About;
