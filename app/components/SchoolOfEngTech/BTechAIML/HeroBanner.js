import React from 'react'
import Breadcrumbs from '../../../utils/Breadcrumbs'
import Image from 'next/image'
import Link from 'next/link'


const HeroBanner = () => {
  return (
    <>
    <Breadcrumbs
      items={[
        { label: "Home", href: "/" },
        { label: "Engg & Tech", href: "/schools/engg-and-tech" },
      ]}
    />
    <div className="relative w-full max-w-none bg-[#2050B2] overflow-hidden">
      <div className="hidden md:block relative w-full md:h-[min(90vh,1080px)] lg:h-[90vh]">
        <Image
          src="/school-of-engg-tech/btech-aiml/Desktop-banner.png"
          alt="Engg-and-Tech"
          width={1920}
          height={1080}
          className="object-cover object-center w-full h-full max-w-none"
          priority
          sizes="100vw"
        />
      </div>

      {/* Mobile Image */}
      <div className="block md:hidden w-full">
        <Image
          src="/school-of-engg-tech/btech-aiml/Mobile-banner.png"
          alt="Engg-and-Tech"
          width={800}
          height={1000}
          className="object-cover object-center w-full h-auto"
          priority
          sizes="100vw"
        />
      </div>

      <Link
        href="/admissions/apply-now"
        className="hidden md:inline-block group absolute left-[4%] sm:left-[6%] bottom-[4%] sm:bottom-[5%] lg:bottom-[8%] z-10"
      >
        <span className="relative px-4 sm:px-6 md:px-7 text-[13px] sm:text-[14px] md:text-[16px] 2xl:text-[20px] py-1 sm:py-1.5 bg-[#744AC6] group-hover:bg-[#744AC6] text-white overflow-hidden cursor-pointer transition-colors duration-300 inline-block leading-none">
          Apply Now
        </span>
      </Link>

      <Link
        href="/schools/engg-and-tech"
        className="block md:hidden absolute left-[4%] sm:left-[6%] bottom-[4%] sm:bottom-[5%] lg:bottom-[8%] z-10"
      >
        <span className="px-4 md:px-5 py-1 md:py-1.5 text-[13px] md:text-[14px] text-white bg-[#744AC6] inline-block leading-none">
          Know More
        </span>
      </Link>
    </div>
  </>
  )
}

export default HeroBanner