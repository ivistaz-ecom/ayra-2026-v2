import Image from "next/image";
import React from "react";

const Ayraadapt = () => {
  return (
    <>
    <div className="py-5">
      <div className="mb-10">
        <div className="relative w-full container mx-auto my-4">
          {/* Background Image */}
          <div className="h-[125vh] lg:h-[100vh]">
            <Image
              src="/school-of-engg-tech/bba-general/img3.webp"
              alt="Who Can Apply Background"
              fill
              className="object-cover lg:block hidden"
              priority
            />
          </div>
          <div className="lg:h-auto h-[25vh] w-full ">
            <Image
              src="/school-of-engg-tech/bba-general/img6.png"
              alt="Who Can Apply Background"
              fill
              className="lg:hidden object-cover bg-[#002560]"
              priority
            />
          </div>
          {/* Overlay Content */}
          <div className="absolute lg:bottom-1 bottom-1 lg:left-[55%] left-0 right-0 lg:right-auto flex items-center px-4 md:px-0">
            <div className="text-white max-w-full lg:max-w-none">
              <p className="text-[14px] font-tthoves-demibold">
                Admissions &amp; Eligibility
              </p>
              <p className="text-[14px] mt-2">
                Duration: 4 Years (Undergraduate Degree)
              </p>
              <p className="text-[14px] mt-3 font-tthoves-demibold">
                Eligibility Criteria:
              </p>
              <p className="text-[14px] mt-2">
                The candidate must have successfully completed 10+2 (Higher
                Secondary) or equivalent examination from a recognized board.
              </p>
              <p className="text-[14px] mt-2">
                Students from any academic stream are eligible to apply.
              </p>
              <p className="text-[14px] mt-2">
                Candidates with an interest in hospitality, service management,
                and customer experience may be given preference.
              </p>
              <p className="text-[14px] mt-2">
                In case of SC/ST/OBC/Category I candidates, a relaxation of 5%
                in the aggregate marks obtained in the qualifying examination
                may be considered as per applicable regulations.
              </p>
              <p className="text-[14px] mt-3 font-tthoves-demibold">
                Admission Process:
              </p>
              <p className="text-[14px] mt-2">
                Admissions are based on the marks obtained in the qualifying
                examination.
              </p>
              <p className="text-[14px] mt-2">
                Shortlisted candidates may be invited for an interaction or
                interview to assess aptitude for hospitality and
                service-oriented careers.
              </p>
              <p className="text-[14px] mt-2">
                Good communication skills and interpersonal abilities are
                considered desirable attributes.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>


<div className="bg-[#002561] py-10 lg:py-10 border-t border-[#ffffff1f]">
<div className="container mx-auto px-2 md:px-0 text-center">
  <Image
    src="/school-of-engg-tech/bba-hospitality/img1.png"
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
  <p className="mt-2 font-tthoves-light text-[#b4c8df] text-[14px]">
    Speak with the admissions team, explore your options, and see what
    could fit you best.
  </p>
</div>
</div>
</>
  );
};

export default Ayraadapt;
