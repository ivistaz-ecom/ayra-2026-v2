import Image from "next/image"

export default function ProgramDifferentSection({
  paragraphs,
  imageSrc,
  imageAlt,
}) {
  return (
    <section className="w-full border-y border-dashed border-[#8E8E8E] bg-[url('/opencanvas/opc-bg-img.png')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
          <div className="order-2 md:order-1 py-6 md:py-12 md:pr-10 lg:pr-14 text-left md:border-r md:border-dashed md:border-[#8E8E8E] space-y-2 md:space-y-4">
            {paragraphs.map((text, idx) => (
              <p
                key={`${idx}-${text}`}
                className="font-tthoves-light text-black text-sm sm:text-base leading-relaxed max-w-[520px] mx-0"
              >
                {text}
              </p>
            ))}
          </div>

          <div className="order-1 md:order-2 py-4 md:py-12 md:pl-10 lg:pl-14 flex items-center justify-center md:justify-start">
            <Image
              src={imageSrc}
              width={820}
              height={330}
              alt={imageAlt}
              className="w-full max-w-full sm:max-w-[540px] md:max-w-[740px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
