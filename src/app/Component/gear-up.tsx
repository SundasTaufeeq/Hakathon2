import React from "react";

// Define a Product type
type Product = {
  image: string; // Path to the image
  name: string; // Product name
  category: string; // Product category
  price: string; // Product price
};

const GridWithTwoSections: React.FC = () => {
  // Array of products for the first grid
  const productsGrid1: Product[] = [
    {
      image: "/gear-m-1.png", // Replace with actual image paths
      name: "Nike Air Max Plus",
      category: "Men's Shoes",
      price: "₹19.95",
    },
    {
      image: "/gear-m-2.png", // Replace with actual image paths
      name: "Nike Air Max 97 SE",
      category: "Women's Shoes",
      price: "₹16.995",
    },
  ];

  // Array of products for the second grid
  const productsGrid2: Product[] = [
    {
      image: "/gear-w-1.png", // Replace with actual image paths
      name: "Nike Air Max Pulse",
      category: "Men's Shoes",
      price: "₹13.995",
    },
    {
      image: "/gear-w-2.png", // Replace with actual image paths
      name: "Nike Air Max 90",
      category: "Women's Shoes",
      price: "₹12.995",
    },
  ];

  // Define the props for the renderGrid function
  type RenderGridProps = {
    products: Product[]; // Array of products
    title: string; // Title for the grid
  };

  // Render a grid section
  const renderGrid = ({ products, title }: RenderGridProps) => (
    <div className="w-full p-8 bg-gray-50 rounded-lg mb-8">
      <div className="flex justify-end gap-8 items-center mb-4">
        {/* Title */}
        <h2 className="text-xl text-black">{title}</h2>
        {/* Arrows */}
        <div className="flex space-x-2">
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
            ◀
          </button>
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
            ▶
          </button>
        </div>
      </div>
      {/* Grid of Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Product Image */}
            <div className="w-full max-w-[444.36px] h-[300px] sm:h-[400px] bg-gray-300 rounded-lg flex justify-center items-center">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            {/* Pricing Box with Description */}
            <div className="w-full max-w-[425.36px] h-[48px] bg-gray-100 rounded-lg flex items-center justify-between mt-1 px-4">
              <div className="text-gray-700 text-sm">
                <h4>
                  <b>{product.name}</b>
                </h4>
                <p>{product.category}</p>
              </div>
              <div className="font-bold text-black">
                <p>{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen px-8 py-6">
      {/* Page Header */}
      <h1 className="text-3xl text-black mb-10">
        Gear Up
      </h1>
      {/* Grid Sections */}
      <div className="flex space-x-8">
        {renderGrid({ products: productsGrid1, title: "Shop Men's" })}
        {renderGrid({ products: productsGrid2, title: "Shop Women's" })}
      </div>
    </div>
  );
};

export default GridWithTwoSections;
