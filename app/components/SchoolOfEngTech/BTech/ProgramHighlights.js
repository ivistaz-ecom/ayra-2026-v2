import React from "react"
import Image from "next/image"

const points = [
  "Experiential learning through internships and industry projects",
  "Capstone project addressing real-world technology problems",
  "Opportunities to earn micro-credentials and industry certifications",
  "Flexible major-minor academic structure",
  "Exposure to emerging technologies such as AI, cloud computing, and blockchain",
  "Industry-ready curriculum with strong practical orientation",
  "Outcome-based, student-centric learning model",
  "Opportunities for innovation, hackathons, and research initiatives",
  "Holistic student development through sports, wellness, and leadership activities",
]

const ProgramHighlights = () => {
  return (
    <section className="w-full bg-white py-8 md:py-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="text-left">
            <h2 className="font-schabo uppercase text-[#744AC6] text-[40px] sm:text-[48px] md:text-[72px] lg:text-[94px] leading-[0.95]">
              Program
              <br />
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
