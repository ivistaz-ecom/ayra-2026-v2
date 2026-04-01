import React from "react"
import Image from "next/image"

const ExperimentalLearning = () => {
  return (
    <>
      <section className="w-full bg-white pb-5 md:pb-6 ">
        <div className="relative">
          <Image
            src="/school-of-business/mba/Experimental.webp"
            width={1600}
            height={900}
            alt="Experiential learning at AYRA MBA"
            className="hidden md:block w-full h-auto"
            priority
          />
          <Image
            src="/school-of-business/mba/Experiential-mobile.webp"
            width={900}
            height={1200}
            alt="Experiential learning at AYRA MBA"
            className="block md:hidden w-full h-auto"
            priority
          />

          <div className="absolute inset-0" />

          {/* Desktop content: left aligned */}
          <div className="absolute inset-0 z-10 hidden md:block px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-12">
            <h2 className="font-schabo uppercase text-[#72D9FF] text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] leading-[0.95] text-left max-w-[620px] ">
              EXPERIENTIAL LEARNING & INDUSTRY ENGAGEMENT
            </h2>

            <div className="mt-5 space-y-4 font-tthoves-light text-white text-[13px] sm:text-sm md:text-base leading-relaxed text-left  max-w-[550px] ">
              <p>
                The MBA program at AYRA places strong emphasis on practical
                exposure to business environments.
              </p>
              <p>
                Students participate in internships, industry projects, and
                research assignments that allow them to apply classroom learning
                to real-world challenges.
              </p>
              <p>
                Regular interactions with industry professionals, guest
                lectures, workshops, and networking opportunities strengthen the
                connection between academic learning and business practice.
              </p>
              <p>
                This approach supports the development of problem-solving
                ability, professional confidence, and industry readiness.
              </p>
            </div>
          </div>

          {/* Mobile content: bottom aligned */}
          <div className="absolute inset-0 z-10 flex md:hidden items-end px-5 pb-8">
            <div className="w-full">
              <h2 className="font-schabo uppercase text-[#72D9FF] text-[30px] leading-[0.95] text-left">
                EXPERIENTIAL LEARNING & INDUSTRY ENGAGEMENT
              </h2>

              <div className="mt-4 space-y-3 font-tthoves-light text-white text-[14px] leading-snug text-left">
                <p>
                  The MBA program at AYRA places strong emphasis on practical
                  exposure to business environments.
                </p>
                <p>
                  Students participate in internships, industry projects, and
                  research assignments that allow them to apply classroom
                  learning to real-world challenges.
                </p>
                <p>
                  Regular interactions with industry professionals, guest
                  lectures, workshops, and networking opportunities strengthen
                  the connection between academic learning and business
                  practice.
                </p>
                <p>
                  This approach supports the development of problem-solving
                  ability, professional confidence, and industry readiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ExperimentalLearning
