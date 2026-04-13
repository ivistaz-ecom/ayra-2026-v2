import ProgramHighlightsSection from "../../ProgramsShared/ProgramHighlightsSection"

const POINTS = [
  "Early specialisation enabling focused learning from the beginning of the program",
  "Strong emphasis on industry interaction through internships and applied business projects",
  "Integration of mini projects and real-world assignments throughout the program",
  "Industry-oriented curriculum aligned with contemporary business practices",
  "Case-based learning and management simulations",
  "Guest lectures, workshops, and professional networking opportunities",
  "Exposure to business analytics, strategy, and leadership development",
  "Emphasis on critical thinking, decision-making, and managerial leadership",
]

export default function ProgramHighlights() {
  return (
    <ProgramHighlightsSection
      headingColor="#0072C5"
      points={POINTS}
      imageSrc="/school-of-business/mba/program-highlights.webp"
    />
  )
}
