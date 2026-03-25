import React from "react"
import Image from "next/image"

const highlights = [
  "Approved by AICTE and Offered by AYRA (Deemed-to-be University)",
  "Program designed in alignment with Outcome Based Education (OBE) principles",
  "Curriculum aligned with industry standards and emerging technology trends",
  "Integrates interdisciplinary learning and industry engagement",
]

const Recognised = () => {
  return (
    <section className="w-full border-y border-dashed border-[#8E8E8E] py-6 md:py-10">
      <div className="container mx-auto px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <h2 className="font-schabo text-[#5C45D9] text-[58px] leading-[1em] md:text-[96px] uppercase">
              Recognised.
              <br />
              Structured.
              <br />
              Credible.
            </h2>

            <ul className="mt-6 space-y-4 text-black font-tthoves-light text-sm md:text-base">
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
              src="/centre-for-research/img01.png"
              width={700}
              height={450}
              alt="Students working on engineering project"
              className="w-full h-auto border border-[#4B8CE5]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Recognised
