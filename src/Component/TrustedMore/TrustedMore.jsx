import React from 'react';
import Img1 from '../../../src/assets/image 11.png'
import Img2 from '../../../src/assets/image 12.png'
import Img3 from '../../../src/assets/image 13.png'
import Img4 from '../../../src/assets/image 14.png'
import Img5 from '../../../src/assets/image 15.png'
const TrustedMore = () => {
  return (
    <div className='md:w-[1100px] mx-auto'>
      <div className='text-center mt-[100px]'>
        <h1 className='font-semibold text-2xl mb-2'>Trusted more than <span className='text-[#CB8461]'>100+</span> in the world</h1>
        <p className='text-[#808080] text-center '>they have asked us more than 3 times to teach their employees <br/> about various things. to improve their skills</p>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-4 mt-10 mb-10 md:mx-0 mx-[50px]'>
          <img src={Img1} className='mt-2 w-[100px] h-[20px]' alt="" />
          <img src={Img2} className=' w-[100px] h-[44px]' alt="" />
          <img src={Img3} className=' w-[100px] h-[47px]' alt="" />
          <img src={Img4} className=' w-[100px] h-[40px]' alt="" />
          <img src={Img5} className=' w-[100px] h-[30px]' alt="" />

        </div>
      </div>
    </div>
  );
};

export default TrustedMore;