import React from "react"

const Description = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-[5px]">
      <div className="container mx-auto flex flex-col gap-10 px-4 md:px-0">
        <div className="flex flex-col items-center">
          <div className="container mx-auto lg:border-l lg:border-r border-dashed border-[#8E8E8E] flex items-center justify-center flex-col text-center">
            <p className="text-center lg:w-2/3 pt-4 font-tthoves-light">
              Data Science at AYRA begins with asking the right questions.
            </p>

            <p className="text-center lg:w-2/3 font-tthoves-light">
              The B.Tech in Data Science program at AYRA helps students build
              strong foundations in computing, statistics, and data analytics
              while connecting learning to real-world data challenges.
            </p>

            <p className="text-center lg:w-2/3 pb-4 font-tthoves-light">
              Students work with modern tools and technologies used in data
              analysis, statistical modelling, big data systems, and machine
              learning applications. The program combines technical knowledge
              with analytical thinking, enabling students to explore how data
              can be transformed into meaningful insights.
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
