import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="font-sansation mt-[268px] text-[50px] leading-[90px] font-light text-white">
          Hi, I'm Khang
          <br />
          I'm a{" "}
          <span className="font-sacramento text-[90px] text-[#CC66FF]">
            Software Developer
          </span>
        </div>

        <img src="hero.svg" className="mt-[83px] -ml-[200px]" />
      </div>
    </>
  );
};

export default Hero;
