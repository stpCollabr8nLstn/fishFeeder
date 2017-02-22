import React, { Component } from 'react';
import { connect } from 'react-redux'

class Nav extends Component {
  render() {
    return (
      <div className="header">
        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
          <a href="/" className="pure-menu-heading">Fishy Feeder</a>
          <ul className="pure-menu-list">
            <li className="pure-menu-item pure-menu-selected"><a href="/" pure-menu-link>Home</a></li>
            <li className="pure-menu-item"><a href="/feeder" className="pure-menu-link">Feed Fish</a></li>
            <li className="pure-menu-item"><a href="/view" className="pure-menu-link">View Fish</a></li>
            <li className="pure-menu-item"><a href="/about" className="pure-menu-link">About Us</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  state => state
)(Nav);
