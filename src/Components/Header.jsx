import React from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-black bg-opacity-90 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center justify-between h-12 text-white text-sm">
          <li>
            <Link to="/" className="text-xl">
              
            </Link>
          </li>
          {[
            "Store",
            "Mac",
            "iPad",
            "iPhone",
            "Watch",
            "AirPods",
            "TV & Home",
            "Entertainment",
            "Accessories",
            "Support",
          ].map((item) => (
            <li key={item} className="hidden md:block">
              <Link
                to={`/${item
                  .toLowerCase()
                  .replace(" & ", "-")
                  .replace(" ", "-")}`}
                className="hover:text-gray-300 transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-gray-300 transition-colors">
              <FiSearch className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-gray-300 transition-colors">
              <FiShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
