import ProgramDifferentSection from "../../ProgramsShared/ProgramDifferentSection"

const PARAGRAPHS = [
  "At AYRA, psychology is not only about studying others.",
  "You are given the space to observe, question, and reflect, to understand behaviour not just as theory, but as something you see and experience every day.",
  "You begin with strong foundations, but you are not rushed into specialisation. Through exposure, practice, and guided learning, your understanding deepens over time.",
]

export default function Different() {
  return (
    <ProgramDifferentSection
      paragraphs={PARAGRAPHS}
      imageSrc="/bba-programs/ba-in-psychology/differnence.webp"
      imageAlt="Students collaborating on a project"
    />
  )
}
