import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  small?: boolean;
  outline?: boolean;
  disabled?: boolean;
  custom?: boolean;
  // icon: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<ButtonProps> = ({
  label,
  //icon:Icon,
  onClick,
  small,
  outline,
  disabled,
  custom,
}) => {
  return (
    <button
      disabled={disabled}
      className={`disabled:opacity-70 
      disabled:cursor-not-allowed 
       rounded-md hover:opacity-80 transition w-full flex items-center justify-center text-white text-md font-semibold p-5 gap-2
      ${outline ? "bg-white" : "bg-orange-700"}
      ${outline ? "text-slate-700" : "text-white"}
      ${outline ? "border-orange-700" : "border-white"}
      ${small ? "text-sm" : "text-md"}
      ${small ? "px-1 py-2" : "px-3 py-4"}`}
    >
      {label}
    </button>
  );
};
export default Button;
