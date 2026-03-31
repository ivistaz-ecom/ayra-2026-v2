"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

const images = [
  "/opencanvas/rocket1.png",
  "/opencanvas/rocket2.png",
  "/opencanvas/rocket3.png",
  "/opencanvas/rocket4.png",
  "/opencanvas/rocket5.png",
  "/opencanvas/rocket6.png",
  "/opencanvas/rocket7.png",
]

const headings = [
  "Your Hospitality Journey at AYRA",
  "Your Hospitality Journey at AYRA",
  "Your Hospitality Journey at AYRA",
  "Your Hospitality Journey at AYRA",
  "Your Hospitality Journey at AYRA",
  
]

const subtitles = [
  "Day 0",
  "Year 1",
  "Year 2",
  "Year 3",
  "Year 4",
]

const descriptions = [
  "Regular Entry to BBA (Hospitality Management) Program",
  "Exit with a Certificate in Foundations of Hospitality Management with 40 Credits.",
  "Exit with a Diploma in Hospitality Management with 80 Credits.",
  "Exit with an Advanced Diploma in Hospitality Management with 120+ Credits.",
  "Exit with BBA (Hospitality Management) Degree with 160+ Credits.",
]

export default function PaperFoldingScroll() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [scrollPerSection, setScrollPerSection] = useState(500)

  useEffect(() => {
    setScrollPerSection(window.innerHeight / 1.5)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const trackEl = trackRef.current
      const sectionEl = sectionRef.current
      if (!trackEl || !sectionEl) return

      const scrollY = window.scrollY
      const trackTop = trackEl.offsetTop
      const maxIndex = headings.length - 1

      const scrollOffset = scrollY - trackTop

      if (scrollOffset >= 0) {
        let newIndex = Math.floor(scrollOffset / scrollPerSection)
        newIndex = Math.min(Math.max(newIndex, 0), maxIndex)
        if (newIndex !== activeIndex) {
          setActiveIndex(newIndex)
        }
      } else {
        if (activeIndex !== 0) setActiveIndex(0)
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollPerSection, activeIndex])

  const trackHeight = `calc(100vh + ${
    (headings.length - 1) * scrollPerSection
  }px)`

  return (
    <div ref={trackRef} style={{ height: trackHeight }} className="relative">
      <div
        ref={sectionRef}
        className="sticky top-0 h-[100vh] flex items-center justify-center overflow-hidden bg-[url('/opencanvas/opc-bg-img.png')] bg-cover bg-center"
      >
        <div className="relative z-10 flex flex-col md:flex-row-reverse w-full container mx-auto px-4 md:px-0 gap-6 md:gap-4 h-auto md:h-[100vh] py-10 md:py-0">
          {/* Image on top for mobile, right for desktop */}
          <div className="w-full md:w-[29%] flex flex-col items-center justify-center gap-4 mb-6 md:mb-0">
            <div className="relative w-60 h-60 md:w-80 md:h-80">
              <Image
                src={images[activeIndex]}
                alt={`Rocket ${activeIndex + 1}`}
                className="w-full h-full object-contain"
                width={160}
                height={160}
                priority
              />
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-[1px] bg-gray-300 relative">
            <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 border-l-2 border-dotted border-gray-400 h-full" />
          </div>

          {/* Text on bottom for mobile, left for desktop */}
          <div className="w-full md:w-[70%] flex flex-col justify-center md:pr-4 relative text-center md:text-left">
            <div className="h-auto">
              <h2 className="text-2xl md:text-[60px] uppercase text-[#002561] mb-4 leading-tight font-schabo">
                {headings[activeIndex]}
              </h2>
              <h3 className="text-xl lg:text-3xl text-black font-bold mb-2">
                {subtitles[activeIndex]}
              </h3>
              <p className="text-base md:text-xl text-black font-medium">
                {descriptions[activeIndex]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
