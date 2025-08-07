import React from "react";
import appleTv from "../assets/appletv.jpg"; // Make sure the path is correct

const PromoSection = () => {
  return (
    <section
      className="relative h-[600px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${appleTv})`,
      }}
    >
      <div className="text-white text-center bg-black bg-opacity-50 p-6 rounded-xl">
        <h2 className="text-5xl font-bold mb-4">Apple TV+</h2>
        <p className="text-xl mb-6">Stream award-winning Apple Originals.</p>
        <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition">
          Watch now
        </button>
      </div>
    </section>
  );
};

export default PromoSection;
