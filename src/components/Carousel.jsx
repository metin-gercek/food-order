import React from "react";
import Image from "next/image";
import Title from "./layout/ui/Title";

const Carousel = () => {
  return (
    <div className=" h-screen w-full container mx-auto -mt-[88px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className=" z-0 relative h-full w-full">
          <Image
            src="/images/hero-bg.png"
            alt=""
            fill
            objectFit="cover"
          />
        </div>
      </div>
      <div className="relative text-white top-48 flex flex-col items-start gap-y-10">
        <Title addClass="text-6xl">Fast Food Restaurant</Title>
        <p className="text-sm sm:w-2/5 w-full">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ipsam
          ut delectus veniam ab blanditiis maiores aliquam accusantium,
          voluptatem alias inventore dolor corrupti magni illum.
        </p>
        <button className="btn-primary">Order Now</button>
      </div>
    </div>
  );
};

export default Carousel;
