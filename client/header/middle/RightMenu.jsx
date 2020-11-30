import React from 'react';
import styled from 'styled-components';
import Profile from './svg/Profile';
import Heart from './svg/Heart';
import Bag from './svg/Bag';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  min-width: 96px;
  box-sizing: border-box;
  position: relative;
  right: 0;
`;

function RightMenu() {
  return (
    <Wrapper>
      <Profile />
      <Heart />
      <Bag count={2} />
    </Wrapper>
  );
}

export default RightMenu;
