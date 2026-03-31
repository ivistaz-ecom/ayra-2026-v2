"use client"

import React from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const items = [
  { title: "Business Foundation" },
  { title: "Major Core" },
  { title: "Major Elective" },
 
  
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
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1, arrows: false },
    },
  ],
}

const Carousel = () => {
  return (
    <>
    <section className="w-full py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-0">
        <h3 className="font-tthoves-light text-black text-xl md:text-3xl mb-6 md:mb-8">
          The range of courses offered to you across the programs includes:
        </h3>

        <Slider {...settings}>
          {items.map((item, index) => (
            <div
              key={`${index}-${item.title}`}
              className="px-2 h-[70px] sm:h-[80px] md:h-[95px]"
            >
              <div className="h-full flex items-center justify-center">
                <div className="h-full w-full border-2 border-dashed border-[#D6D6D6] bg-white/90 px-4 sm:px-6 md:px-10 py-4 flex items-center justify-center">
                  <div className="font-schabo text-[#0072C5] text-[25px] sm:text-[27px] md:text-[29px] leading-[1.08] text-center w-full">
                    {item.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
    </>
  )
}

export default Carousel