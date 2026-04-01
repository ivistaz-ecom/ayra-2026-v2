import React from "react"
import Image from "next/image"

const EngineeringLabs = () => {
  return (
    <section className="w-full bg-white py-5 md:py-6">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#E5429E] px-0 py-5 md:py-6 order-2 md:order-1 pl-5 pr-5">
            <h2 className="font-schabo uppercase text-[#FFB8DD] text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] leading-[0.95] text-left">
              Culinary Training
              <br />
              Labs
            </h2>

            <div className="mt-4 border-t border-dotted border-white/50" />

            <div className="mt-5 space-y-4 font-tthoves-light text-white text-[13px] sm:text-sm md:text-base leading-relaxed text-left">
              <p>
                AYRA provides specialised culinary training facilities where
                students learn and practice in professional kitchen
                environments.
              </p>
              <p>
                Students gain hands-on experience through:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Image
                    src="/rocket-icon.svg"
                    width={16}
                    height={16}
                    alt="arrow icon"
                    className="mt-1 h-4 w-4 shrink-0 rotate-45"
                  />
                  <span>Basic Training Kitchen</span>
                </li>
                <li className="flex items-start gap-2">
                  <Image
                    src="/rocket-icon.svg"
                    width={16}
                    height={16}
                    alt="arrow icon"
                    className="mt-1 h-4 w-4 shrink-0 rotate-45"
                  />
                  <span>Advanced Training Kitchen</span>
                </li>
                <li className="flex items-start gap-2">
                  <Image
                    src="/rocket-icon.svg"
                    width={16}
                    height={16}
                    alt="arrow icon"
                    className="mt-1 h-4 w-4 shrink-0 rotate-45"
                  />
                  <span>Demonstration Kitchen</span>
                </li>
                <li className="flex items-start gap-2">
                  <Image
                    src="/rocket-icon.svg"
                    width={16}
                    height={16}
                    alt="arrow icon"
                    className="mt-1 h-4 w-4 shrink-0 rotate-45"
                  />
                  <span>Training Restaurant</span>
                </li>
                <li className="flex items-start gap-2">
                  <Image
                    src="/rocket-icon.svg"
                    width={16}
                    height={16}
                    alt="arrow icon"
                    className="mt-1 h-4 w-4 shrink-0 rotate-45"
                  />
                  <span>Bakery and Confectionery Laboratory</span>
                </li>
                <li className="flex items-start gap-2">
                  <Image
                    src="/rocket-icon.svg"
                    width={16}
                    height={16}
                    alt="arrow icon"
                    className="mt-1 h-4 w-4 shrink-0 rotate-45"
                  />
                  <span>Mock Front Office</span>
                </li>
                <li className="flex items-start gap-2">
                  <Image
                    src="/rocket-icon.svg"
                    width={16}
                    height={16}
                    alt="arrow icon"
                    className="mt-1 h-4 w-4 shrink-0 rotate-45"
                  />
                  <span>Mock Guest Room</span>
                </li>
              </ul>
              <p>
                These facilities replicate real hospitality environments where
                students learn food preparation, culinary techniques, and
                restaurant service practices.
              </p>
              <p>
                The labs provide a professional setting where students develop
                the technical and creative skills required for culinary careers.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 min-h-[200px] sm:min-h-[280px] md:min-h-0">
            <Image
              src="/school-of-engg-tech/btech/Engeneeringlabs.png"
              width={886}
              height={746}
              alt="Culinary training labs"
              className="w-full h-full min-h-[200px] sm:min-h-[280px] md:min-h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EngineeringLabs
