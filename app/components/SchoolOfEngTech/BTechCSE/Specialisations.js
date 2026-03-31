"use client"

import React from "react"
import dynamic from "next/dynamic"

const Slider = dynamic(() => import("react-slick"), { ssr: false })

const items = [
  { title: "Software Development and Programming" },
  { title: "Data Structures and Algorithm Design" },
  { title: "Operating Systems and Distributed Systems" },
  { title: "Database Systems and Data Management" },
  { title: "Web and Mobile Application Development" },
  { title: "Cloud Computing and DevOps" },
  { title: "Cybersecurity and Network Systems" },
]

const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: true,
  arrows: false,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
}

const Specialisations = () => {
  return (
    <section className="w-full bg-[#ffffff] py-8 md:py-10">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="font-schabo uppercase text-[#BAA0FF] text-[40px] sm:text-[48px] md:text-[68px] lg:text-[88px] leading-[0.95] text-left">
          Specialisation Focus Areas
        </h2>

        <p className="mt-3 font-tthoves-light text-black text-sm md:text-base text-left max-w-[980px] mx-0">
          Students gain expertise across key domains of modern computing,
          including:
        </p>

        <div className="mt-6">
          <Slider {...settings}>
            {items.map((item, index) => (
              <div
                key={`${index}-${item.title}`}
                className="px-2 h-[70px] sm:h-[80px] md:h-[95px]"
              >
                <div className="h-full flex items-center justify-center">
                  <div className="h-full w-full border border-dashed border-[#9BC8E7] bg-transparent px-4 sm:px-5 py-4 flex items-center justify-center">
                    <h3 className="font-schabo text-[#744AC4] text-[23px] sm:text-[25px] md:text-[26px] lg:text-[28px] leading-[1.08] text-center w-full">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Specialisations