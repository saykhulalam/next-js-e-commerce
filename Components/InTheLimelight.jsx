import React from "react";
import Container from "./Container";
import Title from "./Title";
import LimelightCollection from "./LimelightCollection";
import limelightImageOne from "../public/assates/LimelightImageOne.png";
import limelightImageTow from "../public/assates/LimelightImageTow.png";
import limelightImageThree from "../public/assates/LimelightImageThree.png";
import limelightImageFour from "../public/assates/LimelightImageFour.png";
import Flex from "./Flex";
const InTheLimelight = () => {
  return (
    <section className="bg-white pt-[76px]">
      <Container>
        <Title Name="In The Limelight" />
        <Flex className=" justify-between mt-[70px] lg:flex-row flex-wrap flex-col items-center xl:gap-7 sm:flex-row sm:justify-normal md:gap-10 xl:justify-normal sm:gap-10  md:flex-row ">
          <LimelightCollection
            ImageUrl={limelightImageOne}
            Name="Black Sweatshirt with ...."
            BrandName="Jhanvi’s  Brand"
            Prize="$123.00"
          />
          <LimelightCollection
            ImageUrl={limelightImageTow}
            Name="line Pattern Black H..."
            BrandName="AS’s  Brand"
            Prize="$37.00"
          />
          <LimelightCollection
            ImageUrl={limelightImageThree}
            Name="Black Shorts"
            BrandName="MM’s  Brand"
            Prize="$37.00"
          />
          <LimelightCollection
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

export default InTheLimelight;
