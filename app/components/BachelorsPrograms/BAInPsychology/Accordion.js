"use client"

import ProgramCurriculumAccordion from "../../ProgramsShared/ProgramCurriculumAccordion"
import { PSYCHOLOGY_ACCORDION_YEARS } from "./psychologyAccordionYears"

export default function Accordion() {
  return (
    <ProgramCurriculumAccordion
      titleColor="#FFB2B7"
      backgroundColor="#FF4D48"
      yearColor="#FFFFFF33"
      years={PSYCHOLOGY_ACCORDION_YEARS}
      paragraphs={[
        "At AYRA, learning moves from foundational understanding to applied psychology and real-world exposure.",
        "Students gradually build analytical, observational, and interpersonal skills through classroom learning, labs, and field experiences rather than rushing through theory alone.",
      ]}
      bottomParagraph='Course lists follow the AYRA BA – Psychology curriculum framework (School of Liberal Arts). Where alternatives appear with "/", students take one track as per program regulations.'
    />
  )
}
