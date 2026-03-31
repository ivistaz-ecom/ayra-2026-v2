import Image from "next/image"
import React from "react"
import { HoverButton5 } from "../../../utils/HoverButton"

const Ayraadapt = () => {
  return (
    <>
      <div className="">
        <div className="lg:mb-16 ">
          <div className="relative w-full  my-4">
            {/* Background Image */}
            <div className="h-[100vh]  lg:h-[100vh]">
              <Image
                src="/school-of-engg-tech/bsc-in-sport/img5.webp"
                alt="Who Can Apply Background"
                fill
                className="object-cover lg:block hidden"
                priority
              />
            </div>
            <div className="lg:h-auto h-[25vh] w-full">
              <Image
                src="/school-of-engg-tech/bsc-in-sport/img6.webp"
                alt="Who Can Apply Background"
                fill
                className="lg:hidden object-cover bg-[#002560]"
                priority
              />
            </div>
            {/* Overlay Content */}
            <div className="absolute lg:bottom-16 bottom-1 lg:left-[50%] left-[0%] flex items-center lg:w-1/2 px-4">
              <div className=" text-white ">
                <h2 className="font-schabo text-[#FFF4D4] uppercase text-[52px] leading-[0.95] md:text-[88px] md:leading-[0.9] px-4 mb-5">
                  THE AYRA SPORTS
                  <br /> ECOSYSTEM
                </h2>
                <p className="lg:text-base text-sm px-4">
                  Sports and physical wellness form an integral part of the
                  AYRA campus culture.
                </p>

                <p className="lg:text-base text-sm px-4">
                  The university is committed to building a vibrant sports
                  ecosystem that encourages athletic excellence, promotes
                  healthy lifestyles, and integrates scientific approaches to
                  performance development.
                </p>

                <p className="lg:text-base text-sm px-4">
                  Students benefit from an environment where competitive sports,
                  fitness training, and wellness initiatives are actively
                  supported by AYRA to develop strong university teams across
                  multiple sports disciplines, creating opportunities for
                  students to participate in competitions and represent the
                  institution.
                </p>

                <p className="lg:text-base text-sm px-4">
                  The university also envisions collaborations with sports
                  academies, training institutions, and performance experts,
                  giving students exposure to professional sports environments
                  and coaching methodologies.
                </p>

                <p className="lg:text-base text-sm px-4">
                  This ecosystem creates a unique learning environment where
                  sports science students can observe, analyse, and contribute
                  to real athlete training and performance programs.
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
