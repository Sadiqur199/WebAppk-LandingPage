import React from 'react';

const ImproveSkill = () => {
  return (
    <div className='md:w-[1280px] bg-[#F2E7DB] mx-auto my-10 py-5'>
      <div className='md:w-[1146px] py-5 '>
        <div className='md:flex justify-center '>
          <h1 className='text-4xl font-bold md:mx-0 mx-5 text-left md:w-[635px]'><span className='text-[#CB8461]'>Improve</span> your skills, and reach your career as soon as possible</h1>
          <div className='ml-[100px] mt-3 md:flex md:flex-row flex-col'>
          <div>
          <button className="btn bg-[#CB8461] text-white hover:bg-[#CB8461] md:ml-0 ml-5 md:mr-5">Join Now</button>
          </div>
          <button className="btn bg-[#245D51] text-white hover:bg-[#245D51]">Subscribe Course
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImproveSkill;