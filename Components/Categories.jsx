import React from "react";
import Image from "next/image";
import Flex from "./Flex";
import { FaArrowRightLong } from "react-icons/fa6";

const Categories = ({ ImageUrl, Name }) => {
  return (
    <div className="w-[270px] little-lg:mt-10 ">
      <Image alt="image" src={ImageUrl} />
      <Flex className=" justify-between items-center mt-[15px]">
        <div className="">
          <h2 className="text-[#2A2F2F] font-bold text-[17px] tracking-[1px] font-causten leading-[27px]">
            {Name}
          </h2>
          <button className="text-[#7F7F7F] text-[13px] font-medium font-causten leading-[27px] tracking-[1px]">
            Explore Now!
          </button>
        </div>
        <FaArrowRightLong className="text-[17px] text-[#797979]" />
      </Flex>
    </div>
  );
};

export default Categories;
