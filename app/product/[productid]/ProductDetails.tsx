"useclient";

import { Rating } from "@mui/material";
//declaring types
interface ProductDetailsProps {
  data: any;
}
//this function for creating lines between sections
const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};
//getting data prop from page.tsx/product/[productid]
const ProductDetails: React.FC<ProductDetailsProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>Images</div>
      <div className="flex flex-col gap-2 text-sm">
        <h2 className="font-semibold text-2xl text-slate-700">{data.title}</h2>
        <div className="flex items-center gap-3">
          <Rating value={data.rating.rate} readOnly />
          <span>{data.rating.count} reviews</span>
        </div>
        <Horizontal />
        <div className="text-justify">{data.description}</div>
        <Horizontal />
        <div>
          <span className="font-bold ">Category: </span>
          {data.category}
        </div>
        <div>
          <span className="font-bold ">Brand: </span>
          {data.brand}
        </div>
        <Horizontal />
        <div>Price</div>
        <div>Quantity</div>
        <div>Add to cart</div>
      </div>
    </div>
  );
};
export default ProductDetails;
