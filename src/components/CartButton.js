// CartButton.js
import React from 'react';

const CartButton = ({ onAddToCart, onRemoveFromCart }) => {
  return (
    <div className="cart-buttons">
      <button onClick={onAddToCart}>Add to Cart</button>
      <button onClick={onRemoveFromCart}>Remove from Cart</button>
    </div>
  );
};

export default CartButton;



