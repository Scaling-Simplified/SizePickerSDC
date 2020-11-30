import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  cursor: pointer;
  box-sizing: border-box;
`;

const Count = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  position: absolute;
  right: 2px;
  top: 0;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  color: white;
  font-weight: 700;
  font-size: 12px;
  background-color: #0071ae;
  opacity: 0.9;
  cursor: pointer;
`;

function Bag({ count }) {
  return (
    <Wrapper>
      <svg height="1.5rem" width="1.5rem" viewBox="0 0 16 24">
        <title>bag-inactive</title>
        <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2">
          <path d="M1 7h14v14H1z" />
          <path d="M11 10V3H5v7" />
        </g>
      </svg>
      {count > 0 && <Count>{count}</Count>}
    </Wrapper>
  );
}

Bag.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Bag;
