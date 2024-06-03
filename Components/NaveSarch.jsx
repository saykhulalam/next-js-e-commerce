import React from 'react'
import { IoSearch } from "react-icons/io5";

const NaveSarch = () => {
  return (
    <div className=" relative mt-4">
            <input
              className="bg-[#F6F6F6] w-[267px] h-[40px]  font-normal text-[15px] pl-[52px] rounded-[8px]"
              placeholder="Search"
              type="text"
            />
            <IoSearch className="text-common-black text-[20px] absolute top-[10px] left-4" />
          </div>
  )
}

export default NaveSarch
