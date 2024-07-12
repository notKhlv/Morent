import React from "react";
import FormP from "../components/FormP";
import Nissmini from "./../assets/niss-mini.svg";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import FormS from "../components/FormS";

const Payment = () => {
  return (
    <div className="px-8 py-8 w-full h-screen bg-[#C3D4E966] flex gap-10">
      <div className="flex flex-col gap-7">
        <div>
          <div className="w-[832px] rounded-xl h-auto px-6 py-4 bg-white">
            <div className="flex justify-between">
              <div>
                <p className="font-[700] text-xl ">Billing Info</p>
                <p className="font-[300] text-sm text-[#90A3BF] mb-6">
                  Please enter your billing info
                </p>
              </div>
              <div>
                <p className="font-[300] text-xs text-[#90A3BF] mt-6">
                  Step 1 of 4
                </p>
              </div>
            </div>
            <FormP />
          </div>
        </div>
        <div>
          <div className="w-[832px] rounded-xl h-auto px-6 py-4 bg-white">
            <div className="flex justify-between">
              <div>
                <p className="font-[700] text-xl ">Billing Info</p>
                <p className="font-[300] text-sm text-[#90A3BF] mb-6">
                  Please enter your billing info
                </p>
              </div>
              <div>
                <p className="font-[300] text-xs text-[#90A3BF] mt-6">
                  Step 1 of 4
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-14 w-[800px]">
              <div >
              <FormS />
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="w-[530px] h-[540px] bg-white rounded-xl px-5 py-5">
        <p className="font-[500] text-[20px] ">Rental Summary</p>
        <p className="text-[12px] text-[#90A3BF] font-[400] w-[350px]">
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <img src={Nissmini} alt="" />
          <div>
            <p className="font-[500] text-[25px]">Nissan GT - R</p>
            <div className="flex w-[200px] gap-1 mt-1">
              <IoIosStar className="text-[#e69b00] " />
              <IoIosStar className="text-[#e69b00] " />
              <IoIosStar className="text-[#e69b00] " />
              <IoIosStar className="text-[#e69b00] " />
              <IoIosStarOutline className="text-[#596780]" />
              <p className="text-[#596780] text-xs">440+ Reviewer</p>
            </div>
          </div>
        </div>
        <div className="mt-7">
          <hr />
          <div className="flex justify-between mt-8">
            <p className="text-[15px] font-[300] text-[#90A3BF]">Subtotal</p>
            <p>$80.00</p>
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-[15px] font-[300] text-[#90A3BF]">Tax</p>
            <p>$0</p>
          </div>
          <div className="w-full px-6 py-6 rounded-xl h-auto mt-6 flex justify-between text-sm items-center bg-[#C3D4E966]">
            <p className="text-[#90A3BF]">Apply Promo Code</p>
            <p>Apply Now</p>
          </div>
          <div className="flex justify-between mt-6 items-center">
            <div>
              <p className="text-lg font-[500]">Total Rental Price</p>
              <p className="text-sm font-[300] text-[#90A3BF]">
                Overall price and includes rental discount
              </p>
            </div>
            <div>
              <p className="text-2xl font-[500]">$80.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
