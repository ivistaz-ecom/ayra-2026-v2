import Breadcrumbs from "../../utils/Breadcrumbs"
import Image from "next/image"
import Link from "next/link"

export default function ProgramHeroBanner({
  breadcrumbsItems,
  desktopImageSrc,
  mobileImageSrc,
  desktopAlt,
  mobileAlt,
  buttonColor = "#72D9FF",
  desktopButtonHref,
  mobileButtonHref,
  desktopButtonLabel = "Apply Now",
  mobileButtonLabel = "Know More",
  desktopButtonPosition = "left",
  mobileButtonPosition = "left",
  bannerBgClassName = "bg-[#2050B2]",
}) {
  const desktopButtonPositionClass =
    desktopButtonPosition === "right"
      ? "right-[4%] sm:right-[6%]"
      : "left-[4%] sm:left-[6%]"

  const mobileButtonPositionClass =
    mobileButtonPosition === "right"
      ? "right-[4%] sm:right-[6%]"
      : "left-[4%] sm:left-[6%]"

  return (
    <>
      <Breadcrumbs items={breadcrumbsItems} />

      <div className={`relative w-full max-w-none overflow-hidden ${bannerBgClassName}`}>
        <div className="hidden md:block relative w-full md:h-[min(90vh,1080px)] lg:h-[90vh]">
          <Image
            src={desktopImageSrc}
            alt={desktopAlt}
            width={1920}
            height={1080}
            className="object-cover object-center w-full h-full max-w-none"
            priority
            sizes="100vw"
          />
        </div>

        <div className="block md:hidden w-full">
          <Image
            src={mobileImageSrc}
            alt={mobileAlt}
            width={800}
            height={1000}
            className="object-cover object-center w-full h-auto"
            priority
            sizes="100vw"
          />
        </div>

        {desktopButtonHref ? (
          <Link
            href={desktopButtonHref}
            className={`hidden md:inline-block group absolute ${desktopButtonPositionClass} bottom-[4%] sm:bottom-[5%] lg:bottom-[8%] z-10`}
          >
            <span
              className="relative px-4 sm:px-6 md:px-7 text-[13px] sm:text-[14px] md:text-[16px] 2xl:text-[20px] py-1 sm:py-1.5 text-white overflow-hidden cursor-pointer transition-colors duration-300 inline-block leading-none"
              style={{ backgroundColor: buttonColor }}
            >
              {desktopButtonLabel}
            </span>
          </Link>
        ) : null}

        {mobileButtonHref ? (
          <Link
            href={mobileButtonHref}
            className={`block md:hidden absolute ${mobileButtonPositionClass} bottom-[4%] sm:bottom-[5%] lg:bottom-[8%] z-10`}
          >
            <span
              className="px-4 md:px-5 py-1 md:py-1.5 text-[13px] md:text-[14px] text-white inline-block leading-none"
              style={{ backgroundColor: buttonColor }}
            >
              {mobileButtonLabel}
            </span>
          </Link>
        ) : null}
      </div>
    </>
  )
}
