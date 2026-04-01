import React from "react"
import Image from "next/image"

const highlights = [
  "Internships with NGOs, schools, wellness centres, and organisational settings",
  "Exposure to psychological assessments and behavioural observation methods",
  "Workshops with psychologists, counselors, and mental health professionals",
  "Participation in community outreach and mental health awareness initiatives",
  "Development of analytical thinking, empathy, and communication skills",
  "Exposure to interdisciplinary perspectives, including psychology of sports performance",
]

const ValueAdded = () => {
  return (
    <>
      {" "}
      <section className="w-full">
        <div className=" pb-8 md:pb-10">
          <div className="container mx-auto px-2 md:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
              <div>
                <h2 className="font-schabo text-[#D5323B] uppercase text-[52px] leading-[0.95] md:text-[88px] md:leading-[0.9]">
                  VALUE ADDED
                  <br /> LEARNING
                </h2>
                <p className="mt-6 max-w-[90%] font-tthoves-light text-bl text-sm md:text-base leading-relaxed">
                  Students enhance their learning through opportunities that
                  connect psychology with real environments and people.
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
                      alt="Engg-and-Tech"
                      width={1920}
                      height={1080}
                      className="object-cover object-center w-full lg:h-auto"
                      priority
                    />
                  </div>

                  <div className="block md:hidden w-full">
                    <Image
                      src="/school-of-engg-tech/bba-general/img7.webp"
                      alt="Engg-and-Tech"
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

export default ValueAdded
