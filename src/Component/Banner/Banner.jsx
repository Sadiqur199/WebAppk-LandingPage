import React from 'react';
import bannerImg from '../../../src/assets/image (1).png'
import { MdArrowOutward } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Banner = () => {
  return (
    <div className=''>
      <div className='md:flex md:justify-between bg-[#245D51] md:px-[50px] px-3'>
        <div className='md:mt-[70px] text-white w-[630px]'>
          <h1 className='font-bold md:text-6xl text-2xl'>There is <span class="relative inline-block pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[6px] after:bg-[#CB8461] after:-translate-y-1/2 after:clip-path-upward-wave">always</span>
           <br/>something new for us to learn</h1>
          <p className='py-2 text-gray-300'>we have created more than 100+ materials on various <br/> things that will help your career, with mentors who are <br/> experienced in their fields.</p>
          <div className='md:flex'>
          <button className="btn btn-sm bg-[#CB8461] hover:bg-[#CB8461] text-white border-none">Start Journey<span><MdArrowOutward />
          </span></button>
         <div className='mt-2 flex ml-3'>
         <FaInstagram className='mr-2'/>
          <FaTwitterSquare className='mr-2'/>
          <FaDiscord />
         </div>
          </div>
        </div>
        <div>
          <img src={bannerImg} className='w-[500px] h-[400px] mt-5' alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;