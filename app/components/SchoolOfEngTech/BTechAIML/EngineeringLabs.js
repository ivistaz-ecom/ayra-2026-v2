import React from "react"
import Image from "next/image"

const EngineeringLabs = () => {
  return (
    <section className="w-full bg-white py-5 md:py-6">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#744AC6] px-0 py-5 md:py-6 order-2 md:order-1 pl-5 pr-5">
            <h2 className="font-schabo uppercase text-[#D6DAFF] text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] leading-[0.95] text-left">
              Engineering Labs &amp;
              <br />
              Technology
              <br />
              Infrastructure
            </h2>

            <div className="mt-4 border-t border-dotted border-white/50" />

            <div className="mt-5 space-y-4 font-tthoves-light text-white text-[13px] sm:text-sm md:text-base leading-relaxed text-left">
              <p>
                AYRA&apos;s engineering programs are supported by advanced
                laboratories and digital infrastructure designed to provide
                hands-on experience in contemporary technologies.
              </p>
              <p>
                Students gain access to programming laboratories, artificial
                intelligence and machine learning labs, data science and
                analytics labs, cloud computing environments, and cybersecurity
                experimentation platforms.
              </p>
              <p>
                These facilities simulate real-world engineering environments
                where students work with modern programming frameworks,
                analytics platforms, and development tools.
              </p>
              <p>
                In addition to physical laboratories, students benefit from
                cloud-based development platforms and virtual computing
                environments, enabling them to build, test, and deploy
                applications using industry-relevant tools and technologies.
              </p>
              <p>
                These facilities create an ecosystem where curiosity leads to
                experimentation, and experimentation evolves into innovation.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 min-h-[200px] sm:min-h-[280px] md:min-h-0">
            <Image
              src="/school-of-engg-tech/btech/Engeneeringlabs.png"
              width={886}
              height={746}
              alt="Engineering labs and technology infrastructure"
              className="w-full h-full min-h-[200px] sm:min-h-[280px] md:min-h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EngineeringLabs
