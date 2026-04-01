"use client"

import React from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const items = [
  { title: "Design Foundations" },
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
    <>
      <section className="w-full py-8 md:py-12">
        <div className="container mx-auto lg:px-0 px-2">
          <h3 className="font-tthoves-light text-black text-xl md:text-3xl mb-6 md:mb-8">
            The range of courses offered across the program includes:
          </h3>

          <Slider {...settings}>
            {items.map((item, index) => (
              <div
                key={`${index}-${item.title}`}
                className="px-2 h-[122px] sm:h-[119px] md:h-[126px]"
              >
                <div className="h-full flex items-center justify-center">
                  <div className="h-full w-full border-2 border-dashed border-[#D6D6D6] bg-white/90 px-3 sm:px-4 md:px-6 py-2 flex items-center justify-center">
                    <div className="font-schabo text-[#FF4D48] text-[19px] md:text-[25px] leading-[1.1] text-center w-full max-w-full break-words">
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
