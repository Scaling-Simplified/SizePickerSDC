/* eslint-disable max-len */
import React, { useContext } from 'react';
import styled from 'styled-components';
import BaseModal from '../baseModal';
import ProductContext from '../../context/productContext';
import HoverLink from '../../hoverLink';

const Info = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

function ReturnsModal() {
  const { modalView, setModalView } = useContext(ProductContext);
  return (
    <BaseModal
      title="FREE 90 DAY EXTENDED HOLIDAY RETURNS & EXCHANGES"
      show={modalView.returns}
      handleExit={() => setModalView({ returns: false })}
      wide
    >
      <p>
        Enjoy free returns or exchanges within 90 days for purchases made between 11/15 and 1/15. Some restrictions apply.
      </p>
      <Info>
        Check out our
        {' '}
        <HoverLink message="Return Policy" />
        {' '}
        for more details.
      </Info>
    </BaseModal>
  );
}

export default ReturnsModal;
