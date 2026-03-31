import { useState, useRef, useEffect } from "react"

export function usePaperFoldingScrollTrack(itemCount) {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [scrollPerSection, setScrollPerSection] = useState(500)
  const scrollPerSectionRef = useRef(500)

  useEffect(() => {
    let scrollRafId = null
    const maxIndex = Math.max(0, itemCount - 1)

    const tick = () => {
      const trackEl = trackRef.current
      if (!trackEl) return

      const scrollY = window.scrollY
      const trackTop = trackEl.getBoundingClientRect().top + scrollY
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
  }, [itemCount])

  const trackHeight =
    itemCount <= 1
      ? "100vh"
      : `calc(100vh + ${(itemCount - 1) * scrollPerSection}px)`

  return {
    activeIndex,
    sectionRef,
    trackRef,
    trackHeight,
  }
}
