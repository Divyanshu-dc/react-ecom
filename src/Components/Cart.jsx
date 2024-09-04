import React, { useContext } from "react";
import CartRow from "./CartRow";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart ,AscendingRating , DescendingRating } from "../Store/CartSlice";
import { Link } from "react-router-dom";
import { Theme } from "./ContextAPI";


const Cart = () => {
  let dispatch = useDispatch();
  const {theme , setTheme} = useContext(Theme);

  let carData = useSelector((store) => store.cart.cart);

  let lightTheme = 'min-h-screen text-black bg-slate-200';
  let darkTheme = 'min-h-screen'
  return (
    
    <div className={theme == 'light'? lightTheme : darkTheme}>
    {carData.length === 0 ? (
      <div className="flex flex-col items-center justify-center h-full">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--state-no-items-zero-page-added-states-pack-design-development-illustrations-4610092.png?f=webp" // Replace with your image path
          alt="Empty Cart"
          className="w-1/2 h-1/2"
        />
        <h2 className="text-3xl font-semibold mt-4">Cart is Empty, Happy Shopping!</h2>
        <Link  to={"/"}><button className="btn btn-primary mt-4">Lets' Go!!</button></Link>
      </div>
    ) : (
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-2xl">
              <th>Image</th>
              <th>
                <span
                  onClick={() => {
                    dispatch(AscendingRating());
                  }}
                >
                  🔼
                </span>
                Rating
                <span
                  onClick={() => {
                    dispatch(DescendingRating());
                  }}
                >
                  🔽
                </span>
              </th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {carData.map((cartObj) => (
              <CartRow key={cartObj.id} obj={cartObj} />
            ))}
          </tbody>
        </table>
        <button
          className="btn btn-block btn-outline btn-error mt-4"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
        <div className="mt-6 flex justify-center">
        <Link  to={"/checkout"}><button className="btn btn-primary mt-4">Proceed to Checkout</button></Link></div>
      </div>
      
    )}
  </div>
  );
};

export default Cart;
