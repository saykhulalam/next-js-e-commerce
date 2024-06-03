import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";

const naveIcon = () => {
  return (
    <div className=" flex gap-[12px] mt-4">
            <div className="w-[44px] h-[44px] bg-[#F6F6F6] flex items-center justify-center rounded-[8px]">
              <FaRegHeart className="text-[20px] text-common-black" />
            </div>
            <div className="w-[44px] h-[44px] bg-[#F6F6F6] flex items-center justify-center rounded-[8px]">
              <RiAccountCircleLine className="text-[20px] text-common-black" />
            </div>
            <div className="w-[44px] h-[44px] bg-[#F6F6F6] flex items-center justify-center rounded-[8px]">
              <IoCartOutline className="text-[20px] text-common-black" />
            </div>
          </div>
  )
}

export default naveIcon
