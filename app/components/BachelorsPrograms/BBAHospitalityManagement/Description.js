import React from "react"

const Description = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-[5px]">
      <div className="container mx-auto px-4 md:px-0 flex flex-col gap-10">
        <div className="flex flex-col items-center">
          <div className="w-full lg:border-l lg:border-r border-dashed border-[#8E8E8E] flex items-center justify-center flex-col text-center">
            <p className="text-center lg:w-2/3 pt-4 font-tthoves-light">
              The BBA in Hospitality Management program at AYRA begins with
              understanding both people and service.
            </p>

            <p className="text-center lg:w-2/3 font-tthoves-light">
              You learn how hospitality organisations function, from operations
              to guest experience, while also discovering how you respond to
              service environments, teamwork, and real-world situations.
            </p>
            <p className="text-center lg:w-2/3 font-tthoves-light">
              This four-year undergraduate program prepares students for careers
              across hotels, resorts, and service industries, while also
              building the foundation to explore hospitality entrepreneurship.
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
