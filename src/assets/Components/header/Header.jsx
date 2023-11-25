import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="bg-gray-300 text-gray-800 py-4  mb-3 grid place-content-center lg:py-6  ">
      <h1 className="text-5xl font-bold">{title}</h1>
    </header>
  );
};

export default Header;
