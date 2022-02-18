import React, { Component } from 'react';
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
export default Title;
