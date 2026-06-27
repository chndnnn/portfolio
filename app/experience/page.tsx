import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/constants/expericenceData";

export default function Experience() {
  return (
    <section className="py-10 px-6">
      <h1 className="text-5xl font-bold mb-12">
        Experience
      </h1>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <ExperienceCard
            key={exp.company}
            {...exp}
          />
        ))}
      </div>
    </section>
  );
}