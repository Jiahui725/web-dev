"use client";

import { FilterContext } from "@/context/FilterContext";
import React, { useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";

const MainHeader = () => {
  const { toggle } = useContext(FilterContext);
  return (
    <div className="bg-white flex justify-between items-center px-4 h-16 border-b">
      <a href="https://www.clay.com/" className="cursor-pointer">
        <img
          src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/664ffc89ff539b531cc46813_Clay-logo-black-2024.webp"
          alt="Clay Logo, go to home page"
          className="h-6 w-auto object-contain"
        />
      </a>
      <nav className="flex space-x-4 mx-auto">
        <a href="#product" className="cursor-pointer flex items-center">
          Product
          <IoIosArrowDown />
        </a>
        <a href="#product" className="cursor-pointer flex items-center">
          Solutions
          <IoIosArrowDown />
        </a>
        <a href="#product" className="cursor-pointer flex items-center">
          Resources
          <IoIosArrowDown />
        </a>
        <a href="#product" className="cursor-pointer flex items-center">
          Company
          <IoIosArrowDown />
        </a>
        <a href="https://www.clay.com/enterprise" className="cursor-pointer">
          Enterprise
        </a>
        <a href="https://www.clay.com/pricing" className="cursor-pointer">
          Pricing
        </a>
      </nav>
      <div className="flex space-x-4 pr-4">
        <a href="/login" className="cursor-pointer">
          Login
        </a>
        <a href="/signup" className="cursor-pointer flex items-center">
          Sign Up
          <BsArrowRight className="mr-30" />
        </a>
      </div>
    </div>
  );
};

export default MainHeader;
