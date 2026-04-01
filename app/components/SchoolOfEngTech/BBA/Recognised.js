import React from 'react'
import Image from 'next/image'

const Recognised = () => {
  return (
    <section className="w-full border-y border-dashed border-[#8E8E8E] py-6 md:py-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <h2 className="font-schabo text-[#0072C5] text-[58px] leading-[1em] md:text-[96px] uppercase">
              Recognised.
              <br />
              Structured.
              <br />
              Credible.
            </h2>

            <p className="mt-6 max-w-[460px] text-black font-tthoves-light text-sm md:text-base leading-tight">
              The program is offered under a recognised institutional and
              regulatory framework that adheres to established quality
              standards in higher education as per AICTE.
            </p>
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
  )
}

export default Recognised
