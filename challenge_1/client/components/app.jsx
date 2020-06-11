import React, { Component } from 'react';
import Paginate from './paginate.jsx'

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <p>
        <br />
        <Paginate />
      </p>
    )
  }
}

export default App;