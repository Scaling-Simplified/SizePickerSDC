import React from 'react';
import styled from 'styled-components';
import ModalLink from './modalLink';

function Installments() {
  const StaticContent = styled.span`
    margin-top: 20px;
  `;
  return (
    <>
      <StaticContent>
        or pay over time in interest-free installments with Affirm, Klarna, or Afterpay.
      </StaticContent>
      <ModalLink />
      <StaticContent>
        This product is excluded from all promotional discounts and offers.
      </StaticContent>
    </>
  );
}

export default Installments;
