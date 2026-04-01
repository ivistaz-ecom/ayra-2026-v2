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

const journeyTitle = "YOUR BBA JOURNEY AT AYRA"

const milestones = [
  { label: "Day 0", text: "Regular Entry to BBA Program" },
  {
    label: "Year 1",
    text: "Exit with a Certificate in Management. 40 Credits, Business Fundamentals, Professional Skill courses.",
  },
  {
    label: "Year 2",
    text: "Exit with a Diploma in Management. 80 Credits, Business Fundamentals, Major, Professional Skill, and industry integrated experiential learning.",
  },
  {
    label: "Year 3",
    text: "Exit with BBA Degree. 120+ Credits, Business Essentials, Major and/or Minor, Professional Skill, industry integrated, experiential learning.",
  },
  {
    label: "Year 4",
    text: "Exit with BBA (Honors/with Research) Degree. 160+ Credits, Business Essentials, Major and/or Minor, Professional Skill, industry integrated, experiential learning, real-time industry integrated research. Option to gain entry directly to PhD.",
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
                sizes="(max-width: 640px) 208px, (max-width: 1024px) 240px, 320px"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-[1px] bg-gray-300 relative">
            <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 border-l-2 border-dotted border-gray-400 h-full" />
          </div>

          {/* Text on bottom for mobile, left for desktop */}
          <div className="w-full md:w-[70%] flex flex-col justify-center md:pr-4 relative text-left">
            <div className="h-auto">
              <h2 className="text-2xl md:text-[60px] uppercase text-[#002561] mb-4 leading-tight font-schabo">
                {journeyTitle}
              </h2>
              <h3 className="text-xl lg:text-3xl text-black font-bold mb-2">
                {milestones[activeIndex].label}
              </h3>
              <p className="text-base md:text-xl text-black font-medium">
                {milestones[activeIndex].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
