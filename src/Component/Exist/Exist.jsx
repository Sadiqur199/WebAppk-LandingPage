import React from 'react';
import ceo from "../../../src/assets/ceo.jpeg";
import img1 from "../../../src/assets/Group 542.png";
import img2 from "../../../src/assets/Group 554.png";
import img3 from "../../../src/assets/Group 555.png";
import img4 from "../../../src/assets/Group 556.png";

const Exist = () => {
  return (
    <div>
            <div className="md:px-20 mx-5  md:py-5 md:flex mt-16 gap-4 md:justify-center">
        <div className="space-y-6 md:w-[40%]">
          <h3 className="text-3xl font-bold">
            Why do we <span className="text-[#CB8461]">exist?</span>
          </h3>
          <p className="text-gray-400">
            Because we know that many people or companies <br />
            have the same problem when it comes to how <br /> difficult it is to
            improve their skills
          </p>
          <div className="flex gap-4">
            <img src={ceo} alt="" className="w-[60px] h-[60px] rounded-full" />
            <div>
              <h3 className="text-black font-semibold">Jerony Pulquosta</h3>
              <p className="text-gray-400">CEO Skill Shoot</p>
            </div>
          </div>
          <hr className="border-2 w-3/4" />
          <div className="flex gap-5">
            <div>
              <p className="text-4xl font-bold">100+</p>
              <p className="text-gray-400 pt-2">Updated Material</p>
            </div>

            <div>
              <p className="text-4xl font-bold">15K</p>
              <p className="text-gray-400 pt-2">Member Join</p>
            </div>
          </div>
        </div>

        <div className="md:flex md:flex-wrap md:w-1/2 mt-2 md:mt-0">
          <div className="md:flex gap-4">
            <div>
              <img src={img1} alt="" className='md:mt-0 mt-2 h-[50px] w-[50px]'/>
              <h3 className="text-3xl font-bold text-[#245D51]">
                Material Limitations
              </h3>
              <p className="text-gray-400 w-2/4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div>
            <img src={img2} alt="" className='md:mt-0 mt-2 h-[50px] w-[50px]'/>
              <h3 className="text-3xl font-bold text-[#245D51]">
                Unprofessional Mentor
              </h3>
              <p className="text-gray-400 w-2/4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="md:flex gap-4">
            <div>
            <img src={img3} alt="" className='md:mt-0 mt-2 h-[50px] w-[50px]'/>
              <h3 className="text-3xl font-bold text-[#245D51]">
                Video Quality
              </h3>
              <p className="text-gray-400 w-2/4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div>
            <img src={img4} alt="" className='md:mt-0 mt-2 h-[50px] w-[50px]' />
              <h3 className="text-3xl font-bold text-[#245D51]">High Price</h3>
              <p className="text-gray-400 w-2/4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exist;