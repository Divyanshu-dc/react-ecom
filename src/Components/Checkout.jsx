import React from "react";
import { useSelector } from "react-redux";


const CheckOut = () => {
  
  const cart = useSelector((state) => state.cart.cart);

 
  const totalPrice = cart.reduce((total, item) => total + item.data.price * item.quantity, 0);

  return (
    <div className="mx-60 mt-9 p-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="mb-4">
            {cart.map((item) => (
              <div key={item.data.id} className="flex justify-between mb-2 border-b py-2">
                <div>
                  <h2 className="font-semibold">{item.data.title}</h2>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price per item: ${(item.data.price).toFixed(2)}</p>
                </div>
                <div className="text-right">
                  <p>Total: ${(item.data.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center font-bold text-xl">
            <p>Total Price:</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>

          <div className="mt-6 flex justify-end">
            
              <button className="btn btn-primary">Proceed to Payment</button>
           
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
