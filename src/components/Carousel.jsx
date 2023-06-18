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
            <Title addClass="text-5xl">Indulge in Delicious Delights</Title>
            <p className="text-sm sm:w-2/5 w-full">
            At Bitelecious, we invite you to experience a world of delectable delights. Our menu is filled with a tantalizing array of fast food and pizza options that will satisfy your cravings. From sizzling burgers to mouthwatering pizzas and everything in between, we have got something for everyone. Step into our restaurant and let your taste buds embark on a flavor-filled adventure.</p>
            <button className="btn-primary">Order Now</button>
          </div>
        </div>
        <div>
          <div className="mt-48 container mx-auto  text-white flex flex-col items-start gap-y-8">
            <Title addClass="text-5xl">Crafted with Passion and Precision</Title>
            <p className="text-sm sm:w-2/5 w-full">
            At Bitelecious, we believe that great food starts with great ingredients. That is why we source only the freshest and finest ingredients to create our culinary masterpieces. Our skilled chefs work with passion and precision, infusing each dish with unforgettable flavors. From our perfectly melted cheese to our secret blend of spices, every bite at Bitelecious is a celebration of taste and quality.
            </p>
            <button className="btn-primary">Order Now</button>
          </div>
        </div>
        <div>
          <div className="mt-48 container mx-auto  text-white flex flex-col items-start gap-y-8">
            <Title addClass="text-5xl">Your Go-To Spot for Quick and Tasty Meals</Title>
            <p className="text-sm sm:w-2/5 w-full">
            We understand that in todays fast-paced world, time is of the essence. That is why Bitelecious is committed to providing fast, friendly, and convenient service. Whether you are dining in, taking out, or opting for delivery, we strive to ensure your experience is seamless and enjoyable. Our attentive staff is always ready to assist, making sure you get your hands on our mouthwatering creations without any hassle. Bitelecious is your go-to spot for satisfying your cravings with quick and tasty meals.
            </p>
            <button className="btn-primary">Order Now</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
