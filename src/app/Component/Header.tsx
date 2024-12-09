import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white">
      {/* Top Bar */}
      <div className="w-full h-[36px] bg-gray-100 flex items-center px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/Top-logo.png" alt="Top Logo" className="h-[28px]" />
        </div>

        {/* Pages */}
        <nav className="ml-auto">
          <ul className="flex items-center space-x-4 text-black text-sm mr-10">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <span className="text-black">|</span>
            <li>
              <a href="#about" className="hover:underline">
                Find a Store
              </a>
            </li>
            <span className="text-black">|</span>
            <li>
              <a href="#services" className="hover:underline">
                Join Us
              </a>
            </li>
            <span className="text-black">|</span>
            <li>
              <a href="#contact" className="hover:underline">
                Sign In
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Gap Between Top and Bottom Header */}
      <div className="h-2"></div>

      {/* Main Bar */}
      <div className="w-full h-[44px] bg-gray-100 flex items-center justify-center">
        {/* Centered Content */}
        <div className="text-black text-center font-medium">
          <h1>Hello Nike App</h1>
          <p>
            Download the app to access everything Nike.{" "}
            <b>
              <u>Get Your Great</u>
            </b>
          </p>
        </div>
      </div>
    </header>
    
  );
};

export default Header;
