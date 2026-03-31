import React from "react"
import Image from "next/image"

const points = [
  "Micro-credentials and industry certification programs",
  "Hackathons, coding competitions, and innovation challenges",
  "Industry workshops and guest lectures",
  "Multidisciplinary learning and minor specialisations",
  "Entrepreneurship and startup incubation support",
  "Development of communication, leadership, and project management skills",
  "Emphasis on sports, wellness, and holistic development",
]

const ValueAddedLearning = () => {
  return (
    <section className="w-full bg-white py-8 md:py-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="text-left order-2 md:order-1">
            <h2 className="font-schabo uppercase text-[#744AC4] text-[40px] sm:text-[48px] md:text-[72px] lg:text-[94px] leading-[0.95]">
              Value Added
              <br />
              Learning
            </h2>

            <p className="mt-4 font-tthoves-light text-black text-sm md:text-base leading-snug max-w-xl mx-0">
              Students benefit from additional opportunities designed to
              strengthen both technical and professional development.
            </p>

            <ul className="mt-5 space-y-3 max-w-xl mx-0">
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

          <div className="order-1 md:order-2">
            <Image
              src="/school-of-engg-tech/bba-general/img5.webp"
              width={760}
              height={440}
              alt="Students collaborating in workshop"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValueAddedLearning
