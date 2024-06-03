import React from "react";
import Container from "./Container";
import Title from "./Title";
import Flex from "./Flex";
import Image from "next/image";
import savingImgOne from "../public/assates/savingImgOne.png";
import savingImgTow from "../public/assates/savingImgTow.png";
import savingImgThree from "../public/assates/savingImgThree.png";
import savingImgFour from "../public/assates/savingImgFour.png";
import savingImgFive from "../public/assates/savingImgFive.png";
import savingImgSix from "../public/assates/MeddileBanner.png";

const BigSavingZone = () => {
  return (
    <section className="bg-white pt-[100px]">
      <Container>
        <Title Name="Big Saving Zone" />
        <Flex className=" justify-between mt-[70px] sm:flex-row lg:flex-row flex-col gap-3">
          <div>
            <Image src={savingImgOne} />
          </div>
          <div>
            <Image src={savingImgTow} />
          </div>
          <div>
            <Image src={savingImgThree} />
          </div>
        </Flex>
        <Flex className=" gap-4 mt-[15px] lg:flex-row flex-col gap-3 sm:flex-row">
          <div>
            <Image src={savingImgFour} />
          </div>
          <div>
            <Image src={savingImgFive} />
          </div>
        </Flex>
        <div className="lg:mt-[100px] mt-8">
          <Image src={savingImgSix} />
        </div>
      </Container>
    </section>
  );
};

export default BigSavingZone;
