import React from "react"
import Image from "next/image"

const PsychologyLab = () => {
  return (
    <>
      <section className="w-full bg-white pb-5 md:pb-6 ">
        <div className="relative overflow-hidden min-h-[520px] sm:min-h-[620px] md:min-h-[700px]">
          <div className="absolute inset-0 hidden md:block ">
            <Image
              src="/bba-programs/ba-in-psychology/psychology-lab.png"
              width={886}
              height={746}
              alt="Experimental learning at AYRA MBA"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 block md:hidden">
            <Image
              src="/bba-programs/ba-in-psychology/psychology-lab-mobile.png"
              width={800}
              height={1000}
              alt="Experimental learning at AYRA MBA"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="absolute inset-0" />

          {/* Desktop content: left aligned */}
          <div className="absolute inset-0 z-10 hidden md:block px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-12">
            <h2 className="font-schabo uppercase text-[#FF8281] text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] leading-[0.95] text-left max-w-[620px] ">
              Psychology Lab & <br /> Counseling Centre
            </h2>

            <div className="mt-5 space-y-4 font-tthoves-light text-white text-[13px] sm:text-sm md:text-base leading-relaxed text-left  max-w-[550px] ">
              <p>
                AYRA supports psychology learning through dedicated spaces for
                observation, experimentation, and applied understanding.
              </p>
              <p>
                The Psychology Laboratory allows students to conduct
                experiments, behavioural observations, and psychological
                assessments related to cognition, perception, and human
                behaviour.
              </p>
              <p>
                The Counseling Centre provides exposure to mental wellbeing
                initiatives, awareness programs, and supportive practices.
                Students gain insight into how psychological concepts are
                applied in real-world wellbeing contexts.
              </p>
              <p>
                Together, these facilities help students connect theory with
                practice in meaningful and practical ways.
              </p>
            </div>
          </div>

          {/* Mobile content: bottom aligned */}
          <div className="absolute inset-0 z-10 flex md:hidden items-end px-5 pb-8">
            <div className="w-full text-left">
              <h2 className="font-schabo uppercase text-[#FF8281] text-[30px] leading-[0.95]">
                Psychology Lab & <br /> Counseling Centre
              </h2>

              <div className="mt-4 space-y-3 font-tthoves-light text-white text-[14px] leading-snug">
                <p>
                  AYRA supports psychology learning through dedicated spaces for
                  observation, experimentation, and applied understanding.
                </p>
                <p>
                  The Psychology Laboratory allows students to conduct
                  experiments, behavioural observations, and psychological
                  assessments related to cognition, perception, and human
                  behaviour.
                </p>
                <p>
                  The Counseling Centre provides exposure to mental wellbeing
                  initiatives, awareness programs, and supportive practices.
                  Students gain insight into how psychological concepts are
                  applied in real-world wellbeing contexts.
                </p>
                <p>
                  Together, these facilities help students connect theory with
                  practice in meaningful and practical ways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PsychologyLab
