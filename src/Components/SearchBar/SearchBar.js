import React from 'react';

import items from '../items'; //axios config
import TermSearch from './TermSearch';
import CheckBox from './CheckBox';
import ProductTable from '../ProductTable/ProductTable';

class SearchBar extends React.Component {
  state = { term: '', stocked: false, result: [] };

  componentDidMount() {
    this.onInputTermChange(this.state.term, this.state.stocked);
  }

  onInputTermChange = query => {
    this.setState({ term: query });
    this.fetchSearchResult(query, this.state.stocked);
  };

  onCheckBoxSubmit = checked => {
    this.setState({ stocked: checked });
    this.fetchSearchResult(this.state.term, checked);
  };

  fetchSearchResult = async (term, stocked) => {
    let result = await items.get('./items'); /// pull inventory from JSON.DB
    if (term) {
      result = result.data.filter(
        item =>
          item.name.toLowerCase().includes(term) ||
          item.category.toLowerCase().includes(term)
      );
    } else {
      result = result.data;
    }
    if (stocked) {
      result = result.filter(item => item.stocked);
    }
    this.setState({ result: result });
  };

  render() {
    return (
      <div className="">
        <div className="ui segment">
          <TermSearch onChange={this.onInputTermChange} />
          <div className="ui divider" />
          <CheckBox onSubmit={this.onCheckBoxSubmit} />
        </div>
        <ProductTable items={this.state.result} />
      </div>
    );
  }
}

export default SearchBar;
