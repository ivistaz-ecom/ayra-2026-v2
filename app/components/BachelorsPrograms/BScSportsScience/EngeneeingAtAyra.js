import React from "react"

const yearJourney = [
  {
    title: "Aspire - Foundations of Sports Science (Year 1)",
    description:
      "Build understanding of human anatomy, physiology, physical fitness, and the scientific principles of sports and exercise.",
  },
  {
    title: "Yearn - Applied Sports Science (Year 2)",
    description:
      "Study biomechanics, sports psychology, sports nutrition, training methods, and performance evaluation.",
  },
  {
    title: "Relish - Performance & Professional Practice (Year 3)",
    description:
      "Develop expertise in performance analysis, athlete development, injury prevention, and industry internships.",
  },
  {
    title: "Achieve - Advanced Specialisation (Optional Year 4 - Honours)",
    description:
      "Students may pursue advanced specialization, research projects, athlete performance studies, and professional practice.",
  },
]

const EngeneeingAtAyra = () => {
  return (
    <section className="w-full bg-[#FFA300] py-6 md:py-7">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-[#FFFFFF] text-[20px] md:text-[24px] leading-[1.2] max-w-[680px] text-left">
          Sports Science at AYRA unfolds as a progressive journey of
          learning, performance understanding, and applied practice.
        </h2>

        <div className="mt-5 grid grid-cols-1 items-start gap-y-5 md:grid-cols-2 md:gap-x-4 md:gap-y-6 lg:grid-cols-4 lg:gap-x-0">
          {yearJourney.map((item, index) => (
            <div
              key={item.title}
              className={`py-2 pr-0  text-left md:pr-5 lg:pr-6 ${
                index !== yearJourney.length - 1
                  ? "lg:border-r lg:border-dotted lg:border-[#FFB2B7] lg:mr-5 "
                  : ""
              }`}
            >
              <h3 className=" text-[#FFD87B] font-tthoves-bold text-[20px] lg:min-h-[66px] md:text-[18px] leading-[1.2]">
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
