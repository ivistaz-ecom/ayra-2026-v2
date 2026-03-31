"use client"

import React, { useState } from "react"

const careerRoles = [
  "Artificial Intelligence Engineer",
  "Machine Learning Engineer",
  "Data Scientist",
  "NLP Engineer",
  "Computer Vision Engineer",
  "AI Research Associate",
  "AI Solutions Architect",
]

const industries = [
  "Artificial Intelligence and Automation",
  "Healthcare Technology",
  "Financial Technology (FinTech)",
  "Robotics and Autonomous Systems",
  "E-commerce and Digital Platforms",
  "Smart Cities and IoT Technologies",
]

const entrepreneurship = [
  "AI-powered analytics platforms",
  "Intelligent automation solutions",
  "AI chatbots and virtual assistants",
  "Predictive analytics tools for business decision-making",
]

const accordionItems = [
  { title: "Career Roles", content: careerRoles },
  { title: "Industries", content: industries },
  {
    title: "Entrepreneurship Opportunities",
    content: entrepreneurship,
    prefix: "Graduates may develop technology ventures such as:",
  },
]

const CareerAndProgressionOutcomes = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="w-full bg-[#744AC6] py-8 md:py-10">
      <div className="container mx-auto px-4 md:px-0">
        <div>
          <div className="px-4 py-4 sm:py-6 md:px-0 md:py-8 border-b border-dashed border-white/35 text-left">
            <h2 className="font-schabo uppercase text-[#C9D1FF] text-[34px] sm:text-[42px] md:text-[56px] lg:text-[72px] xl:text-[84px] leading-[0.95]">
              Career &
              <br />
              Progression Outcomes
            </h2>

            <p className="mt-4 font-tthoves-light text-white/90 text-sm md:text-base leading-relaxed max-w-3xl mx-0">
              Graduates of the AI & ML program can pursue diverse roles across
              the global technology ecosystem.
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
                    className="w-full flex items-center justify-between gap-3 px-4 md:px-0 py-3 sm:py-4 text-left"
                  >
                    <span className="font-tthoves-bold text-white text-base sm:text-lg md:text-2xl lg:text-3xl leading-snug">
                      {item.title}
                    </span>
                    <span className="font-tthoves-light text-white text-2xl sm:text-3xl md:text-4xl leading-none shrink-0">
                      {isOpen ? "×" : "+"}
                    </span>
                  </button>

                  {isOpen ? (
                    <div className="px-4 md:px-0 pb-4 sm:pb-5 md:pb-6">
                      {item.prefix ? (
                        <p className="font-tthoves-light text-white/90 text-xs sm:text-sm md:text-base mb-3">
                          {item.prefix}
                        </p>
                      ) : null}
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                        {item.content.map((line) => (
                          <li
                            key={line}
                            className="font-tthoves-light text-white/90 text-xs sm:text-sm md:text-base leading-snug"
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

            <div className="px-4 md:px-0 py-4 md:py-5 text-left">
              <p className="font-tthoves-light text-white/85 text-sm md:text-base leading-relaxed max-w-3xl mx-0">
                The program also prepares students for advanced studies and
                research in artificial intelligence, machine learning, and data
                science.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareerAndProgressionOutcomes
