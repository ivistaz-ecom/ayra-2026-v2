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
          <div className="h-[500px] md:h-[600px] lg:h-[700px]">
            <Image
              src="/school-of-engg-tech/bba-general/img3.webp"
              alt="Who Can Apply Background"
              fill
              className="object-cover lg:block hidden"
              priority
            />
          </div>
          <div className="lg:h-auto h-[25vh] w-full">
            <Image
              src="/opencanvas/opc-play-footer.png"
              alt="Who Can Apply Background"
              fill
              className="lg:hidden object-cover bg-[#002560]"
              priority
            />
          </div>
          {/* Overlay Content */}
          <div className="absolute lg:bottom-24 bottom-20 lg:left-[55%] left-[0%] flex items-center">
            <div className=" text-white px-5">
              <p className="lg:text-base text-sm px-4">
                At AYRA, your education isn’t just about degrees—it’s about
                discovery, challenge, and self-expression.From state-of-the-art
                sports facilities and sports team to performing arts,
                student-led clubs, and leadership programs, AYRA ensures that
                your learning experience is as dynamic as you are.
              </p>

              <p className="lg:text-base text-sm px-4">
              This is your university experience. You choose how to shape it.
              </p>
              <div className="pt-5 px-4" >
                <HoverButton5 text="Know more" />
              </div>
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
