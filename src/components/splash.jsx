import React from 'react';
import PropTypes from 'prop-types';

const Splash = (props) => {
  const { children } = props;
  return (
    <div className="splash">
      <div className="content">
        { children }
      </div>
    </div>
  );
};

Splash.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Splash;
