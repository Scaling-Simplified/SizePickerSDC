import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function HoverLink(props) {
  const {
    message,
    decoration,
    border,
    width,
    height,
    marginTop,
    transition,
  } = props;

  const StyledLink = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: ${decoration};
    border-right: ${border};
    border-bottom: ${border};
    width: ${width};
    height: ${height};
    cursor: pointer;
    margin-top: ${marginTop};
    &:hover {
      background-color: black;
      color: white
    }
    transition: ${transition};
    box-sizing: border-box;
  `;

  return (
    <StyledLink>
      <span>{ message }</span>
    </StyledLink>
  );
}

export default HoverLink;

HoverLink.defaultProps = {
  decoration: 'underline',
  width: 'initial',
  height: 'initial',
  marginTop: '5px',
  border: 'none',
  transition: 'color .1s, background-color .1s',
};

HoverLink.propTypes = {
  message: PropTypes.string.isRequired,
  decoration: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  marginTop: PropTypes.string,
  border: PropTypes.string,
  transition: PropTypes.string,
};
