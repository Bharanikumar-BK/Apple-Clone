import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import appleLogo from '../assets/apple.png';

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen, cartItems, setSearchQuery }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [localSearchQuery, setLocalSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(localSearchQuery);
    navigate("/search");
    setSearchOpen(false);
  };

  const categories = [
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
  ];

  return (
    <header className="sticky top-0 z-50 bg-black bg-opacity-90 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-8">
        <ul className="flex items-center justify-between h-12 text-white text-sm">
          <li>
            <Link to="/">
              <img src={appleLogo} alt="Apple Logo" className="h-5" />
            </Link>
          </li>

          {categories.map((item) => (
            <li key={item} className="hidden md:block">
              <Link
                to={
                  item === "Store"
                    ? "/store"
                    : `/category/${item.toLowerCase().replace(" & ", "-").replace(" ", "-")}`
                }
                className="hover:text-gray-300 transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <FiSearch className="w-5 h-5" />
              </button>

              {searchOpen && (
                <form
                  onSubmit={handleSearch}
                  className="absolute right-0 top-full mt-2 bg-white rounded-md shadow-lg overflow-hidden"
                >
                  <input
                    type="text"
                    value={localSearchQuery}
                    onChange={(e) => setLocalSearchQuery(e.target.value)}
                    placeholder="Search apple.com"
                    className="px-4 py-2 text-black w-64 focus:outline-none"
                    autoFocus
                  />
                </form>
              )}
            </div>

            <Link to="/cart" className="relative text-white hover:text-gray-300 transition-colors">
              <FiShoppingBag className="w-5 h-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
