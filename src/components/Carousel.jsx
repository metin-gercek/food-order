import React from "react";
import Image from "next/image";
import Title from "./ui/Title";
import Slider from "react-slick";

const Carousel = () => {
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
            <Title addClass="text-5xl">Fast Food Restaurant</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Indulge in a Flavorful Symphony at BiteLecious! Savor our
              mouthwatering pizzas, juicy hamburgers, and refreshing beverages
              for a culinary experience that will leave you craving for more.
            </p>
            <button className="btn-primary">Order Now</button>
          </div>
        </div>
        <div>
          <div className="mt-48 container mx-auto  text-white flex flex-col items-start gap-y-8">
            <Title addClass="text-5xl">Fast Food Restaurant</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Taste the Perfect Harmony of Pizza, Burgers, and More! BiteLecious
              offers a delectable assortment of handcrafted pizzas, gourmet
              burgers, and a delightful range of beverages to satisfy your
              cravings. Prepare for a tantalizing journey of flavors!
            </p>
            <button className="btn-primary">Order Now</button>
          </div>
        </div>
        <div>
          <div className="mt-48 container mx-auto  text-white flex flex-col items-start gap-y-8">
            <Title addClass="text-5xl">Satisfy Your Culinary Desires</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Delicious Delights Await at BiteLecious! Dive into a world of
              scrumptious pizzas, juicy hamburgers, and refreshing beverages
              that will awaken your taste buds. Discover the ultimate blend of
              flavors and quality ingredients, prepared with love and served
              with a smile.
            </p>
            <button className="btn-primary">Order Now</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
