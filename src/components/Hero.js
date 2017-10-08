import React from 'react';
import PropTypes from 'prop-types';
import Amount from './Amount';
import UpdateStateButton from './UpdateStateButton';

const Hero = ({ amounts }) => (
  <section className="hero is-dark">
    <div className="hero-body" style={{ paddingTop: '1em' }}>
      <div className="container">
        <nav className="level">
          <div className="level-left">
            <div className="level-item">
              <UpdateStateButton buttonType="Edit" />
            </div>
            <div className="level-item">
              <UpdateStateButton buttonType="Save" />
            </div>
          </div>
        </nav>
        <div className="columns is-multiline is-mobile">
          {amounts.map(amount => <Amount fullName={amount.fullName} name={amount.name} key={amount.name} />)}
        </div>
      </div>
    </div>
  </section>
);

Hero.propTypes = {
  amounts: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number.isRequired,
      fullName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Hero;
