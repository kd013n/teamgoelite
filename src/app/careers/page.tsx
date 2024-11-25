import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import CareersBanner from "../components/CareersBanner";
import CareersNavigation from "../components/CareersNavigation";

export default function Careers() {
  return (
    <div>
      <SiteHeader />
      <CareersBanner />
      <CareersNavigation />
      <SiteFooter />
    </div>
  );
}
