import React from 'react';
import '../style.css';

const ProductRow = ({ item, index }) => {
  const noStockIndicator = () => {
    if (!item.stocked) {
      return 'red-text';
    }
  };

  const rowShading = () => {
    if (index % 2 === 0) {
      return 'shade-row';
    }
  };

  return (
    <div className="product-row">
      <div className={`product name ${noStockIndicator()} ${rowShading()}`}>
        {item.name}
      </div>
      <div className={`product price ${noStockIndicator()} ${rowShading()}`}>
        {item.price}
      </div>
    </div>
  );
};

export default ProductRow;
