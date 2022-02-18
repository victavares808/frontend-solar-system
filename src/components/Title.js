import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SolarSystem from './SolarSystem';

class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <SolarSystem>
        <h2>{headline}</h2>
      </SolarSystem>
    );
  }
}

Title.propTypes = { headline: PropTypes.string.isRequired };

export default Title;
