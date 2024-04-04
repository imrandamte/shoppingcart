import React, { useState } from 'react';
import CategoryBox from './components/CategoryBox';
import data from './data/products.json';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter(product => product !== productToRemove);
    setCart(updatedCart);
  };

  return (
    <div className="app">
      {data.data.map((category, index) => (
        <CategoryBox
          key={index}
          category={category}
          cart={cart}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
        />
      ))}
    </div>
  );
}

export default App;
