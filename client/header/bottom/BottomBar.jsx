import React from 'react';
import styled from 'styled-components';
import MembershipLink from './membershipLink/MembershipLink';
import ModalLink from './ModalLink';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border-bottom: 1px solid #c8cbcc;
`;

function BottomBar() {
  return (
    <Container>
      <ModalLink message="UP TO 50% OFF ENDS TODAY" />
      <MembershipLink message="JOIN HIDDEN TEMPLE | GET FREE SHIPPING & RETURNS" />
    </Container>
  );
}

export default BottomBar;
