import { Carousel } from "react-responsive-carousel"

import Layout from "../../components/Layout"

import CarouselItem from "./CarouselItem"
import carouselTexts from "./carouselTexts"
import FindLoan from "./FindLoan"

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

            <div className="grid grid-cols-1 gap-8 justify-items-center md:grid-cols-2 lg:grid-cols-3">
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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa, consequuntur! Tempore obcaecati
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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa, consequuntur! Tempore obcaecati
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default App
