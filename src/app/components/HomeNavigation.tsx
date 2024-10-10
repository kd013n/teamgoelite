import Image from "next/image";

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
    <div className="bg-white py-24 lg:scroll-mt-32" id="HomeNavigation">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Discover TGE
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid grid-cols-1 gap-x-8 gap-y-6 md:gap-y-6 lg:mx-auto lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex mx-auto max-w-xl flex-col items-start justify-between p-6"
            >
              <div className="flex items-center rounded-xl border-inherit overflow-hidden object-cover mb-6">
                <Image src={post.imagesrc} height={0} width={0} alt="Image" />
              </div>
              <div className="group relative">
                <h3 className="mt-2 text-lg font-bold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
