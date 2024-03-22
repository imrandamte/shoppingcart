// CategoryBox.js
import React from 'react';
import ProductBox from './ProductBox';

const CategoryBox = ({ category }) => {
  return (
    <div className="category-box">
      <h2>{category.name}</h2>
      {category.productList.map((product, index) => (
        <ProductBox key={index} product={product} />
      ))}
    </div>
  );
};

export default CategoryBox;
