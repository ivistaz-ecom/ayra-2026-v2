import React from "react"

const Description = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-3 md:py-[5px]">
      <div className="container mx-auto flex flex-col gap-6 md:gap-10 px-4 md:px-0">
        <div className="flex flex-col items-center">
          <div className="container mx-auto lg:border-l lg:border-r border-dashed border-[#8E8E8E] flex items-center justify-center flex-col text-center">
            <p className="text-center w-full max-w-xl md:max-w-2xl lg:w-2/3 pt-4 pb-1 font-tthoves-light text-sm sm:text-base leading-relaxed text-black">
              Your engineering journey at AYRA begins as an open canvas.
            </p>

            <p className="text-center w-full max-w-xl md:max-w-2xl lg:w-2/3 font-tthoves-light text-sm sm:text-base leading-relaxed text-black">
              You start by understanding how technology works, but more
              importantly, you learn how to think with it.
            </p>

            <p className="text-center w-full max-w-xl md:max-w-2xl lg:w-2/3 font-tthoves-light text-sm sm:text-base leading-relaxed text-black">
              As you explore computing, systems, and real-world problems, your
              path begins to take shape - not all at once, but gradually,
              through experience, curiosity, and guided choices.
            </p>

            <p className="text-center w-full max-w-xl md:max-w-2xl lg:w-2/3 pb-4 pt-1 font-tthoves-light text-sm sm:text-base leading-relaxed text-black">
              Through labs, projects, and industry exposure, you don&apos;t just
              study engineering. You begin to see where you fit within it, and
              how your ideas can turn into solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
