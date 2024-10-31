import React from "react";
import Container from "./Container";
import Title from "./Title";
import Flex from "./Flex";
import Image from "next/image";
import SavingimgOne from "../public/assets/savingImgOne.png";
import SavingimgTow from "../public/assets/savingImgTow.png";
import SavingimgThree from "../public/assets/savingImgThree.png";
import SavingimgFour from "../public/assets/savingImgFour.png";
import SavingimgFive from "../public/assets/savingImgFive.png";
import SavingimgSix from "../public/assets/meddileBanner.png";

const BigSavingZone = () => {
  return (
    <section className="bg-white pt-[100px]">
      <Container>
        <Title Name="Big Saving Zone" />
        <Flex className=" justify-between mt-[70px] sm:flex-row lg:flex-row flex-col gap-3">
          <div>
            <Image alt="image" src={SavingimgOne} />
          </div>
          <div>
            <Image alt="image" src={SavingimgTow} />
          </div>
          <div>
            <Image alt="image" src={SavingimgThree} />
          </div>
        </Flex>
        <Flex className=" mt-[15px] lg:flex-row flex-col gap-3 sm:flex-row">
          <div>
            <Image alt="image" src={SavingimgFour} />
          </div>
          <div>
            <Image alt="image" src={SavingimgFive} />
          </div>
        </Flex>
        <div className="lg:mt-[100px] mt-8">
          <Image alt="image" src={SavingimgSix} />
        </div>
      </Container>
    </section>
  );
};

export default BigSavingZone;
