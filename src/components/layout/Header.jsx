import React from "react";
import Logo from "./ui/Logo";
import {FaUserAlt, FaShoppingCart, FaSearch} from "react-icons/fa";

const Header = () => {
  return (
    <div className="h-[5.5rem] bg-secondary ">
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <div>
          <Logo />
        </div>
        <nav>
          <ul className="flex gap-x-2">
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Menu</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">About</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Book Table</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-4 item-center">
            <a href="">
                <FaUserAlt className="text-2xl"/>
            </a>
            <a href="">
                <FaShoppingCart className="text-2xl"/>
            </a>
            <a href="">
                <FaSearch className="text-2xl"/>
            </a>
            <a href=""><button className="btn-primary">Order Now</button></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
