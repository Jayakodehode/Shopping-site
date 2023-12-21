import { CartproductType } from "@/app/product/[productid]/ProductDetails";
import { createContext, useContext, useState } from "react";

type cartContextType = {
  cartTotalQty: number;
};

export const cartContext = createContext<cartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState(0);

  const value = {
    cartTotalQty,
  };
  return <cartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(cartContext);
  if (context === null)
    throw new Error("useCart must be used in cartContextProvider");

  return context;
};
