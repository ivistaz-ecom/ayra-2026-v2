import React from 'react'
import Breadcrumbs from '../../../utils/Breadcrumbs'
import Image from 'next/image'

const HeroBanner = () => {
  return (
    <>
      <div className="mx-auto">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: "Bachelor's Programs", href: '/admissions/bachelors-programs' },
            { label: 'B.Sc. Sports Science', href: '/bachelors-programs/bsc-in-sports-science' },
          ]}
        />
      </div>
      <div className="relative w-full bg-[#0098FF] ">
        <div className="hidden md:block w-full">
          <Image
            src="/school-of-engg-tech/bsc-in-sport/home-banner-desktop.webp"
            alt="B.Sc. Sports Science at AYRA"
            width={1920}
            height={1080}
            className="object-cover object-center w-full lg:h-auto"
            priority
          />
        </div>

        <div className="block md:hidden w-full">
          <Image
            src="/school-of-engg-tech/bsc-in-sport/home-banner-mobile.webp"
            alt="B.Sc. Sports Science at AYRA"
            width={800}
            height={1000}
            className="object-cover object-center w-full h-auto"
            priority
          />
        </div>
      </div>
    </>
  )
}

export default HeroBanner
