import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faXTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import TGELogo from "../../public/logo.png";

export default function SiteFooter() {
  return (
    <>
      <footer className="footer grid lg:grid-cols-4 md:grid-cols-2 md:grid-rows-2 lg:grid-rows-1 text-base-content p-16 px-24 xl:px-48 bg-footerBg">
        <nav className="flex flex-col gap-y-1">
          <h6 className="font-bold uppercase opacity-100 text-lg text-darkText py-1 hover:text-links">
            Careers
          </h6>
          <Link
            href="/"
            className="link font-medium no-underline text-midText hover:text-links"
          >
            Financial Adviser
          </Link>
          <Link
            href="/"
            className="link font-medium no-underline text-midText hover:text-links"
          >
            Unit Head
          </Link>
          <Link
            href="/"
            className="link font-medium no-underline text-midText hover:text-links"
          >
            Associate Branch Head
          </Link>
          <Link
            href="/"
            className="link font-medium no-underline text-midText hover:text-links"
          >
            Branch Head
          </Link>
          <br />
          <br />
          <Link
            href="/"
            className="link font-medium no-underline text-midText hover:text-links"
          >
            Travels and Incentives
          </Link>
          <Link
            href="/"
            className="link font-medium no-underline text-midText hover:text-links"
          >
            High-Income Earners
          </Link>
        </nav>
        <nav className="flex flex-col gap-y-1">
          <h6 className="font-bold uppercase opacity-100 text-lg text-darkText py-1 hover:text-links">
            Products
          </h6>
          <Link
            href="/"
            className="link font-medium no-underline text-midText hover:text-links"
          >
            Health and Critical Illness
          </Link>
          <Link
            href="/"
            className="link font-medium no-underline text-midText hover:text-links"
          >
            Income Protection
          </Link>
          <Link
            href="/"
            className="link font-medium no-underline text-midText hover:text-links"
          >
            Lifestyle Protection
          </Link>
          <Link
            href="/"
            className="link font-medium no-underline text-midText hover:text-links"
          >
            Education
          </Link>
          <Link
            href="/"
            className="link font-medium no-underline text-midText hover:text-links"
          >
            Retirement
          </Link>
          <Link
            href="/"
            className="link font-medium no-underline text-midText hover:text-links"
          >
            Savings and Investment
          </Link>
          <Link
            href="/"
            className="link font-medium no-underline text-midText hover:text-links"
          >
            General Insurance
          </Link>
        </nav>
        <nav className="flex flex-col gap-y-1">
          <h6 className="font-bold uppercase opacity-100 text-lg text-darkText py-1 hover:text-links">
            Support
          </h6>
          <Link
            href="/"
            className="link font-medium no-underline text-midText hover:text-links"
          >
            Resources
          </Link>
          <Link
            href="/"
            className="link font-medium no-underline text-midText hover:text-links"
          >
            Locate Us
          </Link>
          <Link
            href="/"
            className="link font-medium no-underline text-midText hover:text-links"
          >
            FAQs
          </Link>
          <span className="py-3">
            <h6 className="font-bold uppercase opacity-100 text-lg text-darkText py-1 hover:text-links">
              About
            </h6>
            <h6 className="font-bold uppercase opacity-100 text-lg text-darkText py-1 hover:text-links">
              Events
            </h6>
            <h6 className="font-bold uppercase opacity-100 text-lg text-darkText py-1 hover:text-links">
              Testimonials
            </h6>
          </span>
        </nav>

        <nav className="flex flex-col gap-y-1">
          <h6 className="font-bold uppercase opacity-100 text-lg text-darkText py-1 hover:text-links">
            Contact Us
          </h6>
          <Link
            href="/"
            className="link font-medium no-underline text-midText hover:text-links"
          >
            <b className="pr-3">
              <FontAwesomeIcon icon={faEnvelope} />
            </b>
            info@teamgoelite.com
          </Link>
          <Link
            href="/"
            className="link font-medium no-underline text-midText hover:text-links"
          >
            <b className="pr-3">
              <FontAwesomeIcon icon={faPhone} />
            </b>
            +63 998 999 6517
          </Link>
          <Link
            href="/https://maps.app.goo.gl/hcGjVByp2RqLRZ118"
            className="link font-medium no-underline text-midText hover:text-links"
          >
            <div className="flex flex-row">
              <b className="pr-3">
                <FontAwesomeIcon icon={faLocationDot} />
              </b>
              <p>
                Wellington Building, G/F & Mezzanine, Padre Burgos Ave, Binondo,
                Manila, Philippines
              </p>
            </div>
          </Link>
        </nav>
      </footer>
      <footer className="footer grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-y-5 text-base-content px-24 xl:px-48 py-8 text-darkText bg-footerBg2">
        <div className="grid grid-flow-col justify-self-center md:justify-self-start items-center">
          <Image
            src={TGELogo}
            alt="Team Go Elite Logo"
            width={0}
            height={0}
            className="max-w-36 object-cover"
          />
          <p className="pl-5 hidden lg:block">
            <span className="font-bold text-2xl">Team Go Elite</span>
            <br />
            &copy; 2024 TGE &#215; kd013n
          </p>
        </div>
        <nav className="justify-self-center md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4 text-sm">
            <Link href="/">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-2xl hover:text-buttons hover:font-bold"
              />
            </Link>
            <Link href="/">
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-2xl hover:text-buttons hover:font-bold"
              />
            </Link>
            <Link href="/">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-2xl hover:text-buttons hover:font-bold"
              />
            </Link>
            <Link href="/">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-2xl hover:text-buttons hover:font-bold"
              />
            </Link>
            <Link href="/">
              <FontAwesomeIcon
                icon={faTiktok}
                className="text-2xl hover:text-buttons hover:font-bold"
              />
            </Link>
          </div>
        </nav>
      </footer>
    </>
  );
}
