import React from "react";
import Title from "../ui/Title";

const Footer = () => {
  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6 ">
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Contact Us</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <i className="fa fa-map-marker"></i>
                <span className="inline-block ml-2">Helsinki</span>
              </div>
              <div>
                <i className="fa fa-phone"></i>
                <span className="inline-block ml-2">Call +358 461234567</span>
              </div>
              <div>
                <i className="fa fa-envelope"></i>
                <span className="inline-block ml-2">bitelicious@bitelicious.com</span>
              </div>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[38px]">BiteLicious</Title>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum exercitationem repellat pariatur amet. Exercitationem.
            </p>
            <div className="flex items-center justify-center mt-5 gap-x-2">
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:text-primary transition-all"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:text-primary transition-all"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:text-primary transition-all"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:text-primary transition-all"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:text-primary transition-all"
              >
                <i className="fa fa-pinterest"></i>
              </a>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Opening Hours</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <span className="inline-block ml-2">Everyday</span>
              </div>
              <div>
                <span className="inline-block ml-2">10.00 Am -10.00 Pm</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-10">
          © 2022 All Rights Reserved By Metin Gercek
        </p>
      </div>
    </div>
  );
};

export default Footer;
