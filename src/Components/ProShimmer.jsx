import React from 'react';

const ProShimmer = () => {
  return (
    <div className="hero min-h-screen" style={{ background: 'linear-gradient(135deg, #4e54c8, #8f94fb)' }}>
      <div className="hero-content bg-black flex-col lg:flex-row-reverse shadow-2xl animate-pulse">
        <div className="max-w-sm h-64 bg-gray-700 rounded-lg" />
        <div className="mt-4 lg:mt-0 lg:mr-8">
          <div className="h-8 bg-gray-700 rounded w-48 mb-4" />
          <div className="h-4 bg-gray-700 rounded w-72 mb-2" />
          <div className="h-4 bg-gray-700 rounded w-40 mb-2" />
          <div className="h-4 bg-gray-700 rounded w-56 mb-6" />
          <div className="flex space-x-4">
            <div className="h-8 w-8 bg-gray-700 rounded-full" />
            <div className="h-8 w-8 bg-gray-700 rounded-full" />
            <div className="h-8 w-8 bg-gray-700 rounded-full" />
            <div className="h-8 w-8 bg-gray-700 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProShimmer;
