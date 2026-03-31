"use client"

import React from "react"
import dynamic from "next/dynamic"

const Slider = dynamic(() => import("react-slick"), { ssr: false })

const items = [
  { title: "Food Production and Culinary Techniques" },
  { title: "Bakery and Confectionery" },
  { title: "Menu Planning and Food Presentation" },
  { title: "Kitchen Operations and Culinary Management" },
  { title: "Food Safety and Hygiene" },
  { title: "Culinary Innovation and Gastronomy" },
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
        <h2 className="font-schabo uppercase text-[#FFB8DD] text-[40px] sm:text-[48px] md:text-[68px] lg:text-[88px] leading-[0.95] text-left">
          Specialisation / Focus Areas
        </h2>

        <p className="mt-3 font-tthoves-light text-black text-sm md:text-base text-left max-w-[980px] mx-0">
          Students gain expertise in key areas of culinary arts and food
          service:
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
                    <h3 className="font-schabo text-[#E5429E] text-[23px] sm:text-[25px] md:text-[26px] lg:text-[28px] leading-[1.08] text-center w-full">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <p className="mt-5 font-tthoves-light text-black text-sm md:text-base text-left max-w-[980px] mx-0">
          These focus areas support the development of both creative culinary
          ability and professional kitchen management skills.
        </p>
      </div>
    </section>
  )
}

export default Specialisations