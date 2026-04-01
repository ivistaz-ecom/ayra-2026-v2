import React from 'react'
import Image from 'next/image'

const description = [
  'At AYRA, design education is built around creative thinking, experimentation, and communication clarity.',
  'Students are encouraged to explore ideas across formats and media while developing the ability to design with purpose and communicate with intent.',
]
const Holistic = () => {
  return (
    <section className="w-full  py-6 md:py-10">
      <div className="container mx-auto px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <h2 className="font-schabo text-[#FF4D48] text-[58px] leading-[1em] md:text-[96px] uppercase">
              HOLISTIC LEARNING
              <br />
              AT AYRA
            </h2>

            {description.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`text-black font-tthoves-light text-sm md:text-base leading-relaxed ${
                  index === 0 ? 'mt-6' : 'mt-4'
                }`}
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
