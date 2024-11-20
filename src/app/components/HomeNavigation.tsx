import Image from "next/image";
import Link from "next/link";

import SampleImage from "../../public/images/Home/HomeMissionBanner.jpg";

const posts = [
  {
    id: 1,
    title: "Careers",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imagesrc: SampleImage,
  },
  {
    id: 2,
    title: "Products",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imagesrc: SampleImage,
  },
  {
    id: 3,
    title: "Testimonials",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imagesrc: SampleImage,
  },
  {
    id: 4,
    title: "Events",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imagesrc: SampleImage,
  },
  {
    id: 5,
    title: "About Us",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imagesrc: SampleImage,
  },
  {
    id: 6,
    title: "Support",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imagesrc: SampleImage,
  },
];

export default function HomeNavigation() {
  return (
    <div className="py-36 lg:scroll-mt-32" id="HomeNavigation">
      <div className="relative isolate px-8 lg:px-10">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 top-0 -z-10 transform-gpu overflow-hidden blur-2xl"
        >
          <div
            style={{
              clipPath:
                "polygon(10% 0%, 90% 5%, 100% 40%, 85% 95%, 50% 100%, 25% 75%, 5% 50%)",
            }}
            className="relative left-0 top-0 aspect-[1155/678] w-[36rem] translate-y-[-10%] rotate-[-10deg] bg-gradient-to-br from-[#db5353] to-[#4342a0] opacity-20 sm:w-[56rem]"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto lg:mx-0 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Discover TGE
            </h2>
            <p className="mt-3 md:mt-5 text-md leading-5 lg:text-lg lg:leading-8 text-midText">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid grid-cols-1 gap-x-3 gap-y-8 md:gap-y-12 lg:gap-y-18 md:mx-24 lg:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link href={post.href} key={post.id}>
                <article className="flex mx-auto max-w-xl flex-col items-start justify-between p-3 hover:scale-105 ease-linear duration-100">
                  <div className="flex items-center rounded-xl border-inherit overflow-hidden object-cover mb-6">
                    <Image
                      src={post.imagesrc}
                      height={0}
                      width={0}
                      alt="Image"
                    />
                  </div>
                  <div className="group relative">
                    <h3 className="text-lg text-center font-bold leading-3 lg:leading-6 text-darkText group-hover:text-darkestText">
                      <p>{post.title}</p>
                    </h3>
                    <p className="mt-2 px-6 line-clamp-2 text-sm text-center leading-6 text-midText">
                      {post.description}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 animate-bouncePath1"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e7a0a0] to-[#7d7adb] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-60 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-90 animate-bouncePath2"
        >
          <div
            style={{
              clipPath:
                "polygon(68% 32%, 89% 50%, 80% 10%, 75% 0%, 68% 28%, 45% 76%, 40% 62%, 25% 84%, 10% 44%, 50% 100%, 60% 50%, 25% 90%, 68% 32%)",
            }}
            className="relative left-[calc(50%-13rem)] aspect-[900/600] w-[30rem] -translate-x-1/2 rotate-[45deg] bg-gradient-to-tr from-[#e77e75] to-[#76a6d6] opacity-40 sm:left-[calc(50%-25rem)] sm:w-[60rem]"
          />
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-80 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-100 animate-bouncePath3"
        >
          <div
            style={{
              clipPath:
                "polygon(50% 0%, 75% 25%, 100% 50%, 75% 75%, 50% 100%, 25% 75%, 0% 50%, 25% 25%)",
            }}
            className="relative left-[calc(50%-15rem)] aspect-[800/800] w-[25rem] -translate-x-1/2 rotate-[60deg] bg-gradient-to-tr from-[#94a3f7] to-[#f88585] opacity-50 sm:left-[calc(50%-20rem)] sm:w-[50rem]"
          />
        </div>
      </div>
    </div>
  );
}
