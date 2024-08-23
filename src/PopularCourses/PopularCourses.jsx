import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../src/assets/Group 594.png";
import img2 from "../../src/assets/1.png";
import img3 from "../../src/assets/Card Product.png";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const PopularCourses = () => {
  return (
    <div className="bg-[#245D51] p-10 my-5">
      <div className="text-center text-white mb-5">
      <h1 className='font-semibold text-3xl mb-2'>Popular courses of the week</h1>
      <p className='text-[#808080] text-center '>List of the most popular lists that are often <br /> studied by our members</p>
      </div>
      <div className="my-5">
        <Carousel responsive={responsive}>
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            {" "}
            <img src={img3} alt="" />
          </div>
          <div>
            {" "}
            <img src={img1} alt="" />
          </div>
        </Carousel>
      </div>
      ;
    </div>
  );
};

export default PopularCourses;
