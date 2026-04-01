import React from "react"
import Image from "next/image"
import Slider from "./Slider"
const highlights = [
  "Interdisciplinary curriculum combining design, media, and communication studies",
  "Studio-based learning through creative projects and assignments",
  "Exposure to visual storytelling, branding, and digital communication strategies",
  "Opportunities to work on creative campaigns and media production projects",
  "Practical experience through internships with design studios, advertising agencies, and media organisations",
  "Access to design studios and media production facilities",
  "Option to pursue B.A. (Honours) with advanced specialization and research",
  "Strong emphasis on creative thinking, visual literacy, and communication strategy",
]


const Recognised = () => {
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
<Slider />
    {/* <section className="w-full bg-[#FF4D48] py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start md:items-center">
          <div>
            <h2 className="font-schabo uppercase text-[#FFB2B7] text-[58px] md:text-[96px] leading-[0.9]">
              Creative Studios &
              <br />
              Media Labs
            </h2>

            <p className="mt-5 font-tthoves-light text-white/85 text-[14px] md:text-[18px] leading-relaxed max-w-[640px]">
              AYRA supports design and communication learning through dedicated
              creative spaces designed for experimentation and collaboration.
            </p>

            <p className="mt-4 md:mt-5 font-tthoves-light text-white/85 text-[13px] md:text-[17px] leading-relaxed max-w-[700px]">
              Students gain access to design studios, storytelling labs, and
              media production spaces where they work on visual communication,
              content creation, and media projects.
            </p>

            <p className="mt-4 md:mt-5 font-tthoves-light text-white/85 text-[13px] md:text-[17px] leading-relaxed max-w-[700px]">
              These environments allow students to explore ideas, test concepts,
              and develop creative work across formats. Studio-based learning
              introduces students to the iterative and collaborative nature of
              design practice.
            </p>

            <p className="mt-4 md:mt-5 font-tthoves-light text-white/85 text-[13px] md:text-[17px] leading-relaxed max-w-[700px]">
              These facilities create an environment where ideas evolve into
              visual narratives and communication solutions.
            </p>
          </div>

          <div className="md:pt-0 flex items-center">
            <Image
              src="/school-of-engg-tech/bba-general/img1.webp"
              width={900}
              height={620}
              alt="Creative studios and media labs at AYRA"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section> */}
    </>
  )
}

export default Recognised
