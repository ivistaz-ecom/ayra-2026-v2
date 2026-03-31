import React from "react"
import Image from "next/image"

const NotSureWhereToBegin = () => {
  return (
    <section className="w-full bg-[#002561] py-10 md:py-14 border-t border-[#ffffff1f]">
      <div className="container mx-auto px-4 md:px-0 text-left">
        <Image
          src="/school-of-engg-tech/btech/Not-sure-where-to-begin.png"
          width={900}
          height={260}
          alt="Not sure where to begin?"
          className="mx-0 md:mx-auto w-full max-w-[320px] md:max-w-[440px] h-auto"
          priority
        />
      </div>

      <div className="mt-8 border-t border-dashed border-[#2a72b7]">
        <div className="container mx-auto px-4 md:px-0 pt-5 text-left">
          <p className="font-tthoves-demibold text-white text-[22px] sm:text-[26px] md:text-[30px] leading-tight">
            Give us five minutes on a call.
          </p>
          <p className="mt-2 font-tthoves-light text-[#b4c8df] text-sm md:text-base max-w-md mx-0">
            Speak with the admissions team, explore your options, and see what
            could fit you best.
          </p>
        </div>
      </div>
    </section>
  )
}

export default NotSureWhereToBegin
