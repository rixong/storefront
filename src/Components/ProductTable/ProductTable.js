import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';

class ProductTable extends React.Component {
  categoryList() {
    return [...new Set(this.props.items.map(item => item.category))].sort();
  }

  makeItemList(category) {
    return this.props.items.filter(item => {
      return item.category === category.category;
    });
  }

  renderCategory() {
    return this.categoryList().map((category, index) => {
      return (
        <div className={'ui small header'} key={index}>
          {category}
          <ProductCategoryRow itemList={this.makeItemList({ category })} />
        </div>
      );
    });
  }

  render() {
    return <div className="ui segment">{this.renderCategory()}</div>;
  }
}

export default ProductTable;
