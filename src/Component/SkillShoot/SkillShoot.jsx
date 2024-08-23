import React from 'react';
import skillshoot from '../../../src/assets/Imageskill.png';
import img1 from '../../../src/assets/Group 48095520man.png';
import img2 from '../../../src/assets/Group 48095522man2.png';
import img3 from '../../../src/assets/Group 48095522man2.png';
import img4 from '../../../src/assets/Group 48095524man3.png';

const SkillShoot = () => {
  return (
    <div>
      <div className='md:flex md:mx-[170px] w-[1142px] my-10'>
        <div>
          <img src={skillshoot} alt="" className='md:w-[570px] md:h-[470px] hidden md:block' />
        </div>
        {/* skill description div */}
        <div className='md:ml-[250px] md:w-[600px] w-[351px] md:mx-0 mx-10'>
        <h1 className='font-bold md:text-4xl text-xl mt-[80px]'>Let us <span class="relative text-[#245D51] inline-block pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[6px] after:bg-[#CB8461] after:-translate-y-1/2 after:clip-path-upward-wave">Skill Shoot</span></h1>
        <div className='mt-5 text-[#808080]'>
        <p className='md:w-[522px] w-[351px] mb-3'>We are a company engaged in education with the aim of improving the skills of many people and so that younger people can reach the career paths they want.
        </p>
        <p className='md:w-[522px] w-[351px]'>we have been around since 2019 with currently 100+ updated materials and 15K members who have joined.</p>
        </div>

        <div className='mt-10 '>
          <div className='flex justify-between mb-5 md:w-[600px] w-[371px]'>
            <div className=''>
            <div className='flex mb-5 md:mr-0 mr-1'>
              <img src={img1} alt="" />
              <p className='mt-4 text-sm font-semibold ml-[4px]'>15K People Join</p>
            </div>
            <div className='flex '>
              <img src={img3} alt="" />
              <p className='mt-4 text-sm font-semibold ml-[4px] w-[129px]'>30+ Free Videos</p>
            </div>
            </div>

            <div className=''>
            <div className='flex mb-5 '>
              <img src={img2} alt="" />
              <p className='mt-4 text-sm font-semibold ml-[4px]'>Trusted Mentor</p>
            </div>
            <div className='flex md:mr-0 mr-2'>
              <img src={img4} alt="" />
              <p className='mt-4 text-sm font-semibold ml-[4px] w-[165px]'>100+ Premium Videos</p>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SkillShoot;