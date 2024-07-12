import React, { useContext } from "react";
import { Fragment } from "react";
import Header from "../layout/header";
import Footer from "../layout/Footer";
import { HiArrowsUpDown } from "react-icons/hi2";
import Rheart from "./../assets/heartred.svg";
import Heart from "./../assets/Vector.svg";
import Kenig from "./../assets/kenig.svg";
import { Link } from "react-router-dom";
import { FaGasPump } from "react-icons/fa6";
import { PiSteeringWheel } from "react-icons/pi";
import { HiMiniUsers } from "react-icons/hi2";
import Niss from "./../assets/niss.svg";
import Rols from "./../assets/rols.svg";
import Rush from "./../assets/rush.svg";
import CRV from "./../assets/crv.svg";
import Teri from "./../assets/teri.svg";
import Crv2 from "./../assets/crv2.svg";
import Mg from "./../assets/mg.svg";
import ZX from "./../assets/zx.svg";
import Nzx from "./../assets/nzx.svg";
import { ContextAPI } from "../context/API.jsx";
import { useEffect } from "react";
import { useState } from "react";


const Sortpage = () => {
 


  return (
    <Fragment>
      <div className="bg-[#F5f6f7] w-full flex">
        <section className="w-[320px] h-auto bg-white p-6 realtive left-0">
          <p className="uppercase text-xs text-[#90A3BF] pb-5">type</p>

          <div className="flex flex-col justify-center ">
            <label htmlFor="sport" className="pb-4">
              <input type="checkbox" className="mr-3" />
              <span className="text-[#596780] mr-1">Sport</span>
              <span className="text-[#90A3BF]">(10)</span>
            </label>
            <label htmlFor="suv" className="pb-4">
              <input type="checkbox" className="mr-3" />
              <span className="text-[#596780] mr-1">SUV</span>
              <span className="text-[#90A3BF]">(12)</span>
            </label>
            <label htmlFor="" className="pb-4">
              <input type="checkbox" className="mr-3" />
              <span className="text-[#596780] mr-1">MPV</span>
              <span className="text-[#90A3BF]">(16)</span>
            </label>
            <label htmlFor="" className="pb-4">
              <input type="checkbox" className="mr-3" />
              <span className="text-[#596780] mr-1">Sedan</span>
              <span className="text-[#90A3BF]">(20)</span>
            </label>
            <label htmlFor="" className="pb-4">
              <input type="checkbox" className="mr-3" />
              <span className="text-[#596780] mr-1">Coupe</span>
              <span className="text-[#90A3BF]">(14)</span>
            </label>
            <label htmlFor="" className="pb-4">
              <input type="checkbox" className="mr-3" />
              <span className="text-[#596780] mr-1">Hatchback</span>
              <span className="text-[#90A3BF]">(14)</span>
            </label>

            <p className="text-[#90A3BF] uppercase text-[10px] tracking-[0.1rem] pt-5 pb-4">
              Capacity
            </p>
            <label htmlFor="" className="pb-4">
              <input type="checkbox" className="mr-3" />
              <span className="text-[#596780] mr-1">2 Person</span>
              <span className="text-[#90A3BF]">(10)</span>
            </label>
            <label htmlFor="" className="pb-4">
              <input type="checkbox" className="mr-3" />
              <span className="text-[#596780] mr-1">4 Person</span>
              <span className="text-[#90A3BF]">(14)</span>
            </label>
            <label htmlFor="" className="pb-4">
              <input type="checkbox" className="mr-3" />
              <span className="text-[#596780] mr-1">6 Person</span>
              <span className="text-[#90A3BF]">(12)</span>
            </label>
            <label htmlFor="" className="pb-4">
              <input type="checkbox" className="mr-3" />
              <span className="text-[#596780] mr-1">8 or More</span>
              <span className="text-[#90A3BF]">(16)</span>
            </label>

            <p className="text-[#90A3BF] uppercase text-[10px] tracking-[0.1rem] pt-5 pb-4">
              Price
            </p>

            <input type="range" min="40" max="100" className="w-[240px]" />
            <p className="text-[#596780] pt-1">Max. $100.00</p>
          </div>
        </section>

        <div className="flex flex-wrap">
          <div className="flex gap-4 ml-[68px] mb-[-20px] mt-[35px]">
            <div className="pb-10 flex">
              <div className="bg-white w-[475px] h-[132px] rounded-[15px] px-10 py-4 ">
                <div className="flex gap-3">
                  <input type="radio" className="mt-[-7px]" />
                  <p className="thin tracking-wide pb-2">Pick-Up</p>
                </div>
                <div className="flex ">
                  <div className="">
                    <div className="flex flex-col pt-2">
                      <h2 className='font-[500] font-family:"Plus Jakarta Sans"'>
                        Locations
                      </h2>
                    </div>
                    <div className="w-[170px] flex flex-col pt-2 text-xs">
                      <label className="pb- text-xs text-[#90A3BF] ">
                        <select
                          name="selectCity"
                          className="outline-black overflow-hidden ml-[-5px]"
                        >
                          <option value="/">Select Your City</option>
                          <option value="tashkent">Tashkent</option>
                          <option value="californiya">California</option>
                        </select>
                      </label>
                    </div>
                  </div>
                  <div className="ml-[-30px]">
                    <div className="flex flex-col pt-2">
                      <h2 className='font-[500] font-family:"Plus Jakarta Sans"'>
                        Date
                      </h2>
                    </div>
                    <div className="w-[170px] flex flex-col pt-2 text-xs">
                      <label className="pb- text-xs text-[#90A3BF] ">
                        <select
                          name="selectCity"
                          className="outline-black overflow-hidden ml-[-5px]"
                        >
                          <option value="/">Select Your Date</option>
                          <option value="tashkent">Tashkent</option>
                          <option value="californiya">California</option>
                        </select>
                      </label>
                    </div>
                  </div>

                  <div className="ml-[-30px]">
                    <div className="flex flex-col pt-2">
                      <h2 className='font-[500] font-family:"Plus Jakarta Sans"'>
                        Time
                      </h2>
                    </div>
                    <div className="w-[170px] flex flex-col pt-2 text-xs">
                      <label className="pb- text-xs text-[#90A3BF] ">
                        <select
                          name="selectCity"
                          className="outline-black overflow-hidden ml-[-5px]"
                        >
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
              <button
                type="button"
                className="w-10 h-10 bg-[#3563E9] rounded-[8px] flex justify-center items-center hover:bg-[#1E90FF] ease-in-out duration-300 "
              >
                <HiArrowsUpDown className="w-13 text-white" />
              </button>
            </div>

            <div className="pb-10 flex">
              <div className="bg-white w-[475px] h-[132px] rounded-[15px] px-10 py-4 ">
                <div className="flex gap-3 pb-2">
                  <input type="radio" className="" />
                  <p className="thin tracking-wide">Drop - Off</p>
                </div>
                <div className="flex ml-[30px]">
                  <div className="ml-[-30px]">
                    <div className="flex flex-col pt-2">
                      <h2 className='font-[500] font-family:"Plus Jakarta Sans"'>
                        Locations
                      </h2>
                    </div>
                    <div className="w-[170px] flex flex-col pt-2 text-xs">
                      <label className="pb- text-xs text-[#90A3BF] ">
                        <select
                          name="selectCity"
                          className="outline-black overflow-hidden ml-[-5px]"
                        >
                          <option value="/">Select Your City</option>
                          <option value="tashkent">Tashkent</option>
                          <option value="californiya">California</option>
                        </select>
                      </label>
                    </div>
                  </div>

                  <div className="ml-[-30px]">
                    <div className="flex flex-col pt-2">
                      <h2 className='font-[500] font-family:"Plus Jakarta Sans"'>
                        Date
                      </h2>
                    </div>
                    <div className="w-[170px] flex flex-col pt-2 text-xs">
                      <label className="pb- text-xs text-[#90A3BF] ">
                        <select
                          name="selectCity"
                          className="outline-black overflow-hidden ml-[-5px]"
                        >
                          <option value="/">Select Your Date</option>
                          <option value="tashkent">Tashkent</option>
                          <option value="californiya">California</option>
                        </select>
                      </label>
                    </div>
                  </div>
                  <div className="ml-[-30px]">
                    <div className="flex flex-col pt-2">
                      <h2 className='font-[500] font-family:"Plus Jakarta Sans"'>
                        Time
                      </h2>
                    </div>
                    <div className="w-[170px] flex flex-col pt-2 text-xs">
                      <label className="pb- text-xs text-[#90A3BF] ">
                        <select
                          name="selectCity"
                          className="outline-black overflow-hidden ml-[-5px]"
                        >
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

          <div className="inline-flex flex-wrap gap-16 ml-[68px] mt-6 mb-10">
            <div className="w-[298px] h-[388px] bg-white py-6 px-6 rounded-[10px]">
              <div className="flex justify-between ">
                <h2 className='font-[500] text-xl font-"Plus Jakarta Sans" pb-2'>
                Koenigsegg
                </h2>
                <img src={Rheart} alt="" className="w-4 pt-[-2px]" />
              </div>
              <p className="text-[#90A3BF] text-sm mt-[-6px] pb-16">Sport</p>
              <div>
                <img
                  src={Kenig}
                  alt=""
                  className="position scale-100 ml-2 pb-14  hover:scale-110 ease-linear duration-300"
                />

                <div className="flex justify-between">
                  <div className="flex items-center ml-[-10px]">
                    <FaGasPump className="text-[#90A3BF] w-10 mr-[-5px] text-xl" />
                    <p className="text-[#90A3BF] text-[14px]">90L</p>
                  </div>

                  <div className="flex items-center ml-[-10px]">
                    <PiSteeringWheel className="text-[#90A3BF] w-10 mr-[-7px] text-xl" />
                    <p className="text-[#90A3BF] text-[12.5px]">Manual</p>
                  </div>

                  <div className="flex items-center ml-[-10px]">
                    <HiMiniUsers className="text-[#90A3BF] w-10 mr-[-6px] text-xl" />
                    <p className="text-[#90A3BF] text-[12.5px]">2 People</p>
                  </div>
                </div>
                <div className="flex mt-10 items-center gap-2">
                  <p className="font-semibold text-[17px] ">$99.00/</p>
                  <p className="text-xs text-[#90A3BF]">day</p>

                  <Link
                    type="button"
                    to={"/detailKen"}
                    className="p-2 w-[116px] text-center h-auto bg-[#3563E9] hover:bg-[#6969c5] ease-linear duration-300 text-white rounded-[5px] ml-[38px]"
                  >
                    Rent Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-[298px] h-[388px] bg-white py-6 px-6 rounded-[10px]">
              <div className="flex justify-between ">
                <h2 className='font-[500] text-xl font-"Plus Jakarta Sans" pb-2'>
                  Nissan GT - R
                </h2>
                <img src={Heart} alt="" className="w-4 pt-[-2px]" />
              </div>

              <p className="text-[#90A3BF] text-sm mt-[-6px] pb-16">Sport</p>
              <div>
                <img
                  src={Niss}
                  alt=""
                  className="position scale-100 ml-6 pb-[62px]  hover:scale-110 ease-linear duration-300"
                />

                <div className="flex justify-between">
                  <div className="flex items-center ml-[-10px]">
                    <FaGasPump className="text-[#90A3BF] w-10 mr-[-5px] text-xl" />
                    <p className="text-[#90A3BF] text-[14px]">80L</p>
                  </div>

                  <div className="flex items-center ml-[-10px]">
                    <PiSteeringWheel className="text-[#90A3BF] w-10 mr-[-7px] text-xl" />
                    <p className="text-[#90A3BF] text-[12.5px]">Manual</p>
                  </div>

                  <div className="flex items-center ml-[-10px]">
                    <HiMiniUsers className="text-[#90A3BF] w-10 mr-[-6px] text-xl" />
                    <p className="text-[#90A3BF] text-[12.5px]">2 People</p>
                  </div>
                </div>
                <div className="flex mt-10 items-center gap-2">
                  <p className="font-semibold text-[17px] ">$99.00/</p>
                  <p className="text-xs text-[#90A3BF]">day</p>

                  <Link
                    type="button"
                    to={"/detailNis"}
                    className="p-2 w-[116px] text-center h-auto bg-[#3563E9] hover:bg-[#6969c5] ease-linear duration-300 text-white rounded-[5px] ml-[38px]"
                  >
                    Rent Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-[298px] h-[388px] bg-white py-6 px-6 rounded-[10px]">
              <div className="flex justify-between ">
                <h2 className='font-[500] text-xl font-"Plus Jakarta Sans" pb-2'>
                  Rolls-Royce
                </h2>
                <img src={Rheart} alt="" className="w-4 pt-[-2px]" />
              </div>

              <p className="text-[#90A3BF] text-sm mt-[-6px] pb-16">Sedan</p>
              <div>
                <img
                  src={Rols}
                  alt=""
                  className="position scale-100 ml-[14px] pb-14  hover:scale-110 ease-linear duration-300"
                />

                <div className="flex justify-between">
                  <div className="flex items-center ml-[-10px]">
                    <FaGasPump className="text-[#90A3BF] w-10 mr-[-5px] text-xl" />
                    <p className="text-[#90A3BF] text-[14px]">70L</p>
                  </div>

                  <div className="flex items-center ml-[-10px]">
                    <PiSteeringWheel className="text-[#90A3BF] w-10 mr-[-7px] text-xl" />
                    <p className="text-[#90A3BF] text-[12.5px]">Manual</p>
                  </div>

                  <div className="flex items-center ml-[-10px]">
                    <HiMiniUsers className="text-[#90A3BF] w-10 mr-[-6px] text-xl" />
                    <p className="text-[#90A3BF] text-[12.5px]">4 People</p>
                  </div>
                </div>
                <div className="flex mt-10 items-center gap-2">
                  <p className="font-semibold text-[17px] ">$99.00/</p>
                  <p className="text-xs text-[#90A3BF]">day</p>

                  <Link
                    type="button"
                    to={"/detailrols"}
                    className="p-2 w-[116px] text-center h-auto bg-[#3563E9] hover:bg-[#6969c5] ease-linear duration-300 text-white rounded-[5px] ml-[38px]"
                  >
                    Rent Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-[298px] h-[388px] bg-white py-6 px-6 rounded-[10px]">
              <div className="flex justify-between ">
                <h2 className='font-[500] text-xl font-"Plus Jakarta Sans" pb-2'>
                  All New Rush
                </h2>
                <img src={Heart} alt="" className="w-4 pt-[-2px]" />
              </div>

              <p className="text-[#90A3BF] text-sm mt-[-6px] pb-11">SUV</p>
              <div>
                <img
                  src={Rush}
                  alt=""
                  className="position scale-100 ml-5 pb-10  hover:scale-110 ease-linear duration-300"
                />

                <div className="flex justify-between">
                  <div className="flex items-center ml-[-10px]">
                    <FaGasPump className="text-[#90A3BF] w-10 mr-[-5px] text-xl" />
                    <p className="text-[#90A3BF] text-[14px]">70L</p>
                  </div>

                  <div className="flex items-center ml-[-10px]">
                    <PiSteeringWheel className="text-[#90A3BF] w-10 mr-[-7px] text-xl" />
                    <p className="text-[#90A3BF] text-[12.5px]">Manual</p>
                  </div>

                  <div className="flex items-center ml-[-10px]">
                    <HiMiniUsers className="text-[#90A3BF] w-10 mr-[-6px] text-xl" />
                    <p className="text-[#90A3BF] text-[12.5px]">6 People</p>
                  </div>
                </div>
                <div className="flex mt-10 items-center gap-2">
                  <p className="font-semibold text-[17px] ">$72.00/</p>
                  <p className="text-xs text-[#90A3BF]">day</p>

                  <Link
                    type="button"
                    to={"/detailNis"}
                    className="p-2 w-[116px] text-center h-auto bg-[#3563E9] hover:bg-[#6969c5] ease-linear duration-300 text-white rounded-[5px] ml-[38px]"
                  >
                    Rent Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-[298px] h-[388px] bg-white py-6 px-6 rounded-[10px]">
              <div className="flex justify-between ">
                <h2 className='font-[500] text-xl font-"Plus Jakarta Sans" pb-2'>
                  CR - V
                </h2>
                <img src={Heart} alt="" className="w-4 pt-[-2px]" />
              </div>

              <p className="text-[#90A3BF] text-sm mt-[-6px] pb-10">SUV</p>
              <div>
                <img
                  src={CRV}
                  alt=""
                  className="position scale-90 ml-1 pb-10  hover:scale-100 ease-linear duration-300"
                />

                <div className="flex justify-between">
                  <div className="flex items-center ml-[-10px]">
                    <FaGasPump className="text-[#90A3BF] w-10 mr-[-5px] text-xl" />
                    <p className="text-[#90A3BF] text-[14px]">80L</p>
                  </div>

                  <div className="flex items-center ml-[-10px]">
                    <PiSteeringWheel className="text-[#90A3BF] w-10 mr-[-7px] text-xl" />
                    <p className="text-[#90A3BF] text-[12.5px]">Manual</p>
                  </div>

                  <div className="flex items-center ml-[-10px]">
                    <HiMiniUsers className="text-[#90A3BF] w-10 mr-[-6px] text-xl" />
                    <p className="text-[#90A3BF] text-[12.5px]">6 People</p>
                  </div>
                </div>
                <div className="flex mt-10 items-center gap-2">
                  <p className="font-semibold text-[17px] ">$80.00/</p>
                  <p className="text-xs text-[#90A3BF]">day</p>

                  <Link
                    type="button"
                    to={"/detailNis"}
                    className="p-2 w-[116px] text-center h-auto bg-[#3563E9] hover:bg-[#6969c5] ease-linear duration-300 text-white rounded-[5px] ml-[38px]"
                  >
                    Rent Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-[298px] h-[388px] bg-white py-6 px-6 rounded-[10px]">
              <div className="flex justify-between ">
                <h2 className='font-[500] text-xl font-"Plus Jakarta Sans" pb-2'>
                  All New Terios
                </h2>
                <img src={Heart} alt="" className="w-4 pt-[-2px]" />
              </div>

              <p className="text-[#90A3BF] text-sm mt-[-6px] pb-[31px]">SUV</p>
              <div>
                <img
                  src={Teri}
                  alt=""
                  className="position scale-95 ml-5 pb-12  hover:scale-100 ease-linear duration-300"
                />

                <div className="flex justify-between">
                  <div className="flex items-center ml-[-10px]">
                    <FaGasPump className="text-[#90A3BF] w-10 mr-[-5px] text-xl" />
                    <p className="text-[#90A3BF] text-[14px]">90L</p>
                  </div>

                  <div className="flex items-center ml-[-10px]">
                    <PiSteeringWheel className="text-[#90A3BF] w-10 mr-[-7px] text-xl" />
                    <p className="text-[#90A3BF] text-[12.5px]">Manual</p>
                  </div>

                  <div className="flex items-center ml-[-10px]">
                    <HiMiniUsers className="text-[#90A3BF] w-10 mr-[-6px] text-xl" />
                    <p className="text-[#90A3BF] text-[12.5px]">6 People</p>
                  </div>
                </div>
                <div className="flex mt-10 items-center gap-2">
                  <p className="font-semibold text-[17px] ">$74.00/</p>
                  <p className="text-xs text-[#90A3BF]">day</p>

                  <Link
                    type="button"
                    to={"/detailNis"}
                    className="p-2 w-[116px] text-center h-auto bg-[#3563E9] hover:bg-[#6969c5] ease-linear duration-300 text-white rounded-[5px] ml-[38px]"
                  >
                    Rent Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="w-[256px] relative end-[-451px] mb-10 h-auto hover:bg-[#1C90FF] ease-linear duration-300 py-3 px-2 text-white bg-[#3563E9] rounded-[5px]"
          >
            Show more car
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Sortpage;
