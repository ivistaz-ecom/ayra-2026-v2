import ProgramHighlightsSection from "../../ProgramsShared/ProgramHighlightsSection"

const POINTS = [
  "Comprehensive curriculum covering core areas of psychology and behavioral sciences",
  "Exposure to cognitive, social, developmental, and abnormal psychology",
  "Hands-on learning through psychology laboratories and behavioral observation activities",
  "Opportunities for community engagement and practical learning experiences",
  "Exposure to counseling practices and mental wellbeing initiatives",
  "Internships with NGOs, educational institutions, wellness centres, and organisations",
  "Option to pursue B.A. (Honours) in Psychology with advanced study and research",
  "Strong emphasis on critical thinking, empathy, and understanding human behaviour",
]

export default function ProgramHighlights() {
  return (
    <ProgramHighlightsSection
      headingColor="#FF4D48"
      points={POINTS}
      imageSrc="/bba-programs/ba-in-psychology/recognized.webp"
      imageAlt="Psychology program highlights"
    />
  )
}
