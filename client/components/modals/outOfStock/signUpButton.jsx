import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Arrow from '../../addToBag/arrow';
import Spinner from '../../addToBag/spinner';

const BorderBox = styled.div`
  grid-column: 1;
  grid-row: 1;
  border: ${(props) => (props.enabled ? '1px solid black' : '1px solid #767677')};
  width: 170px;
  height: 50px;
  box-sizing: border-box;
  z-index: -1;
`;

const AddToBagButton = styled.div`
  grid-column: 1;
  grid-row: 1;
  background-color: ${(props) => (props.enabled ? 'black' : '#767677')};
  width: 170px;
  height: 50px;
  border: ${(props) => (props.enabled ? '1px solid black' : '1px solid #767677')};
  box-sizing: border-box;
  transform: translate(-3px, -3px);
  &:active {
    transform: ${(props) => props.enabled && 'translate(0px, 0px)'};
  }
  transition: transform 0.1s;
`;

const TransparencyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 21px;
  cursor: ${(props) => (props.enabled ? 'pointer' : 'not-allowed')};
  box-sizing: border-box;
  &:hover {
    opacity: ${(props) => props.enabled && '50%'};
  }
  transition: opacity 0.1s;
`;

const Grid = styled.div`
  display: grid;
  width: 170px;
  height: 50px;
  box-sizing: border-box;
  margin-top: 20px;
  padding-left: 3px;
`;

const Text = styled.span`
  font-family: AdihausDIN;
  color: white;
  letter-spacing: 2px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
`;

function SignUpButton({ enabled, handleClick, icon }) {
  return (
    <Grid>
      <AddToBagButton onClick={handleClick} enabled={enabled}>
        <TransparencyWrapper enabled={enabled}>
          <Text>Sign up</Text>
          {(icon.checkoutAdding && <Spinner />) || <Arrow />}
        </TransparencyWrapper>
      </AddToBagButton>
      <BorderBox enabled={enabled} />
    </Grid>
  );
}

export default SignUpButton;

SignUpButton.defaultProps = {
  handleClick: () => {},
  icon: { checkoutAdding: false, checkoutShow: false },
  enabled: false,
};

SignUpButton.propTypes = {
  handleClick: PropTypes.func,
  icon: PropTypes.shape({
    checkoutAdding: PropTypes.bool,
    checkoutShow: PropTypes.bool,
  }),
  enabled: PropTypes.bool,
};
