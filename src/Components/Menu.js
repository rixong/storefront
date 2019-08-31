import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  //   changeState() {
  //     return 'item active';
  //   }

  render() {
    return (
      <div className="ui three item menu">
        <Link to="/" className="item active">
          Our Company
        </Link>
        <Link to="/search" className="item">
          Search inventory
        </Link>
        <Link to="/add" className="item">
          Add item
        </Link>
      </div>
    );
  }
}

export default Menu;
