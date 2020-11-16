import React from 'react';
import styled from 'styled-components';
import ModalLink from '../modalLink';
import DeliveryIcon from './deliveryIcon';

function MembershipLink() {
  const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
  `;
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
