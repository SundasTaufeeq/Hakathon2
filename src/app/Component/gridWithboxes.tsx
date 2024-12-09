import React from "react";

const GridBoxes = () => {
  // Array of products with details
  const products = [
    {
      image: "/grid1.png", // Replace with actual image paths
      name: "Nike Air Max Plus",
      category: "Men's Shoes",
      price: "₹139.95",
    },
    {
      image: "/grid1.png", // Replace with actual image paths
      name: "Nike Air Max Pluse",
      category: "Men's Shoes",
      price: "₹13.995",
    },
    {
      image: "/grid2.png", // Replace with actual image paths
      name: "Nike Air Max 97 SE",
      category: "Women's Shoes",
      price: "₹16.995",
    },
  ];

  return (
    <div className="bg-white min-h-screen px-4 py-6">
      {/* Page Heading */}
      <h1 className="font-bold text-2xl text-black mb-6">Best of Air Max</h1>
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Single Box for each product */}
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Box for Product Image */}
            <div
              className="w-full max-w-[444.36px] h-[300px] sm:h-[400px] md:h-[444.36px] bg-gray-300 rounded-lg flex justify-center items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>

            {/* Pricing Box with Description */}
            <div
              className="w-full max-w-[425.36px] h-[48px] bg-gray-100 rounded-lg flex items-center justify-between mt-1 px-4"
            >
              {/* Description in Price Box */}
              <div className="text-gray-700 text-sm">
                <h4>
                  <b>{product.name}</b>
                </h4>
                <p>{product.category}</p>
              </div>

              {/* Price */}
              <div className="font-bold text-gray-800">
                <p>{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridBoxes;
