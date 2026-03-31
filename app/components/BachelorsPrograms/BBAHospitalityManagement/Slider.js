"use client"

import React from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const items = [
  { title: "Hotel Operations Management" },
  { title: "Food and Beverage Management" },
  { title: "Front Office Operations" },
  { title: "Housekeeping Management" },
  { title: "Hospitality Entrepreneurship" },
]

const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: true,
  arrows: false,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
}

const Carousel = () => {
  return (
    <section className="w-full py-10 md:py-14 ">
      <div className="container mx-auto px-4 md:px-0">
        <h3 className="font-schabo uppercase text-[#00AEEF] text-[56px] md:text-[84px] leading-[0.9]">
          Specialisation / Focus Areas
        </h3>
        <p className="mt-4 font-tthoves-light text-black/80 text-[14px] md:text-[18px]">
          Students gain knowledge and practical expertise across key areas of
          hospitality management:
        </p>

        <div className="mt-8">
          <Slider {...settings}>
            {items.map((item, index) => (
              <div
                key={`${index}-${item.title}`}
                className="px-2 md:px-3 h-[70px] sm:h-[80px] md:h-[95px]"
              >
                <div className="h-full flex items-center justify-center">
                  <div className="h-full w-full border border-dashed border-[#B5B5B5] px-3 md:px-4 py-2 flex items-center justify-center">
                    <p className="font-schabo text-[#0098FF] text-[13px] sm:text-[15px] md:text-[27px] leading-[1.08] text-left w-full">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <p className="mt-8 font-tthoves-light text-black/80 text-[14px] md:text-[18px] leading-relaxed max-w-4xl">
          These areas help students understand both the operational and
          managerial aspects of hospitality organisations.
        </p>
      </div>
    </section>
  )
}

export default Carousel