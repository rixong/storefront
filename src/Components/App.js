import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import SearchBar from './SearchBar/SearchBar';
import AddItem from './AddItem';
import './style.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/add" component={AddItem} />
            <Route path="/search" component={SearchBar} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
