import React from "react";
import Flex from "./Flex";
import Image from "next/image";
import { Rate } from "antd";
const FeedbackCard = ({ ImageUrl, Name, Paragraph }) => {
  return (
    <div className=" sm:w-[300px] md:w-[250px] lg:w-[320px]  md:h-[450px] h-[350px] xl:h-[310px] lg:h-[360px] sm:h-[400px] px-[23px] py-[23px] border-[1px] rounded-[10px] xl:w-[396px]">
      <Flex className=" justify-between">
        <div className="">
          <Image alt="feedback image" src={ImageUrl} />
          <h2 className="text-[22px] font-coresance text-common-black tracking-[1px] font-medium mt-[20px] md:text-[15px] sm:text-[15px]">
            {Name}
          </h2>
        </div>
        <div>
          <Rate value={4} />
        </div>
      </Flex>
      <p className=" text-[#807D7E] text-[14px] font-causten font-normal tracking-[1px] text-justify mt-[20px] leading-[18px]">
        {Paragraph}
      </p>
    </div>
  );
};

export default FeedbackCard;
