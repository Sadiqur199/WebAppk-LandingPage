import React from 'react';
import boy from "../../../src/assets/boy.png";

const SubcribeCourse = () => {
  return (
    <div>
      <div className="bg-[#F2E7DB] mx-5 md:mx-20 md:py-5 my-[100px]   relative  p-8  rounded-md">
        <div className="md:flex  md:justify-around">
          <div className="">
            <h4 className="text-[36px] pb-6 font-semibold">
              Happy <span className="text-[#CB8461]">Chinese New Year</span>,
              20% <br /> discount for you today
            </h4>
            <div className=''>
            <button className="bg-[#245D51] px-2 py-2  text-white font-semibold">
              Subscribe Course
            </button>
            </div>
          </div>
          <div>
          <img src={boy} alt="" className="hidden md:block md:h-[350px] md:absolute -top-20" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default SubcribeCourse;