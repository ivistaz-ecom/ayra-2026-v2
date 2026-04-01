"use client"

import Image from "next/image"
import React, { useState } from "react"

const careerRoles = [
  "Hotel Operations Manager",
  "Food and Beverage Manager",
  "Front Office Manager",
  "Hospitality Consultant",
]

const industries = [
  "Hotels and Resorts",
  "Hospitality and Tourism Enterprises",
  "Hospitality Consulting Firms",
  "Service and Customer Experience Organisations",
]

const entrepreneurship = [
  "Restaurants and cafés",
  "Boutique hospitality businesses",
  "Hospitality consulting services",
]

const accordionItems = [
  { title: "Career Roles", content: careerRoles },
  { title: "Industries", content: industries },
  {
    title: "Entrepreneurship Opportunities",
    content: entrepreneurship,
    prefix: "Graduates may also pursue:",
  },
]

const CareerAndProgressionOutcomes = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="w-full bg-[#0098FF] py-8 md:py-10">
      <div className="container mx-auto px-4 md:px-0">
        <div>
          <div className="px-4 py-6 md:px-0 md:py-8 border-b border-dashed border-white/35">
            <h2 className="font-schabo uppercase text-[#C9D1FF] text-[52px] md:text-[84px] leading-[0.95]">
              Career and
              <br />
              Progression Outcomes
            </h2>

            <p className="mt-4 font-tthoves-light text-white/90 text-sm md:text-base leading-relaxed">
              Graduates of the BBA in Hospitality Management program can pursue
              careers across hospitality and service industries.
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
                    className="w-full flex items-center justify-between px-4 md:px-0 py-4 text-left"
                  >
                    <span className="font-tthoves-bold text-white text-xl md:text-3xl">
                      {item.title}
                    </span>
                    <span className="font-tthoves-light text-white text-3xl md:text-4xl leading-none">
                      {isOpen ? "×" : "+"}
                    </span>
                  </button>

                  {isOpen ? (
                    <div className="px-4 md:px-0 pb-5 md:pb-6">
                      {item.prefix ? (
                        <p className="font-tthoves-light text-white/90 text-sm md:text-base mb-3">
                          {item.prefix}
                        </p>
                      ) : null}
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                        {item.content.map((line, lineIdx) => (
                          <li
                            key={`${item.title}-${lineIdx}-${line}`}
                            className="flex items-start gap-2 font-tthoves-light text-white/90 text-sm md:text-base leading-snug"
                          >
                            <Image
                              src="/rocket-icon.svg"
                              width={14}
                              height={14}
                              alt="arrow icon"
                              className="mt-0.5 h-3.5 w-3.5 shrink-0 rotate-45"
                            />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              )
            })}

            <div className="px-4 md:px-0 py-4 md:py-5">
              <p className="font-tthoves-light text-white/85 text-sm md:text-base leading-relaxed">
                The program also provides a foundation for higher studies in
                hospitality management, tourism management, and business
                administration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareerAndProgressionOutcomes
