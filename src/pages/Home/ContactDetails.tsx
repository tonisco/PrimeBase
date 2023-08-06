import { BsCalendar3 } from "react-icons/bs"

const ContactDetails = () => {
  return (
    <section className="px-6 py-28">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="mb-2 text-2xl font-bold capitalize sm:text-4xl">
          We are Here to Help You
        </h1>
        <p className="mb-16 text-gray-500">
          Our mission is to deliver reliable, latest news and opinions.
        </p>

        <div className="grid grid-cols-1 gap-8 mb-16 justify-items-center md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4 items-center bg-white px-10 py-12 shadow-md rounded-lg">
            <BsCalendar3 className="text-3xl text-blue-500" />
            <h1 className="text-lg uppercase font-semibold">Apply for Loan</h1>
            <p className="text-gray-700">
              Looking to buy a car or home loan? then apply for loan now.
            </p>
            <a href="/apply" className="text-blue-500 font-semibold underline">
              Get Appointment
            </a>
          </div>
          <div className="flex w-full flex-col gap-4 items-center bg-white px-10 py-12 shadow-md rounded-lg">
            <BsCalendar3 className="text-3xl text-blue-500" />
            <h1 className="text-lg uppercase font-semibold">call us at </h1>
            <h1 className="font-bold text-xl">+1 (514) 312-6688</h1>
            <a href="mailto:support@primebase.com" className="text-blue-600">
              support@primebase.com
            </a>
            <a
              href="/contact"
              className="text-blue-500 font-semibold underline"
            >
              Contact Us
            </a>
          </div>
          <div className="flex flex-col gap-4 items-center bg-white px-10 py-12 shadow-md rounded-lg">
            <BsCalendar3 className="text-3xl text-blue-500" />
            <h1 className="text-lg uppercase font-semibold">Talk to advisor</h1>
            <p className="text-gray-700">
              Need to loan advise? Talk to our Loan advisors.
            </p>
            <a href="/apply" className="text-blue-500 font-semibold underline">
              Meet The Advisor
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactDetails
