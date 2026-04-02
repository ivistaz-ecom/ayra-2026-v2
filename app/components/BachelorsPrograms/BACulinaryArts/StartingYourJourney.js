import React from "react"
import Image from "next/image"

const StartingYourJourney = () => {
  return (
    <section className="w-full bg-white py-8 md:py-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="relative">
          {/* Swap images for mobile vs desktop */}
          <Image
            src="/school-of-engg-tech/ba-culinary-arts/Starting-your-journey.png"
            width={1600}
            height={900}
            alt="Starting your journey at AYRA"
            className="hidden md:block w-full h-auto"
            priority
          />
          <Image
            src="/school-of-engg-tech/ba-culinary-arts/Starting-your-journey-mobile.png"
            width={900}
            height={520}
            alt="Starting your journey at AYRA"
            className="block md:hidden w-full h-auto"
            priority
          />

          {/* Mobile text overlay (visible only on small screens). */}
          <div className="absolute inset-0 flex md:hidden items-end pb-10">
            <div className="w-full text-left">
              <p className="font-tthoves-light text-white text-[15px] leading-snug">
                To apply for B.A. (Culinary Arts), candidates must have
                completed 10+2 or equivalent from a recognised board.
              </p>
              <p className="mt-6 font-tthoves-light text-white text-[15px] leading-snug">
                Students from any academic stream may apply. Interest in
                culinary arts, food preparation, and hospitality service is
                preferred.
              </p>
              <p className="mt-6 font-tthoves-light text-white text-[15px] leading-snug">
                Admissions are based on qualifying marks. Shortlisted
                candidates may be invited for an interaction/interview.
                Creativity, communication, and teamwork are considered
                desirable.
              </p>
            </div>
          </div>

          {/* Desktop overlay — aligns with container padding */}
          <div className="absolute inset-0 hidden md:flex items-end sm:items-start justify-end pt-0 sm:pt-8 md:pt-24 pb-0">
            <div className="w-full md:w-[50%] py-4 sm:py-5 md:pt-[160px] md:pb-6 text-white bg-[#0a2866]/88 md:bg-transparent backdrop-blur-[1px] md:backdrop-blur-none rounded-none md:rounded-none pl-5 pr-5">
              <p className="mt-0 md:mt-1 font-tthoves-light text-[12px] sm:text-xs md:text-sm text-left">
                Admissions &amp; Eligibility
                <br />
                Duration: 3 Years (Undergraduate Degree) or 4 Years (B.A.
                Honours option)
              </p>

              <h3 className="mt-3 font-tthoves-bold text-[12px] sm:text-xs md:text-sm text-left">
                Eligibility Criteria:
              </h3>
              <ul className="mt-1 space-y-1.5 font-tthoves-light text-[11px] sm:text-[12px] md:text-[12px] leading-relaxed text-left">
                <li className="flex items-start gap-2">
                  <Image
                    src="/school-of-engg-tech/ba-culinary-arts/arrow.svg"
                    width={14}
                    height={14}
                    alt="arrow icon"
                    className="mt-0.5 h-3.5 w-3.5 shrink-0"
                  />
                  <span>
                    The candidate must have successfully completed 10+2 (Higher
                    Secondary) or equivalent examination from a recognised
                    board.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Image
                    src="/school-of-engg-tech/ba-culinary-arts/arrow.svg"
                    width={14}
                    height={14}
                    alt="arrow icon"
                    className="mt-0.5 h-3.5 w-3.5 shrink-0"
                  />
                  <span>Students from any academic stream are eligible to apply.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Image
                    src="/school-of-engg-tech/ba-culinary-arts/arrow.svg"
                    width={14}
                    height={14}
                    alt="arrow icon"
                    className="mt-0.5 h-3.5 w-3.5 shrink-0"
                  />
                  <span>
                    Candidates with an interest in culinary arts, food
                    preparation, and hospitality service may be given
                    preference.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Image
                    src="/school-of-engg-tech/ba-culinary-arts/arrow.svg"
                    width={14}
                    height={14}
                    alt="arrow icon"
                    className="mt-0.5 h-3.5 w-3.5 shrink-0"
                  />
                  <span>
                    In case of SC/ST/OBC/Category I candidates, a 5% relaxation
                    in the aggregate marks obtained in the qualifying
                    examination may be considered as per applicable regulations.
                  </span>
                </li>
              </ul>

              <h3 className="mt-3 font-tthoves-bold text-[12px] sm:text-xs md:text-sm text-left">
                Admission Process
              </h3>
              <p className="mt-1 font-tthoves-light text-[11px] sm:text-[12px] md:text-[12px] leading-relaxed text-left">
                Admissions are based on the marks obtained in the qualifying
                examination.
              </p>
              <p className="mt-2 font-tthoves-light text-[11px] sm:text-[12px] md:text-[12px] leading-relaxed text-left">
                Shortlisted candidates may be invited for an interaction or
                interview to assess aptitude for culinary arts and hospitality
                careers.
              </p>
              <p className="mt-2 font-tthoves-light text-[11px] sm:text-[12px] md:text-[12px] leading-relaxed text-left">
                Good communication skills, creativity, and teamwork are
                considered desirable attributes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StartingYourJourney
