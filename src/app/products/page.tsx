import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ProductsBanner from "../components/ProductsBanner";
import ProductsFNA from "../components/ProductsFNA";
import ProductsNavigation from "../components/ProductsNavigation";

export default function Products() {
  return (
    <div>
      <SiteHeader />
      <ProductsBanner />
      <ProductsFNA />
      <ProductsNavigation />
      <SiteFooter />
    </div>
  );
}
