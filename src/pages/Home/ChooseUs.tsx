import {
  BsBullseye,
  BsCreditCard2Front,
  BsHandThumbsUp,
  BsHeadset,
} from "react-icons/bs"

const ChooseUs = () => {
  return (
    <section className="px-6 py-28 bg bg-chart">
      <div className="max-w-6xl mx-auto text-center text-white">
        <h1 className="mb-2 text-2xl font-bold capitalize sm:text-4xl">
          Why people choose us
        </h1>
        <p className="mb-16 text-gray-200 max-w-xl text-lg mx-auto">
          We understand how to effectively guide you through the home loan or
          refinance process and avoid potential problems along the way.
        </p>

        <div className="grid grid-cols-1 gap-6 justify-items-center md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-gray-200 text-black px-6 py-8 flex flex-col gap-4 items-center rounded-lg max-w-sm">
            <div className="p-3 rounded-full bg-blue-500/10">
              <BsCreditCard2Front className="text-2xl text-blue-500" />
            </div>
            <h2 className="text-lg font-semibold">Free Weekly Reporting</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis
              neque sollicitudin nulla sit.
            </p>
          </div>
          <div className="bg-gray-200 text-black px-6 py-8 flex flex-col gap-4 items-center rounded-lg max-w-sm">
            <div className="p-3 rounded-full bg-blue-500/10">
              <BsHeadset className="text-2xl text-blue-500" />
            </div>
            <h2 className="text-lg font-semibold">Great Customer Service</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis
              neque sollicitudin nulla sit.
            </p>
          </div>
          <div className="bg-gray-200 text-black px-6 py-8 flex flex-col gap-4 items-center rounded-lg max-w-sm">
            <div className="p-3 rounded-full bg-blue-500/10">
              <BsHandThumbsUp className="text-2xl text-blue-500" />
            </div>
            <h2 className="text-lg font-semibold">
              Free credit improvement tips
            </h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis
              neque sollicitudin nulla sit.
            </p>
          </div>
          <div className="bg-gray-200 text-black px-6 py-8 flex flex-col gap-4 items-center rounded-lg max-w-sm">
            <div className="p-3 rounded-full bg-blue-500/10">
              <BsBullseye className="text-2xl text-blue-500" />
            </div>
            <h2 className="text-lg font-semibold">
              Security with 256-bit encryption.
            </h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis
              neque sollicitudin nulla sit.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChooseUs
