"use client"

import React, { useState } from "react"

const careerRoles = [
  "Data Scientist",
  "Data Analyst",
  "Machine Learning Engineer",
  "Business Intelligence Analyst",
  "Data Engineer",
  "Analytics Consultant",
]

const industries = [
  "Information Technology and Analytics",
  "Finance and FinTech",
  "Healthcare and Bioinformatics",
  "Retail and E-commerce",
  "Telecommunications",
  "Government and Smart Infrastructure",
]

const entrepreneurship = [
  "Data analytics consulting firms",
  "Business intelligence platforms",
  "AI-powered analytics solutions",
  "Market intelligence and predictive analytics startups",
]

const accordionItems = [
  { title: "Career Roles", content: careerRoles },
  { title: "Industries", content: industries },
  {
    title: "Entrepreneurship Opportunities",
    content: entrepreneurship,
    prefix: "Graduates may also pursue entrepreneurial ventures such as:",
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
              Career and
              <br />
              Progression Outcomes
            </h2>

            <p className="mt-4 font-tthoves-light text-white/90 text-sm md:text-base leading-relaxed max-w-3xl mx-0">
              Graduates of AYRA&apos;s Data Science program can pursue diverse
              careers across the global data and analytics ecosystem.
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
                research in data science, artificial intelligence, and analytics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareerAndProgressionOutcomes
