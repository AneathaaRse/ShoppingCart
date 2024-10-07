import React from 'react';

const CartModal = ({ cartItems, closeCart, onRemoveFromCart }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-2">
                <span>{item.title} - ${item.price}</span>
                <button
                  onClick={() => onRemoveFromCart(item.id)}
                  className="bg-red-600 text-white p-1 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <button className="bg-red-600 text-white p-2 rounded mt-4" onClick={closeCart}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
