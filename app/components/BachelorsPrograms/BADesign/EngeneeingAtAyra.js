import React from "react"

const yearJourney = [
  {
    title: "Aspire - Igniting Curiosity (Year 1)",
    description:
      "Explore foundations in engineering, mathematics, and computing through labs, projects, and collaborative learning.",
  },
  {
    title: "Yearn - Building Mastery (Year 2)",
    description:
      "Develop deep engineering knowledge, analytical thinking, programming expertise and problem-solving skills.",
  },
  {
    title: "Relish - Creating Solutions (Year 3)",
    description:
      "Apply learning through advanced courses, internships, hackathons, and collaborative innovation projects addressing real-world challenges.",
  },
  {
    title: "Achieve - Launching the Future (Year 4)",
    description:
      "Integrate academic learning with industry experience through internships, capstone projects, and entrepreneurial exploration.",
  },
]

const EngeneeingAtAyra = () => {
  return (
    <section className="w-full bg-[#FF4D48] py-6 md:py-7">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-[#FFFFFF] text-[20px] md:text-[24px] leading-[1.2] max-w-[680px] text-left">
          Engineering at AYRA unfolds as a four-year journey of curiosity,
          exploration, and application.
        </h2>

        <div className="mt-5 grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-4 md:gap-y-6 lg:grid-cols-4 lg:gap-x-0">
          {yearJourney.map((item, index) => (
            <div
              key={item.title}
              className={`py-2 pr-0 text-left md:pr-5 lg:pr-6 ${
                index !== yearJourney.length - 1
                  ? "lg:border-r lg:border-dotted lg:border-[#FFB2B7] lg:mr-5"
                  : ""
              }`}
            >
              <h3 className="text-[#FFB2B7] font-tthoves-bold text-[20px] md:text-[18px] leading-[1.2]">
                {item.title}
              </h3>
              <p className="mt-2 text-[#FFFFFF] font-tthoves-light text-[15px] md:text-[16px] leading-[1.35]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EngeneeingAtAyra
