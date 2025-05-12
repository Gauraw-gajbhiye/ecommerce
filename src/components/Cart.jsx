import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Deletecart } from "./store/cartSlice";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleDelete = (item) => {
    dispatch(Deletecart(item));
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h4 className="text-xl font-bold mb-4 text-gray-700">Product Details</h4>
      <div className="w-[500px] rounded border border-slate-500 m-4 p-4 bg-white shadow">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">
            <img
              src="https://static.vecteezy.com/system/resources/previews/016/462/240/non_2x/empty-shopping-cart-illustration-concept-on-white-background-vector.jpg"
              alt="cart empty"
            />
            No items in cart
          </p>
        ) : (
          <div className="space-y-4">
            {cart.map((items, index) => (
              <div key={index} className="flex border-b pb-4">
                <img
                  src={items.thumbnail}
                  alt="product"
                  className="w-[100px] h-[100px] object-cover border rounded"
                />
                <div className="ml-4 flex-1">
                  <div className="font-semibold text-gray-800">
                    {items.title}
                  </div>
                  <div className="text-gray-600 mt-1">₹ {items.price}</div>
                  <button
                    className="text-green-600 mt-5 font-semibold "
                    onClick={() => handleDelete(items)}
                  >
                    Delete
                  </button>
                </div>
                <div className="flex items-center">
                  <button className="text-green-600 font-semibold ">
                    EDIT
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
