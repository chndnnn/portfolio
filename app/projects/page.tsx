import { projects } from "@/constants/projectsData";
import { ArrowUpRight  } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold">Projects</h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          A selection of projects showcasing my experience in
          full-stack development, mobile applications, real-time
          communication, and scalable web solutions.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        {projects.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden transition hover:border-indigo-500 hover:-translate-y-1"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-3 py-1 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 mt-8">

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300"
                  >
                    Live Demo
                    <ArrowUpRight size={18} />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center gap-2 text-gray-300 hover:text-white"
                  >
                    <FaGithub  size={18} />
                    Code
                  </a>
                )}

              </div>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
}