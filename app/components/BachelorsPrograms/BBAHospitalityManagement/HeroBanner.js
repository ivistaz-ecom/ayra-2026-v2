import React from 'react'
import Breadcrumbs from '../../../utils/Breadcrumbs'
import Image from 'next/image'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <>
      <div className="mx-auto">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Engg & Tech', href: '/schools/engg-and-tech' },
          ]}
        />
      </div>
      <div className="relative w-full bg-[#0098FF] ">
        <div className="hidden md:block w-full">
          <Image
            src="/school-of-engg-tech/bba-hospitality/banner-desktop.webp"
            alt="Engg-and-Tech"
            width={1920}
            height={1080}
            className="object-cover object-center w-full lg:h-auto"
            priority
          />
        </div>

        <div className="block md:hidden w-full">
          <Image
            src="/school-of-engg-tech/bba-hospitality/banner-mobile.webp"
            alt="Engg-and-Tech"
            width={800}
            height={1000}
            className="object-cover object-center w-full h-auto"
            priority
          />
        </div>

        <Link
          href="/admissions/apply-now"
          className="group absolute left-[6%] bottom-[5%] lg:bottom-[8%] z-10 inline-block"
        >
          <span className="relative px-5 text-[14px] 2xl:text-[18px] py-0.5 bg-[#0072C5] group-hover:bg-[#0072C5] text-white overflow-hidden cursor-pointer transition-colors duration-300 inline-block">
            Apply Now
            <span className="absolute top-0 right-0 w-[12px] h-[12px] bg-[#0098FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
            <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-[#2050B1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          </span>
        </Link>
      </div>
    </>
  )
}

export default HeroBanner
