import React from 'react';
import '../style.css';

class CheckBox extends React.Component {
  onBoxSubmit = e => {
    e.target.checked ? this.props.onSubmit(true) : this.props.onSubmit(false);
  };

  render() {
    return (
      <div className="ui grid">
        <div className="ui checkbox">
          <input type="checkbox" onChange={this.onBoxSubmit} />
          <label className="ui small">Only include stocked items</label>
        </div>

        {/* <div className="grouped fields"> */}

        <div className="ui checkbox">
          <input type="checkbox" />
          <label>include items</label>
        </div>

        <div className="ui checkbox">
          <input type="checkbox" />
          <label>include product categories</label>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

export default CheckBox;
