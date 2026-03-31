import React from 'react'
import Image from 'next/image'

const description = [
  "At AYRA, hospitality education is designed to balance service understanding, operational skills, and business thinking.",
  "Students learn how hospitality works across environments while developing the ability to manage experiences, teams, and operations.",
]

const Holistic = () => {
  return (
    <section className="w-full  py-6 md:py-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <h2 className="font-schabo text-[#0072C5] text-[58px] leading-[1em] md:text-[96px] uppercase">
              HOLISTIC LEARNING
              <br />
              AT AYRA
            </h2>

            {description.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 text-black font-tthoves-light text-sm md:text-base leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="py-[5px]">
            <Image
              src="/school-of-engg-tech/bba-general/img5.webp"
              width={700}
              height={450}
              alt="Students collaborating on a project"
              className="w-full h-auto "
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Holistic
