import { Inter } from "next/font/google";
import React, { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], weight: ["400"] });

interface ButtonProps {
  text?: string;
  dark?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, dark }) => {
  return (
    <button
      className={
        "rounded-full overflow-hidden duration-200 hover:opacity-60 border-2 border-solid border-indigo-600" +
        (dark ? "text-white bg-amber-400 border-amber-600" : "text-indigo-600")
      }
    >
      <p
        className={
          "px-6 sm:px-10 whitesepace-nowrap py-2 sm:py-3 font-bold text-lg" +
          inter.className
        }
      >
        {text}
      </p>
    </button>
  );
};

export default Button;
