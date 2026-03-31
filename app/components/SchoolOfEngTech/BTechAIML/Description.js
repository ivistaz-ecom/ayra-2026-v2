import React from "react"

const Description = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-[5px]">
      <div className="container mx-auto flex flex-col gap-5 px-4 md:px-0">
        <div className="flex flex-col items-center">
          <div className="container mx-auto lg:border-l lg:border-r border-dashed border-[#8E8E8E] flex items-center justify-center flex-col text-center">
            <p className="text-center lg:w-2/3 pt-4 font-tthoves-light">
              Artificial Intelligence at AYRA starts with understanding, not
              assumption.
            </p>

            <p className="text-center lg:w-2/3 font-tthoves-light">
              You explore how intelligent systems work, how machines learn, and
              how data drives decisions, while also learning to question,
              analyse and think independently.
            </p>

            <p className="text-center lg:w-2/3 pb-4 font-tthoves-light">
              As you progress, you don&apos;t just study AI. You begin to
              understand how you want to use it - and where your interests and
              abilities align within this evolving field.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
