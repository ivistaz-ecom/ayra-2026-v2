import ProgramHeroBanner from "../../ProgramsShared/ProgramHeroBanner"

export default function HeroBanner() {
  return (
    <ProgramHeroBanner
      breadcrumbsItems={[
        { label: "Home", href: "/" },
        { label: "Engg & Tech", href: "/schools/engg-and-tech" },
      ]}
      desktopImageSrc="/school-of-business/mba/MBA-Banner-Desktop.webp"
      mobileImageSrc="/school-of-business/mba/MBA-Banner-mobile.webp"
      desktopAlt="Engg-and-Tech"
      mobileAlt="Engg-and-Tech"
      buttonColor="#72D9FF"
      desktopButtonHref="/admissions/apply-now"
      mobileButtonHref="/schools/engg-and-tech"
      desktopButtonPosition="left"
      mobileButtonPosition="left"
    />
  )
}
