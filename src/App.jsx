import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    const isProductInCart = cartItems.find(item => item.id === product.id);

    if (isProductInCart) {
      setAlertMessage("Item already added to the cart");
      setTimeout(() => setAlertMessage(""), 3000); // Clear alert after 3 seconds
    } else {
      setCartItems((prevItems) => [...prevItems, product]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar cartItems={cartItems} toggleCart={toggleCart} />
      {alertMessage && (
        <div className="bg-red-500 text-white text-center p-4">
          {alertMessage}
        </div>
      )}
      <ProductList products={products} onAddToCart={handleAddToCart} />
      {isCartOpen && (
        <CartModal
          cartItems={cartItems}
          closeCart={toggleCart}
          onRemoveFromCart={handleRemoveFromCart}
        />
      )}
    </div>
  );
};

export default App;
