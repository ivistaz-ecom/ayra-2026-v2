import ProgramHeroBanner from "../../ProgramsShared/ProgramHeroBanner"

export default function HeroBanner() {
  return (
    <ProgramHeroBanner
      breadcrumbsItems={[
        { label: "Home", href: "/" },
        { label: "Engg & Tech", href: "/schools/engg-and-tech" },
      ]}
      desktopImageSrc="/bba-programs/ba-in-psychology/hero-banner-desktop.webp"
      mobileImageSrc="/bba-programs/ba-in-psychology/hero-banner-mobile.webp"
      desktopAlt="BA in Psychology"
      mobileAlt="BA in Psychology"
      buttonColor="#0072C5"
      desktopButtonPosition="left"
      mobileButtonPosition="left"
      bannerBgClassName="bg-[#0098FF]"
    />
  )
}
