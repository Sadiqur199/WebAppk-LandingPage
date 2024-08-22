import React from 'react';
import logo from "../../assets/Logo.png";
import backgroundImage from '../../assets/Group 48095497.png';
const Footer = () => {
  return (
<div className="bg-[#245D51]">
<div className="flex flex-col justify-center items-center space-y-4 p-6" >
      <h2 className="text-[36px] font-semibold text-white">
        Subscribe to get notified about update
      </h2>
      <p className="text-gray-400">
        By subscribing with your mail, you will accept our privacy policy
      </p>
      <div className="flex gap-2" >
        <input
          type="text"
          className="p-2 outline-none border-none"
          placeholder="Enter your email"
        />
        <button className="bg-[#CC8663] px-3 py-3 text-white font-semibold">
          Subscribe Course
        </button>
      </div>
    </div>
    <div className="px-[50px] navbar bg-[#245D51] text-[#FFFFFF]">
        <div className="navbar-start">

          <a className="">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li>
                <a>Home</a>
              </li>
              <li>
                <a>Course</a>
              </li>
              <li>
                <a>Subscribe</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Testimoni</a>
              </li>
          </ul>
        </div>
      </div>
</div>
  );
};

export default Footer;


