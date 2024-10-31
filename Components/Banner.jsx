"use client";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import bannerImage from "../public/assets/bannerImage.png";
import Flex from "./Flex";
import bannerDawonImageOne from "../public/assets/bannerDownOne.png";
import bannerDawonImageTow from "../public/assets/bannerDownTow.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const Banner = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          right: "50px",
          top: "300px",
          zIndex: "111",
        }}
        onClick={onClick}
      >
        <GrNext className="text-[30px] text-white" />
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
          position: "absolute",
          left: "50px",
          top: "300px",
          zIndex: "111",
          position: "relative",
        }}
        onClick={onClick}
      >
        <GrPrevious className="text-[30px] text-white" />
      </div>
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    appendDots: (dots) => (
      <div style={{}}>
        <ul
          style={{
            margin: "0px",
            display: "flex",
            gap: "10px",
            position: "absolute",
            bottom: "10%",
            left: "45%",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          height: "5px",
          width: "50px",
          backgroundColor: "#E3E3E3",
          borderRadius: "20px",
        }}
      >
        {}
      </div>
    ),
    responsive: [
      {
        breakpoint: 770,
        settings: {
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="bg-white">
      <Container>
        <Slider {...settings}>
          <div>
            <Image src={bannerImage} placeholder="blur" alt="Banner Image" />
          </div>
          <div>
            <Image src={bannerImage} placeholder="blur" alt="Banner Image" />
          </div>
        </Slider>

        <Flex className="lg:flex-row flex-col items-center justify-center lg:mt-[120px] little-lg:flex-row">
          <div>
            <Image
              src={bannerDawonImageOne}
              width={800}
              placeholder="blur"
              alt="Banner Down One"
            />
          </div>
          <div>
            <Image
              src={bannerDawonImageTow}
              width={800}
              placeholder="blur"
              alt="Banner Down Two"
            />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
