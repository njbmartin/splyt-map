import React from 'react';
import PropTypes from 'prop-types';

const Panel = (props) => {
  const { children } = props;
  return (
    <div className="panel">
      <div className="content">
        { children }
      </div>
    </div>
  );
};

Panel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Panel;
