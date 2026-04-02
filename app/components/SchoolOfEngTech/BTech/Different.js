import React from "react"
import Image from "next/image"

const Different = () => {
  return (
    <section className="w-full border-y border-dashed border-[#8E8E8E] bg-[url('/opencanvas/opc-bg-img.png')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
          <div className="order-2 md:order-1 py-6 md:py-12 md:pr-10 lg:pr-14 text-left md:border-r md:border-dashed md:border-[#8E8E8E]">

          <p className="font-tthoves-light text-black text-sm sm:text-base leading-relaxed max-w-[520px] mx-0">
          At AYRA, engineering is not about choosing a path too early.


            </p>
            <p className="font-tthoves-light text-black text-sm sm:text-base leading-relaxed max-w-[520px] mx-0">
            You begin with strong foundations, but you are also given the space to explore different areas before committing. Along the way, you learn by doing - through projects, exposure, and real applications, so your understanding is not just theoretical.

            </p>

            <p className="font-tthoves-light text-black text-sm sm:text-base leading-relaxed mt-6 md:mt-4 max-w-[520px] mx-0">
            This approach helps you move from learning concepts to building clarity, confidence, and capability over time.
            </p>
          </div>

          <div className="order-1 md:order-2 py-4 md:py-12 md:pl-10 lg:pl-14 flex items-center justify-center md:justify-start">
            <Image
              src="/school-of-engg-tech/btech/What-makes-this-program-different.png"
              width={820}
              height={330}
              alt="What makes this B.Tech different"
              className="w-full max-w-full sm:max-w-[540px] md:max-w-[740px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Different
