import React from 'react';

const Food = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-center"
      style={{ backgroundImage: "url('https://framerusercontent.com/images/iP0BsyYh0IYgAchUCKTAQqclxyI.webp')" }}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg text-center"
        style={{
          animation: "scalePulse 2s infinite",
          transformOrigin: "center",
        }}
      >
        <img
          src="https://png.pngtree.com/png-clipart/20220628/original/pngtree-food-logo-png-image_8239850.png"
          alt="Food Delivery"
          className="w-36 h-36 mb-6 mx-auto animate-pulse"
        />
        <h1 className="text-3xl font-bold text-orange-600 mb-4">Food Delivery Service</h1>
        <p className="text-xl text-gray-600 animate-fadeIn animate-delay-500">Will be available soon!</p>
      </div>

      {/* Inline CSS keyframes */}
      <style jsx>{`
        @keyframes scalePulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default Food;
