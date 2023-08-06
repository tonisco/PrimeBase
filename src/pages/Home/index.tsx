import { Carousel } from "react-responsive-carousel"

import Layout from "../../components/Layout"

import Achievement from "./Achievement"
import CarouselItem from "./CarouselItem"
import carouselTexts from "./carouselTexts"
import ChooseUs from "./ChooseUs"
import ContactDetails from "./ContactDetails"
import FindLoan from "./FindLoan"
import GetLoan from "./GetLoan"
import Testimonials from "./Testimonials"

import small2 from "/images/small-family.jpg"
import small1 from "/images/small-loan.jpg"
import small3 from "/images/small-student.jpg"

const Home = () => {
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
        <GetLoan />
        <ChooseUs />
        <Achievement />
        <Testimonials />
        <ContactDetails />
      </Layout>
    </>
  )
}

export default Home
