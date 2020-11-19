import React from 'react';
import PropTypes from 'prop-types';

function Arrow({ color }) {
  return (
    <svg
      viewBox="-7 0 24 24"
      width="2.5rem"
      height="1.5rem"
    >
      <path
        d="M17.59 7l5 5-5 5M0 12h22"
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
}

export default Arrow;

Arrow.defaultProps = {
  color: 'white',
};

Arrow.propTypes = {
  color: PropTypes.string,
};
