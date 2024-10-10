import Header from "./components/SiteHeader";
import HomeBanner from "./components/HomeBanner";
import SiteFooter from "./components/SiteFooter";
import HomeMission from "./components/HomeMission";
import HomeNavigation from "./components/HomeNavigation";
import HomeTagline from "./components/HomeTagline";

export default function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <HomeMission />
      <HomeNavigation />
      <HomeTagline />
      <SiteFooter />
    </>
  );
}
