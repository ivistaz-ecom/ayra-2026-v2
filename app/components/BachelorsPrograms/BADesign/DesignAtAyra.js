import React from "react"

const yearJourney = [
  {
    title: "Aspire – Foundations of Design and Communication (Year 1)",
    description:
      "Build understanding of visual communication, design principles, media studies, and creative thinking.",
  },
  {
    title: "Yearn – Applied Design and Media Practice (Year 2)",
    description:
      "Explore branding, visual storytelling, digital media design, and communication strategy.",
  },
  {
    title: "Relish – Professional Practice and Creative Work (Year 3)",
    description:
      "Develop advanced skills through design projects, media production, communication campaigns, and industry internships.",
  },
  {
    title: "Achieve – Advanced Creative Practice (Optional Year 4 – Honours)",
    description:
      "Pursue deeper specialization, research, and advanced creative work in design and communication.",
  },
]

const EngeneeingAtAyra = () => {
  return (
    <section className="w-full bg-[#FF4D48] py-6 md:py-7">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-[#FFFFFF] text-[20px] md:text-[24px] leading-[1.2] max-w-[680px] text-left">
          Your Design Journey at AYRA
        </h2>
        <p className="mt-3 text-[#FFFFFF] font-tthoves-light text-[15px] md:text-[16px] leading-[1.35] max-w-[680px] text-left">
          Design and Communication at AYRA unfolds as a journey of creativity,
          exploration, and applied practice.
        </p>

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
              <h3 className=" text-[#FFB2B7] font-tthoves-bold text-[20px] lg:min-h-[66px] md:text-[18px] leading-[1.2]">
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
