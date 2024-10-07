import React from 'react';
import product1 from '../assets/images/iphone12.jpg'; 
import product2 from '../assets/images/iphone13.jpg';
import product3 from '../assets/images/macbook.jpg';
import product4 from '../assets/images/oppo.jpg';
import product5 from '../assets/images/samsunggalaxyultra.jpg';

const ProductList = ({ onAddToCart }) => {
  const products = [
    {
      id: 1,
      title: "iPhone 12", 
      price: 25000,
      image: product1, 
    },
    {
      id: 2,
      title: "iPhone 13", 
      price: 30000,
      image: product2, 
    },
    {
      id: 3,
      title: "MacBook", 
      price: 200000,
      image: product3, 
    },
    {
      id: 4,
      title: "Oppo", 
      price: 25000, 
      image: product4, 
    },
    {
      id: 5,
      title: "Samsung Galaxy Ultra", 
      price: 500000, 
      image: product5, 
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <div key={product.id} className="m-4 border rounded shadow p-4 bg-white">
          <img src={product.image} alt={product.title} className="w-40 h-40 object-cover mb-2" />
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-lg">${product.price}</p>
          <button
            onClick={() => onAddToCart(product)}
            className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
