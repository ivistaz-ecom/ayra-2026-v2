import React from "react"
import SpecialCarousel from "./SpecialCarousel"

const Specialisations = () => {
  return (
    <section className="w-full bg-white pt-8 md:pt-10">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="font-schabo uppercase text-[#00BFFF] text-[40px] sm:text-[48px] md:text-[68px] lg:text-[88px] leading-[0.95] text-left">
          SPECIALISATION / FOCUS AREAS
        </h2>

        <p className="mt-4 font-tthoves-light text-black text-sm md:text-base max-w-[980px] text-left mx-0">
          Students may pursue specialisation in key areas of management:
        </p>
        <SpecialCarousel />
      </div>
    </section>
  )
}

export default Specialisations
