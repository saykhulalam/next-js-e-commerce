"use client";
import React from "react";
import Title from "./Title";
import Container from "./Container";
import ArrivalProduct from "./ArrivalProduct";
import ArrivelImageOne from "../public/assets/arrivelImgOne.png";
import ArrivelImageTow from "../public/assets/arrivelImgTow.png";
import ArrivelImageThree from "../public/assets/arrivelImgThree.png";
import ArrivelImageFour from "../public/assets/arrivelImgFour.png";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6";

const NewArrival = () => {
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
          top: "-80px",
        }}
        onClick={onClick}
      >
        <FaCircleChevronRight className="text-[25px] text-common-black" />
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
          right: "100px",
          top: "-80px",
        }}
        onClick={onClick}
      >
        <FaCircleChevronLeft className="text-[25px] text-common-black" />
      </div>
    );
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white pt-[99px]">
      <Container>
        <Title Name="New Arrival" className="mb-[70px]" />

        <Slider {...settings}>
          <ArrivalProduct ImageUrl={ArrivelImageOne} Title="Knitted Joggers" />
          <ArrivalProduct ImageUrl={ArrivelImageTow} Title="Full Sleeve" />

          <ArrivalProduct
            ImageUrl={ArrivelImageThree}
            Title="Active T-Shirts"
          />
          <ArrivalProduct ImageUrl={ArrivelImageFour} Title="Urban Shirts" />
        </Slider>
      </Container>
    </section>
  );
};

export default NewArrival;
