"use client";
import React, { useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "next/image";
import LoginImage from "../public/assets/signImage.png";
import { FcGoogle } from "react-icons/fc";
import { IoLogoTwitter } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import Link from "next/link";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <section className="pb-10">
      <Container>
        <Flex className="gap-14 xl:flex-row flex-col">
          <div className="xl:w-[50%]">
            <Image alt="image" src={LoginImage} />
          </div>
          <div className="xl:w-[50%] pr-8">
            <div className="flex justify-between xl:flex-row flex-col">
              <h2 className="text-[30px] font-coresance font-bold text-common-black mb-5 xl:m-0">
                Sign In Page
              </h2>
              <div className="flex gap-5">
                <button className="w-[140px] h-[46px]  border-[1px] border-[#8A33FD] rounded-[8px] hover:bg-[#8A33FD] duration-200 hover:text-white font-causten text-[18px] text-common-black">
                  Login
                </button>

                <Link href="/signUp">
                  <button className="w-[140px] h-[46px]  border-[1px] border-[#8A33FD] rounded-[8px] hover:bg-[#8A33FD] duration-200 hover:text-white font-causten text-[18px] text-common-black">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
            <div className="mt-[50px]">
              <div className="xl:w-[567px] sm:w-[567px] h-[58px] border-[1px] border-common-black rounded-[8px] flex items-center justify-center gap-[12px]">
                <FcGoogle className="text-[20px]" />
                <h2 className="text-[22px] font-causten font-medium text-[#8A33FD]">
                  Continue With Google
                </h2>
              </div>
              <div className="xl:w-[567px] sm:w-[567px] h-[58px] border-[1px] border-common-black rounded-[8px] flex items-center justify-center gap-[12px] mt-[20px]">
                <IoLogoTwitter className="text-[20px] text-[#47ACDF]" />
                <h2 className="text-[22px] font-causten font-medium text-[#8A33FD]">
                  Continue With Twitter
                </h2>
              </div>
            </div>
            <Flex className=" justify-between items-center mt-[50px] mb-[50px]">
              <div className="w-[247px] h-[1px] bg-common-black"></div>
              <h5 className="text-[18px] font-coresance text-common-black">
                OR
              </h5>
              <div className="w-[247px] h-[1px] bg-common-black"></div>
            </Flex>
            <div className="">
              <div className="">
                <h5 className="text-[18px] font-causten text-common-black font-normal">
                  User name or email address
                </h5>
                <input
                  className="xl:w-[567px] sm:w-[567px] h-[58px] border-common-black border-[1px] rounded-[8px] text-[20px] pl-5 mt-[10px]"
                  type="email"
                />
              </div>
              <div className="mt-[30px]">
                <div className="flex justify-between w-[280px] sm:w-[567px] items-center">
                  <h5 className="text-[18px] font-causten text-common-black font-normal">
                    Password
                  </h5>
                  <div className="flex items-center gap-[15px]">
                    <div
                      onClick={togglePasswordVisibility}
                      className="cursor-pointer"
                    >
                      {passwordVisible ? (
                        <IoEyeSharp className="text-[20px] text-common-black" />
                      ) : (
                        <FaEyeSlash className="text-[20px] text-common-black" />
                      )}
                    </div>
                    <h5 className="text-[18px] font-causten text-common-black font-normal">
                      {passwordVisible ? "Hide" : "Show"}
                    </h5>
                  </div>
                </div>
                <input
                  className="xl:w-[567px] sm:w-[567px] h-[58px] border-common-black border-[1px] rounded-[8px] text-[20px] pl-5 mt-[10px]"
                  type={passwordVisible ? "text" : "password"}
                />
                <Link
                  className="text-[18px] font-causten text-common-black font-normal underline flex xl:justify-end mt-[10px] "
                  href="#"
                >
                  Forget your password
                </Link>
              </div>
            </div>
            <div className="mt-[30px]">
              <button className="w-[140px] h-[46px]  border-[1px] border-[#8A33FD] rounded-[8px] bg-[#8A33FD] duration-200 text-white font-causten text-[18px]">
                Sign In
              </button>
              <Link
                className="text-[18px] font-causten text-common-black font-normal underline block mt-[10px]"
                href="#"
              >
                Don’t have an account? Sign up{" "}
              </Link>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Login;
