import Image from "next/image";
import React from "react";

const DontMiss = () => {
  return (
    
    <div>
         <h1 className="text-3xl text-black mb-10 ml-8">
        Dont<b>Miss</b>
      </h1>
        <div className="min-h-screen flex flex-col items-center bg-white py-4 px-16">
        
      {/* Hero Image */}
      <Image
        src="/dontMiss.png"
        alt="Hero Image"
        width={1344}
        height={700}
        className="object-cover"
      />

      {/* Text and Button Section */}
      <div className="text-center">
        <h1 className="font-semibold text-black text-6xl mt-14">FLIGHT ESSENCIALS</h1>
        <p className="text-black mt-2 p-8 font-semibold">
        Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
        </p>

        {/* Buttons */}
        <div className="mt-3 flex justify-center space-x-4">
          <button className="px-6 py-2 bg-black text-white font-medium rounded-full">
            Shop
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DontMiss;
