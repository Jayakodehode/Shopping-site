"use client";

import Button from "@/app/components/Button";
import ProductImage from "@/app/components/product/ProductImage";
import SetColor from "@/app/components/product/SetColor";
import SetQuantity from "@/app/components/product/SetQuantity";
import { product } from "@/app/utils/product";
import { Rating } from "@mui/material";
import { useCallback, useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
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
  //function for increasing quantity items
  const handleQtyIncrease = useCallback(() => {
    if (cartProduct.quantity === 59) {
      return;
    }
    setCartProduct((prev) => {
      const newQuantity = prev.quantity + 1;
      return { ...prev, quantity: newQuantity };
    });
  }, [cartProduct]);
  //function for decreasing quantity items
  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) {
      return;
    }
    setCartProduct((prev) => {
      const newQuantity = prev.quantity - 1;
      return { ...prev, quantity: newQuantity };
    });
  }, [cartProduct]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        {" "}
        <ProductImage
          cartProduct={cartProduct}
          product={product}
          handleColorSelect={handleColorSelect}
        />
      </div>
      <div className="flex flex-col gap-4 text-sm">
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
        <Horizontal />
        <SetQuantity
          cartProduct={cartProduct}
          handleQtyDecrease={handleQtyDecrease}
          handleQtyIncrease={handleQtyIncrease}
        />
        <Horizontal />
        <div className="max-w-[300px]">
          <Button
            label="Add To Cart"
            onClick={() => {
              alert("clicked");
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
