import React from "react"
import Image from "next/image"

const Holistic = () => {
  return (
    <section className="w-full bg-white py-6 md:py-8">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div className="text-left">
            <h2 className="font-schabo text-[#0072C5] text-[40px] sm:text-[48px] md:text-[72px] lg:text-[96px] leading-[0.95] uppercase">
              Holistic Learning <br className="hidden md:block" />
              At Ayra
            </h2>

            <p className="mt-6 text-black font-tthoves-light text-sm md:text-base leading-relaxed max-w-[520px] mx-0">
              At AYRA, learning connects business understanding with analytical
              thinking.
            </p>
            <p className="mt-6 text-black font-tthoves-light text-sm md:text-base leading-relaxed max-w-[520px] mx-0">
              Students learn how data supports decisions across different
              business functions while developing the ability to interpret and
              apply insights in real contexts.
            </p>
          </div>

          <div>
            <Image
              src="/school-of-engg-tech/bba-general/img5.webp"
              width={760}
              height={430}
              alt="Student on campus"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Holistic
