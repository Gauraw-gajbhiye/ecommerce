import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    if (e.key === "Enter") {
      setData(() => []);
    }
  };
  return (
    <div className="border shadow-lg flex flex-col sm:flex-row justify-between h-18 p-4 mb-6">
      <div className="text-violet-950 text-xl font-bold">Product Bazar</div>
      <div className="border border-black w-full sm:w-[400px] rounded-sm ">
        <input
          type="text"
          placeholder="Search product"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleChange}
          className="outline-none w-full px-2 py-1"
        />
      </div>
      <div className="mt-2 sm:mt-0 sm:ml-4 text-lg flex items-center">
        <FontAwesomeIcon
          className="text-green-600 text-xl cursor-pointer"
          icon={faShoppingCart}
        />
        <span className="ml-2 hidden sm:inline">Cart</span>
      </div>
    </div>
  );
}

export default Navbar;
