import React from 'react'
import Image from 'next/image'

const description =
  'At AYRA, learning is designed to be holistic, thoughtful, and deeply personal. Students are encouraged to think for themselves, explore their strengths, and shape their journeys through choices that reflect their interests and goals. The academic structure allows learners to combine majors and minors across disciplines, ensuring that education here is not one-dimensional but a well-rounded life-learning experience that nurtures curiosity, capability, and confidence.'

const Holistic = () => {
  return (
    <section className="w-full  py-6 md:py-10">
      <div className="container mx-auto px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <h2 className="font-schabo text-[#0072C5] text-[58px] leading-[1em] md:text-[96px] uppercase">
              HOLISTIC LEARNING
              <br />
              AT AYRA
            </h2>

            <p className="mt-6 text-black font-tthoves-light text-sm md:text-base leading-relaxed">
              {description}
            </p>
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
