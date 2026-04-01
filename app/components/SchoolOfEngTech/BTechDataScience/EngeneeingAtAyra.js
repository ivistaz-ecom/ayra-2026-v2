import React from "react"

const yearJourney = [
  {
    title: "Year 1 - Foundations of Computing and Mathematics",
    description:
      "Programming basics, statistics, mathematics for data science, and computational thinking.",
  },
  {
    title: "Year 2 - Core Data Science Concepts",
    description:
      "Data structures, databases, statistical analysis, and data processing techniques.",
  },
  {
    title: "Year 3 - Advanced Analytics and Big Data",
    description:
      "Machine learning for data science, data visualization, big data systems, and analytics platforms.",
  },
  {
    title: "Year 4 - Industry Integration",
    description:
      "Internships, advanced electives in data analytics, and a capstone project focused on real-world data challenges.",
  },
]

const EngeneeingAtAyra = () => {
  return (
    <section className="w-full bg-[#744AC6] py-6 md:py-7">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="text-[#FFFFFF] text-lg sm:text-xl md:text-2xl leading-[1.2] max-w-[680px] text-left mx-0">
          Data Science at AYRA unfolds as a four-year journey of discovery,
          analysis, and application.
        </h2>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-x-6 sm:gap-y-8 lg:gap-y-0">
          {yearJourney.map((item, index) => (
            <div
              key={item.title}
              className={`py-1 sm:py-2 text-left sm:pr-3 md:pr-5 lg:pr-6 flex flex-col h-full ${
                index !== yearJourney.length - 1
                  ? "lg:border-r lg:border-dotted lg:border-[#92A0F0] lg:mr-5"
                  : ""
              }`}
            >
              <h3 className="text-[#C7CEFF] font-tthoves-bold text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.25] min-h-[40px] sm:min-h-[44px] md:min-h-[48px]">
                {item.title}
              </h3>
              <p className="mt-2 text-[#D9DDFF] font-tthoves-light text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[1.35]">
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
