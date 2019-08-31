import React from 'react';
import ProductRow from './ProductRow';
import '../style.css';

const ProductCategoryRow = props => {
  const renderProduct = props.itemList.map((item, index) => {
    return <ProductRow key={index} item={item} index={index} />;
  });

  return <div className="ui segment">{renderProduct}</div>;
};

export default ProductCategoryRow;
