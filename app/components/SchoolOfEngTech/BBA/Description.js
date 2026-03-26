import React from 'react'

const Description = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-[5px]">
      <div className="container flex flex-col gap-10">
        <div className="flex flex-col items-center px-4">
          <div className="container mx-auto  lg:border-l lg:border-r border-dashed border-[#000000] flex items-center justify-center flex-col  text-left">
            <p className="text-left lg:w-2/3 pt-4 ">
              Your business and leadership journey at AYRA begins as an open
              canvas.
            </p>

            <p className="text-left lg:w-2/3">
              You start by understanding how organisations work, but more
              importantly, you learn how to think with data, people, and
              strategy.
            </p>
            <p className="text-left lg:w-2/3">
              As you explore management, markets, and real-world case
              problems, your path begins to take shape - not all at once, but
              gradually, through experience, curiosity, and guided choices.
            </p>
            <p className="text-left lg:w-2/3">
              Through projects, simulations, and industry exposure, you
              don&apos;t just study business. You begin to see where you fit
              within it, and how your ideas can turn into impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
