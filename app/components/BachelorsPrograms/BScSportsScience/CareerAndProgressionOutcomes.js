"use client"

import React, { useState } from "react"

const careerRoles = [
  "Sports Scientist",
  "Strength and Conditioning Coach",
  "Fitness and Performance Trainer",
  "Sports Performance Analyst",
  "Sports Nutrition Consultant",
  "Athlete Development Specialist",
  "Rehabilitation and Injury Prevention Specialist",
]

const industries = [
  "Professional Sports Teams and Academies",
  "Fitness and Wellness Industry",
  "Sports Performance Centers",
  "Sports Analytics and Technology Firms",
  "Health and Rehabilitation Centers",
  "Educational and Research Institutions",
]

const entrepreneurship = [
  "Sports performance training centres",
  "Fitness and wellness consulting services",
  "Athlete conditioning programs",
  "Sports analytics and performance consulting",
]

const accordionItems = [
  { title: "Career Roles", content: careerRoles },
  { title: "Industries", content: industries },
  {
    title: "Entrepreneurship Opportunities",
    content: entrepreneurship,
    prefix: "Graduates may also establish ventures such as:",
  },
]

const 
CareerAndProgressionOutcomes = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="w-full bg-[#FFA300] py-8 md:py-10">
      <div className="container mx-auto px-4 md:px-0">
        <div>
          <div className="p-6 md:p-8 border-b border-dashed border-white/35">
            <h2 className="font-schabo uppercase text-[#FFD87B] text-[52px] lg:text-[84px] leading-[0.95]">
              Career and
              <br />
              Progression Outcomes
            </h2>

            <p className="mt-4 font-tthoves-light text-white/90 text-sm md:text-base leading-relaxed">
              B.Sc. Sports Science graduates can pursue roles where movement, data, and wellbeing intersect—subject to local licensing and employer requirements.
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
                            className="font-tthoves-light text-white/90 text-sm md:text-base leading-snug"
                          >
                            + {line}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              )
            })}

            <div className="px-6 md:px-8 py-4 md:py-5">
              <p className="font-tthoves-light text-white/85 text-sm md:text-base leading-relaxed">
              The program also prepares students for higher education and research in sports science, exercise physiology, sports psychology, and related health sciences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareerAndProgressionOutcomes
