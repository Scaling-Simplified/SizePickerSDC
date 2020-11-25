import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ModalLink from '../modalLink';
import ProductContext from '../context/productContext';

const StaticContent = styled.span`
  margin-top: 20px;
`;

function Installments({ currentId }) {
  const { setModalView } = useContext(ProductContext);
  return (
    <>
      <StaticContent>
        or pay over time in interest-free installments with Affirm, Klarna, or Afterpay.
      </StaticContent>
      <ModalLink
        message="Learn more"
        handleClick={() => setModalView({ installments: true })}
      />
      {!(currentId % 6) && (
        <StaticContent>
          This product is excluded from all promotional discounts and offers.
        </StaticContent>
      )}
    </>
  );
}

export default Installments;

Installments.defaultProps = {
  currentId: 6,
};

Installments.propTypes = {
  currentId: PropTypes.number,
};
