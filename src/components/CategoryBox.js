import React from 'react';
import ProductBox from './ProductBox';

const CategoryBox = ({ category, cart, onAddToCart, onRemoveFromCart }) => {
  return (
    <div className="category-box">
      <h2>{category.name}</h2>
      {category.productList.map((product, index) => (
        <ProductBox
          key={index}
          product={product}
          cart={cart}
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
        />
      ))}
    </div>
  );
};

export default CategoryBox;
