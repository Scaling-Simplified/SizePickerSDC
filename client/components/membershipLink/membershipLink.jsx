import React from 'react';
import styled from 'styled-components';
import ModalLink from '../modalLink';
import DeliveryIcon from './deliveryIcon';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
`;

function MembershipLink() {
  return (
    <Wrapper>
      <DeliveryIcon />
      <ModalLink
        message="JOIN CREATORS CLUB TO GET UNLIMITED FREE SHIPPING, RETURNS, & EXCHANGES"
      />
    </Wrapper>
  );
}

export default MembershipLink;
