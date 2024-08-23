import React from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jason Bay",
      image: "https://i.ibb.co/Vvz7RwW/unsplash-p-Uhxo-Sap-PFA.png",
      review:
        "I am quite satisfied, because the skills I want or dream of can really be mastered",
    },
    {
      name: "Nany Brugman",
      image: "https://i.ibb.co/MsNvGmd/unsplash-6-W4-F62s-N-y-I.png",
      review:
        "I am quite satisfied, because the skills I want or dream of can really be mastered",
    },
    {
      name: "Alexa Nowan",
      image: "https://i.ibb.co/VSCMGQP/unsplash-pls-F6ob-Tgms.png",
      review:
        "I am quite satisfied, because the skills I want or dream of can really be mastered",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold">
          What do they <span className="text-orange-400">say?</span>
        </h2>
        <p className="mt-4 text-gray-600">
          This is an honest review from members who have joined us
        </p>
        <div className="flex justify-center mt-8 space-x-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              review={testimonial.review}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md">
            <span className="text-gray-600">&#8592;</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-orange-400 rounded-full shadow-md">
            <span className="text-white">&#8594;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
