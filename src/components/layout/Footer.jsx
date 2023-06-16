import { useEffect, useState } from "react";
import Title from "../ui/Title";
import axios from "axios";
import { set } from "mongoose";

const Footer = () => {
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    const getFooter = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/footer`
      );
      setFooter(response.data[0]);
    };
    getFooter();
  }, []);


  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6 ">
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Contact Us</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <a href={footer?.location} target="_blank" >
                  <i className="fa fa-map-marker"></i>
                  <span className="inline-block ml-2">Helsinki</span>
                </a>
              </div>
              <div>
                <a href={`tel:${footer?.phoneNumber}`}>
                  <i className="fa fa-phone"></i>
                  <span className="inline-block ml-2">Call {footer?.phoneNumber}</span>
                </a>
              </div>
              <div>
                <a href={`mailto:${footer?.email}`}>
                  <i className="fa fa-envelope"></i>
                  <span className="inline-block ml-2">
                  {footer?.email}
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[38px]">BiteLicious</Title>
            <p className="mt-3">
            {footer?.desc}
            </p>
            <div className="flex items-center justify-center mt-5 gap-x-2">
              {footer?.socialMedia?.map((item) => (
                <a
                href={item.link} key={item._id} target="_blank" rel="noreferrer"
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:text-primary transition-all"
              >
                <i className={item.icon}></i>
              </a>
              )) }
       
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Opening Hours</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <span className="inline-block ml-2">{footer.openingHours?.day}</span>
              </div>
              <div>
                <span className="inline-block ml-2">{footer.openingHours?.hour}</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-10">
        Copyright &copy; 2023 All Rights Reserved By Metin Gercek
        </p>
      </div>
    </div>
  );
};

export default Footer;
