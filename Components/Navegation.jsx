"use client";
import React, { useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import NaveListItem from "./NaveListItem";
import { ImMenu } from "react-icons/im";
import NaveSarch from "./NaveSarch";

import Link from "next/link";
import NaveIcon from "./naveIcon";

const Navegation = () => {
  let [manuShow, setManuShow] = useState(true);
  let HandleManu = () => {
    setManuShow(!manuShow);
  };
  return (
    <nav className=" bg-white lg:py-[40px] py-[15px] little-lg:py-[5px]">
      <Container>
        <Flex className="flex xl:flex-row xl:items-center  justify-between items-center">
          <Link href="/">
            <div className="">
              <h1 className="text-black font-custom text-[34px]">Euphoria</h1>
              <p className="text-[#3C4242] font-custom tracking-[2px] text-[10px] pl-8 mt-[-18px]">
                keep it classy
              </p>
            </div>
          </Link>
          <div
            className={`xl:flex items-center justify-between gap-[100px] lg:gap-
            6 xl:static absolute lg:absolute lg:top-28 lg:left-2 top-20 xl:bg-transparent backdrop-blur-lg lg:backdrop-blur-lg rounded-md backdrop-brightness-50 xl:backdrop-brightness-100 p-4 z-10 ${
              manuShow ? "hidden lg:hidden" : "block"
            }`}
          >
            <NaveListItem />
            <NaveSarch />
            <NaveIcon />
          </div>
          <ImMenu
            onClick={HandleManu}
            className=" text-common-black text-[30px] xl:hidden"
          />
        </Flex>
      </Container>
    </nav>
  );
};

export default Navegation;
