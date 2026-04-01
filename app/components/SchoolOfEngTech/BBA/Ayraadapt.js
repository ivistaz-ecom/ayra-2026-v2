import Image from "next/image";
import React from "react";
import { HoverButton5 } from "../../../utils/HoverButton";

const Ayraadapt = () => {
  return (
    <div className="py-5">
      <div className="mb-10">
        <div className="relative w-full container mx-auto my-4">
          {/* Background Image */}
          <div className="h-[70vh] lg:h-[80vh]">
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
          src="/school-of-engg-tech/bba-general/img6.png"
              alt="Who Can Apply Background"
              fill
              className="lg:hidden object-cover bg-[#002560]"
              priority
            />
          </div>
          {/* Overlay Content */}
          <div className="absolute lg:bottom-10 bottom-8 lg:left-[55%] left-[0%] flex items-center">
            <div className=" text-white px-5">
            
              <p className="lg:text-base text-sm px-4 mt-4">
                To apply for the BBA program, students must have completed 12th
                grade from a recognised board with a minimum of 50% marks.
              </p>

              <p className="lg:text-base text-sm px-4 mt-4">
                Admissions are based on the University&apos;s eligibility
                guidelines and may consider performance in recognised entrance
                tests or qualifying assessments, where applicable.
              </p>
              <p className="lg:text-base text-sm px-4 mt-4">
                Admission is confirmed after document verification,
                registration, and payment of the required fees within the given
                timelines, as per University norms.
              </p>
              <div className="pt-5 px-4" >
                <HoverButton5 text="Apply Now" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ayraadapt;
