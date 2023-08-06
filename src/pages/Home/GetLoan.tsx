const GetLoan = () => {
  return (
    <section className="px-6 bg-white py-28">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="mb-2 text-2xl font-bold capitalize sm:text-4xl">
          How do I get a loan
        </h1>
        <p className="mb-16 text-gray-500">
          We provide a easy application process of securing a loan
        </p>

        <div className="grid grid-cols-1 gap-8 mb-16 justify-items-center md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center border-2 border-gray-200">
            <p className="px-3 py-1 -mt-5 text-xl text-gray-500 border-2 border-gray-500 rounded-full">
              1
            </p>
            <div className="flex flex-col gap-4 p-10">
              <h1 className="text-2xl font-semibold">Choose Loan Amount</h1>
              <p className="text-gray-500">
                Fill the application with personal details, loan amount and
                payback period. Then submit the form to get approved
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center border-2 border-gray-200">
            <p className="px-3 py-1 -mt-5 text-xl text-gray-500 border-2 border-gray-500 rounded-full">
              2
            </p>
            <div className="flex flex-col gap-4 p-10">
              <h1 className="text-2xl font-semibold">Loan gets approved</h1>
              <p className="text-gray-500">
                You will within five working hours of submitting your
                application and get approved
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center border-2 border-gray-200">
            <p className="px-3 py-1 -mt-5 text-xl text-gray-500 border-2 border-gray-500 rounded-full">
              3
            </p>
            <div className="flex flex-col gap-4 p-10">
              <h1 className="text-2xl font-semibold">Receive Loan Amount</h1>
              <p className="text-gray-500">
                After approved, we will can you to work out the details. We sent
                money within hours of approved.
              </p>
            </div>
          </div>
        </div>

        <a
          href="/apply"
          className="px-4 py-2 text-base text-white bg-blue-600 rounded-lg sm:text-lg"
        >
          Apply now
        </a>
      </div>
    </section>
  )
}

export default GetLoan
