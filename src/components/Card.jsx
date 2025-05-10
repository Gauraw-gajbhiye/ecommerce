import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Card() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();
    setData(result.products);
    setLoading(false);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 py-6 justify-items-center">
      {(loading ? Array(10).fill(0) : data).map((item, index) => (
        <div
          key={loading ? index : item.id}
          className="rounded-xl p-4 shadow-md text-center border border-gray-300 bg-white flex flex-col justify-between transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl h-[420px] w-[260px]"
        >
          {loading ? (
            <>
              <Skeleton height={20} width={200} className="mb-2 mx-auto" />
              <Skeleton height={160} className="mb-2" />
              <Skeleton height={20} width={100} className="mb-2 mx-auto" />
              <Skeleton height={30} width={120} className="mx-auto mt-auto" />
            </>
          ) : (
            <>
              <span className="text-gray-900 font-bold  mb-2 text-sm sm:text-lg   overflow-hidden ">
                {item.title}
              </span>

              <div className="overflow-hidden rounded mb-2 w-full h-[160px] flex items-center justify-center">
                <img
                  src={item.thumbnail}
                  alt="product"
                  className="transition-transform duration-300 ease-in-out hover:scale-110  h-full object-cover"
                />
              </div>

              <div className="flex justify-center items-center mb-1">
                <FaStar className="text-green-500 mr-1" />
                <span className="text-gray-700">{item.rating}</span>
              </div>

              <div className="text-lg font-bold text-gray-900 mb-2">
                ₹ {item.price}
              </div>

              <button className="w-full text-gray-900 font-bold bg-green-200 py-2 rounded hover:bg-green-300 transition mt-auto">
                Add to Cart
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Card;
