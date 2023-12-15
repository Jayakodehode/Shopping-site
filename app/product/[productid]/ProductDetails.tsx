"use client";

import SetColor from "@/app/components/product/SetColor";
import { Rating } from "@mui/material";
import { useCallback, useState } from "react";
//declaring types
interface ProductDetailsProps {
  data: any;
}
//declring type for details in cart product
export type CartproductType = {
  id: string;
  title: string;
  description: string;
  category: string;
  brand: string;
  price: number;
  quantity: number;
  selectedImg: SelectedImageType;
};

//declaring types for image
export type SelectedImageType = {
  color: string;
  image: string;
  colorCode: string;
};
//this function for creating lines between sections
const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};
//getting data prop from page.tsx/product/[productid]
const ProductDetails: React.FC<ProductDetailsProps> = ({ data }) => {
  const [cartProduct, setCartProduct] = useState<CartproductType>({
    id: data.id,
    title: data.title,
    description: data.description,
    category: data.category,
    brand: data.brand,
    price: data.price,
    quantity: 1,
    selectedImg: { ...data.images[0] },
  });

  const handleColorSelect = useCallback(
    (value: SelectedImageType) => {
      //here we are updating the selected image
      setCartProduct((prev) => {
        return { ...prev, selectedImg: value };
      });
    },
    [cartProduct.selectedImg]
  );

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
        <div>
          <SetColor
            images={data.images}
            cartProduct={cartProduct}
            handleColorSelect={handleColorSelect}
          />
        </div>
        <div>Quantity</div>
        <div>Add to cart</div>
      </div>
    </div>
  );
};
export default ProductDetails;
