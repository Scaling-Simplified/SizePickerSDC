import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HoverLink from './hoverLink';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-right: 20px;
  line-height: 15px;
`;

function ModalLink({ message }) {
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
