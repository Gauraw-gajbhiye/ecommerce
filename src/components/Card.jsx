import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import "react-loading-skeleton/dist/skeleton.css";
import { Addtocart } from "./store/cartSlice";

function Card() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // Add filteredData state
  const [loading, setLoading] = useState(true);
  const searchTerm = useSelector((state) => state.search.searchTerm); // Access searchTerm from Redux
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredData(data); // If search term is empty, show all products
    } else {
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered); // Set filtered products
    }
  }, [searchTerm, data]); // Trigger this effect when searchTerm or data changes

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();
    setData(result.products);
    setFilteredData(result.products); // Set filteredData initially to all products
    setLoading(false);
  };

  const handleAddtoCart = (item) => {
    dispatch(Addtocart(item));
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 py-6 justify-items-center">
        {(loading ? Array(10).fill(0) : filteredData).map((item, index) => (
          <div
            key={loading ? index : item.id}
            className="rounded-xl p-4 shadow-md text-center border border-gray-300 bg-white flex flex-col justify-between transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl h-[350px] w-[220px]"
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
                <div className="overflow-hidden rounded w-full h-[160px] flex items-center justify-center">
                  <img
                    src={item.thumbnail}
                    alt="product"
                    className="transition-transform duration-300 ease-in-out hover:scale-110 h-full object-cover"
                  />
                </div>
                <span className="text-slate-400 mb-2 text-sm sm:text-lg overflow-hidden ">
                  {item.title}
                </span>
                <div className="text-2xl font-bold text-gray-900 ">
                  ₹ {item.price}
                </div>
                <div className="flex justify-center items-center bg-green-600 text-white m-auto mb-4 rounded-xl w-[65px] my-2">
                  {item.rating}
                  <FaStar className="flex text-white ml-1 text-xs" />
                </div>

                <button
                  onClick={() => handleAddtoCart(item)}
                  className="w-full border border-green-600 font-bold py-2 rounded transition mt-auto text-green-600"
                >
                  <FontAwesomeIcon
                    className="px-2 text-xl cursor-pointer"
                    icon={faShoppingCart}
                  />{" "}
                  Add to Cart
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
