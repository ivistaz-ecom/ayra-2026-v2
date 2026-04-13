import ProgramHighlightsSection from "../../ProgramsShared/ProgramHighlightsSection"

const POINTS = [
  "Interdisciplinary curriculum combining business management and data analytics",
  "Exposure to business intelligence, data visualization, and analytical methods",
  "Practical learning through case studies, analytical exercises, and business simulations",
  "Development of data interpretation and decision-making skills",
  "Opportunities to work on analytics-driven business projects",
  "Exposure to analytics platforms and business intelligence tools used in industry",
  "Option to pursue BBA (Honours) with advanced study in business analytics",
  "Emphasis on analytical thinking, problem solving, and strategic decision-making",
]

export default function ProgramHighlights() {
  return (
    <ProgramHighlightsSection
      headingColor="#0072C5"
      points={POINTS}
      imageSrc="/bba-programs/business-analytics/program-highlights.webp"
      imageAlt="Business analytics program highlights"
    />
  )
}
