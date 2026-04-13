import ProgramRecognisedSection from "../../ProgramsShared/ProgramRecognisedSection"

const POINTS = [
  "Approved by AICTE and offered by AYRA (Deemed-to-be University).",
  "Curriculum aligned with Outcome Based Education (OBE) principles.",
  "Designed in accordance with national higher education guidelines and management education frameworks.",
  "Integrates academic learning with industry exposure and experiential learning.",
]

export default function Recognised() {
  return (
    <ProgramRecognisedSection
      titleColor="#0072C5"
      points={POINTS}
      imageSrc="/school-of-business/mba/recognized.webp"
      imageAlt="B.Tech programme recognition and accreditation"
    />
  )
}
