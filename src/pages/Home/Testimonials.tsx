import { BsStarFill } from "react-icons/bs"

import person1 from "/images/person1.jpg"
import person2 from "/images/person2.jpg"
import person3 from "/images/person3.jpg"

const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
          Reviews from our trusted customers
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center gap-4">
              <img
                alt="Man"
                src={person1}
                className="h-16 w-16 rounded-full object-cover"
              />

              <div>
                <div className="flex justify-center gap-0.5 text-blue-500">
                  {Array.from({ length: 5 }, (_, i) => (
                    <BsStarFill key={i} className="h-4 w-4" />
                  ))}
                </div>

                <p className="mt-1 text-lg font-medium text-gray-700">
                  Nina boudge
                </p>
              </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              voluptatem alias ut provident sapiente repellendus.
            </p>
          </blockquote>

          <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center gap-4">
              <img
                alt="Man"
                src={person2}
                className="h-16 w-16 rounded-full object-cover"
              />

              <div>
                <div className="flex justify-center gap-0.5 text-blue-500">
                  {Array.from({ length: 5 }, (_, i) => (
                    <BsStarFill key={i} className="h-4 w-4" />
                  ))}
                </div>

                <p className="mt-1 text-lg font-medium text-gray-700">
                  James Gunn
                </p>
              </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              voluptatem alias ut provident sapiente repellendus.
            </p>
          </blockquote>

          <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center gap-4">
              <img
                alt="Man"
                src={person3}
                className="h-16 w-16 rounded-full object-cover"
              />

              <div>
                <div className="flex justify-center gap-0.5 text-blue-500">
                  {Array.from({ length: 5 }, (_, i) => (
                    <BsStarFill key={i} className="h-4 w-4" />
                  ))}
                </div>

                <p className="mt-1 text-lg font-medium text-gray-700">
                  Paul Starr
                </p>
              </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              voluptatem alias ut provident sapiente repellendus.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
