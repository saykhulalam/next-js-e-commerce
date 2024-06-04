import React from "react";
import List from "./List";
import ListItem from "./ListItem";
import Link from "next/link";

const NaveListItem = () => {
  return (
    <>
      <List className="xl:flex xl:gap-[40px] flex xl:flex-row flex-col gap-3 xl:mt-5 ">
        <ListItem className=" text-white  hover:font-bold little-lg:text-black font-causten text-[15px] xl:text-common-black lg:text-white tracking-[1px] select-none font-medium duration-200">
          Shop
        </ListItem>
        <Link href="/men">
          <ListItem className=" text-white hover:font-bold lg:text-white font-causten text-[15px] xl:text-common-black tracking-[1px] select-none font-medium duration-200 ">
            Men
          </ListItem>
        </Link>
        <Link href="/whomen">
          <ListItem className=" text-white hover:font-boldk lg:text-white font-causten text-[15px] xl:text-common-black tracking-[1px] select-none font-medium duration-200 ">
            Women
          </ListItem>
        </Link>
        <ListItem className=" text-white hover:font-bold lg:text-white font-causten text-[15px] xl:text-common-black tracking-[1px] select-none font-medium duration-200">
          Combos
        </ListItem>
        <ListItem className=" text-white  hover:font-bold lg:text-white font-causten text-[15px] xl:text-common-black tracking-[1px] select-none font-medium duration-200 ">
          Joggers
        </ListItem>
      </List>
    </>
  );
};

export default NaveListItem;
