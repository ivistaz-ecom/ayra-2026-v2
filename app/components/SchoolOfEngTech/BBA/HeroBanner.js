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
            { label: 'Engg & Tech', href: '/schools/engg-and-tech' },
          ]}
        />
      </div>
      <div className="relative w-full bg-[#2050B2]">
        <div className="hidden md:block w-full">
          <Image
            src="/schools/engg_and_tech/engg-tech-new.png"
            alt="Engg-and-Tech"
            width={1920}
            height={1080}
            className="object-cover object-center w-full lg:h-[90vh]"
            priority
          />
        </div>

        <div className="block md:hidden w-full">
          <Image
            src="/schools/engg_and_tech/engg-tech-new-mobile.png"
            alt="Engg-and-Tech"
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
