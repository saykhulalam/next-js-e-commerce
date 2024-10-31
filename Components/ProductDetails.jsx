"use client";
import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "next/image";
import Slider from "react-slick";
import DetilsOne from "../public/assets/detalisOne.png";
import DetilsTow from "../public/assets/detilsTow.png";
import DetilsThree from "../public/assets/detalisThree.png";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import DetilsBig from "../public/assets/detailsBig.png";
import "slick-carousel/slick/slick.css";
import { Rate } from 'antd';

const ProductDetails = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#3C4242",
          width: "21px",
          height: "21px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          color: "white",
          paddingLeft: "2px",
          position: "absolute",
          bottom: "-30px",
          left: "25px",
        }}
        onClick={onClick}
      >
        <FaAngleUp />{" "}
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#3C4242",
          width: "21px",
          height: "21px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          color: "white",
          paddingLeft: "2px",
          position: "absolute",
          bottom: "-70px",
          left: "25px",
        }}
        onClick={onClick}
      >
        <FaAngleDown />
      </div>
    );
  }

  const sliderSettings = {
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section>
      <Container>
        <Flex className="items-center">
          <div className="w-[10%]">
            <Slider {...sliderSettings}>
              <div>
                <Image width={68} height={68} src={DetilsOne} alt="Detail One" />
              </div>
              <div>
                <Image width={68} height={68}  src={DetilsTow} alt="Detail Two" />
              </div>
              <div>
                <Image width={68} height={68}  src={DetilsThree} alt="Detail Three" />
              </div>
            </Slider>
          </div>
          <div className="w-[45%]">
            <Image src={DetilsBig} alt="Detail Big" />
          </div>
          <div className="w-[45%]">
            <h2 className="text-[34px] font-coresance font-bold ">Raven Hoodie With <br /> 
            Black colored Design</h2>
            <div className="">
            <Rate allowHalf defaultValue={3.5} />
            <div className="">
              <h5 className=" font-causten font-medium text-[#807D7E]">3.5</h5>
              <h5 className=" font-causten font-medium text-[#807D7E]">120 comment</h5>
            </div>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default ProductDetails;
