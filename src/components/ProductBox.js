// ProductBox.js
import React, { useState } from 'react';
import CartButton from './CartButton';




const ProductBox = ({ product,onAddToCart,onRemoveFromCart }) => {
    const [isInCart,setIsInCart]=useState(false);
  const handleAddToCart = () => {
    
     onAddToCart=(product) 
        setIsInCart(true);  
    
    
    console.log('Product Added to the cart');
    console.log('List of products present in cartarray',product);
    alert(" Product added to cart" )
  };

  const handleRemoveFromCart = () => {
    //okay
   onRemoveFromCart=(product);
   setIsInCart(false);
   console.log('Product Removed from the cart');
   console.log('List of products present in cartarray',product);

    alert(" Product removed from the cart" ,product);
  };

  return (
    <div className="product-box">
       
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <CartButton isInCart={isInCart} onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />
      
    </div>

  );
};

export default ProductBox;
