import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  transition: text-decoration 0.1s;
  box-sizing: border-box;
  font-size: 14px;
`;

function HoverLink({ message }) {
  return (
    <StyledLink>
      <span>{message}</span>
    </StyledLink>
  );
}

export default HoverLink;

HoverLink.propTypes = {
  message: PropTypes.string.isRequired,
};
