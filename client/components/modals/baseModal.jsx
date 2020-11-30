import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ExitButton from './checkout/exitButton';

const Background = styled.div`
  display: flex; /*${(props) => (props.show ? 'flex' : 'none')};*/
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;

const ClickableBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: ${(props) => (props.show ? '1' : '0')};
  transition: opacity 0.2s;
  z-index: -1;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: white;
  width: ${(props) => (props.wide ? '72%' : '50%')};
  max-width: 1200px;
  max-height: 92vh;
  margin: auto;
  padding: 20px;
  border: 1px solid black;
  box-sizing: border-box;
  opacity: ${(props) => (props.show ? '1' : '0')};
  transition: opacity 0.45s;
  transition-delay: 0.1s;
  z-index: 0;
`;

const Title = styled.h5`
  font-family: AdineuePRO, Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 30px;
  line-height: 28px;
  margin: 0;
  z-index: 2;
`;

const ModalContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

function BaseModal({ title, show, handleExit, children, wide }) {
  // eslint-disable-next-line no-unused-expressions
  show && (document.body.style.overflow = 'hidden');
  function handleClick() {
    // eslint-disable-next-line no-unused-expressions
    document.body.style.overflow = '';
    handleExit();
  }
  return (
    <Background show={show}>
      <ModalContent wide={wide} show={show}>
        <ModalContentWrapper>
          <Title>{title}</Title>
          {children}
        </ModalContentWrapper>
        <ExitButton handleClick={handleClick} />
      </ModalContent>
      <ClickableBackground show={show} onClick={handleClick} />
    </Background>
  );
}

BaseModal.defaultProps = {
  wide: false,
};

BaseModal.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  handleExit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  wide: PropTypes.bool,
};

export default BaseModal;
