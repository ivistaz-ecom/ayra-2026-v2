"use client"

import React, { useState } from "react"

const SemesterColumn = ({ title, items, showItems }) => {
  return (
    <div className="py-3 px-1.5 sm:px-2 md:py-6 md:px-0 text-left flex flex-col items-start md:items-center md:text-center">
      <div className="font-schabo text-white text-[13px] sm:text-[15px] md:text-[18px] lg:text-[22px] leading-tight w-full md:w-auto text-left md:text-center">
        {title}
      </div>

      {showItems ? (
        <ul className="mt-3 md:mt-6 w-full flex flex-col divide-y divide-dashed divide-white/40">
          {items.map((item) => (
            <li
              key={item}
              className="py-2 text-white/90 font-tthoves-light text-[11px] sm:text-[12px] md:text-[16px] leading-snug sm:leading-tight text-left md:text-center"
            >
              <span className="whitespace-pre-line block text-left md:text-center">{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

const YearBlock = ({
  yearIndex,
  yearLabel,
  phaseLabel,
  phaseNote,
  semesters,
  isOpen,
  onToggle,
}) => {
  const semester1Title = `Semester ${yearIndex * 2 + 1}`
  const semester2Title = `Semester ${yearIndex * 2 + 2}`

  return (
    <button
      type="button"
      onClick={onToggle}
      className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FF4D48]"
      aria-expanded={isOpen}
    >
      {/* Desktop: show both semesters side-by-side */}
      <div className="hidden md:grid grid-cols-[120px_1fr_1fr] divide-x divide-dashed divide-white/35">
        <div className=" py-6 text-center">
          <div className="font-schabo text-white/20 text-[56px] md:text-[72px] leading-[0.85]">
            {yearLabel}
          </div>
          {isOpen ? (
            <>
              <div className="mt-4 font-schabo uppercase text-white text-[24px] md:text-[30px] leading-[1]">
                {phaseLabel}
              </div>
              <p className="mt-4 font-tthoves-light text-white/75 text-[12px] md:text-[13px] leading-relaxed">
                {phaseNote}
              </p>
            </>
          ) : null}
        </div>

        <SemesterColumn
          title={semester1Title}
          items={semesters[0]}
          showItems={isOpen}
        />
        <SemesterColumn
          title={semester2Title}
          items={semesters[1]}
          showItems={isOpen}
        />
      </div>

      {/* Mobile: YEAR heading block, then (when open) 2-column sem content */}
      <div className="md:hidden min-h-[4.5rem]">
        <div className="flex flex-col items-start justify-start text-left py-3 px-1 sm:px-2">
          <div className="font-schabo text-[#FFB2B7] text-[22px] sm:text-[26px] leading-[0.9] tracking-tight w-full text-center">
            {yearLabel}
          </div>
          {isOpen ? (
            <>
              <div className="mt-2 font-schabo uppercase text-white text-[15px] sm:text-[17px] leading-[1]">
                {phaseLabel}
              </div>
              <p className="mt-1.5 font-tthoves-light text-white/80 text-[10px] sm:text-[11px] leading-snug px-0.5">
                {phaseNote}
              </p>
            </>
          ) : null}
        </div>

        {isOpen ? (
          <>
            <div className="w-full border-t border-dashed border-white/35 my-3" />
            <div className="grid grid-cols-2 w-full divide-x divide-dashed divide-white/35 items-stretch">
              <SemesterColumn
                title={semester1Title}
                items={semesters[0]}
                showItems={true}
              />
              <SemesterColumn
                title={semester2Title}
                items={semesters[1]}
                showItems={true}
              />
            </div>
          </>
        ) : null}
      </div>
    </button>
  )
}

const YEARS = [
  {
    yearLabel: "YEAR 1",
    phaseLabel: "DESIGN",
    phaseNote: "(Design your learning path)",
    semesters: [
      [
        "Business Foundation Core 1",
        "Business Foundation Core 2",
        "Business Foundation Core 3",
        "Proficiency Core 1",
        "Professional Skills 1",
        "Professional Skills 2",
        "Proficiency Core 2",
        "University Core 1 (Value-Based)",
        "Sports & Wellness 1",
        "Open Elective 1 (Multi Disciplinary)",
      ],
      [
        "Business Foundation Core 4",
        "Business Foundation Core 5",
        "Business Foundation Core 6",
        "Proficiency Core 2",
        "Professional Skills 3",
        "University Core 2 (Value-Based)",
        "Sports & Wellness 2",
        "Open Elective 2 (Multi Disciplinary)",
        "University Core 3 (Value-Based)",
      ],
    ],
  },
  {
    yearLabel: "YEAR 2",
    phaseLabel: "EXPLORE",
    phaseNote: "(Go beyond boundaries. Dive deeper. Learn by doing!)",
    semesters: [
      [
        "Business Foundation Core 7",
        "Business Foundation Core 8",
        "Major Core 1",
        "Major Core 2",
        "Professional Skills 4",
        "University Core 4 (Value-Based)",
        "Sports & Wellness 3",
        "Open Elective 3 (Multi Disciplinary)",
        "Industry Integrated Learning 1",
      ],
      [
        "Business Foundation Core 9",
        "Business Foundation Core 10",
        "Program Basic 11",
        "Major Core 3",
        "Major Core 4",
        "Minor 1*",
        "Minor 2*",
        "Professional Skills 5",
        "Sports & Wellness 4",
        "University Core 5 (Value-Based)",
      ],
    ],
  },
  {
    yearLabel: "YEAR 3",
    phaseLabel: "EMBRACE",
    phaseNote:
      "(Own your journey. Embrace leadership, step into your purpose!)",
    semesters: [
      [
        "Business Foundation Core 12",
        "Business Foundation Core 13",
        "Major Elective 1",
        "Major Elective 2",
        "Major Elective 3",
        "Minor 3*",
        "Minor 4*",
        "Professional Skills 6",
        "Sports & Wellness 5",
      ],
      [
        "Business Foundation Core 14",
        "Major Elective 4",
        "Minor 5*",
        "Minor 6*",
        "Professional Skills 7",
        "Sports & Wellness 6",
        "Industry Integrated Learning 2",
      ],
    ],
  },
  {
    yearLabel: "YEAR 4",
    phaseLabel: "ELEVATE",
    phaseNote: "(Rise to Mastery)",
    semesters: [
      [
        "Advanced Major Elective 1",
        "Advanced Major Elective 2",
        "Advanced Minor Elective 1",
        "Quantitative & Qualitative Research Methods",
        "Field Study/Minor Research Project",
      ],
      [
        "Advanced Major Elective 3",
        "Advanced Minor Elective 2",
        "Dissertation/Capstone Project",
      ],
    ],
  },
]

const Accordion = () => {
  // Keep only one year expanded at a time.
  // Default to Year 1 expanded.
  const [openYearIndex, setOpenYearIndex] = useState(0)

  return (
    <section className="w-full bg-[#FF4D48] py-10 md:py-16">
      <div className="w-full max-w-[980px] mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-20 items-start mb-10 md:mb-14">
          <h2 className="font-schabo uppercase text-[#FFB2B7] leading-[0.9] text-[64px] md:text-[86px] lg:text-[100px]">
            DESIGNED
            <br />
            FOR YOU
          </h2>

          <div className="pt-2 md:pt-4">
            <p className="font-tthoves-light text-white text-[14px] md:text-[18px] leading-relaxed max-w-[720px]">
              At AYRA, learning moves from foundational design principles to
              applied creative practice and communication strategy.
            </p>
            <p className="mt-4 md:mt-6 font-tthoves-light text-white text-[14px] md:text-[18px] leading-relaxed max-w-[720px]">
              Students gradually develop creative confidence through studio
              work, collaborative projects, media production, and real-world
              exposure.
            </p>
          </div>
        </div>

        <div className="w-full md:max-w-[980px] md:mx-auto border border-dashed border-white/35 ">
          <div className=" divide-y divide-dashed divide-white/35 ">
            {YEARS.map((year, idx) => {
              const isOpen = openYearIndex === idx
              return (
                <div key={year.yearLabel}>
                  <YearBlock
                    yearIndex={idx}
                    yearLabel={year.yearLabel}
                    phaseLabel={year.phaseLabel}
                    phaseNote={year.phaseNote}
                    semesters={year.semesters}
                    isOpen={isOpen}
                    onToggle={() => setOpenYearIndex(idx)}
                  />
                </div>
              )
            })}
          </div>
        </div>
        <p className="mt-4 font-tthoves-light text-white/75 text-[10px] md:text-[12px] leading-relaxed">
          * Optional. Credits for the Minor courses will be in addition to the
          overall credits for the program.
        </p>
      </div>
    </section>
  )
}

export default Accordion
