"use client"

import React from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const items = [
  { title: "Business Analytics Fundamentals" },
  { title: "Statistical Analysis for Business" },
  { title: "Data Visualization and Business Intelligence" },
  { title: "Predictive Analytics" },
  { title: "Marketing Analytics" },
  { title: "Financial Analytics" },
  { title: "Operations and Supply Chain Analytics" },
  { title: "Decision Modelling for Business" },
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
    <section className="w-full pb-8 md:pb-12 mt-4 md:mt-6">
      <div className="container mx-auto lg:px-0 px-2">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={`${index}-${item.title}`} className="px-2 ">
              <div className="h-full flex items-center justify-center">
                <div className="border-2 border-dashed border-[#D6D6D6] bg-white/90 px-6 md:px-10 py-5 md:py-7">
                  <div className="font-schabo text-[#0098FF] text-[36px] md:text-[48px] leading-[1.05] text-center">
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
