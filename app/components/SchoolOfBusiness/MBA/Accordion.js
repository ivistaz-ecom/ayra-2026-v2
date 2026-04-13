"use client"

import ProgramCurriculumAccordion from "../../ProgramsShared/ProgramCurriculumAccordion"
import { MBA_ACCORDION_YEARS } from "./mbaAccordionYears"

export default function Accordion() {
  return (
    <ProgramCurriculumAccordion
      titleColor="#72D9FF"
      backgroundColor="#0072C5"
      yearColor="#72D9FF"
      years={MBA_ACCORDION_YEARS}
      paragraphs={[
        "At AYRA, learning moves from conceptual understanding to applied business practice.",
        "Students gradually build managerial confidence through case studies, projects, internships, and industry exposure rather than relying only on classroom instruction.",
      ]}
    />
  )
}
