import React from "react"

const MBAAtAyra = () => {
  const yearJourney = [
    {
      title: "Semester 1 - Foundations and Early Specialisation",
      description:
        "Build core management understanding while beginning to explore your chosen specialisation.",
    },
    {
      title: "Semester 2 - Functional Management and Business Analysis",
      description:
        "Develop knowledge across functional areas along with analytical and decision-making tools.",
    },
    {
      title: "Semester 3 - Advanced Management Practice",
      description:
        "Deepen specialisation through applied learning, projects, and industry exposure.",
    },
    {
      title: "Semester 4 - Strategic Integration and Application",
      description:
        "Engage in advanced management subjects, industry-oriented projects, and applied research.",
    },
  ]

  return (
    <>
      <section className="w-full bg-[#0072C5] py-6 md:py-7">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-[#FFFFFF] text-lg sm:text-xl md:text-2xl leading-[1.2]  text-left mx-0">
            The MBA at AYRA unfolds as a progression of understanding,
            application, <br /> and leadership development.
          </h2>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-x-6 sm:gap-y-8 lg:gap-y-0">
            {yearJourney.map((item, index) => (
              <div
                key={item.title}
                className={`py-1 sm:py-2 text-left sm:pr-3 md:pr-5 lg:pr-6 ${
                  index !== yearJourney.length - 1
                    ? "lg:border-r lg:border-dotted lg:border-[#92A0F0] lg:mr-5"
                    : ""
                }`}
              >
                <h3 className="text-[#72D9FF] font-tthoves-bold text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.25]">
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
    </>
  )
}

export default MBAAtAyra
