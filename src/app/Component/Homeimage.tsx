import Image from "next/image";
import React from "react";

const Heroimage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white py-4 px-16">
      {/* Hero Image */}
      <Image
        src="/hero.jpg"
        alt="Hero Image"
        width={1344}
        height={700}
        className="object-cover"
      />

      {/* Text and Button Section */}
      <div className="text-center mt-6">
        <h2 className="mb-4 mt-8">FirstLook</h2>
        <h1 className="font-semibold text-black text-6xl">Nike Air Max Pulse</h1>
        <p className="text-black mt-2 p-8">
        Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Puls. <br />
        —designed to push you past your limits and help you go to the max.
        </p>

        {/* Buttons */}
        <div className="mt-4 flex justify-center space-x-4">
          <button className="px-6 py-2 bg-black text-white font-medium rounded-full">
            Get Started
          </button>
          <button className="px-6 py-2 bg-black text-white font-medium rounded-full border-2 border-blak">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heroimage;
