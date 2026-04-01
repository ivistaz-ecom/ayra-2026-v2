import React from "react"

const Description = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-3 md:py-[5px]">
      <div className="container mx-auto flex flex-col gap-6 md:gap-10 px-4 md:px-0">
        <div className="flex flex-col items-center">
          <div className="container mx-auto lg:border-l lg:border-r border-dashed border-[#8E8E8E] flex items-center justify-center flex-col text-center">
            <p className="text-center w-full max-w-xl md:max-w-3xl pt-4 pb-1 font-tthoves-light text-sm sm:text-base leading-relaxed text-black">
              The BBA in Business Analytics program at AYRA begins with
              understanding how data influences business.
            </p>

            <p className="text-center w-full max-w-xl md:max-w-4xl font-tthoves-light text-sm sm:text-base leading-relaxed text-black">
              In today’s digital economy, organizations rely on analytics to
              interpret information, identify patterns, and make decisions. As
              you learn how data works, you also begin to explore how you
              interpret it, question it, and apply it.
            </p>

            <p className="text-center w-full max-w-xl md:max-w-4xl pt-1 font-tthoves-light text-sm sm:text-base leading-relaxed text-black">
              The curriculum combines business knowledge, statistical methods,
              and data interpretation skills. Through practical exercises,
              case-based learning, and analytical projects, students gradually
              develop the ability to connect data with real business outcomes.
            </p>

            <p className="text-center w-full max-w-xl md:max-w-4xl pb-4 pt-1 font-tthoves-light text-sm sm:text-base leading-relaxed text-black">
              The program is offered as a three-year undergraduate degree, with
              the option to pursue a fourth-year BBA (Honours)focused on
              advanced analytics, research, and specialised study.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
