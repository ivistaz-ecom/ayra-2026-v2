import React from "react"
import Image from "next/image"
const Different = () => {
  return (
    <section className="w-full border-y border-dashed border-[#8E8E8E]  items-center justify-center overflow-hidden bg-[url('/opencanvas/opc-bg-img.png')] bg-cover bg-center">
      <div className="container mx-auto px-2 md:px-0 ">
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1 py-8 md:py-12 md:pr-10 lg:pr-14 md:border-r md:border-dashed md:border-[#8E8E8E] flex flex-col justify-center h-full">
            <p className="font-tthoves-light text-black text-base leading-relaxed max-w-[520px]">
              BBA at AYRA combines strong foundations in management and
              economics with experiential learning, industry engagement, and
              interdisciplinary exploration.
            </p>

            {/* <p className="font-tthoves-light text-black text-base leading-relaxed mt-8 max-w-[520px]">
              Students learn not only how organisations work, but how to lead
              teams, analyse markets, and build solutions that respond to
              real-world challenges.
            </p> */}
          </div>

          <div className="order-1 md:order-2 py-8 md:py-12 md:pl-10 lg:pl-14 flex items-center justify-center">
          <Image
              src="/school-of-engg-tech/bba-general/img2.webp"
              width={700}
              height={450}
              alt="Students collaborating on a project"
              className="w-full h-auto "
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Different
