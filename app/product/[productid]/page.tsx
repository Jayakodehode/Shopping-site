import Container from "@/app/components/container";
import { product } from "@/app/utils/product";
import ProductDetails from "./ProductDetails";
interface Iparams {
  productid?: string;
}
const Product = ({ params }: { params: Iparams }) => {
  console.log("params", params);
  return (
    <div className="p-8">
      <Container>
        <ProductDetails data={product} />
      </Container>
    </div>
  );
};
export default Product;
