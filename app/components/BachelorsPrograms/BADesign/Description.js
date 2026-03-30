import React from "react"

const Description = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-[5px]">
      <div className="container flex flex-col gap-10">
        <div className="flex flex-col items-center   px-4">
          <div className="container mx-auto  lg:border-l lg:border-r border-dashed border-[#8E8E8E] flex items-center justify-center flex-col text-center]">
            <p className="text-center lg:w-2/3 pt-4 font-tthoves-light">
            Design and Communication at AYRA begins with expression
            </p>

            <p className="text-center lg:w-2/3 font-tthoves-light">
            You explore how ideas are shaped, how visuals communicate meaning, and how stories connect with people - while also discovering your own creative voice.
            </p>
            <p className="text-center lg:w-2/3 font-tthoves-light">
            Through studio work, projects, and experimentation, you don’t just learn design. You begin to understand how you think, create, and communicate.
            </p>
            {/* <p className="text-left lg:w-2/3">
              Through projects, simulations, and industry exposure, you
              don&apos;t just study business. You begin to see where you fit
              within it, and how your ideas can turn into impact.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
