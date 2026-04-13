import Image from "next/image"

export default function ProgramNotSureWhereToBegin({
  imageSrc,
  imageAlt = "Not sure where to begin?",
  imageWidth = 900,
  imageHeight = 260,
  priority = true,
  heading,
  paragraph,
}) {
  return (
    <section className="w-full bg-[#002561] py-10 md:py-14 border-t border-[#ffffff1f]">
      <div className="container mx-auto px-4 md:px-0 text-left">
        <Image
          src={imageSrc}
          width={imageWidth}
          height={imageHeight}
          alt={imageAlt}
          className="mx-0 md:mx-auto w-full max-w-[320px] md:max-w-[440px] h-auto"
          priority={priority}
        />
      </div>

      <div className="mt-8 border-t border-dashed border-[#2a72b7]">
        <div className="container mx-auto px-4 md:px-0 pt-5 text-center">
          <p className="font-tthoves-demibold text-white text-[22px] sm:text-[26px] md:text-[30px] leading-tight">
            {heading}
          </p>
          <p className="mt-2 font-tthoves-light text-[#b4c8df] text-sm md:text-base text-center mx-auto">
            {paragraph}
          </p>
        </div>
      </div>
    </section>
  )
}
