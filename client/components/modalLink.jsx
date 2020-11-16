import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HoverLink from './hoverLink';

function ModalLink({ message }) {
  const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
  `;

  return (
    <ButtonWrapper>
      <HoverLink message={message} />
    </ButtonWrapper>
  );
}

export default ModalLink;

ModalLink.propTypes = {
  message: PropTypes.string.isRequired,
};
