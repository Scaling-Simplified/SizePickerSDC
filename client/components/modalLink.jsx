import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HoverLink from './hoverLink';

function ModalLink(props) {
  const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
  `;

  return (
    <ButtonWrapper>
      <HoverLink {...props} />
    </ButtonWrapper>
  );
}

export default ModalLink;

ModalLink.propTypes = {
  message: PropTypes.string.isRequired,
};
