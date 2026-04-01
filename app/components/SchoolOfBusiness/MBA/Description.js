import React from "react"

const Description = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-3 md:py-[5px]">
      <div className="container mx-auto flex flex-col gap-6 md:gap-10 px-4 md:px-0">
        <div className="flex flex-col items-center">
          <div className="container mx-auto lg:border-l lg:border-r border-dashed border-[#8E8E8E] flex items-center justify-center flex-col text-center">
            <p className="text-center w-full max-w-xl md:max-w-4xl  pt-4 pb-1 font-tthoves-light text-sm sm:text-base leading-relaxed text-black">
              The MBA program at AYRA begins with understanding how
              organisations work, and how decisions are made within them.
            </p>

            <p className="text-center w-full max-w-xl md:max-w-5xl font-tthoves-light text-sm sm:text-base leading-relaxed text-black">
              You explore management concepts, business strategy, and
              organisational dynamics while also beginning to reflect on how you
              think, analyse, and approach problems.
            </p>

            <p className="text-center w-full max-w-xl md:max-w-5xl pb-4 pt-1 font-tthoves-light text-sm sm:text-base leading-relaxed text-black">
              A key feature of the MBA at AYRA is the opportunity to begin
              specialisation early in the program. This allows students to
              gradually build deeper understanding in their chosen domain while
              aligning learning with their professional interests.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
