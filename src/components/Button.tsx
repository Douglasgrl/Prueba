import React from "react";
import { cn } from "../utils/cn";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className, type, disabled }) => {
  return (
    <button
      className={cn(
        "w-[333px] bg-rick-skyBlue flex items-center justify-center mx-auto h-[51px] rounded-[8.5px] text-white text-[14px] font-book mb-10 hover:bg-rick-white hover:border-[1px] hover:border-rick-skyBlue hover:text-rick-skyBlue duration-300",
        className
      )}
      onClick={onClick}
      type={type ? type : "button"}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
