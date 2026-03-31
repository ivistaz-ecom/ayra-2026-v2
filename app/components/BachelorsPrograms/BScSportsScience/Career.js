import React from "react"
import Image from "next/image"

const highlights = [
  "Access to sports performance laboratories and fitness training facilities",
  "Participation in sports testing, performance evaluation, and athlete monitoring",
  "Internships with sports academies, fitness centers, and sports organizations",
  "Workshops with sports scientists, coaches, physiotherapists, and nutrition experts",
  "Exposure to sports analytics tools and performance technologies",
  "Development of leadership, coaching, and athlete management skills",
]

const Career = () => {
  return (
    <>
      <section className="w-full">
        <div className=" py-8 md:py-10">
          <div className="container mx-auto px-2 md:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
              <div>
                <h2 className="font-schabo text-[#D28400] uppercase text-[52px] leading-[0.95] md:text-[88px] md:leading-[0.9]">
                  VALUE ADDED
                  <br /> LEARNING
                </h2>
                <p className="mt-6 max-w-[90%] font-tthoves-light text-bl text-sm md:text-base leading-relaxed">
                Students strengthen their learning experience through additional opportunities that connect sports science with real performance environments.
                </p>

                <ul className="mt-6 space-y-4">
                  {highlights.map((item) => (
                    <li
                      key={item}
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
                <div className="relative w-full ">
                  <div className="hidden md:block w-full">
                    <Image
                      src="/school-of-engg-tech/bba-general/img7.webp"
                      alt="Sports science at AYRA"
                      width={1920}
                      height={1080}
                      className="object-cover object-center w-full lg:h-auto"
                      priority
                    />
                  </div>

                  <div className="block md:hidden w-full">
                    <Image
                      src="/school-of-engg-tech/bba-general/img7.webp"
                      alt="Sports science at AYRA"
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
    </>
  )
}

export default Career
