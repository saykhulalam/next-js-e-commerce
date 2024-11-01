import React, { useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import SidebarButton from "./SidebarButton";
import List from "./List";
import ListItem from "./ListItem";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { Slider } from "antd";
import ColorPalet from "./ColorPalet";
import Flex from "./Flex";

const Sidebar = () => {
  let [fillterShow, setFillterShow] = useState(true);
  let [priceShow, setPriceShow] = useState(true);
  let [colorShow, setColorShow] = useState(true);
  let [sizeShow, setSizeShow] = useState(true);
  let [styleShow, setStyleShow] = useState(true);

  let handleFillterButton = () => {
    setFillterShow(!fillterShow);
  };

  let handlePriceButton = () => {
    setPriceShow(!priceShow);
  };

  let handleColorButton = () => {
    setColorShow(!colorShow);
  };

  let handleSizeButton = () => {
    setSizeShow(!sizeShow);
  };

  let handleStyleButton = () => {
    setStyleShow(!styleShow);
  };

  return (
    <>
      <div className="select-none border-[1px] border-b-0">
        <div onClick={handleFillterButton}>
          <SidebarButton Icon={<GiSettingsKnobs />} ButtonName="Filter" />
        </div>
        {fillterShow && (
          <List className="mt-[40px] px-[40px] py-[10px]">
            <ListItem className="text-[#8A8989] tracking-[1px] flex items-center justify-between mb-[18px] font-causten font-semibold">
              Tops
              <FaAngleRight />
            </ListItem>
            <ListItem className="text-[#8A8989] tracking-[1px] flex items-center justify-between mb-[18px] font-causten font-semibold">
              Printed T-shirts
              <FaAngleRight />
            </ListItem>
            <ListItem className="text-[#8A8989] tracking-[1px] flex items-center justify-between mb-[18px] font-causten font-semibold">
              Plain T-shirts
              <FaAngleRight />
            </ListItem>
            <ListItem className="text-[#8A8989] tracking-[1px] flex items-center justify-between mb-[18px] font-causten font-semibold">
              Kurti
              <FaAngleRight />
            </ListItem>
            <ListItem className="text-[#8A8989] tracking-[1px] flex items-center justify-between mb-[18px] font-causten font-semibold">
              Boxers
              <FaAngleRight />
            </ListItem>
            <ListItem className="text-[#8A8989] tracking-[1px] flex items-center justify-between mb-[18px] font-causten font-semibold">
              Full sleeve T-shirts
              <FaAngleRight />
            </ListItem>
            <ListItem className="text-[#8A8989] tracking-[1px] flex items-center justify-between mb-[18px] font-causten font-semibold">
              Joggers
              <FaAngleRight />
            </ListItem>
            <ListItem className="text-[#8A8989] tracking-[1px] flex items-center justify-between mb-[18px] font-causten font-semibold">
              Payjamas
              <FaAngleRight />
            </ListItem>
            <ListItem className="text-[#8A8989] tracking-[1px] flex items-center justify-between mb-[18px] font-causten font-semibold">
              Jeans
              <FaAngleRight />
            </ListItem>
          </List>
        )}
      </div>
      <div className="select-none border-[1px] border-b-0">
        <div onClick={handlePriceButton}>
          <SidebarButton
            Icon={priceShow ? <FaAngleUp /> : <FaAngleDown />}
            ButtonName="Price"
          />
        </div>
        {priceShow && (
          <div className="px-[34px] pt-[35px] pb-[35px]">
            <Slider
              range={{
                draggableTrack: true,
              }}
              defaultValue={[20, 50]}
            />
            <div className="flex justify-between mt-[20px]">
              <div className="w-[97px] h-[32px] border-[1px] rounded-xl flex items-center justify-center">
                <h4 className="text-[#3C4242] text-[16px] font-causten font-medium">
                  $70
                </h4>
              </div>
              <div className="w-[97px] h-[32px] border-[1px] rounded-xl flex items-center justify-center">
                <h4 className="text-[#3C4242] text-[16px] font-causten font-medium">
                  $600
                </h4>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="select-none border-[1px] border-b-0">
        <div onClick={handleColorButton}>
          <SidebarButton
            ButtonName="Colors"
            Icon={colorShow ? <FaAngleUp /> : <FaAngleDown />}
          />
        </div>
        {colorShow && (
          <Flex className="flex-wrap gap-[18px] px-[38px] pt-[40px] pb-[40px]">
            <ColorPalet Color="bg-purple-600" Name="Purple" />
            <ColorPalet Color="bg-black" Name="Black" />
            <ColorPalet Color="bg-red-500" Name="Red" />
            <ColorPalet Color="bg-orange-500" Name="Orange" />
            <ColorPalet Color="bg-sky-600" Name="Navy" />
            <ColorPalet Color="bg-white" Name="White" />
            <ColorPalet Color="bg-yellow-900" Name="Broom" />
            <ColorPalet Color="bg-green-500" Name="Green" />
            <ColorPalet Color="bg-yellow-400" Name="Yellow" />
            <ColorPalet Color="bg-gray-300" Name="Grey" />
            <ColorPalet Color="bg-pink-400" Name="Pink" />
            <ColorPalet Color="bg-blue-700" Name="Blue" />
          </Flex>
        )}
      </div>
      <div className="select-none border-[1px] border-b-0">
        <div onClick={handleSizeButton}>
          <SidebarButton
            ButtonName="Size"
            Icon={sizeShow ? <FaAngleUp /> : <FaAngleDown />}
          />
        </div>
        {sizeShow && (
          <Flex className="flex-wrap justify-between px-[36px] pb-[40px] pt-[30px]">
            <div className="mt-[18px] w-[61px] h-[32px] rounded-[8px] border-[2px] flex items-center justify-center">
              <h4 className="font-causten font-semibold text-[14px] text-[#3C4242]">
                XXS
              </h4>
            </div>
            <div className="mt-[18px] w-[61px] h-[32px] rounded-[8px] border-[2px] flex items-center justify-center">
              <h4 className="font-causten font-semibold text-[14px] text-[#3C4242]">
                XL
              </h4>
            </div>
            <div className="mt-[18px] w-[61px] h-[32px] rounded-[8px] border-[2px] flex items-center justify-center">
              <h4 className="font-causten font-semibold text-[14px] text-[#3C4242]">
                XS
              </h4>
            </div>
            <div className="mt-[18px] w-[61px] h-[32px] rounded-[8px] border-[2px] flex items-center justify-center">
              <h4 className="font-causten font-semibold text-[14px] text-[#3C4242]">
                S
              </h4>
            </div>
            <div className="mt-[18px] w-[61px] h-[32px] rounded-[8px] border-[2px] flex items-center justify-center">
              <h4 className="font-causten font-semibold text-[14px] text-[#3C4242]">
                M
              </h4>
            </div>
            <div className="mt-[18px] w-[61px] h-[32px] rounded-[8px] border-[2px] flex items-center justify-center">
              <h4 className="font-causten font-semibold text-[14px] text-[#3C4242]">
                L
              </h4>
            </div>
            <div className="mt-[18px] w-[61px] h-[32px] rounded-[8px] border-[2px] flex items-center justify-center">
              <h4 className="font-causten font-semibold text-[14px] text-[#3C4242]">
                XXL
              </h4>
            </div>
            <div className="mt-[18px] w-[61px] h-[32px] rounded-[8px] border-[2px] flex items-center justify-center">
              <h4 className="font-causten font-semibold text-[14px] text-[#3C4242]">
                3XL
              </h4>
            </div>
            <div className="mt-[18px] w-[61px] h-[32px] rounded-[8px] border-[2px] flex items-center justify-center">
              <h4 className="font-causten font-semibold text-[14px] text-[#3C4242]">
                4XL
              </h4>
            </div>
          </Flex>
        )}
      </div>
      <div className="select-none border-[1px]">
        <div onClick={handleStyleButton}>
          <SidebarButton
            ButtonName="Dress Style"
            Icon={styleShow ? <FaAngleUp /> : <FaAngleDown />}
          />
        </div>
        {styleShow && (
          <List className="px-[40px] py-[40px]">
            <ListItem className="text-[#8A8989] tracking-[1px] flex items-center justify-between mb-[18px] font-causten font-semibold">
              Classic
              <FaAngleRight />
            </ListItem>
            <ListItem className="text-[#8A8989] tracking-[1px] flex items-center justify-between mb-[18px] font-causten font-semibold">
              Casual
              <FaAngleRight />
            </ListItem>
            <ListItem className="text-[#8A8989] tracking-[1px] flex items-center justify-between mb-[18px] font-causten font-semibold">
              Business
              <FaAngleRight />
            </ListItem>
            <ListItem className="text-[#8A8989] tracking-[1px] flex items-center justify-between mb-[18px] font-causten font-semibold">
              Sport
              <FaAngleRight />
            </ListItem>
            <ListItem className="text-[#8A8989] tracking-[1px] flex items-center justify-between mb-[18px] font-causten font-semibold">
              Elegant
              <FaAngleRight />
            </ListItem>
            <ListItem className="text-[#8A8989] tracking-[1px] flex items-center justify-between mb-[18px] font-causten font-semibold">
              Formal (evening)
              <FaAngleRight />
            </ListItem>
          </List>
        )}
      </div>
    </>
  );
};

export default Sidebar;
