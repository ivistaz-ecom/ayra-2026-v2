import React from "react"
import HeroBanner from "./HeroBanner"
import Recognised from "./Recognised"
import Different from "./Different"
import Scrolling from "./Scrolling"
import BBABAAtAyra from "./BBABAAtAyra"
import Holistic from "./Holistic"
import Carousel from "./Carousel"
import Accordion from "./Accordion"
import ProgramHighlights from "./ProgramHighlights"
import Specialisations from "./Specialisations"
import AnalyticsLearning from "./AnalyticsLearning"
import ValueAddedLearning from "./ValueAddedLearning"
import CareerAndProgressionOutcomes from "./CareerAndProgressionOutcomes"
import StartingYourJourney from "./StartingYourJourney"
import ProgramDescriptionSection from "../../ProgramsShared/ProgramDescriptionSection"
import ProgramNotSureWhereToBegin from "../../ProgramsShared/ProgramNotSureWhereToBegin"

const DESCRIPTION_PARAGRAPHS = [
  "The BBA in Business Analytics program at AYRA begins with understanding how data influences business.",
  "In today's digital economy, organizations rely on analytics to interpret information, identify patterns, and make decisions. As you learn how data works, you also begin to explore how you interpret it, question it, and apply it.",
  "The curriculum combines business knowledge, statistical methods, and data interpretation skills. Through practical exercises, case-based learning, and analytical projects, students gradually develop the ability to connect data with real business outcomes.",
  "The program is offered as a three-year undergraduate degree, with the option to pursue a fourth-year BBA (Honours) focused on advanced analytics, research, and specialised study.",
]

const index = () => {
  return (
    <>
      <HeroBanner />
      <ProgramDescriptionSection paragraphs={DESCRIPTION_PARAGRAPHS} />
      <Recognised />
      <Different />
      <Scrolling />
      <BBABAAtAyra />
      <Holistic />
      <Carousel />
      <Accordion />
      <ProgramHighlights />
      <Specialisations />
      <AnalyticsLearning />
      <ValueAddedLearning />
      <CareerAndProgressionOutcomes />
      <StartingYourJourney />
      <ProgramNotSureWhereToBegin
        imageSrc="/bba-programs/business-analytics/Not-sure-where-to-begin.webp"
        heading="Give us five minutes on a call."
        paragraph="Speak with the admissions team, explore your options, and see what could fit you best."
      />
    </>
  )
}

export default index
