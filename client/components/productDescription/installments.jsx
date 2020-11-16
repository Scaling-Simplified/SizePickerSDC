import React from 'react';
import styled from 'styled-components';
import ModalLink from '../modalLink';

const StaticContent = styled.span`
  margin-top: 20px;
`;

function Installments() {
  return (
    <>
      <StaticContent>
        or pay over time in interest-free installments with Affirm, Klarna, or Afterpay.
      </StaticContent>
      <ModalLink message="Learn more" />
      <StaticContent>
        This product is excluded from all promotional discounts and offers.
      </StaticContent>
    </>
  );
}

export default Installments;
