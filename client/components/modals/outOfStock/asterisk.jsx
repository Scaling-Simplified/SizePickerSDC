import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSpan = styled.span`
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-size: ${(props) => (props.shrink ? '14px' : '16px')};
  color: #e32b2b;
  padding-left: 2px;
`;

function Asterisk({ shrink }) {
  return <StyledSpan shrink={shrink}>*</StyledSpan>;
}

Asterisk.defaultProps = {
  shrink: false,
};

Asterisk.propTypes = {
  shrink: PropTypes.bool,
};

export default Asterisk;
