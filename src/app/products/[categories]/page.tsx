import { useRouter } from "next/compat/router";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ProductsBanner from "../../components/ProductsBanner";
import ProductsGrid from "../../components/ProductsGrid";

export default function CategoryPage() {
  const router = useRouter();
  const { categories } = router?.query || {};

  // Ensure the category is a string and default to "all"
  const category = Array.isArray(categories)
    ? categories[0]
    : categories || "all";

  return (
    <div>
      <SiteHeader />
      <ProductsBanner />
      <ProductsGrid initialCategory={category} />
      <SiteFooter />
    </div>
  );
}
