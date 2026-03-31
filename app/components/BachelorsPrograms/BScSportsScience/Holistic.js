import React from 'react'
import Image from 'next/image'

const paragraphs = [
  'At AYRA, sports science education is designed to combine science, training, and real-world performance environments.',
  'Students explore how physical training, health sciences, and performance analytics work together to support athletic development and wellness.',
]
const Holistic = () => {
  return (
    <section className="w-full  py-6 md:py-10">
      <div className="container mx-auto px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <h2 className="font-schabo text-[#FFA300] text-[58px] leading-[1em] md:text-[96px] uppercase">
              HOLISTIC LEARNING
              <br />
              AT AYRA
            </h2>

            <div className="mt-6 space-y-4 text-black font-tthoves-light text-sm md:text-base leading-relaxed">
              {paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
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
