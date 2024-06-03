import React from "react";

const SidebarButton = ({Icon,ButtonName}) => {
  return (
    <button className="w-full h-[66px] border-[1px] tracking-[1px] flex items-center justify-between px-[30px] text-common-black font-causten font-semibold">
      {ButtonName} {Icon}
    </button>
  );
};

export default SidebarButton;
