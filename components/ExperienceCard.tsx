type Props = {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
};

export default function ExperienceCard({
  company,
  role,
  duration,
  location,
  responsibilities,
}: Props) {
  return (
    <div className="rounded-xl border p-6 shadow-md">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <div>
          <h3 className="text-2xl font-bold">{role}</h3>
          <p className="text-cyan-600 font-semibold">{company}</p>
        </div>

        <div className="text-right text-gray-500">
          <p>{duration}</p>
          <p>{location}</p>
        </div>
      </div>

      <ul className="mt-6 list-disc pl-6 space-y-2">
        {responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}