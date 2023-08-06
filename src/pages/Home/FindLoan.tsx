type Props = {
  image: string
  title: string
  text: string
  link?: string
}

const FindLoan = ({ image, text, title, link }: Props) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow">
      <img
        src={image}
        alt="personal loan"
        className="object-cover w-full rounded-t-lg"
      />
      <div className="flex flex-col gap-3 px-8 py-8">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-gray-500">{text}</p>
        <a className="text-blue-500 underline" href={link ? link : "/"}>
          Read more
        </a>
      </div>
    </div>
  )
}

export default FindLoan
