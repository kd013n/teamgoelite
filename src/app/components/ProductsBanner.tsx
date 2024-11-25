import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function ProductsBanner() {
  return (
    <div className="relative isolate overflow-hidden bg-background pb-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="absolute left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#db5353] to-[#4342a0] opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-moveBackground"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 transform-gpu -translate-x-1/2 overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(50% 0%, 90% 20%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 10% 20%)",
            }}
            className="relative aspect-square w-[45rem] bg-gradient-to-br from-[#ff7f50] to-[#6a5acd] opacity-40 animate-moveBackground"
          />
          {/* Shape 2 */}
          <div
            style={{
              clipPath:
                "polygon(0% 0%, 100% 0%, 85% 40%, 70% 85%, 50% 100%, 30% 85%, 15% 40%)",
            }}
            className="absolute -left-36 bottom-16 aspect-square w-[35rem] bg-gradient-to-tr from-[#4873d1] to-[#ff2c2c] opacity-30 animate-moveBackground2"
          />
          {/* Shape 3 */}
          <div
            style={{
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            }}
            className="absolute left-36 -bottom-20 aspect-square w-[40rem] bg-gradient-to-bl from-[#ff7a7a] to-[#574de0] opacity-50 animate-moveBackground3"
          />
        </div>
      </div>
      <div className="py-72 px-16 xl:px-48 sm:py-64 lg:py-56">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-sm md:max-w-lg -mt-28 lg:mt-auto">
            <p className="text-base leading-7 text-lightText font-bold">
              AXA Team Go Elite
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Product Solutions
            </h1>
            <p className="mt-4 text-md md:text-lg text-midText">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium eligendi tempora ex beatae laboriosam quisquam. Sequi
              architecto sit aperiam itaque eos provident iusto! Voluptates quos
              dolore odit asperiores iusto alias!
            </p>
          </div>
          <div>
            <div className="mt-10">
              <div
                aria-hidden="true"
                className="pointer-events-none md:absolute md:inset-y-0 md:mx-auto md:w-full md:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#products"
                className="inline-block rounded-md border border-transparent bg-buttons px-8 py-3 text-center font-medium text-white hover:bg-hoverButtons"
              >
                Browse <ArrowRightIcon className="inline-block size-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
