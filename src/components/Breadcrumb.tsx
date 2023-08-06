import { Link } from "react-router-dom"

type Props = {
  heading: string
  currPage: string
}

const Breadcrumb = ({ currPage, heading }: Props) => {
  return (
    <div className="bg bc-image px-6 py-36 bg-fixed">
      <div className="max-w-6xl mx-auto flex flex-col gap-4">
        <h1 className="text-4xl text-white font-semibold capitalize">
          {heading}
        </h1>
        <div className="flex gap-2">
          <Link to={"/"} className="text-blue-500">
            Home
          </Link>
          <p className="text-gray-300">/</p>
          <p className="text-gray-300">{currPage}</p>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb
