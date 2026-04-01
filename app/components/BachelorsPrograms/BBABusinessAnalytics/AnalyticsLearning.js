import React from "react"
import Image from "next/image"

const AnalyticsLearning = () => {
  return (
    <>
      <section className="w-full bg-[#0098FF] py-6 md:py-8">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 md:items-stretch">
            <div className="bg-[#0098FF] px-0 py-6 md:py-8 md:pr-10 lg:pr-14 md:flex md:items-center">
              <div>
                <h2 className="font-schabo uppercase text-[#72D9FF] text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] leading-[0.95] text-left max-w-[620px]">
                  ANALYTICS LEARNING ENVIRONMENT
                </h2>

                <div className="mt-5 space-y-4 font-tthoves-light text-white text-[13px] sm:text-sm md:text-base leading-relaxed text-left max-w-[550px]">
                  <p>
                    AYRA provides an environment where students learn to
                    interpret data, analyse trends, and develop insights
                    relevant to business decisions.
                  </p>
                  <p>
                    Through analytical exercises, case studies, and
                    project-based learning, students work with business
                    intelligence systems, data visualization platforms, and
                    analytics tools used in industry.
                  </p>
                  <p>
                    These learning environments allow students to engage with
                    real datasets and understand how organisations use data for
                    decision-making.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative min-h-[260px] sm:min-h-[320px] md:min-h-[400px] h-full">
              <Image
                src="/school-of-engg-tech/btech/program-highlights.png"
                width={500}
                height={500}
                alt="Experiential learning and industry engagement"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AnalyticsLearning
