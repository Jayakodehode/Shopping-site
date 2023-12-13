import Container from "./components/container";
import ProductCard from "./components/product/ProductCard";
import { products } from "./utils/products";
import { truncateText } from "./utils/truncateText";

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {products.map((product: any) => {
            return <ProductCard key={product.id} data={product} />;
          })}
        </div>
      </Container>
    </div>
  );
}
