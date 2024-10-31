import React from "react";
import Container from "./Container";
import Title from "./Title";
import Flex from "./Flex";
import Image from "next/image";
import savingImgOne from "../public/assets/savingImgOne.png";
import savingImgTow from "../public/assets/savingImgTow.png";
import savingImgThree from "../public/assets/savingImgThree.png";
import savingImgFour from "../public/assets/savingImgFour.png";
import savingImgFive from "../public/assets/savingImgFive.png";
import savingImgSix from "../public/assets/MeddileBanner.png";

const BigSavingZone = () => {
  return (
    <section className="bg-white pt-[100px]">
      <Container>
        <Title Name="Big Saving Zone" />
        <Flex className=" justify-between mt-[70px] sm:flex-row lg:flex-row flex-col gap-3">
          <div>
            <Image alt="image" src={savingImgOne} />
          </div>
          <div>
            <Image alt="image" src={savingImgTow} />
          </div>
          <div>
            <Image alt="image" src={savingImgThree} />
          </div>
        </Flex>
        <Flex className=" mt-[15px] lg:flex-row flex-col gap-3 sm:flex-row">
          <div>
            <Image alt="image" src={savingImgFour} />
          </div>
          <div>
            <Image alt="image" src={savingImgFive} />
          </div>
        </Flex>
        <div className="lg:mt-[100px] mt-8">
          <Image alt="image" src={savingImgSix} />
        </div>
      </Container>
    </section>
  );
};

export default BigSavingZone;
