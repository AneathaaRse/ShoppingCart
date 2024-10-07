import React from 'react';

const Navbar = ({ cartItems, toggleCart }) => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h2 className="text-lg font-bold">Fake Store</h2>
      <button onClick={toggleCart} className="bg-blue-500 p-2 rounded hover:bg-blue-600">
        Cart ({cartItems.length})
      </button>
    </header>
  );
};

export default Navbar;
