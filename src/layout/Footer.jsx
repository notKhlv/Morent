import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-white ">
      <div className="px-10 ">
        <h1 className="text-[#3563E9] uppercase pt-[76px] pb-4  font-semibold text-[26px]">
          MORENt
        </h1>
        <p className="text-sm text-[#616161]">
          Our vision is to provide convenience <br /> and help increase your
          sales bussiness.
        </p>
        <div className="flex">
          <div className="pl-[750px] mt-[-80px]">
            <h2 className="text-xl pb-8">About</h2>
            <ul className="text-[14px] text-[#616161] mb-1">
              <li className="mb-5">How It Works</li>
              <li className="mb-5">Featured</li>
              <li className="mb-5">Partnership</li>
              <li className="mb-7">Bussiness Relation</li>
            </ul>
          </div>

          <div className="pl-[100px] mt-[-80px] pb-10">
            <h2 className="text-xl pb-8">Community</h2>
            <ul className="text-[14px] text-[#616161] mb-1">
              <li className="mb-5">Events</li>
              <li className="mb-5">Blog</li>
              <li className="mb-5">Podcast</li>
              <li className="mb-7">Invite a frend</li>
            </ul>
          </div>

          <div className="pl-[120px] mt-[-80px] pb-10">
            <h2 className="text-xl pb-8">Socials</h2>
            <ul className="text-[14px] text-[#616161] mb-1">
                <a href="!#">
              <li className="mb-5">Discord</li>
                </a>
              <li className="mb-5">instagram</li>
              <li className="mb-5">Twitter</li>
              <li className="mb-7">Facebook</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="mx-10 mt-[-20px]"/>

      <div className="py-10 pl-8 flex " >
        <a href="">

        <p className="pr-[700px]">©2022 MORENT. All rights reserved</p>
        </a>

        <p className="pr-[100px]">Privacy & Policy</p>
        <p>Terms & Condition</p>
      </div>
    </footer>
  );
};

export default Footer;
