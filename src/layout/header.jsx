import React, { Fragment } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { RiListSettingsLine } from "react-icons/ri";
import { IoIosHeart } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import img1 from "../assets/Profill.svg";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";

const header = () => {
  // const DarkBtn = document.getElementById('Dark-Btn');
  // const LightBtn = document.getElementById('Light-Btn');

  // const toggleModeBtn = () => {
  //  DarkBtn.classList.toggle('hidden');
  //  LightBtn.classList.toggle('hidden');
  // }
  //  DarkBtn.addEventListener('click',()  => {
  //  toggleModeBtn()
  //  });

  //  SVGFESpecularLightingElementBtn.addEventListener('click',()  => {
  //  toggleModeBtn()
  //  });

  return (
    <nav className="w-full h-124px flex items-start bg-white ">
      <div className="flex items-center">
        <Link
          to={"/Morent/home"}
          className="text-[#3563E9] uppercase pt-6 pb-6 pl-10 font-semibold text-xl"
        >
          MORENt
        </Link>
        <div className="w-[500px] h-[32px] border ml-[130px]  rounded-[35px] flex">
          <label className=" flex border-none border-0 border-transparent ">
            <IoSearchOutline className=" mt-1.5  mr-10 ml-2" />
            <input
              name="myInput"
              className="bg-white rounded-xl w-[350px] h-7 text-sm border-transparent"
              placeholder="Search Something Here"
            />
            <a href="">
              <RiListSettingsLine className="mt-2 ml-[60px]" />
            </a>
          </label>
        </div>

        <div className="flex gap-8  ml-[470px]">
          <a href="!#">
            <IoIosHeart className="text-[#596780] hover:text-[#3563E9] ease-in-out duration-300" />
          </a>
          <a href="!#">
            <FaBell className="text-[#596780] hover:text-[#3563E9] ease-in-out duration-300 " />
          </a>
          <a href="!#">
            <IoSettingsSharp className="text-[#596780] hover:text-[#3563E9] ease-in-out duration-300" />
          </a>
          <button className="hidden">
            <MdLightMode
              className="scale-[130%] text-[#596780] hidden"
              id="Light-Btn"
            />

            <MdDarkMode
              className="scale-[130%] text-[#596780] hidden"
              id="Dark-Btn"
            />
          </button>
        </div>
        <a href="!#">
          <img src={img1} alt="" className="h-[30px] ml-[30px] " />
        </a>
      </div>
    </nav>
  );
};

export default header;
