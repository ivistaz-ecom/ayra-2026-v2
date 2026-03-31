import React from "react"
import Image from "next/image"
import Slider from "./Slider"

const highlights = [
  "Interdisciplinary curriculum integrating sports science, health sciences, and performance analysis",
  "Hands-on learning through sports performance laboratories and training facilities",
  "Exposure to exercise physiology, biomechanics, sports nutrition, and psychology",
  "Practical experience through internships with sports academies, fitness centres, and professional trainers",
  "Opportunities to work with athlete performance monitoring and analytics tools",
  "Participation in sports events, performance testing, and applied field research",
  "Option to pursue B.Sc. (Honours) in Sports Science with advanced specialization and research",
  "Strong emphasis on sports culture, wellness, and holistic physical development",
]

const Specialization = () => {
  return (
    <>
      <section className="w-full border-y border-dashed border-[#8E8E8E] py-6 md:py-10">
        <div className="container mx-auto px-2 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <h2 className="font-schabo text-[#D28400] text-[58px] leading-[1em] md:text-[96px] uppercase">
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
                alt="Sports science learning environment"
                className="w-full h-auto "
              />
            </div>
          </div>
        </div>
      </section>
      <Slider />
      {/* <section className="w-full bg-[#FFC349] py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start md:items-center">
            <div>
              <h2 className="font-schabo uppercase text-[#FFB2B7] text-[58px] md:text-[96px] leading-[0.9]">
                Labs &
                <br />
                Applied Spaces
              </h2>

              <p className="mt-5 font-tthoves-light text-white/85 text-[14px] md:text-[18px] leading-relaxed max-w-[640px]">
                AYRA supports hands-on learning in physiology, biomechanics, and conditioning so you connect instruments, protocols, and real outcomes.
              </p>

              <h3 className="mt-6 font-tthoves-medium text-white text-[24px] lg:text-[30px] leading-[1.1] max-w-[650px]">
                Examples of applied learning areas include:
              </h3>

              <ul className="mt-5 space-y-2 text-sm lg:text-[14px]">
                {[
                  "Exercise physiology and metabolic testing lab",
                  "Biomechanics and motion analysis space",
                  "Strength and conditioning training floor",
                  "Recovery and sports medicine observation (where applicable)",
                  "Performance monitoring and wearable technology workshops",
                  "Nutrition education and practical sessions",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-white/85 font-tthoves-light text-[16px] leading-[1.3]"
                  >
                    <Image
                      src="/rocket-icon.svg"
                      width={16}
                      height={16}
                      alt="bullet icon"
                      className="mt-1 h-3 w-3 md:h-4 md:w-4 shrink-0 rotate-45"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-7 font-tthoves-light text-white/85 text-[13px] md:text-[17px] leading-relaxed max-w-[700px]">
                Exact facilities and equipment may evolve with programme approvals; the intent is consistent experiential depth.
              </p>
            </div>

            <div className="md:pt-0 flex items-center">
              <Image
                src="/school-of-engg-tech/bba-general/img1.webp"
                width={900}
                height={620}
                alt="Sports science lab and training setting"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default Specialization
