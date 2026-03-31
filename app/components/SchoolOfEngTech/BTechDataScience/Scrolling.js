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

const journeyTitle = "Your Engineering Journey at AYRA"

const milestones = [
  {
    label: "Day 0",
    text: "Regular Entry to B.Tech in Data Science Program",
  },
  {
    label: "Year 1",
    text: "Exit with a Certificate in Data Science with 40 Credits.",
  },
  {
    label: "Year 2",
    text: "Exit with a Diploma in Data Science with 80 Credits.",
  },
  {
    label: "Year 3",
    text: "Exit with BSc Data Science with 120+ Credits.",
  },
  {
    label: "Year 4",
    text: "Exit with B.Tech in Data Science Degree with 160+ Credits.",
  },
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
      const maxIndex = milestones.length - 1
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
    (milestones.length - 1) * scrollPerSection
  }px)`

  return (
    <div ref={trackRef} style={{ height: trackHeight }} className="relative">
      <div
        ref={sectionRef}
        className="sticky top-0 min-h-[100svh] h-[100vh] flex items-center justify-center overflow-hidden bg-[url('/opencanvas/opc-bg-img.png')] bg-cover bg-center"
      >
        <div className="relative z-10 flex flex-col md:flex-row-reverse w-full container mx-auto px-4 md:px-0 gap-6 md:gap-4 h-auto md:h-[100vh] py-8 sm:py-10 md:py-0">
          <div className="w-full md:w-[29%] flex flex-col items-center justify-center gap-4 mb-2 md:mb-0 shrink-0">
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-80 md:h-80">
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

          <div className="hidden md:block w-[1px] bg-gray-300 relative">
            <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 border-l-2 border-dotted border-gray-400 h-full" />
          </div>

          <div className="w-full md:w-[70%] flex flex-col justify-center md:pr-4 relative text-left">
            <div className="h-auto max-w-3xl mx-0 md:max-w-none">
              <h2 className="text-[26px] sm:text-[34px] md:text-[56px] lg:text-[72px] xl:text-[78px] uppercase text-[#744AC4] mb-4 sm:mb-6 leading-[0.95] font-schabo">
                {journeyTitle}
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] text-[#0B0B0B] leading-tight font-tthoves-bold">
                {milestones[activeIndex].label}
              </h3>
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-[28px] text-black font-tthoves-light leading-snug mt-2 md:mt-1">
                {milestones[activeIndex].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
