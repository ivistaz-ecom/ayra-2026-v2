import Image from "next/image"
import React from "react"
import { HoverButton5 } from "../../../utils/HoverButton"

const Ayraadapt = () => {
  return (
    <>
      <div className="py-5">
        <div className="mb-10">
          <div className="relative w-full  my-4">
            {/* Background Image */}
            <div className="h-[100vh]  lg:h-[100vh]">
              <Image
                src="/school-of-engg-tech/bsc-in-sport/img3.webp"
                alt="Who Can Apply Background"
                fill
                className="object-cover lg:block hidden"
                priority
              />
            </div>
            <div className="lg:h-auto h-[25vh] w-full">
              <Image
                src="/school-of-engg-tech/bsc-in-sport/img4.webp"
                alt="Who Can Apply Background"
                fill
                className="lg:hidden object-cover bg-[#002560]"
                priority
              />
            </div>
            {/* Overlay Content */}
            <div className="absolute lg:bottom-28 bottom-5 lg:left-[5%] left-[0%] flex items-center lg:w-1/2">
              <div className=" text-white ">
                <h2 className="font-schabo text-[#FFF4D4] uppercase text-[52px] leading-[0.95] md:text-[88px] md:leading-[0.9] px-4 mb-5">
                  SPORTS PERFORMANCE
                  <br /> LABS & TRAINING FACILITIES
                </h2>
                <p className="lg:text-base text-sm px-4">
                  AYRA provides a dedicated environment for sports science
                  education through advanced training facilities and laboratories
                  designed for performance assessment, movement analysis, and
                  athlete development.
                </p>

                <p className="lg:text-base text-sm px-4">
                  Students gain access to facilities that support exercise
                  physiology testing, biomechanics analysis, strength and
                  conditioning training, and sports performance monitoring.
                  These environments allow students to work with equipment used
                  in professional sports and fitness settings.
                </p>

                <p className="lg:text-base text-sm px-4">
                  These facilities create an environment where scientific
                  learning connects directly with practical sports training and
                  athlete development.
                </p>
                {/* <div className="pt-5 px-4">
                  <HoverButton5 text="Know more" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ayraadapt
