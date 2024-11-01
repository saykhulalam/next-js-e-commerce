"use client";
import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "next/image";
import SignupImage from "../public/assets/signUp.png";
import { IoLogoTwitter } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <section className="pb-10">
      <Container>
        <Flex className="gap-14 xl:flex-row flex-col">
          <div className="xl:w-[50%]">
            <Image alt="image" src={SignupImage} />
          </div>
          <div className="xl:w-[50%] pr-8">
            <div className="flex justify-between xl:flex-row flex-col">
              <div>
                <h2 className="text-[30px] font-coresance font-bold text-common-black">
                  Sign Up
                </h2>
                <h5 className="text-[16px] font-causten font-medium text-common-black mt-[10px]">
                  Sign up for free to access to in any of our products{" "}
                </h5>
              </div>
              <div className="flex gap-5 mt-5 xl:m-0">
                <Link href="/login">
                  <button className="w-[140px] h-[46px]  border-[1px] border-[#8A33FD] rounded-[8px] hover:bg-[#8A33FD] duration-200 hover:text-white font-causten text-[18px] text-common-black">
                    Login
                  </button>
                </Link>
                <button className="w-[140px] h-[46px]  border-[1px] border-[#8A33FD] rounded-[8px] hover:bg-[#8A33FD] duration-200 hover:text-white font-causten text-[18px] text-common-black">
                  Sign Up
                </button>
              </div>
            </div>
            <div className="mt-[40px]">
              <div className="xl:w-[567px] sm:w-[567px] h-[58px] border-[1px] border-common-black rounded-[8px] flex items-center justify-center gap-[12px]">
                <FcGoogle className="text-[20px]" />
                <h2 className="text-[22px] font-causten font-medium text-[#8A33FD]">
                  Continue With Google
                </h2>
              </div>
              <div className="xl:w-[567px] sm:w-[567px]  h-[58px] border-[1px] border-common-black rounded-[8px] flex items-center justify-center gap-[12px] mt-[20px]">
                <IoLogoTwitter className="text-[20px] text-[#47ACDF]" />
                <h2 className="text-[22px] font-causten font-medium text-[#8A33FD]">
                  Continue With Twitter
                </h2>
              </div>
            </div>
            <div className="mt-[40px]">
              <div className="">
                <h5 className="text-[18px] font-causten text-common-black font-normal">
                  User name or email address
                </h5>
                <input
                  className="xl:w-[567px] sm:w-[567px]  h-[58px] border-common-black border-[1px] rounded-[8px] text-[20px] pl-5 mt-[10px]"
                  type="email"
                />
              </div>
              <div className="mt-[30px]">
                <div className="flex justify-between sm:w-[567px] w-[280px] items-center">
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
                  className="xl:w-[567px] sm:w-[567px]  h-[58px] border-common-black border-[1px] rounded-[8px] text-[20px] pl-5 mt-[10px]"
                  type={passwordVisible ? "text" : "password"}
                />
                <div className="mt-[30px]">
                  <div className="flex items-center gap-[10px]">
                    <input className="w-[18px] h-[18px]" type="checkbox" />
                    <h5 className="text-[18px] font-causten text-common-black font-normal">
                      Agree to our Terms of use and Privacy Policy{" "}
                    </h5>
                  </div>
                  <div className="flex items-center gap-[10px] mt-[18px]">
                    <input className="w-[18px] h-[18px]" type="checkbox" />
                    <h5 className="text-[18px] font-causten text-common-black font-normal">
                      Subscribe to our monthly newsletter{" "}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[30px]">
              <button className="w-[140px] h-[46px]  border-[1px] border-[#8A33FD] rounded-[8px] bg-[#8A33FD] duration-200 text-white font-causten text-[18px]">
                Sign Up
              </button>
              <Link
                className="text-[18px] font-causten text-common-black font-normal underline block mt-[10px]"
                href="#"
              >
                Already have an account? Log in.
              </Link>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default SignUp;
