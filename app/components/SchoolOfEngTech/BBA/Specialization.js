import React from 'react'
import { Send } from 'lucide-react'

const intro =
  "Students deepen their expertise through focused specialisations while building transferable skills that span every pathway. The programme pairs a single major with opportunities to minor across AYRA's schools, so your profile can evolve with your interests and ambitions."

const singleMajorItems = [
  'Marketing',
  'Finance',
  'Human Resource Management',
  'Business Analytics',
]

const coreSkillsItems = [
  'Business Fundamentals',
  'AI Technology & Tools',
  'Research & Analytics',
  'Entrepreneurial Thinking',
  'Communication',
  'Digital Competency',
]

function BulletList({ items }) {
  return (
    <>
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2.5 font-tthoves-light text-sm md:text-base text-[#5B6B7D]"
        >
          <Send
            className="mt-0.5 h-4 w-4 shrink-0 text-[#0072C5] -rotate-12"
            strokeWidth={2.25}
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
    </>
  )
}

const Specialization = () => {
  return (
    <>
    <section className="w-full bg-white py-8 md:py-14">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="font-schabo text-[#002561] text-[52px] leading-[0.95] md:text-[88px] md:leading-[0.95] uppercase tracking-tight">
          Specialisations
        </h2>

        <p className="mt-6 max-w-3xl font-tthoves-light text-black text-sm md:text-base leading-relaxed">
          {intro}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <div className="border border-dashed border-[#002561] p-6 md:p-8">
            <h3 className="font-tthoves-demibold text-black text-sm md:text-base">
              Single Major Specialisations offered:
            </h3>
            <BulletList items={singleMajorItems} />
            <p className="mt-8 font-tthoves-light text-black text-xs md:text-sm leading-relaxed">
              Minors can be chosen across different schools at AYRA, allowing
              students to combine interests beyond their primary
              specialisation.
            </p>
          </div>

          <div className="border border-dashed border-[#002561] p-6 md:p-8">
            <h3 className="font-tthoves-demibold text-black text-sm md:text-base">
              Core Skills Developed Across All Specialisations
            </h3>
            <BulletList items={coreSkillsItems} />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Specialization
