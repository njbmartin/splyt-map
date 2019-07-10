import React from 'react';
import propTypes from 'prop-types';

const Marker = (props) => {
  const { bearing } = props;

  return (
    <div className="marker" style={{ transform: `rotate(${bearing}deg)` }} />
  );
};

Marker.propTypes = {
  bearing: propTypes.number.isRequired,
};

export default Marker;
