import React from 'react';

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
    <div className="relative">
      <img src={course.imgSrc} alt={course.title} className="w-full h-40 object-cover" />
      <div className="absolute inset-0 flex justify-center items-center">
        <button className="bg-white p-3 rounded-full shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8 text-green-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14.752 11.168l-5.197-2.597a1 1 0 000 1.758l5.197 2.597a1 1 0 000-1.758z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 18.25V5.75a2.25 2.25 0 10-4.5 0v12.5a2.25 2.25 0 104.5 0z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div className="p-5">
      <h3 className="text-gray-800 text-xl font-semibold mb-2">{course.title}</h3>
      <div className="flex items-center mb-4">
        <img
          src={course.instructorImgSrc} 
          alt={course.instructor}
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <p className="text-gray-700 text-sm">{course.instructor}</p>
          <p className="text-gray-500 text-sm">{course.role}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-gray-500">
          <span>{course.participants} Participants</span>
        </div>
        <div className="text-lg font-bold text-gray-800">{course.price}/{course.videos} Video</div>
      </div>
      <button className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-600">
        Buy Now
      </button>
    </div>
  </div>
);

export default CourseCard;
