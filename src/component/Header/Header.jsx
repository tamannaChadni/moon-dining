import React from "react";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

const Header = () => {
  return (
    <div className="container mx-auto navbar h-[50%] w-[100%]  rounded-lg hidden lg:block">
      <div className=" flex justify-between  gap-64 items-center text-red-300">
      <div className="flex items-center">
      <CiPhone />
      <p>+09090033444</p>
      </div>
      <div className="flex items-center gap-1">
      <CiMail />
      <p>moon@dining.com</p>
      </div>
        
        <p>open hour:monday-sunday:8.00am to 9.00pm</p>
      </div>
    </div>
  );
};

export default Header;
