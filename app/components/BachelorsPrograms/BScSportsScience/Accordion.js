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
              className="py-2 text-white/90 font-tthoves-light text-[11px] md:text-[16px] leading-tight"
            >
              <span className="whitespace-pre-line block">{item}</span>
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
      className="w-full text-left focus-visible:outline-none"
      aria-expanded={isOpen}
    >
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

      <div className="md:hidden py-6">
        <div className="px-4">
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
        </div>

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
    phaseLabel: "DISCOVER",
    phaseNote: "(Build scientific and movement literacy)",
    semesters: [
      [
        "Introduction to Sports Science",
        "Human Anatomy & Physiology I",
        "Human Anatomy & Physiology II",
        "Physics / Biomechanics Basics",
        "Communication & Professional Skills",
        "Sports & Wellness / Practical I",
        "University Core (Value-based)",
        "Open Elective I",
      ],
      [
        "Introduction to Research & Inquiry",
        "Exercise Physiology I",
        "Motor Learning & Control",
        "Statistics for Sports Science",
        "Sports & Wellness / Practical II",
        "University Core (Value-based)",
        "Open Elective II",
      ],
    ],
  },
  {
    yearLabel: "YEAR 2",
    phaseLabel: "ANALYSE",
    phaseNote: "(Measurement, methods, and training principles)",
    semesters: [
      [
        "Exercise Physiology II",
        "Biomechanics I",
        "Sports Nutrition",
        "Strength & Conditioning I",
        "Sports & Wellness III",
        "University Core (Value-based)",
        "Open Elective III",
      ],
      [
        "Research Methods in Sports Science",
        "Biomechanics II",
        "Physiological Testing & Monitoring",
        "Strength & Conditioning II",
        "Sports Psychology Foundations",
        "Industry / Field Exposure I",
        "Minor / Elective *",
      ],
    ],
  },
  {
    yearLabel: "YEAR 3",
    phaseLabel: "APPLY",
    phaseNote: "(Performance, health, and integrated practice)",
    semesters: [
      [
        "Advanced Exercise Physiology",
        "Injury Prevention & Load Management",
        "Performance Analysis",
        "Elective / Major Core I",
        "Sports & Wellness IV",
        "Field Practicum I",
        "Minor / Elective *",
      ],
      [
        "Recovery & Regeneration Science",
        "Elective / Major Core II",
        "Elective / Major Core III",
        "Sports Science Technology & Data",
        "Field Practicum II",
        "Professional Skills Capstone Prep",
        "Minor / Elective *",
      ],
    ],
  },
  {
    yearLabel: "YEAR 4",
    phaseLabel: "INTEGRATE",
    phaseNote: "(Research, internship, professional identity)",
    semesters: [
      [
        "Advanced Elective I",
        "Advanced Elective II",
        "Quantitative / Qualitative Project Methods",
        "Dissertation / Project Proposal",
      ],
      [
        "Internship / Extended Project",
        "Dissertation or Capstone Project",
        "Advanced Elective III",
      ],
    ],
  },
]

const Accordion = () => {
  const [openYearIndex, setOpenYearIndex] = useState(0)

  return (
    <section className="w-full bg-[#FFA300] py-10 md:py-16">
      <div className="w-full max-w-[980px] mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-20 items-start mb-10 md:mb-14">
          <h2 className="font-schabo uppercase text-[#FFD87B] leading-[0.9] text-[64px] md:text-[86px] lg:text-[100px]">
            DESIGNED
            <br />
            FOR YOU
          </h2>

          <div className="pt-2 md:pt-4">
            <p className="font-tthoves-light text-white text-[14px] md:text-[18px] leading-relaxed max-w-[720px]">
              At AYRA, learning moves from a foundational understanding of human performance to applied training methods and sports performance analysis.
            </p>
            <p className="mt-4 md:mt-6 font-tthoves-light text-white text-[14px] md:text-[18px] leading-relaxed max-w-[720px]">
              Students gradually develop scientific knowledge alongside practical experience through laboratory work, sports testing, field training, and internships in sports and fitness environments.
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
          * Optional. Credits for minor or elective tracks may add to total programme credits per regulations.
        </p>
      </div>
    </section>
  )
}

export default Accordion
