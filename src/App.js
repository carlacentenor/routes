import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom'
class App extends Component {
  render() {
    return (
    <Router>
      <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        </ul>
      </div>https://www.youtube.com/watch?v=BaRzPPtyN4I
      </Router>
    );
  }
}

export default App;
