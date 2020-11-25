import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled.span`
  display: inline-flex;
  align-items: center;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 5px;
  &:hover {
    background-color: black;
    color: white;
  }
  transition: color .1s, background-color .1s;
  box-sizing: border-box;
`;

function HoverLink({ message }) {
  return (
    <StyledLink>
      <span>{ message }</span>
    </StyledLink>
  );
}

export default HoverLink;

HoverLink.propTypes = {
  message: PropTypes.string.isRequired,
};
