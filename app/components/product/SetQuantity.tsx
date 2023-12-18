"use client";
import { CartproductType } from "@/app/product/[productid]/ProductDetails";

interface SetQtyProps {
  cartProduct: CartproductType;
  cartCounter?: boolean;
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
}
const btnStyles = "border-[1.2px] border-slate-700 px-2 rounded";

const SetQuantity: React.FC<SetQtyProps> = ({
  cartProduct,
  cartCounter,
  handleQtyIncrease,
  handleQtyDecrease,
}) => {
  return (
    <div className="flex gap-8 items-center">
      {cartCounter ? "null" : <div className="font-semibold">QUANTITY</div>}
      <div className="flex gap-3 items-center">
        <button className={btnStyles} onClick={handleQtyDecrease}>
          -
        </button>
        <div>{cartProduct.quantity}</div>
        <button className={btnStyles} onClick={handleQtyIncrease}>
          +
        </button>
      </div>
    </div>
  );
};
export default SetQuantity;
