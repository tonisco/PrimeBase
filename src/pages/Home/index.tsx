import { Carousel } from "react-responsive-carousel"

import Layout from "../../components/Layout"

import CarouselItem from "./CarouselItem"
import carouselTexts from "./carouselTexts"

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
      </Layout>
    </>
  )
}

export default App
