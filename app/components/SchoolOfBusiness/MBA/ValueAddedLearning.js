import ProgramValueAddedSection from "../../ProgramsShared/ProgramValueAddedSection"

const points = [
  "Industry-oriented workshops and management seminars",
  "Guest lectures from industry professionals",
  "Participation in business case competitions and management events",
  "Opportunities to work on industry-focused analytical projects",
  "Development of leadership, communication, and strategic thinking skills",
  "Exposure to emerging business trends and digital transformation",
]

export default function ValueAddedLearning() {
  return (
    <ProgramValueAddedSection
      headingColor="#0072C5"
      paragraph="Students benefit from opportunities that support professional and managerial development:"
      points={points}
      imageSrc="/school-of-business/mba/value-added.webp"
      imageAlt="Students collaborating in workshop"
    />
  )
}
