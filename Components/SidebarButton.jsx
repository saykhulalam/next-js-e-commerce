import React from "react";

const SidebarButton = ({ Icon, ButtonName, IconTow, isExpanded }) => {
  return (
    <button className="w-full h-[66px] border-[1px] tracking-[1px] flex items-center justify-between px-[30px] text-common-black font-causten font-semibold">
      {ButtonName}
      {isExpanded ? IconTow : Icon}
    </button>
  );
};

export default SidebarButton;
