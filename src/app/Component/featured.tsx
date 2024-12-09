import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="min-h-screen mt-8 flex flex-col items-center bg-white py-4 px-6 sm:px-8 lg:px-16 ">
      {/* Featured Image */}
      <div className="w-full">
        <Image
          src="/featured.png"
          alt="Hero Image"
          width={1344}
          height={700}
          className="object-cover w-full h-auto"
        />
      </div>

      {/* Text and Button Section */}
      <div className="text-center mt-6 px-4 sm:px-8 lg:px-16">
        <h1 className="font-medium text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8">
          STEP INTO WHAT FEELS GOOD
        </h1>
        <p className="text-black mt-2 text-sm sm:text-base lg:text-lg">
          Cause everyone should know the feeling of running in that perfect pair.
        </p>
        <button className="mt-8 px-8 py-2 bg-black text-white font-medium rounded-full">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Featured;
