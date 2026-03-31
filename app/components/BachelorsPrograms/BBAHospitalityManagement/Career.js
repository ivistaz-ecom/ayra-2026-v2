import React from "react"
import Image from "next/image"

const highlights = [
  "Internships with hotels and resort properties",
  "Exposure to real-world hospitality operations and guest service environments",
  "Workshops with hospitality professionals and industry experts",
  "Participation in service simulations and practical training sessions",
  "Development of communication, leadership, and service management skills",
  "Exposure to hospitality entrepreneurship and business development",
]

const Career = () => {
  return (
    <section className="w-full">
      <div className=" py-8 md:py-10">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <div>
              <h2 className="font-schabo text-[#0072C5] uppercase text-[52px] leading-[0.95] md:text-[88px] md:leading-[0.9]">
                Value Added
                <br /> Learning
              </h2>
              <p className="mt-6 max-w-[90%] font-tthoves-light text-bl text-sm md:text-base leading-relaxed">
                Students enhance their learning experience through opportunities
                that connect training with real hospitality environments.
              </p>

              <ul className="mt-6 space-y-4">
                {highlights.map((item, index) => (
                  <li
                    key={`${index}-${item}`}
                    className="flex items-start gap-2.5 font-tthoves-light text-bl text-sm md:text-base"
                  >
                    <Image
                      src="/rocket-icon.svg"
                      width={18}
                      height={18}
                      alt="bullet icon"
                      className="mt-1 h-4 w-4 shrink-0 rotate-45"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="relative w-full bg-[#2050B2]">
                <div className="hidden md:block w-full">
                  <Image
                    src="/school-of-engg-tech/bba-general/img7.webp"
                    alt="Hospitality students learning"
                    width={1920}
                    height={1080}
                    className="object-cover object-center w-full lg:h-auto"
                    priority
                  />
                </div>

                <div className="block md:hidden w-full">
                  <Image
                    src="/school-of-engg-tech/bba-general/img7.webp"
                    alt="Hospitality students learning"
                    width={800}
                    height={1000}
                    className="object-cover object-center w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Career
