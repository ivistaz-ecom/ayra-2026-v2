import ProgramRecognisedSection from "../../ProgramsShared/ProgramRecognisedSection"

const POINTS = [
  "Approved by UGC and offered by AYRA (Deemed-to-be University)",
  "Curriculum aligned with Outcome-Based Education (OBE) principles",
  "Designed in accordance with national higher education guidelines and interdisciplinary learning frameworks",
  "Integrates psychological theory, research methods, and applied learning",
]

export default function Recognised() {
  return (
    <ProgramRecognisedSection
      titleColor="#D5323B"
      points={POINTS}
      imageSrc="/bba-programs/ba-in-psychology/recognized.webp"
      imageAlt="Students collaborating on a project"
    />
  )
}
