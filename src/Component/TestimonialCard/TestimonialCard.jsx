import React from "react";

const TestimonialCard = ({ image, name, review }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 mx-auto rounded-full object-cover"
      />
      <h3 className="mt-4 text-xl font-semibold">{name}</h3>
      <div className="flex justify-center mt-2">
        <span className="text-yellow-400">&#9733;</span>
        <span className="text-yellow-400">&#9733;</span>
        <span className="text-yellow-400">&#9733;</span>
        <span className="text-yellow-400">&#9733;</span>
        <span className="text-yellow-400">&#9733;</span>
      </div>
      <p className="mt-4 text-gray-600">{review}</p>
    </div>
  );
};

export default TestimonialCard;
