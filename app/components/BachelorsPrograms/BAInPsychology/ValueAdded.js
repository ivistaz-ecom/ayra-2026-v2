import ProgramValueAddedSection from "../../ProgramsShared/ProgramValueAddedSection"

const highlights = [
  "Internships with NGOs, schools, wellness centres, and organisational settings",
  "Exposure to psychological assessments and behavioural observation methods",
  "Workshops with psychologists, counselors, and mental health professionals",
  "Participation in community outreach and mental health awareness initiatives",
  "Development of analytical thinking, empathy, and communication skills",
  "Exposure to interdisciplinary perspectives, including psychology of sports performance",
]

export default function ValueAdded() {
  return (
    <ProgramValueAddedSection
      headingColor="#D5323B"
      paragraph="Students enhance their learning through opportunities that connect psychology with real environments and people."
      points={highlights}
      imageSrc="/bba-programs/ba-in-psychology/value-added.webp"
      imageAlt="Value Added Learning"
    />
  )
}
