import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ProductsBanner from "../components/ProductsBanner";
import ProductsGrid from "../components/ProductsGrid";

export default function Products() {
  return (
    <div>
      <SiteHeader />
      <ProductsBanner />
      <ProductsGrid initialCategory="all" />
      <SiteFooter />
    </div>
  );
}
