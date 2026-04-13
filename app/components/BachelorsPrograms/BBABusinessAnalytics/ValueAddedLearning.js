import ProgramValueAddedSection from "../../ProgramsShared/ProgramValueAddedSection"

const points = [
  "Industry-oriented analytics projects and case studies",
  "Exposure to business intelligence and data analytics platforms",
  "Workshops with industry professionals and analytics practitioners",
  "Participation in business analytics competitions and analytical challenges",
  "Development of analytical reasoning, strategic thinking, and problem-solving skills",
  "Exposure to emerging trends in digital business and analytics",
]

export default function ValueAddedLearning() {
  return (
    <ProgramValueAddedSection
      headingColor="#0072C5"
      paragraph="Students enhance their learning experience through opportunities such as:"
      points={points}
      imageSrc="/bba-programs/business-analytics/value-added.webp"
      imageAlt="Value Added Learning"
    />
  )
}
