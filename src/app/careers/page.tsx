import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import CareersBanner from "../components/CareersBanner";
import CareersHighIncome from "../components/CareersHighIncome";
import CareersNavigation from "../components/CareersNavigation";
import CareersTravel from "../components/CareersTravel";

export default function Careers() {
  return (
    <div>
      <SiteHeader />
      <CareersBanner />
      <CareersNavigation />
      <CareersHighIncome />
      <CareersTravel />
      <SiteFooter />
    </div>
  );
}
