import React from "react";
import car1 from "../assets/car1.svg";
import car2 from "../assets/car2.svg";
import {
  Page,
  Navbar,
  NavbarBackLink,
  BlockTitle,
  List,
  ListInput,
} from "konsta/react";
import { HiArrowsUpDown } from "react-icons/hi2";

const main = () => {
  return (
    <main className="bg-[#F6F7F9] w-full h-auto pt-8 pl-16">
      <div className="flex gap-[30px] pb-8">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 w-[640px] h-[375px] rounded-xl px-6 py-6">
          <h2 className="text-[32px] text-white bold pb-4 ">
            The Best Platform <br />
            for Car Rental
          </h2>
          <p className="text-white pb-5">
            Ease of doing a car rental safely and <br />
            reliably. Of course at a low price.
          </p>
          <button
            type="button"
            className="rounded w-[120px] h-11 bg-[#3563E9] text-white semibold hover:bg-[#1560BD] hover:w-[135px] hover:h-[46px] ease-in-out duration-500"
          >
            Rental Car
          </button>
          <img src={car1} alt="" className="ml-[137px] mb-[1000px] " />
        </div>

        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-[640px] h-[375px] rounded-xl px-6 py-6 ">
          <h2 className="text-[32px] text-white bold pb-4">
            Easy way to rent a <br /> car at a low price
          </h2>
          <p className="text-white pb-5">
            Providing cheap car rental services and <br /> safe and comfortable
            facilities.
          </p>
          <button
            type="button"
            className="rounded w-[120px] h-11 bg-[#3563E9] text-white semibold hover:bg-[#1E90FF] hover:w-[135px] hover:h-[46px] ease-in-out duration-500"
          >
            Rental Car
          </button>
          <img src={car2} alt="" className="ml-[200px]" />
        </div>
      </div>

      <div className="flex gap-[86px]">

      <div className="pb-10 flex">
        <div className="bg-white w-[550px] h-[132px] rounded-[15px] px-10 py-4 ">

        <div className="flex gap-3">
            <input type="radio" className="mt-[-7px]"/>
            <p className="thin tracking-wide pb-2">Pick-Up</p>

          </div>
          <div className="flex ">
            <div className="">

          <div className="flex flex-col pt-2">
            <h2 className='font-[500] font-family:"Plus Jakarta Sans"'>
              Locations
            </h2>
          </div>
            <div className="w-[200px] flex flex-col pt-2 text-xs">
              <label className="pb- text-xs text-[#90A3BF] ">
                <select name="selectCity" className="outline-black overflow-hidden ml-[-5px]">
                  <option value="/">Select Your City</option>
                  <option value="tashkent">Tashkent</option>
                  <option value="californiya">California</option>
                </select>
              </label>
            </div>
            </div>
            <div className="ml-[-30px]" >

          <div className="flex flex-col pt-2">
            <h2 className='font-[500] font-family:"Plus Jakarta Sans"'>
              Date
            </h2>
          </div>
            <div className="w-[200px] flex flex-col pt-2 text-xs">
              <label className="pb- text-xs text-[#90A3BF] ">
                <select name="selectCity" className="outline-black overflow-hidden ml-[-5px]">
                  <option value="/">Select Your Date</option>
                  <option value="tashkent">Tashkent</option>
                  <option value="californiya">California</option>
                </select>
              </label>
            </div>
            </div>

            <div className="ml-[-30px]" >
          <div className="flex flex-col pt-2">
            <h2 className='font-[500] font-family:"Plus Jakarta Sans"'>
              Time
            </h2>
          </div>
            <div className="w-[200px] flex flex-col pt-2 text-xs">
              <label className="pb- text-xs text-[#90A3BF] ">
                <select name="selectCity" className="outline-black overflow-hidden ml-[-5px]">
                  <option value="/">Select Your Time</option>
                  <option value="tashkent">Tashkent</option>
                  <option value="californiya">California</option>
                </select>
              </label>
            </div>
            </div>
          </div>
            </div>
          </div>
<div className="pt-10">
<button type="button" className="w-10 h-10 bg-[#3563E9] rounded-[8px] flex justify-center items-center hover:bg-[#1E90FF] ease-in-out duration-300 ">
<HiArrowsUpDown className="w-13 text-white"/>
</button>
</div>

      <div className="pb-10 flex">
        <div className="bg-white w-[550px] h-[132px] rounded-[15px] px-10 py-4 ">



        <div className="flex gap-3 pb-2">
            <input type="radio" className=""/>
            <p className="thin tracking-wide">Drop - Off</p>

          </div>
          <div className="flex ml-[30px]">

          <div className="ml-[-30px]" >
          <div className="flex flex-col pt-2">
            <h2 className='font-[500] font-family:"Plus Jakarta Sans"'>
              Locations
            </h2>
          </div>
            <div className="w-[200px] flex flex-col pt-2 text-xs">
              <label className="pb- text-xs text-[#90A3BF] ">
                <select name="selectCity" className="outline-black overflow-hidden ml-[-5px]">
                  <option value="/">Select Your City</option>
                  <option value="tashkent">Tashkent</option>
                  <option value="californiya">California</option>
                </select>
              </label>
            </div>
            </div>
            
          <div className="ml-[-30px]" >
          <div className="flex flex-col pt-2">
            <h2 className='font-[500] font-family:"Plus Jakarta Sans"'>
              Date
            </h2>
          </div>
            <div className="w-[200px] flex flex-col pt-2 text-xs">
              <label className="pb- text-xs text-[#90A3BF] ">
                <select name="selectCity" className="outline-black overflow-hidden ml-[-5px]">
                  <option value="/">Select Your Date</option>
                  <option value="tashkent">Tashkent</option>
                  <option value="californiya">California</option>
                </select>
              </label>
            </div>
            </div>
          <div className="ml-[-30px]" >
          <div className="flex flex-col pt-2">
            <h2 className='font-[500] font-family:"Plus Jakarta Sans"'>
              Time
            </h2>
          </div>
            <div className="w-[200px] flex flex-col pt-2 text-xs">
              <label className="pb- text-xs text-[#90A3BF] ">
                <select name="selectCity" className="outline-black overflow-hidden ml-[-5px]">
                  <option value="/">Select Your Time</option>
                  <option value="tashkent">Tashkent</option>
                  <option value="californiya">California</option>
                </select>
              </label>
            </div>
            </div>
          </div>
            </div>
          </div>
      </div>
    </main>
  );
};

export default main;
