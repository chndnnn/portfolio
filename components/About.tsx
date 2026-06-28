import { about } from "@/constants/aboutData";
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Code2,
} from "lucide-react";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="mb-16 text-center">

        <h2 className="mt-3 text-5xl font-bold">
          {about.title}
        </h2>

        <p className="mt-5 text-gray-500 max-w-3xl mx-auto text-lg">
          Passionate about building scalable web applications,
          intuitive user experiences, and solving real-world
          problems through software engineering.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">

        {/* Left */}

        <div className="lg:col-span-2">

          <div className="space-y-6 text-gray-200 leading-8 text-lg">

            {about.description.map((item, index) => (
              <p key={index}>{item}</p>
            ))}

          </div>

        </div>

        {/* Right */}

        <div className="rounded-2xl border border-gray-700 bg-neutral-900 p-8 shadow-lg h-fit">

          <div className="space-y-7">

            <div className="flex items-center gap-4">
              <Briefcase className="text-indigo-400" />
              <div>
                <p className="text-sm text-gray-400">Experience</p>
                <h4 className="font-semibold text-white">
                  3 Years
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <GraduationCap className="text-indigo-400" />
              <div>
                <p className="text-sm text-gray-400">Education</p>
                <h4 className="font-semibold text-white">
                  B.E. Computer Engineering
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-indigo-400" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <h4 className="font-semibold text-white">
                  Mumbai, India
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Code2 className="text-indigo-400" />
              <div>
                <p className="text-sm text-gray-400">Specialization</p>
                <h4 className="font-semibold text-white">
                  Frontend & Full Stack
                </h4>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-6">

              <h4 className="text-white font-semibold mb-4">
                Tech Stack
              </h4>

              <div className="flex flex-wrap gap-2">

                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Redux",
                  "React Native",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Java",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-indigo-500/40 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}