import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="py-10 sm:py-14 md:py-20">
      <h1 className="Inter text-5xl sm:text-text-6xl md:text-7xl text-center font-bold">
        <span className="textGradient">moDee</span> is your
        <span className="textGradient"> bestie!</span>
      </h1>
      <div className="mt-6 text-3xl sm:text-text-4xl md:text-4xl text-center">
        Track your mood here, and share whatever you wanna share! I'll keep it
        secret, just between you and me!
      </div>
    </div>
  );
};

export default Hero;
