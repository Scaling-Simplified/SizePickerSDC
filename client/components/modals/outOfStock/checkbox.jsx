import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Checkmark from './checkmark';

const Label = styled.label`
  align-items: center;
  display: inline-flex;
  justify-content: flex-start;
  line-height: 24px;
  margin-bottom: 0;
  position: relative;
  font-size: 14px;
`;

const Text = styled.span`
  font-size: 16px;
  padding-left: 1px;
  padding-right: 1px;
  cursor: pointer;
  box-sizing: border-box;
`;

function Checkbox({ children, handleClick }) {
  const [checked, setChecked] = useState(false);
  return (
    <Label onClick={() => {
      setChecked(!checked);
      handleClick(!checked);
    }}
    >
      <Checkmark checked={checked} />
      <Text>
        {children}
      </Text>
    </Label>
  );
}

Checkbox.defaultProps = {
  handleClick: () => {},
};

Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
};

export default Checkbox;
