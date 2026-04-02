"use client"

import React from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const items = [
  { title: "Engineering Foundation" },
  { title: "Major Core" },
  { title: "Major Elective" },
  { title: "Minor (Optional)" },
  { title: "Proficiency Core (Ability Enhancement Courses)" },
  { title: "Professional Skills (Skill Enhancement Courses)" },
  { title: "Open Electives" },
  { title: "University Core (Value-Based Courses)" },
  { title: "Sports & Wellness" },
  { title: "Industry Integrated Learning" },
  { title: "Service and Field Learning" },
  { title: "(LEAP - Learn | Engage | Apply | Progress)" },
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
    <section className="w-full py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-0">
        <h3 className="font-tthoves-light text-black text-base sm:text-lg md:text-2xl lg:text-3xl mb-6 md:mb-8 text-left max-w-4xl mx-0">
          The range of courses offered across <br/> the program includes:
        </h3>

        <Slider {...settings}>
          {items.map((item, index) => (
            <div
              key={`${index}-${item.title}`}
              className="px-2 h-[70px] sm:h-[80px] md:h-[95px]"
            >
              <div className="h-full flex items-center justify-center">
                <div className="h-full w-full border-2 border-dashed border-[#D6D6D6] bg-white/90 px-4 sm:px-6 md:px-10 py-4 flex items-center justify-center">
                  <div className="font-schabo text-[#744AC6] text-[23px] sm:text-[25px] md:text-[27px] lg:text-[29px] leading-[1.08] text-center w-full">
                    {item.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Carousel
