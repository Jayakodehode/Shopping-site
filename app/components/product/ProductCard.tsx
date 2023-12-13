"use client";

import { formatPrice } from "@/app/utils/formatPrice";
import { truncateText } from "@/app/utils/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: any;
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className="col-span-1 cursor-pointer border-[1.2px] bg-slate-50 border-slate-200 rounded-sm transistion hover:scale-105 text-center text-sm"
    >
      <div className="flex flex-col item-center w-full gap-1 p-5">
        <div
          className="ascept-square overflow-hidden relative w-full"
          style={{ height: "250px" }}
        >
          <Image
            fill
            priority
            src={data.image}
            alt={data.title}
            className=" w-full h-full object-rotation"
            sizes="(max-width: 600px) 80vw, (max-width: 1200px) 30vw, 800px"
          />
        </div>
        <div className="text-lg text-orange-700 font-bold">
          {truncateText(data.title)}
        </div>
        <div className="text-sm  font-semibold">{data.category}</div>
        <div className=" text-sm font-semibold  ">
          {formatPrice(data.price)}
        </div>
        <div>
          <Rating value={data.rating.rate} readOnly />
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
