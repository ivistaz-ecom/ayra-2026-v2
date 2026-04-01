"use client"

import React from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const items = [
  { title: "Visual Communication" },
  { title: "Digital Media Design" },
  { title: "User Interface and User Experience (UI/UX) Design" },
  { title: "Branding and Advertising" },
  { title: "Photography and Visual Storytelling" },
  { title: "Communication Strategy" },
  { title: "Content Creation and Digital Marketing" },
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
        <h3 className="font-schabo uppercase text-[#FF8281] text-[56px] md:text-[84px] leading-[0.9]">
          Specialisation / Focus Areas
        </h3>
        <p className="mt-4 font-tthoves-light text-black/80 text-[14px] md:text-[18px]">
          Students develop skills across key areas of contemporary design and
          communication:
        </p>

        <div className="mt-8">
          <Slider {...settings}>
            {items.map((item, index) => (
              <div key={`${index}-${item.title}`} className="px-2 md:px-3">
                <div className="border border-dashed border-[#B5B5B5] px-4 md:px-6 py-5 md:py-6">
                  <p className="font-schabo text-[#FF4D48] text-[42px] md:text-[32px] leading-[0.95] text-center break-words">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <p className="mt-8 font-tthoves-light text-black/80 text-[14px] md:text-[18px] leading-relaxed">
          These areas help students create meaningful visual and communication
          solutions across diverse media platforms.
        </p>
      </div>
    </section>
  )
}

export default Carousel