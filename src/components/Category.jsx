import React from "react";

function Category() {
  return (
    <div className="ml-2">
      <h4 className="font-semi-bold text-2xl">Products For You</h4>
      <div className=" ">
        <div className="p-2  border shadow-lg rounded-md mt-4 ">
          Sort By :
          <select>
            <option>Relevance</option>
            <option>Price (High to Low)</option>
            <option>Price (Low to High )</option>
          </select>
        </div>
        <div className="border border-gray-200 rounded-md mt-4 cursor-pointer">
          <div className="border-b-2 p-2 m-2 ">Filters</div>
          <div className="border-b-2 p-2 m-2">Category</div>
          <div className="border-b-2 p-2 m-2">Price</div>
          <div className="border-b-2 p-2 m-2">Rating</div>
        </div>
      </div>
    </div>
  );
}

export default Category;
