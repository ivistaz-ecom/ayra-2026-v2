import React from "react"

const Description = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-[5px]">
      <div className="container flex flex-col gap-10">
        <div className="flex flex-col items-center   px-4">
          <div className="container mx-auto  lg:border-l lg:border-r border-dashed border-[#8E8E8E] flex items-center justify-center flex-col text-center]">
            <p className="text-center lg:w-2/3 pt-4 font-tthoves-light">
              The Bachelor of Business Administration (BBA) program helps
              students build a strong foundation in management, business
              thinking, and analytics while connecting learning to real-world
              practice.
            </p>

            <p className="text-center lg:w-2/3 font-tthoves-light">
              This industry-driven, skill-oriented program blends academic
              rigour with real-world experience, offering students hands-on
              exposure through internships, live projects, case studies, and
              industry interactions. Here, you are encouraged to think
              independently, learn through experience, and gradually shape your
              own professional journey with clarity and confidence.
            </p>
            {/* <p className="text-left lg:w-2/3">
              As you explore management, markets, and real-world case problems,
              your path begins to take shape - not all at once, but gradually,
              through experience, curiosity, and guided choices.
            </p>
            <p className="text-left lg:w-2/3">
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
