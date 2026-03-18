import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col text-center md:flex-row md:justify-between md:text-left">
        <div className="font-sansation text-[30px] font-light text-white md:mt-[268px] md:text-[50px] md:leading-[90px]">
          Hi, I'm Khang
          <br className="hidden md:block" />
          <span className="md:hidden">. </span>
          I'm a <br className="md:hidden" />
          <span className="font-sacramento text-[66px] text-[#CC66FF] md:text-[90px]">
            Software Developer
          </span>
        </div>

        <img src="hero.svg" className="mt-[83px] md:-ml-[200px]" />
      </div>
    </>
  );
};

export default Hero;
