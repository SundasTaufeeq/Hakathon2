// import React from "react";

// type Product = {
//   image: string; // Path to the image
// };

// const ImageGridWithButton: React.FC = () => {
//   // Array of products
//   const products: Product[] = [
//     { image: "/grid1.png" },
//     { image: "/grid2.png" },
//     { image: "/grid3.png" },
//   ];

//   return (
//     <div className="max-h-screen relative bg-white min-h-screen px-6 py-4">
//       {/* Top-Left Heading */}
//       <h1 className="absolute top-4 left-4 text-2xl font-bold text-black">
//         The Essentials
//       </h1>
//       {/* 1/3 Grid Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-26">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="relative w-full h-[300px] md:h-[400px] bg-gray-200 overflow-hidden shadow-lg"
//           >
//             {/* Full Card Image */}
//             <img
//               src={product.image}
//               alt={`Product ${index + 1}`}
//               className="object-cover w-full h-full"
//             />
//             {/* Button on Image */}
//             <button className="absolute bottom-4 left-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
//               Buy Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageGridWithButton;
import Image from 'next/image'
import React from 'react'

const TheEssentials = () => {
  return (
    <div>


<div className='mt-28 mb-12'>
        <span className='text-xl font-semibold px-10 lg:px-16'>The Essentials</span>
        </div>
        
        <div className='flex justify-evenly items-center mb-16 md:mb-28 flex-wrap'>

        <div className='w-96 h-[400px] overflow-hidden'>
            <Image
            className='hover:scale-105 duration-300'
               
               src={'/essential1.png'}
               alt=''
               width={350}
               height={550}/>
            </div>
            {/* =============2========== */}



            <div className='w-96 h-[400px] overflow-hidden my-7 md:my0 '>
            <Image
            className='hover:scale-105 duration-300'
               
               src={'/essential2.png'}
               alt=''
               width={350}
               height={550}/>
            </div>

{/* ===============3============== */}

<div className='w-96 h-[400px] overflow-hidden mb-14 md:mb-0'>
            <Image
            className='hover:scale-105 duration-300'
               
               src={'/essential3.png'}
               alt=''
               width={350}
               height={550}/>
            </div>


        </div>


        <div className='flex justify-evenly  flex-wrap px-36 pb-20 items-center '>

            <div>
                <span className='font-semibold  pl-3'>Icons</span> <br /> <br />
                <ul className='ess-ul'>
                    <li>Air Force 1</li>
                    <li>Huarache</li>
                    <li>Air Max 90</li>
                    <li>Air Max 95</li>
                </ul>


            </div>







            <div>
                <span className='font-semibold  pl-3'>Shoes</span> <br /> <br />
                 <ul className='ess-ul '>
                    <li>All Shoes</li>
                    <li>Custom Shoes</li>
                    <li>Jordan Shoes</li>
                    <li>Running Shoes</li>
                </ul>
            </div>



            <div>
            <span className='font-semibold  pl-3'>Clothing</span> <br /> <br />
                 <ul className='ess-ul'>
                    <li>All Clothing</li>
                    <li>Modest Clothing</li>
                    <li>Hoodies & Pullovers</li>
                    <li>Shirts & Tops</li>
                </ul>
            </div>


            <div>
            <span className='font-semibold pl-3'>{`Kids'`}</span> <br /> <br />
                 <ul className='ess-ul'>
                    <li>Infant & Toddler Shoes</li>
                    <li>`{`Kids'`} Shoes</li>
                    <li>`{`Kids'`} Jordan Shoes</li>
                    <li>`{`Kids'`} Basketball Shoes</li>
                </ul>
            </div>

        </div>

    </div>
  )
}

export default TheEssentials
