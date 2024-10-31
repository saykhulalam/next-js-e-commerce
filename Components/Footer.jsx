import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Footerhading from "./Footerhading";
import List from "./List";
import ListItem from "./ListItem";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import cmpanilogoOne from "../public/assets/companiOne.png";
import cmpanilogoTow from "../public/assets/companoTow.png";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-[#2A2F2F] py-[59px] ">
      <Container>
        <Flex className=" justify-between flex-wrap">
          <div className=" xl:m-0 lg:m-0 mb-5">
            <Footerhading Name="Need Help" />
            <List className="mt-[25px]">
              <ListItem className="text-[18px] font-causten font-medium text-footer-whait mb-[15px]">
                <Link href="#">Contact Us</Link>
              </ListItem>
              <ListItem className="text-[18px] font-causten font-medium text-footer-whait mb-[15px]">
                <Link href="#">Track Order</Link>
              </ListItem>
              <ListItem className="text-[18px] font-causten font-medium text-footer-whait mb-[15px]">
                <Link href="#">Returns &amp; Refunds</Link>
              </ListItem>
              <ListItem className="text-[18px] font-causten font-medium text-footer-whait mb-[15px]">
                <Link href="#">FAQ&apos;s</Link>
              </ListItem>
              <ListItem className="text-[18px] font-causten font-medium text-footer-whait mb-[15px]">
                <Link href="#">Career</Link>
              </ListItem>
            </List>
          </div>
          <div className=" xl:m-0 lg:m-0 mb-5">
            <Footerhading Name="Company" />
            <List className="mt-[25px]">
              <ListItem className="text-[18px] font-causten font-medium text-footer-whait mb-[15px]">
                <Link href="#">About Us</Link>
              </ListItem>
              <ListItem className="text-[18px] font-causten font-medium text-footer-whait mb-[15px]">
                <Link href="#">euphoria Blog</Link>
              </ListItem>
              <ListItem className="text-[18px] font-causten font-medium text-footer-whait mb-[15px]">
                <Link href="#">euphoriastan</Link>
              </ListItem>
              <ListItem className="text-[18px] font-causten font-medium text-footer-whait mb-[15px]">
                <Link href="#">Collaboration</Link>
              </ListItem>
              <ListItem className="text-[18px] font-causten font-medium text-footer-whait mb-[15px]">
                <Link href="#">Media</Link>
              </ListItem>
            </List>
          </div>
          <div className=" xl:m-0 lg:m-0 mb-5">
            <Footerhading Name="More Info" />
            <List className="mt-[25px]">
              <ListItem className="text-[18px] font-causten font-medium text-footer-whait mb-[15px]">
                <Link href="#">Term and Conditions</Link>
              </ListItem>
              <ListItem className="text-[18px] font-causten font-medium text-footer-whait mb-[15px]">
                <Link href="#">Privacy Policy</Link>
              </ListItem>
              <ListItem className="text-[18px] font-causten font-medium text-footer-whait mb-[15px]">
                <Link href="#">Shipping Policy</Link>
              </ListItem>
              <ListItem className="text-[18px] font-causten font-medium text-footer-whait mb-[15px]">
                <Link href="#">Sitemap</Link>
              </ListItem>
            </List>
          </div>
          <div className=" xl:m-0 lg:m-0 mb-5">
            <Footerhading Name="Location" />
            <List className="mt-[25px]">
              <ListItem className="text-[18px] font-causten font-medium text-footer-whait mb-[15px]">
                <Link href="#">support@euphoria.in</Link>
              </ListItem>
              <ListItem className="text-[18px] font-causten font-medium text-footer-whait mb-[15px]">
                <Link href="#">Eklingpura Chouraha, Ahmedabad Main Road</Link>
              </ListItem>
              <ListItem className="text-[18px] font-causten font-medium text-footer-whait mb-[15px]">
                <Link href="#">
                  (NH 8- Near Mahadev Hotel) Udaipur, India- 313002
                </Link>
              </ListItem>
            </List>
          </div>
        </Flex>
        <Flex className=" justify-between items-center mt-[60px] flex-wrap">
          <div className="flex gap-[9px] mb-5 xl:m-0 lg:m-0">
            <div className="w-[37px] h-[37px] bg-footer-whait rounded-xl flex justify-center items-center">
              <FaFacebookF className="text-[25px] text-common-black" />
            </div>
            <div className=" w-[37px] h-[37px] bg-footer-whait rounded-xl flex justify-center items-center">
              <FaInstagram className="text-[25px] text-common-black" />
            </div>
            <div className=" w-[37px] h-[37px] bg-footer-whait rounded-xl flex justify-center items-center">
              <IoLogoTwitter className="text-[25px] text-common-black" />
            </div>
            <div className=" w-[37px] h-[37px] bg-footer-whait rounded-xl flex justify-center items-center">
              <FaLinkedinIn className="text-[25px] text-common-black" />
            </div>
          </div>
          <div>
            <Footerhading Name="Download The App " />
            <div className="flex gap-[21px] mt-[19px]">
              <Link href="#">
                <Image alt="Download on Company Logo One" src={cmpanilogoOne} />
              </Link>
              <Link href="#">
                <Image alt="Download on Company Logo Two" src={cmpanilogoTow} />
              </Link>
            </div>
          </div>
        </Flex>
      </Container>
      <hr className="mt-[49px]" />
      <Container>
        <Flex className=" justify-between items-center my-[30px]">
          <h2 className="text-[28px] font-causten font-bold text-footer-whait tracking-[1px]">
            Popular Categories
          </h2>
          <FaChevronDown className="text-[20px] text-footer-whait" />
        </Flex>
      </Container>
      <hr />
      <h5 className=" text-center text-[18px] font-bold font-causten text-white tracking-[1px] mt-[37px]">
        Copyright © 2024 made by Saykhul-Alam...
      </h5>
    </section>
  );
};

export default Footer;
