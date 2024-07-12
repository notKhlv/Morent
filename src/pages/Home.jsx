import React from "react";
import { Fragment } from "react";
import Heart from "./../assets/Vector.svg";
import Rheart from "./../assets/heartred.svg";
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
import Footer from "../layout/Footer";
import Sortpage from "./Sortpage";
import Main from "../layout/main";
import DetailKen from "./DetailKen";

const Home = () => {
  return (
    <Fragment>

    
    <Main/>
    <section className="bg-[#F6F7F9]">
      <div className="flex justify-between pr-18  pb-[35px] bg-[#F6F7F9] px-16">
        <p className='text-[#90A3BF]  font-"Plus Jakarta Sans"'>Popular Car</p>
        <Link to={"/sortpage"} className="text-semibold text-[#3563E9]">
          View All
        </Link>
      </div>
      <div className="flex items-center  pl-[74px]">
        <div className="w-full h-auto bg-[#F6F7F9] mx-[-10px] pt-[-10px] pb-6">
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
                  to={"/detailken"}
                  className="p-2 w-[116px] text-center h-auto bg-[#3563E9] hover:bg-[#6969c5] ease-linear duration-300 text-white rounded-[5px] ml-[38px]"
                  >
                  Rent Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-auto bg-[#F6F7F9]  pt-[-10px] pb-6">
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
                  to={"/detailnis"}
                  className="p-2 w-[116px] text-center h-auto bg-[#3563E9] hover:bg-[#6969c5] ease-linear duration-300 text-white rounded-[5px] ml-[38px]"
                  >
                  Rent Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto bg-[#F6F7F9]  pt-[-10px] pb-6">
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
        </div>
        <div className="w-full h-auto bg-[#F6F7F9]  pt-[-10px] pb-6">
          <div className="w-[298px] h-[388px] bg-white py-6 px-6 mr-[65px] rounded-[10px]">
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
                className="position scale-100 ml-5 pb-14  hover:scale-110 ease-linear duration-300"
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

                <button
                  type="button"
                  className="p-2 w-[116px] h-auto bg-[#3563E9] hover:bg-[#6969c5] ease-linear duration-300 text-white rounded-[5px] ml-[38px]"
                >
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between pr-18  pb-[35px] bg-[#F6F7F9] px-16">
        <p className='text-[#90A3BF]  font-"Plus Jakarta Sans"'>
          Recomendation Car
        </p>
      </div>
      <div className="flex items-center  pl-[74px]">
        <div className="w-full h-auto bg-[#F6F7F9] mx-[-10px] pt-[-10px] pb-6">
          <div className="w-[298px] h-[388px] bg-white py-6 px-6 rounded-[10px]">
            <div className="flex justify-between ">
              <h2 className='font-[500] text-xl font-"Plus Jakarta Sans" pb-2'>
                All New Rush
              </h2>
              <img src={Rheart} alt="" className="w-4 pt-[-2px]" />
            </div>

            <p className="text-[#90A3BF] text-sm mt-[-6px] pb-16">SUV</p>
            <div>
              <img
                src={Rush}
                alt=""
                className="position scale-90 ml-2 pb-[47px] mt-[-20px]  hover:scale-100 ease-linear duration-300"
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

                <button
                  type="button"
                  className="p-2 w-[116px] h-auto bg-[#3563E9] hover:bg-[#6969c5] ease-linear duration-300 text-white rounded-[5px] ml-[38px]"
                >
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-auto bg-[#F6F7F9]  pt-[-10px] pb-6">
          <div className="w-[298px] h-[388px] bg-white py-6 px-6 rounded-[10px]">
            <div className="flex justify-between ">
              <h2 className='font-[500] text-xl font-"Plus Jakarta Sans" pb-2'>
                CR - V
              </h2>
              <img src={Heart} alt="" className="w-4 pt-[-2px]" />
            </div>

            <p className="text-[#90A3BF] text-sm mt-[-6px] pb-16">Sport</p>
            <div>
              <img
                src={CRV}
                alt=""
                className="position scale-90 ml-2 pb-[46px] mt-[-20px]  hover:scale-100 ease-linear duration-300"
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

                <button
                  type="button"
                  className="p-2 w-[116px] h-auto bg-[#3563E9] hover:bg-[#6969c5] ease-linear duration-300 text-white rounded-[5px] ml-[38px]"
                >
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto bg-[#F6F7F9]  pt-[-10px] pb-6">
          <div className="w-[298px] h-[388px] bg-white py-6 px-6 rounded-[10px]">
            <div className="flex justify-between ">
              <h2 className='font-[500] text-xl font-"Plus Jakarta Sans" pb-2'>
                All New Terios
              </h2>
              <img src={Rheart} alt="" className="w-4 pt-[-2px]" />
            </div>

            <p className="text-[#90A3BF] text-sm mt-[-6px] pb-10">Sedan</p>
            <div>
              <img
                src={Teri}
                alt=""
                className="position scale-95 ml-[14px] pb-[49px]  hover:scale-105 ease-linear duration-300"
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
                  <p className="text-[#90A3BF] text-[12.5px]">4 People</p>
                </div>
              </div>
              <div className="flex mt-10 items-center gap-2">
                <p className="font-semibold text-[17px] ">$74.00/</p>
                <p className="text-xs text-[#90A3BF]">day</p>

                <button
                  type="button"
                  className="p-2 w-[116px] h-auto bg-[#3563E9] hover:bg-[#6969c5] ease-linear duration-300 text-white rounded-[5px] ml-[38px]"
                >
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto bg-[#F6F7F9]  pt-[-10px] pb-6">
          <div className="w-[298px] h-[388px] bg-white py-6 px-6 mr-[65px] rounded-[10px]">
            <div className="flex justify-between ">
              <h2 className='font-[500] text-xl font-"Plus Jakarta Sans" pb-2'>
                CR - V
              </h2>
              <img src={Heart} alt="" className="w-4 pt-[-2px]" />
            </div>

            <p className="text-[#90A3BF] text-sm mt-[-6px] pb-10">Sport</p>
            <div>
              <img
                src={Crv2}
                alt=""
                className="position scale-90 ml-1 pb-[48px]  hover:scale-100 ease-linear duration-300"
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
                <p className="font-semibold text-[17px] ">$80.00/</p>
                <p className="text-xs text-[#90A3BF]">day</p>

                <button
                  type="button"
                  className="p-2 w-[116px] h-auto bg-[#3563E9] hover:bg-[#6969c5] ease-linear duration-300 text-white rounded-[5px] ml-[38px]"
                >
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center  pl-[74px]">
        <div className="w-full h-auto bg-[#F6F7F9] mx-[-10px] pt-[-10px] pb-6">
          <div className="w-[298px] h-[388px] bg-white py-6 px-6 rounded-[10px]">
            <div className="flex justify-between ">
              <h2 className='font-[500] text-xl font-"Plus Jakarta Sans" pb-2'>
                MG ZX Excluice
              </h2>
              <img src={Rheart} alt="" className="w-4 pt-[-2px]" />
            </div>

            <p className="text-[#90A3BF] text-sm mt-[-6px] pb-[44px]">
              HatchBack
            </p>
            <div>
              <img
                src={Mg}
                alt=""
                className="position scale-100 pb-[38px]  hover:scale-110 ease-linear duration-300"
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
                <p className="font-semibold text-[17px] ">$76.00/</p>
                <p className="text-xs text-[#90A3BF]">day</p>

                <button
                  type="button"
                  className="p-2 w-[116px] h-auto bg-[#3563E9] hover:bg-[#6969c5] ease-linear duration-300 text-white rounded-[5px] ml-[38px]"
                >
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-auto bg-[#F6F7F9]  pt-[-10px] pb-6">
          <div className="w-[298px] h-[388px] bg-white py-6 px-6 rounded-[10px]">
            <div className="flex justify-between ">
              <h2 className='font-[500] text-xl font-"Plus Jakarta Sans" pb-2'>
                New MG ZS
              </h2>
              <img src={Heart} alt="" className="w-4 pt-[-2px]" />
            </div>

            <p className="text-[#90A3BF] text-sm mt-[-6px] pb-12">Sport</p>
            <div>
              <img
                src={ZX}
                alt=""
                className="position scale-100 mr-2 pb-10  hover:scale-110 ease-linear duration-300"
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

                <button
                  type="button"
                  className="p-2 w-[116px] h-auto bg-[#3563E9] hover:bg-[#6969c5] ease-linear duration-300 text-white rounded-[5px] ml-[38px]"
                >
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto bg-[#F6F7F9]  pt-[-10px] pb-6">
          <div className="w-[298px] h-[388px] bg-white py-6 px-6 rounded-[10px]">
            <div className="flex justify-between ">
              <h2 className='font-[500] text-xl font-"Plus Jakarta Sans" pb-2'>
                MG ZX Excluice
              </h2>
              <img src={Rheart} alt="" className="w-4 pt-[-2px]" />
            </div>

            <p className="text-[#90A3BF] text-sm mt-[-6px] pb-[44px]">
              HatchBack
            </p>
            <div>
              <img
                src={Mg}
                alt=""
                className="position scale-100 pb-[38px]  hover:scale-110 ease-linear duration-300"
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
                <p className="font-semibold text-[17px] ">$76.00/</p>
                <p className="text-xs text-[#90A3BF]">day</p>

                <button
                  type="button"
                  className="p-2 w-[116px] h-auto bg-[#3563E9] hover:bg-[#6969c5] ease-linear duration-300 text-white rounded-[5px] ml-[38px]"
                >
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto bg-[#F6F7F9]  pt-[-10px] pb-6">
          <div className="w-[298px] h-[388px] bg-white py-6 px-6 mr-[65px] rounded-[10px]">
            <div className="flex justify-between ">
              <h2 className='font-[500] text-xl font-"Plus Jakarta Sans" pb-2'>
                New MG ZS
              </h2>
              <img src={Heart} alt="" className="w-4 pt-[-2px]" />
            </div>

            <p className="text-[#90A3BF] text-sm mt-[-6px] pb-12">Sport</p>
            <div>
              <img
                src={Nzx}
                alt=""
                className="position scale-100 mr-2 pb-10  hover:scale-110 ease-linear duration-300"
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

                <button
                  type="button"
                  className="p-2 w-[116px] h-auto bg-[#3563E9] hover:bg-[#6969c5] ease-linear duration-300 text-white rounded-[5px] ml-[38px]"
                >
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end pr-18 pt-14  pb-[80px] bg-[#F6F7F9] px-16">
        <button
          type="button"
          className="w-[156px] h-auto hover:bg-[#1C90FF] ease-linear duration-300 py-3 px-2 text-white bg-[#3563E9] rounded-[5px] mr-[520px]"
        >
          Show more car
        </button>
        <p className='text-[#90A3BF] pt-2  font-"Plus Jakarta Sans"'>
          120 cars
        </p>
      </div>
    </section>
    </Fragment>
  );
};

export default Home;
