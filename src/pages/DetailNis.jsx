import React from "react";
import { Fragment } from "react";
import car2 from "../assets/car2.svg";
import View2 from "../assets/view2.svg";
import View3 from "../assets/view3.svg";
import View4 from "../assets/view4.webp";
import Rheart from "./../assets/heartred.svg";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import Profile from "./../assets/Profill.svg";
import Profile2 from "./../assets/Profill2.svg";
import Arrow from "./../assets/arrow.svg";
import { Link } from "react-router-dom";

const DetailNis = () => {
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

        <div className="">
          <div className="bg-gradient-to-r  from-sky-500 to-indigo-500 w-[450px] mt-10 ml-16 h-[340px] rounded-xl px-6 py-6">
            <h2 className="text-[32px] text-white bold pb-4 ">
              Sports car with the best design and acceleration
            </h2>
            <p className="text-white pb-5 w-[300px]">
              Safety and comfort while driving a futuristic and elegant sports
              car
            </p>
            <img
              src={car2}
              alt=""
              className="ml-8 scale-100 mt-2 hover:scale-105 ease-linear duration-150"
            />
          </div>

          <div className="flex mt-6 ml-16 gap-4">
            <img
              src={View2}
              alt=""
              className=" w-[140px] h-[115px] hover:scale-100  hover:border-[3px] hover:px-1 hover:py-1 hover:rounded-[10px] hover:border-[#3563E9] active:scale-90  active:border-[3px] active:px-2 active:py-2 active:rounded-[10px] active:border-[#3563E9] ease-linear duration-300"
            />
            <img
              src={View4}
              alt=""
              className="w-[140px] h-[115px] rounded-[10px]  hover:scale-100  hover:border-[3px] hover:px-1 hover:py-1 hover:rounded-[10px] hover:border-[#3563E9] active:scale-90  active:border-[3px] active:px-2 active:py-2 active:rounded-[10px] active:border-[#3563E9] ease-linear duration-300"
            />
            <img
              src={View3}
              alt=""
              className="w-[140px] h-[115px] hover:scale-100  hover:border-[3px] hover:px-1 hover:py-1 hover:rounded-[10px] hover:border-[#3563E9] active:scale-90  active:border-[3px] active:px-2 active:py-2 active:rounded-[10px] active:border-[#3563E9] ease-linear duration-300"
            />
          </div>
          <div className="w-[990px] rounded-md static mb-10 ml-16 mt-6 h-auto px-4 py-3 bg-white">
            <div className="flex gap-4">
              <p className="font-[500] text-[15px]">Reviews</p>
              <div className="w-8 h-5 rounded-[3px] mt-[2px] flex items-center text-white text-[11px] font-semibold justify-center bg-[#3563E9]">
                13
              </div>
            </div>
            <div className="flex gap-6 mt-6">
              <img src={Profile} alt="error" className="mt-[-65px] scale-95" />
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <div>
                    <p className="font-bold text-lg">Alex Stanton</p>
                    <p className="font-light text-[#90A3BF]">
                      CEO at Bukalapak
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs text-[#90A3BF]">21 July 2022</p>
                    <div className="flex gap-1 mt-1 ml-[-22px]">
                      <IoIosStar className="text-[#e69b00] " />
                      <IoIosStar className="text-[#e69b00] " />
                      <IoIosStar className="text-[#e69b00] " />
                      <IoIosStar className="text-[#e69b00] " />
                      <IoIosStarOutline className="text-[#596780]" />
                    </div>
                  </div>
                </div>
                <p className="text-sm font-[400] text-[#90A3BF]">
                  We are very happy with the service from the MORENT App. Morent
                  has a low price and also a large variety of cars with good and
                  comfortable facilities. In addition, the service provided by
                  the officers is also very friendly and very polite.
                </p>
              </div>
            </div>
            <div className="flex gap-6 mt-8">
              <img src={Profile2} alt="error" className="mt-[-65px] scale-95" />
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <div>
                    <p className="font-bold text-lg">Skylar Dias</p>
                    <p className="font-light text-[#90A3BF]">CEO at Amazon</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs text-[#90A3BF]">20 July 2022</p>
                    <div className="flex gap-1 mt-1 ml-[-22px]">
                      <IoIosStar className="text-[#e69b00] " />
                      <IoIosStar className="text-[#e69b00] " />
                      <IoIosStar className="text-[#e69b00] " />
                      <IoIosStar className="text-[#e69b00] " />
                      <IoIosStarOutline className="text-[#596780]" />
                    </div>
                  </div>
                </div>
                <p className="text-sm font-[400] text-[#90A3BF]">
                  We are greatly helped by the services of the MORENT
                  Application. Morent has low prices and also a wide variety of
                  cars with good and comfortable facilities. In addition, the
                  service provided by the officers is also very friendly and
                  very polite.
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6 mb-6">
              <a href="" className="text-[#90A3BF] text-base">
                Show All
              </a>
              <img src={Arrow}></img>
            </div>
          </div>
        </div>
        <div className="bg-[#fff] rounded-xl ml-[-500px] mt-10 h-[480px] px-7 py-5 w-[500px] relative top-0">
          <div className="flex justify-between">
            <h2 className="font-[500] text-[29px]">Nissan GT - R</h2>
            <img src={Rheart} alt="heart" />
          </div>
          <div className="flex w-[200px] gap-1 mt-1">
            <IoIosStar className="text-[#e69b00] " />
            <IoIosStar className="text-[#e69b00] " />
            <IoIosStar className="text-[#e69b00] " />
            <IoIosStar className="text-[#e69b00] " />
            <IoIosStarOutline className="text-[#596780]" />
            <p className="text-[#596780] text-xs">440+ Reviewer</p>
          </div>
          <p className="text-[#596780] font-[300] text-[18px] w-[340px] mt-10">
            NISMO has become the embodiment of Nissan's outstanding performance,
            inspired by the most unforgiving proving ground, the "race track".
          </p>
          <div className="flex gap-16 mt-7">
            <p className="text-[17px] text-[#90A3BF]">Type Car</p>{" "}
            <p className="text-[17px] text-[#596780]">Sport</p>{" "}
            <p className="text-[17px] text-[#90A3BF]">Capacity</p>{" "}
            <p className="text-[17px] text-[#596780]">2 Person</p>
          </div>
          <div className="flex gap-16 mt-4">
            <p className="text-[17px] text-[#90A3BF]">Steering</p>{" "}
            <p className="text-[17px] text-[#596780]">Manual</p>{" "}
            <p className="text-[17px] text-[#90A3BF] ml-[-8px]">Gasoline</p>{" "}
            <p className="text-[17px] text-[#596780] ml-10">70L</p>
          </div>
          <div className="flex ">
            <p className="text-2xl font-semibold mt-14">$80.00/</p>
            <p className="mt-16 ml-1 text-sm text-[#90A3BF]">days</p>
            <Link
              type="button"
              to={"/payment"}
              className="bg-[#3563E9] hover:bg-[#6589f6] active:bg-[#3563E9] active:scale-95 ease-linear duration-300 h-[45px] flex items-center px-5 text-white rounded-[6px] mt-14 ml-[210px]"
            >
              Rent Now
            </Link>
          </div>
          <p className="text-sm text-[#90A3BF] mt-[-14px] line-through">
            $99.00
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailNis;
