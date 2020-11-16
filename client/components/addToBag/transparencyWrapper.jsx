import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  opacity: 75%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
function TransparencyWrapper() {
  return <Wrapper />;
}

export default TransparencyWrapper;
