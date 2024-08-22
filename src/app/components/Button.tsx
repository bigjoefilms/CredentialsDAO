import Image from "next/image";
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string
  onClick?: () => void; 
};

const Button = ({ type, title, icon,variant,onClick  }: ButtonProps) => {
  return (
    <button 
    className={`flex gap-3 px-[22px] py-[10px] items-center justify-center rounded-[6px] cursor-pointer font-normal transition-all hover:font-semibold whitespace-nowrap text-[16px] text-[#fff]  ${variant}`}
    type={type}
    onClick={onClick}
    >
      {icon && <Image src={icon} alt={title} width={18} height={18} />}
      {title}
    </button>
  );
};

export default Button;
