"use client";

import Image from "next/image";

interface ProductCardProps {
  data: any;
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="col-span-1 cursor-pointer border-[1.2px] bg-slate-50 border-slate-200 rounded-sm transistion hover:scale-105 text-center text-sm">
      <div className="flex flex-col item-center w-full gap-1">
        <div className="ascept-square overflow-hidden relative w-full">
          <Image
            fill
            className="w-full h-full object-notation"
            src={data.images[0].image}
            alt={data.name}
          />
        </div>
        <div>name</div>
        <div>reviews</div>
        <div>rating</div>
        <div>price</div>
      </div>
    </div>
  );
};
export default ProductCard;
