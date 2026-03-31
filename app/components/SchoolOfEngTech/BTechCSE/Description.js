import React from "react"

const Description = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-[5px]">
      <div className="container mx-auto flex flex-col gap-10 px-4 md:px-0">
        <div className="flex flex-col items-center">
          <div className="container mx-auto lg:border-l lg:border-r border-dashed border-[#8E8E8E] flex items-center justify-center flex-col text-center">
            <p className="text-center lg:w-2/3 pt-4 font-tthoves-light">
              Computer Science at AYRA begins with curiosity.
            </p>

            <p className="text-center lg:w-2/3 font-tthoves-light">
              The B.Tech in Computer Science program at AYRA helps students
              build strong foundations in computing principles, software
              engineering, and modern digital technologies while connecting
              learning to real technological challenges.
            </p>

            <p className="text-center lg:w-2/3 pb-4 font-tthoves-light">
              Students work across core areas such as programming, algorithms,
              data structures, operating systems, database systems, and computer
              networks, while also exploring emerging technologies including
              artificial intelligence, cloud computing, cybersecurity, and
              blockchain systems.
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
