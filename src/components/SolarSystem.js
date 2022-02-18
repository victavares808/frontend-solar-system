import React from 'react';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        {props.children}
      </div>
    );
  }
}
export default SolarSystem;
