import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase">
            Contact
          </p>

          <h1 className="text-5xl font-bold mt-3">
            Let's Build Something Great
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-slate-400 text-lg">
            Whether you have a project, job opportunity, or simply want to
            connect, feel free to reach out. I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            <div className="bg-slate-900 rounded-2xl p-6 flex items-center gap-5 border border-slate-800 hover:border-cyan-500 transition">

              <div className="bg-cyan-500/20 p-4 rounded-full">
                <FaEnvelope className="text-cyan-400 text-2xl" />
              </div>

              <div>
                <h3 className="font-semibold text-xl">
                  Email
                </h3>

                <p className="text-slate-400">
                  chndn136@gmail.com
                </p>
              </div>

            </div>

            <div className="bg-slate-900 rounded-2xl p-6 flex items-center gap-5 border border-slate-800 hover:border-cyan-500 transition">

              <div className="bg-cyan-500/20 p-4 rounded-full">
                <FaPhone className="text-cyan-400 text-2xl" />
              </div>

              <div>
                <h3 className="font-semibold text-xl">
                  Phone
                </h3>

                <p className="text-slate-400">
                  +91 9325202699
                </p>
              </div>

            </div>

            <div className="bg-slate-900 rounded-2xl p-6 flex items-center gap-5 border border-slate-800 hover:border-cyan-500 transition">

              <div className="bg-cyan-500/20 p-4 rounded-full">
                <FaLocationDot className="text-cyan-400 text-2xl" />
              </div>

              <div>
                <h3 className="font-semibold text-xl">
                  Location
                </h3>

                <p className="text-slate-400">
                  Mumbai, Maharashtra, India
                </p>
              </div>

            </div>

            {/* Social Links */}

            <div className="flex gap-5 pt-4">

              <a
                href="https://github.com/chndnnn"
                target="_blank"
                className="bg-slate-900 p-4 rounded-full border border-slate-800 hover:bg-cyan-500 hover:text-black transition"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                className="bg-slate-900 p-4 rounded-full border border-slate-800 hover:bg-cyan-500 hover:text-black transition"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="/resume.pdf"
                download
                className="px-6 flex items-center rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
              >
                Resume
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

            <h2 className="text-3xl font-semibold mb-8">
              Send a Message
            </h2>

            <form className="space-y-6">

              <div>
                <label className="block mb-2 text-slate-300">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-slate-300">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-slate-300">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Project Discussion"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-slate-300">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 resize-none outline-none focus:border-cyan-500"
                />
              </div>

              <button
                className="w-full bg-cyan-500 text-black py-3 rounded-lg font-semibold hover:bg-cyan-400 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}