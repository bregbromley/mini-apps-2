import React, { Component } from 'react';
import ReactDOM from "react-dom";
import App from './components/app.jsx'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };

  }

  render () {
    return (
        <App />
    )
  }
}

ReactDOM.render(<Form />, document.getElementById("index"));