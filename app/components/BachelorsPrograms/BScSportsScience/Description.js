import React from "react"

const Description = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-[5px]">
      <div className="container flex flex-col gap-10">
        <div className="flex flex-col items-center   px-4">
          <div className="container mx-auto  lg:border-l lg:border-r border-dashed border-[#8E8E8E] flex items-center justify-center flex-col text-center]">
            <p className="text-center lg:w-2/3 pt-4 font-tthoves-light">
            Sports Science at AYRA begins with understanding the body and how it moves.
            </p>

            <p className="text-center lg:w-2/3 font-tthoves-light">
            You explore how performance is built, how fitness is developed, and how science supports both, while also discovering your own strengths and interests within sport and wellness.
            </p>
            <p className="text-center lg:w-2/3 font-tthoves-light">
            Through practical training, labs, and real-world exposure, you don’t just study performance. You begin to understand how you can contribute to it.
            </p>

            <p className="text-center lg:w-2/3 font-tthoves-light">
            The program is offered as a three-year undergraduate degree, with the option to pursue a fourth-year B.Sc. (Honours) for students interested in advanced specialization, research, or professional practice.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
