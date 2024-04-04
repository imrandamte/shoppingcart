import React, { useState } from 'react';
import CartButton from './CartButton';

const ProductBox = ({ product, cart, onAddToCart, onRemoveFromCart }) => {
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    setIsInCart(true);
    onAddToCart(product);
    console.log('Product Added to the cart');
    console.log('List of products present in cartarray', cart);
    alert("Product added to cart");
  };

  const handleRemoveFromCart = () => {
    setIsInCart(false);
    onRemoveFromCart(product);
    console.log('Product Removed from the cart');
    console.log('List of products present in cartarray', cart);
    alert("Product removed from the cart");
  };

  return (
    <div className="product-box">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <CartButton
        isInCart={isInCart}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
};

export default ProductBox;