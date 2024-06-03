"use client";
import React from "react";
import Container from "./Container";
import Title from "./Title";
import FeedbackCard from "./FeedbackCard";
import FeedbackImgOne from "../public/assates/feedbbackImageOne.png";
import FeedbackImgTow from "../public/assates/feedbbackImageTow.png";
import FeedbackImgThree from "../public/assates/feedbbackImageThree.png";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "../app/feedback.css";

const Feedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: (dots) => (
      <div style={{}}>
        <ul
          style={{
            margin: "0px",
            display: "flex",
            gap: "5px",
            position: "absolute",
            left: "50%",
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
          width: "8px",
          height: "8px",
          borderRadius: "50%",

          background: "#3C4242",
        }}
      >
        {}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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
        breakpoint: 768,
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
    <section className="bg-white pt-[100px] pb-[120px]">
      <Container>
        <Title Name="Feedback" className=" mb-[70px]" />
        <Slider {...settings}>
          <FeedbackCard
            ImageUrl={FeedbackImgOne}
            Name="Floyd Miles"
            Paragraph="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
          Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation   veniam consequat sunt nostrud amet."
          />
          <FeedbackCard
            ImageUrl={FeedbackImgTow}
            Name="Ronald Richards"
            Paragraph="ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
          <FeedbackCard
            ImageUrl={FeedbackImgThree}
            Name="Savannah Nguyen"
            Paragraph="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
          Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
        </Slider>
      </Container>
    </section>
  );
};

export default Feedback;
