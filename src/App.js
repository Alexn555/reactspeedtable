import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import ContactListPage from './pages/contact-list-page';

class App extends Component {
  render() {
    return (
      <div id="mainContainer" className='mainContainer'>
        <div className="menu">
          <NavLink className="item" activeClassName="active" exact to="/">Movie List</NavLink>
        </div>
        <Route exact path="/" component={ContactListPage}/>
      </div>
    );
  }
}

export default App;
