import React from "react"
import Image from "next/image"

const Different = () => {
  return (
    <section className="w-full border-y border-dashed border-[#8E8E8E] bg-[url('/opencanvas/opc-bg-img.png')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
          <div className="order-2 md:order-1 py-6 md:py-12 md:pr-10 lg:pr-14 text-left md:border-r md:border-dashed md:border-[#8E8E8E] space-y-2 md:space-y-4">
            <p className="font-tthoves-light text-black text-sm sm:text-base leading-relaxed max-w-[520px] mx-0">
              At AYRA, the MBA is not only about management theory.
            </p>

            <p className="font-tthoves-light text-black text-sm sm:text-base leading-relaxed  max-w-[520px] mx-0">
              Students are given the space to explore different business
              functions while building clarity in their chosen area through
              early specialisation.
            </p>
            <p className="font-tthoves-light text-black text-sm sm:text-base leading-relaxed  max-w-[520px] mx-0">
              Learning happens through application — through projects,
              internships, and real-world assignments — allowing students to
              connect concepts with practice and develop confidence in their
              approach to business problems.
            </p>
          </div>

          <div className="order-1 md:order-2 py-4 md:py-12 md:pl-10 lg:pl-14 flex items-center justify-center md:justify-start">
            <Image
              src="/school-of-business/mba/MBA-program.webp"
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
