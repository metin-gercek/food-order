import Campaigns from "../../components/Campaigns";
import Carousel from "../../components/Carousel";
import React from "react";
import MenuWrapper from "../../components/product/MenuWrapper";
import About from "@/components/About";
import Reservation from "@/components/Reservation";
import Customers from "@/components/customers/Customers";

const Index = ({categoryList }) => {
  return (
    <React.Fragment >
      <Carousel />
      <Campaigns />
      <MenuWrapper categoryList={categoryList}/>
      <About />
      <Reservation />
      <Customers />
    </React.Fragment>
  );
};

export default Index;
