import Image from "next/image";
import React from "react";
import { HoverButton5 } from "../../../utils/HoverButton";

const Ayraadapt = () => {
  return (
    <>
    <div className="py-5">
      <div className="mb-10">
        <div className="relative w-full container mx-auto my-4">
          {/* Background Image */}
          <div className=" h-[125vh] lg:h-[100vh]">
            <Image
              src="/school-of-engg-tech/bsc-in-sport/img2.webp"
              alt="Who Can Apply Background"
              fill
              className="object-cover lg:block hidden"
              priority
            />
          </div>
          <div className="lg:h-auto h-[25vh] w-full">
            <Image
              src="/school-of-engg-tech/bsc-in-sport/img7.webp"
              alt="Who Can Apply Background"
              fill
              className="lg:hidden object-cover bg-[#002560]"
              priority
            />
          </div>
          {/* Overlay Content */}
          <div className="absolute lg:bottom-1 bottom-5 lg:left-[55%] left-[0%] flex items-center ">
            <div className=" text-white px-5">
              <h2 className="lg:text-2xl text-xl px-4 font-tthoves-demibold">
                Admissions &amp; Eligibility
              </h2>
              <p className="lg:text-base text-sm px-4 pt-2">
                <span className="font-tthoves-demibold">Duration:</span> 3 or 4
                years (Honors)
              </p>
              <p className="lg:text-base text-sm px-4 pt-2 font-tthoves-demibold">
                Eligibility Criteria:
              </p>
              <ul className="list-disc pl-10 pr-4 lg:text-base text-sm space-y-1">
                <li>
                  The candidate must have completed 10+2 (Higher Secondary)
                  education from a recognized board.
                </li>
                <li>
                  The candidate with a proven track record of participating in
                  any of the sports (individual or team) at inter-school/district
                  level events or above will be given priority.
                </li>
                <li>
                  Sports persons already associated with personal/professional
                  trainers would be offered the flexibility of continuing their
                  training.
                </li>
                <li>
                  Preference will be given to the candidate with Science subjects
                  or an equivalent.
                </li>
                <li>
                  In case of SC/ST/OBC/Category I candidates, there is a
                  relaxation of 5% in the aggregate of marks obtained in the
                  board exams.
                </li>
              </ul>
              <p className="lg:text-base text-sm px-4 pt-3 font-tthoves-demibold">
                Admission Process:
              </p>
              <p className="lg:text-base text-sm px-4">
                Admissions are based on the marks obtained in the qualifying
                examination and an interview to assess the candidate's aptitude
                for sports. Good communication skills are preferred.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


<div className="bg-[#002561] py-10 lg:py-10 border-t border-[#ffffff1f]">
<div className="container mx-auto px-2 md:px-0 text-center">
  <Image
    src="/school-of-engg-tech/bsc-in-sport/img8.png"
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
  );
};

export default Ayraadapt;
