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
          <div className="h-[125vh] lg:h-[100vh]">
            <Image
              src="/school-of-engg-tech/ba-design/img4.webp"
              alt="Who Can Apply Background"
              fill
              className="object-cover lg:block hidden"
              priority
            />
          </div>
          <div className="lg:h-auto h-[25vh] w-full">
            <Image
              src="/school-of-engg-tech/ba-design/img5.webp"
              alt="Who Can Apply Background"
              fill
              className="lg:hidden object-cover bg-[#002560]"
              priority
            />
          </div>
          {/* Overlay Content */}
          <div className="absolute lg:bottom-1 bottom-10 lg:left-[55%] left-[0%] flex items-center">
            <div className=" text-white px-5">
              <h3 className="font-tthoves-demibold text-xl lg:text-2xl px-4 mb-3">
                Admissions & Eligibility
              </h3>
              <p className="lg:text-base text-sm px-4 mb-2">
                Duration: 3 or 4 years (Honours)
              </p>
              <p className="lg:text-base text-sm px-4 mb-2 font-tthoves-demibold">
                Eligibility Criteria
              </p>
              <ul className="list-disc pl-8 pr-4 space-y-2 lg:text-base text-sm">
                <li>
                  The candidate must have successfully completed 10+2 (Higher
                  Secondary) or equivalent examination from a recognised board.
                </li>
                <li>Students from any academic stream are eligible to apply.</li>
                <li>
                  Candidates with a demonstrated interest in design, visual
                  creativity, media, or communication-related activities may be
                  given preference.
                </li>
                <li>
                  In case of SC/ST/OBC/Category I candidates, a 5% relaxation
                  in aggregate marks may be considered as per applicable
                  regulations.
                </li>
              </ul>
              <p className="lg:text-base text-sm px-4 mt-4 mb-2 font-tthoves-demibold">
                Admission Process
              </p>
              <ul className="list-disc pl-8 pr-4 space-y-2 lg:text-base text-sm">
                <li>
                  Admissions are based on marks obtained in the qualifying
                  examination.
                </li>
                <li>
                  Shortlisted candidates may be invited for an interaction or
                  interview to assess creative aptitude and interest in design
                  and communication.
                </li>
                <li>
                  Strong communication skills and creative potential are
                  considered desirable.
                </li>
              </ul>
             
            </div>
          </div>
        </div>
      </div>
    </div>


<div className="bg-[#002561] py-10 lg:py-10 border-t border-[#ffffff1f]">
<div className="container mx-auto px-2 md:px-0 text-center">
  <Image
    src="/school-of-engg-tech/bba-general/img2.webp"
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
