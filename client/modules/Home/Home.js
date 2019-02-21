import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Hello World!</h2>
        <Link to="/" >Come back to posts</Link>
      </div>
    );
  }
}

export default Home;
