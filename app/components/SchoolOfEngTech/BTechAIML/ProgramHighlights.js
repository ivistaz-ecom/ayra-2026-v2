import React from "react"
import Image from "next/image"

const points = [
  "Specialised curriculum focused on artificial intelligence and intelligent systems",
  "Hands-on learning through AI laboratories, projects, and internships",
  "Exposure to machine learning frameworks and advanced data technologies",
  "Opportunities to build real-world AI applications and predictive models",
  "Participation in innovation challenges, hackathons, and AI research initiatives",
  "Access to industry certifications and micro-credential programs",
  "Capstone project focused on AI-driven solutions",
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
              src="/centre-for-research/img01.png"
              width={760}
              height={440}
              alt="Engineering students in lab"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramHighlights
