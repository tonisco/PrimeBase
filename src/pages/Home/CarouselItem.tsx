type Props = {
  title: string
  text: string
  buttonText: string
  image: string
  buttonLink?: string
}

const CarouselItem = ({
  buttonText,
  text,
  image,
  title,
  buttonLink,
}: Props) => {
  return (
    <div className={`px-8 h-[65vh] sm:h-[80vh] flex items-center bg ${image}`}>
      <div className="flex flex-col w-full max-w-6xl gap-4 mx-auto text-white sm:gap-6 text-start">
        <h1 className="text-3xl sm:text-5xl font-semibold lg:max-w-[50%]">
          {title}
        </h1>
        <p className="text-base sm:text-xl lg:max-w-[50%]">{text}</p>
        <a
          href={buttonLink ? buttonLink : "/apply"}
          className="self-start px-4 py-2 text-base bg-blue-600 rounded-lg sm:text-lg"
        >
          {buttonText}
        </a>
      </div>
    </div>
  )
}

export default CarouselItem
