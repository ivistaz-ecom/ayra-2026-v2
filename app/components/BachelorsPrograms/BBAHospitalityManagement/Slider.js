"use client"

import React from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const items = [

  { title: "Food and Beverage Management" },
  { title: "Front Office Management" },
  { title: "Housekeeping Management" },
  { title: "Event Management" },
  { title: "Hospitality Marketing" },
  { title: "Hospitality Finance" },
  { title: "Hospitality Law" },
  { title: "Hospitality Technology" },
  { title: "Hospitality Strategy" },
  { title: "Hospitality Leadership" },
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
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h3 className="font-schabo uppercase text-[#00AEEF] text-[56px] md:text-[84px] leading-[0.9]">
          Specialisation Focus Areas
        </h3>
        <p className="mt-4 font-tthoves-light text-black/80 text-[14px] md:text-[18px]">
          Students gain knowledge and practical expertise across key areas of
          hospitality management:
        </p>

        <div className="mt-8">
          <Slider {...settings}>
            {items.map((item) => (
              <div key={item.title} className="px-2 md:px-3">
                <div className="border border-dashed border-[#B5B5B5] px-4 md:px-6 py-5 md:py-6">
                  <p className="font-schabo text-[#0098FF] text-[42px] md:text-[32px] leading-[0.95]">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Carousel