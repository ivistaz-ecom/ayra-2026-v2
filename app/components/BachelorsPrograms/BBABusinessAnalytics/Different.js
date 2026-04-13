import ProgramDifferentSection from "../../ProgramsShared/ProgramDifferentSection"

const PARAGRAPHS = [
  "At AYRA, business analytics is not only about working with data.",
  "Students are given the space to understand how data connects to real decisions. Through case studies, projects, and practical exposure, learning moves beyond tools into interpretation and application.",
  "You begin with foundational concepts and gradually build analytical thinking, allowing you to understand where your strengths lie within the business and analytics space.",
]

export default function Different() {
  return (
    <ProgramDifferentSection
      paragraphs={PARAGRAPHS}
      imageSrc="/bba-programs/business-analytics/bba-different.webp"
      imageAlt="What makes this BBA in Business Analytics different"
    />
  )
}
