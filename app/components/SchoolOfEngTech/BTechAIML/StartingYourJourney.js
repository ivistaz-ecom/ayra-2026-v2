import React from "react"
import Image from "next/image"

const StartingYourJourney = () => {
  return (
    <section className="w-full bg-white py-8 md:py-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="relative">
          {/* Swap images for mobile vs desktop */}
          <Image
            src="/school-of-engg-tech/btech/starting-your-journey.png"
            width={1600}
            height={900}
            alt="Starting your journey at AYRA"
            className="hidden md:block w-full h-auto"
            priority
          />
          <Image
            src="/school-of-engg-tech/btech/starting-your-journey-mobile.png"
            width={900}
            height={520}
            alt="Starting your journey at AYRA"
            className="block md:hidden w-full h-auto"
            priority
          />

          {/* Mobile text overlay (visible only on small screens). */}
          <div className="absolute inset-0 flex md:hidden items-end justify-center px-5 pb-10">
            <div className="w-full text-left">
              <p className="font-tthoves-light text-white text-[15px] leading-snug">
                To apply for the BBA program, students must have completed 12th grade
                from a recognised board with a minimum of 50% marks.
              </p>

              <p className="mt-6 font-tthoves-light text-white text-[15px] leading-snug">
                Admissions are based on the University's eligibility guidelines and may consider
                performance in recognised entrance tests or qualifying assessments, where applicable
              </p>

              <p className="mt-6 font-tthoves-light text-white text-[15px] leading-snug">
                Admission is confirmed after document verification, registration, and payment of
                the required fees within the given timelines, as per University norms.
              </p>
            </div>
          </div>

          {/* Desktop overlay content only. */}
          <div className="absolute inset-0 hidden md:flex items-end sm:items-start justify-center md:justify-end pt-0 sm:pt-8 md:pt-24 px-0 md:px-8 pb-0 md:pb-0">
            <div className="w-full md:w-[50%] px-3 sm:px-4 md:px-6 py-4 sm:py-5 md:pt-[160px] md:pb-6 text-white bg-[#0a2866]/88 md:bg-transparent backdrop-blur-[1px] md:backdrop-blur-none rounded-none md:rounded-none">
              <p className="mt-0 md:mt-1 font-tthoves-light text-[12px] sm:text-xs md:text-sm text-left">
                Admissions and eligibility
                <br />
                Duration: 4 years
              </p>

              <h3 className="mt-3 font-tthoves-bold text-[12px] sm:text-xs md:text-sm text-left">
                Eligibility Criteria:
              </h3>
              <ul className="mt-1 space-y-1.5 font-tthoves-light text-[11px] sm:text-[12px] md:text-[12px] leading-relaxed text-left">
                <li className="flex items-start gap-2">
                  <Image
                    src="/rocket-icon.svg"
                    width={14}
                    height={14}
                    alt="arrow icon"
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 rotate-45"
                  />
                  <span>
                  Completion of 10+2 or equivalent examination with Physics,
                  Mathematics and Computer Science/Chemistry/Electronics/Bio-Technology/Technical
                  Vocational subject or equivalent, securing a minimum of 50%
                  marks in aggregate (in the three core subjects identified
                  above).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Image
                    src="/rocket-icon.svg"
                    width={14}
                    height={14}
                    alt="arrow icon"
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 rotate-45"
                  />
                  <span>
                  In case of SC/ST/OBC/Category I candidates, there is a
                  relaxation of 5% in the aggregate of marks obtained in the
                  board Exams.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Image
                    src="/rocket-icon.svg"
                    width={14}
                    height={14}
                    alt="arrow icon"
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 rotate-45"
                  />
                  <span>
                  JEE / COMEDK / UGET (Common Entrance Test) scores or Karnataka
                  CET scores and SAT or equivalent foreign entrance tests
                  (wherever applicable)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Image
                    src="/rocket-icon.svg"
                    width={14}
                    height={14}
                    alt="arrow icon"
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 rotate-45"
                  />
                  <span>Good communication skills are preferred.</span>
                </li>
              </ul>

              <h3 className="mt-3 font-tthoves-bold text-[12px] sm:text-xs md:text-sm text-left">
                Admission Process:
              </h3>
              <p className="mt-1 font-tthoves-light text-[11px] sm:text-[12px] md:text-[12px] leading-relaxed text-left">
                Admissions are based on the marks obtained in the qualifying
                examination, entrance and a Personal Interview / Group
                Discussion, counselling for apt program selection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StartingYourJourney
