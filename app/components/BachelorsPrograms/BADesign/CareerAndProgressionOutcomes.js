"use client"

import Image from "next/image"
import React, { useState } from "react"

const careerRoles = [
  "Visual Communication Designer",
  "UI/UX Designer",
  "Brand Strategist",
  "Content Creator",
  "Digital Marketing Specialist",
  "Media Producer",
  "Advertising Creative Professional",
]

const industries = [
  "Advertising and Branding Agencies",
  "Media and Communication Firms",
  "Digital Marketing Companies",
  "Design Studios and Creative Agencies",
  "Content Production and Media Platforms",
  "Corporate Communication and Marketing Departments",
]

const entrepreneurship = [
  "Creative design studios",
  "Branding and digital communication agencies",
  "Content production platforms",
  "Social media and digital marketing consultancies",
]

const accordionItems = [
  { title: "Career Roles", content: careerRoles },
  { title: "Industries", content: industries },
  {
    title: "Entrepreneurship Opportunities",
    content: entrepreneurship,
    prefix:
      "Graduates may also pursue entrepreneurial ventures such as:",
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
              Graduates of the B.A. in Design and Communication program can
              pursue diverse roles across creative and communication industries.
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

            <div className="px-6 md:px-8 py-4 md:py-5">
              <p className="font-tthoves-light text-white/85 text-sm md:text-base leading-relaxed">
                The program also provides a strong foundation for postgraduate
                studies in design, media studies, communication, branding, and
                creative industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareerAndProgressionOutcomes
