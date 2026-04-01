import React from "react"
import Image from "next/image"

const highlights = [
  "Comprehensive curriculum covering core areas of psychology and behavioral sciences",
  "Exposure to cognitive, social, developmental, and abnormal psychology",
  "Hands-on learning through psychology laboratories and behavioral observation activities",
  "Opportunities for community engagement and practical learning experiences",
  "Exposure to counseling practices and mental wellbeing initiatives",
  "Internships with NGOs, educational institutions, wellness centres, and organisations",
  "Option to pursue B.A. (Honours) in Psychology with advanced study and research",
  "Strong emphasis on critical thinking, empathy, and understanding human behaviour",
]

const ProgramHighlights = () => {
  return (
    <>
      <section className="w-full border-y border-dashed border-[#8E8E8E] py-6 md:py-10">
        <div className="container mx-auto px-2 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <h2 className="font-schabo text-[#FF4D48] text-[58px] leading-[1em] md:text-[96px] uppercase">
                PROGRAM <br />
                HIGHLIGHTS
              </h2>

              <ul className="mt-6 space-y-4 text-black font-tthoves-light text-sm lg:text-[14px]">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
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

            <div className="py-[5px]">
              <Image
                src="/school-of-engg-tech/bba-general/img1.webp"
                width={700}
                height={450}
                alt="Students collaborating on a project"
                className="w-full h-auto "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProgramHighlights
