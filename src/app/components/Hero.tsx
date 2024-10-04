import Image from "next/image";
import React from "react";
import boldoLogo from "../assets/boldoLogo.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative">
      <div className="bg-[#0A2640] h-screen relative ">
        <div className="bg-[rgb(28,61,91)] w-[493px] h-[493px] rounded-full absolute top-[-100px] right-[-100px]"></div>
        <div className="">
          <div className="">
            <Image src={boldoLogo} height={300} width={300} alt="Boldo Logo" />
          </div>
          <div className="">
            <Link href="/">Product</Link>
            <Link href="/">Services</Link>
            <Link href="/">About</Link>
            <Link href="/">
              <button className="w-[128px] h-[40px] rounded-[24px] bg-white ">
                Log In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
