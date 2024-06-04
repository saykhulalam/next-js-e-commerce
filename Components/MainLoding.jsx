import React from "react";
import Container from "./Container";

const MainLoading = () => {
  return (
    <div>
      <Container>
        <div className="flex items-center gap-3 justify-center mt-15 mb-20">
          <div className="w-[30px] h-[30px] rounded-full border-[6px] border-gray-400 border-t-transparent animate-spin"></div>
          <h5 className="font-sans font-bold text-[20px] text-gray-500 flex items-center">
            Loading<span className="animate-dot1">.</span>
            <span className="animate-dot2">.</span>
            <span className="animate-dot3">.</span>
          </h5>
        </div>
      </Container>
    </div>
  );
};

export default MainLoading;
