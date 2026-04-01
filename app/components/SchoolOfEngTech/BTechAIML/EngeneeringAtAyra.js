import React from "react"

export default function EngeneeringAtAyra() {
  const journeySteps = [
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

  return (
    <section className="w-full bg-[#744AC6] py-6 md:py-8 lg:py-10">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="text-white font-tthoves-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-snug max-w-[800px]">
          Engineering at AYRA unfolds as a four-year journey of curiosity,
          exploration, and application.
        </h2>

        <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-0 lg:divide-x lg:divide-dotted lg:divide-[#92A0F0]">
          {journeySteps.map((item) => (
            <div
              key={item.title}
              className="text-left sm:px-4 lg:px-6 first:lg:pl-0 last:lg:pr-0 flex flex-col h-full"
            >
              <h3 className="text-white font-tthoves-bold text-sm sm:text-base md:text-[17px] lg:text-lg leading-snug min-h-[40px] sm:min-h-[44px] md:min-h-[48px]">
                {item.title}
              </h3>
              <p className="mt-2 md:mt-3 text-white/90 font-tthoves-light text-xs sm:text-sm md:text-[15px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
