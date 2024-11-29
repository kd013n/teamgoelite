import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ProductsBanner from "../components/ProductsBanner";
import ProductsParent from "../components/ProductsParent";

export default function Products() {
  return (
    <div>
      <SiteHeader />
      <ProductsBanner />
      <ProductsParent />
      <SiteFooter />
    </div>
  );
}
