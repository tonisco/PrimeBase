import { BsStarFill } from "react-icons/bs"

const Achievement = () => {
  return (
    <section className="px-6 py-28">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="mb-2 text-2xl font-bold capitalize sm:text-4xl">
          Save, Fastest Loan & Grow
        </h1>
        <p className="mb-16 text-gray-500">
          We’re all about helping you reach your next financial goal—great
          rates, less fees, unprecedented service, and awesome loan help.
        </p>

        <div className="grid grid-cols-1 gap-8 justify-items-center md:grid-cols-3">
          <div>
            <h1 className="text-3xl sm:text-[40px] mb-1 font-bold">
              300,000 +
            </h1>
            <p className="font-semibold text-sm text-gray-500">
              Customers Empowered
            </p>
          </div>
          <div>
            <h1 className="text-3xl sm:text-[40px] mb-1 font-bold">
              $5 billion+
            </h1>
            <p className="font-semibold text-sm text-gray-500">
              Loans given out
            </p>
          </div>
          <div>
            <div className="text-3xl sm:text-[40px] flex text-blue-500 mb-5 font-bold">
              {Array.from({ length: 5 }, (_, i) => (
                <BsStarFill key={i} />
              ))}
            </div>
            <p className="font-semibold text-sm text-gray-500">
              Customer Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievement
