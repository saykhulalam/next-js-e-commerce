import React from "react";
import Flex from "./Flex";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";

const LimelightCollct = ({ImageUrl, Name, BrandName, Prize}) => {
  return (
    <div className="w-[282px] mb-[50px]">
      <div className=" relative">
        <Image alt="image" src={ImageUrl} />
        <div className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center absolute right-3 top-5">
          <FaRegHeart className="text-[15px] text-common-black" />
        </div>
      </div>
      <Flex className=" justify-between items-center mt-[30px]">
        <div>
          <h2 className=" text-common-black text-[16px] font-semibold  font-causten">
            {Name}
          </h2>
          <h4 className="text-[#807D7E] text-[14px] font-medium font-causten mt-[5px]">
            {BrandName}
          </h4>
        </div>
        <div className="bg-[#F6F6F6] w-[82px] h-[36px] rounded-sm flex justify-center items-center">
          <h3 className=" text-[14px] font-bold text-common-black font-causten">
            {Prize}
          </h3>
        </div>
      </Flex>
    </div>
  )
}

export default LimelightCollct
