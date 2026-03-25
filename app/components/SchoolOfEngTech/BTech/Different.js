import React from "react"

const Different = () => {
  return (
    <section className="w-full border-y border-dashed border-[#8E8E8E] bg-[url('/opencanvas/opc-bg-img.png')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="py-8 md:py-12 md:pr-10 lg:pr-14 md:border-r md:border-dashed md:border-[#8E8E8E]">
            <p className="font-tthoves-light text-black text-base leading-relaxed max-w-[520px]">
              B.Tech at AYRA combines strong engineering foundations with
              experiential learning, industry engagement, and interdisciplinary
              exploration.
            </p>

            <p className="font-tthoves-light text-black text-base leading-relaxed mt-8 max-w-[520px]">
              Students learn not only how technology works, but how to design
              with it, apply it responsibly, and build solutions that respond to
              real-world challenges.
            </p>
          </div>

          <div className="py-8 md:py-12 md:pl-10 lg:pl-14 flex items-center">
            <h2 className="font-schabo uppercase text-[#9C79FF] text-[56px] leading-[0.95] md:text-[92px] md:leading-[0.95]">
              What Makes This
              <br />
              B.Tech Different
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Different
