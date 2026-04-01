import React from "react"
import Image from "next/image"

const points = [
  "Interdisciplinary curriculum combining business management and data analytics",
  "Exposure to business intelligence, data visualization, and analytical methods",
  "Practical learning through case studies, analytical exercises, and business simulations",
  "Development of data interpretation and decision-making skills",
  "Opportunities to work on analytics-driven business projects",
  "Exposure to analytics platforms and business intelligence tools used in industry",
  "Option to pursue BBA (Honours) with advanced study in business analytics",
  "Emphasis on analytical thinking, problem solving, and strategic decision-making",
]

const ProgramHighlights = () => {
  return (
    <section className="w-full bg-white py-8 md:py-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="text-left">
            <h2 className="font-schabo uppercase text-[#0072C5] text-[40px] sm:text-[48px] md:text-[72px] lg:text-[94px] leading-[0.95]">
              Program {" "}
              <br className="hidden md:block" />
              Highlights
            </h2>

            <ul className="mt-5 space-y-3 max-w-2xl mx-0">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-left">
                  <Image
                    src="/rocket-icon.svg"
                    width={16}
                    height={16}
                    alt="bullet"
                    className="mt-1 h-4 w-4 shrink-0 rotate-45"
                  />
                  <span className="font-tthoves-light text-black text-sm md:text-base leading-snug">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Image
              src="/school-of-engg-tech/btech/program-highlights.png"
              width={886}
              height={746}
              alt="B.Tech program highlights"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramHighlights
