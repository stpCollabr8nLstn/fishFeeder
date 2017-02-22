import React from 'react';
import {render} from 'react-dom';
import Nav from './Nav';

class App extends React.Component {
  render () {
    return (
      <Nav />
    )
  }
}

render(<App/>, document.getElementById('app'));
