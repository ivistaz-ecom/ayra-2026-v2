import React from "react"
import HeroBanner from "./HeroBanner"
import Recognised from "./Recognised"
import Different from "./Different"
import Scrolling from "./Scrolling"
import EngeneeingAtAyra from "./EngeneeingAtAyra"
import Holistic from "./Holistic"
import Carousel from "./Carousel"
import Accordion from "./Accordion"
import ProgramHighlights from "./ProgramHighlights"
import Specialization from "./Specialization"
import PsychologyLab from "./PsychologyLab"
import ValueAdded from "./ValueAdded"
import CareerAndProgressionOutcomes from "./CareerAndProgressionOutcomes"
import StartingYourJourney from "./StartingYourJourney"
import ProgramDescriptionSection from "../../ProgramsShared/ProgramDescriptionSection"
import ProgramNotSureWhereToBegin from "../../ProgramsShared/ProgramNotSureWhereToBegin"

const DESCRIPTION_PARAGRAPHS = [
  "The B.A. in Psychology program at AYRA begins with understanding, not just of others, but of yourself.",
  "You explore how people think, feel, behave, and interact within different social and cultural contexts. As you learn about human behaviour, cognition, and emotions, you also begin to reflect on your own perspectives, responses, and patterns.",
  "The program is offered as a three-year undergraduate degree, with the option to pursue a fourth-year B.A. (Honours) for students interested in advanced study, research, or professional pathways.",
]

const BBAHospitalityManagement = () => {
  return (
    <>
      <HeroBanner />
      <ProgramDescriptionSection paragraphs={DESCRIPTION_PARAGRAPHS} />
      <Recognised />
      <Different />
      <Scrolling />
      <EngeneeingAtAyra />
      <Holistic />
      <Carousel />
      <Accordion />
      <ProgramHighlights />
      <Specialization />
      <PsychologyLab />
      <ValueAdded />
      <CareerAndProgressionOutcomes />
      <StartingYourJourney />
      <ProgramNotSureWhereToBegin
        imageSrc="/bba-programs/ba-in-psychology/Not-sure-where-to-begin.webp"
        heading="Give us five minutes on a call."
        paragraph="Speak with the admissions team, explore your options, and see what could fit you best."
      />
    </>
  )
}

export default BBAHospitalityManagement
