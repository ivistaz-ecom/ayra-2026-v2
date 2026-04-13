import React from "react"
import HeroBanner from "./HeroBanner"
import Recognised from "./Recognised"
import Different from "./Different"
import Scrolling from "./Scrolling"
import MBAAtAyra from "./MBAAtAyra"
import Holistic from "./Holistic"
import Carousel from "./Carousel"
import Accordion from "./Accordion"
import ProgramHighlights from "./ProgramHighlights"
import Specialisations from "./Specialisations"
import ExperimentalLearning from "./ExperimentalLearning"
import ValueAddedLearning from "./ValueAddedLearning"
import CareerAndProgressionOutcomes from "./CareerAndProgressionOutcomes"
import StartingYourJourney from "./StartingYourJourney"
import ProgramDescriptionSection from "../../ProgramsShared/ProgramDescriptionSection"
import ProgramNotSureWhereToBegin from "../../ProgramsShared/ProgramNotSureWhereToBegin"

const DESCRIPTION_PARAGRAPHS = [
  "The MBA program at AYRA begins with understanding how organisations work, and how decisions are made within them.",
  "You explore management concepts, business strategy, and organisational dynamics while also beginning to reflect on how you think, analyse, and approach problems.",
  "A key feature of the MBA at AYRA is the opportunity to begin specialisation early in the program. This allows students to gradually build deeper understanding in their chosen domain while aligning learning with their professional interests.",
]

const index = () => {
  return (
    <>
      <HeroBanner />
      <ProgramDescriptionSection paragraphs={DESCRIPTION_PARAGRAPHS} />
      <Recognised />
      <Different />
      <Scrolling />
      <MBAAtAyra />
      <Holistic />
      <Carousel />
      <Accordion />
      <ProgramHighlights />
      <Specialisations />
      <ExperimentalLearning />
      <ValueAddedLearning />
      <CareerAndProgressionOutcomes />
      <StartingYourJourney />
      <ProgramNotSureWhereToBegin
        imageSrc="/school-of-business/mba/Not-sure-where-to-begin.webp"
        heading="Give us five minutes on a call."
        paragraph="Speak with the admissions team, explore your options, and see what could fit you best."
      />
    </>
  )
}

export default index
