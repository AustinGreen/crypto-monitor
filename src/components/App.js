import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Hero from './Hero';
import Dashboard from './Dashboard';
import Portfolio from './Portfolio';
import Prices from './Prices';

// import { subscribeToTimer } from '../api';
//
// class Timer extends React.Component {
//   constructor(props) {
//     super(props);
//     subscribeToTimer((err, timestamp) =>
//       this.setState({
//         timestamp,
//       }),
//     );
//     this.state = {
//       timestamp: 'no timestamp yet',
//     };
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <p className="App-intro">
//           This is the timer value: {this.state.timestamp}
//         </p>
//       </div>
//     );
//   }
// }

const App = ({ amounts }) =>
  <div>
    <Hero amounts={amounts} />
    <Dashboard>
      <Route exact path="/" render={() => <Redirect to="/prices" />} />
      <Route path="/prices" />
      <Route path="/portfolio" />
    </Dashboard>
  </div>;

App.propTypes = {
  amounts: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number.isRequired,
      fullName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default connect(state => ({
  amounts: state.amounts,
}))(App);
