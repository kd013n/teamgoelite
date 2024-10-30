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

import styles from "../page.module.scss";
import TGELogo from "../../public/logo.png";

export default function SiteFooter() {
  return (
    <>
      <footer className={styles.footerTop}>
        <nav>
          <h6 className={styles.footerTopTitleLink}>Careers</h6>
          <Link href="/" className={styles.footerTopLink}>
            Financial Adviser
          </Link>
          <Link href="/" className={styles.footerTopLink}>
            Unit Head
          </Link>
          <Link href="/" className={styles.footerTopLink}>
            Associate Branch Head
          </Link>
          <Link href="/" className={styles.footerTopLink}>
            Branch Head
          </Link>
          <br />
          <br />
          <Link href="/" className={styles.footerTopLink}>
            Travels and Incentives
          </Link>
          <Link href="/" className={styles.footerTopLink}>
            High-Income Earners
          </Link>
        </nav>
        <nav>
          <h6 className={styles.footerTopTitleLink}>Products</h6>
          <Link href="/" className={styles.footerTopLink}>
            Health and Critical Illness
          </Link>
          <Link href="/" className={styles.footerTopLink}>
            Income Protection
          </Link>
          <Link href="/" className={styles.footerTopLink}>
            Lifestyle Protection
          </Link>
          <Link href="/" className={styles.footerTopLink}>
            Education
          </Link>
          <Link href="/" className={styles.footerTopLink}>
            Retirement
          </Link>
          <Link href="/" className={styles.footerTopLink}>
            Savings and Investment
          </Link>
          <Link href="/" className={styles.footerTopLink}>
            General Insurance
          </Link>
        </nav>
        <nav>
          <h6 className={styles.footerTopTitleLink}>Support</h6>
          <Link href="/" className={styles.footerTopLink}>
            Resources
          </Link>
          <Link href="/" className={styles.footerTopLink}>
            Locate Us
          </Link>
          <Link href="/" className={styles.footerTopLink}>
            FAQs
          </Link>
          <span className="py-3">
            <h6 className={styles.footerTopTitleLink}>About</h6>
            <h6 className={styles.footerTopTitleLink}>Events</h6>
            <h6 className={styles.footerTopTitleLink}>Testimonials</h6>
          </span>
        </nav>

        <nav className="max-w-48">
          <h6 className={styles.footerTopTitle}>Contact Us</h6>
          <Link href="/" className={styles.footerTopLink}>
            <b className="px-3">
              <FontAwesomeIcon icon={faEnvelope} />
            </b>
            info@teamgoelite.com
          </Link>
          <Link href="/" className={styles.footerTopLink}>
            <b className="px-3">
              <FontAwesomeIcon icon={faPhone} />
            </b>
            +63 998 999 6517
          </Link>
          <Link
            href="/https://maps.app.goo.gl/hcGjVByp2RqLRZ118"
            className={styles.footerTopLink}
          >
            <div className="flex flex-row">
              <b className="px-3">
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
      <footer className={styles.footerBottom}>
        <aside className="grid-flow-col items-center ">
          <Image
            src={TGELogo}
            alt="Team Go Elite Logo"
            width={0}
            height={0}
            className="max-w-36 object-cover"
          />
          <p className="my-auto px-3">
            <span className="font-bold text-2xl">Team Go Elite</span>
            <br />
            [short tagline] since 2009
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4 text-sm">
            <Link href="/">
              <FontAwesomeIcon
                icon={faFacebook}
                className={styles.footerIcons}
              />
            </Link>
            <Link href="/">
              <FontAwesomeIcon
                icon={faYoutube}
                className={styles.footerIcons}
              />
            </Link>
            <Link href="/">
              <FontAwesomeIcon
                icon={faXTwitter}
                className={styles.footerIcons}
              />
            </Link>
            <Link href="/">
              <FontAwesomeIcon
                icon={faInstagram}
                className={styles.footerIcons}
              />
            </Link>
            <Link href="/">
              <FontAwesomeIcon icon={faTiktok} className={styles.footerIcons} />
            </Link>
          </div>
        </nav>
      </footer>
    </>
  );
}
