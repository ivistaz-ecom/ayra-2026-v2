import ProgramDifferentSection from "../../ProgramsShared/ProgramDifferentSection"

const PARAGRAPHS = [
  "At AYRA, the MBA is not only about management theory.",
  "Students are given the space to explore different business functions while building clarity in their chosen area through early specialisation.",
  "Learning happens through application — through projects, internships, and real-world assignments — allowing students to connect concepts with practice and develop confidence in their approach to business problems.",
]

export default function Different() {
  return (
    <ProgramDifferentSection
      paragraphs={PARAGRAPHS}
      imageSrc="/school-of-business/mba/MBA-program.webp"
      imageAlt="What makes this B.Tech different"
    />
  )
}
