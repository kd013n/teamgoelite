import SiteHeader from "../../components/SiteHeader";
import ProductsGrid from "../../components/ProductsGrid";
import SiteFooter from "../../components/SiteFooter";

export default function CategoryPage({
  params,
}: {
  params: { categories: string };
}) {
  const category = params.categories || "all";

  return (
    <div>
      <SiteHeader />
      <ProductsGrid initialCategory={category} />
      <SiteFooter />
    </div>
  );
}
