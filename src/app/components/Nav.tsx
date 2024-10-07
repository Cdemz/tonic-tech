"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import boldoLogo from "../assets/boldoLogo.svg";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative bg-[#0A2640] pt-4 px-4 h-[100px] border-none">
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-6 flex justify-between items-center py-4 z-10">
          <div className="z-10">
            <Image src={boldoLogo} height={50} width={150} alt="Boldo Logo" />
          </div>

          <div className="hidden md:flex space-x-6 text-white items-center">
            <Link
              href="/"
              className="hover:text-[#65E4A3] transition duration-300"
            >
              Product
            </Link>
            <Link
              href="/"
              className="hover:text-[#65E4A3] transition duration-300"
            >
              Services
            </Link>
            <Link
              href="/"
              className="hover:text-[#65E4A3] transition duration-300"
            >
              About
            </Link>
            <Link href="/">
              <button className="w-[128px] h-[40px] rounded-[24px] bg-white font-[700] text-[#0A2640] transition-transform duration-300 transform hover:bg-[#65E4A3] hover:scale-105 hover:text-white">
                Log In
              </button>
            </Link>
          </div>

          <div
            className="md:hidden text-white cursor-pointer z-40"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </div>
        </div>

        <div
          className={`fixed top-0 right-0 bg-[#0A2640] z-40 w-full h-full flex flex-col items-center justify-center space-y-6 transition-transform duration-500 ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <Link
            href="/"
            onClick={toggleMenu}
            className="text-white text-lg hover:text-[#65E4A3] transition duration-300"
          >
            Product
          </Link>
          <Link
            href="/"
            onClick={toggleMenu}
            className="text-white text-lg hover:text-[#65E4A3] transition duration-300"
          >
            Services
          </Link>
          <Link
            href="/"
            onClick={toggleMenu}
            className="text-white text-lg hover:text-[#65E4A3] transition duration-300"
          >
            About
          </Link>
          <Link href="/" onClick={toggleMenu}>
            <button className="w-[128px] h-[40px] rounded-[24px] bg-white font-[700] text-black hover:bg-[#65E4A3] hover:text-white transition-transform duration-300 transform hover:scale-105">
              Log In
            </button>
          </Link>
          <div
            className="md:hidden text-white cursor-pointer "
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
