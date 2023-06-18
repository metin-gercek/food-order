import React, { useEffect } from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";
import { useState } from "react";
import { set } from "mongoose";

const MenuWrapper = ({ categoryList, productList }) => {
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState([]);
  const [productLimit, setProductLimit] = useState(3);

  useEffect(() => {
    setFilter(
      productList.filter(
        (product) =>
          product.category === categoryList[active].title.toLowerCase()
      )
    );
  }, [categoryList, productList, active]);

  return (
    <div className="container mx-auto  mb-16">
      <div className="flex flex-col items-center w-full">
        <Title addClass="text-[40px]">Our Menu</Title>
        <div className="mt-10">
          {categoryList &&
            categoryList.map((category, index) => (
              <button
                className={`px-6 py-2  rounded-3xl ${
                  index === active && "bg-secondary text-primary"
                } `}
                key={category._id}
                onClick={() => {
                  setActive(index);
                  setProductLimit(3);
                }}
              >
                {category.title}
              </button>
            ))}
        </div>
      </div>
      <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 min-h-[450px]">
        {filter.length > 0 &&
          filter
            .slice(0, productLimit)
            .map((product) => <MenuItem key={product._id} product={product} />)}
      </div>
      <div className="flex justify-center w-full mt-8 ">
        {filter.length <= productLimit ? (
          <button
            disabled={filter.length <= productLimit}
            className="btn-primary"
            onClick={() => setProductLimit(productLimit + 3)}
          >
            No More Product
          </button>
        ) : (
          <button
            className="btn-primary"
            onClick={() => setProductLimit(productLimit + 3)}
          >
            View More
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuWrapper;
