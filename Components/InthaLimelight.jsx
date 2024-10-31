import React from "react";
import Container from "./Container";
import Title from "./Title";
import limelightImageOne from "../public/assets/LimelightImageOne.png";
import limelightImageTow from "../public/assets/LimelightImageTow.png";
import limelightImageThree from "../public/assets/LimelightImageThree.png";
import limelightImageFour from "../public/assets/LimelightImageFour.png";
import Flex from "./Flex";
import LimelightCollct from "../Components/LimelightCollct.jsx";

const InthaLimelight = () => {
  return (
    <section className="bg-white pt-[76px]">
      <Container>
        <Title Name="In The Limelight" />
        <Flex className=" justify-between mt-[70px] lg:flex-row flex-wrap flex-col items-center xl:gap-7 sm:flex-row sm:justify-normal md:gap-10 xl:justify-normal sm:gap-10  md:flex-row ">
          <LimelightCollct
            ImageUrl={limelightImageOne}
            Name="Black Sweatshirt with ...."
            BrandName="Jhanvi’s  Brand"
            Prize="$123.00"
          />
          <LimelightCollct
            ImageUrl={limelightImageTow}
            Name="line Pattern Black H..."
            BrandName="AS’s  Brand"
            Prize="$37.00"
          />
          <LimelightCollct
            ImageUrl={limelightImageThree}
            Name="Black Shorts"
            BrandName="MM’s  Brand"
            Prize="$37.00"
          />
          <LimelightCollct
            ImageUrl={limelightImageFour}
            Name="Levender Hoodie with ...."
            BrandName="Nike’s  Brand"
            Prize="$119.00"
          />
        </Flex>
      </Container>
    </section>
  );
};

export default InthaLimelight;
