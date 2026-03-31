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
                src="/school-of-engg-tech/ba-design/img2.webp"
                alt="Who Can Apply Background"
                fill
                className="object-cover lg:block hidden"
                priority
              />
            </div>
            <div className="lg:h-auto h-[25vh] w-full">
              <Image
                src="/school-of-engg-tech/ba-design/img3.webp"
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
                  AYRA supports design and communication learning through
                  dedicated creative spaces designed for experimentation and
                  collaboration.
                </p>

                <p className="lg:text-base text-sm px-4">
                  Students gain access to design studios, storytelling labs, and
                  media production spaces where they work on visual
                  communication, content creation, and media projects.
                </p>

                <p className="lg:text-base text-sm px-4">
                  These environments allow students to explore ideas, test
                  concepts, and develop creative work across formats.
                  Studio-based learning introduces students to the iterative and
                  collaborative nature of design practice.
                </p>

                <p className="lg:text-base text-sm px-4">
                  These facilities create an environment where ideas evolve into
                  visual narratives and communication solutions.
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
