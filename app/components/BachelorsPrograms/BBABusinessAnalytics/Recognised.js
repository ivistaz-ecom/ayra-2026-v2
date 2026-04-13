import ProgramRecognisedSection from "../../ProgramsShared/ProgramRecognisedSection"

const POINTS = [
  "Approved by AICTE and offered by AYRA (Deemed-to-be University).",
  "Curriculum aligned with Outcome Based Education (OBE) principles.",
  "Designed in accordance with national higher education guidelines and interdisciplinary learning frameworks",
  "Integrates business management education with analytical and data-driven decision-making approaches.",
]

export default function Recognised() {
  return (
    <ProgramRecognisedSection
      titleColor="#0072C5"
      points={POINTS}
      imageSrc="/bba-programs/business-analytics/recognized.webp"
      imageAlt="B.Tech programme recognition and accreditation"
    />
  )
}
