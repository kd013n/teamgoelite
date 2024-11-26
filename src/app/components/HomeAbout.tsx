"use client";

import Image from "next/image";
import {
  TrophyIcon,
  UserGroupIcon,
  StarIcon,
  ChevronLeftIcon,
} from "@heroicons/react/20/solid";

import about1Img from "../../public/images/Home/about1.jpg";
import about2Img from "../../public/images/Home/about2.jpg";
import about3Img from "../../public/images/Home/about3.jpg";
import about4Img from "../../public/images/Home/about4.jpg";

import { useState } from "react";

const images = [about1Img, about2Img, about3Img, about4Img];

export default function HomeTagline() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioning(false);
    }, 300); // Match with the transition duration
  };

  return (
    <div className="relative isolate overflow-hidden px-6 py-6 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="relative isolate px-8 lg:px-10">
        <div className="absolute inset-0 -z-10 overflow-hidden"></div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base leading-7 text-darkestText font-bold">
                  AXA Team Go Elite
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-buttons sm:text-5xl">
                  #KnowYouCan
                </h1>
                <div className="mt-6 max-w-xl text-base leading-6 text-midText lg:max-w-lg">
                  <p>
                    We are dedicated to promoting financial literacy and
                    advocating for risk management among Filipino families. We
                    aim to empower Filipinos by providing them with
                    opportunities to achieve financial freedom and improve their
                    overall financial well-being.
                  </p>
                </div>
                <p className="mt-8 text-lg leading-6 text-darkestText font-bold">
                  We mentor, we empower, and we lead you to be successful.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-midText">
                  <li className="flex gap-x-3">
                    <TrophyIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none text-buttons"
                    />
                    <span>
                      <strong className="font-semibold text-darkText">
                        Achievement Goes Here.
                      </strong>{" "}
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <UserGroupIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none text-buttons"
                    />
                    <span>
                      <strong className="font-semibold text-darkText">
                        Stat Goes Here.
                      </strong>{" "}
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui lorem cupidatat commodo.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <StarIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none text-buttons"
                    />
                    <span>
                      <strong className="font-semibold text-darkText">
                        Random Thingy Goes Here.
                      </strong>{" "}
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus. Et magna sit morbi lobortis.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-6 px-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden relative drop-shadow-lg">
            <div className="relative w-[50rem] aspect-[4/3] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 overflow-hidden">
              <Image
                alt=""
                src={images[currentImageIndex]}
                className={`object-cover transition-opacity duration-300 w-full h-full ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>

            {/* Slide Tracker (Outside the Image but within Parent) */}
            <div className="absolute flex space-x-2 p-3 rounded-full z-20">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`block w-2.5 h-2.5 rounded-full ${
                    currentImageIndex === index ? "bg-links" : "bg-gray-400"
                  } transition-colors duration-300`}
                />
              ))}
            </div>

            {/* Chevron Button (Outside the Image but within Parent) */}
            <button
              onClick={handleNextImage}
              className="absolute top-1/2 -translate-y-1/2 ml-3 bg-background rounded-full hover:scale-105 transition-transform z-20"
            >
              <ChevronLeftIcon className="size-10 text-gray-400 hover:text-links" />
            </button>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/2 rotate-[45deg] bg-gradient-to-tr from-[#db5353] to-[#4342a0] opacity-40 sm:right-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}
