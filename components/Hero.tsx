import React from "react";
import { Inter } from "next/font/google";
import Button from "./Button";
import Calendar from "./Calendar";

const inter = Inter({ subsets: ["latin"] });

const Hero: React.FC = () => {
  return (
    <div className="py-10 sm:py-14 md:py-20">
      <h1 className="Inter text-5xl sm:text-text-6xl md:text-7xl text-center font-bold">
        <span className="textGradient">moDee</span> is your
        <span className="textGradient"> bestie!</span>
      </h1>
      <div className="mt-6 text-3xl sm:text-text-4xl md:text-4xl text-center font-bold w-full mx-auto max-w-[750px]">
        Track your mood here, and share whatever you wanna share! I'll keep it
        secret, just between you and me!
      </div>
      <div className="grid grid-cols-2 gap-4 w-fit mx-auto py-7">
        <Button text="Sign Up" />
        <Button text="Login" dark />
      </div>

      <Calendar />
    </div>
  );
};

export default Hero;
