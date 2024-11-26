import Header from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import HomeBanner from "./components/HomeBanner";
import HomeEthos from "./components/HomeEthos";
import HomeNavigation from "./components/HomeNavigation";
import HomeAbout from "./components/HomeAbout";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeBanner />
      <HomeEthos />
      <HomeNavigation />
      <HomeAbout />
      <SiteFooter />
    </div>
  );
}
