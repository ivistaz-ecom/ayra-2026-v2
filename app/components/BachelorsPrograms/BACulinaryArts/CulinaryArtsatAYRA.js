import React from "react"

const yearJourney = [
  {
    title: "Aspire - Foundations of Culinary Arts (Year 1)",
    description:
      "Learn basic culinary techniques, food preparation methods, kitchen organisation, and food safety principles.",
  },
  {
    title: "Yearn - Applied Culinary Practice (Year 2)",
    description:
      "Develop skills in food production, bakery and confectionery, menu planning, and culinary presentation.",
  },
  {
    title: "Relish - Advanced Culinary Skills and Practice (Year 3)",
    description:
      "Work with advanced culinary methods, kitchen management, and internships in hospitality and food service environments.",
  },
  {
    title: "Achieve - Advanced Culinary Practice (Optional Year 4 - Honours)",
    description:
      "Pursue deeper focus through advanced techniques, culinary innovation, and specialised gastronomy projects.",
  },
]

const EngeneeingAtAyra = () => {
  return (
    <section className="w-full bg-[#FF5EBB] py-6 md:py-7">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="text-[#FFFFFF] text-lg sm:text-xl md:text-2xl leading-[1.2] max-w-[680px] text-left mx-0">
          Culinary Arts at AYRA unfolds through practice, exposure, and
          progressive learning.
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
              <h3 className="text-[#C7CEFF] font-tthoves-bold text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.25]">
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
