import React from "react"
import Image from "next/image"

const highlights = [
  "Approved by AICTE and offered by AYRA (Deemed-to-be University).",
  "Curriculum aligned with Outcome Based Education (OBE) principles.",
  "Designed in accordance with national higher education guidelines and interdisciplinary learning frameworks",
  "Integrates business management education with analytical and data-driven decision-making approaches.",
]

const Recognised = () => {
  return (
    <section className="w-full border-y border-dashed border-[#8E8E8E] py-6 md:py-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="text-left">
            <h2 className="font-schabo text-[#0072C5] text-[40px] sm:text-[48px] md:text-[72px] lg:text-[96px] leading-[0.95] md:leading-[1em] uppercase">
              Recognised. <br className="hidden md:block" />
              Structured.
              <br />
              Credible.
            </h2>

            <ul className="mt-6 space-y-4 text-black font-tthoves-light text-sm md:text-base max-w-xl mx-0 md:max-w-none">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-left">
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
              src="/school-of-engg-tech/btech/recognized.png"
              width={886}
              height={746}
              alt="B.Tech programme recognition and accreditation"
              className="w-full h-auto border border-[#4B8CE5]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Recognised
