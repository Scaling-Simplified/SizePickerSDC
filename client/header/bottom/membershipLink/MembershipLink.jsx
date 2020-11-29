import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ModalLink from '../ModalLink';
import DeliveryIcon from './DeliveryIcon';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 30px;
`;

function MembershipLink({ handleClick, message }) {
  return (
    <Wrapper>
      <DeliveryIcon />
      <ModalLink message={message} handleClick={handleClick} />
    </Wrapper>
  );
}

export default MembershipLink;

MembershipLink.propTypes = {
  handleClick: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};
