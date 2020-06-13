import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import fetch from 'node-fetch';
import $ from 'jquery';
import Chart from './chart.jsx';


class App extends Component {
  constructor() {
    super();

    this.state = {
      data: '',
      labels: '',
      values: ''
    }
  }

  componentDidMount() {
    // $.ajax({
    //   method: "GET",
    //   url: "/data",
    //   success: (res) => {
    //     console.log('I WORKED', res);
    //     let keys = Object.keys(res.bpi);
    //     let values = Object.values(res.bpi);
    //     this.setState({ data: res, labels: keys, values: values });
    //   },
    //   error: (err) => {
    //     if (err) {
    //       console.log('NOPE', err);
    //     }

    //   }
    // })
  }

  render() {
    return (
      <div>
        <Chart data={this.state}/>
        "Powered by CoinDesk"
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));