import ProgramHeroBanner from "../../ProgramsShared/ProgramHeroBanner"

export default function HeroBanner() {
  return (
    <ProgramHeroBanner
      breadcrumbsItems={[
        { label: "Home", href: "/" },
        { label: "School of Business", href: "/" },
      ]}
      desktopImageSrc="/bba-programs/business-analytics/hero-banner-desktop.webp"
      mobileImageSrc="/bba-programs/business-analytics/mobile-banner.webp"
      desktopAlt="Business Analytics"
      mobileAlt="Business Analytics"
      buttonColor="#72D9FF"
      desktopButtonHref="/admissions/apply-now"
      mobileButtonHref="/schools/engg-and-tech"
      desktopButtonPosition="left"
      mobileButtonPosition="left"
    />
  )
}
