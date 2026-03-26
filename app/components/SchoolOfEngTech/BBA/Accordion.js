"use client"

import React, { useState } from "react"

const SemesterColumn = ({ title, items, showItems }) => {
  return (
    <div className=" py-6 text-center">
      <div className="font-schabo text-white text-[18px] md:text-[22px]">
        {title}
      </div>

      {showItems ? (
        <ul className="mt-6 flex flex-col divide-y divide-dashed divide-white/40">
          {items.map((item) => (
            <li
              key={item}
              className="py-2 text-white/90 font-tthoves-light text-[11px] md:text-[13px] leading-tight"
            >
              <span className="whitespace-pre-line block">{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        null
      )}
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
      className="w-full text-left focus-visible:outline-none"
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

      {/* Mobile: show both semesters stacked (no extra accordion) */}
      <div className="md:hidden py-6">
        <div className="font-schabo text-white/20 text-[56px] leading-[0.85]">
          {yearLabel}
        </div>
        {isOpen ? (
          <>
            <div className="mt-2 font-schabo uppercase text-white text-[24px] leading-[1]">
              {phaseLabel}
            </div>
            <p className="mt-3 font-tthoves-light text-white/75 text-[13px] leading-relaxed">
              {phaseNote}
            </p>
          </>
        ) : null}

        <div className="mt-5">
          <SemesterColumn
            title={semester1Title}
            items={semesters[0]}
            showItems={isOpen}
          />
          <div className="mt-4" />
          <SemesterColumn
            title={semester2Title}
            items={semesters[1]}
            showItems={isOpen}
          />
        </div>
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
    phaseNote: "(Own your journey. Embrace leadership, step into your purpose!)",
    semesters: [
      [
        "Business Foundation Core 12",
        "Business Foundation Core 13",
        "Major Elective 1",
        "Major Elective 2",
        "Major Elective 3",
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
        "Industry integrated learning 2",
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
    <section className="w-full bg-[#0072C5] py-10 md:py-16">
      <div className="w-full max-w-[980px] mx-auto  md:px-0">
        <div className="border border-dashed border-white/35 divide-y divide-dashed divide-white/35">
          {YEARS.map((year, idx) => {
            const isOpen = openYearIndex === idx
            return (
              <YearBlock
                key={year.yearLabel}
                yearIndex={idx}
                yearLabel={year.yearLabel}
                phaseLabel={year.phaseLabel}
                phaseNote={year.phaseNote}
                semesters={year.semesters}
                isOpen={isOpen}
                onToggle={() => setOpenYearIndex(idx)}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Accordion
