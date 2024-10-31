import React from "react";
import Container from "./Container";
import Title from "./Title";
import Categories from "./Categories";
import MenimgOne from "../public/assets/menOne.png";
import MenimgTow from "../public/assets/menTow.png";
import MenimgThree from "../public/assets/menThree.png";
import MenimgFour from "../public/assets/menFour.png";
import MenimgFive from "../public/assets/menFive.png";
import MenimgSix from "../public/assets/menSix.png";
import MenimgSaven from "../public/assets/menSeven.png";
import MenimgEight from "../public/assets/menEight.png";
import Flex from "./Flex";

const CategoriesForMen = () => {
  return (
    <section className="bg-white pt-16 lg:pt-[100px]">
      <Container>
        <Title Name="Categories For Men" />
        <Flex className=" lg:flex-row flex-col gap-10 lg:justify-normal lg:gap-20 flex-wrap mt-14 lg:mt-[70px] items-center sm:flex-row sm:justify-center xl:justify-between xl:gap-2 ">
          <Categories ImageUrl={MenimgOne} Name="Shirts" />
          <Categories ImageUrl={MenimgTow} Name="SPrinted T-Shirts" />
          <Categories ImageUrl={MenimgThree} Name="Plain T-Shirt" />
          <Categories ImageUrl={MenimgFour} Name="Polo T-Shirt" />
          <Categories ImageUrl={MenimgFive} Name="Hoodies & Sweetshirt" />
          <Categories ImageUrl={MenimgSix} Name="Jeans" />
          <Categories ImageUrl={MenimgSaven} Name="Activewear" />
          <Categories ImageUrl={MenimgEight} Name="Boxers" />
        </Flex>
      </Container>
    </section>
  );
};

export default CategoriesForMen;
