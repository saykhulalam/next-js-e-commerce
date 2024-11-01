"use client";
import React, { useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import NaveListItem from "./NaveListItem";
import { ImMenu } from "react-icons/im";
import NaveSarch from "./NaveSarch";
import Link from "next/link";
import NaveIcon from "./naveIcon";
import Image from "next/image";
import Logo from "../public/assets/Logo.png";

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
              <Image width={80} src={Logo} />
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
