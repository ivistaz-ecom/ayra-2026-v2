"use client"

import React, { useState } from "react"
import Image from "next/image"

const careerRoles = [
  "Behavioral Analyst",
  "Social Worker",
  "Human Resource/Organizational Development Professional",
  "Mental Health Support Professional",
  "Research Assistant in Behavioral Sciences",
]

const careerRolesPostgraduate = [
  "Counseling Psychologist",
  "Clinical Psychologist",
  "Organizational Psychologist",
]

const industries = [
  "Mental Health and Wellness Organizations",
  "Educational Institutions",
  "Non-Governmental Organizations (NGOs)",
  "Corporate Human Resource Departments",
  "Research and Behavioral Science Institutions",
]

const entrepreneurship = [
  "Counseling and wellbeing services",
  "Behavioral training and development programs",
  "Community mental health initiatives",
]

const accordionItems = [
  {
    title: "Career Roles",
    content: careerRoles,
    secondaryPrefix: "With postgraduate education, students may pursue:",
    secondaryContent: careerRolesPostgraduate,
  },
  { title: "Industries", content: industries },
  {
    title: "Entrepreneurship Opportunities",
    content: entrepreneurship,
    prefix: "Graduates may also explore:",
  },
]

const CareerAndProgressionOutcomes = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="w-full bg-[#FF4D48] py-8 md:py-10">
      <div className="container mx-auto px-4 md:px-0">
        <div>
          <div className="p-6 md:p-8 border-b border-dashed border-white/35">
            <h2 className="font-schabo uppercase text-[#FFB2B7] text-[52px] lg:text-[84px] leading-[0.95]">
              Career and
              <br />
              Progression Outcomes
            </h2>

            <p className="mt-4 font-tthoves-light text-white/90 text-sm md:text-base leading-relaxed">
              Graduates of the B.A. in Psychology program can pursue diverse
              pathways across human-centered fields.
            </p>
          </div>

          <div className="w-full md:w-[92%]">
            {accordionItems.map((item, idx) => {
              const isOpen = openIndex === idx
              return (
                <div
                  key={item.title}
                  className="border-b border-dashed border-white/35"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between px-6 md:px-8 py-4 text-left"
                  >
                    <span className="font-tthoves-bold text-white text-xl md:text-3xl">
                      {item.title}
                    </span>
                    <span className="font-tthoves-light text-white text-3xl md:text-4xl leading-none">
                      {isOpen ? "×" : "+"}
                    </span>
                  </button>

                  {isOpen ? (
                    <div className="px-6 md:px-8 pb-5 md:pb-6">
                      {item.prefix ? (
                        <p className="font-tthoves-light text-white/90 text-sm md:text-base mb-3">
                          {item.prefix}
                        </p>
                      ) : null}
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                        {item.content.map((line) => (
                          <li
                            key={line}
                            className="flex items-start gap-2 font-tthoves-light text-white/90 text-sm md:text-base leading-snug"
                          >
                            <Image
                              src="/bba-programs/ba-in-psychology/arrow.svg"
                              width={14}
                              height={14}
                              alt="arrow"
                              className="mt-1 h-3.5 w-3.5 shrink-0"
                            />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                      {item.secondaryPrefix && item.secondaryContent ? (
                        <>
                          <p className="mt-5 font-tthoves-light text-white/90 text-sm md:text-base mb-3">
                            {item.secondaryPrefix}
                          </p>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                            {item.secondaryContent.map((line) => (
                              <li
                                key={line}
                                className="flex items-start gap-2 font-tthoves-light text-white/90 text-sm md:text-base leading-snug"
                              >
                                <Image
                                  src="/bba-programs/ba-in-psychology/arrow.svg"
                                  width={14}
                                  height={14}
                                  alt="arrow"
                                  className="mt-1 h-3.5 w-3.5 shrink-0"
                                />
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              )
            })}

            <div className="px-6 md:px-8 py-4 md:py-5">
              <p className="font-tthoves-light text-white/85 text-sm md:text-base leading-relaxed">
                The program also prepares students for postgraduate studies in
                psychology, counseling, behavioral sciences, and related fields.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareerAndProgressionOutcomes
