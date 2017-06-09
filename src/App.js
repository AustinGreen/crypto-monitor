import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0
    };
    this.fetchPrice = this.fetchPrice.bind(this);
  }

  fetchPrice() {
    fetch('https://api.lionshare.capital/api/prices')
      .then(response => response.json())
      .then(result => this.setState({ price: result.data.BTC[12] }));
    console.log('Price Updated');
  }

  componentDidMount() {
    this.fetchPrice();
  }

  render() {
    return (
      <div className="App">
        <p>{`The price of bitcoin is ${this.state.price}`}</p>
        <button onClick={() => this.fetchPrice()}>Get</button>
      </div>
    );
  }
}

export default App;
