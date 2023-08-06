import {
  BsBullseye,
  BsCreditCard2Front,
  BsHandThumbsUp,
  BsHeadset,
  BsStarFill,
} from "react-icons/bs"
import { Carousel } from "react-responsive-carousel"

import Layout from "../../components/Layout"

import CarouselItem from "./CarouselItem"
import carouselTexts from "./carouselTexts"
import FindLoan from "./FindLoan"
import Testimonials from "./Testimonials"

import small2 from "/images/small-family.jpg"
import small1 from "/images/small-loan.jpg"
import small3 from "/images/small-student.jpg"

function App() {
  return (
    <>
      <Layout>
        <Carousel
          autoPlay
          emulateTouch
          infiniteLoop
          showArrows
          showStatus={false}
          showThumbs={false}
        >
          {carouselTexts.map((item) => (
            <CarouselItem
              buttonText={item.buttonText}
              image={item.image}
              text={item.text}
              title={item.title}
              key={item.text}
            />
          ))}
        </Carousel>
        <section className="px-6 py-28">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="mb-2 text-2xl font-bold capitalize sm:text-4xl">
              Let us help you find a loan
            </h1>
            <p className="mb-16 text-gray-500">
              We will match you with a loan program that meet your financial
              need.
            </p>

            <div className="grid grid-cols-1 gap-8 justify-items-center md:grid-cols-2 lg:grid-cols-3">
              <FindLoan
                image={small1}
                text="Discover flexible car financing options for new or used
                    cars, and specialty vehicles porta."
                title="Personal Loan"
              />
              <FindLoan
                image={small2}
                text="Discover flexible car financing options for new or used
                    cars, and specialty vehicles porta."
                title="House Loan"
              />
              <FindLoan
                image={small3}
                text="Discover flexible car financing options for new or used
                    cars, and specialty vehicles porta."
                title="Student Loan"
              />
            </div>
          </div>
        </section>
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
                  <h1 className="text-2xl font-semibold">
                    Receive Loan Amount
                  </h1>
                  <p className="text-gray-500">
                    After approved, we will can you to work out the details. We
                    sent money within hours of approved.
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
        <section className="px-6 py-28 bg bg-chart">
          <div className="max-w-6xl mx-auto text-center text-white">
            <h1 className="mb-2 text-2xl font-bold capitalize sm:text-4xl">
              Why people choose us
            </h1>
            <p className="mb-16 text-gray-200 max-w-xl text-lg mx-auto">
              We understand how to effectively guide you through the home loan
              or refinance process and avoid potential problems along the way.
            </p>

            <div className="grid grid-cols-1 gap-6 justify-items-center md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-gray-200 text-black px-6 py-8 flex flex-col gap-4 items-center rounded-lg max-w-sm">
                <div className="p-3 rounded-full bg-blue-500/10">
                  <BsCreditCard2Front className="text-2xl text-blue-500" />
                </div>
                <h2 className="text-lg font-semibold">Free Weekly Reporting</h2>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Iaculis neque sollicitudin nulla sit.
                </p>
              </div>
              <div className="bg-gray-200 text-black px-6 py-8 flex flex-col gap-4 items-center rounded-lg max-w-sm">
                <div className="p-3 rounded-full bg-blue-500/10">
                  <BsHeadset className="text-2xl text-blue-500" />
                </div>
                <h2 className="text-lg font-semibold">
                  Great Customer Service
                </h2>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Iaculis neque sollicitudin nulla sit.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Iaculis neque sollicitudin nulla sit.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Iaculis neque sollicitudin nulla sit.
                </p>
              </div>
            </div>
          </div>
        </section>
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
        <Testimonials />
      </Layout>
    </>
  )
}

export default App
