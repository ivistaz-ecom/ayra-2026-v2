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
  "HOW DO YOU WANT TO SPEND YOUR ACADEMIC YEARS?",
  "HOW DO YOU WANT TO SPEND YOUR ACADEMIC YEARS?",
  " How do you want to shape your learning experience? ",
  " How do you like to engage with knowledge?",
  "What kind of space fuels your best ideas?",
  "What inspires you to push boundaries? ",
  " What kind of community do you want to be part of? ",
]

const subtexts = [
  "Soaking up new ideas and seeing the world from different perspectives",
  "Diving deep into my field and becoming the go-to expert ",
  "I want the freedom to explore different subjects and see what excites me ",
  "Clear, structured discussions where I know exactly what I’m learning",
  "A quiet, tucked-away spot where I can get lost in my thoughts ",
  "Having the freedom to experiment, fail, and try again",
  "A group of like-minded people who share my interests and passions",
]

export default function PaperFoldingScroll() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [scrollPerSection, setScrollPerSection] = useState(500)
  const scrollPerSectionRef = useRef(500)

  useEffect(() => {
    let scrollRafId = null

    const tick = () => {
      const trackEl = trackRef.current
      if (!trackEl) return

      const scrollY = window.scrollY
      const trackTop = trackEl.getBoundingClientRect().top + scrollY
      const maxIndex = headings.length - 1
      const step = scrollPerSectionRef.current || 1
      const scrollOffset = scrollY - trackTop

      if (scrollOffset >= 0) {
        let newIndex = Math.floor(scrollOffset / step)
        newIndex = Math.min(Math.max(newIndex, 0), maxIndex)
        setActiveIndex((prev) => (prev !== newIndex ? newIndex : prev))
      } else {
        setActiveIndex((prev) => (prev !== 0 ? 0 : prev))
      }
    }

    const scheduleTick = () => {
      if (scrollRafId != null) return
      scrollRafId = requestAnimationFrame(() => {
        scrollRafId = null
        tick()
      })
    }

    const updateScrollStep = () => {
      scrollPerSectionRef.current = window.innerHeight / 1.5
      setScrollPerSection(scrollPerSectionRef.current)
      scheduleTick()
    }

    const onScroll = () => {
      scheduleTick()
    }

    updateScrollStep()
    window.addEventListener("resize", updateScrollStep)
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("resize", updateScrollStep)
      window.removeEventListener("scroll", onScroll)
      if (scrollRafId != null) cancelAnimationFrame(scrollRafId)
    }
  }, [])

  const trackHeight = `calc(100vh + ${
    (headings.length - 1) * scrollPerSection
  }px)`

  return (
    <>
      {/* Scrollable Section */}
      <div ref={trackRef} style={{ height: trackHeight }} className="relative">
        <div
          ref={sectionRef}
          className="sticky top-0 h-[100vh] flex items-center justify-center overflow-hidden bg-[url('/opencanvas/opc-bg-img.png')] bg-cover bg-center"
        >
          <div className="relative z-10 flex flex-col md:flex-row w-full container mx-auto gap-4 h-auto md:h-[100vh]">
            {/* Image */}
            <div className="w-full md:w-[30%] flex items-center justify-center py-8 md:py-0">
              <div className="relative w-60 h-60 md:w-80 md:h-80">
                <Image
                  src={images[activeIndex]}
                  alt={`Rocket ${activeIndex + 1}`}
                  className="w-full h-full object-contain"
                  width={160}
                  height={160}
                  priority
                  sizes="(max-width: 640px) 208px, (max-width: 1024px) 240px, 320px"
                />
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-[1px] bg-gray-300 relative items-center justify-center">
              <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 border-l-2 border-dotted border-gray-400 h-full" />
            </div>

            {/* Text */}
            <div className="w-full md:w-[70%] flex flex-col  pr-4 relative items-center justify-center ">
              <div className="h-auto px-6 md:ps-28">
                <h2 className="text-2xl md:text-[60px] uppercase text-[#002561] mb-4 leading-tight lg:text-left text-center font-schabo">
                  {headings[activeIndex]}
                </h2>
                <p className="text-base md:text-xl text-black font-medium lg:text-left text-center ">
                  {subtexts[activeIndex]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
