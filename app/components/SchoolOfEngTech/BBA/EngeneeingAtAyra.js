import React from "react"

const yearJourney = [
  {
    title: "Aspire - Foundations of Hospitality (Year 1)",
    description:
      "Understand hospitality concepts, service management, communication, and basic operations.",
  },
  {
    title: "Yearn - Core Hospitality Operations (Year 2)",
    description:
      "Build skills across food and beverage, front office, housekeeping, and service practices.",
  },
  {
    title: "Relish - Advanced Hospitality Management (Year 3)",
    description:
      "Explore hotel operations, marketing, customer experience, and industry exposure.",
  },
  {
    title: "Achieve - Professional Practice (Year 4)",
    description:
      "Apply learning through internships, advanced management subjects, and hospitality-focused projects.",
  },
]

const EngeneeingAtAyra = () => {
  return (
    <section className="w-full bg-[#0072C5] py-6 md:py-7">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-[#FFFFFF] text-[22px] md:text-[24px] leading-[1.15] max-w-[680px]">
          Hospitality at AYRA unfolds as a journey of learning, practice, and
          real-world exposure.
        </h2>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {yearJourney.map((item, index) => (
            <div
              key={item.title}
              className={`py-2 pr-2 md:pr-5 lg:pr-6 ${
                index !== yearJourney.length - 1
                  ? "lg:border-r lg:border-dotted lg:border-[#92A0F0] lg:mr-5"
                  : ""
              }`}
            >
              <h3 className="text-[#72D9FF] font-tthoves-bold text-[18px] md:text-[20px] leading-[1.15]">
                {item.title}
              </h3>
              <p className="mt-2 text-[#D9DDFF] font-tthoves-light text-[14px] md:text-[16px] leading-[1.25]">
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
