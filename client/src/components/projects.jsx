/** @format */

import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal website built with React and Tailwind to showcase my work and resume.",
      tech: ["React", "Tailwind", "Vite"],
      github: "https://github.com/yourusername/portfolio",
      demo: "https://yourname.vercel.app",
    },
  ];
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 text-white text-center">
        <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-6 text-blue-600">Projects</h2>
          <p className="mb-12 text-gray-200">
            A few things I've built recently.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl shadow-md border hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-blue-500 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-2">{project.description}</p>
                <p className="text-sm text-gray-200 mb-2">
                  Tech: {project.tech.join(", ")}
                </p>
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    Live Demo
                  </a>
                  <Link
                    to={`https://github.com/Shikhrar214/`}
                    target="_blank"
                    className="text-gray-100 hover:underline"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Projects;
