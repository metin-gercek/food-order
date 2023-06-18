import Image from "next/legacy/image";
import React from "react";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className="bg-secondary py-14">
      <div className="container mx-auto flex items-center text-white gap-20 justify-center flex-wrap">
        <div className="flex justify-center">
          <div className="relative hidden sm:w-[445px] sm:h-[600px]  sm:flex justify-center w-[300px] h-[450px]">
            <Image src="/images/about-img.png" alt="" layout="fill" />
          </div>
        </div>
        <div className="md:w-1/2 ">
          <Title addClass="text-[40px]">We Are BiteLecious</Title>
          <p className="my-5 flex flex-col items-center">
            We, at Bitelecious, are a vibrant and dynamic fast food and pizza
            restaurant that caters to the cravings of food enthusiasts. With our
            diverse menu filled with mouthwatering dishes, prepared with the
            freshest ingredients and meticulous attention to detail, we offer a
            delightful dining experience. Our commitment to fast service without
            compromising on quality, coupled with our friendly and attentive
            staff, ensures customer satisfaction. The inviting ambiance of our
            restaurant creates the perfect setting for a casual meal, and
            whether you choose to dine in, take out, or have our food delivered,
            we guarantee an unforgettable culinary journey.
          </p>
          <button className="btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
