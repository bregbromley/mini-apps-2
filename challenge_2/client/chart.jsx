import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import $ from 'jquery';



export default class Chart extends Component {
  constructor (props) {
    super(props);

    this.state = {
      data: '',
      labels: ['one', 'two', 'three', 'four'],
      values: [1,2,3,4]
    }
  }

  componentDidMount() {
    $.ajax({
      method: "GET",
      url: "/data",
      success: (res) => {
        console.log('I WORKED', res);
        let keys = Object.keys(res.bpi);
        let values = Object.values(res.bpi);
        this.setState({ data: res, labels: keys, values: values });
      },
      error: (err) => {
        if (err) {
          console.log('NOPE', err);
        }

      }
    })
  }

  render() {
    console.log(this.state.labels);
    console.log(this.state.values);
    let data = {
      labels: this.state.labels,
      datasets: [
        {
          label: 'Value',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: this.state.values
        }
      ]
    }

    return (
      <Line
        data={data}
        options={{
          title:{
            display:true,
            text:'Historical Bitcoin value last 30 days',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
        />
    )
  }
}