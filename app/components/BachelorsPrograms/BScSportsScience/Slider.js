"use client"

import React from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const items = [
  { title: "Exercise Physiology and Human Performance" },
  { title: "Sports Biomechanics and Movement Analysis" },
  { title: "Sports Psychology and Mental Performance" },
  { title: "Sports Nutrition and Athlete Health" },
  { title: "Strength and Conditioning" },
  { title: "Sports Injury Prevention and Rehabilitation" },
  { title: "Sports Analytics and Performance Data" },
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

const SpecialisationSlider = () => {
  return (
    <section className="w-full py-10 md:py-14 ">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h3 className="font-schabo uppercase text-[#FFC349] text-[56px] md:text-[84px] leading-[0.9]">
        SPECIALISATION FOCUS AREAS
        </h3>
        <p className="mt-4 font-tthoves-light text-black/80 text-[14px] md:text-[18px]">
        Students gain expertise across key areas of sports science and human performance:
        </p>

        <div className="mt-8">
          <Slider {...settings}>
            {items.map((item) => (
              <div key={item.title} className="px-2 md:px-3">
                <div className="border border-dashed border-[#B5B5B5] px-4 md:px-6 py-5 md:py-6 h-48 flex items-center justify-center">
                  <p className="font-schabo text-[#FFA300] text-[42px] lg:text-[56px] leading-[0.95]">
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

export default SpecialisationSlider
