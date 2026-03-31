import React from "react"

const Description = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-3 md:py-[5px]">
      <div className="container mx-auto flex flex-col gap-6 md:gap-10 px-4 md:px-0">
        <div className="flex flex-col items-center">
          <div className="container mx-auto lg:border-l lg:border-r border-dashed border-[#8E8E8E] flex items-center justify-center flex-col text-center">
            <p className="text-center w-full max-w-xl md:max-w-2xl lg:w-2/3 pt-4 pb-1 font-tthoves-light text-sm sm:text-base leading-relaxed text-black">
              The B.A. in Culinary Arts program at AYRA begins with learning
              how food is prepared, but also how it is experienced.
            </p>

            <p className="text-center w-full max-w-xl md:max-w-2xl lg:w-2/3 font-tthoves-light text-sm sm:text-base leading-relaxed text-black">
              The program combines the art of cooking with the science of food
              preparation, enabling students to develop technical culinary
              skills alongside an understanding of food culture, presentation,
              and hospitality management.
            </p>

            <p className="text-center w-full max-w-xl md:max-w-2xl lg:w-2/3 pb-4 pt-1 font-tthoves-light text-sm sm:text-base leading-relaxed text-black">
              The program is offered as a three-year undergraduate degree, with
              the option to pursue a fourth-year B.A. (Honours) focused on
              advanced culinary practice, research, and culinary innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
