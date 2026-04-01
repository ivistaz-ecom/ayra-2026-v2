import React from "react"
import Image from "next/image"

const highlights = [
  "Graduates can explore opportunities across industry, services, entrepreneurship, or further academic and professional studies, depending on their discipline.",
  "Structured support may be provided through placement assistance, career guidance, and networking platforms with organisations and professionals.",
]

const Career = () => {
  return (
    <>
      {" "}
      <section className="w-full">
        <div className="bg-[#0093FF] py-8 md:py-10">
          <div className="container mx-auto px-4 md:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
              <div>
                <h2 className="font-schabo text-white uppercase text-[52px] leading-[0.95] md:text-[88px] md:leading-[0.9]">
                  Career and
                  <br />
                  Progression Outcomes
                </h2>

                <ul className="mt-6 space-y-4">
                  {highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 font-tthoves-light text-white text-sm md:text-base"
                    >
                      <Image
                        src="/rocket-icon.svg"
                        width={18}
                        height={18}
                        alt="bullet icon"
                        className="mt-1 h-4 w-4 shrink-0 rotate-45"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 max-w-[90%] font-tthoves-light text-white text-sm md:text-base leading-relaxed">
                  The program aims to prepare learners for roles in their chosen
                  field and related sectors, with emphasis on both immediate
                  employment and future growth.
                </p>
              </div>

              <div>
                <p className="font-tthoves-light text-white text-sm md:text-base leading-relaxed">
                  The program aims to prepare learners for roles in their chosen
                  field and related sectors, with emphasis on both immediate
                  employment and future growth.
                </p>
                <div className="relative w-full bg-[#2050B2]">
                  <div className="hidden md:block w-full">
                    <Image
                      src="/school-of-engg-tech/bba-general/img7.webp"
                      alt="Engg-and-Tech"
                      width={1920}
                      height={1080}
                      className="object-cover object-center w-full lg:h-auto"
                      priority
                    />
                  </div>

                  <div className="block md:hidden w-full">
                    <Image
                      src="/school-of-engg-tech/bba-general/img7.webp"
                      alt="Engg-and-Tech"
                      width={800}
                      height={1000}
                      className="object-cover object-center w-full h-auto"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#002561] py-10 lg:py-10 border-t border-[#ffffff1f]">
        <div className="container mx-auto px-4 md:px-0 text-center">
        <Image
              src="/school-of-engg-tech/bba-general/img4.webp"
              width={700}
              height={450}
              alt="Students collaborating on a project"
              className="block lg:w-1/2 mx-auto"
            />
        </div>
        <div className="mt-8 border-t border-dashed border-[#2a72b7] pt-5 text-center">
          <p className="font-tthoves-demibold text-white text-[30px] leading-tight lg:text-[32px]">
            Give us five minutes on a call.
          </p>
          <p className="mt-2 font-tthoves-light text-[#b4c8df] text-sm lg:text-lg">
            Speak with the admissions team, explore your options, and see what
            could fit you best.
          </p>
        </div>
      </div>
    </>
  )
}

export default Career
