import React from "react"

const Description = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-[5px]">
      <div className="container flex flex-col gap-10">
        <div className="flex flex-col items-center   px-4">
          <div className="container mx-auto  lg:border-l lg:border-r border-dashed border-[#8E8E8E] flex items-center justify-center flex-col text-center]">
            <p className="text-center lg:w-2/3 pt-4 font-tthoves-light">
              The B.A. in Psychology program at AYRA begins with understanding,
              not just of others, but of yourself.
            </p>

            <p className="text-center max-w-5xl font-tthoves-light">
              You explore how people think, feel, behave, and interact within
              different social and cultural contexts. As you learn about human
              behaviour, cognition, and emotions, you also begin to reflect on
              your own perspectives, responses, and patterns.
            </p>
            <p className="text-center max-w-5xl font-tthoves-light">
              The program is offered as a three-year undergraduate degree, with
              the option to pursue a fourth-year B.A. (Honours)for students
              interested in advanced study, research, or professional pathways.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
