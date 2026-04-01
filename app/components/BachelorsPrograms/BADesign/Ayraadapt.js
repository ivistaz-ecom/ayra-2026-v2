import Image from "next/image"
import React from "react"

const Ayraadapt = () => {
  return (
    <>
      <section className="w-full bg-white py-8 md:py-10">
        <div className="container mx-auto px-4 md:px-0">
          <div className="relative">
            <Image
              src="/school-of-engg-tech/ba-design/Starting.png"
              width={1600}
              height={900}
              alt="Admissions and eligibility — B.A. Design and Communication at AYRA"
              className="hidden md:block w-full h-auto"
              priority
            />
            <Image
              src="/school-of-engg-tech/ba-design/img5.webp"
              width={900}
              height={520}
              alt="Admissions and eligibility — B.A. Design and Communication at AYRA"
              className="block md:hidden w-full h-[158vh]"
              object-cover
              priority
            />

            {/* Mobile overlay */}
            <div className="absolute inset-0 flex md:hidden items-end justify-center px-5 pb-10">
              <div className="w-full text-left">
                <p className="font-tthoves-bold text-white text-[14px] leading-snug">
                  Admissions &amp; Eligibility
                </p>
                <p className="mt-1 font-tthoves-light text-white text-[14px] leading-snug">
                  Duration: 3 or 4 years (Honours)
                </p>

                <h3 className="mt-4 font-tthoves-bold text-white text-[14px] leading-snug">
                  Eligibility Criteria
                </h3>
                <ul className="mt-2 space-y-2 font-tthoves-light text-white text-[14px] leading-snug">
                  <li className="flex items-start gap-2">
                    <Image
                      src="/rocket-icon.svg"
                      width={14}
                      height={14}
                      alt="arrow icon"
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 rotate-45"
                    />
                    <span>
                      The candidate must have successfully completed 10+2
                      (Higher Secondary) or equivalent examination from a
                      recognised board.
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
                      Students from any academic stream are eligible to apply.
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
                      Candidates with a demonstrated interest in design, visual
                      creativity, media, or communication-related activities may
                      be given preference.
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
                      In case of SC/ST/OBC/Category I candidates, a 5%
                      relaxation in aggregate marks may be considered as per
                      applicable regulations.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-4 font-tthoves-bold text-white text-[14px] leading-snug">
                  Admission Process
                </h3>
                <ul className="mt-2 space-y-2 font-tthoves-light text-white text-[14px] leading-snug">
                  <li className="flex items-start gap-2">
                    <Image
                      src="/rocket-icon.svg"
                      width={14}
                      height={14}
                      alt="arrow icon"
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 rotate-45"
                    />
                    <span>
                      Admissions are based on marks obtained in the qualifying
                      examination.
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
                      Shortlisted candidates may be invited for an interaction
                      or interview to assess creative aptitude and interest in
                      design and communication.
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
                      Strong communication skills and creative potential are
                      considered desirable.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="absolute inset-0 hidden md:flex items-end sm:items-start justify-center md:justify-end pt-0 sm:pt-8 md:pt-24 px-0 md:px-8 pb-0 md:pb-0">
              <div className="w-full md:w-[50%] px-3 sm:px-4 md:px-6 py-4 sm:py-5 md:pt-[160px] md:pb-6 text-white bg-[#0a2866]/88 md:bg-transparent backdrop-blur-[1px] md:backdrop-blur-none rounded-none md:rounded-none">
                <p className="mt-0 md:mt-1 font-tthoves-light text-[12px] sm:text-xs md:text-sm text-left">
                  Admissions &amp; Eligibility
                  <br />
                  Duration: 3 or 4 years (Honours)
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
                      The candidate must have successfully completed 10+2
                      (Higher Secondary) or equivalent examination from a
                      recognised board.
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
                      Students from any academic stream are eligible to apply.
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
                      Candidates with a demonstrated interest in design, visual
                      creativity, media, or communication-related activities may
                      be given preference.
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
                      In case of SC/ST/OBC/Category I candidates, a 5%
                      relaxation in aggregate marks may be considered as per
                      applicable regulations.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-3 font-tthoves-bold text-[12px] sm:text-xs md:text-sm text-left">
                  Admission Process:
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
                      Admissions are based on marks obtained in the qualifying
                      examination.
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
                      Shortlisted candidates may be invited for an interaction
                      or interview to assess creative aptitude and interest in
                      design and communication.
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
                      Strong communication skills and creative potential are
                      considered desirable.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#002561] py-10 lg:py-10 border-t border-[#ffffff1f]">
        <div className="container mx-auto px-2 md:px-0 text-center">
          <Image
            src="/school-of-engg-tech/ba-design/Not-sure-where-to-begin.png"
            width={700}
            height={450}
            alt="Students collaborating on a project"
            className="block lg:w-1/2 mx-auto"
          />
        </div>
        <div className="mt-8 border-t border-dashed border-[#2a72b7] pt-5 text-center">
          <p className="font-tthoves-demibold text-bl text-[30px] leading-tight lg:text-[32px] text-white">
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

export default Ayraadapt
