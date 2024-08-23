import React from "react";

const Subscribe = () => {
  return (
    <div className="md:w-[850px] mx-auto my-10">
      <h1 className="text-4xl font-bold mb-5 text-center mx-auto md:w-[635px]">
        <span className="text-[#CB8461]">Subscribe</span> with us now
      </h1>
      <p className="text-[#808080] md:w-[545px] text-center mx-auto">
        by subscribing now you will be able to access the material easily <br />{" "}
        and cheaply, so you will be very efficient and benefit
      </p>
      {/* subscription card */}
      <div className="md:flex md:justify-between my-10">
          <div className="max-w-sm mx-auto p-6 bg-white text-black rounded-lg shadow-lg">
            <div className="flex">
              <h2 className="text-4xl font-bold">$50</h2>
              <p className="text-gray-400 mt-5">/ 12month</p>
            </div>
            <h3 className="mt-4 text-2xl font-bold">Base</h3>
            <p className="mt-2 text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center">
                <span className="text-blue-600">&#10004;</span>
                <span className="ml-2">Access all videos</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600">&#10004;</span>
                <span className="ml-2">Get Certificate</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600">&#10004;</span>
                <span className="ml-2">Chat support</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600">&#10004;</span>
                <span className="ml-2">Update Notification</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600">&#10004;</span>
                <span className="ml-2">Download material</span>
              </li>
            </ul>
            <button className="mt-6 w-full py-2 border-[#CB8461] text-[#CB8461] font-semibold rounded-md">
              Choose plan
            </button>
          </div>
          {/* second card */}
          <div className="max-w-sm mx-auto p-6 bg-[#245D51] text-white rounded-lg shadow-lg relative">
      <span className="absolute top-3 right-3 bg-[#CB8461] text-white px-3 py-1 rounded-full text-xs font-semibold">
        MOST POPULAR
      </span>
      <div className="flex ">
      <h2 className="text-4xl font-bold">$100</h2>
      <p className="text-gray-400 mt-3">/ 6 month</p>
      </div>
      <h3 className="mt-4 text-2xl font-bold">Pro</h3>
      <p className="mt-2 text-gray-400">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <ul className="mt-4 space-y-3">
        <li className="flex items-center">
          <span className="text-green-400">&#10004;</span>
          <span className="ml-2">Access all videos</span>
        </li>
        <li className="flex items-center">
          <span className="text-green-400">&#10004;</span>
          <span className="ml-2">Get Certificate</span>
        </li>
        <li className="flex items-center">
          <span className="text-green-400">&#10004;</span>
          <span className="ml-2">Chat support</span>
        </li>
        <li className="flex items-center">
          <span className="text-green-400">&#10004;</span>
          <span className="ml-2">Update Notification</span>
        </li>
        <li className="flex items-center">
          <span className="text-green-400">&#10004;</span>
          <span className="ml-2">Download material</span>
        </li>
      </ul>
      <button className="mt-6 w-full py-2 bg-[#CB8461] text-white font-semibold rounded-md">
        Choose plan
      </button>
    </div>
          {/* third card */}
          <div className="max-w-sm mx-auto p-6 bg-white text-black rounded-lg shadow-lg">
            <div className="flex">
              <h2 className="text-4xl font-bold">$200</h2>
              <p className="text-gray-400 mt-5">/ 12month</p>
            </div>
            <h3 className="mt-4 text-2xl font-bold">EnterPrise</h3>
            <p className="mt-2 text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center">
                <span className="text-blue-600">&#10004;</span>
                <span className="ml-2">Access all videos</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600">&#10004;</span>
                <span className="ml-2">Get Certificate</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600">&#10004;</span>
                <span className="ml-2">Chat support</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600">&#10004;</span>
                <span className="ml-2">Update Notification</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600">&#10004;</span>
                <span className="ml-2">Download material</span>
              </li>
            </ul>
            <button className="mt-6 w-full py-2 border-[#CB8461] text-[#CB8461] font-semibold rounded-md">
              Choose plan
            </button>
          </div>
      </div>
    </div>
  );
};

export default Subscribe;
