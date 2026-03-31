import React from "react"
import Image from "next/image"

const Different = () => {
  return (
    <section className="w-full border-y border-dashed border-[#8E8E8E] bg-[url('/opencanvas/opc-bg-img.png')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
          <div className="order-2 md:order-1 py-6 md:py-12 md:pr-10 lg:pr-14 text-left md:border-r md:border-dashed md:border-[#8E8E8E]">
            <p className="font-tthoves-light text-black text-sm sm:text-base leading-relaxed max-w-[520px] mx-0">
              At AYRA, Data Science is not just about tools and techniques.
            </p>

            <p className="font-tthoves-light text-black text-sm sm:text-base leading-relaxed mt-6 md:mt-8 max-w-[520px] mx-0">
              You are given the time to build both technical skills and
              analytical thinking. Learning happens through real datasets,
              projects, and practical exposure, helping you connect concepts to
              real-world applications.
            </p>

            <p className="font-tthoves-light text-black text-sm sm:text-base leading-relaxed mt-6 md:mt-8 max-w-[520px] mx-0">
              This approach ensures that you don&apos;t just learn how to work
              with data, you learn how to think with it.
            </p>
          </div>

          <div className="order-1 md:order-2 py-4 md:py-12 md:pl-10 lg:pl-14 flex items-center justify-center md:justify-start">
            <Image
              src="/school-of-engg-tech/btech/What-makes-this-program-different.png"
              width={820}
              height={330}
              alt="What makes this B.Tech Data Science program different"
              className="w-full max-w-full sm:max-w-[540px] md:max-w-[740px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Different
