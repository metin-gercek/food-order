import React from "react";
import Image from "next/image";
import Title from "./ui/Title";
import Slider from "react-slick";
import { useRouter } from "next/router";

const Carousel = () => {
  const router = useRouter();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots) => (
      <div>
        <ul className="container mx-auto w-full text-start">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-2 h-2 border bg-white rounded-full"></div>
    ),
  };
  return (
    <div className="h-screen w-full -mt-[88px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className=" z-0 relative h-full w-full">
          <Image
            src="/images/hero-bg.png"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className="mt-48 container mx-auto  text-white flex flex-col items-start gap-y-8">
            <Title addClass="text-5xl">Welcome to Bitelecious</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Savor the Irresistible Flavors
            </p>{" "}
            <button
              className="btn-primary"
              onClick={() => router.push("/menu")}
            >
              Order Now
            </button>
          </div>
        </div>
        <div>
          <div className="mt-48 container mx-auto  text-white flex flex-col items-start gap-y-8">
            <Title addClass="text-5xl">
            Crafted with Passion
            </Title>
            <p className="text-sm sm:w-2/5 w-full">
            Culinary Excellence on Every Plate
            </p>
            <button
              className="btn-primary"
              onClick={() => router.push("/menu")}
            >
              Order Now
            </button>
          </div>
        </div>
        <div>
          <div className="mt-48 container mx-auto  text-white flex flex-col items-start gap-y-8">
            <Title addClass="text-5xl">
            Fast, Friendly, and Convenient
            </Title>
            <p className="text-sm sm:w-2/5 w-full">
            Your Satisfaction, Our Priority
            </p>
            <button
              className="btn-primary"
              onClick={() => router.push("/menu")}
            >
              Order Now
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
