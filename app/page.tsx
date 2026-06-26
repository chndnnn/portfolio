import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-67px)] flex flex-col items-center justify-center  px-8">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl ">

        {/* Left Side - Profile Image */}
        <div className="relative w-64 h-64">
          <Image
            src="/profilepic.avif"
            alt="Chandan Das"
            fill
            priority
            className="rounded-full object-cover border-4 border-cyan-500 shadow-xl"
          />
        </div>

        {/* Right Side - Text */}
        <div className="text-center md:text-left">
          <p className="text-lg text-gray-600 mb-2">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold text-gray-900">
            Chandan Das
          </h1>

          <h2 className="mt-3 text-2xl text-cyan-600 font-semibold">
            Software Engineer
          </h2>

          <p className="mt-6 max-w-lg text-gray-600 leading-8">
            I build modern, scalable web applications using React,
            Next.js, Node.js, Java, and Spring Boot. I enjoy solving
            real-world problems and creating fast, user-friendly
            experiences.
          </p>
        </div>

      </div>
      
    </section>
  );
}