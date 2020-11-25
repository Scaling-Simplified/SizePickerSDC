import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ModalLink from '../modalLink';
import DeliveryIcon from './deliveryIcon';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
`;

function MembershipLink({ handleClick, message }) {
  return (
    <Wrapper>
      <DeliveryIcon />
      <ModalLink
        message={message}
        handleClick={handleClick}
      />
    </Wrapper>
  );
}

export default MembershipLink;

MembershipLink.propTypes = {
  handleClick: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};
