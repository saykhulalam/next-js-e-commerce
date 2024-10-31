import React from "react";
import Container from "./Container";
import Title from "./Title";
import Categories from "./Categories";
import menImgOne from "../public/assets/menOne.png";
import menImgTow from "../public/assets/menTow.png";
import menImgThree from "../public/assets/menThree.png";
import menImgFour from "../public/assets/menFour.png";
import menImgFive from "../public/assets/menFive.png";
import menImgSix from "../public/assets/menSix.png";
import menImgSaven from "../public/assates/menSeven.png";
import menImgEight from "../public/assates/menEight.png";
import Flex from "./Flex";

const CategoriesForMen = () => {
  return (
    <section className="bg-white pt-16 lg:pt-[100px]">
      <Container>
        <Title Name="Categories For Men" />
        <Flex className=" lg:flex-row flex-col gap-10 lg:justify-normal lg:gap-20 flex-wrap mt-14 lg:mt-[70px] items-center sm:flex-row sm:justify-center xl:justify-between xl:gap-2 ">
          <Categories ImageUrl={menImgOne} Name="Shirts" />
          <Categories ImageUrl={menImgTow} Name="SPrinted T-Shirts" />
          <Categories ImageUrl={menImgThree} Name="Plain T-Shirt" />
          <Categories ImageUrl={menImgFour} Name="Polo T-Shirt" />
          <Categories ImageUrl={menImgFive} Name="Hoodies & Sweetshirt" />
          <Categories ImageUrl={menImgSix} Name="Jeans" />
          <Categories ImageUrl={menImgSaven} Name="Activewear" />
          <Categories ImageUrl={menImgEight} Name="Boxers" />
        </Flex>
      </Container>
    </section>
  );
};

export default CategoriesForMen;
