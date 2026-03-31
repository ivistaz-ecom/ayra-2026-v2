import React from "react"
import Image from "next/image"
import Slider from "./Slider"
const highlights = [
  "Comprehensive curriculum integrating hospitality management and business principles",
  "Hands-on learning through specialised hospitality training laboratories",
  "Exposure to hotel operations, food and beverage management, and guest services",
  "Practical experience through internships with hotels and resorts",
  "Opportunities to develop skills in service excellence, operational management, and customer experience",
  "Training in hospitality entrepreneurship and business development",
  "Industry-oriented learning through demonstrations, practical sessions, and simulations",
]

const Specialization = () => {
  return (
    <>
    <section className="w-full border-y border-dashed border-[#8E8E8E] py-6 md:py-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <h2 className="font-schabo text-[#0072C5] text-[58px] leading-[1em] md:text-[96px] uppercase">
              Program
              <br />
              Highlights
            </h2>

            <ul className="mt-6 space-y-4 text-black font-tthoves-light text-sm lg:text-[14px]">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Image
                    src="/rocket-icon.svg"
                    width={18}
                    height={18}
                    alt="bullet icon"
                    className="mt-1 h-4 w-4 shrink-0 rotate-45"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            
          </div>

          <div className="py-[5px]">
            <Image
              src="/school-of-engg-tech/bba-general/img1.webp"
              width={700}
              height={450}
              alt="Students collaborating on a project"
              className="w-full h-auto "
            />
          </div>
        </div>
      </div>
    </section>
<Slider />
    <section className="w-full bg-[#009AE6] py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start md:items-center">
          <div>
            <h2 className="font-schabo uppercase text-[#66D4FF] text-[58px] md:text-[96px] leading-[0.9]">
              Hospitality
              <br />
              Training Labs
            </h2>

            <p className="mt-5 font-tthoves-light text-white/85 text-[14px] md:text-[18px] leading-relaxed max-w-[640px]">
              AYRA provides dedicated hospitality training facilities that
              simulate professional environments.
            </p>

            <p className="mt-6 font-tthoves-medium text-white text-[16px] md:text-[18px] leading-relaxed max-w-[650px]">
              Students gain hands-on experience through:
            </p>

            <ul className="mt-5 space-y-2 text-sm lg:text-[14px]">
              {[
                "Basic Training Kitchen",
                "Advanced Training Kitchen",
                "Demonstration Kitchen",
                "Training Restaurant",
                "Bakery and Confectionery Laboratory",
                "Mock Front Office",
                "Mock Guest Room (Mock Bedroom)",
              ].map((item, index) => (
                <li
                  key={`${index}-${item}`}
                  className="flex items-start gap-2 text-white/85 font-tthoves-light text-[16px] leading-[1.3]"
                >
                  <Image
                    src="/rocket-icon.svg"
                    width={16}
                    height={16}
                    alt="bullet icon"
                    className="mt-1 h-3 w-3 md:h-4 md:w-4 shrink-0 rotate-45"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-7 font-tthoves-light text-white/85 text-[13px] md:text-[17px] leading-relaxed max-w-[700px]">
              These environments replicate real hospitality settings where
              students learn culinary techniques, restaurant operations, front
              office management, and housekeeping practices.
            </p>
            <p className="mt-5 font-tthoves-light text-white/85 text-[13px] md:text-[17px] leading-relaxed max-w-[700px]">
              The facilities allow students to develop practical skills required
              in hotels, resorts, and hospitality enterprises.
            </p>
          </div>

          <div className="md:pt-0 flex items-center">
            <Image
             src="/school-of-engg-tech/bba-general/img1.webp"
              width={900}
              height={620}
              alt="Students in hospitality training lab"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Specialization
