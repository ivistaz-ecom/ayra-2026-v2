export default function ProgramDescriptionSection({ paragraphs }) {
  return (
    <div className="w-full flex flex-col justify-center items-center py-3 md:py-[5px]">
      <div className="container mx-auto flex flex-col gap-6 md:gap-10 px-4 md:px-0">
        <div className="flex flex-col items-center">
          <div className="container mx-auto lg:border-l lg:border-r border-dashed border-[#8E8E8E] flex items-center justify-center flex-col text-center">
            {paragraphs.map((text, idx) => (
              <p
                key={`${idx}-${text}`}
                className={`text-center w-full max-w-xl md:max-w-5xl font-tthoves-light text-sm sm:text-base leading-relaxed text-black ${
                  idx === 0 ? "pt-4 pb-1" : idx === paragraphs.length - 1 ? "pb-4 pt-1" : "pt-1"
                }`}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
