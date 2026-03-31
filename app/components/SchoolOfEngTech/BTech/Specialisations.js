import React from "react"
import Image from "next/image"

const programs = [
  {
    title: "B.Tech in Computer Science",
    text: "Focuses on software engineering, computing systems, algorithms, and modern software development technologies.",
  },
  {
    title: "B.Tech in Artificial Intelligence & Machine Learning",
    text: "Centers on intelligent systems, deep learning, data-driven decision-making, and the design of autonomous technologies.",
  },
  {
    title: "B.Tech in Data Science",
    text: "Emphasizes data analytics, statistical modeling, big data technologies, and data-driven business and technology solutions.",
  },
]

const Specialisations = () => {
  return (
    <section className="w-full bg-white py-8 md:py-10">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="font-schabo uppercase text-[#744AC6] text-[40px] sm:text-[48px] md:text-[68px] lg:text-[88px] leading-[0.95] text-left">
          Specialisations
        </h2>

        <p className="mt-4 font-tthoves-light text-black text-sm md:text-base max-w-[980px] text-left mx-0">
          At AYRA, specialisations are approached with clarity. Students begin
          with strong engineering foundations and then choose focus areas
          aligned with their interests and career goals.
        </p>

        <div className="mt-5 border border-dashed border-[#9BC8E7] p-4 sm:p-5 md:p-6 w-full md:max-w-[760px] mx-0">
          <h3 className="font-tthoves-bold text-black text-base sm:text-lg md:text-2xl text-left">
            Students may choose from the following B.Tech programs:
          </h3>

          <ul className="mt-4 space-y-3">
            {programs.map((program) => (
              <li key={program.title} className="flex items-start gap-2">
                <Image
                  src="/rocket-icon.svg"
                  width={16}
                  height={16}
                  alt="bullet"
                  className="mt-1 h-4 w-4 shrink-0 rotate-45"
                />
                <p className="font-tthoves-light text-black text-sm md:text-base">
                  {program.title} : {program.text}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-4 font-tthoves-light text-black text-sm md:text-base">
            Each program provides strong computing foundations while offering
            specialized knowledge aligned with industry demands.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Specialisations
