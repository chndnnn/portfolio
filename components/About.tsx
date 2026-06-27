import { about } from "@/constants/aboutData";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">

      <h1 className="text-5xl font-bold mb-10">
        {about.title}
      </h1>

      <div className="grid md:grid-cols-2 gap-16">

        {/* Left Side */}
        <div className="space-y-6 text-lg leading-8 text-gray-700">
          {about.description.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-6">

          {about.quickFacts.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-sm uppercase tracking-wide text-gray-500">
                {item.title}
              </h3>

              <p className="mt-3 text-xl font-semibold">
                {item.value}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}