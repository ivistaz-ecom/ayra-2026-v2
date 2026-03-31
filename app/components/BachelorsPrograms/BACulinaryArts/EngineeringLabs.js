import React from "react"
import Image from "next/image"

const EngineeringLabs = () => {
  return (
    <section className="w-full bg-white py-5 md:py-6">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#E5429E] pl-[10px]  pr-[10px] py-5 md:py-6 order-2 md:order-1">
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
              <ul className="list-disc pl-5 space-y-1">
                <li>Basic Training Kitchen</li>
                <li>Advanced Training Kitchen</li>
                <li>Demonstration Kitchen</li>
                <li>Training Restaurant</li>
                <li>Bakery and Confectionery Laboratory</li>
                <li>Mock Front Office</li>
                <li>Mock Guest Room</li>
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
