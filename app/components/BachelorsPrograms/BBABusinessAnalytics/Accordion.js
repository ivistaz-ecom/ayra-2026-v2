"use client"

import ProgramCurriculumAccordion from "../../ProgramsShared/ProgramCurriculumAccordion"
import { BBA_BUSINESS_ANALYTICS_ACCORDION_YEARS } from "./businessAnalyticsAccordionYears"

export default function Accordion() {
  return (
    <ProgramCurriculumAccordion
      titleColor="#72D9FF"
      backgroundColor="#0072C5"
      yearColor="#72D9FF"
      years={BBA_BUSINESS_ANALYTICS_ACCORDION_YEARS}
      paragraphs={[
        "At AYRA, learning moves from foundational understanding to applied analytics.",
        "Students gradually develop analytical skills through case studies, projects, and practical exposure rather than relying only on theoretical instruction.",
      ]}
    />
  )
}
