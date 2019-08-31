import React from 'react';

import '../style.css';

class TermSearch extends React.Component {
  state = { term: '' };

  onFormSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state.term);
  };

  onInputChange = e => {
    this.setState({ term: e.target.value.toLowerCase() }, () => {
      this.props.onChange(this.state.term);
    });
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <div className="field">
          <label>Product Search</label>
          <input
            type="text"
            placeholder="Search..."
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </div>
      </form>
    );
  }
}

export default TermSearch;
